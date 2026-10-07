---
title: "DefaultArmyManagementCalculationModel"
description: "军团管理规则模型：定义召集军队的影响力费用、凝聚力变化、部队资格检查和玩家创建军团条件，是军团系统的核心计算器。"
---
# DefaultArmyManagementCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultArmyManagementCalculationModel : ArmyManagementCalculationModel`
**Base:** `ArmyManagementCalculationModel`（抽象类，位于 `TaleWorlds.CampaignSystem.ComponentInterfaces`）
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultArmyManagementCalculationModel.cs`

## 概述

`DefaultArmyManagementCalculationModel` 是战役层军团管理子系统的默认规则实现，继承自抽象类 `ArmyManagementCalculationModel`。它负责计算军团运作的所有数值：

- **影响力费用**：召集部队加入军团的影响力成本，受关系、距离、规模、政策、perk 和文化特质影响。
- **凝聚力**：军团每日凝聚力变化，受部队数量、饥饿、士气、小部队比例影响；凝聚力低于阈值时军团解散。
- **部队资格**：检查部队是否可以被召集（不在战斗中、规模足够、距离合理、不在海上等）。
- **玩家条件**：检查玩家是否可以创建军团（属于王国、不是雇佣兵、不在海上、不在任务中、不在遭遇中）。

这个模型被 `Army`（凝聚力结算）、`AiMilitaryBehavior`（AI 召集决策）、`LordConversationsCampaignBehavior`（对话中显示影响力费用）、`ArmyManagementVM`（UI 显示）等广泛引用。

## 心智模型

把 `DefaultArmyManagementCalculationModel` 想成军团系统的**规则引擎**：

- **谁创建它**：`SandBoxManager` 在 `InitializeGameStarter` 阶段通过 `AddModel<ArmyManagementCalculationModel>(new DefaultArmyManagementCalculationModel())` 注册。
- **谁持有它**：`GameModels` 容器解析为 `Campaign.Current.Models.ArmyManagementCalculationModel`。
- **谁调用它**：`Army` 每日调用 `CalculateDailyCohesionChange` 结算凝聚力；`AiMilitaryBehavior` 调用 `GetMobilePartiesToCallToArmy` 让 AI 决定召集谁；`ArmyManagementVM` 调用 `GetCohesionBoostInfluenceCost` 显示凝聚力提升费用。
- **核心机制**：召集军队消耗影响力。费用公式是一个多因子乘积：`基础费用(20) × 关系因子 × 规模因子 × 距离因子 × 政策因子 × perk 因子 × 文化特质因子`。同 clan 的部队免费。
- **凝聚力机制**：凝聚力每日自动下降（基础 -2），部队越多、饥饿部队越多、低士气部队越多，下降越快。凝聚力低于 10 时军团解散。
- **怎么改它**：继承并覆盖你关心的成员，在 `SubModule.InitializeGameStarter` 中注册。例如想让召集更便宜，就覆盖 `CalculatePartyInfluenceCost` 降低费用。

注意：这个模型只负责"算"，不负责"做"。实际的影响力扣除和部队加入由 `ChangeClanInfluenceAction` 和 `Army` 类完成。

## 主要属性

| Name | Signature | 说明 |
|------|-----------|------|
| `AIMobilePartySizeRatioToCallToArmy` | `public override float AIMobilePartySizeRatioToCallToArmy { get; }` | AI 部队被召集所需的最小规模比例，硬编码为 `0.6`（60%）。 |
| `PlayerMobilePartySizeRatioToCallToArmy` | `public override float PlayerMobilePartySizeRatioToCallToArmy { get; }` | 玩家部队被召集所需的最小规模比例，硬编码为 `0.4`（40%）。 |
| `MinimumNeededFoodInDaysToCallToArmy` | `public override float MinimumNeededFoodInDaysToCallToArmy { get; }` | 部队被召集所需的最低食物天数，硬编码为 `15` 天。 |
| `MaximumDistanceToCallToArmy` | `public override float MaximumDistanceToCallToArmy { get; }` | 部队被召集的最大距离，为城镇间平均距离的 8 倍。 |
| `InfluenceValuePerGold` | `public override int InfluenceValuePerGold { get; }` | 每单位金币对应的影响力值，硬编码为 `40`。 |
| `AverageCallToArmyCost` | `public override int AverageCallToArmyCost { get; }` | 召集部队的基础影响力费用，硬编码为 `20`。 |
| `CohesionThresholdForDispersion` | `public override int CohesionThresholdForDispersion { get; }` | 军团解散的凝聚力阈值，硬编码为 `10`。 |
| `MaximumWaitTime` | `public override float MaximumWaitTime { get; }` | 军团等待成员的最大时间，硬编码为 3 天（`CampaignTime.HoursInDay * 3`）。 |

## 主要方法

### CalculatePartyInfluenceCost
`public override int CalculatePartyInfluenceCost(MobileParty armyLeaderParty, MobileParty party)`

**用途 / Purpose:** 计算召集指定部队加入军团的影响力费用。同 clan 的部队免费（返回 0）。费用公式为多因子乘积：基础费用(20) × 关系因子（关系越差费用越高）× 规模因子（部队越大费用越高）× 距离因子（距离越远费用越高）× 政策因子（Marshals、RoyalCommissions、LordsPrivyCouncil、Senate）× perk 因子（InspiringLeader、CallToArms）× 文化特质因子（Vlandian、Sturgian）。

```csharp
// 来自 Army.cs:1071 的真实调用方式
int num = -Campaign.Current.Models.ArmyManagementCalculationModel
    .CalculatePartyInfluenceCost(this.LeaderParty, mobileParty);
ChangeClanInfluenceAction.Apply(this.LeaderParty.LeaderHero.Clan, (float)num);
```

### GetMobilePartiesToCallToArmy
`public override List<MobileParty> GetMobilePartiesToCallToArmy(MobileParty leaderParty)`

**用途 / Purpose:** 返回可以被召集到军团的部队列表。筛选条件：是领主部队、不在军团中、不是主部队、不是派系领袖、不在战斗中、食物充足、规模达标、不在海上、不在地图事件中。结果按"强度/费用"比排序，在影响力预算内贪心选择。

```csharp
// 来自 AiMilitaryBehavior.cs:494 的真实调用方式
List<MobileParty> mobilePartiesToCallToArmy = Campaign.Current.Models
    .ArmyManagementCalculationModel.GetMobilePartiesToCallToArmy(mobileParty);
```

### CalculateDailyCohesionChange
`public override ExplainedNumber CalculateDailyCohesionChange(Army army, bool includeDescriptions = false)`

**用途 / Purpose:** 计算军团每日凝聚力变化。基础值为 -2，根据以下因素调整：部队数量（越多越降）、饥饿部队数量、低士气部队数量（士气 ≤ 25）、小部队数量（健康成员 ≤ 10）。AI 军团的惩罚减半。HordeLeader 和 CampBuilding perk 可以减缓下降。

```csharp
// 来自 Army.cs:97 的真实调用方式
public float DailyCohesionChange
{
    get { return Campaign.Current.Models.ArmyManagementCalculationModel
        .CalculateDailyCohesionChange(this, false).ResultNumber; }
}
```

### CalculateTotalInfluenceCost
`public override int CalculateTotalInfluenceCost(Army army, float percentage)`

**用途 / Purpose:** 计算军团在指定百分比下的总影响力费用。遍历军团中所有非主部队，累加各自的 `CalculatePartyInfluenceCost`，再乘以百分比。非玩家主军团的费用乘以 0.25（AI 军团更便宜）。

### GetPartySizeScore
`public override float GetPartySizeScore(MobileParty party)`

**用途 / Purpose:** 返回部队的规模评分，即 `min(1.0, party.PartySizeRatio)`。规模评分用于召集费用计算和资格检查。

### CalculateNewCohesion
`public override int CalculateNewCohesion(Army army, PartyBase newParty, int calculatedCohesion, int sign)`

**用途 / Purpose:** 计算部队加入或离开后的新凝聚力。公式为加权平均：`(当前凝聚力 × 当前部队数 + 100 × sign) / (当前部队数 + sign)`，结果钳制在 `[0, 100]`。`sign` 为 1 表示加入，-1 表示离开。

### GetCohesionBoostInfluenceCost
`public override int GetCohesionBoostInfluenceCost(Army army, int percentageToBoost = 100)`

**用途 / Purpose:** 返回提升军团凝聚力指定百分比所需的影响力费用。内部调用 `CalculateTotalInfluenceCostInternal` 计算。

```csharp
// 来自 ArmyManagementVM.cs:65 的真实调用方式
this.CohesionBoostCost = Campaign.Current.Models.ArmyManagementCalculationModel
    .GetCohesionBoostInfluenceCost(MobileParty.MainParty.Army, 10);
```

### GetPartyRelation
`public override int GetPartyRelation(Hero hero)`

**用途 / Purpose:** 返回主角与指定英雄的关系值。如果 `hero` 为 `null` 返回 -101，如果是主角自己返回 101，否则返回 `Hero.MainHero.GetRelation(hero)`。

### CanPlayerCreateArmy
`public override bool CanPlayerCreateArmy(out TextObject disabledReason)`

**用途 / Purpose:** 检查玩家是否可以创建军团。条件包括：属于某个王国、不是雇佣兵、不在其他军团中、不在海上、不是俘虏、不在木筏状态、不在任务中、不在遭遇中、不在围城事件中、不在地图事件中。失败时通过 `disabledReason` 返回原因文本。

```csharp
// 在 CampaignBehaviorBase 或 UI 代码中检查
if (Campaign.Current.Models.ArmyManagementCalculationModel
    .CanPlayerCreateArmy(out TextObject reason))
{
    // 允许创建军团
}
else
{
    InformationManager.DisplayMessage(new InformationMessage(reason.ToString()));
}
```

### CheckPartyEligibility
`public override bool CheckPartyEligibility(MobileParty party, out TextObject explanation)`

**用途 / Purpose:** 检查指定部队是否可以被召集到玩家军团。条件包括：不在围城事件中、不是派系领袖、不在其他军团中、不在战斗中、规模达标（> 40%）、不在解散中、不在海上（或玩家不在海上）、不在木筏状态、距离合理。失败时通过 `explanation` 返回原因文本。

```csharp
// 在 UI 或 AI 决策中检查
if (Campaign.Current.Models.ArmyManagementCalculationModel
    .CheckPartyEligibility(party, out TextObject explanation))
{
    // 可以召集
}
```

### DailyBeingAtArmyInfluenceAward
`public override float DailyBeingAtArmyInfluenceAward(MobileParty armyMemberParty)`

**用途 / Purpose:** 计算部队在军团中每日获得的影响力奖励。公式为 `(EstimatedStrength + 20) / 200`，EmpireArmyInfluenceFeat 文化特质可以放大奖励。

```csharp
// 来自 DefaultClanPoliticsModel.cs:46 的真实调用方式
num2 += Campaign.Current.Models.ArmyManagementCalculationModel
    .DailyBeingAtArmyInfluenceAward(mobileParty);
```

## 使用示例

### 示例 1：读取军团凝聚力状态

```csharp
// 在 CampaignBehaviorBase 或任何战役运行期代码中
Army army = MobileParty.MainParty.Army;
if (army != null)
{
    float cohesionChange = Campaign.Current.Models.ArmyManagementCalculationModel
        .CalculateDailyCohesionChange(army, false).ResultNumber;
    int dispersionThreshold = Campaign.Current.Models.ArmyManagementCalculationModel
        .CohesionThresholdForDispersion;
    InformationManager.DisplayMessage(new InformationMessage(
        $"凝聚力变化：{cohesionChange:F1}，解散阈值：{dispersionThreshold}"));
}
```

### 示例 2：子类化并替换，降低召集费用

```csharp
public class MyArmyManagementModel : DefaultArmyManagementCalculationModel
{
    // 召集费用打五折
    public override int CalculatePartyInfluenceCost(MobileParty armyLeaderParty, MobileParty party)
    {
        return base.CalculatePartyInfluenceCost(armyLeaderParty, party) / 2;
    }
}

// 在 SubModule.InitializeGameStarter 中注册
protected override void InitializeGameStarter(Game game, IGameStarter starter)
{
    starter.AddModel(new MyArmyManagementModel());
}
```

### 示例 3：提高军团解散阈值

```csharp
public class MyArmyManagementModel : DefaultArmyManagementCalculationModel
{
    // 把解散阈值从 10 提高到 20，让军团更容易维持
    public override int CohesionThresholdForDispersion => 20;
}
```

### 示例 4：检查玩家是否可以创建军团

```csharp
// 在 CampaignBehaviorBase 或 UI 代码中
if (Campaign.Current.Models.ArmyManagementCalculationModel
    .CanPlayerCreateArmy(out TextObject reason))
{
    // 执行创建军团逻辑
    InformationManager.DisplayMessage(new InformationMessage("可以创建军团"));
}
else
{
    InformationManager.DisplayMessage(new InformationMessage(
        $"无法创建军团：{reason}"));
}
```

## 依赖关系

- 上游：[SandBoxManager](../SandBoxManager) 在 `InitializeGameStarter` 阶段通过 `AddModel<ArmyManagementCalculationModel>` 注册此实例。
- 持有：[GameModels](../GameModels) 通过 `GetGameModel<ArmyManagementCalculationModel>()` 解析并暴露为 `Campaign.Current.Models.ArmyManagementCalculationModel`。
- 下游：[Army](../Army) 调用 `CalculateDailyCohesionChange` 和 `CohesionThresholdForDispersion` 管理凝聚力；[AiMilitaryBehavior](../AiMilitaryBehavior) 调用 `GetMobilePartiesToCallToArmy` 让 AI 决定召集谁；[LordConversationsCampaignBehavior](../LordConversationsCampaignBehavior) 调用 `CalculatePartyInfluenceCost` 在对话中显示费用。
- 政治模型：[DefaultClanPoliticsModel](../DefaultClanPoliticsModel) 调用 `DailyBeingAtArmyInfluenceAward` 计算政治影响力。
- AI 行为：[AiArmyMemberBehavior](../AiArmyMemberBehavior) 调用 `PlayerMobilePartySizeRatioToCallToArmy` 和 `AIMobilePartySizeRatioToCallToArmy` 决定 AI 召集策略。
- 基类：[ArmyManagementCalculationModel](../ArmyManagementCalculationModel) 定义抽象契约，位于 `ComponentInterfaces` 命名空间。
- 文化特质：[DefaultCulturalFeats](../DefaultCulturalFeats) 提供 `EmpireArmyInfluenceFeat`、`VlandianArmyInfluenceFeat`、`SturgianArmyInfluenceCostFeat` 等文化特质。
- 政策：[DefaultPolicies](../DefaultPolicies) 提供 `Marshals`、`RoyalCommissions`、`LordsPrivyCouncil`、`Senate` 等政策。
- 时间：[CampaignTime](../CampaignTime) 提供 `HoursInDay` 常量。

## 参见

- [本区域目录](../)
- [ArmyManagementCalculationModel](../ArmyManagementCalculationModel) — 抽象基类，定义军团管理模型的接口契约
- [Army](../Army) — 军团实体，调用凝聚力计算
- [Clan](../Clan) — 家族实体，持有影响力
- [Kingdom](../Kingdom) — 王国实体，军团创建的前提
- [MobileParty](../MobileParty) — 部队实体，被召集的对象
- [Hero](../Hero) — 英雄实体，部队领主
- [DefaultClanPoliticsModel](../DefaultClanPoliticsModel) — 调用 `DailyBeingAtArmyInfluenceAward`
- [DefaultCulturalFeats](../DefaultCulturalFeats) — 文化特质定义
- [DefaultPolicies](../DefaultPolicies) — 政策定义
