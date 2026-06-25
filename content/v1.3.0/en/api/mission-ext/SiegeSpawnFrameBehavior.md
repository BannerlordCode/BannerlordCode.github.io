---
title: "SiegeSpawnFrameBehavior"
description: "Auto-generated class reference for SiegeSpawnFrameBehavior."
---
# SiegeSpawnFrameBehavior

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeSpawnFrameBehavior : SpawnFrameBehaviorBase`
**Base:** `SpawnFrameBehaviorBase`
**File:** `TaleWorlds.MountAndBlade/SiegeSpawnFrameBehavior.cs`

## Overview

`SiegeSpawnFrameBehavior` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public override void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of SiegeSpawnFrameBehavior from the subsystem API first
SiegeSpawnFrameBehavior siegeSpawnFrameBehavior = ...;
siegeSpawnFrameBehavior.Initialize();
```

### GetSpawnFrame
`public override MatrixFrame GetSpawnFrame(Team team, bool hasMount, bool isInitialSpawn)`

**Purpose:** Reads and returns the spawn frame value held by the this instance.

```csharp
// Obtain an instance of SiegeSpawnFrameBehavior from the subsystem API first
SiegeSpawnFrameBehavior siegeSpawnFrameBehavior = ...;
var result = siegeSpawnFrameBehavior.GetSpawnFrame(team, false, false);
```

### OnFlagDeactivated
`public void OnFlagDeactivated(FlagCapturePoint flag)`

**Purpose:** Invoked when the flag deactivated event is raised.

```csharp
// Obtain an instance of SiegeSpawnFrameBehavior from the subsystem API first
SiegeSpawnFrameBehavior siegeSpawnFrameBehavior = ...;
siegeSpawnFrameBehavior.OnFlagDeactivated(flag);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SiegeSpawnFrameBehavior siegeSpawnFrameBehavior = ...;
siegeSpawnFrameBehavior.Initialize();
```

## See Also

- [Area Index](../)