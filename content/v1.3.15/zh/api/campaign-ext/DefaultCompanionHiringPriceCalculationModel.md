---
title: "DefaultCompanionHiringPriceCalculationModel"
description: "DefaultCompanionHiringPriceCalculationModel 的自动生成类参考。"
---
# DefaultCompanionHiringPriceCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCompanionHiringPriceCalculationModel : CompanionHiringPriceCalculationModel`
**Base:** `CompanionHiringPriceCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCompanionHiringPriceCalculationModel.cs`

## 概述

`DefaultCompanionHiringPriceCalculationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultCompanionHiringPriceCalculationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetCompanionHiringPrice
`public override int GetCompanionHiringPrice(Hero companion)`

**用途 / Purpose:** 读取并返回当前对象中 「companion hiring price」 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultCompanionHiringPriceCalculationModel 实例
DefaultCompanionHiringPriceCalculationModel defaultCompanionHiringPriceCalculationModel = ...;
var result = defaultCompanionHiringPriceCalculationModel.GetCompanionHiringPrice(companion);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultCompanionHiringPriceCalculationModel>(new MyDefaultCompanionHiringPriceCalculationModel());
```

## 参见

- [本区域目录](../)