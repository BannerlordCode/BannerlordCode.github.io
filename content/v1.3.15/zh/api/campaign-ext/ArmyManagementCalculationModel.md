---
title: "ArmyManagementCalculationModel"
description: "ArmyManagementCalculationModel 的自动生成类参考。"
---
# ArmyManagementCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ArmyManagementCalculationModel : MBGameModel<ArmyManagementCalculationModel>`
**Base:** `MBGameModel<ArmyManagementCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ArmyManagementCalculationModel.cs`

## 概述

`ArmyManagementCalculationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `ArmyManagementCalculationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `AIMobilePartySizeRatioToCallToArmy` | `public abstract float AIMobilePartySizeRatioToCallToArmy { get; }` |
| `PlayerMobilePartySizeRatioToCallToArmy` | `public abstract float PlayerMobilePartySizeRatioToCallToArmy { get; }` |
| `MinimumNeededFoodInDaysToCallToArmy` | `public abstract float MinimumNeededFoodInDaysToCallToArmy { get; }` |
| `MaximumDistanceToCallToArmy` | `public abstract float MaximumDistanceToCallToArmy { get; }` |
| `InfluenceValuePerGold` | `public abstract int InfluenceValuePerGold { get; }` |
| `AverageCallToArmyCost` | `public abstract int AverageCallToArmyCost { get; }` |
| `CohesionThresholdForDispersion` | `public abstract int CohesionThresholdForDispersion { get; }` |
| `MaximumWaitTime` | `public abstract float MaximumWaitTime { get; }` |

## 主要方法

### CanPlayerCreateArmy
`public abstract bool CanPlayerCreateArmy(out TextObject disabledReason)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 player create army 的前置条件。

```csharp
// 先通过子系统 API 拿到 ArmyManagementCalculationModel 实例
ArmyManagementCalculationModel armyManagementCalculationModel = ...;
var result = armyManagementCalculationModel.CanPlayerCreateArmy(disabledReason);
```

### CalculatePartyInfluenceCost
`public abstract int CalculatePartyInfluenceCost(MobileParty armyLeaderParty, MobileParty party)`

**用途 / Purpose:** **用途 / Purpose:** 计算party influence cost的当前值或结果。

```csharp
// 先通过子系统 API 拿到 ArmyManagementCalculationModel 实例
ArmyManagementCalculationModel armyManagementCalculationModel = ...;
var result = armyManagementCalculationModel.CalculatePartyInfluenceCost(armyLeaderParty, party);
```

### DailyBeingAtArmyInfluenceAward
`public abstract float DailyBeingAtArmyInfluenceAward(MobileParty armyMemberParty)`

**用途 / Purpose:** **用途 / Purpose:** 调用 DailyBeingAtArmyInfluenceAward 对应的操作。

```csharp
// 先通过子系统 API 拿到 ArmyManagementCalculationModel 实例
ArmyManagementCalculationModel armyManagementCalculationModel = ...;
var result = armyManagementCalculationModel.DailyBeingAtArmyInfluenceAward(armyMemberParty);
```

### GetMobilePartiesToCallToArmy
`public abstract List<MobileParty> GetMobilePartiesToCallToArmy(MobileParty leaderParty)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 mobile parties to call to army 的结果。

```csharp
// 先通过子系统 API 拿到 ArmyManagementCalculationModel 实例
ArmyManagementCalculationModel armyManagementCalculationModel = ...;
var result = armyManagementCalculationModel.GetMobilePartiesToCallToArmy(leaderParty);
```

### CalculateTotalInfluenceCost
`public abstract int CalculateTotalInfluenceCost(Army army, float percentage)`

**用途 / Purpose:** **用途 / Purpose:** 计算total influence cost的当前值或结果。

```csharp
// 先通过子系统 API 拿到 ArmyManagementCalculationModel 实例
ArmyManagementCalculationModel armyManagementCalculationModel = ...;
var result = armyManagementCalculationModel.CalculateTotalInfluenceCost(army, 0);
```

### GetPartySizeScore
`public abstract float GetPartySizeScore(MobileParty party)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 party size score 的结果。

```csharp
// 先通过子系统 API 拿到 ArmyManagementCalculationModel 实例
ArmyManagementCalculationModel armyManagementCalculationModel = ...;
var result = armyManagementCalculationModel.GetPartySizeScore(party);
```

### CheckPartyEligibility
`public abstract bool CheckPartyEligibility(MobileParty party, out TextObject explanation)`

**用途 / Purpose:** **用途 / Purpose:** 检查party eligibility在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 ArmyManagementCalculationModel 实例
ArmyManagementCalculationModel armyManagementCalculationModel = ...;
var result = armyManagementCalculationModel.CheckPartyEligibility(party, explanation);
```

### GetPartyRelation
`public abstract int GetPartyRelation(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 party relation 的结果。

```csharp
// 先通过子系统 API 拿到 ArmyManagementCalculationModel 实例
ArmyManagementCalculationModel armyManagementCalculationModel = ...;
var result = armyManagementCalculationModel.GetPartyRelation(hero);
```

### CalculateDailyCohesionChange
`public abstract ExplainedNumber CalculateDailyCohesionChange(Army army, bool includeDescriptions = false)`

**用途 / Purpose:** **用途 / Purpose:** 计算daily cohesion change的当前值或结果。

```csharp
// 先通过子系统 API 拿到 ArmyManagementCalculationModel 实例
ArmyManagementCalculationModel armyManagementCalculationModel = ...;
var result = armyManagementCalculationModel.CalculateDailyCohesionChange(army, false);
```

### CalculateNewCohesion
`public abstract int CalculateNewCohesion(Army army, PartyBase newParty, int calculatedCohesion, int sign)`

**用途 / Purpose:** **用途 / Purpose:** 计算new cohesion的当前值或结果。

```csharp
// 先通过子系统 API 拿到 ArmyManagementCalculationModel 实例
ArmyManagementCalculationModel armyManagementCalculationModel = ...;
var result = armyManagementCalculationModel.CalculateNewCohesion(army, newParty, 0, 0);
```

### GetCohesionBoostInfluenceCost
`public abstract int GetCohesionBoostInfluenceCost(Army army, int percentageToBoost = 100)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 cohesion boost influence cost 的结果。

```csharp
// 先通过子系统 API 拿到 ArmyManagementCalculationModel 实例
ArmyManagementCalculationModel armyManagementCalculationModel = ...;
var result = armyManagementCalculationModel.GetCohesionBoostInfluenceCost(army, 0);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
ArmyManagementCalculationModel instance = ...;
```

## 参见

- [本区域目录](../)