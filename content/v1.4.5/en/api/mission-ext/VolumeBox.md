---
title: "VolumeBox"
description: "Auto-generated class reference for VolumeBox."
---
# VolumeBox

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class VolumeBox : MissionObject`
**Base:** `MissionObject`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/VolumeBox.cs`

## Overview

`VolumeBox` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### VolumeBoxDelegate
`public delegate void VolumeBoxDelegate(VolumeBox volumeBox, List<Agent> agentsInVolume)`

**Purpose:** **Purpose:** Executes the VolumeBoxDelegate logic.

```csharp
// Obtain an instance of VolumeBox from the subsystem API first
VolumeBox volumeBox = ...;
volumeBox.VolumeBoxDelegate(volumeBox, agentsInVolume);
```

### AddToCheckList
`public void AddToCheckList(Agent agent)`

**Purpose:** **Purpose:** Adds to check list to the current collection or state.

```csharp
// Obtain an instance of VolumeBox from the subsystem API first
VolumeBox volumeBox = ...;
volumeBox.AddToCheckList(agent);
```

### RemoveFromCheckList
`public void RemoveFromCheckList(Agent agent)`

**Purpose:** **Purpose:** Removes from check list from the current collection or state.

```csharp
// Obtain an instance of VolumeBox from the subsystem API first
VolumeBox volumeBox = ...;
volumeBox.RemoveFromCheckList(agent);
```

### SetIsOccupiedDelegate
`public void SetIsOccupiedDelegate(VolumeBoxDelegate volumeBoxDelegate)`

**Purpose:** **Purpose:** Assigns a new value to is occupied delegate and updates the object's internal state.

```csharp
// Obtain an instance of VolumeBox from the subsystem API first
VolumeBox volumeBox = ...;
volumeBox.SetIsOccupiedDelegate(volumeBoxDelegate);
```

### HasAgentsInAttackerSide
`public bool HasAgentsInAttackerSide()`

**Purpose:** **Purpose:** Determines whether the this instance already holds agents in attacker side.

```csharp
// Obtain an instance of VolumeBox from the subsystem API first
VolumeBox volumeBox = ...;
var result = volumeBox.HasAgentsInAttackerSide();
```

### IsPointIn
`public bool IsPointIn(Vec3 point)`

**Purpose:** **Purpose:** Determines whether the this instance is in the point in state or condition.

```csharp
// Obtain an instance of VolumeBox from the subsystem API first
VolumeBox volumeBox = ...;
var result = volumeBox.IsPointIn(point);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
VolumeBox volumeBox = ...;
volumeBox.VolumeBoxDelegate(volumeBox, agentsInVolume);
```

## See Also

- [Area Index](../)