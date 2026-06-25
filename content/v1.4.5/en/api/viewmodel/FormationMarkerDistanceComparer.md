---
title: "FormationMarkerDistanceComparer"
description: "Auto-generated class reference for FormationMarkerDistanceComparer."
---
# FormationMarkerDistanceComparer

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FormationMarkerDistanceComparer : IComparer<MissionFormationMarkerTargetVM>`
**Base:** `IComparer<MissionFormationMarkerTargetVM>`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker/MissionFormationMarkerVM.cs`

## Overview

`FormationMarkerDistanceComparer` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public int Compare(MissionFormationMarkerTargetVM x, MissionFormationMarkerTargetVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of FormationMarkerDistanceComparer from the subsystem API first
FormationMarkerDistanceComparer formationMarkerDistanceComparer = ...;
var result = formationMarkerDistanceComparer.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FormationMarkerDistanceComparer formationMarkerDistanceComparer = ...;
formationMarkerDistanceComparer.Compare(x, y);
```

## See Also

- [Area Index](../)