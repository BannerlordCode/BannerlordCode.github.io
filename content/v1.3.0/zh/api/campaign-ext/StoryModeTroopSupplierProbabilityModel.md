---
title: "StoryModeTroopSupplierProbabilityModel"
description: "StoryModeTroopSupplierProbabilityModel 的自动生成类参考。"
---
# StoryModeTroopSupplierProbabilityModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeTroopSupplierProbabilityModel : TroopSupplierProbabilityModel`
**Base:** `TroopSupplierProbabilityModel`
**File:** `StoryMode/GameComponents/StoryModeTroopSupplierProbabilityModel.cs`

## 概述

`StoryModeTroopSupplierProbabilityModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `StoryModeTroopSupplierProbabilityModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization
`public override void EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization(MapEventParty battleParty, FlattenedTroopRoster priorityTroops, bool includePlayers, int sizeOfSide, bool forcePriorityTroops, List<ValueTuple<FlattenedTroopRosterElement, MapEventParty, float>> priorityList)`

**用途 / Purpose:** **用途 / Purpose:** 调用 EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization 对应的操作。

```csharp
// 先通过子系统 API 拿到 StoryModeTroopSupplierProbabilityModel 实例
StoryModeTroopSupplierProbabilityModel storyModeTroopSupplierProbabilityModel = ...;
storyModeTroopSupplierProbabilityModel.EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization(battleParty, priorityTroops, false, 0, false, list<ValueTuple<FlattenedTroopRosterElement, mapEventParty, 0);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<StoryModeTroopSupplierProbabilityModel>(new MyStoryModeTroopSupplierProbabilityModel());
```

## 参见

- [本区域目录](../)