---
title: "TrainingFieldObjectivesVM"
description: "TrainingFieldObjectivesVM: a public class in StoryMode.ViewModelCollection.Missions, inheriting ViewModel; 11 exposed members (5 methods, 5 properties, 0 fields). Canonical bucket storymode. Source: StoryMode.ViewModelCollection/Missions/TrainingFieldObjectivesVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TrainingFieldObjectivesVM

**Namespace:** `StoryMode.ViewModelCollection.Missions`
**Module:** `StoryMode.ViewModelCollection`
**Type:** `public class TrainingFieldObjectivesVM : ViewModel`
**File:** `StoryMode.ViewModelCollection/Missions/TrainingFieldObjectivesVM.cs`
**Bucket:** `storymode` (rule:StoryMode)

## Overview

TrainingFieldObjectivesVM lives in the StoryMode.ViewModelCollection module, source file StoryMode.ViewModelCollection/Missions/TrainingFieldObjectivesVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is TrainingFieldObjectivesVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 11 public/protected members: 5 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TrainingFieldObjectivesVM lands in canonical bucket `storymode` (matched rule `rule:StoryMode`), namespace `StoryMode.ViewModelCollection.Missions`, inheritance chain TrainingFieldObjectivesVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 5/11, properties 5/11), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode.ViewModelCollection/Missions/TrainingFieldObjectivesVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace TrainingFieldObjectiveItemVM](../TrainingFieldObjectiveItemVM/)
- [same namespace TrainingObjectiveKeyVM](../TrainingObjectiveKeyVM/)
