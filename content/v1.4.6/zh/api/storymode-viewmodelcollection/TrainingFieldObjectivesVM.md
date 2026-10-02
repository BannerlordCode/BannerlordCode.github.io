---
title: "TrainingFieldObjectivesVM"
description: "TrainingFieldObjectivesVM：StoryMode.ViewModelCollection 的 public 类，继承 ViewModel；公开成员 11 个（方法 5、属性 5、字段 0）。源文件 StoryMode.ViewModelCollection/Missions/TrainingFieldObjectivesVM.cs。"
---
# TrainingFieldObjectivesVM

**Namespace:** `StoryMode.ViewModelCollection.Missions`
**Module:** `StoryMode.ViewModelCollection`
**Type:** `public class TrainingFieldObjectivesVM : ViewModel`
**File:** `StoryMode.ViewModelCollection/Missions/TrainingFieldObjectivesVM.cs`

## 概述

TrainingFieldObjectivesVM 位于 StoryMode.ViewModelCollection 模块，源文件 StoryMode.ViewModelCollection/Missions/TrainingFieldObjectivesVM.cs。它是一个 public 类，实现/继承 ViewModel，继承链为 TrainingFieldObjectivesVM → ViewModel。public/protected 成员共 11 个：5 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TrainingFieldObjectivesVM 是 StoryMode.ViewModelCollection 的顶层类型，命名空间与模块目录不同（StoryMode.ViewModelCollection.Missions），继承链 TrainingFieldObjectivesVM → ViewModel。成员构成以方法为主（方法 5/11，属性 5/11），对外主要以操作入口暴露。继承链上的 ViewModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 StoryMode.ViewModelCollection/Missions/TrainingFieldObjectivesVM.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TrainingFieldObjectivesVM` | `public TrainingFieldObjectivesVM()` | 构造函数 |
| `RefreshValues` | `public override void RefreshValues()` | 方法 |
| `UpdateObjectivesWith` | `public void UpdateObjectivesWith(List<TrainingFieldMissionController.TutorialObjective>objectives)` | 方法 |
| `UpdateCurrentObjectiveExplanationText` | `public void UpdateCurrentObjectiveExplanationText(TextObject currentObjectiveText)` | 方法 |
| `UpdateCurrentMouseObjective` | `public void UpdateCurrentMouseObjective(TrainingFieldMissionController.MouseObjectives currentMouseObjective, TrainingFieldMissionController.ObjectivePerformingType currentObjectivePerformingType)` | 方法 |
| `UpdateTimerText` | `public void UpdateTimerText(string timerText)` | 方法 |
| `LeaveAnyTimeText` | `public string LeaveAnyTimeText` | 属性 |
| `CurrentObjectiveExplanationText` | `public string CurrentObjectiveExplanationText` | 属性 |
| `TimerText` | `public string TimerText` | 属性 |
| `ActiveObjective` | `public TrainingFieldObjectiveItemVM ActiveObjective` | 属性 |
| `MBBindingList` | `public MBBindingList<TrainingFieldObjectiveItemVM>ObjectiveItems` | 属性 |

## 参见

- [↑ storymode-viewmodelcollection 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 TrainingFieldObjectiveItemVM](../TrainingFieldObjectiveItemVM)
- [同命名空间 TrainingObjectiveKeyVM](../TrainingObjectiveKeyVM)
