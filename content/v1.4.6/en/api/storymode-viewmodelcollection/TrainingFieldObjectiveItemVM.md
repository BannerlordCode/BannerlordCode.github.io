---
title: "TrainingFieldObjectiveItemVM"
description: "TrainingFieldObjectiveItemVM: a public class in StoryMode.ViewModelCollection, inheriting ViewModel; 11 exposed members (4 methods, 7 properties, 0 fields). Source: StoryMode.ViewModelCollection/Missions/TrainingFieldObjectiveItemVM.cs."
---
# TrainingFieldObjectiveItemVM

**Namespace:** `StoryMode.ViewModelCollection.Missions`
**Module:** `StoryMode.ViewModelCollection`
**Type:** `public class TrainingFieldObjectiveItemVM : ViewModel`
**File:** `StoryMode.ViewModelCollection/Missions/TrainingFieldObjectiveItemVM.cs`

## Overview

TrainingFieldObjectiveItemVM lives in the StoryMode.ViewModelCollection module, source file StoryMode.ViewModelCollection/Missions/TrainingFieldObjectiveItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is TrainingFieldObjectiveItemVM → ViewModel. It exposes 11 public/protected members: 4 methods, 7 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TrainingFieldObjectiveItemVM is a top-level type in StoryMode.ViewModelCollection, namespace differing from (StoryMode.ViewModelCollection.Missions) the module directory; inheritance chain TrainingFieldObjectiveItemVM → ViewModel. The surface is property-led (properties 7/11, methods 4/11), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode.ViewModelCollection/Missions/TrainingFieldObjectiveItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ storymode-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace TrainingFieldObjectivesVM](../TrainingFieldObjectivesVM)
- [same namespace TrainingObjectiveKeyVM](../TrainingObjectiveKeyVM)
