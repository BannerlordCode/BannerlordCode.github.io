---
title: "TrainingFieldObjectivesVM"
description: "TrainingFieldObjectivesVM: a public class in StoryMode.ViewModelCollection, inheriting ViewModel; 11 exposed members (5 methods, 5 properties, 0 fields). Source: StoryMode.ViewModelCollection/Missions/TrainingFieldObjectivesVM.cs."
---
# TrainingFieldObjectivesVM

**Namespace:** `StoryMode.ViewModelCollection.Missions`
**Module:** `StoryMode.ViewModelCollection`
**Type:** `public class TrainingFieldObjectivesVM : ViewModel`
**File:** `StoryMode.ViewModelCollection/Missions/TrainingFieldObjectivesVM.cs`

## Overview

TrainingFieldObjectivesVM lives in the StoryMode.ViewModelCollection module, source file StoryMode.ViewModelCollection/Missions/TrainingFieldObjectivesVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is TrainingFieldObjectivesVM → ViewModel. It exposes 11 public/protected members: 5 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TrainingFieldObjectivesVM is a top-level type in StoryMode.ViewModelCollection, namespace differing from (StoryMode.ViewModelCollection.Missions) the module directory; inheritance chain TrainingFieldObjectivesVM → ViewModel. The surface is method-led (methods 5/11, properties 5/11), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode.ViewModelCollection/Missions/TrainingFieldObjectivesVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TrainingFieldObjectivesVM` | `public TrainingFieldObjectivesVM()` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `UpdateObjectivesWith` | `public void UpdateObjectivesWith(List<TrainingFieldMissionController.TutorialObjective>objectives)` | method |
| `UpdateCurrentObjectiveExplanationText` | `public void UpdateCurrentObjectiveExplanationText(TextObject currentObjectiveText)` | method |
| `UpdateCurrentMouseObjective` | `public void UpdateCurrentMouseObjective(TrainingFieldMissionController.MouseObjectives currentMouseObjective, TrainingFieldMissionController.ObjectivePerformingType currentObjectivePerformingType)` | method |
| `UpdateTimerText` | `public void UpdateTimerText(string timerText)` | method |
| `LeaveAnyTimeText` | `public string LeaveAnyTimeText` | property |
| `CurrentObjectiveExplanationText` | `public string CurrentObjectiveExplanationText` | property |
| `TimerText` | `public string TimerText` | property |
| `ActiveObjective` | `public TrainingFieldObjectiveItemVM ActiveObjective` | property |
| `MBBindingList` | `public MBBindingList<TrainingFieldObjectiveItemVM>ObjectiveItems` | property |

## See Also

- [↑ storymode-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace TrainingFieldObjectiveItemVM](../TrainingFieldObjectiveItemVM)
- [same namespace TrainingObjectiveKeyVM](../TrainingObjectiveKeyVM)
