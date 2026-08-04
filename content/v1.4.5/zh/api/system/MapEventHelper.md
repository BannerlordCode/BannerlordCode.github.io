---
title: "MapEventHelper"
description: "MapEventHelper 把战役地图遭遇中的海陆 raid 判定、攻城退出条件、遭遇方选择和藏身处队伍筛选集中为只读或窄范围副作用的规则入口。"
---
# MapEventHelper

**命名空间：** `Helpers`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public static class MapEventHelper`  
**基类：** 无（静态类）  
**源文件：** `bin/TaleWorlds.CampaignSystem/Helpers/MapEventHelper.cs`

## 一句话职责

它把 `MapEvent`、`MobileParty.MainParty` 和 `PlayerEncounter` 的即时状态整理成遭遇菜单与地图事件可以直接使用的判断结果，并把藏身处任务需要的 `FlattenedTroopRoster` 预筛选出来；它不创建或结束 `MapEvent`，也不替调用者提交战斗结果。

## 心智模型

`MapEventHelper` 是 Campaign 层的无状态规则集合。它不持有事件实例，输入通常来自当前的 [MapEvent](../../campaign/MapEvent)、玩家队伍或对话上下文，输出是“当前这一帧/这一阶段应该怎样显示或继续”的计算结果。`GetRaidContext` 和 `IsNavalRaid` 读取战斗双方的健康兵力、海上状态、村庄阵营和掠夺阶段；`CanMainPartyLeaveBattleCommonCondition`、`GetSallyOutDefenderLeader` 与 `GetEncounteredPartyBase` 服务于遭遇菜单；`OnConversationEnd` 则会设置 `PlayerEncounter.LeaveEncounter` 这个窄范围的流程标记；最后一个入口会从藏身处队伍中移除伤兵、英雄、首领和选出的高等级普通兵。

因此，先取得真实的当前事件，再调用与菜单或 Mission 阶段相匹配的入口。不要把这些结果缓存成永久外交或战斗状态，也不要把 `GetPriorityListForHideoutMission` 返回的 roster 当成可直接写回原队伍的副本。

## 何时使用，何时不要用

- **使用：** 需要判断一个有效村庄 `MapEvent` 是否符合海上 raid 条件，或需要同时得到 raider / 村庄一方的海陆兵力标志时，调用 `GetRaidContext` 或 `IsNavalRaid`。
- **使用：** 遭遇菜单已经处于玩家地图事件中，需要复用原版的攻城突围退出条件、遭遇方选择或 conversation-end 离开标记时，调用对应入口。
- **使用：** 藏身处 Mission 工厂需要按照 `BanditDensityModel` 计算首阶段人数，并从多个 `MobileParty` 的 roster 中排除伤兵与首领时，调用 `GetPriorityListForHideoutMission`。
- **不要用：** 通过 helper 创建 `MapEvent`、修改双方关系、杀死队伍或结算战斗。创建/结算应由 encounter、[Action](../../campaign-ext/StartBattleAction) 和战役事件链负责。
- **不要用：** 在没有 `Campaign.Current`、`MobileParty.MainParty.MapEvent`、当前聚落或当前对话的主菜单/后台线程中调用依赖这些上下文的入口。静态方法不会替你补齐缺失状态。
- **不要用：** 把 `IsNavalRaid` 当作“所有海战”的总开关；它只识别本源码定义的村庄 raid 条件，普通海战需要读取实际 `MapEvent` 类型与任务流程。

## 依赖关系

```text
Campaign.Current.Models.BanditDensityModel
  -> GetPriorityListForHideoutMission
MobileParty.MainParty.MapEvent / CurrentSettlement / SiegeEvent
  -> encounter menu rules
MapEvent + parties + PlayerEncounter.Current
  -> GetRaidContext -> IsNavalRaid
Campaign.Current.ConversationManager.ConversationEndOneShot
  -> OnConversationEnd -> PlayerEncounter.LeaveEncounter
```

| 依赖 | 作用与时机 |
| --- | --- |
| [MapEvent](../../campaign/MapEvent) | 提供攻击/防守双方、村庄 settlement、掠夺历史和各方 `MapEventParty`；raid 判定必须基于仍在活动中的事件。 |
| [MobileParty](../../campaign/MobileParty) 与 [PartyBase](../../campaign/PartyBase) | `MainParty`、当前聚落、健康人数、海上状态和遭遇方 leader 都从这些宿主读取；它们的引用不能跨事件生命周期缓存。 |
| [Campaign](../../campaign/Campaign) | `GetPriorityListForHideoutMission` 从 `Campaign.Current.Models.BanditDensityModel` 读取首阶段比例和人数上限。 |
| `PlayerEncounter` 与对话管理器 | `GetRaidContext` 检查玩家掠夺中断状态，`OnConversationEnd` 可能设置离开遭遇标记；这两个入口必须在对应遭遇/对话阶段使用。 |
| [TroopRoster](../../campaign/TroopRoster) 与 `FlattenedTroopRoster` | 藏身处筛选从每个 party roster 复制 troop 数据，再删除伤兵、英雄、首领和选中的普通兵；不会把结果自动写回原 roster。 |
| [CampaignEvents](../../campaign/CampaignEvents) 与 [StartBattleAction](../../campaign-ext/StartBattleAction) | helper 被战役 behavior、遭遇菜单和 MapEvent component 消费；它们负责事件注册、创建和结果提交，而不是 helper。 |

## 公开入口

### Raid 与海陆存在判定

| 入口 | 实际行为 | 使用边界 |
| --- | --- | --- |
| `GetRaidContext(MapEvent, out BattleSideEnum, out bool, out bool, out bool, out bool, out bool)` | 只接受发生在村庄的有效 `MapEvent`；按 raider 与村庄阵营的战争关系确定 raider side，再扫描双方健康的 mobile party，分别输出海上/陆上存在，并记录是否曾进入掠夺阶段。无效输入会返回 `false`，所有 out 值保持默认值。 | 需要完整的海陆标志和掠夺历史时使用；不要在调用失败后读取输出值做强判定。 |
| `IsNavalRaid(MapEvent)` | 复用 `GetRaidContext`，结合是否已掠夺、raider 是否只有海上存在、村庄一方是否有海陆存在来判断村庄 raid 是否属于海上 raid。 | 这是原版 raid 规则，不是通用船战检测；传入 `null`、非村庄事件或缺少阵营的事件时返回 `false`。 |

### 遭遇菜单与战斗阶段

| 入口 | 实际行为 | 使用边界 |
| --- | --- | --- |
| `GetSallyOutDefenderLeader()` | 依次从当前城镇的 garrison MapEvent、聚落 Party 的 MapEvent、或 besieger camp 中取得防守方 leader party。 | 只在玩家位于有有效 `CurrentSettlement` 和攻城数据的突围菜单中调用；源码没有为主菜单或普通地图状态提供完整空值保护。 |
| `CanMainPartyLeaveBattleCommonCondition()` | 攻方通常允许离开；玩家为守方时，若是非围攻方且已离开当前聚落才允许，否则返回 `false`。 | 只能作为当前 `MobileParty.MainParty.MapEvent` 的菜单可见性条件，不是强制结束战斗的 API。 |
| `GetEncounteredPartyBase(PartyBase, PartyBase)` | 若任一输入是 `PartyBase.MainParty`，返回另一方；否则防守方没有 MapEvent 时返回攻方，其他情况返回防守方。 | 用于从攻击/防守参数选出菜单要展示的遭遇方；不要把返回值理解为关系或战斗胜负。 |
| `OnConversationEnd()` | 当当前遭遇方存在且不再与玩家阵营交战时，将 `PlayerEncounter.LeaveEncounter` 设为 `true`。 | 作为 `ConversationEndOneShot` 的回调运行；它改变遭遇流程标记，不应在任意普通对话中手动调用。 |

### 藏身处队伍筛选

`GetPriorityListForHideoutMission(List<MobileParty>, out int firstPhaseTroopCount)` 先统计所有 party 的健康人数，并根据 `Campaign.Current.Models.BanditDensityModel` 计算首阶段人数。随后把各 party 的 roster 展平，移除伤兵，再移除英雄和文化的 `BanditBoss`；剩余普通兵中按等级选出第二阶段需要的数量并从返回 roster 删除。`out firstPhaseTroopCount` 是首阶段人数，返回值是经过筛选的临时 `FlattenedTroopRoster`，不是任何原 party 的所有权转移。

## 真实示例：从当前地图事件判断海上 raid

`MobileParty.MainParty.MapEvent` 是玩家当前遭遇的真实获取路径。调用者必须先接受事件可能为空，再把结果交给菜单或 UI；不要在没有事件时构造一个假的 `MapEvent`。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.MapEvents;
using TaleWorlds.CampaignSystem.Party;

public static bool PlayerIsInNavalRaid()
{
    MapEvent mapEvent = MobileParty.MainParty?.MapEvent;
    return mapEvent != null && MapEventHelper.IsNavalRaid(mapEvent);
}
```

如果需要显示双方具体海陆存在，应在同一个活动事件上调用 `GetRaidContext`，并只在返回 `true` 时使用 out 值：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.MapEvents;
using TaleWorlds.Core;

public static bool TryReadRaidSides(
    MapEvent mapEvent,
    out BattleSideEnum raiderSide,
    out bool raiderHasSea,
    out bool raiderHasLand,
    out bool villageHasSea,
    out bool villageHasLand,
    out bool wasLooting)
{
    return MapEventHelper.GetRaidContext(
        mapEvent,
        out raiderSide,
        out raiderHasSea,
        out raiderHasLand,
        out villageHasSea,
        out villageHasLand,
        out wasLooting);
}
```

## 真实示例：在原版对话结束边界注册离开标记

源码中的 Issues 和 Quest 行为把 `MapEventHelper.OnConversationEnd` 接到 `ConversationEndOneShot`。自定义战役 behavior 应在 Campaign 已创建且 conversation manager 可用时注册，并让回调自己根据 `PlayerEncounter` 决定是否离开：

```csharp
using TaleWorlds.CampaignSystem;

public static void RegisterEncounterConversationBoundary()
{
    if (Campaign.Current != null)
    {
        Campaign.Current.ConversationManager.ConversationEndOneShot += MapEventHelper.OnConversationEnd;
    }
}
```

## 风险与存档边界

- **MapEvent 生命周期：** `MapEvent`、`MapEventParty`、`SiegeEvent` 和 `PlayerEncounter` 都是当前遭遇的运行时上下文。不要把 helper 的输出或这些对象引用保存进 Campaign Behavior 后跨遭遇读取。
- **空值与阶段：** `GetRaidContext` 对无效村庄事件会安全返回 `false`，但 `GetSallyOutDefenderLeader` 假设当前聚落的 town/garrison、party MapEvent 或 siege camp 至少有一条有效链；错误阶段调用可能空引用。
- **海陆判定：** 只统计健康的 mobile party；没有健康成员的队伍不会贡献海上或陆上存在。不要拿 party 总人数或舰船列表自行替换源码条件。
- **副作用入口：** `OnConversationEnd` 会把 `PlayerEncounter.LeaveEncounter` 设为 `true`，可能改变玩家下一步菜单；它不是纯查询。若自定义流程不应离开遭遇，不要注册这个回调。
- **Roster 所有权：** `GetPriorityListForHideoutMission` 返回展平的临时筛选结果。不要把它当作原 `MobileParty.MemberRoster`，也不要在筛选后自行从原 party 扣兵；Mission 工厂负责后续使用。
- **模型与存档：** 藏身处首阶段数量来自当前 `BanditDensityModel`，会随模块替换和版本变化；这是一次计算输入，不是应写入存档的永久数字。持久化自定义状态应使用 Campaign Behavior 的稳定 `SyncData` 数据。

## 版本注记

本页按 v1.4.5 `Helpers/MapEventHelper.cs` 及 `MenuHelper`、`EncounterGameMenuBehavior`、`RaidEventComponent`、`FieldBattleEventComponent` 和多个 Issue/Quest 对话回调调用点撰写。跨版本使用时应重新核对海战判定、突围 leader 链、`BanditDensityModel` 字段和 `ConversationEndOneShot` 的生命周期。

## 导航

- ↑ 父级：[System API](../)
- ↔ 同级：[HeroHelper](../HeroHelper) · [MenuHelper](../MenuHelper) · [CharacterHelper](../CharacterHelper)
- 相关：[MapEvent](../../campaign/MapEvent) · [MobileParty](../../campaign/MobileParty) · [PartyBase](../../campaign/PartyBase) · [Campaign](../../campaign/Campaign) · [CampaignEvents](../../campaign/CampaignEvents) · [StartBattleAction](../../campaign-ext/StartBattleAction)
