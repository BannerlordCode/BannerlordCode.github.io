---
title: "BuildingConstructionModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BuildingConstructionModel`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# BuildingConstructionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class BuildingConstructionModel : MBGameModel<BuildingConstructionModel>`
**Base:** `MBGameModel<BuildingConstructionModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/BuildingConstructionModel.cs`

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

**用途 / Purpose:** 处理 `calculate daily construction power` 相关逻辑。

### CalculateDailyConstructionPowerWithoutBoost
`public abstract int CalculateDailyConstructionPowerWithoutBoost(Town town)`

**用途 / Purpose:** 处理 `calculate daily construction power without boost` 相关逻辑。

### GetBoostCost
`public abstract int GetBoostCost(Town town)`

**用途 / Purpose:** 获取 `boost cost` 的当前值。

### GetBoostAmount
`public abstract int GetBoostAmount(Town town)`

**用途 / Purpose:** 获取 `boost amount` 的当前值。

## 使用示例

```csharp
var implementation = new CustomBuildingConstructionModel();
```

## 参见

- [完整类目录](../catalog)