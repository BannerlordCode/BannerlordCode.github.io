---
title: "CampaignFactionManagerBehaviour"
description: "战役行为：在派系结构变动（开新局/读档/新建王国/新建家族/家族易主）时，重建每个王国与家族的「交战对象」缓存 FactionsAtWarWith，供 AI 与目标选择快速查敌。"
---

# CampaignFactionManagerBehaviour

**命名空间：** TaleWorlds.CampaignSystem.CampaignBehaviors
**模块：** TaleWorlds.CampaignSystem
**类型：** `public class CampaignFactionManagerBehaviour : CampaignBehaviorBase`
**基类：** `CampaignBehaviorBase`
**源文件：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/CampaignFactionManagerBehaviour.cs`

## 概述

`CampaignFactionManagerBehaviour` 是常驻战役的「派系敌对缓存维护器」。每个 `Kingdom` 与 `Clan` 都持有一份 `_factionsAtWarWith` 缓存（`IFaction.FactionsAtWarWith`），用于在不反复遍历全部派系的情况下快速回答「我和谁处于交战」。当派系结构发生增减性变化——开局、读档、新王国诞生、新家族诞生、家族从一个王国转到另一个王国——既有的姿态（Stance）级重算不会覆盖这些「成员变了」的场景，于是本行为在相应事件触发时，对 `Kingdom.All` 与 `Clan.All` 中每一个未被消灭的派系重新调用 `UpdateFactionsAtWarWith()`，把整张敌对缓存表刷到一致状态。

## 心智模型

把它想成战役里一张「谁在和谁交战」的索引表的管理员，活动完全在**战役层**，不碰任何 Mission。

- **生命周期**：在 `SandBoxManager` 的 `InitializeGameStarter` 中经 `gameStarter.AddBehavior(new CampaignFactionManagerBehaviour())` 注册（源 `SandBoxManager.cs:156`），战役启动即常驻。它没有自己的存档字段，`SyncData` 为空实现——因为它维护的全是可由 `UpdateFactionsAtWarWith()` 重算的派生缓存，无需持久化。
- **取得方式**：它不是 Model，不能用 `Campaign.Current.Models` 取；要用 `Campaign.Current.GetCampaignBehavior<CampaignFactionManagerBehaviour>()` 拿到当前战役实例。跨战役保存该引用会失效（每个战役有独立实例）。
- **职责边界**：它只负责「结构性变动后刷新交战缓存」，不做外交决策。外交姿态的增删改由 `FactionManager`（`DeclareWar` / `SetNeutral` 等）直接就地重算；本行为是 `FactionManager` 难以覆盖的「成员增减」场景的安全网。
- **何时用**：你做 mod 时手动创建了王国/家族、或改了 `ChangeKingdomAction` 流程、让派系在既有姿态之外增减，需要确认敌对缓存已被刷新，或想挂到同样的事件上同步你自己的派生数据。
- **何时不要用**：不要直接调用它去「宣战/议和」——那应走 `FactionManager` / `DeclareWarAction`；不要试图读 `_factionsAtWarWith` 私有字段，请读公开的 `IFaction.FactionsAtWarWith`；不要在 Mission 层调用（它依赖 `Kingdom.All` / `Clan.All` 这种战役全局集合）。

## 何时使用 / 何时不要使用

- **用**：排查「为什么 AI 还把刚并入我王国的家族当敌人打」这类敌对缓存陈旧的 bug；在 `OnClanChangedKingdomEvent` 等结构性事件上挂自己的派生刷新；确认本行为已随战役正确注册。
- **不要用**：想改变外交关系——永远走 `FactionManager` / `ChangeKingdomAction` / `DeclareWarAction`，让缓存由官方路径自动重建，不要手动改 `IFaction` 的姿态或 `_factionsAtWarWith`；不要在读档流程早期（`OnGameLoaded` 之前、`Kingdom.All` 尚未建立时）假定缓存完整。

## 依赖图

- 上游：[CampaignBehaviorBase](../CampaignBehaviorBase)（基类与 `RegisterEvents` / `SyncData` 契约）、[CampaignGameStarter](../CampaignGameStarter)（`AddBehavior` 注册入口）、[CampaignEvents](../CampaignEvents)（订阅的 5 个事件）、[Campaign](../Campaign)（`GetCampaignBehavior` 取实例、`Kingdom.All` / `Clan.All`）。
- 下游 / 相关（本行为维护、其它系统消费）：[Kingdom](../Kingdom) 与 [Clan](../Clan)（`UpdateFactionsAtWarWith()` 的实现方，缓存就挂在它们身上）、[IFaction](../IFaction)（公开只读的 `FactionsAtWarWith`，AI/目标选择据此查敌）、[FactionManager](../FactionManager)（姿态级重算，与本行为是互补的两层）。

## 风险

- **刷新是 O(王国数 × 派系数) 全量重建**：`RefreshFactionsAtWarWith()` 会遍历 `Kingdom.All` 与 `Clan.All`，对每一个再做 `IsAtWarWith` 判定。派系很多（含强盗家族）时，每次结构性事件都会付出整表重算成本——不要在高频事件里再叠一层同样的全量刷新。
- **缓存可能陈旧**：本行为只在「新建/易主」这类事件触发刷新；若你绕过 `FactionManager` 与这些事件直接改派系关系，敌对缓存不会自动更新，下游 AI 会基于过期列表决策。修改外交务必走官方通道。
- **`SyncData` 为空，无坏档字段但也不容你加状态**：它不持久化任何字段，派生缓存每次可重算。若你 fork 它并加了需存档的字段，必须补 `SyncData` 登记，否则读档后状态丢失或错位。
- **事件订阅时机**：注册发生在 `InitializeGameStarter`，从新局/读档那一刻起监听就生效。任何 mod 若替换或移除了本行为，`FactionsAtWarWith` 将不再随派系增减刷新——务必保留其 `AddBehavior` 或自行补等价刷新。
- **跨战役实例失效**：`GetCampaignBehavior<CampaignFactionManagerBehaviour>()` 返回的是「当前」战役实例；把它存成静态字段跨战役复用会得到旧局对象，应在每次需要时现取。
- **读档早期集合可能未齐**：`OnGameLoaded` 里已调刷新，但若你的代码在更早于 `Kingdom.All` / `Clan.All` 建好之前就读 `FactionsAtWarWith`，可能拿到空/局部缓存。

## 成员说明

### RegisterEvents() — 订阅五个结构性事件
战役启动时由框架调用，注册以下非序列化监听：
- `OnNewGameCreatedEvent` → `OnNewGameCreated`（新局建立后刷全表）
- `OnGameLoadedEvent` → `OnGameLoaded`（读档后刷全表）
- `KingdomCreatedEvent` → `OnKingdomCreated`（新王国诞生后刷全表）
- `OnClanCreatedEvent` → `OnClanCreated`（新家族诞生后刷全表）
- `OnClanChangedKingdomEvent` → `OnClanChangedKingdomEvent`（家族易主后刷全表）

派生或 fork 时漏掉任一监听，对应场景下的敌对缓存就会陈旧。

### RefreshFactionsAtWarWith() — 全量重建敌对缓存（私有静态）
真正的「重算」逻辑。对 `Kingdom.All` 与 `Clan.All` 中每个 `!IsEliminated` 的派系，调用其 `UpdateFactionsAtWarWith()`：该方法先 `Clear()` 掉内部 `_factionsAtWarWith`，再遍历全部王国与家族，把 `IsAtWarWith(item)` 为真且未消灭者加入缓存。换言之，它把「谁和谁交战」的派生索引整体重算一遍。

### OnNewGameCreated / OnGameLoaded(CampaignGameStarter) — 开局与读档触发
分别在 `OnNewGameCreatedEvent`、`OnGameLoadedEvent` 回调中调用 `RefreshFactionsAtWarWith()`，保证新局或读档后第一帧起敌对缓存即为一致状态。

### OnKingdomCreated / OnClanCreated(…) — 成员增减触发
新王国或新家族加入世界时调用 `RefreshFactionsAtWarWith()`。注意：仅新增成员本身不会让 `FactionManager` 的姿态级重算覆盖「已有派系要反查包含新成员」，所以必须全表刷新。

### OnClanChangedKingdomEvent(Clan, Kingdom, Kingdom, ChangeKingdomAction.ChangeKingdomActionDetail, bool) — 易主触发
家族从 `oldKingdom` 转入 `newKingdom` 时调用 `RefreshFactionsAtWarWith()`。`ChangeKingdomActionDetail` 与最后的 `bool arg5` 本行为未使用——它只关心「成员归属变了」这一事实，需要重算所有派系的敌对索引。

### SyncData(IDataStore) — 空实现（无存档字段）
什么也不持久化。因为 `FactionsAtWarWith` 是可由 `UpdateFactionsAtWarWith()` 完全重算的派生缓存，本行为无需、也没有 `[SaveableField]`。若你扩展它并加入需跨档保留的状态，必须在此登记，否则会出现坏档点。

## 示例

读取本行为所维护的「交战缓存」——它才是 mod 应消费的公开接口（不要碰私有 `_factionsAtWarWith`）：

```csharp
CampaignFactionManagerBehaviour factionManager =
    Campaign.Current.GetCampaignBehavior<CampaignFactionManagerBehaviour>();
if (factionManager != null)
{
    // 玩家家族当前的敌对派系列表，已由本行为在派系结构变动时刷新
    foreach (IFaction enemy in Clan.PlayerClan.FactionsAtWarWith)
    {
        // 用刷新后的敌对列表做提示 / AI 目标评估
    }
}
```

在同样的「家族易主」事件上挂你自己的派生刷新（本行为已先把全表刷好，你的回调拿到的是一致状态）：

```csharp
CampaignEvents.OnClanChangedKingdomEvent.AddNonSerializedListener(
    this, (Clan clan, Kingdom oldKingdom, Kingdom newKingdom,
           ChangeKingdomAction.ChangeKingdomActionDetail detail, bool arg5) =>
    {
        // 此时 CampaignFactionManagerBehaviour 已重建所有王国/家族的 FactionsAtWarWith
        Kingdom playerKingdom = Clan.PlayerClan.Kingdom;
        if (playerKingdom != null)
        {
            foreach (IFaction enemy in playerKingdom.FactionsAtWarWith)
            {
                // 基于最新敌对索引同步你自己的 mod 状态
            }
        }
    });
```

## 参见

- ↑ 父级/基类：[CampaignBehaviorBase](../CampaignBehaviorBase)（所有 CampaignBehavior 的注册与存读档契约范本）
- ↔ 相关系统：[FactionManager](../FactionManager)（外交姿态级重算，与本行为互补的两层缓存维护）、[Kingdom](../Kingdom) 与 [Clan](../Clan)（`UpdateFactionsAtWarWith()` 的实现方）、[IFaction](../IFaction)（公开只读的 `FactionsAtWarWith`）、[CampaignEvents](../CampaignEvents)（本行为订阅的五个事件）、[CampaignGameStarter](../CampaignGameStarter)（`AddBehavior` 注册入口）
