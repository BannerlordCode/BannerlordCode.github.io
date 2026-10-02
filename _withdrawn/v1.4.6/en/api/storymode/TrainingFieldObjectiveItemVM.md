---
title: "TrainingFieldObjectiveItemVM"
description: "TrainingFieldObjectiveItemVM: a public class in StoryMode.ViewModelCollection.Missions, inheriting ViewModel; 11 exposed members (4 methods, 7 properties, 0 fields). Canonical bucket storymode. Source: StoryMode.ViewModelCollection/Missions/TrainingFieldObjectiveItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TrainingFieldObjectiveItemVM

**Namespace:** `StoryMode.ViewModelCollection.Missions`
**Module:** `StoryMode.ViewModelCollection`
**Type:** `public class TrainingFieldObjectiveItemVM : ViewModel`
**File:** `StoryMode.ViewModelCollection/Missions/TrainingFieldObjectiveItemVM.cs`
**Bucket:** `storymode` (rule:StoryMode)

## Overview

TrainingFieldObjectiveItemVM lives in the StoryMode.ViewModelCollection module, source file StoryMode.ViewModelCollection/Missions/TrainingFieldObjectiveItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is TrainingFieldObjectiveItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 11 public/protected members: 4 methods, 7 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TrainingFieldObjectiveItemVM lands in canonical bucket `storymode` (matched rule `rule:StoryMode`), namespace `StoryMode.ViewModelCollection.Missions`, inheritance chain TrainingFieldObjectiveItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 7/11, methods 4/11), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode.ViewModelCollection/Missions/TrainingFieldObjectiveItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `UpdateObjective` | `public void UpdateObjective(TrainingFieldMissionController.MouseObjectives currentMouseObjective, TrainingFieldMissionController.ObjectivePerformingType currentObjectivePerformingType)` | method |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `CreateFromObjective` | `public static TrainingFieldObjectiveItemVM CreateFromObjective(TrainingFieldMissionController.TutorialObjective objective)` | method |
| `CreateDummy` | `public static TrainingFieldObjectiveItemVM CreateDummy()` | method |
| `ObjectiveText` | `public string ObjectiveText` | property |
| `IsCompleted` | `public bool IsCompleted` | property |
| `IsActive` | `public bool IsActive` | property |
| `IsBackgroundActive` | `public bool IsBackgroundActive` | property |
| `MBBindingList` | `public MBBindingList<TrainingFieldObjectiveItemVM>ObjectiveItems` | property |
| `MBBindingList` | `public MBBindingList<TrainingObjectiveKeyVM>ObjectiveKeys` | property |
| `ArrowState` | `public string ArrowState` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace TrainingFieldObjectivesVM](../TrainingFieldObjectivesVM/)
- [same namespace TrainingObjectiveKeyVM](../TrainingObjectiveKeyVM/)
