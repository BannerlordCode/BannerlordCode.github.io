---
title: "AssembleTheBannerQuest"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AssembleTheBannerQuest`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# AssembleTheBannerQuest

**Namespace:** StoryMode.Quests.FirstPhase
**Module:** StoryMode.Quests
**Type:** `public class AssembleTheBannerQuest : StoryModeQuestBase`
**Base:** `StoryModeQuestBase`
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode/StoryMode.Quests.FirstPhase/AssembleTheBannerQuest.cs`

## 概述

`AssembleTheBannerQuest` 位于 `StoryMode.Quests.FirstPhase`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode.Quests.FirstPhase` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnFailed
`public override void OnFailed()`

**用途 / Purpose:** 当 `failed` 事件触发时调用此方法。

### OnCanceled
`public override void OnCanceled()`

**用途 / Purpose:** 当 `canceled` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new AssembleTheBannerQuest();
value.OnFailed();
```

## 参见

- [完整类目录](../catalog)