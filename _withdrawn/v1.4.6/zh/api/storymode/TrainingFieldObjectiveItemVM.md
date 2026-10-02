---
title: "TrainingFieldObjectiveItemVM"
description: "TrainingFieldObjectiveItemVM：StoryMode.ViewModelCollection.Missions 的 public 类，继承 ViewModel；公开成员 11 个（方法 4、属性 7、字段 0）。canonical 桶 storymode。源文件 StoryMode.ViewModelCollection/Missions/TrainingFieldObjectiveItemVM.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TrainingFieldObjectiveItemVM

**Namespace:** `StoryMode.ViewModelCollection.Missions`
**Module:** `StoryMode.ViewModelCollection`
**Type:** `public class TrainingFieldObjectiveItemVM : ViewModel`
**File:** `StoryMode.ViewModelCollection/Missions/TrainingFieldObjectiveItemVM.cs`
**Bucket:** `storymode` (rule:StoryMode)

## 概述

TrainingFieldObjectiveItemVM 位于 StoryMode.ViewModelCollection 模块，源文件 StoryMode.ViewModelCollection/Missions/TrainingFieldObjectiveItemVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 TrainingFieldObjectiveItemVM → ViewModel → IViewModel → INotifyPropertyChanged。public/protected 成员共 11 个：4 方法、7 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TrainingFieldObjectiveItemVM 落在 canonical 桶 `storymode`（命中规则 `rule:StoryMode`），命名空间 `StoryMode.ViewModelCollection.Missions`，继承链 TrainingFieldObjectiveItemVM → ViewModel → IViewModel → INotifyPropertyChanged。成员构成以属性为主（属性 7/11，方法 4/11），对外主要以状态读取接口暴露。继承链上的 INotifyPropertyChanged 不在同桶内，说明该类型把一部分行为交给跨桶基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 StoryMode.ViewModelCollection/Missions/TrainingFieldObjectiveItemVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `UpdateObjective` | `public void UpdateObjective(TrainingFieldMissionController.MouseObjectives currentMouseObjective, TrainingFieldMissionController.ObjectivePerformingType currentObjectivePerformingType)` | 方法 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `CreateFromObjective` | `public static TrainingFieldObjectiveItemVM CreateFromObjective(TrainingFieldMissionController.TutorialObjective objective)` | 方法 |
| `CreateDummy` | `public static TrainingFieldObjectiveItemVM CreateDummy()` | 方法 |
| `ObjectiveText` | `public string ObjectiveText` | 属性 |
| `IsCompleted` | `public bool IsCompleted` | 属性 |
| `IsActive` | `public bool IsActive` | 属性 |
| `IsBackgroundActive` | `public bool IsBackgroundActive` | 属性 |
| `MBBindingList` | `public MBBindingList<TrainingFieldObjectiveItemVM>ObjectiveItems` | 属性 |
| `MBBindingList` | `public MBBindingList<TrainingObjectiveKeyVM>ObjectiveKeys` | 属性 |
| `ArrowState` | `public string ArrowState` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ViewModel](../../core-extra/ViewModel/)
- [同命名空间 TrainingFieldObjectivesVM](../TrainingFieldObjectivesVM/)
- [同命名空间 TrainingObjectiveKeyVM](../TrainingObjectiveKeyVM/)
