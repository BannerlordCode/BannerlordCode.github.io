---
title: "RetreatPositionCacheSystem"
description: "Auto-generated class reference for RetreatPositionCacheSystem."
---
# RetreatPositionCacheSystem

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RetreatPositionCacheSystem`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/Formation.cs`

## Overview

`RetreatPositionCacheSystem` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetRetreatPositionFromCache
`public WorldPosition GetRetreatPositionFromCache(Vec2 agentPosition)`

**Purpose:** Reads and returns the retreat position from cache value held by the this instance.

```csharp
// Obtain an instance of RetreatPositionCacheSystem from the subsystem API first
RetreatPositionCacheSystem retreatPositionCacheSystem = ...;
var result = retreatPositionCacheSystem.GetRetreatPositionFromCache(agentPosition);
```

### AddNewPositionToCache
`public void AddNewPositionToCache(Vec2 agentPostion, WorldPosition retreatingPosition)`

**Purpose:** Adds new position to cache to the current collection or state.

```csharp
// Obtain an instance of RetreatPositionCacheSystem from the subsystem API first
RetreatPositionCacheSystem retreatPositionCacheSystem = ...;
retreatPositionCacheSystem.AddNewPositionToCache(agentPostion, retreatingPosition);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RetreatPositionCacheSystem retreatPositionCacheSystem = ...;
retreatPositionCacheSystem.GetRetreatPositionFromCache(agentPosition);
```

## See Also

- [Area Index](../)