---
title: "MainStoryLine"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MainStoryLine`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MainStoryLine

**Namespace:** StoryMode
**Module:** StoryMode
**Type:** `public class MainStoryLine`
**Base:** 无
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode/StoryMode/MainStoryLine.cs`

## 概述

`MainStoryLine` 位于 `StoryMode`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsPlayerInteractionRestricted` | `public bool IsPlayerInteractionRestricted { get; }` |
| `IsOnImperialQuestLine` | `public bool IsOnImperialQuestLine { get; }` |
| `IsOnAntiImperialQuestLine` | `public bool IsOnAntiImperialQuestLine { get; }` |
| `TutorialPhase` | `public TutorialPhase TutorialPhase { get; }` |
| `FirstPhase` | `public FirstPhase FirstPhase { get; }` |
| `SecondPhase` | `public SecondPhase SecondPhase { get; }` |
| `ThirdPhase` | `public ThirdPhase ThirdPhase { get; }` |
| `PlayerSupportedKingdom` | `public Kingdom PlayerSupportedKingdom { get; }` |
| `IsCompleted` | `public bool IsCompleted { get; }` |
| `DragonBanner` | `public ItemObject DragonBanner { get; }` |

## 主要方法

### OnSessionLaunched
`public void OnSessionLaunched()`

**用途 / Purpose:** 当 `session launched` 事件触发时调用此方法。

### SetTutorialScores
`public void SetTutorialScores(Dictionary<string, float> scores)`

**用途 / Purpose:** 设置 `tutorial scores` 的值或状态。

### GetTutorialScores
`public Dictionary<string, float> GetTutorialScores()`

**用途 / Purpose:** 获取 `tutorial scores` 的当前值。

### SetStoryLineSide
`public void SetStoryLineSide(MainStoryLineSide side)`

**用途 / Purpose:** 设置 `story line side` 的值或状态。

### SetMentorSettlements
`public void SetMentorSettlements(Settlement imperialMentorSettlement, Settlement antiImperialMentorSettlement)`

**用途 / Purpose:** 设置 `mentor settlements` 的值或状态。

### CompleteTutorialPhase
`public void CompleteTutorialPhase(bool isSkipped)`

**用途 / Purpose:** 处理 `complete tutorial phase` 相关逻辑。

### CompleteFirstPhase
`public void CompleteFirstPhase()`

**用途 / Purpose:** 处理 `complete first phase` 相关逻辑。

### CompleteSecondPhase
`public void CompleteSecondPhase()`

**用途 / Purpose:** 处理 `complete second phase` 相关逻辑。

### CancelSecondAndThirdPhase
`public void CancelSecondAndThirdPhase()`

**用途 / Purpose:** 判断当前对象是否可以执行 `cel second and third phase`。

## 使用示例

```csharp
var value = new MainStoryLine();
value.OnSessionLaunched();
```

## 参见

- [完整类目录](../catalog)