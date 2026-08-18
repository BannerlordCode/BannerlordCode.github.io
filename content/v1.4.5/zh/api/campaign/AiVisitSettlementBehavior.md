---
title: "AiVisitSettlementBehavior"
description: "战役 AI 行为核心：在每小时 tick 时为领主方与土匪方计算拜访定居点（城镇/村庄/城堡/巢穴）的评分，覆盖驻军补给采购、志愿者招募、卖货、释放俘虏、增派驻军、无首领方合并、解散方归并与土匪 infest 逻辑，并维护“友方方指向各定居点数量”的计数以抑制过度集中；由 Campaign 在 InitializeGameStarter 注册，只写入 PartyThinkParams。"
---

# AiVisitSettlementBehavior

**命名空间：** TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors
**模块：** TaleWorlds.CampaignSystem
**类型：** public class AiVisitSettlementBehavior : CampaignBehaviorBase
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors/AiVisitSettlementBehavior.cs

## 概述

该行为是战役 AI 中最大、最复杂的“去哪”决策器：每小时为每一个领主方（及土匪方）综合食物、工资预算、俘虏、驻军缺口、拥有的定居点、卖货需求与合并/解散需求，给可达的城镇、村庄、城堡与巢穴打出拜访评分，分数超过 `GoodEnoughScore(8)` 即立即采纳、超过 `MeaningfulScoreThreshold(0.025)` 才计入候选，从而驱动方去采购、招募、运兵、卖货或 infest 巢穴。

## 心智模型

它是 `CampaignBehaviorBase` 的纯评分器，自身**从不**直接移动任何方——所有结论都写进传入的 `PartyThinkParams`，最终由 AI 思考管线（[AiPartyThinkBehavior](../AiPartyThinkBehavior)）采纳并写入 `MobileParty.Ai`。`RegisterEvents` 订阅了 5 个事件：`AiHourlyTickEvent`（主评分）、`OnSessionLaunchedEvent`（缓存 [IDisbandPartyCampaignBehavior](../IDisbandPartyCampaignBehavior)）、`OnNewGameCreatedEvent` / `OnGameLoadedEvent` / `HourlyTickEvent`（三者都触发 `RefreshTheTargetingSettlementDictionary` 重建友方指向计数）。`SyncData` 为空——其内部可变状态（候选列表、计数字典）都在加载/新游戏时重算，不需序列化。tick 时机是 `AiHourlyTickEvent`，此时 `Campaign.Current` 必然存在，因此内部大量直接读 `Campaign.Current.Models.*` 与 `Campaign.Current.*` 全局数据。它是 [AiPatrollingBehavior](../AiPatrollingBehavior) / [AiLandBanditPatrollingBehavior](../AiLandBanditPatrollingBehavior) / [AIMoveToNearestLandBehavior](../AIMoveToNearestLandBehavior) 的兄弟，在同一次思考里各自贡献不同候选。

## 何时使用 / 何时不要使用

- **使用**：需要解释“领主方为何去某城镇采购/招募/增援”、或想调拜访偏好时阅读本行为；要改具体子规则应走其依赖的模型——食物采购走 [PartyFoodBuyingModel](../PartyFoodBuyingModel)、所需食物阈值走 `Campaign.Current.Models.MobilePartyAIModel.NeededFoodsInDaysThresholdForSiege`、驻军缺口走 [SettlementGarrisonModel](../SettlementGarrisonModel)、志愿者工资走 `PartyWageModel`、土匪 infest 阈值走 [BanditDensityModel](../BanditDensityModel)。
- **不要使用**：绝对不要直接给 `MobileParty` 设置 `TargetSettlement` / `DefaultBehavior` 来“让它去拜访”——正确做法是 `mobileParty.Ai.SetAIState(AiBehavior.GoToSettlement, settlement)` 让 AI 思考尊重本行为产出的评分；也不要在 `Mission` 层或 `Campaign.Current` 为空时调用其评分辅助；更不要把 `SiegeEvent`（包围中）与 `MapEvent`（遭遇战）混为一谈——本行为对二者有不同判定分支。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有行为；读取 `Campaign.Current.Models.*`、`Campaign.Current.AllHideouts`、`Campaign.Current.MapSceneWrapper`、`Campaign.MapDiagonal`、`Campaign.CurrentTime`、`Campaign.Current.GetAverageDistanceBetweenClosestTwoTownsWithNavigationType` 等。
- [CampaignEvents](../CampaignEvents) —— 订阅 `AiHourlyTickEvent`、`OnSessionLaunchedEvent`、`OnNewGameCreatedEvent`、`HourlyTickEvent`、`OnGameLoadedEvent`。
- [MobileParty](../MobileParty) / [PartyBase](../PartyBase) —— 判定主体；读取 `IsBandit`、`LeaderHero`、`Army`、`Food`、`PartyTradeGold`、`PrisonRoster`、`ItemRoster`、`Ships`、`DefaultBehavior`、`TargetSettlement`、`LastVisitedSettlement`、`BesiegedSettlement`、`SiegeEvent`、`MapEvent` 等。
- [PartyThinkParams](../PartyThinkParams) —— 评分写入目标。
- [AIBehaviorData](../AIBehaviorData) / [AiBehavior](../AiBehavior) —— 产出的候选（领主方恒为 `GoToSettlement`，土匪方为 `GoToSettlement` 指向巢穴）。
- [Settlement](../Settlement) / [Town](../Town) / [Village](../Village) / [Hideout](../Hideout) / [Clan](../Clan) / [Kingdom](../Kingdom) / [Hero](../Hero) —— 拜访目标与判定上下文（所有者、文化、要人、驻军、村庄状态、巢穴 infest）。
- [MapEvent](../MapEvent) / [SiegeEvent](../SiegeEvent) —— 过滤“正处于战斗/被围”的方与定居点；读取 `IsBlockadeActive`、`BesiegedSettlement`。
- [IDisbandPartyCampaignBehavior](../IDisbandPartyCampaignBehavior) —— 判定方是否等待解散以切换合并评分分支。
- [BanditDensityModel](../BanditDensityModel) —— 提供巢穴 infest 的最小/最大土匪数、每派系最大巢穴数。
- [PartyFoodBuyingModel](../PartyFoodBuyingModel) —— `MinimumDaysFoodToLastWhileBuyingFoodFromVillage/Town`、`LowCostFoodPriceAverage`。
- [SettlementGarrisonModel](../SettlementGarrisonModel) —— `FindNumberOfTroopsToTakeFromGarrison` 计算可从驻军抽走的兵力。
- [MobilePartyAIModel](../MobilePartyAIModel) —— `NeededFoodsInDaysThresholdForSiege` 攻城所需食物阈值。
- [PartyWageModel](../PartyWageModel) —— `GetCharacterWage` 估算志愿者工资。
- [CampaignTimeModel](../CampaignTimeModel) —— `HoursInDay`。

下游与协同（同 AI 簇）：

- [AiPartyThinkBehavior](../AiPartyThinkBehavior) —— 消费 `PartyThinkParams` 中本行为写入的候选并决定最终移动。
- [AiMilitaryBehavior](../AiMilitaryBehavior) / [AiEngagePartyBehavior](../AiEngagePartyBehavior) / [AiArmyMemberBehavior](../AiArmyMemberBehavior) / [AiPatrollingBehavior](../AiPatrollingBehavior) / [AiLandBanditPatrollingBehavior](../AiLandBanditPatrollingBehavior) / [AIMoveToNearestLandBehavior](../AIMoveToNearestLandBehavior) —— 同层兄弟行为。

辅助（无独立页，按命名空间引用）：`FactionHelper`（理想驻军强度、经济/繁荣/食物对驻军规模常数）、`AiHelper`、`MobilePartyHelper`、`HeroHelper`、`SettlementHelper`、`MBRandom`、`LinQuick` 提供计算与查询支持。

## 风险

- **每小时 O(定居点×领主方) 重建计数**：`RefreshTheTargetingSettlementDictionary` 在 `HourlyTickEvent` 以及新游戏/读档时遍历 `Settlement.All` 与 `MobileParty.AllLordParties` 重建 `_numberOfAlliedMobilePartiesTargetingSettlement`；方/定居点很多时这是持续的每小时代价，不要在这里再加额外遍历。
- **计数字典只在“城镇/村庄”上建立键**：字典仅为 `IsFortification || IsVillage` 的定居点建键；`AiHourlyTick` 只对满足拜访条件的（同样仅村庄/堡垒）定居点读取该字典，因此正常安全。若你扩展了拜访条件把城堡/巢穴以外的新类型纳入循环却未同步建键，访问 `_numberOfAlliedMobilePartiesTargetingSettlement[settlement]` 会抛 `KeyNotFoundException`。
- **假设 Campaign.Current 非空**：内部无处不在的 `Campaign.Current.Models.*` / `Campaign.Current.*`；在主菜单、`Mission` 层或战役未启动时调用任一评分辅助都会空引用。它们只在 `AiHourlyTick` 上下文安全。
- **leaderHero 空分支差异**：主评分大段逻辑位于 `leaderHero != null` 的 `else` 分支内，`CalculateBeingSettlementOwnerScores` 内部直接读 `leaderHero.Clan`；若你从外部以 `leaderHero == null` 的方调用该方法会空引用。仅在领主方路径内使用。
- **围城 vs 遭遇战混淆**：`AiHourlyTick` 开头 `mobileParty.CurrentSettlement?.SiegeEvent != null` 直接返回；后续又分别读 `mobileParty.BesiegedSettlement`、`mobileParty.SiegeEvent`、`mobileParty.MapEvent` 来抑制某些评分。把“被围”与“遭遇战”当同一种状态处理会导致拜访逻辑误判。
- **本行为只写分数、不移动方**：它从不调用 `SetMoveMode*` 或改 `DefaultBehavior`；直接改写 `MobileParty` 移动状态来“让它去拜访”会被下一轮思考覆盖或产生竞态。应走 `MobileParty.Ai.SetAIState`。
- **非确定性随机**：土匪巢穴评分使用未带种子的 `MBRandom.RandomFloat` 连乘作为抖动，影响分布但不崩溃，存档可复现性上土匪 infest 有随机成分。
- **SyncData 为空**：本行为无字段序列化；若你新增需要跨存读档保留的字段，必须自行实现 `SyncData`，否则读档后状态丢失（计数与候选本就会在 `OnGameLoaded` 重算，所以默认安全）。
- **结构体按值传递**：`SettlementNavigationData` 是只读结构体且实现 `IComparable<SettlementNavigationData>`，按距离升序、再按标识符排序；修改其字段需重新构造实例，不能就地改。

## 成员说明

### 常量与公开字段

- **`GoodEnoughScore`（`8f`）/ `MeaningfulScoreThreshold`（`0.025f`）/ `BaseVisitScore`（`1.6f`）**
  - 用途：评分采纳阈值。`num13 >= GoodEnoughScore` 时立即 `AddBehaviorTupleWithScore` 并 `break`（提前锁定目标）；仅当最终 `num13 > MeaningfulScoreThreshold` 才把候选写入 `p`。`BaseVisitScore` 是拜访基础分起点。
  - 副作用：无，纯常量。调用时机：主评分循环内比较。

### 事件订阅与生命周期

- **`RegisterEvents()`**
  - 用途：订阅 `AiHourlyTickEvent`、`OnSessionLaunchedEvent`、`OnNewGameCreatedEvent`、`HourlyTickEvent`、`OnGameLoadedEvent`。
  - 副作用：无。调用时机：行为注册后由框架调用一次。

- **`OnSessionLaunched(CampaignGameStarter campaignGameStarter)`**
  - 用途：缓存 `IDisbandPartyCampaignBehavior` 实例到 `_disbandPartyCampaignBehavior`。
  - 副作用：仅缓存引用。调用时机：会话启动事件。

- **`OnNewGameCreated` / `OnGameLoaded` / `OnHourlyTick`**
  - 用途：三者都调用 `RefreshTheTargetingSettlementDictionary()` 重建友方指向计数（新游戏、读档、每小时各一次）。
  - 副作用：重建字典。调用时机：对应 `CampaignEvents`。

- **`SyncData(IDataStore dataStore)`**
  - 用途：空实现；内部状态在加载时由 `OnGameLoaded` 重算。
  - 副作用：无。调用时机：存读档时调用。

### 友方指向计数（去集中化）

- **`RefreshTheTargetingSettlementDictionary()`**
  - 用途：先把所有 `IsFortification || IsVillage` 的定居点计数清零，再遍历 `MobileParty.AllLordParties`：若某领主方（非附庸或身为军团领袖）正前往与本方同派系的定居点且尚未抵达，则按 `LeaderPartyAndAttachedPartiesCount`（或 1）累加到该定居点的计数。该计数在主评分中用于惩罚“已经有太多友方盯着同一定居点”的目标，避免过度集中。
  - 副作用：写入 `_numberOfAlliedMobilePartiesTargetingSettlement`。调用时机：上述三个事件。

### 每小时主评分

- **`AiHourlyTick(MobileParty mobileParty, PartyThinkParams p)`**
  - 用途：总入口。先 `if (mobileParty.CurrentSettlement?.SiegeEvent != null) return;`；土匪方走 `CalculateVisitHideoutScoresForBanditParty` 后返回；其余方过滤掉民兵/商队/村民/巡逻方/非领主小派系/已附庸非领袖等。对通过者计算食物、工资预算、俘虏、卖货分（`CalculateSellItemScore`）、各项距离与规模调节，遍历按距离排序的 `_settlementsNavigationData`，对每个候选逐项累加食物采购、招募、驻军、释放俘虏、卖货、去/回上次拜访地等乘子，超过 `GoodEnoughScore` 即采纳并 `break`，否则超过 `MeaningfulScoreThreshold` 才计入 `p`。
  - 副作用：仅写 `p`。调用时机：`AiHourlyTickEvent`。

### 候选构造与过滤

- **`AddBehaviorTupleWithScore(PartyThinkParams p, Settlement settlement, float score, NavigationType navType, bool isFromPort, bool isTargetingPortBetter)`**
  - 用途：用给定参数构造 `AIBehaviorData(settlement, AiBehavior.GoToSettlement, navType, willGatherArmy:false, isFromPort, isTargetingPortBetter)`；若 `p` 中已有该行为则累加分数，否则 `AddBehaviorScore`。所有评分最终都经此落地。
  - 副作用：写 `p`。调用时机：主评分及各子评分内部。

- **`IsSettlementSuitableForVisitingCondition(MobileParty mobileParty, Settlement settlement)`**
  - 用途：判定某定居点是否可作为拜访目标——排除正处 `MapEvent`、正被封锁（除非本方有海军能力）、与本方交战派系（少数特例除外）的据点；最终只接受村庄或堡垒（城镇/城堡）。巢穴不在此路径。
  - 副作用：无，纯判定。调用时机：`FillSettlementsToVisitWithDistancesAsDays` 内。

- **`FillSettlementsToVisitWithDistancesAsDays(MobileParty mobileParty, List<SettlementNavigationData> listToFill)`**
  - 用途：收集本方可达且合适的定居点，附上距离（以天计）与最佳导航类型，填入 `listToFill`（即 `_settlementsNavigationData`）。王国方优先遍历己方定居点，并在平均距离过大时用 `Settlement.StartFindingLocatablesAroundPosition` 做半径搜索纳入中立据点；非王国方直接半径搜索；都为空时退化为围绕 `FactionMidSettlement` 及其村庄。
  - 副作用：填充传入列表。调用时机：主评分开头。

- **`GetBestNavigationDataForVisitingSettlement(MobileParty mobileParty, Settlement settlement, out bestNavigationType, out distanceAsDays, out isFromPort, out isTargetingPortBetter)`**
  - 用途：为某定居点解析最佳导航类型与“以天计”的距离；若本方有海军能力且目标是有港口的堡垒，会比较“走港口”是否更近并把 `isTargetingPortBetter` 置真。
  - 副作用：无，纯计算 `out`。调用时机：`FillSettlementsToVisitWithDistancesAsDays` 内。

- **`SettlementNavigationData`（只读结构体，实现 `IComparable<SettlementNavigationData>`）**
  - 用途：承载单个候选据点的 `(Distance, SettlementIdentifier, Settlement, BestNavigationType, IsFromPort, IsTargetingPortBetter)`，按 `Distance` 升序、`SettlementIdentifier` 次之排序，使主评分由近及远处理。
  - 副作用：无。调用时机：作为 `_settlementsNavigationData` 的元素。

### 各类子评分

- **`CalculateSellItemScore(MobileParty mobileParty)`**
  - 用途：根据方物品栏中可卖货物（非食物、非坐骑）与坐骑的价值占比，估算“去城镇卖货”的诱惑乘子（最高约 3）；附庸于军团时取平方根削弱。
  - 副作用：无。调用时机：主评分开头（`num6`）。

- **`CalculatePartyParameters(MobileParty mobileParty)`**
  - 用途：返回 `(平均规模比, 正常规模上限之和, 伤员数, 总人数)`；含军团时按附庸方聚合。用于后续规模相关的乘子。
  - 副作用：无。调用时机：主评分开头。

- **`GetApproximateVolunteersCanBeRecruitedDataFromSettlement(Hero hero, Settlement settlement)`**
  - 用途：返回 `(可招募志愿者数, 平均单兵工资)`；遍历定居点要人的 `VolunteerTypes`，本方与定居点不同派系时每人只取前 2 个槽位。用于招募评分与工资预算上限。
  - 副作用：无。调用时机：主评分招募分支。

- **`CalculateBeingSettlementOwnerScores(MobileParty mobileParty, Settlement settlement, Settlement currentSettlement, float idealGarrisonStrengthPerWalledCenter, float distanceScorePure, float averagePartySizeRatioToMaximumSize)`**
  - 用途：计算“去增强/巡视自己拥有的定居点”的多维乘子：所有者多久未巡视、是否可从驻军抽兵（`SettlementGarrisonModel.FindNumberOfTroopsToTakeFromGarrison`）、是否回主城、以及驻军缺口（`FactionHelper.FindIdealGarrisonStrengthPerWalledCenter` 与各项 `FactionHelper.*GarrisonSizeConstant`）。返回四项乘子。
  - 副作用：无，纯计算。调用时机：主评分中 `num20 <= 0.5f` 分支。

- **`CalculateMergeScoreForLeaderlessParty(MobileParty leaderlessParty, Settlement settlement, float distanceAsDays, out bool canMerge)`**
  - 用途：无首领方（如失去领袖的方）前往“同部族/同派系堡垒”合并的评分；村庄直接 `canMerge=false` 返回不可合并。分数随距离衰减并依归属强弱（本部族 2、同派系 0.35）缩放。
  - 副作用：通过 `out canMerge` 告知调用方是否允许合并。调用时机：主评分中 `leaderHero == null` 分支。

- **`CalculateMergeScoreForDisbandingParty(MobileParty disbandParty, Settlement settlement, float distanceAsDays)`**
  - 用途：正在解散的方前往归属方/同派系据点合并的评分，依所有者/派系关系（1 / 0.35 / 0.025）与是否已在前往该据点缩放；低于阈值时抬到 `0.035` 兜底。
  - 副作用：无。调用时机：主评分中 `IsDisbanding` 分支。

- **`CalculateVisitHideoutScoresForBanditParty(MobileParty mobileParty, Settlement currentSettlement, PartyThinkParams p)`**
  - 用途：土匪方专属路径。遍历所有“同文化且已 infest”的巢穴，按当前 infest 数量相对阈值（`BanditDensityModel`）计算饱和/过剩分数，结合物品价值、俘虏比例与随机抖动，产出指向巢穴的 `GoToSettlement` 候选（分数为 0 则不计入）。跳过正处 `MapEvent` 或不同文化的巢穴。
  - 副作用：写 `p`。调用时机：主评分土匪分支。

## 示例

让某领主方前往拜访目标定居点（正确做法是设置 AI 状态，而非直接改 `TargetSettlement`）：

```csharp
MobileParty lordParty = Hero.MainHero.Party;
Settlement target = Settlement.Find("town_ESWE2");
if (lordParty != null && target != null)
{
    lordParty.Ai.SetAIState(AiBehavior.GoToSettlement, target);
}
```

观察某领主方本行为产出的拜访候选（只观察，不要改写移动状态）：

```csharp
CampaignEvents.AiHourlyTickEvent.AddNonSerializedListener(this, OnVisitTick);

private void OnVisitTick(MobileParty mobileParty, PartyThinkParams p)
{
    if (mobileParty.LeaderHero != null && mobileParty.DefaultBehavior == AiBehavior.GoToSettlement)
    {
        Settlement goal = mobileParty.TargetSettlement;
        float foodDays = mobileParty.GetNumDaysForFoodToLast();
    }
}
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [CampaignEvents](../CampaignEvents) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [MobileParty](../MobileParty) · [PartyBase](../PartyBase) · [PartyThinkParams](../PartyThinkParams) · [AIBehaviorData](../AIBehaviorData) · [AiBehavior](../AiBehavior) · [IDisbandPartyCampaignBehavior](../IDisbandPartyCampaignBehavior) · [Settlement](../Settlement) · [Town](../Town) · [Village](../Village) · [Hideout](../Hideout) · [Clan](../Clan) · [Kingdom](../Kingdom) · [Hero](../Hero) · [MapEvent](../MapEvent) · [SiegeEvent](../SiegeEvent) · [BanditDensityModel](../BanditDensityModel) · [PartyFoodBuyingModel](../PartyFoodBuyingModel) · [SettlementGarrisonModel](../SettlementGarrisonModel) · [MobilePartyAIModel](../MobilePartyAIModel) · [PartyWageModel](../PartyWageModel) · [CampaignTimeModel](../CampaignTimeModel) · [AiPartyThinkBehavior](../AiPartyThinkBehavior) · [AiMilitaryBehavior](../AiMilitaryBehavior) · [AiEngagePartyBehavior](../AiEngagePartyBehavior) · [AiArmyMemberBehavior](../AiArmyMemberBehavior) · [AiPatrollingBehavior](../AiPatrollingBehavior) · [AiLandBanditPatrollingBehavior](../AiLandBanditPatrollingBehavior) · [AIMoveToNearestLandBehavior](../AIMoveToNearestLandBehavior)
