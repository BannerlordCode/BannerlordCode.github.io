---
title: "MobileParty"
description: "战役地图上一切移动实体的总控类：位置与导航、移动指令、队伍组件、名册与物品、士气食物工资、军队与攻城挂载，以及 AI 行为目标。"
---
# MobileParty

**命名空间：** `TaleWorlds.CampaignSystem.Party`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public sealed class MobileParty`
**基类：** `CampaignObjectBase`，实现 `ILocatable<MobileParty>`、`IMapPoint`、`ITrackableCampaignObject`、`ITrackableBase`、`IRandomOwner`
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/Party/MobileParty.cs`（声明见第 26 行）

## 概述
`MobileParty` 是战役地图上所有可移动实体的总控类——玩家部队、领主部队、商队、村民、匪徒、巡逻队、驻军、民兵等都以它为宿主。它把「地图上的一个点」这件事拆成几层职责：位置与导航（`Position`、`Path`、`SetMove*` 指令族）、队伍组件（`PartyComponent` 决定阵营类型与工资上限）、名册与物品（`MemberRoster`/`PrisonRoster`/`ItemRoster` 转发到 `PartyBase`）、状态数值（士气、食物、工资、战斗力）、以及外部挂载（`Army` 军队、`BesiegerCamp` 攻城营、`AttachedTo` 跟随关系）。它不负责具体寻路算法（在 `MobilePartyAi`）也不负责名册内部结构（在 `PartyBase`/`TroopRoster`），它是这些子系统的「门面 + 状态机」。

## 心智模型
把它想成「地图上一支部队的驾驶舱」：`MobileParty` 是仪表盘和操纵杆，`PartyBase` 是底盘（名册、物品、阵营数据），`MobilePartyAi` 是自动驾驶仪（寻路、行为决策），`PartyComponent` 是发动机型号（决定这支部队是商队还是匪徒、工资上限多少、领袖是谁）。驾驶舱接收两类输入：玩家/AI 下达的 `SetMove*` 指令（目标点、目标聚落、目标部队），以及每帧的 `Tick` 更新（位置推进、状态重算）。状态来源上，`Position`/`CurrentSettlement`/`IsCurrentlyAtSea` 是地图层状态；`Morale`/`Food`/`TotalWage` 是数值层状态，由 Campaign 模型（`Campaign.Current.Models.*`）计算并缓存（`[CachedData]` 属性带版本号缓存）；`IsActive`/`IsVisible`/`IsDisbanding` 是生命周期状态。它**不负责**：具体寻路（`MobilePartyAi`）、名册增删内部逻辑（`PartyBase`/`TroopRoster`）、战斗内行为（`MapEvent`/`PartyBase.Side`）。

## 怎么用
### 怎么拿到实例
- 玩家部队：`MobileParty.MainParty`（MobileParty.cs:427）。
- 遍历所有部队：`MobileParty.All`（MobileParty.cs:437）；按类型筛选用 `AllLordParties`/`AllCaravanParties`/`AllBanditParties` 等（MobileParty.cs:447-527）。
- 新建部队：`MobileParty.CreateParty(stringId, component)`（MobileParty.cs:4905），传入 `PartyComponent` 子类实例。
- 从聚落/军队反查：`Settlement.Parties`、`Army.Parties`。

### 坑
- `SetMove*` 指令族（如 `SetMoveGoToPoint`，MobileParty.cs:4705）会先调 `ResetAllMovementParameters()` 清空旧目标，再设 `DefaultBehavior`；同帧内连续调用多个 `SetMove*` 只有最后一个生效。
- `PartyTradeGold` 的 getter/setter 在 `IsLordParty && LeaderHero != null` 时直接转发到 `LeaderHero.Gold`（MobileParty.cs:895），不是独立字段——改它会改英雄金币。
- `MapFaction`（MobileParty.cs:3595）的判定链很长：ActualClan → Owner → HomeSettlement → LeaderHero，且对 militia/garrison/villager/patrol 有特殊分支；不要假设它等于 `LeaderHero.MapFaction`。
- `Speed`（MobileParty.cs:804）在 `IsActive == false` 时触发 `Debug.FailedAssert` 并返回 0；访问前确认部队处于激活状态。
- `CreateParty`（MobileParty.cs:4905）内部会调 `component.Create` 和 `component.Initialize`，传入的 component 必须已正确构造，否则部队处于半初始化状态。

## 关键成员
| 成员 | 用途 |
| --- | --- |
| `MainParty` | 静态属性，玩家主部队，等价于 `Campaign.Current.MainParty`（MobileParty.cs:427）。 |
| `All` | 静态属性，所有移动部队的只读列表（MobileParty.cs:437）。 |
| `AllLordParties` / `AllCaravanParties` / `AllBanditParties` 等 | 静态属性，按队伍组件类型筛选的部队列表（MobileParty.cs:447-527）。 |
| `Name` | 部队显示名，优先 `Party.CustomName`，其次 `PartyComponent.Name`，都无则断言（MobileParty.cs:557）。 |
| `Party` | 底层 `PartyBase`，承载名册/物品/阵营数据；`MobileParty` 是它的地图层门面（MobileParty.cs:744）。 |
| `LeaderHero` | 部队领袖英雄，来自 `PartyComponent.Leader`；无组件时为 null（MobileParty.cs:1569）。 |
| `Owner` | 部队归属英雄，来自 `PartyComponent.PartyOwner`（MobileParty.cs:1620）。 |
| `EffectiveScout` / `EffectiveQuartermaster` / `EffectiveEngineer` / `EffectiveSurgeon` / `EffectiveFirstMate` / `EffectiveNavigator` | 有效岗位英雄：岗位英雄已离队时回退到 `LeaderHero`（MobileParty.cs:1635-1705）。 |
| `SetPartyScout(Hero)` 等 `SetParty*` | 设置岗位英雄；若英雄岗位数超限则先移除一个旧岗位（MobileParty.cs:1718-1768）。 |
| `Position` | 地图上的 `CampaignVec2` 坐标；setter 会触发可见性重算与版本号更新（MobileParty.cs:3260）。 |
| `CurrentSettlement` | 当前所处聚落；setter 会处理进出聚落的挂载/卸载与位置修正（MobileParty.cs:1241）。 |
| `HomeSettlement` | 家乡聚落，优先 `SetCustomHomeSettlement` 设置值，其次 `PartyComponent.HomeSettlement`（MobileParty.cs:1291）。 |
| `IsCurrentlyAtSea` | 是否在海航状态；setter 会级联到 `AttachedParties` 并触发事件（MobileParty.cs:978）。 |
| `SetSailAtPosition` / `DisembarkToPosition` | 强制进入/退出海航状态并设置位置（MobileParty.cs:1112、1126）。 |
| `IsInRaftState` | 是否处于木筏状态（无船海航）；进入时重置 Anchor（MobileParty.cs:755）。 |
| `HasLandNavigationCapability` / `SetLandNavigationAccess` | 陆地导航能力开关，默认 true（MobileParty.cs:600、603）。 |
| `HasNavalNavigationCapability` | 是否可海航，由 `PartyNavigationModel` 计算（MobileParty.cs:620）。 |
| `NavigationCapability` | 导航能力位掩码：`Default`（陆）/ `Naval`（海）/ `All`（MobileParty.cs:958）。 |
| `SetMoveModeHold()` | 停止移动：重置所有移动参数，`DefaultBehavior = Hold`（MobileParty.cs:4660）。 |
| `SetMoveGoToPoint(CampaignVec2, NavigationType)` | 移动到指定地图点（MobileParty.cs:4705）。 |
| `SetMoveGoToSettlement(Settlement, NavigationType, bool)` | 移动到聚落（可指定港口）（MobileParty.cs:4693）。 |
| `SetMoveEngageParty(MobileParty, NavigationType)` | 追击目标部队（MobileParty.cs:4673）。 |
| `SetMoveBesiegeSettlement(Settlement, NavigationType)` | 前往围攻聚落；若已在围攻其他聚落则先退出（MobileParty.cs:4782）。 |
| `SetMoveRaidSettlement` / `SetMoveDefendSettlement` / `SetMoveEscortParty` / `SetMovePatrolAroundPoint` / `SetMovePatrolAroundSettlement` / `SetMoveGoAroundParty` / `SetMoveToNearestLand` / `SetMoveGoToInteractablePoint` | 其余移动指令族，各自设置对应的 `AiBehavior`（MobileParty.cs:4673-4795）。 |
| `DefaultBehavior` | AI 默认行为枚举（`AiBehavior`），`SetMove*` 的落脚点（MobileParty.cs:1474）。 |
| `ShortTermBehavior` | 当前短期行为，由 AI 每帧重算（MobileParty.cs:884）。 |
| `IsFleeing()` | 是否正在逃跑（MobileParty.cs:3134）。 |
| `IsMoving` | 是否正在移动（MobileParty.cs:4257）。 |
| `Speed` / `SpeedExplained` | 当前速度 / 带解释的速度（含模型修正项）（MobileParty.cs:804、819）。 |
| `Army` | 所属军队；setter 处理加入/离开军队的事件与版本号（MobileParty.cs:1407）。 |
| `AttachedTo` | 跟随的目标部队；setter 处理挂载/卸载的级联（MobileParty.cs:1318）。 |
| `AttachedParties` | 跟随本部队的部队列表（MobileParty.cs:588）。 |
| `BesiegerCamp` | 所属攻城营；setter 处理加入/退出攻城的内部逻辑（MobileParty.cs:1441）。 |
| `SiegeEvent` | 当前参与的攻城事件，来自 `BesiegerCamp.SiegeEvent`（MobileParty.cs:3666）。 |
| `BesiegedSettlement` | 正在围攻的聚落（MobileParty.cs:3717）。 |
| `MemberRoster` / `PrisonRoster` / `ItemRoster` | 名册与物品栏，转发到 `Party`（MobileParty.cs:3422、3432、3557）。 |
| `AddElementToMemberRoster(CharacterObject, int, bool)` | 向成员名册添加兵种，转发到 `Party.AddElementToMemberRoster`（MobileParty.cs:3582）。 |
| `AddPrisoner(CharacterObject, int)` | 向俘虏名册添加兵种（MobileParty.cs:3588）。 |
| `Morale` / `MoraleExplained` | 当前士气 / 带解释的士气（MobileParty.cs:2026、2092）。 |
| `Food` / `FoodChange` / `BaseFoodChange` | 食物量 / 食物变化率 / 基础食物变化率（MobileParty.cs:3681、2037、2048）。 |
| `TotalWage` / `TotalWageExplained` | 总工资 / 带解释的工资（MobileParty.cs:3342、3352）。 |
| `PaymentLimit` | 工资上限，来自 `PartyComponent.WagePaymentLimit`（MobileParty.cs:636）。 |
| `HasLimitedWage()` / `IsWageLimitExceeded()` / `GetAvailableWageBudget()` / `SetWagePaymentLimit(int)` | 工资限制相关方法（MobileParty.cs:678、690、684、696）。 |
| `IsDisorganized` / `SetDisorganized(bool)` / `DisorganizedUntilTime` | 溃散状态与溃散截止时间（MobileParty.cs:862、3044、777）。 |
| `IsVisible` / `IsInspected` / `IsSpotted()` | 可见性 / 被侦察 / 被发现（MobileParty.cs:3232、3306、3566）。 |
| `ShouldBeIgnored` | 是否应被其他 AI 忽略（MobileParty.cs:4287）。 |
| `IgnoreForHours(float)` / `IgnoreByOtherPartiesTill(CampaignTime)` | 临时忽略本部队（MobileParty.cs:3319、3325）。 |
| `MapFaction` | 地图阵营，判定链见坑节（MobileParty.cs:3595）。 |
| `ActualClan` | 实际所属 clan（MobileParty.cs:2059）。 |
| `PartyComponent` / `SetPartyComponent` | 队伍组件；setter 处理旧组件 `Finish` 与新组件 `Create`/`Initialize`（MobileParty.cs:5000、5009）。 |
| `IsLordParty` / `IsBandit` / `IsCaravan` / `IsVillager` / `IsMilitia` / `IsGarrison` / `IsPatrolParty` / `IsCustomParty` / `IsBanditBossParty` | 队伍类型标志，由 `UpdatePartyComponentFlags` 从组件类型推导（MobileParty.cs:5037-5096）。 |
| `AvoidHostileActions` | 是否避免敌对行为，来自组件（MobileParty.cs:5106）。 |
| `HasPerk(PerkObject, bool)` | 部队是否拥有某 perk，按 perk 主/副角色查对应英雄（MobileParty.cs:3782）。 |
| `GetTotalLandStrengthWithFollowers(bool)` | 陆军总战力（含跟随者）（MobileParty.cs:3731）。 |
| `GetNumDaysForFoodToLast()` | 食物可维持天数（MobileParty.cs:4132）。 |
| `PartySizeRatio` | 部队规模比例（MobileParty.cs:4163）。 |
| `SeeingRange` / `SeeingRangeExplanation` | 视野范围 / 带解释的视野（MobileParty.cs:3707、1956）。 |
| `InventoryCapacity` / `TotalWeightCarried` | 物品栏容量 / 当前负重（MobileParty.cs:1966、1986）。 |
| `Banner` | 旗帜，优先自定义旗帜，其次组件默认旗帜，最后阵营旗帜（MobileParty.cs:651）。 |
| `Aggressiveness` | 攻击性数值（MobileParty.cs:632）。 |
| `IsActive` / `IsDisbanding` / `ShouldJoinPlayerBattles` | 生命周期与战斗参与标志（MobileParty.cs:750、944、938）。 |
| `IsCurrentlyUsedByAQuest` / `SetPartyUsedByQuest(bool)` | 是否被任务占用（MobileParty.cs:872、3294）。 |
| `ChangePartyLeader(Hero)` / `RemovePartyLeader()` | 更换/移除部队领袖（MobileParty.cs:2107、2158）。 |
| `SetHeroPartyRole` / `GetHeroPartyRoles` / `RemovePartyRoleOfHero` / `RemoveAllPartyRolesOfHero` / `GetRoleHolder` / `GetEffectiveRoleHolder` | 英雄岗位管理族（MobileParty.cs:3891-4089）。 |
| `InitializeMobilePartyAtPosition` / `InitializeMobilePartyAroundPosition` | 在指定位置/周围初始化部队（MobileParty.cs:2797-2850）。 |
| `CreateParty(string, PartyComponent)` | 静态工厂：创建部队并注册到 Campaign（MobileParty.cs:4905）。 |
| `StartFindingLocatablesAroundPosition` / `FindNextLocatable` / `UpdateLocator` | 定位器：按半径搜索附近部队（MobileParty.cs:4832-4844）。 |
| `ComputeIsWaiting()` | 是否处于等待状态（MobileParty.cs:4884）。 |
| `InitializePartyTrade(int)` / `AddTaxGold(int)` | 初始化/追加交易税（MobileParty.cs:4892、4899）。 |
| `DefaultPartyTradeInitialGold` / `MinimumSpareGoldForWageBudget` | 常量：交易初始金币 5000 / 工资预算最小剩余 5（MobileParty.cs:5121、5127）。 |
| `PartyObjective` enum | 队伍目标枚举：Neutral/Defensive/Aggressive（MobileParty.cs:5365）。 |
| `NavigationType` enum | 导航类型位标志：None/Default/Naval/All（MobileParty.cs:5379）。 |

## 真实示例
```csharp
// 让玩家部队前往某个聚落
MobileParty.MainParty.SetMoveGoToSettlement(targetSettlement, MobileParty.NavigationType.Default, false);

// 给玩家部队添加 10 名步兵
MobileParty.MainParty.AddElementToMemberRoster(infantryCharacter, 10);

// 创建一支新的匪徒部队
BanditPartyComponent banditComponent = new BanditPartyComponent("my_bandit", leaderHero, homeSettlement, 50);
MobileParty banditParty = MobileParty.CreateParty("my_bandit_party", banditComponent);
banditParty.SetMoveGoToPoint(somePosition, MobileParty.NavigationType.All);
```

## 参见
- [PartyBase](../PartyBase)
- [TroopRoster](../TroopRoster)
- [Hero](../Hero)

## 导航
- ↑ [campaign 桶索引](../)
- ↑ [API 参考](../../)
- ↑ [v1.4.7 中文首页](../../../)
- ↔ [架构总览](../../../architecture/)
