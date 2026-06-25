---
title: "TrainingObjectiveKeyVM"
description: "Auto-generated class reference for TrainingObjectiveKeyVM."
---
# TrainingObjectiveKeyVM

**Namespace:** StoryMode.ViewModelCollection.Missions
**Module:** StoryMode.ViewModelCollection
**Type:** `public class TrainingObjectiveKeyVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.StoryMode/StoryMode.ViewModelCollection/StoryMode.ViewModelCollection.Missions/TrainingObjectiveKeyVM.cs`

## Overview

`TrainingObjectiveKeyVM` lives in `StoryMode.ViewModelCollection.Missions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.ViewModelCollection.Missions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Key` | `public InputKeyItemVM Key { get; set; }` |
| `ForcedKeyId` | `public string ForcedKeyId { get; set; }` |
| `ForcedKeyName` | `public string ForcedKeyName { get; set; }` |
| `MovementType` | `public int MovementType { get; set; }` |
| `MouseClick` | `public int MouseClick { get; set; }` |
| `InputType` | `public int InputType { get; set; }` |

## Key Methods

### MouseAndClickInput
`public struct MouseAndClickInput(MovementTypes movementType, MouseClickTypes mouseClickType)`

**Purpose:** Executes the MouseAndClickInput logic.

```csharp
// Obtain an instance of TrainingObjectiveKeyVM from the subsystem API first
TrainingObjectiveKeyVM trainingObjectiveKeyVM = ...;
var result = trainingObjectiveKeyVM.MouseAndClickInput(movementType, mouseClickType);
```

### ControllerStickInput
`public struct ControllerStickInput(MovementTypes movementType, bool isLeftStick)`

**Purpose:** Executes the ControllerStickInput logic.

```csharp
// Obtain an instance of TrainingObjectiveKeyVM from the subsystem API first
TrainingObjectiveKeyVM trainingObjectiveKeyVM = ...;
var result = trainingObjectiveKeyVM.ControllerStickInput(movementType, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TrainingObjectiveKeyVM trainingObjectiveKeyVM = ...;
trainingObjectiveKeyVM.MouseAndClickInput(movementType, mouseClickType);
```

## See Also

- [Area Index](../)