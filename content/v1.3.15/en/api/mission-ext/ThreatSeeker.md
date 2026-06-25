---
title: "ThreatSeeker"
description: "Auto-generated class reference for ThreatSeeker."
---
# ThreatSeeker

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ThreatSeeker`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/RangedSiegeWeaponAi.cs`

## Overview

`ThreatSeeker` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### PrepareTargetFromTask
`public Threat PrepareTargetFromTask()`

**Purpose:** Finishes prerequisite setup for the upcoming target from task operation.

```csharp
// Obtain an instance of ThreatSeeker from the subsystem API first
ThreatSeeker threatSeeker = ...;
var result = threatSeeker.PrepareTargetFromTask();
```

### UpdateThreatSeekerTask
`public bool UpdateThreatSeekerTask()`

**Purpose:** Recalculates and stores the latest representation of threat seeker task.

```csharp
// Obtain an instance of ThreatSeeker from the subsystem API first
ThreatSeeker threatSeeker = ...;
var result = threatSeeker.UpdateThreatSeekerTask();
```

### PrepareThreatSeekerTask
`public void PrepareThreatSeekerTask(Action lastAction)`

**Purpose:** Finishes prerequisite setup for the upcoming threat seeker task operation.

```csharp
// Obtain an instance of ThreatSeeker from the subsystem API first
ThreatSeeker threatSeeker = ...;
threatSeeker.PrepareThreatSeekerTask(lastAction);
```

### Release
`public void Release()`

**Purpose:** Executes the Release logic.

```csharp
// Obtain an instance of ThreatSeeker from the subsystem API first
ThreatSeeker threatSeeker = ...;
threatSeeker.Release();
```

### GetAllThreats
`public List<Threat> GetAllThreats()`

**Purpose:** Reads and returns the all threats value held by the this instance.

```csharp
// Obtain an instance of ThreatSeeker from the subsystem API first
ThreatSeeker threatSeeker = ...;
var result = threatSeeker.GetAllThreats();
```

### GetTargetFlagsOfFormation
`public static TargetFlags GetTargetFlagsOfFormation()`

**Purpose:** Reads and returns the target flags of formation value held by the this instance.

```csharp
// Static call; no instance required
ThreatSeeker.GetTargetFlagsOfFormation();
```

### GetMaxThreat
`public static Threat GetMaxThreat(List<ICastleKeyPosition> castleKeyPositions)`

**Purpose:** Reads and returns the max threat value held by the this instance.

```csharp
// Static call; no instance required
ThreatSeeker.GetMaxThreat(castleKeyPositions);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ThreatSeeker threatSeeker = ...;
threatSeeker.PrepareTargetFromTask();
```

## See Also

- [Area Index](../)