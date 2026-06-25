---
title: "DefaultHeroDeathProbabilityCalculationModel"
description: "DefaultHeroDeathProbabilityCalculationModel 的自动生成类参考。"
---
# DefaultHeroDeathProbabilityCalculationModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultHeroDeathProbabilityCalculationModel : HeroDeathProbabilityCalculationModel`
**Base:** `HeroDeathProbabilityCalculationModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultHeroDeathProbabilityCalculationModel.cs`

## 概述

`DefaultHeroDeathProbabilityCalculationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultHeroDeathProbabilityCalculationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateHeroDeathProbability
`public override float CalculateHeroDeathProbability(Hero hero)`

**用途 / Purpose:** 计算hero death probability的当前值或结果。

```csharp
// 先通过子系统 API 拿到 DefaultHeroDeathProbabilityCalculationModel 实例
DefaultHeroDeathProbabilityCalculationModel defaultHeroDeathProbabilityCalculationModel = ...;
var result = defaultHeroDeathProbabilityCalculationModel.CalculateHeroDeathProbability(hero);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultHeroDeathProbabilityCalculationModel>(new MyDefaultHeroDeathProbabilityCalculationModel());
```

## 参见

- [本区域目录](../)