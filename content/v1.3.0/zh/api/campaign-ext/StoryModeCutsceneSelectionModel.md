---
title: "StoryModeCutsceneSelectionModel"
description: "StoryModeCutsceneSelectionModel 的自动生成类参考。"
---
# StoryModeCutsceneSelectionModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeCutsceneSelectionModel : CutsceneSelectionModel`
**Base:** `CutsceneSelectionModel`
**File:** `StoryMode/GameComponents/StoryModeCutsceneSelectionModel.cs`

## 概述

`StoryModeCutsceneSelectionModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `StoryModeCutsceneSelectionModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetKingdomDestroyedSceneNotification
`public override SceneNotificationData GetKingdomDestroyedSceneNotification(Kingdom kingdom)`

**用途 / Purpose:** 读取并返回当前对象中 「kingdom destroyed scene notification」 的结果。

```csharp
// 先通过子系统 API 拿到 StoryModeCutsceneSelectionModel 实例
StoryModeCutsceneSelectionModel storyModeCutsceneSelectionModel = ...;
var result = storyModeCutsceneSelectionModel.GetKingdomDestroyedSceneNotification(kingdom);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<StoryModeCutsceneSelectionModel>(new MyStoryModeCutsceneSelectionModel());
```

## 参见

- [本区域目录](../)