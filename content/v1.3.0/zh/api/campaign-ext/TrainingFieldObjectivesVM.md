---
title: "TrainingFieldObjectivesVM"
description: "TrainingFieldObjectivesVM 的自动生成类参考。"
---
# TrainingFieldObjectivesVM

**Namespace:** StoryMode.ViewModelCollection.Missions
**Module:** StoryMode.ViewModelCollection
**Type:** `public class TrainingFieldObjectivesVM : ViewModel`
**Base:** `ViewModel`
**File:** `StoryMode.ViewModelCollection/Missions/TrainingFieldObjectivesVM.cs`

## 概述

`TrainingFieldObjectivesVM` 位于 `StoryMode.ViewModelCollection.Missions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode.ViewModelCollection.Missions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ObjectiveItems` | `public MBBindingList<TrainingFieldObjectiveItemVM> ObjectiveItems { get; set; }` |
| `CurrentObjectiveText` | `public string CurrentObjectiveText { get; set; }` |
| `TimerText` | `public string TimerText { get; set; }` |
| `LeaveAnyTimeText` | `public string LeaveAnyTimeText { get; set; }` |
| `CurrentMouseObjective` | `public int CurrentMouseObjective { get; set; }` |
| `RightStickAbbreviatedText` | `public string RightStickAbbreviatedText { get; set; }` |
| `IsGamepadActive` | `public bool IsGamepadActive { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** **用途 / Purpose:** 使 values 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 TrainingFieldObjectivesVM 实例
TrainingFieldObjectivesVM trainingFieldObjectivesVM = ...;
trainingFieldObjectivesVM.RefreshValues();
```

### UpdateObjectivesWith
`public void UpdateObjectivesWith(List<TrainingFieldMissionController.TutorialObjective> objectives)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 objectives with 的最新表示。

```csharp
// 先通过子系统 API 拿到 TrainingFieldObjectivesVM 实例
TrainingFieldObjectivesVM trainingFieldObjectivesVM = ...;
trainingFieldObjectivesVM.UpdateObjectivesWith(objectives);
```

### UpdateCurrentObjectiveText
`public void UpdateCurrentObjectiveText(TextObject currentObjectiveText)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 current objective text 的最新表示。

```csharp
// 先通过子系统 API 拿到 TrainingFieldObjectivesVM 实例
TrainingFieldObjectivesVM trainingFieldObjectivesVM = ...;
trainingFieldObjectivesVM.UpdateCurrentObjectiveText(currentObjectiveText);
```

### UpdateCurrentMouseObjective
`public void UpdateCurrentMouseObjective(TrainingFieldMissionController.MouseObjectives currentMouseObjective)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 current mouse objective 的最新表示。

```csharp
// 先通过子系统 API 拿到 TrainingFieldObjectivesVM 实例
TrainingFieldObjectivesVM trainingFieldObjectivesVM = ...;
trainingFieldObjectivesVM.UpdateCurrentMouseObjective(currentMouseObjective);
```

### UpdateTimerText
`public void UpdateTimerText(string timerText)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 timer text 的最新表示。

```csharp
// 先通过子系统 API 拿到 TrainingFieldObjectivesVM 实例
TrainingFieldObjectivesVM trainingFieldObjectivesVM = ...;
trainingFieldObjectivesVM.UpdateTimerText("example");
```

### UpdateIsGamepadActive
`public void UpdateIsGamepadActive()`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 is gamepad active 的最新表示。

```csharp
// 先通过子系统 API 拿到 TrainingFieldObjectivesVM 实例
TrainingFieldObjectivesVM trainingFieldObjectivesVM = ...;
trainingFieldObjectivesVM.UpdateIsGamepadActive();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TrainingFieldObjectivesVM trainingFieldObjectivesVM = ...;
trainingFieldObjectivesVM.RefreshValues();
```

## 参见

- [本区域目录](../)