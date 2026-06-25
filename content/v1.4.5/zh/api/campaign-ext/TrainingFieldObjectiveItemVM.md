---
title: "TrainingFieldObjectiveItemVM"
description: "TrainingFieldObjectiveItemVM 的自动生成类参考。"
---
# TrainingFieldObjectiveItemVM

**Namespace:** StoryMode.ViewModelCollection.Missions
**Module:** StoryMode.ViewModelCollection
**Type:** `public class TrainingFieldObjectiveItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.StoryMode/StoryMode.ViewModelCollection/StoryMode.ViewModelCollection.Missions/TrainingFieldObjectiveItemVM.cs`

## 概述

`TrainingFieldObjectiveItemVM` 位于 `StoryMode.ViewModelCollection.Missions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `StoryMode.ViewModelCollection.Missions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ObjectiveText` | `public string ObjectiveText { get; set; }` |
| `IsCompleted` | `public bool IsCompleted { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `IsBackgroundActive` | `public bool IsBackgroundActive { get; set; }` |
| `ObjectiveItems` | `public MBBindingList<TrainingFieldObjectiveItemVM> ObjectiveItems { get; set; }` |
| `ObjectiveKeys` | `public MBBindingList<TrainingObjectiveKeyVM> ObjectiveKeys { get; set; }` |
| `ArrowState` | `public string ArrowState { get; set; }` |

## 主要方法

### UpdateObjective
`public void UpdateObjective(TrainingFieldMissionController.MouseObjectives currentMouseObjective, TrainingFieldMissionController.ObjectivePerformingType currentObjectivePerformingType)`

**用途 / Purpose:** 重新计算并更新 「objective」 的最新表示。

```csharp
// 先通过子系统 API 拿到 TrainingFieldObjectiveItemVM 实例
TrainingFieldObjectiveItemVM trainingFieldObjectiveItemVM = ...;
trainingFieldObjectiveItemVM.UpdateObjective(currentMouseObjective, currentObjectivePerformingType);
```

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 TrainingFieldObjectiveItemVM 实例
TrainingFieldObjectiveItemVM trainingFieldObjectiveItemVM = ...;
trainingFieldObjectiveItemVM.RefreshValues();
```

### CreateFromObjective
`public static TrainingFieldObjectiveItemVM CreateFromObjective(TrainingFieldMissionController.TutorialObjective objective)`

**用途 / Purpose:** 构建一个新的 「from objective」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
TrainingFieldObjectiveItemVM.CreateFromObjective(objective);
```

### CreateDummy
`public static TrainingFieldObjectiveItemVM CreateDummy()`

**用途 / Purpose:** 构建一个新的 「dummy」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
TrainingFieldObjectiveItemVM.CreateDummy();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TrainingFieldObjectiveItemVM trainingFieldObjectiveItemVM = ...;
trainingFieldObjectiveItemVM.UpdateObjective(currentMouseObjective, currentObjectivePerformingType);
```

## 参见

- [本区域目录](../)