---
title: "TutorialArea"
description: "Auto-generated class reference for TutorialArea."
---
# TutorialArea

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TutorialArea : MissionObject`
**Base:** `MissionObject`
**File:** `TaleWorlds.MountAndBlade/TutorialArea.cs`

## Overview

`TutorialArea` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TrainingIconsReadOnly` | `public MBReadOnlyList<TrainingIcon> TrainingIconsReadOnly { get; }` |
| `TypeOfTraining` | `public TutorialArea.TrainingType TypeOfTraining { get; }` |

## Key Methods

### AfterMissionStart
`public override void AfterMissionStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TutorialArea from the subsystem API first
TutorialArea tutorialArea = ...;
tutorialArea.AfterMissionStart();
```

### MarkTrainingIcons
`public void MarkTrainingIcons(bool mark)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TutorialArea from the subsystem API first
TutorialArea tutorialArea = ...;
tutorialArea.MarkTrainingIcons(false);
```

### GetActiveTrainingIcon
`public TrainingIcon GetActiveTrainingIcon()`

**Purpose:** Reads and returns the `active training icon` value held by the current object.

```csharp
// Obtain an instance of TutorialArea from the subsystem API first
TutorialArea tutorialArea = ...;
var result = tutorialArea.GetActiveTrainingIcon();
```

### GetIndexFromTag
`public int GetIndexFromTag(string tag)`

**Purpose:** Reads and returns the `index from tag` value held by the current object.

```csharp
// Obtain an instance of TutorialArea from the subsystem API first
TutorialArea tutorialArea = ...;
var result = tutorialArea.GetIndexFromTag("example");
```

### GetSubTrainingTags
`public List<string> GetSubTrainingTags()`

**Purpose:** Reads and returns the `sub training tags` value held by the current object.

```csharp
// Obtain an instance of TutorialArea from the subsystem API first
TutorialArea tutorialArea = ...;
var result = tutorialArea.GetSubTrainingTags();
```

### ActivateTaggedWeapons
`public void ActivateTaggedWeapons(int index)`

**Purpose:** Activates the resource, state, or feature associated with `tagged weapons`.

```csharp
// Obtain an instance of TutorialArea from the subsystem API first
TutorialArea tutorialArea = ...;
tutorialArea.ActivateTaggedWeapons(0);
```

### EquipWeaponsToPlayer
`public void EquipWeaponsToPlayer(int index)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TutorialArea from the subsystem API first
TutorialArea tutorialArea = ...;
tutorialArea.EquipWeaponsToPlayer(0);
```

### DeactivateAllWeapons
`public void DeactivateAllWeapons(bool resetDestructibles)`

**Purpose:** Deactivates the resource, state, or feature associated with `all weapons`.

```csharp
// Obtain an instance of TutorialArea from the subsystem API first
TutorialArea tutorialArea = ...;
tutorialArea.DeactivateAllWeapons(false);
```

### ActivateBoundaries
`public void ActivateBoundaries()`

**Purpose:** Activates the resource, state, or feature associated with `boundaries`.

```csharp
// Obtain an instance of TutorialArea from the subsystem API first
TutorialArea tutorialArea = ...;
tutorialArea.ActivateBoundaries();
```

### HideBoundaries
`public void HideBoundaries()`

**Purpose:** Hides the UI or element associated with `boundaries`.

```csharp
// Obtain an instance of TutorialArea from the subsystem API first
TutorialArea tutorialArea = ...;
tutorialArea.HideBoundaries();
```

### GetBreakablesCount
`public int GetBreakablesCount(int index)`

**Purpose:** Reads and returns the `breakables count` value held by the current object.

```csharp
// Obtain an instance of TutorialArea from the subsystem API first
TutorialArea tutorialArea = ...;
var result = tutorialArea.GetBreakablesCount(0);
```

### MakeDestructible
`public void MakeDestructible(int index)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TutorialArea from the subsystem API first
TutorialArea tutorialArea = ...;
tutorialArea.MakeDestructible(0);
```

### MarkAllTargets
`public void MarkAllTargets(int index, bool mark)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TutorialArea from the subsystem API first
TutorialArea tutorialArea = ...;
tutorialArea.MarkAllTargets(0, false);
```

### ResetMarkingTargetTimers
`public void ResetMarkingTargetTimers(int index)`

**Purpose:** Returns `marking target timers` to its default or initial condition.

```csharp
// Obtain an instance of TutorialArea from the subsystem API first
TutorialArea tutorialArea = ...;
tutorialArea.ResetMarkingTargetTimers(0);
```

### MakeInDestructible
`public void MakeInDestructible(int index)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TutorialArea from the subsystem API first
TutorialArea tutorialArea = ...;
tutorialArea.MakeInDestructible(0);
```

### AllBreakablesAreBroken
`public bool AllBreakablesAreBroken(int index)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TutorialArea from the subsystem API first
TutorialArea tutorialArea = ...;
var result = tutorialArea.AllBreakablesAreBroken(0);
```

### GetBrokenBreakableCount
`public int GetBrokenBreakableCount(int index)`

**Purpose:** Reads and returns the `broken breakable count` value held by the current object.

```csharp
// Obtain an instance of TutorialArea from the subsystem API first
TutorialArea tutorialArea = ...;
var result = tutorialArea.GetBrokenBreakableCount(0);
```

### GetUnbrokenBreakableCount
`public int GetUnbrokenBreakableCount(int index)`

**Purpose:** Reads and returns the `unbroken breakable count` value held by the current object.

```csharp
// Obtain an instance of TutorialArea from the subsystem API first
TutorialArea tutorialArea = ...;
var result = tutorialArea.GetUnbrokenBreakableCount(0);
```

### ResetBreakables
`public void ResetBreakables(int index, bool makeIndestructible = true)`

**Purpose:** Returns `breakables` to its default or initial condition.

```csharp
// Obtain an instance of TutorialArea from the subsystem API first
TutorialArea tutorialArea = ...;
tutorialArea.ResetBreakables(0, false);
```

### HasMainAgentPickedAll
`public bool HasMainAgentPickedAll(int index)`

**Purpose:** Determines whether the current object already holds `main agent picked all`.

```csharp
// Obtain an instance of TutorialArea from the subsystem API first
TutorialArea tutorialArea = ...;
var result = tutorialArea.HasMainAgentPickedAll(0);
```

### CheckMainAgentEquipment
`public void CheckMainAgentEquipment(int index)`

**Purpose:** Verifies whether `main agent equipment` holds true for the current object.

```csharp
// Obtain an instance of TutorialArea from the subsystem API first
TutorialArea tutorialArea = ...;
tutorialArea.CheckMainAgentEquipment(0);
```

### CheckWeapons
`public void CheckWeapons(int index)`

**Purpose:** Verifies whether `weapons` holds true for the current object.

```csharp
// Obtain an instance of TutorialArea from the subsystem API first
TutorialArea tutorialArea = ...;
tutorialArea.CheckWeapons(0);
```

### IsPositionInsideTutorialArea
`public bool IsPositionInsideTutorialArea(Vec3 position, out string volumeBoxTags)`

**Purpose:** Determines whether the current object is in the `position inside tutorial area` state or condition.

```csharp
// Obtain an instance of TutorialArea from the subsystem API first
TutorialArea tutorialArea = ...;
var result = tutorialArea.IsPositionInsideTutorialArea(position, volumeBoxTags);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TutorialArea tutorialArea = ...;
tutorialArea.AfterMissionStart();
```

## See Also

- [Area Index](../)