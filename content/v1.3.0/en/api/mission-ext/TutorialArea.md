---
title: "TutorialArea"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TutorialArea`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `after mission start`.

### MarkTrainingIcons
`public void MarkTrainingIcons(bool mark)`

**Purpose:** Handles logic related to `mark training icons`.

### GetActiveTrainingIcon
`public TrainingIcon GetActiveTrainingIcon()`

**Purpose:** Gets the current value of `active training icon`.

### GetIndexFromTag
`public int GetIndexFromTag(string tag)`

**Purpose:** Gets the current value of `index from tag`.

### GetSubTrainingTags
`public List<string> GetSubTrainingTags()`

**Purpose:** Gets the current value of `sub training tags`.

### ActivateTaggedWeapons
`public void ActivateTaggedWeapons(int index)`

**Purpose:** Handles logic related to `activate tagged weapons`.

### EquipWeaponsToPlayer
`public void EquipWeaponsToPlayer(int index)`

**Purpose:** Handles logic related to `equip weapons to player`.

### DeactivateAllWeapons
`public void DeactivateAllWeapons(bool resetDestructibles)`

**Purpose:** Handles logic related to `deactivate all weapons`.

### ActivateBoundaries
`public void ActivateBoundaries()`

**Purpose:** Handles logic related to `activate boundaries`.

### HideBoundaries
`public void HideBoundaries()`

**Purpose:** Handles logic related to `hide boundaries`.

### GetBreakablesCount
`public int GetBreakablesCount(int index)`

**Purpose:** Gets the current value of `breakables count`.

### MakeDestructible
`public void MakeDestructible(int index)`

**Purpose:** Handles logic related to `make destructible`.

### MarkAllTargets
`public void MarkAllTargets(int index, bool mark)`

**Purpose:** Handles logic related to `mark all targets`.

### ResetMarkingTargetTimers
`public void ResetMarkingTargetTimers(int index)`

**Purpose:** Resets `marking target timers` to its initial state.

### MakeInDestructible
`public void MakeInDestructible(int index)`

**Purpose:** Handles logic related to `make in destructible`.

### AllBreakablesAreBroken
`public bool AllBreakablesAreBroken(int index)`

**Purpose:** Handles logic related to `all breakables are broken`.

### GetBrokenBreakableCount
`public int GetBrokenBreakableCount(int index)`

**Purpose:** Gets the current value of `broken breakable count`.

### GetUnbrokenBreakableCount
`public int GetUnbrokenBreakableCount(int index)`

**Purpose:** Gets the current value of `unbroken breakable count`.

### ResetBreakables
`public void ResetBreakables(int index, bool makeIndestructible = true)`

**Purpose:** Resets `breakables` to its initial state.

### HasMainAgentPickedAll
`public bool HasMainAgentPickedAll(int index)`

**Purpose:** Checks whether the current object has/contains `main agent picked all`.

### CheckMainAgentEquipment
`public void CheckMainAgentEquipment(int index)`

**Purpose:** Handles logic related to `check main agent equipment`.

### CheckWeapons
`public void CheckWeapons(int index)`

**Purpose:** Handles logic related to `check weapons`.

### IsPositionInsideTutorialArea
`public bool IsPositionInsideTutorialArea(Vec3 position, out string volumeBoxTags)`

**Purpose:** Handles logic related to `is position inside tutorial area`.

## Usage Example

```csharp
var value = new TutorialArea();
value.AfterMissionStart();
```

## See Also

- [Complete Class Catalog](../catalog)