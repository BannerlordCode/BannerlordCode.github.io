---
title: "DefaultArmyManagementCalculationModel"
description: "DefaultArmyManagementCalculationModel 的自动生成类参考。"
---
# DefaultArmyManagementCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultArmyManagementCalculationModel : ArmyManagementCalculationModel`
**Base:** `ArmyManagementCalculationModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultArmyManagementCalculationModel.cs`

## 概述

`DefaultArmyManagementCalculationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultArmyManagementCalculationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### DailyBeingAtArmyInfluenceAward
`public override float DailyBeingAtArmyInfluenceAward(MobileParty armyMemberParty)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 DefaultArmyManagementCalculationModel 实例
DefaultArmyManagementCalculationModel defaultArmyManagementCalculationModel = ...;
var result = defaultArmyManagementCalculationModel.DailyBeingAtArmyInfluenceAward(armyMemberParty);
```

### CalculatePartyInfluenceCost
`public override int CalculatePartyInfluenceCost(MobileParty armyLeaderParty, MobileParty party)`

**用途 / Purpose:** 计算「party influence cost」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultArmyManagementCalculationModel 实例
DefaultArmyManagementCalculationModel defaultArmyManagementCalculationModel = ...;
var result = defaultArmyManagementCalculationModel.CalculatePartyInfluenceCost(armyLeaderParty, party);
```

### CanLordCreateArmy
`public override bool CanLordCreateArmy(MobileParty mobileParty, out MBList<MobileParty> possibleArmyMembers)`

**用途 / Purpose:** 检查当前对象是否满足 「lord create army」 的前置条件。

```csharp
// 先通过子系统 API 拿到 DefaultArmyManagementCalculationModel 实例
DefaultArmyManagementCalculationModel defaultArmyManagementCalculationModel = ...;
var result = defaultArmyManagementCalculationModel.CanLordCreateArmy(mobileParty, possibleArmyMembers);
```

### CalculateTotalInfluenceCost
`public override int CalculateTotalInfluenceCost(Army army, float percentage)`

**用途 / Purpose:** 计算「total influence cost」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultArmyManagementCalculationModel 实例
DefaultArmyManagementCalculationModel defaultArmyManagementCalculationModel = ...;
var result = defaultArmyManagementCalculationModel.CalculateTotalInfluenceCost(army, 0);
```

### GetPartySizeScore
`public override float GetPartySizeScore(MobileParty party)`

**用途 / Purpose:** 读取并返回当前对象中 「party size score」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultArmyManagementCalculationModel 实例
DefaultArmyManagementCalculationModel defaultArmyManagementCalculationModel = ...;
var result = defaultArmyManagementCalculationModel.GetPartySizeScore(party);
```

### CalculateDailyCohesionChange
`public override ExplainedNumber CalculateDailyCohesionChange(Army army, bool includeDescriptions = false)`

**用途 / Purpose:** 计算「daily cohesion change」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultArmyManagementCalculationModel 实例
DefaultArmyManagementCalculationModel defaultArmyManagementCalculationModel = ...;
var result = defaultArmyManagementCalculationModel.CalculateDailyCohesionChange(army, false);
```

### CalculateNewCohesion
`public override int CalculateNewCohesion(Army army, PartyBase newParty, int calculatedCohesion, int sign)`

**用途 / Purpose:** 计算「new cohesion」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultArmyManagementCalculationModel 实例
DefaultArmyManagementCalculationModel defaultArmyManagementCalculationModel = ...;
var result = defaultArmyManagementCalculationModel.CalculateNewCohesion(army, newParty, 0, 0);
```

### GetCohesionBoostInfluenceCost
`public override int GetCohesionBoostInfluenceCost(Army army, int percentageToBoost = 100)`

**用途 / Purpose:** 读取并返回当前对象中 「cohesion boost influence cost」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultArmyManagementCalculationModel 实例
DefaultArmyManagementCalculationModel defaultArmyManagementCalculationModel = ...;
var result = defaultArmyManagementCalculationModel.GetCohesionBoostInfluenceCost(army, 0);
```

### GetPartyRelation
`public override int GetPartyRelation(Hero hero)`

**用途 / Purpose:** 读取并返回当前对象中 「party relation」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultArmyManagementCalculationModel 实例
DefaultArmyManagementCalculationModel defaultArmyManagementCalculationModel = ...;
var result = defaultArmyManagementCalculationModel.GetPartyRelation(hero);
```

### CanPlayerCreateArmy
`public override bool CanPlayerCreateArmy(out TextObject disabledReason)`

**用途 / Purpose:** 检查当前对象是否满足 「player create army」 的前置条件。

```csharp
// 先通过子系统 API 拿到 DefaultArmyManagementCalculationModel 实例
DefaultArmyManagementCalculationModel defaultArmyManagementCalculationModel = ...;
var result = defaultArmyManagementCalculationModel.CanPlayerCreateArmy(disabledReason);
```

### CheckPartyEligibility
`public override bool CheckPartyEligibility(MobileParty party, out TextObject explanation)`

**用途 / Purpose:** 检查「party eligibility」在当前对象中是否成立。

```csharp
// 先通过子系统 API 拿到 DefaultArmyManagementCalculationModel 实例
DefaultArmyManagementCalculationModel defaultArmyManagementCalculationModel = ...;
var result = defaultArmyManagementCalculationModel.CheckPartyEligibility(party, explanation);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultArmyManagementCalculationModel>(new MyDefaultArmyManagementCalculationModel());
```

## 参见

- [本区域目录](../)