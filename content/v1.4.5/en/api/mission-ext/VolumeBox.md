---
title: "VolumeBox"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VolumeBox`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# VolumeBox

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class VolumeBox : MissionObject`
**Base:** `MissionObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/VolumeBox.cs`

## Overview

`VolumeBox` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### VolumeBoxDelegate
`public delegate void VolumeBoxDelegate(VolumeBox volumeBox, List<Agent> agentsInVolume)`

**Purpose:** Handles logic related to `volume box delegate`.

### AddToCheckList
`public void AddToCheckList(Agent agent)`

**Purpose:** Adds `to check list` to the current collection or state.

### RemoveFromCheckList
`public void RemoveFromCheckList(Agent agent)`

**Purpose:** Removes `from check list` from the current collection or state.

### SetIsOccupiedDelegate
`public void SetIsOccupiedDelegate(VolumeBoxDelegate volumeBoxDelegate)`

**Purpose:** Sets the value or state of `is occupied delegate`.

### HasAgentsInAttackerSide
`public bool HasAgentsInAttackerSide()`

**Purpose:** Checks whether the current object has/contains `agents in attacker side`.

### IsPointIn
`public bool IsPointIn(Vec3 point)`

**Purpose:** Handles logic related to `is point in`.

## Usage Example

```csharp
var value = new VolumeBox();
value.VolumeBoxDelegate(volumeBox, agentsInVolume);
```

## See Also

- [Complete Class Catalog](../catalog)