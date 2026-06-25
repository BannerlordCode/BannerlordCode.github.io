---
title: "BuildingConstructionModel"
description: "BuildingConstructionModel 的自动生成类参考。"
---
# BuildingConstructionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BuildingConstructionModel : MBGameModel<BuildingConstructionModel>`
**Base:** `MBGameModel<BuildingConstructionModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/BuildingConstructionModel.cs`

## 概述

`BuildingConstructionModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `BuildingConstructionModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `TownBoostCost` | `public abstract int TownBoostCost { get; }` |
| `TownBoostBonus` | `public abstract int TownBoostBonus { get; }` |
| `CastleBoostCost` | `public abstract int CastleBoostCost { get; }` |
| `CastleBoostBonus` | `public abstract int CastleBoostBonus { get; }` |

## 主要方法

### CalculateDailyConstructionPower
`public abstract ExplainedNumber CalculateDailyConstructionPower(Town town, bool includeDescriptions = false)`

**用途 / Purpose:** 计算daily construction power的当前值或结果。

```csharp
// 先通过子系统 API 拿到 BuildingConstructionModel 实例
BuildingConstructionModel buildingConstructionModel = ...;
var result = buildingConstructionModel.CalculateDailyConstructionPower(town, false);
```

### CalculateDailyConstructionPowerWithoutBoost
`public abstract int CalculateDailyConstructionPowerWithoutBoost(Town town)`

**用途 / Purpose:** 计算daily construction power without boost的当前值或结果。

```csharp
// 先通过子系统 API 拿到 BuildingConstructionModel 实例
BuildingConstructionModel buildingConstructionModel = ...;
var result = buildingConstructionModel.CalculateDailyConstructionPowerWithoutBoost(town);
```

### GetBoostCost
`public abstract int GetBoostCost(Town town)`

**用途 / Purpose:** 读取并返回当前对象中 boost cost 的结果。

```csharp
// 先通过子系统 API 拿到 BuildingConstructionModel 实例
BuildingConstructionModel buildingConstructionModel = ...;
var result = buildingConstructionModel.GetBoostCost(town);
```

### GetBoostAmount
`public abstract int GetBoostAmount(Town town)`

**用途 / Purpose:** 读取并返回当前对象中 boost amount 的结果。

```csharp
// 先通过子系统 API 拿到 BuildingConstructionModel 实例
BuildingConstructionModel buildingConstructionModel = ...;
var result = buildingConstructionModel.GetBoostAmount(town);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
BuildingConstructionModel instance = ...;
```

## 参见

- [本区域目录](../)