---
title: "TrainingObjectiveKeyVM"
description: "TrainingObjectiveKeyVM: a public class in StoryMode.ViewModelCollection, inheriting ViewModel; 21 exposed members (0 methods, 12 properties, 0 fields). Source: StoryMode.ViewModelCollection/Missions/TrainingObjectiveKeyVM.cs."
---
# TrainingObjectiveKeyVM

**Namespace:** `StoryMode.ViewModelCollection.Missions`
**Module:** `StoryMode.ViewModelCollection`
**Type:** `public class TrainingObjectiveKeyVM : ViewModel`
**File:** `StoryMode.ViewModelCollection/Missions/TrainingObjectiveKeyVM.cs`

## Overview

TrainingObjectiveKeyVM lives in the StoryMode.ViewModelCollection module, source file StoryMode.ViewModelCollection/Missions/TrainingObjectiveKeyVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is TrainingObjectiveKeyVM → ViewModel. It exposes 21 public/protected members: 12 properties, 3 constructors, 6 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TrainingObjectiveKeyVM is a top-level type in StoryMode.ViewModelCollection, namespace differing from (StoryMode.ViewModelCollection.Missions) the module directory; inheritance chain TrainingObjectiveKeyVM → ViewModel. The surface is property-led (properties 12/21, methods 0/21), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from StoryMode.ViewModelCollection/Missions/TrainingObjectiveKeyVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TrainingObjectiveKeyVM` | `public TrainingObjectiveKeyVM(TrainingObjectiveKeyVM.MouseAndClickInput mouseAndClickInput)` | constructor |
| `TrainingObjectiveKeyVM` | `public TrainingObjectiveKeyVM(TrainingObjectiveKeyVM.ControllerStickInput controllerStickInput)` | constructor |
| `TrainingObjectiveKeyVM` | `public TrainingObjectiveKeyVM(TrainingObjectiveKeyVM.KeyInput keyInput)` | constructor |
| `Key` | `public InputKeyItemVM Key` | property |
| `ForcedKeyId` | `public string ForcedKeyId` | property |
| `ForcedKeyName` | `public string ForcedKeyName` | property |
| `MovementType` | `public int MovementType` | property |
| `MouseClick` | `public int MouseClick` | property |
| `InputType` | `public int InputType` | property |
| `MovementTypes` | `public enum MovementTypes` | property |
| `InputTypes` | `public enum InputTypes` | property |
| `MouseAndClickInput` | `public struct MouseAndClickInput` | property |
| `KeyInput` | `public struct KeyInput` | property |
| `ControllerStickInput` | `public struct ControllerStickInput` | property |
| `MouseClickTypes` | `public enum MouseClickTypes` | property |
| `MovementTypes` | `public enum MovementTypes` | nested type |
| `InputTypes` | `public enum InputTypes` | nested type |
| `MouseAndClickInput` | `public struct MouseAndClickInput` | nested type |
| `KeyInput` | `public struct KeyInput` | nested type |
| `ControllerStickInput` | `public struct ControllerStickInput` | nested type |
| `MouseClickTypes` | `public enum MouseClickTypes` | nested type |

## See Also

- [↑ storymode-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace TrainingFieldObjectiveItemVM](../TrainingFieldObjectiveItemVM)
- [same namespace TrainingFieldObjectivesVM](../TrainingFieldObjectivesVM)
