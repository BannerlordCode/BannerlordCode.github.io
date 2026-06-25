---
title: "RansomValueCalculationModel"
description: "RansomValueCalculationModel 的自动生成类参考。"
---
# RansomValueCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class RansomValueCalculationModel : MBGameModel<RansomValueCalculationModel>`
**Base:** `MBGameModel<RansomValueCalculationModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/RansomValueCalculationModel.cs`

## 概述

`RansomValueCalculationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `RansomValueCalculationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### PrisonerRansomValue
`public abstract int PrisonerRansomValue(CharacterObject prisoner, Hero sellerHero = null)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 RansomValueCalculationModel 实例
RansomValueCalculationModel ransomValueCalculationModel = ...;
var result = ransomValueCalculationModel.PrisonerRansomValue(prisoner, null);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
RansomValueCalculationModel instance = ...;
```

## 参见

- [本区域目录](../)