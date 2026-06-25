---
title: "StoryModeTargetScoreCalculatingModel"
description: "StoryModeTargetScoreCalculatingModel 的自动生成类参考。"
---
# StoryModeTargetScoreCalculatingModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeTargetScoreCalculatingModel : TargetScoreCalculatingModel`
**Base:** `TargetScoreCalculatingModel`
**File:** `Modules.StoryMode/StoryMode/StoryMode.GameComponents/StoryModeTargetScoreCalculatingModel.cs`

## 概述

`StoryModeTargetScoreCalculatingModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `StoryModeTargetScoreCalculatingModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetDefensivePatrollingFactor
`public override float GetDefensivePatrollingFactor(bool isNavalPatrolling)`

**用途 / Purpose:** 读取并返回当前对象中 「defensive patrolling factor」 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeTargetScoreCalculatingModel 实例
StoryModeTargetScoreCalculatingModel storyModeTargetScoreCalculatingModel = ...;
var result = storyModeTargetScoreCalculatingModel.GetDefensivePatrollingFactor(false);
```

### GetOffensivePatrollingFactor
`public override float GetOffensivePatrollingFactor(bool isNavalPatrolling)`

**用途 / Purpose:** 读取并返回当前对象中 「offensive patrolling factor」 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeTargetScoreCalculatingModel 实例
StoryModeTargetScoreCalculatingModel storyModeTargetScoreCalculatingModel = ...;
var result = storyModeTargetScoreCalculatingModel.GetOffensivePatrollingFactor(false);
```

### CalculateDefensivePatrollingScoreForSettlement
`public override float CalculateDefensivePatrollingScoreForSettlement(Settlement settlement, bool isTargetingPort, MobileParty mobileParty)`

**用途 / Purpose:** 计算「defensive patrolling score for settlement」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 StoryModeTargetScoreCalculatingModel 实例
StoryModeTargetScoreCalculatingModel storyModeTargetScoreCalculatingModel = ...;
var result = storyModeTargetScoreCalculatingModel.CalculateDefensivePatrollingScoreForSettlement(settlement, false, mobileParty);
```

### CalculateOffensivePatrollingScoreForSettlement
`public override float CalculateOffensivePatrollingScoreForSettlement(Settlement settlement, bool isTargetingPort, MobileParty mobileParty)`

**用途 / Purpose:** 计算「offensive patrolling score for settlement」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 StoryModeTargetScoreCalculatingModel 实例
StoryModeTargetScoreCalculatingModel storyModeTargetScoreCalculatingModel = ...;
var result = storyModeTargetScoreCalculatingModel.CalculateOffensivePatrollingScoreForSettlement(settlement, false, mobileParty);
```

### CurrentObjectiveValue
`public override float CurrentObjectiveValue(MobileParty mobileParty)`

**用途 / Purpose:** 处理与 「current objective value」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 StoryModeTargetScoreCalculatingModel 实例
StoryModeTargetScoreCalculatingModel storyModeTargetScoreCalculatingModel = ...;
var result = storyModeTargetScoreCalculatingModel.CurrentObjectiveValue(mobileParty);
```

### GetTargetScoreForFaction
`public override float GetTargetScoreForFaction(Settlement targetSettlement, ArmyTypes missionType, MobileParty mobileParty, float ourStrength)`

**用途 / Purpose:** 读取并返回当前对象中 「target score for faction」 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeTargetScoreCalculatingModel 实例
StoryModeTargetScoreCalculatingModel storyModeTargetScoreCalculatingModel = ...;
var result = storyModeTargetScoreCalculatingModel.GetTargetScoreForFaction(targetSettlement, missionType, mobileParty, 0);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<StoryModeTargetScoreCalculatingModel>(new MyStoryModeTargetScoreCalculatingModel());
```

## 参见

- [本区域目录](../)