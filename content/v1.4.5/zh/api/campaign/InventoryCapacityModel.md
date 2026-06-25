---
title: "InventoryCapacityModel"
description: "InventoryCapacityModel 的自动生成类参考。"
---
# InventoryCapacityModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class InventoryCapacityModel : MBGameModel<InventoryCapacityModel>`
**Base:** `MBGameModel<InventoryCapacityModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/InventoryCapacityModel.cs`

## 概述

`InventoryCapacityModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `InventoryCapacityModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateInventoryCapacity
`public abstract ExplainedNumber CalculateInventoryCapacity(MobileParty mobileParty, bool isCurrentlyAtSea, bool includeDescriptions = false, int additionalManOnFoot = 0, int additionalSpareMounts = 0, int additionalPackAnimals = 0, bool includeFollowers = false)`

**用途 / Purpose:** 计算「inventory capacity」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 InventoryCapacityModel 实例
InventoryCapacityModel inventoryCapacityModel = ...;
var result = inventoryCapacityModel.CalculateInventoryCapacity(mobileParty, false, false, 0, 0, 0, false);
```

### GetItemAverageWeight
`public abstract int GetItemAverageWeight()`

**用途 / Purpose:** 读取并返回当前对象中 「item average weight」 的结果。

```csharp
// 先通过子系统 API 拿到 InventoryCapacityModel 实例
InventoryCapacityModel inventoryCapacityModel = ...;
var result = inventoryCapacityModel.GetItemAverageWeight();
```

### GetItemEffectiveWeight
`public abstract float GetItemEffectiveWeight(EquipmentElement equipmentElement, MobileParty mobileParty, bool isCurrentlyAtSea, out TextObject description)`

**用途 / Purpose:** 读取并返回当前对象中 「item effective weight」 的结果。

```csharp
// 先通过子系统 API 拿到 InventoryCapacityModel 实例
InventoryCapacityModel inventoryCapacityModel = ...;
var result = inventoryCapacityModel.GetItemEffectiveWeight(equipmentElement, mobileParty, false, description);
```

### CalculateTotalWeightCarried
`public abstract ExplainedNumber CalculateTotalWeightCarried(MobileParty mobileParty, bool isCurrentlyAtSea, bool includeDescriptions = false)`

**用途 / Purpose:** 计算「total weight carried」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 InventoryCapacityModel 实例
InventoryCapacityModel inventoryCapacityModel = ...;
var result = inventoryCapacityModel.CalculateTotalWeightCarried(mobileParty, false, false);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
InventoryCapacityModel instance = ...;
```

## 参见

- [本区域目录](../)