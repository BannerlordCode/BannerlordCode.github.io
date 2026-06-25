---
title: "BuildingScoreCalculationModel"
description: "BuildingScoreCalculationModel 的自动生成类参考。"
---
# BuildingScoreCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BuildingScoreCalculationModel : MBGameModel<BuildingScoreCalculationModel>`
**Base:** `MBGameModel<BuildingScoreCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BuildingScoreCalculationModel.cs`

## 概述

`BuildingScoreCalculationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `BuildingScoreCalculationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetNextBuilding
`public abstract Building GetNextBuilding(Town town)`

**用途 / Purpose:** 读取并返回当前对象中 「next building」 的结果。

```csharp
// 先通过子系统 API 拿到 BuildingScoreCalculationModel 实例
BuildingScoreCalculationModel buildingScoreCalculationModel = ...;
var result = buildingScoreCalculationModel.GetNextBuilding(town);
```

### GetNextDailyBuilding
`public abstract Building GetNextDailyBuilding(Town town)`

**用途 / Purpose:** 读取并返回当前对象中 「next daily building」 的结果。

```csharp
// 先通过子系统 API 拿到 BuildingScoreCalculationModel 实例
BuildingScoreCalculationModel buildingScoreCalculationModel = ...;
var result = buildingScoreCalculationModel.GetNextDailyBuilding(town);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
BuildingScoreCalculationModel instance = ...;
```

## 参见

- [本区域目录](../)