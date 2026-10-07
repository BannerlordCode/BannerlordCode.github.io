---
title: "Settlement"
description: "战役地图上定居点（城镇、城堡、村庄、藏身处）的运行时对象，聚合驻军、城墙、围攻与归属状态。"
---
# Settlement

**命名空间：** `TaleWorlds.CampaignSystem.Settlements`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public sealed class Settlement : MBObjectBase, ILocatable<Settlement>, IMapPoint, ITrackableCampaignObject, ITrackableBase, ISiegeEventSide, IRandomOwner, ISettlementDataHolder`
**基类：** `MBObjectBase`
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/Settlements/Settlement.cs`（声明见第 27 行）

## 概述

`Settlement` 是战役层每个定居点（城镇、城堡、村庄、藏身处）的运行时代表，位于 `TaleWorlds.CampaignSystem` 模块。它向下聚合 `PartyBase`（地图上的实体）、`Town`/`Village`/`Hideout` 组件与驻军，向上被 `Clan`、`Kingdom`、`MobileParty` 与 `MapEvent` 引用。它同时是 `MBObjectBase`（可存档、可被 `MBObjectManager` 查找）与 `ISiegeEventSide`（围攻战中的防守方一侧），也是百科链接与地图定位器的一员。

## 心智模型

把 `Settlement` 想成"地图上一个有围墙的据点卡片"：它自己不存军队细节，真正的部队在 `Party`（`PartyBase`）里，经济与繁荣在 `Town`/`Village` 组件里，归属在 `OwnerClan`。状态几乎全是缓存加事件驱动：`Parties`、`Notables`、`BoundVillages` 都是缓存列表，由内部 `Add`/`Remove` 方法维护；`IsUnderSiege`、`IsUnderRaid` 只是 `SiegeEvent`/`MapEvent` 的快捷判断。它不负责寻路、不负责战斗模拟、不负责存档格式（那些在 `PartyBase`、`MapEvent`、`Deserialize` 里）。实例由存档或构造函数创建，`CurrentSettlement` 只是"玩家当前所在的那个"快捷方式，可能为 null。

## 怎么用

拿实例的常见途径：`Settlement.All` 遍历全部；`Settlement.Find(id)` 按 `StringId` 取；`Settlement.CurrentSettlement` 取玩家当前定居点；`MobileParty.CurrentSettlement` 取队伍所在。

坑位提醒：

- `Settlement.CurrentSettlement` 在玩家被俘虏且俘虏方是定居点时，返回的是俘虏方的定居点，而不是主队伍位置（Settlement.cs:952）。
- `Owner` 是 `OwnerClan.Leader` 的快捷方式，无主定居点（`OwnerClan` 为 null）时直接解引用会空引用（Settlement.cs:249）。
- `Militia` 的 setter 在值超出 [-1,1] 时会直接生成或转移民兵队伍，不是简单赋值（Settlement.cs:395）。
- `IsVisible` 的 setter 会通知 `Party.OnVisibilityChanged`（Settlement.cs:282），批量改可见性会触发地图刷新。
- `LastAttackerParty` 的 setter 会清掉其他定居点上的同一攻击者并刷新 `LastThreatTime`（Settlement.cs:671）。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `Party` | 定居点在地图上的 `PartyBase` 实体；部队、物品、可见性都挂在它上面，绝大多数交互先取 `Party`。Settlement.cs:227 |
| `BribePaid` | 已付贿赂额，影响 AI 与事件判定。Settlement.cs:233 |
| `SiegeEvent` | 当前围攻事件；非 null 即 `IsUnderSiege` 为 true，围攻结束后由 `FinalizeSiegeEvent` 清空。Settlement.cs:239 |
| `IsActive` | 是否参与战役模拟；被摧毁或废弃的定居点置 false。Settlement.cs:245 |
| `Owner` | `OwnerClan.Leader` 的快捷方式；无主时为 null，直接解引用会空引用。Settlement.cs:249 |
| `Banner` | 旗帜：自定义 > 组件默认 > 所属 clan 旗帜，可能为 null。Settlement.cs:259 |
| `IsVisible` / `IsInspected` | 地图可见性与是否被玩家侦察；`IsVisible` 的 setter 会通知 `Party.OnVisibilityChanged`。Settlement.cs:282, Settlement.cs:302 |
| `WallSectionCount` | 城墙段数；非防御工事为 0，否则为 2。Settlement.cs:306 |
| `NearbyLandThreatIntensity` / `NearbyNavalThreatIntensity` / `NearbyLandAllyIntensity` / `NearbyNavalAllyIntensity` | 附近陆地/海上威胁与友军强度，供 AI 与玩家提示用。Settlement.cs:337, Settlement.cs:343, Settlement.cs:349, Settlement.cs:355 |
| `RandomValue` | 每 tick 刷新的随机数，供决策与事件随机化。Settlement.cs:374 |
| `GetPosition2D` / `Position` / `GetPositionAsVec3` / `GetPosition` | 位置访问器；`Position` 是 `CampaignVec2`，`GetPosition` 返回 `Vec3`。Settlement.cs:384, Settlement.cs:558, Settlement.cs:572, Settlement.cs:1431 |
| `Militia` | 民兵数 = 民兵队伍人数 + 预备民兵；setter 在超界时生成或转移民兵队伍。Settlement.cs:395 |
| `SettlementWallSectionHitPointsRatioList` / `SettlementTotalWallHitPoints` / `MaxHitPointsOfOneWallSection` | 城墙伤害模型；总伤害 = 各段比例之和 × 单段上限。Settlement.cs:423, Settlement.cs:433, Settlement.cs:448 |
| `SetWallSectionHitPointsRatioAtIndex` | 设置单段血量比例（0–1），段从 0 恢复时标记视觉脏。Settlement.cs:461 |
| `SettlementHitPoints` / `MaxWallHitPoints` | 定居点本体血量与城墙上限（由 `WallHitPointCalculationModel` 算）。Settlement.cs:475, Settlement.cs:479 |
| `Parties` / `PatrolParty` / `HeroesWithoutParty` / `Notables` | 缓存列表：当前在城内的队伍、巡逻队、无队伍英雄、贵族。Settlement.cs:489, Settlement.cs:500, Settlement.cs:504, Settlement.cs:514 |
| `SettlementComponent` | 具体组件（`Town`/`Village`/`Hideout`），决定定居点类型与玩法。Settlement.cs:526 |
| `GatePosition` / `PortPosition` / `SetPortPosition` / `HasPort` | 城门与港口坐标；`SetPortPosition` 同时更新 `HasPort`。Settlement.cs:531, Settlement.cs:536, Settlement.cs:539, Settlement.cs:580 |
| `CurrentNavigationFace` | 当前导航面（`Position.Face`），供寻路用。Settlement.cs:547 |
| `MapFaction` | 地图阵营，取自 `SettlementComponent`；组件为 null 时为 null。Settlement.cs:584 |
| `Name` / `EncyclopediaText` / `EncyclopediaLink` / `EncyclopediaLinkWithName` | 名称与百科链接；`Name` 优先返回 `Party.CustomName`。Settlement.cs:599, Settlement.cs:614, Settlement.cs:618, Settlement.cs:628 |
| `GarrisonWagePaymentLimit` / `SetGarrisonWagePaymentLimit` | 驻军工资支付上限。Settlement.cs:640, Settlement.cs:643 |
| `ItemRoster` | 仓库物品，即 `Party.ItemRoster`。Settlement.cs:650 |
| `BoundVillages` | 附属村庄列表（缓存）。Settlement.cs:660 |
| `LastAttackerParty` / `LastThreatTime` | 最后攻击者；setter 会清掉其他定居点的同一攻击者并刷新 `LastThreatTime`。Settlement.cs:671, Settlement.cs:705 |
| `SiegeEngines` / `SiegeEngineMissiles` | 攻城器械容器与在飞弹药。Settlement.cs:711, Settlement.cs:715 |
| `BattleSide` / `NumberOfTroopsKilledOnSide` / `SiegeStrategy` | 围攻战中的防守方数据；`BattleSide` 恒为 `Defender`。Settlement.cs:725, Settlement.cs:737, Settlement.cs:743 |
| `GetInvolvedPartiesForEventType` / `GetNextInvolvedPartyForEventType` / `HasInvolvedPartyForEventType` | 围攻/raid 防守方队伍枚举（经 `EncounterModel`）。Settlement.cs:746, Settlement.cs:752, Settlement.cs:758 |
| `Alleys` | 巷道列表（巷战用）。Settlement.cs:787 |
| `IsTown` / `IsCastle` / `IsFortification` / `IsVillage` / `IsHideout` | 类型判断；`IsFortification` = 城镇或城堡。Settlement.cs:804, Settlement.cs:814, Settlement.cs:824, Settlement.cs:834, Settlement.cs:844 |
| `IsStarving` / `IsRaided` / `InRebelliousState` / `IsUnderRaid` / `IsUnderSiege` | 状态快捷判断，分别读 `Town.FoodStocks`、`Village.VillageState`、`Town.InRebelliousState`、`Party.MapEvent`、`SiegeEvent`。Settlement.cs:854, Settlement.cs:864, Settlement.cs:874, Settlement.cs:884, Settlement.cs:894 |
| `IsUnderRebellionAttack()` | 是否正被叛军攻城（检查攻城方领袖是否为 rebel clan）。Settlement.cs:903 |
| 构造函数 | 无参构造用于存档反序列化；带参构造建 `PartyBase` 并初始化缓存。Settlement.cs:917, Settlement.cs:923 |
| `GetSettlementValueForEnemyHero` / `GetSettlementValueForFaction` / `GetValue` | 价值评估；`GetValue` 按类型给基础价（村庄 10 万/城堡 25 万/城镇 75 万）并按距离衰减。Settlement.cs:939, Settlement.cs:1034, Settlement.cs:993 |
| `LocationComplex` | 所在位置复合体（地图区域）。Settlement.cs:948 |
| `CurrentSettlement`（static） | 玩家当前定居点：俘虏 > 遭遇 > 主队伍；可能为 null。Settlement.cs:952 |
| `IsSettlementBusy` / `GetSettlementBusynessPriority` | 忙碌检查，经 `CampaignEventDispatcher` 询问各 behavior。Settlement.cs:973, Settlement.cs:979, Settlement.cs:985 |
| `GetName` / `ToString` | 名称访问器。Settlement.cs:1028, Settlement.cs:1040 |
| `OnPartyInteraction` | 队伍接近定居点时触发遭遇战或围攻。Settlement.cs:1086 |
| `Deserialize` | 存档反序列化入口。Settlement.cs:1146 |
| `OnFinishLoadState` / `OnGameCreated` / `OnSessionStart` | 加载、创建、会话开始回调。Settlement.cs:1254, Settlement.cs:1270, Settlement.cs:1285 |
| `CheckPositionsForMapChangeAndUpdateIfNeeded` | 地图变更后重排城内队伍与事件位置。Settlement.cs:1306 |
| `Find` / `FindFirst` / `FindAll` / `All` / `GetFirst`（static） | 全局查找；`All` 即 `Campaign.Current.Settlements`。Settlement.cs:1370, Settlement.cs:1376, Settlement.cs:1382, Settlement.cs:1389, Settlement.cs:1399 |
| `StartFindingLocatablesAroundPosition` / `FindNextLocatable`（static） | 基于定位器的半径搜索。Settlement.cs:1408, Settlement.cs:1414 |
| `OnPlayerEncounterFinish` | 玩家遭遇结束后清理 `LocationComplex` 临时角色。Settlement.cs:1420 |
| `CurrentSiegeState` / `SetNextSiegeState` / `ResetSiegeState` | 围攻阶段（城墙 → 领主大厅）；`SetNextSiegeState` 在 `InTheLordsHall` 时不再推进。Settlement.cs:1458, Settlement.cs:1483, Settlement.cs:1493 |
| `OwnerClan` | 所属 clan：村庄取 `Village.Bound.OwnerClan`，城镇取 `Town.OwnerClan`，藏身处取 `Hideout.MapFaction as Clan`；可能为 null。Settlement.cs:1462 |
| `AddGarrisonParty` | 创建驻军队伍。Settlement.cs:1499 |
| `SetSiegeStrategy` / `InitializeSiegeEventSide` / `OnTroopsKilledOnSide` / `AddSiegeEngineMissile` / `RemoveDeprecatedMissiles` / `GetAttackTarget` / `FinalizeSiegeEvent` | 围攻战防守方逻辑。Settlement.cs:1637, Settlement.cs:1643, Settlement.cs:1654, Settlement.cs:1660, Settlement.cs:1666, Settlement.cs:1684, Settlement.cs:1704 |
| `HasVisited` / `LastVisitTimeOfOwner` | 玩家访问记录（可存档字段）。Settlement.cs:1750, Settlement.cs:1754 |
| `Culture` / `Town` / `Village` / `Hideout` / `MilitiaPartyComponent` / `Stash` | 公开字段：文化、具体组件、民兵组件、隐藏 stash。Settlement.cs:1796, Settlement.cs:1814, Settlement.cs:1817, Settlement.cs:1820, Settlement.cs:1824, Settlement.cs:1828 |
| `SiegeState`（enum） | `OnTheWalls` / `InTheLordsHall` / `Invalid`。Settlement.cs:1831 |

## 真实示例

```csharp
// 遍历所有城镇，找出正在被围攻的并推进围攻阶段
foreach (Settlement settlement in Settlement.All)
{
    if (settlement.IsFortification && settlement.IsUnderSiege)
    {
        settlement.SetNextSiegeState();
        settlement.OnTroopsKilledOnSide(0);
    }
}
```

## 参见

- [PartyBase](../PartyBase) — 定居点在地图上的队伍实体
- [MobileParty](../MobileParty) — 接近定居点并触发遭遇的队伍
- [Hero](../Hero) — 定居点的所有者与贵族
- [Campaign](../Campaign) — 提供 `Settlements` 集合与当前战役上下文
- [MBObjectBase](../../campaign-ext/MBObjectBase) — 存档对象基类

## 导航
- ↑ [campaign 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
