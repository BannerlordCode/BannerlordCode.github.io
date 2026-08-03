---
title: "ShipDestroyDetail"
description: "标记舰船是因普通损失还是主动丢弃而销毁，并随 OnShipDestroyed 事件把原因传给 AI、Behavior 与模组监听器。"
---
# ShipDestroyDetail

**命名空间：** `TaleWorlds.CampaignSystem.Actions`

**模块：** `TaleWorlds.CampaignSystem`

**类型：** `public enum ShipDestroyDetail`

**声明类型：** `DestroyShipAction`

**基类：** `System.Enum`

**源文件：** `TaleWorlds.CampaignSystem/Actions/DestroyShipAction.cs`

## 核心定位

为舰船销毁事件保留“普通销毁”与“主动丢弃”两种业务原因，让状态相同的结果仍可被下游区分。

## 概述

`ShipDestroyDetail` 是 `DestroyShipAction` 内的公开嵌套枚举，没有自己的 `Apply` 方法。调用者选择父 Action 的公开入口，父 Action 捕获原船主、刷新海军视觉、把 `Ship.Owner` 设为 `null`，然后随 `OnShipDestroyed` 广播对应枚举值。`CaravansCampaignBehavior` 在裁剪多余船只时使用丢弃原因；遭遇结算与未被接收的战利船清理使用默认原因。

## 心智模型

销毁在这里不是释放一个 CLR 对象，而是让一艘可保存的 `Ship` 离开其 `PartyBase` 舰队。`Ship.Owner` setter 会从旧船主的内部船只列表移除该船并重置可用升级件；事件触发时，回调拿到的 `owner` 是操作前快照，而 `ship.Owner` 已经为 `null`。枚举只解释这次状态迁移的意图，不保存伤害值、攻击者或战斗上下文。

因此模组通常通过 `CampaignEvents.OnShipDestroyedEvent` **接收**此值，而不是自行构造或保存它。要产生事件，应调用 `DestroyShipAction.Apply` 或 `ApplyByDiscard`，不要直接给 `Ship.Owner` 赋空值。

## 实际入口与事件契约

父 Action 的私有 `ApplyInternal(Ship ship, ShipDestroyDetail detail)` 顺序固定：

```text
读取并保存原 Ship.Owner
  -> 原船主若为 MobileParty，SetNavalVisualAsDirty()
  -> ship.Owner = null（从原 PartyBase.Ships 移除）
  -> OnShipDestroyed(originalOwner, ship, detail)
```

公开入口与原因一一对应：

| 父 Action 入口 | 枚举值 | 副作用与官方时机 |
|---|---|---|
| `DestroyShipAction.Apply(Ship ship)` | `ApplyDefault`（数值 0） | 遭遇战后无法归属的战利船、普通损失或没有更具体原因的销毁。 |
| `DestroyShipAction.ApplyByDiscard(Ship ship)` | `ApplyByDiscard`（数值 1） | 舰队主动裁剪船只。1.4.5 `CaravansCampaignBehavior` 在船数超过理想值或船型不再合用时调用。 |

两个值对船本体执行相同的解除所有权流程；差别只在事件原因。当前 `AiPatrollingBehavior` 收到任何原因都会复查原船主：若领主部队正在海上巡逻却已失去航海能力，就改为 Hold。模组监听器可以进一步按原因区分经济统计、提示或任务进度。

## 依赖与上下游

| 依赖 | 关系 |
|---|---|
| [`DestroyShipAction`](../DestroyShipAction) | 唯一写入此原因的父 Action；先完成状态变化，再派发事件。 |
| [`Ship`](../Ship) | 被解除所有权的可保存对象；事件内仍可读取船体、名称等数据，但不能再从它反查原船主。 |
| [`PartyBase`](../../campaign/PartyBase) | 上游所有者与舰队容器；事件参数保留原引用，`PartyBase.Ships` 已不再包含该船。 |
| [`CampaignEvents`](../CampaignEvents) | 通过 `OnShipDestroyedEvent` 向 Behavior 与非序列化监听器传递原船主、船和原因。 |
| [`SetPartyAiAction`](../SetPartyAiAction) | 舰船移除可能令部队失去航海能力，后续 AI 会 Hold 或重新选择回到陆地/港口的目标。 |

## 不要直接改字段

直接执行 `ship.Owner = null` 虽会从舰队列表移除船，却不会先标记海军视觉 dirty，也不会广播 `OnShipDestroyed`。UI 可能继续显示旧舰队外观，AI 无法复查航海能力，任务和模组统计也看不到销毁。修改 `HitPoints` 到 0 同样不等于提交销毁；当游戏流程认定船已失效时，仍应选择父 Action 的正确入口。

## 生命周期、存档与坏档风险

- 父 Action 不检查 `ship == null`，也不检查 `IsInvulnerable`、`IsUsedByQuest` 或当前血量。调用者必须先确认这艘船允许被销毁，否则会直接崩溃或破坏任务资产。
- 不要对同一艘船重复 Apply。第二次事件的原船主将为 `null`，但事件仍会广播；监听器若按原船主访问 `MobileParty` 可能出错，统计也会重复。
- `Owner` 是 `Ship` 的可保存字段。绕开 Action 后立刻存档，会永久保存“船已脱离舰队”这个结果，却没有任何机会让只靠事件维护的模组状态、任务计数或 AI 缓存同步，形成逻辑坏档。
- 事件是同步调用，并发生在所有权解除后。监听器需要原船主时使用事件参数 `owner`；不要读取 `ship.Owner`，也不要在回调中再次销毁该船。
- 不要长期保存事件收到的 `Ship` 引用并假定它仍在 Campaign 舰队中。需要持久化销毁记录时保存自己的稳定标识与原因；加载后先验证对应对象是否仍可解析。
- 枚举当前隐式值为 0/1，但存档或网络协议不应只保存裸整数。未来增加原因时，旧模组会失去语义；至少保存枚举名并为未知值提供非破坏性兜底。

## 关键成员的消费时机

| 成员 | 何时读取 | 不应假定 |
|---|---|---|
| `ApplyDefault` | `OnShipDestroyedEvent` 回调中记录一般损失，或父 Action 选择普通销毁时。 | 不代表一定由战斗伤害造成，也不包含攻击者。 |
| `ApplyByDiscard` | 回调中区分舰队主动裁剪、经济性弃置或模组明确的丢弃命令。 | 不代表卖船或转移所有权；这两种意图应使用交易/所有权变更流程。 |

## 真实获取路径示例

下面的 `CampaignBehaviorBase` 从公开事件取得枚举，并从 `PartyBase.MainParty.Ships` 取得真实待丢弃船只。只有主部队至少保留一艘船时才执行，避免把最后的航海能力无意清空。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.Naval;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.SaveSystem;

public sealed class ShipLossTrackerBehavior : CampaignBehaviorBase
{
    private int _discardedPlayerShips;

    public override void RegisterEvents()
    {
        CampaignEvents.OnShipDestroyedEvent.AddNonSerializedListener(this, OnShipDestroyed);
    }

    public override void SyncData(IDataStore dataStore)
    {
        dataStore.SyncData("my_mod_discarded_player_ships", ref _discardedPlayerShips);
    }

    private void OnShipDestroyed(
        PartyBase owner,
        Ship ship,
        DestroyShipAction.ShipDestroyDetail detail)
    {
        if (owner == PartyBase.MainParty &&
            detail == DestroyShipAction.ShipDestroyDetail.ApplyByDiscard)
        {
            _discardedPlayerShips++;
        }
    }

    public static void DiscardLastExtraPlayerShip()
    {
        PartyBase owner = PartyBase.MainParty;
        if (owner.Ships.Count > 1)
        {
            DestroyShipAction.ApplyByDiscard(owner.Ships[owner.Ships.Count - 1]);
        }
    }
}
```

非序列化事件监听器应在每次 Campaign Behavior 初始化时注册；计数本身则由 `SyncData` 保存。两种生命周期不能混为一谈。

## 版本注记

v1.3.15 与已核对的 v1.4.5 核心程序集都把该枚举嵌套在 `DestroyShipAction` 中，成员、隐式数值、`ApplyInternal` 顺序和 `OnShipDestroyed` 参数一致。1.4.5 的实际调用点包括 `CaravansCampaignBehavior` 的丢弃清理、`EncounterGameMenuBehavior` 的普通销毁以及 `PlayerEncounter` 的未归属战利船清理；类型不属于 SandBox 模块。

## 导航

- ↑ Parent：[DestroyShipAction](../DestroyShipAction) · [战役扩展 API](./)
- ↔ Sibling：[Ship](../Ship) · [SetPartyAiAction](../SetPartyAiAction)
- Related：[PartyBase](../../campaign/PartyBase) · [CampaignEvents](../CampaignEvents) · [ChangeShipOwnerAction](../ChangeShipOwnerAction)
