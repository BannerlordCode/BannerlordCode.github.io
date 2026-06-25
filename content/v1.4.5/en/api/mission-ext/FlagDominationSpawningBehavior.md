---
title: "FlagDominationSpawningBehavior"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FlagDominationSpawningBehavior`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FlagDominationSpawningBehavior

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FlagDominationSpawningBehavior : SpawningBehaviorBase`
**Base:** `SpawningBehaviorBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/FlagDominationSpawningBehavior.cs`

## Overview

`FlagDominationSpawningBehavior` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public override void Initialize(SpawnComponent spawnComponent)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### Clear
`public override void Clear()`

**Purpose:** Handles logic related to `clear`.

### OnTick
`public override void OnTick(float dt)`

**Purpose:** Called when the `tick` event is raised.

### RequestStartSpawnSession
`public override void RequestStartSpawnSession()`

**Purpose:** Handles logic related to `request start spawn session`.

### AllowEarlyAgentVisualsDespawning
`public override bool AllowEarlyAgentVisualsDespawning(MissionPeer lobbyPeer)`

**Purpose:** Handles logic related to `allow early agent visuals despawning`.

### OnClearScene
`public override void OnClearScene()`

**Purpose:** Called when the `clear scene` event is raised.

## Usage Example

```csharp
var value = new FlagDominationSpawningBehavior();
value.Initialize(spawnComponent);
```

## See Also

- [Complete Class Catalog](../catalog)