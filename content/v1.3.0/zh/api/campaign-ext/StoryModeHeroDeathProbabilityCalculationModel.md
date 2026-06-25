---
title: "StoryModeHeroDeathProbabilityCalculationModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StoryModeHeroDeathProbabilityCalculationModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# StoryModeHeroDeathProbabilityCalculationModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeHeroDeathProbabilityCalculationModel : HeroDeathProbabilityCalculationModel`
**Base:** `HeroDeathProbabilityCalculationModel`
**File:** `StoryMode/GameComponents/StoryModeHeroDeathProbabilityCalculationModel.cs`

## 概述

`StoryModeHeroDeathProbabilityCalculationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `StoryModeHeroDeathProbabilityCalculationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CalculateHeroDeathProbability
`public override float CalculateHeroDeathProbability(Hero hero)`

**用途 / Purpose:** 处理 `calculate hero death probability` 相关逻辑。

## 使用示例

```csharp
Game.Current.ReplaceModel<StoryModeHeroDeathProbabilityCalculationModel>(new MyStoryModeHeroDeathProbabilityCalculationModel());
```

## 参见

- [完整类目录](../catalog)