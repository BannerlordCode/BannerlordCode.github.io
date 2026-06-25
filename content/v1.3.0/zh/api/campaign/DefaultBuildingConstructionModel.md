---
title: "DefaultBuildingConstructionModel"
description: "DefaultBuildingConstructionModel 的自动生成类参考。"
---
# DefaultBuildingConstructionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBuildingConstructionModel : BuildingConstructionModel`
**Base:** `BuildingConstructionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBuildingConstructionModel.cs`

## 概述

`DefaultBuildingConstructionModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultBuildingConstructionModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `TownBoostCost` | `public override int TownBoostCost { get; }` |
| `TownBoostBonus` | `public override int TownBoostBonus { get; }` |
| `CastleBoostCost` | `public override int CastleBoostCost { get; }` |
| `CastleBoostBonus` | `public override int CastleBoostBonus { get; }` |

## 主要方法

### CalculateDailyConstructionPower
`public override ExplainedNumber CalculateDailyConstructionPower(Town town, bool includeDescriptions = false)`

**用途 / Purpose:** **用途 / Purpose:** 计算daily construction power的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultBuildingConstructionModel 实例
DefaultBuildingConstructionModel defaultBuildingConstructionModel = ...;
var result = defaultBuildingConstructionModel.CalculateDailyConstructionPower(town, false);
```

### CalculateDailyConstructionPowerWithoutBoost
`public override int CalculateDailyConstructionPowerWithoutBoost(Town town)`

**用途 / Purpose:** **用途 / Purpose:** 计算daily construction power without boost的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultBuildingConstructionModel 实例
DefaultBuildingConstructionModel defaultBuildingConstructionModel = ...;
var result = defaultBuildingConstructionModel.CalculateDailyConstructionPowerWithoutBoost(town);
```

### GetBoostAmount
`public override int GetBoostAmount(Town town)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 boost amount 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultBuildingConstructionModel 实例
DefaultBuildingConstructionModel defaultBuildingConstructionModel = ...;
var result = defaultBuildingConstructionModel.GetBoostAmount(town);
```

### GetBoostCost
`public override int GetBoostCost(Town town)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 boost cost 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultBuildingConstructionModel 实例
DefaultBuildingConstructionModel defaultBuildingConstructionModel = ...;
var result = defaultBuildingConstructionModel.GetBoostCost(town);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultBuildingConstructionModel>(new MyDefaultBuildingConstructionModel());
```

## 参见

- [本区域目录](../)