---
title: "TrainingFieldObjectiveItemVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TrainingFieldObjectiveItemVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# TrainingFieldObjectiveItemVM

**Namespace:** StoryMode.ViewModelCollection.Missions
**Module:** StoryMode.ViewModelCollection
**Type:** `public class TrainingFieldObjectiveItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.StoryMode/StoryMode.ViewModelCollection/StoryMode.ViewModelCollection.Missions/TrainingFieldObjectiveItemVM.cs`

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

**用途 / Purpose:** 更新 `objective` 的状态或数据。

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### CreateFromObjective
`public static TrainingFieldObjectiveItemVM CreateFromObjective(TrainingFieldMissionController.TutorialObjective objective)`

**用途 / Purpose:** 创建一个 `from objective` 实例或对象。

### CreateDummy
`public static TrainingFieldObjectiveItemVM CreateDummy()`

**用途 / Purpose:** 创建一个 `dummy` 实例或对象。

## 使用示例

```csharp
var value = new TrainingFieldObjectiveItemVM();
value.UpdateObjective(currentMouseObjective, currentObjectivePerformingType);
```

## 参见

- [完整类目录](../catalog)