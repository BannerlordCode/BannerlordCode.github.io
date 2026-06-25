---
title: "StoryModeHeroDeathProbabilityCalculationModel"
description: "StoryModeHeroDeathProbabilityCalculationModel 的自动生成类参考。"
---
# StoryModeHeroDeathProbabilityCalculationModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeHeroDeathProbabilityCalculationModel : HeroDeathProbabilityCalculationModel`
**Base:** `HeroDeathProbabilityCalculationModel`
**File:** `Modules.StoryMode/StoryMode/StoryMode.GameComponents/StoryModeHeroDeathProbabilityCalculationModel.cs`

## 概述

`StoryModeHeroDeathProbabilityCalculationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `StoryModeHeroDeathProbabilityCalculationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateHeroDeathProbability
`public override float CalculateHeroDeathProbability(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 计算hero death probability的当前值或结果。

```csharp
// 先通过子系统 API 拿到 StoryModeHeroDeathProbabilityCalculationModel 实例
StoryModeHeroDeathProbabilityCalculationModel storyModeHeroDeathProbabilityCalculationModel = ...;
var result = storyModeHeroDeathProbabilityCalculationModel.CalculateHeroDeathProbability(hero);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<StoryModeHeroDeathProbabilityCalculationModel>(new MyStoryModeHeroDeathProbabilityCalculationModel());
```

## 参见

- [本区域目录](../)