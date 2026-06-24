<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RetreatPositionCacheSystem`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RetreatPositionCacheSystem

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class RetreatPositionCacheSystem`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Formation.cs`

## Overview

`RetreatPositionCacheSystem` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetRetreatPositionFromCache
`public WorldPosition GetRetreatPositionFromCache(Vec2 agentPosition)`

**Purpose:** Gets the current value of `retreat position from cache`.

### AddNewPositionToCache
`public void AddNewPositionToCache(Vec2 agentPostion, WorldPosition retreatingPosition)`

**Purpose:** Adds `new position to cache` to the current collection or state.

## Usage Example

```csharp
var value = new RetreatPositionCacheSystem();
value.GetRetreatPositionFromCache(agentPosition);
```

## See Also

- [Complete Class Catalog](../catalog)