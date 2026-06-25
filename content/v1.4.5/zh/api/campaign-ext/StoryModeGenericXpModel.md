---
title: "StoryModeGenericXpModel"
description: "StoryModeGenericXpModel 的自动生成类参考。"
---
# StoryModeGenericXpModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeGenericXpModel : GenericXpModel`
**Base:** `GenericXpModel`
**File:** `Modules.StoryMode/StoryMode/StoryMode.GameComponents/StoryModeGenericXpModel.cs`

## 概述

`StoryModeGenericXpModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `StoryModeGenericXpModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetXpMultiplier
`public override float GetXpMultiplier(Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 xp multiplier 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeGenericXpModel 实例
StoryModeGenericXpModel storyModeGenericXpModel = ...;
var result = storyModeGenericXpModel.GetXpMultiplier(hero);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<StoryModeGenericXpModel>(new MyStoryModeGenericXpModel());
```

## 参见

- [本区域目录](../)