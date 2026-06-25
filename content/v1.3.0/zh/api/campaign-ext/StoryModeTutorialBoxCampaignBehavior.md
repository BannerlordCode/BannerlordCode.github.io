---
title: "StoryModeTutorialBoxCampaignBehavior"
description: "StoryModeTutorialBoxCampaignBehavior 的自动生成类参考。"
---
# StoryModeTutorialBoxCampaignBehavior

**Namespace:** StoryMode.GameComponents.CampaignBehaviors
**Module:** StoryMode.GameComponents
**Type:** `public class StoryModeTutorialBoxCampaignBehavior : CampaignBehaviorBase`
**Base:** `CampaignBehaviorBase`
**File:** `StoryMode/GameComponents/CampaignBehaviors/StoryModeTutorialBoxCampaignBehavior.cs`

## 概述

`StoryModeTutorialBoxCampaignBehavior` 位于 `StoryMode.GameComponents.CampaignBehaviors`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode.GameComponents.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `AvailableTutorials` | `public MBReadOnlyList<CampaignTutorial> AvailableTutorials { get; }` |

## 主要方法

### RegisterEvents
`public override void RegisterEvents()`

**用途 / Purpose:** 将events注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 StoryModeTutorialBoxCampaignBehavior 实例
StoryModeTutorialBoxCampaignBehavior storyModeTutorialBoxCampaignBehavior = ...;
storyModeTutorialBoxCampaignBehavior.RegisterEvents();
```

### SyncData
`public override void SyncData(IDataStore dataStore)`

**用途 / Purpose:** 将data同步到相关上下文或系统中。

```csharp
// 先通过子系统 API 拿到 StoryModeTutorialBoxCampaignBehavior 实例
StoryModeTutorialBoxCampaignBehavior storyModeTutorialBoxCampaignBehavior = ...;
storyModeTutorialBoxCampaignBehavior.SyncData(dataStore);
```

### OnResetAllTutorials
`public void OnResetAllTutorials(ResetAllTutorialsEvent obj)`

**用途 / Purpose:** 在 reset all tutorials 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 StoryModeTutorialBoxCampaignBehavior 实例
StoryModeTutorialBoxCampaignBehavior storyModeTutorialBoxCampaignBehavior = ...;
storyModeTutorialBoxCampaignBehavior.OnResetAllTutorials(obj);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
StoryModeTutorialBoxCampaignBehavior storyModeTutorialBoxCampaignBehavior = ...;
storyModeTutorialBoxCampaignBehavior.RegisterEvents();
```

## 参见

- [本区域目录](../)