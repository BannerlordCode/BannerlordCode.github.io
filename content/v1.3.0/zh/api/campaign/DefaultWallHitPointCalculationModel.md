---
title: "DefaultWallHitPointCalculationModel"
description: "DefaultWallHitPointCalculationModel 的自动生成类参考。"
---
# DefaultWallHitPointCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultWallHitPointCalculationModel : WallHitPointCalculationModel`
**Base:** `WallHitPointCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultWallHitPointCalculationModel.cs`

## 概述

`DefaultWallHitPointCalculationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultWallHitPointCalculationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateMaximumWallHitPoint
`public override float CalculateMaximumWallHitPoint(Town town)`

**用途 / Purpose:** 计算「maximum wall hit point」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultWallHitPointCalculationModel 实例
DefaultWallHitPointCalculationModel defaultWallHitPointCalculationModel = ...;
var result = defaultWallHitPointCalculationModel.CalculateMaximumWallHitPoint(town);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultWallHitPointCalculationModel>(new MyDefaultWallHitPointCalculationModel());
```

## 参见

- [本区域目录](../)