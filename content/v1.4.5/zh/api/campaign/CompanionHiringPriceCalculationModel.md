---
title: "CompanionHiringPriceCalculationModel"
description: "CompanionHiringPriceCalculationModel 的自动生成类参考。"
---
# CompanionHiringPriceCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CompanionHiringPriceCalculationModel : MBGameModel<CompanionHiringPriceCalculationModel>`
**Base:** `MBGameModel<CompanionHiringPriceCalculationModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/CompanionHiringPriceCalculationModel.cs`

## 概述

`CompanionHiringPriceCalculationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `CompanionHiringPriceCalculationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetCompanionHiringPrice
`public abstract int GetCompanionHiringPrice(Hero companion)`

**用途 / Purpose:** 读取并返回当前对象中 companion hiring price 的结果。

```csharp
// 先通过子系统 API 拿到 CompanionHiringPriceCalculationModel 实例
CompanionHiringPriceCalculationModel companionHiringPriceCalculationModel = ...;
var result = companionHiringPriceCalculationModel.GetCompanionHiringPrice(companion);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
CompanionHiringPriceCalculationModel instance = ...;
```

## 参见

- [本区域目录](../)