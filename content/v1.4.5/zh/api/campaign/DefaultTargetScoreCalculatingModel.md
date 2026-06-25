---
title: "DefaultTargetScoreCalculatingModel"
description: "DefaultTargetScoreCalculatingModel 的自动生成类参考。"
---
# DefaultTargetScoreCalculatingModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultTargetScoreCalculatingModel : TargetScoreCalculatingModel`
**Base:** `TargetScoreCalculatingModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultTargetScoreCalculatingModel.cs`

## 概述

`DefaultTargetScoreCalculatingModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultTargetScoreCalculatingModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetDefensivePatrollingFactor
`public override float GetDefensivePatrollingFactor(bool isNavalPatrolling)`

**用途 / Purpose:** 读取并返回当前对象中 defensive patrolling factor 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultTargetScoreCalculatingModel 实例
DefaultTargetScoreCalculatingModel defaultTargetScoreCalculatingModel = ...;
var result = defaultTargetScoreCalculatingModel.GetDefensivePatrollingFactor(false);
```

### GetOffensivePatrollingFactor
`public override float GetOffensivePatrollingFactor(bool isNavalPatrolling)`

**用途 / Purpose:** 读取并返回当前对象中 offensive patrolling factor 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultTargetScoreCalculatingModel 实例
DefaultTargetScoreCalculatingModel defaultTargetScoreCalculatingModel = ...;
var result = defaultTargetScoreCalculatingModel.GetOffensivePatrollingFactor(false);
```

### CalculateOffensivePatrollingScoreForSettlement
`public override float CalculateOffensivePatrollingScoreForSettlement(Settlement settlement, bool isTargetingPort, MobileParty mobileParty)`

**用途 / Purpose:** 计算offensive patrolling score for settlement的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultTargetScoreCalculatingModel 实例
DefaultTargetScoreCalculatingModel defaultTargetScoreCalculatingModel = ...;
var result = defaultTargetScoreCalculatingModel.CalculateOffensivePatrollingScoreForSettlement(settlement, false, mobileParty);
```

### CurrentObjectiveValue
`public override float CurrentObjectiveValue(MobileParty mobileParty)`

**用途 / Purpose:** 调用 CurrentObjectiveValue 对应的操作。

```csharp
// 先通过子系统 API 拿到 DefaultTargetScoreCalculatingModel 实例
DefaultTargetScoreCalculatingModel defaultTargetScoreCalculatingModel = ...;
var result = defaultTargetScoreCalculatingModel.CurrentObjectiveValue(mobileParty);
```

### CalculateDefensivePatrollingScoreForSettlement
`public override float CalculateDefensivePatrollingScoreForSettlement(Settlement settlement, bool isTargetingPort, MobileParty mobileParty)`

**用途 / Purpose:** 计算defensive patrolling score for settlement的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultTargetScoreCalculatingModel 实例
DefaultTargetScoreCalculatingModel defaultTargetScoreCalculatingModel = ...;
var result = defaultTargetScoreCalculatingModel.CalculateDefensivePatrollingScoreForSettlement(settlement, false, mobileParty);
```

### GetTargetScoreForFaction
`public override float GetTargetScoreForFaction(Settlement targetSettlement, Army.ArmyTypes missionType, MobileParty mobileParty, float ourStrength)`

**用途 / Purpose:** 读取并返回当前对象中 target score for faction 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultTargetScoreCalculatingModel 实例
DefaultTargetScoreCalculatingModel defaultTargetScoreCalculatingModel = ...;
var result = defaultTargetScoreCalculatingModel.GetTargetScoreForFaction(targetSettlement, missionType, mobileParty, 0);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultTargetScoreCalculatingModel>(new MyDefaultTargetScoreCalculatingModel());
```

## 参见

- [本区域目录](../)