---
title: "ArmyManagementCalculationModel"
description: "统管 army（军团）召集资格阈值、影响力（声望）成本、每日凝聚力变化与解散阈值的规则模型，由 Campaign 在运行时通过 Campaign.Current.Models.ArmyManagementCalculationModel 解析，被 Army.cs、AI 军事行为与家族政治结算在每日推进中调用。"
---

# ArmyManagementCalculationModel

**命名空间：** TaleWorlds.CampaignSystem.ComponentInterfaces
**模块：** TaleWorlds.CampaignSystem
**类型：** public abstract class ArmyManagementCalculationModel : MBGameModel<ArmyManagementCalculationModel>
**源文件：** Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/ArmyManagementCalculationModel.cs

## 概述

该模型集中定义了“一支 army 如何被召集、维持与解散”的全部数值规则：候选部队的规模比/粮食天数/距离门槛、把一支部队纳入 army 所需的影响力成本、army 每日凝聚力的增减构成，以及凝聚力跌破阈值时的解散判定。它本身不持有任何世界状态，只提供纯计算；真正的 `Army` 对象、成员列表与凝聚力数值由 [Army](../Army) 与各类 AI 行为读写。

## 心智模型

`ArmyManagementCalculationModel` 是 army 系统的规则扩展点：Campaign 在启动时通过 `GameModels` 从已注册的 `GameModel` 集合中按类型解析出唯一实例 `DefaultArmyManagementCalculationModel` 并缓存，运行时统一用 `Campaign.Current.Models.ArmyManagementCalculationModel` 取得，每次新战役/读档都会重新解析，因此模型实例不参与存档序列化，也不会在每个 tick 被重新构造。当 AI 行为（如 [AiMilitaryBehavior](../AiMilitaryBehavior)、[AiArmyMemberBehavior](../AiArmyMemberBehavior)）要决定是否召集部队、[Army](../Army) 在每日结算要累加凝聚力、或界面/对话要展示召集成本时，都回头取这个模型。要改规则就继承 `DefaultArmyManagementCalculationModel` 并注册替换实现；要读结果就走模型，绝不要直接给 [Army](../Army) 的 `Cohesion` 或成员列表赋值来“伪造”数值——修改世界状态应走 army 的自身方法（如 `BoostCohesion`）或对应的 `*Action`。

## 何时使用 / 何时不要使用

- **使用**：需要查询或自定义“召集部队的资格、影响力成本、凝聚力变化”规则时，读取 `Campaign.Current.Models.ArmyManagementCalculationModel` 的返回值，或提供一个新的派生类覆盖抽象成员并通过子模块注册替换默认实现。
- **不要使用**：不要直接修改 [Army](../Army) 的 `Cohesion` 或成员列表来绕过模型——模型是无状态纯函数，真正的状态在 [Army](../Army) 与 [MobileParty](../MobileParty) 上；改变世界状态应走 army 的自身方法或对应的 `*Action`，而不是篡改模型。修改召集规则后若不动写入路径，会出现“界面说能召、实际召不来”的漂移。

## 依赖图

上游类型与系统：

- [Campaign](../Campaign) —— 持有 `Models` 集合，是运行时获取该模型的入口。
- [GameModels](../GameModels) —— 在构造时通过 `GetGameModel<ArmyManagementCalculationModel>()` 解析并缓存实例。
- [MobilePartyAIModel](../MobilePartyAIModel) —— `CanLordCreateArmy` 内部读取其 `NeededFoodsInDaysThresholdForSiege` 作为召集前的粮食阈值。
- [TargetScoreCalculatingModel](../TargetScoreCalculatingModel) —— `Army.BoostCohesion`（提升凝聚力）计算提升量时读取其 `CurrentObjectiveValue`，再交给本模型的 `CalculateTotalInfluenceCost`。

下游与协同系统（调用方）：

- [Army](../Army) —— 最核心调用方：`DailyCohesionChange` / `DailyCohesionChangeExplanation`（取 `CalculateDailyCohesionChange`）、`CohesionThresholdForDispersion` 属性（转发同名模型属性）、`IsWaitingForArmyMembers`（读 `MaximumWaitTime`）、`BoostCohesion`（经 `CalculateTotalInfluenceCost`）、加入/移除成员（经 `CalculateNewCohesion` 与 `CalculatePartyInfluenceCost`）均走此模型。
- [MobileParty](../MobileParty) —— 几乎所有方法的参数与判定主体（规模比、粮食天数、距离、是否为 `MainParty`）。
- [AiMilitaryBehavior](../AiMilitaryBehavior) —— 领主 AI 在 `CanLordCreateArmy` 返回 true 时才发起召集，并用其 `possibleArmyMembers` 结果。
- [AiArmyMemberBehavior](../AiArmyMemberBehavior) —— 用 `PlayerMobilePartySizeRatioToCallToArmy` / `AIMobilePartySizeRatioToCallToArmy` 与 `MinimumNeededFoodInDaysToCallToArmy` 判定成员是否该离队。
- [LordConversationsCampaignBehavior](../LordConversationsCampaignBehavior) —— 对话中调用 `CalculatePartyInfluenceCost` 与 `GetPartySizeScore` 展示/扣除召集影响力。
- [DefaultClanPoliticsModel](../DefaultClanPoliticsModel) —— 在家族政治影响力结算里累加 `DailyBeingAtArmyInfluenceAward`。
- [Hero](../Hero) / [Clan](../Clan) —— `GetPartyRelation(Hero)`、`CalculatePartyInfluenceCost` 的关系与影响力来源；[Clan](../Clan) 的 `Influence` 决定能否支付召集成本（默认要求 `Influence > 100f`）。

## 风险

- **跨战役重载缓存实例**：`Campaign.Current.Models.ArmyManagementCalculationModel` 在每次新战役/读档时由 `GameModels` 重新解析。把实例缓存进静态字段或长生命周期对象，会在重载后指向旧战役的已销毁对象，调用即崩溃或读到陈旧规则。每次需要时都重新走 `Campaign.Current.Models` 获取。
- **战役开始前访问**：`Campaign.Current` 或 `Campaign.Current.Models` 在战役未启动时为 `null`。在 `MainMenu`、子模块加载早期或编辑器上下文里调用会直接空引用。
- **误判状态层**：该模型是无状态纯函数，没有需要持久化的字段，也不含 `[SaveableField]`。若你新增的派生类里加了可变字段并期望它随存档恢复，会发现这些值永远不会被序列化，从而产生隐蔽的规则漂移。
- **在 Mission/战斗层调用**：模型属于 Campaign 层，仅在战役模拟中存在；`CanPlayerCreateArmy` 内部已显式检查 `CampaignMission.Current != null` 并禁用，在 `Mission` 或战场逻辑里取 `Campaign.Current.Models` 是错误的访问层。
- **只替换模型不改写入路径**：派生类改变了成本/阈值公式，但真正累加凝聚力的是 [Army](../Army) 每日结算、真正扣除影响力的是 `ChangeClanInfluenceAction`、真正发起召集的是 [AiMilitaryBehavior](../AiMilitaryBehavior)。只替换模型、却让行为与 Action 按旧假设处理，会出现数值与预测不一致。
- **常量属性与 `Army` 判定耦合**：`CohesionThresholdForDispersion`（默认 `10`）与 `MaximumWaitTime`（默认 `72` 小时）在默认实现中是固定值，且 [Army](../Army) 的 `CohesionThresholdForDispersion` 属性与 `IsWaitingForArmyMembers` 直接转发/读取它们。若你改了这两个属性却未同步复核 [Army](../Army) 里引用它们的判定逻辑（解散阈值、等待成员超时），会出现模型改了而 [Army](../Army) 仍按旧阈值行动。

## 成员说明

### 召集资格阈值（属性）

- **`AIMobilePartySizeRatioToCallToArmy`** / **`PlayerMobilePartySizeRatioToCallToArmy`**（均为 `float` 属性）
  - 用途：候选部队被纳入 army 所需的最小规模占编制比。默认实现分别为 `0.6f`（AI 领主）与 `0.4f`（玩家主队），用于 `CanLordCreateArmy`、`CheckPartyEligibility` 与 AI 成员去留判定。
  - 副作用：无，纯计算。
  - 调用时机：领主发起召集、玩家邀请部队、AI 成员评估是否离队时读取。

- **`MinimumNeededFoodInDaysToCallToArmy`**（默认 `15f`）
  - 用途：候选部队需至少还能支撑多少天粮食才允许加入 army。
  - 副作用：无。调用时机：`CanLordCreateArmy` 与 [AiArmyMemberBehavior](../AiArmyMemberBehavior) 的离队判定。

- **`MaximumDistanceToCallToArmy`**（默认 = `Campaign.Current.GetAverageDistanceBetweenClosestTwoTownsWithNavigationType(MobileParty.NavigationType.All) * 8f`）
  - 用途：候选部队与领导者之间允许的最大距离（基于城镇平均间距动态计算）。
  - 副作用：无。调用时机：`CanLordCreateArmy`、`CheckPartyEligibility` 的距离门槛。

- **`InfluenceValuePerGold`**（默认 `40`）、**`AverageCallToArmyCost`**（默认 `20`）
  - 用途：影响力与金币的折算比（`InfluenceValuePerGold`），以及单支部队影响力成本计算的基准乘数 `AverageCallToArmyCost`（见 `CalculatePartyInfluenceCost` 末尾的乘法）。
  - 副作用：无。

- **`CohesionThresholdForDispersion`**（默认 `10`）
  - 用途：army 凝聚力跌破此值时触发解散；[Army](../Army) 的 `CohesionThresholdForDispersion` 属性直接转发它。
  - 副作用：无。

- **`MaximumWaitTime`**（默认 = `CampaignTime.HoursInDay * 3f`，即 72 小时）
  - 用途：[Army](../Army) 的 `IsWaitingForArmyMembers` 用它判断领袖等待成员集结的超时阈值；超时后所需集结比例要求降低。
  - 副作用：无。

### 影响力（声望）成本计算

- **`CalculatePartyInfluenceCost(MobileParty armyLeaderParty, MobileParty party)`**
  - 用途：计算把 `party` 纳入 `armyLeaderParty` 领导的 army 所需的影响力成本。默认实现：若两者 `LeaderHero` 同属一个 `Clan` 直接返回 `0`；否则综合双方领主关系（`GetPartyRelation`）、`party` 规模评分（`GetPartySizeScore`）、战力、距领导者的距离、文化特性（Vlandian/Sturgian feat）与王国政策（Marshals、RoyalCommissions、LordsPrivyCouncil、Senate）及专长（InspiringLeader、CallToArms），最后乘 `AverageCallToArmyCost`（系数 `0.65f * num3 * num4 * num7 * num6 * num5 * num8 * num9 * num10`）。
  - 副作用：无，纯计算。
  - 调用时机：[LordConversationsCampaignBehavior](../LordConversationsCampaignBehavior) 在对话中展示并实际扣除成本；`CanLordCreateArmy` 与 `CalculateTotalInfluenceCost` 内部反复调用它。

- **`CalculateTotalInfluenceCost(Army army, float percentage)`**
  - 用途：对整个 army 的非主队成员累加 `CalculatePartyInfluenceCost`，再叠加 RoyalCommissions 政策与 Encirclement 专长因子（私有核心 `CalculateTotalInfluenceCostInternal`），按 `percentage` 折算。若 `army` 不是玩家主队（`MobileParty.MainParty.Army`），总成本再乘 `0.25f`。
  - 副作用：无。调用时机：[Army](../Army) 的 `BoostCohesion` 在提升凝聚力前计算所需影响力。

- **`DailyBeingAtArmyInfluenceAward(MobileParty armyMemberParty)`**
  - 用途：返回某成员每日因“身处 army”而获得的家族政治影响力增量（默认 `(战力 + 20) / 200`，帝国文化 feat 可加成）。被 [DefaultClanPoliticsModel](../DefaultClanPoliticsModel) 累加进家族影响力。
  - 副作用：无。
  - 调用时机：家族政治影响力每日结算。

### 凝聚力（cohesion）计算

- **`CalculateDailyCohesionChange(Army army, bool includeDescriptions = false)`**
  - 用途：返回该 army 每日凝聚力的净变化（`ExplainedNumber`）：基础 `-2`，再按附属部队数量（`-成员数`）、饥饿/低士气（士气 `≤25f`）/人数过少（健康成员 `≤10`）的部队数扣分（玩家主队为全量，AI 领主 army 乘 `0.25f`），并叠加 HordeLeader 专长与围城 CampBuilding 加成的因子。
  - 副作用：无，纯计算。[Army](../Army) 的 `DailyCohesionChange` 取其 `ResultNumber`，`DailyCohesionChangeExplanation` 传 `includeDescriptions: true` 取带说明分解。
  - 调用时机：army 每日结算与界面刷新。

- **`CalculateNewCohesion(Army army, PartyBase newParty, int calculatedCohesion, int sign)`**
  - 用途：当一支部队加入（`sign = +1`）或离开（`sign = -1`）army 时，按新旧成员数对新凝聚力做加权平均并夹在 `[0,100]`。若 `army` 为 `null` 直接返回 `calculatedCohesion`。
  - 副作用：无。调用时机：[Army](../Army) 增删成员时重算凝聚力。

- **`GetCohesionBoostInfluenceCost(Army army, int percentageToBoost = 100)`**
  - 用途：提升凝聚力所需影响力成本，内部即调用 `CalculateTotalInfluenceCostInternal` 的私有核心（按 `percentageToBoost` 折算）。
  - 副作用：无。调用时机：army 管理界面（如 `ArmyManagementVM`）展示“提升凝聚力”按钮成本时。

### 资格检查与可创建性

- **`CanPlayerCreateArmy(out TextObject disabledReason)`**
  - 用途：判断玩家当前是否满足创建 army 的前置条件：须属王国（`Clan.PlayerClan.Kingdom != null`）、非雇佣兵、未在自己担任领袖的 army 中、不在海上/为俘虏/木筏状态、不在任务（`CampaignMission.Current`）或围城/遭遇中等，不满足时通过 `out disabledReason` 返回对应禁用原因文本。
  - 副作用：无，纯判定。`disabledReason` 仅在返回 false 时有意义。
  - 调用时机：地图栏（`MapBarVM`）与王国 army 界面（`KingdomArmyVM`）刷新“可召集”按钮状态时。

- **`CanLordCreateArmy(MobileParty leaderParty, out MBList<MobileParty> possibleArmyMembers)`**
  - 用途：判断 AI 领主 `leaderParty` 是否可召集 army，并通过 `out possibleArmyMembers` 返回筛选出的合格成员列表（基于粮食天数、`AIMobilePartySizeRatioToCallToArmy` 规模比、距离、是否解散文、战争目标等，上限约为该王国战争部队数的 `70%`，并要求 siege 战力合计 `≥ 1000`）。
  - 副作用：无，纯判定。`possibleArmyMembers` 仅在返回 true 且非空时有意义。
  - 调用时机：[AiMilitaryBehavior](../AiMilitaryBehavior) 在领主决策循环中调用。

- **`CheckPartyEligibility(MobileParty party, out TextObject explanation)`**
  - 用途：判断 `party` 能否被邀请加入玩家主队（排除围城中、统治者本队、已在其他 army、正在交战、规模低于 `40%`（`PlayerMobilePartySizeRatioToCallToArmy`）阈值、过远、解散中/木筏/海上等），并把不可邀请原因写入 `explanation`。
  - 副作用：无。调用时机：army 管理界面邀请列表筛选（`ArmyManagementItemVM`）。

- **`GetPartySizeScore(MobileParty party)`**
  - 用途：返回 `MathF.Min(1f, party.PartySizeRatio)`，即该部队规模比（封顶 1）的评分，供 `CalculatePartyInfluenceCost` 与资格判定复用。
  - 副作用：无。
  - 调用时机：成本计算与 `CheckPartyEligibility` 内部。

- **`GetPartyRelation(Hero hero)`**
  - 用途：返回玩家主英雄与 `hero` 的关系值；`hero` 为 `null` 返回 `-101`，为玩家主英雄返回 `101`，否则返回 `Hero.MainHero.GetRelation(hero)`。供 `CalculatePartyInfluenceCost` 评估召集成本的关系系数。
  - 副作用：无。

## 示例

读取玩家主队所在 army 的每日凝聚力净变化（含说明分解）：

```csharp
Army playerArmy = MobileParty.MainParty.Army;
if (playerArmy != null)
{
    ExplainedNumber daily = Campaign.Current.Models.ArmyManagementCalculationModel
        .CalculateDailyCohesionChange(playerArmy, includeDescriptions: false);
    float cohesionDelta = daily.ResultNumber;
}
```

计算把某领主部队纳入玩家 army 的影响力成本，并判断它是否可邀请：

```csharp
MobileParty leader = MobileParty.MainParty;
MobileParty candidate = someLordParty; // 一名符合 MobileParty 类型、拥有 LeaderHero 的部队

int cost = Campaign.Current.Models.ArmyManagementCalculationModel
    .CalculatePartyInfluenceCost(leader, candidate);

bool eligible = Campaign.Current.Models.ArmyManagementCalculationModel
    .CheckPartyEligibility(candidate, out TextObject explanation);
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [GameModels](../GameModels) · [Army](../Army) · [MobileParty](../MobileParty) · [AiMilitaryBehavior](../AiMilitaryBehavior) · [AiArmyMemberBehavior](../AiArmyMemberBehavior) · [LordConversationsCampaignBehavior](../LordConversationsCampaignBehavior) · [DefaultClanPoliticsModel](../DefaultClanPoliticsModel) · [Hero](../Hero) · [Clan](../Clan) · [TargetScoreCalculatingModel](../TargetScoreCalculatingModel) · [MobilePartyAIModel](../MobilePartyAIModel) · [DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
