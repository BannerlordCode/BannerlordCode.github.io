---
title: "DefaultBuildingModel"
description: "DefaultBuildingModel 的自动生成类参考。"
---
# DefaultBuildingModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultBuildingModel : BuildingModel`
**Base:** `BuildingModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultBuildingModel.cs`

## 概述

`DefaultBuildingModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultBuildingModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CanAddBuildingTypeToTown
`public override bool CanAddBuildingTypeToTown(BuildingType buildingType, Town town)`

**用途 / Purpose:** 检查当前对象是否满足 「add building type to town」 的前置条件。

```csharp
// 先通过子系统 API 拿到 DefaultBuildingModel 实例
DefaultBuildingModel defaultBuildingModel = ...;
var result = defaultBuildingModel.CanAddBuildingTypeToTown(buildingType, town);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultBuildingModel>(new MyDefaultBuildingModel());
```

## 参见

- [本区域目录](../)