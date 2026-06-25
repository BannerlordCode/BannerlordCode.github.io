---
title: "HeroDeathProbabilityCalculationModel"
description: "HeroDeathProbabilityCalculationModel 的自动生成类参考。"
---
# HeroDeathProbabilityCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class HeroDeathProbabilityCalculationModel : MBGameModel<HeroDeathProbabilityCalculationModel>`
**Base:** `MBGameModel<HeroDeathProbabilityCalculationModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/HeroDeathProbabilityCalculationModel.cs`

## 概述

`HeroDeathProbabilityCalculationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `HeroDeathProbabilityCalculationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateHeroDeathProbability
`public abstract float CalculateHeroDeathProbability(Hero hero)`

**用途 / Purpose:** 计算hero death probability的当前值或结果。

```csharp
// 先通过子系统 API 拿到 HeroDeathProbabilityCalculationModel 实例
HeroDeathProbabilityCalculationModel heroDeathProbabilityCalculationModel = ...;
var result = heroDeathProbabilityCalculationModel.CalculateHeroDeathProbability(hero);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
HeroDeathProbabilityCalculationModel instance = ...;
```

## 参见

- [本区域目录](../)