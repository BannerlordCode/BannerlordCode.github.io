---
title: "WallHitPointCalculationModel"
description: "WallHitPointCalculationModel 的自动生成类参考。"
---
# WallHitPointCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class WallHitPointCalculationModel : MBGameModel<WallHitPointCalculationModel>`
**Base:** `MBGameModel<WallHitPointCalculationModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/WallHitPointCalculationModel.cs`

## 概述

`WallHitPointCalculationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `WallHitPointCalculationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateMaximumWallHitPoint
`public abstract float CalculateMaximumWallHitPoint(Town town)`

**用途 / Purpose:** 计算maximum wall hit point的当前值或结果。

```csharp
// 先通过子系统 API 拿到 WallHitPointCalculationModel 实例
WallHitPointCalculationModel wallHitPointCalculationModel = ...;
var result = wallHitPointCalculationModel.CalculateMaximumWallHitPoint(town);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
WallHitPointCalculationModel instance = ...;
```

## 参见

- [本区域目录](../)