---
title: "StoryModeNotableSpawnModel"
description: "StoryModeNotableSpawnModel 的自动生成类参考。"
---
# StoryModeNotableSpawnModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeNotableSpawnModel : NotableSpawnModel`
**Base:** `NotableSpawnModel`
**File:** `StoryMode/GameComponents/StoryModeNotableSpawnModel.cs`

## 概述

`StoryModeNotableSpawnModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `StoryModeNotableSpawnModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetTargetNotableCountForSettlement
`public override int GetTargetNotableCountForSettlement(Settlement settlement, Occupation occupation)`

**用途 / Purpose:** 读取并返回当前对象中 target notable count for settlement 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeNotableSpawnModel 实例
StoryModeNotableSpawnModel storyModeNotableSpawnModel = ...;
var result = storyModeNotableSpawnModel.GetTargetNotableCountForSettlement(settlement, occupation);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<StoryModeNotableSpawnModel>(new MyStoryModeNotableSpawnModel());
```

## 参见

- [本区域目录](../)