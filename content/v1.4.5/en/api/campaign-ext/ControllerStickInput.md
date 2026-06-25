---
title: "ControllerStickInput"
description: "Auto-generated class reference for ControllerStickInput."
---
# ControllerStickInput

**Namespace:** StoryMode.ViewModelCollection.Missions
**Module:** StoryMode.ViewModelCollection
**Type:** `public struct ControllerStickInput`
**Base:** none
**File:** `Modules.StoryMode/StoryMode.ViewModelCollection/StoryMode.ViewModelCollection.Missions/TrainingObjectiveKeyVM.cs`

## Overview

`ControllerStickInput` lives in `StoryMode.ViewModelCollection.Missions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.ViewModelCollection.Missions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ControllerStickInput
`public struct ControllerStickInput(MovementTypes movementType, bool isLeftStick)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of ControllerStickInput from the subsystem API first
ControllerStickInput controllerStickInput = ...;
var result = controllerStickInput.ControllerStickInput(movementType, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ControllerStickInput controllerStickInput = ...;
controllerStickInput.ControllerStickInput(movementType, false);
```

## See Also

- [Area Index](../)