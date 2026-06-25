---
title: "BuildingModel"
description: "BuildingModel 的自动生成类参考。"
---
# BuildingModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BuildingModel : MBGameModel<BuildingModel>`
**Base:** `MBGameModel<BuildingModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/BuildingModel.cs`

## 概述

`BuildingModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `BuildingModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CanAddBuildingTypeToTown
`public abstract bool CanAddBuildingTypeToTown(BuildingType buildingType, Town town)`

**用途 / Purpose:** 检查当前对象是否满足 「add building type to town」 的前置条件。

```csharp
// 先通过子系统 API 拿到 BuildingModel 实例
BuildingModel buildingModel = ...;
var result = buildingModel.CanAddBuildingTypeToTown(buildingType, town);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
BuildingModel instance = ...;
```

## 参见

- [本区域目录](../)