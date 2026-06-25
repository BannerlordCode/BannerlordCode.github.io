---
title: "MainStoryLine"
description: "MainStoryLine 的自动生成类参考。"
---
# MainStoryLine

**Namespace:** StoryMode
**Module:** StoryMode
**Type:** `public class MainStoryLine`
**Base:** 无
**File:** `Modules.StoryMode/StoryMode/StoryMode/MainStoryLine.cs`

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

**用途 / Purpose:** 在 session launched 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MainStoryLine 实例
MainStoryLine mainStoryLine = ...;
mainStoryLine.OnSessionLaunched();
```

### SetTutorialScores
`public void SetTutorialScores(Dictionary<string, float> scores)`

**用途 / Purpose:** 为 tutorial scores 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MainStoryLine 实例
MainStoryLine mainStoryLine = ...;
mainStoryLine.SetTutorialScores(dictionary<string, 0);
```

### GetTutorialScores
`public Dictionary<string, float> GetTutorialScores()`

**用途 / Purpose:** 读取并返回当前对象中 tutorial scores 的结果。

```csharp
// 先通过子系统 API 拿到 MainStoryLine 实例
MainStoryLine mainStoryLine = ...;
var result = mainStoryLine.GetTutorialScores();
```

### SetStoryLineSide
`public void SetStoryLineSide(MainStoryLineSide side)`

**用途 / Purpose:** 为 story line side 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MainStoryLine 实例
MainStoryLine mainStoryLine = ...;
mainStoryLine.SetStoryLineSide(side);
```

### SetMentorSettlements
`public void SetMentorSettlements(Settlement imperialMentorSettlement, Settlement antiImperialMentorSettlement)`

**用途 / Purpose:** 为 mentor settlements 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MainStoryLine 实例
MainStoryLine mainStoryLine = ...;
mainStoryLine.SetMentorSettlements(imperialMentorSettlement, antiImperialMentorSettlement);
```

### CompleteTutorialPhase
`public void CompleteTutorialPhase(bool isSkipped)`

**用途 / Purpose:** 调用 CompleteTutorialPhase 对应的操作。

```csharp
// 先通过子系统 API 拿到 MainStoryLine 实例
MainStoryLine mainStoryLine = ...;
mainStoryLine.CompleteTutorialPhase(false);
```

### CompleteFirstPhase
`public void CompleteFirstPhase()`

**用途 / Purpose:** 调用 CompleteFirstPhase 对应的操作。

```csharp
// 先通过子系统 API 拿到 MainStoryLine 实例
MainStoryLine mainStoryLine = ...;
mainStoryLine.CompleteFirstPhase();
```

### CompleteSecondPhase
`public void CompleteSecondPhase()`

**用途 / Purpose:** 调用 CompleteSecondPhase 对应的操作。

```csharp
// 先通过子系统 API 拿到 MainStoryLine 实例
MainStoryLine mainStoryLine = ...;
mainStoryLine.CompleteSecondPhase();
```

### CancelSecondAndThirdPhase
`public void CancelSecondAndThirdPhase()`

**用途 / Purpose:** 检查当前对象是否满足 cel second and third phase 的前置条件。

```csharp
// 先通过子系统 API 拿到 MainStoryLine 实例
MainStoryLine mainStoryLine = ...;
mainStoryLine.CancelSecondAndThirdPhase();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MainStoryLine mainStoryLine = ...;
mainStoryLine.OnSessionLaunched();
```

## 参见

- [本区域目录](../)