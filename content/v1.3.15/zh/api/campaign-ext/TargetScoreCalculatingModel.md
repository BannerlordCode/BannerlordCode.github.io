---
title: "TargetScoreCalculatingModel"
description: "TargetScoreCalculatingModel 的自动生成类参考。"
---
# TargetScoreCalculatingModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TargetScoreCalculatingModel : MBGameModel<TargetScoreCalculatingModel>`
**Base:** `MBGameModel<TargetScoreCalculatingModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/TargetScoreCalculatingModel.cs`

## 概述

`TargetScoreCalculatingModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `TargetScoreCalculatingModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `TravelingToAssignmentFactor` | `public abstract float TravelingToAssignmentFactor { get; }` |
| `BesiegingFactor` | `public abstract float BesiegingFactor { get; }` |
| `AssaultingTownFactor` | `public abstract float AssaultingTownFactor { get; }` |
| `RaidingFactor` | `public abstract float RaidingFactor { get; }` |
| `DefendingFactor` | `public abstract float DefendingFactor { get; }` |

## 主要方法

### GetPatrollingFactor
`public abstract float GetPatrollingFactor(bool isNavalPatrolling)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 patrolling factor 的结果。

```csharp
// 先通过子系统 API 拿到 TargetScoreCalculatingModel 实例
TargetScoreCalculatingModel targetScoreCalculatingModel = ...;
var result = targetScoreCalculatingModel.GetPatrollingFactor(false);
```

### GetTargetScoreForFaction
`public abstract float GetTargetScoreForFaction(Settlement targetSettlement, Army.ArmyTypes missionType, MobileParty mobileParty, float ourStrength)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 target score for faction 的结果。

```csharp
// 先通过子系统 API 拿到 TargetScoreCalculatingModel 实例
TargetScoreCalculatingModel targetScoreCalculatingModel = ...;
var result = targetScoreCalculatingModel.GetTargetScoreForFaction(targetSettlement, missionType, mobileParty, 0);
```

### CalculatePatrollingScoreForSettlement
`public abstract float CalculatePatrollingScoreForSettlement(Settlement settlement, bool isFromPort, MobileParty mobileParty)`

**用途 / Purpose:** **用途 / Purpose:** 计算patrolling score for settlement的当前值或结果。

```csharp
// 先通过子系统 API 拿到 TargetScoreCalculatingModel 实例
TargetScoreCalculatingModel targetScoreCalculatingModel = ...;
var result = targetScoreCalculatingModel.CalculatePatrollingScoreForSettlement(settlement, false, mobileParty);
```

### CurrentObjectiveValue
`public abstract float CurrentObjectiveValue(MobileParty mobileParty)`

**用途 / Purpose:** **用途 / Purpose:** 调用 CurrentObjectiveValue 对应的操作。

```csharp
// 先通过子系统 API 拿到 TargetScoreCalculatingModel 实例
TargetScoreCalculatingModel targetScoreCalculatingModel = ...;
var result = targetScoreCalculatingModel.CurrentObjectiveValue(mobileParty);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
TargetScoreCalculatingModel instance = ...;
```

## 参见

- [本区域目录](../)