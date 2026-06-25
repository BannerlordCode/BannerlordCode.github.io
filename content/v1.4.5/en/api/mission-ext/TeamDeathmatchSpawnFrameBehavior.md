---
title: "TeamDeathmatchSpawnFrameBehavior"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TeamDeathmatchSpawnFrameBehavior`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TeamDeathmatchSpawnFrameBehavior

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TeamDeathmatchSpawnFrameBehavior : SpawnFrameBehaviorBase`
**Base:** `SpawnFrameBehaviorBase`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/TeamDeathmatchSpawnFrameBehavior.cs`

## Overview

`TeamDeathmatchSpawnFrameBehavior` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetSpawnFrame
`public override MatrixFrame GetSpawnFrame(Team team, bool hasMount, bool isInitialSpawn)`

**Purpose:** Gets the current value of `spawn frame`.

## Usage Example

```csharp
var value = new TeamDeathmatchSpawnFrameBehavior();
value.GetSpawnFrame(team, false, false);
```

## See Also

- [Complete Class Catalog](../catalog)