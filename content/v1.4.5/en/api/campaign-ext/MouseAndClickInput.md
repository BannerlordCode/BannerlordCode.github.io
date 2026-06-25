---
title: "MouseAndClickInput"
description: "Auto-generated class reference for MouseAndClickInput."
---
# MouseAndClickInput

**Namespace:** StoryMode.ViewModelCollection.Missions
**Module:** StoryMode.ViewModelCollection
**Type:** `public struct MouseAndClickInput`
**Base:** none
**File:** `Modules.StoryMode/StoryMode.ViewModelCollection/StoryMode.ViewModelCollection.Missions/TrainingObjectiveKeyVM.cs`

## Overview

`MouseAndClickInput` lives in `StoryMode.ViewModelCollection.Missions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.ViewModelCollection.Missions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### MouseAndClickInput
`public struct MouseAndClickInput(MovementTypes movementType, MouseClickTypes mouseClickType)`

**Purpose:** **Purpose:** Executes the MouseAndClickInput logic.

```csharp
// Obtain an instance of MouseAndClickInput from the subsystem API first
MouseAndClickInput mouseAndClickInput = ...;
var result = mouseAndClickInput.MouseAndClickInput(movementType, mouseClickType);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MouseAndClickInput mouseAndClickInput = ...;
mouseAndClickInput.MouseAndClickInput(movementType, mouseClickType);
```

## See Also

- [Area Index](../)