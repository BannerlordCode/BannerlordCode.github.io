---
title: "StoryModeCutsceneSelectionModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StoryModeCutsceneSelectionModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# StoryModeCutsceneSelectionModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeCutsceneSelectionModel : CutsceneSelectionModel`
**Base:** `CutsceneSelectionModel`
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode/StoryMode.GameComponents/StoryModeCutsceneSelectionModel.cs`

## 概述

`StoryModeCutsceneSelectionModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `StoryModeCutsceneSelectionModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetKingdomDestroyedSceneNotification
`public override SceneNotificationData GetKingdomDestroyedSceneNotification(Kingdom kingdom)`

**用途 / Purpose:** 获取 `kingdom destroyed scene notification` 的当前值。

## 使用示例

```csharp
Game.Current.ReplaceModel<StoryModeCutsceneSelectionModel>(new MyStoryModeCutsceneSelectionModel());
```

## 参见

- [完整类目录](../catalog)