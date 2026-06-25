---
title: "TutorialObjective"
description: "TutorialObjective 的自动生成类参考。"
---
# TutorialObjective

**Namespace:** StoryMode.Missions
**Module:** StoryMode.Missions
**Type:** `public class TutorialObjective`
**Base:** 无
**File:** `StoryMode/Missions/TrainingFieldMissionController.cs`

## 概述

`TutorialObjective` 位于 `StoryMode.Missions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode.Missions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; }` |
| `IsFinished` | `public bool IsFinished { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `SubTasks` | `public List<TrainingFieldMissionController.TutorialObjective> SubTasks { get; }` |
| `Score` | `public float Score { get; }` |

## 主要方法

### SetTextVariableOfName
`public void SetTextVariableOfName(string tag, int variable)`

**用途 / Purpose:** 为 「text variable of name」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TutorialObjective 实例
TutorialObjective tutorialObjective = ...;
tutorialObjective.SetTextVariableOfName("example", 0);
```

### GetNameString
`public string GetNameString()`

**用途 / Purpose:** 读取并返回当前对象中 「name string」 的结果。

```csharp
// 先通过子系统 API 拿到 TutorialObjective 实例
TutorialObjective tutorialObjective = ...;
var result = tutorialObjective.GetNameString();
```

### SetActive
`public bool SetActive(bool isActive)`

**用途 / Purpose:** 为 「active」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TutorialObjective 实例
TutorialObjective tutorialObjective = ...;
var result = tutorialObjective.SetActive(false);
```

### FinishTask
`public bool FinishTask()`

**用途 / Purpose:** 结束「task」流程并执行必要的收尾工作。

```csharp
// 先通过子系统 API 拿到 TutorialObjective 实例
TutorialObjective tutorialObjective = ...;
var result = tutorialObjective.FinishTask();
```

### FinishSubTask
`public void FinishSubTask(string subTaskName, float score)`

**用途 / Purpose:** 结束「sub task」流程并执行必要的收尾工作。

```csharp
// 先通过子系统 API 拿到 TutorialObjective 实例
TutorialObjective tutorialObjective = ...;
tutorialObjective.FinishSubTask("example", 0);
```

### SetAllSubTasksInactive
`public bool SetAllSubTasksInactive()`

**用途 / Purpose:** 为 「all sub tasks inactive」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TutorialObjective 实例
TutorialObjective tutorialObjective = ...;
var result = tutorialObjective.SetAllSubTasksInactive();
```

### AddSubTask
`public void AddSubTask(TrainingFieldMissionController.TutorialObjective newSubTask)`

**用途 / Purpose:** 将 「sub task」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 TutorialObjective 实例
TutorialObjective tutorialObjective = ...;
tutorialObjective.AddSubTask(newSubTask);
```

### RestoreScoreFromSave
`public void RestoreScoreFromSave(float score)`

**用途 / Purpose:** 处理与 「restore score from save」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 TutorialObjective 实例
TutorialObjective tutorialObjective = ...;
tutorialObjective.RestoreScoreFromSave(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TutorialObjective tutorialObjective = ...;
tutorialObjective.SetTextVariableOfName("example", 0);
```

## 参见

- [本区域目录](../)