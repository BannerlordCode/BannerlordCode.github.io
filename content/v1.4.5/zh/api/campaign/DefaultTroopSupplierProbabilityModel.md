---
title: "DefaultTroopSupplierProbabilityModel"
description: "DefaultTroopSupplierProbabilityModel 的自动生成类参考。"
---
# DefaultTroopSupplierProbabilityModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultTroopSupplierProbabilityModel : TroopSupplierProbabilityModel`
**Base:** `TroopSupplierProbabilityModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultTroopSupplierProbabilityModel.cs`

## 概述

`DefaultTroopSupplierProbabilityModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultTroopSupplierProbabilityModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization
`public override void EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization(MapEventParty battleParty, FlattenedTroopRoster priorityTroops, bool includePlayer, int sizeOfSide, bool forcePriorityTroops, List<(FlattenedTroopRosterElement, MapEventParty, float)> priorityList)`

**用途 / Purpose:** 调用 EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization 对应的操作。

```csharp
// 先通过子系统 API 拿到 DefaultTroopSupplierProbabilityModel 实例
DefaultTroopSupplierProbabilityModel defaultTroopSupplierProbabilityModel = ...;
defaultTroopSupplierProbabilityModel.EnqueueTroopSpawnProbabilitiesAccordingToUnitSpawnPrioritization(battleParty, priorityTroops, false, 0, false, list<(FlattenedTroopRosterElement, mapEventParty, 0);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultTroopSupplierProbabilityModel>(new MyDefaultTroopSupplierProbabilityModel());
```

## 参见

- [本区域目录](../)