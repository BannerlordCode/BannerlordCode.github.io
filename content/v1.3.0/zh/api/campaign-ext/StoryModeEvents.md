---
title: "StoryModeEvents"
description: "StoryModeEvents 的自动生成类参考。"
---
# StoryModeEvents

**Namespace:** StoryMode
**Module:** StoryMode
**Type:** `public class StoryModeEvents : CampaignEventReceiver`
**Base:** `CampaignEventReceiver`
**File:** `StoryMode/StoryModeEvents.cs`

## 概述

`StoryModeEvents` 位于 `StoryMode`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static StoryModeEvents Instance { get; }` |
| `OnMainStoryLineSideChosenEvent` | `public static IMbEvent<MainStoryLineSide> OnMainStoryLineSideChosenEvent { get; }` |
| `OnStoryModeTutorialEndedEvent` | `public static IMbEvent OnStoryModeTutorialEndedEvent { get; }` |
| `OnBannerPieceCollectedEvent` | `public static IMbEvent OnBannerPieceCollectedEvent { get; }` |
| `OnConspiracyActivatedEvent` | `public static IMbEvent OnConspiracyActivatedEvent { get; }` |
| `OnTravelToVillageTutorialQuestStartedEvent` | `public static IMbEvent OnTravelToVillageTutorialQuestStartedEvent { get; }` |

## 主要方法

### RemoveListeners
`public override void RemoveListeners(object obj)`

**用途 / Purpose:** **用途 / Purpose:** 从当前容器或状态中移除 listeners。

```csharp
// 先通过子系统 API 拿到 StoryModeEvents 实例
StoryModeEvents storyModeEvents = ...;
storyModeEvents.RemoveListeners(obj);
```

### OnMainStoryLineSideChosen
`public void OnMainStoryLineSideChosen(MainStoryLineSide side)`

**用途 / Purpose:** **用途 / Purpose:** 在 main story line side chosen 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 StoryModeEvents 实例
StoryModeEvents storyModeEvents = ...;
storyModeEvents.OnMainStoryLineSideChosen(side);
```

### OnStoryModeTutorialEnded
`public void OnStoryModeTutorialEnded()`

**用途 / Purpose:** **用途 / Purpose:** 在 story mode tutorial ended 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 StoryModeEvents 实例
StoryModeEvents storyModeEvents = ...;
storyModeEvents.OnStoryModeTutorialEnded();
```

### OnBannerPieceCollected
`public void OnBannerPieceCollected()`

**用途 / Purpose:** **用途 / Purpose:** 在 banner piece collected 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 StoryModeEvents 实例
StoryModeEvents storyModeEvents = ...;
storyModeEvents.OnBannerPieceCollected();
```

### OnConspiracyActivated
`public void OnConspiracyActivated()`

**用途 / Purpose:** **用途 / Purpose:** 在 conspiracy activated 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 StoryModeEvents 实例
StoryModeEvents storyModeEvents = ...;
storyModeEvents.OnConspiracyActivated();
```

### OnTravelToVillageTutorialQuestStarted
`public void OnTravelToVillageTutorialQuestStarted()`

**用途 / Purpose:** **用途 / Purpose:** 在 travel to village tutorial quest started 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 StoryModeEvents 实例
StoryModeEvents storyModeEvents = ...;
storyModeEvents.OnTravelToVillageTutorialQuestStarted();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
StoryModeEvents storyModeEvents = ...;
storyModeEvents.RemoveListeners(obj);
```

## 参见

- [本区域目录](../)