---
title: "DefaultInventoryCapacityModel"
description: "DefaultInventoryCapacityModel 的自动生成类参考。"
---
# DefaultInventoryCapacityModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultInventoryCapacityModel : InventoryCapacityModel`
**Base:** `InventoryCapacityModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultInventoryCapacityModel.cs`

## 概述

`DefaultInventoryCapacityModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultInventoryCapacityModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetItemAverageWeight
`public override int GetItemAverageWeight()`

**用途 / Purpose:** 读取并返回当前对象中 「item average weight」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultInventoryCapacityModel 实例
DefaultInventoryCapacityModel defaultInventoryCapacityModel = ...;
var result = defaultInventoryCapacityModel.GetItemAverageWeight();
```

### GetItemEffectiveWeight
`public override float GetItemEffectiveWeight(EquipmentElement equipmentElement, MobileParty mobileParty, out TextObject description)`

**用途 / Purpose:** 读取并返回当前对象中 「item effective weight」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultInventoryCapacityModel 实例
DefaultInventoryCapacityModel defaultInventoryCapacityModel = ...;
var result = defaultInventoryCapacityModel.GetItemEffectiveWeight(equipmentElement, mobileParty, description);
```

### CalculateInventoryCapacity
`public override ExplainedNumber CalculateInventoryCapacity(MobileParty mobileParty, bool isCurrentlyAtSea, bool includeDescriptions = false, int additionalTroops = 0, int additionalSpareMounts = 0, int additionalPackAnimals = 0, bool includeFollowers = false)`

**用途 / Purpose:** 计算「inventory capacity」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultInventoryCapacityModel 实例
DefaultInventoryCapacityModel defaultInventoryCapacityModel = ...;
var result = defaultInventoryCapacityModel.CalculateInventoryCapacity(mobileParty, false, false, 0, 0, 0, false);
```

### CalculateTotalWeightCarried
`public override ExplainedNumber CalculateTotalWeightCarried(MobileParty mobileParty, bool isCurrentlyAtSea, bool includeDescriptions = false)`

**用途 / Purpose:** 计算「total weight carried」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultInventoryCapacityModel 实例
DefaultInventoryCapacityModel defaultInventoryCapacityModel = ...;
var result = defaultInventoryCapacityModel.CalculateTotalWeightCarried(mobileParty, false, false);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultInventoryCapacityModel>(new MyDefaultInventoryCapacityModel());
```

## 参见

- [本区域目录](../)