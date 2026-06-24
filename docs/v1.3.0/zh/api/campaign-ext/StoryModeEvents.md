<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StoryModeEvents`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 从当前集合/状态中移除 `listeners`。

### OnMainStoryLineSideChosen
`public void OnMainStoryLineSideChosen(MainStoryLineSide side)`

**用途 / Purpose:** 当 `main story line side chosen` 事件触发时调用此方法。

### OnStoryModeTutorialEnded
`public void OnStoryModeTutorialEnded()`

**用途 / Purpose:** 当 `story mode tutorial ended` 事件触发时调用此方法。

### OnBannerPieceCollected
`public void OnBannerPieceCollected()`

**用途 / Purpose:** 当 `banner piece collected` 事件触发时调用此方法。

### OnConspiracyActivated
`public void OnConspiracyActivated()`

**用途 / Purpose:** 当 `conspiracy activated` 事件触发时调用此方法。

### OnTravelToVillageTutorialQuestStarted
`public void OnTravelToVillageTutorialQuestStarted()`

**用途 / Purpose:** 当 `travel to village tutorial quest started` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new StoryModeEvents();
value.RemoveListeners(obj);
```

## 参见

- [完整类目录](../catalog)