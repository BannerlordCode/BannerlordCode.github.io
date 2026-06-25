---
title: "TacticalRegion"
description: "Auto-generated class reference for TacticalRegion."
---
# TacticalRegion

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TacticalRegion : MissionObject`
**Base:** `MissionObject`
**File:** `TaleWorlds.MountAndBlade/TacticalRegion.cs`

## Overview

`TacticalRegion` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Position` | `public WorldPosition Position { get; set; }` |
| `LinkedTacticalPositions` | `public List<TacticalPosition> LinkedTacticalPositions { get; set; }` |

## Key Methods

### AfterMissionStart
`public override void AfterMissionStart()`

**Purpose:** Executes the AfterMissionStart logic.

```csharp
// Obtain an instance of TacticalRegion from the subsystem API first
TacticalRegion tacticalRegion = ...;
tacticalRegion.AfterMissionStart();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TacticalRegion tacticalRegion = ...;
tacticalRegion.AfterMissionStart();
```

## See Also

- [Area Index](../)