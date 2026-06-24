<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeSpawningBehavior`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SiegeSpawningBehavior

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeSpawningBehavior : SpawningBehaviorBase`
**Base:** `SpawningBehaviorBase`
**File:** `TaleWorlds.MountAndBlade/SiegeSpawningBehavior.cs`

## Overview

`SiegeSpawningBehavior` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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

### AllowEarlyAgentVisualsDespawning
`public override bool AllowEarlyAgentVisualsDespawning(MissionPeer lobbyPeer)`

**Purpose:** Handles logic related to `allow early agent visuals despawning`.

### GetMaximumReSpawnPeriodForPeer
`public override int GetMaximumReSpawnPeriodForPeer(MissionPeer peer)`

**Purpose:** Gets the current value of `maximum re spawn period for peer`.

## Usage Example

```csharp
var value = new SiegeSpawningBehavior();
value.Initialize(spawnComponent);
```

## See Also

- [Complete Class Catalog](../catalog)