---
title: "BuildingModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BuildingModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BuildingModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BuildingModel : MBGameModel<BuildingModel>`
**Base:** `MBGameModel<BuildingModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BuildingModel.cs`

## 概述

`BuildingModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `BuildingModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CanAddBuildingTypeToTown
`public abstract bool CanAddBuildingTypeToTown(BuildingType buildingType, Town town)`

**用途 / Purpose:** 判断当前对象是否可以执行 `add building type to town`。

## 使用示例

```csharp
var implementation = new CustomBuildingModel();
```

## 参见

- [完整类目录](../catalog)