---
title: "TrainingIcon"
description: "Auto-generated class reference for TrainingIcon."
---
# TrainingIcon

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TrainingIcon : UsableMachine`
**Base:** `UsableMachine`
**File:** `TaleWorlds.MountAndBlade/TrainingIcon.cs`

## Overview

`TrainingIcon` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Focused` | `public bool Focused { get; }` |

## Key Methods

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** Reads and returns the `tick requirement` value held by the current object.

```csharp
// Obtain an instance of TrainingIcon from the subsystem API first
TrainingIcon trainingIcon = ...;
var result = trainingIcon.GetTickRequirement();
```

### SetMarked
`public void SetMarked(bool highlight)`

**Purpose:** Assigns a new value to `marked` and updates the object's internal state.

```csharp
// Obtain an instance of TrainingIcon from the subsystem API first
TrainingIcon trainingIcon = ...;
trainingIcon.SetMarked(false);
```

### GetIsActivated
`public bool GetIsActivated()`

**Purpose:** Reads and returns the `is activated` value held by the current object.

```csharp
// Obtain an instance of TrainingIcon from the subsystem API first
TrainingIcon trainingIcon = ...;
var result = trainingIcon.GetIsActivated();
```

### GetTrainingSubTypeTag
`public string GetTrainingSubTypeTag()`

**Purpose:** Reads and returns the `training sub type tag` value held by the current object.

```csharp
// Obtain an instance of TrainingIcon from the subsystem API first
TrainingIcon trainingIcon = ...;
var result = trainingIcon.GetTrainingSubTypeTag();
```

### DisableIcon
`public void DisableIcon()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TrainingIcon from the subsystem API first
TrainingIcon trainingIcon = ...;
trainingIcon.DisableIcon();
```

### EnableIcon
`public void EnableIcon()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TrainingIcon from the subsystem API first
TrainingIcon trainingIcon = ...;
trainingIcon.EnableIcon();
```

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Reads and returns the `description text` value held by the current object.

```csharp
// Obtain an instance of TrainingIcon from the subsystem API first
TrainingIcon trainingIcon = ...;
var result = trainingIcon.GetDescriptionText(gameEntity);
```

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject = null)`

**Purpose:** Reads and returns the `action text for standing point` value held by the current object.

```csharp
// Obtain an instance of TrainingIcon from the subsystem API first
TrainingIcon trainingIcon = ...;
var result = trainingIcon.GetActionTextForStandingPoint(null);
```

### OnFocusGain
`public override void OnFocusGain(Agent userAgent)`

**Purpose:** Invoked when the `focus gain` event is raised.

```csharp
// Obtain an instance of TrainingIcon from the subsystem API first
TrainingIcon trainingIcon = ...;
trainingIcon.OnFocusGain(userAgent);
```

### OnFocusLose
`public override void OnFocusLose(Agent userAgent)`

**Purpose:** Invoked when the `focus lose` event is raised.

```csharp
// Obtain an instance of TrainingIcon from the subsystem API first
TrainingIcon trainingIcon = ...;
trainingIcon.OnFocusLose(userAgent);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TrainingIcon trainingIcon = ...;
trainingIcon.GetTickRequirement();
```

## See Also

- [Area Index](../)