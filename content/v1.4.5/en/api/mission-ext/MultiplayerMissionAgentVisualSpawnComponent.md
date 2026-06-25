---
title: "MultiplayerMissionAgentVisualSpawnComponent"
description: "Auto-generated class reference for MultiplayerMissionAgentVisualSpawnComponent."
---
# MultiplayerMissionAgentVisualSpawnComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerMissionAgentVisualSpawnComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MultiplayerMissionAgentVisualSpawnComponent.cs`

## Overview

`MultiplayerMissionAgentVisualSpawnComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `MultiplayerMissionAgentVisualSpawnComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetSpawnPointFrameForPlayer
`public MatrixFrame GetSpawnPointFrameForPlayer(VirtualPlayer player, BattleSideEnum side, int agentVisualIndex, int totalTroopCount, bool isMounted = false)`

**Purpose:** **Purpose:** Reads and returns the spawn point frame for player value held by the this instance.

```csharp
// Obtain an instance of MultiplayerMissionAgentVisualSpawnComponent from the subsystem API first
MultiplayerMissionAgentVisualSpawnComponent multiplayerMissionAgentVisualSpawnComponent = ...;
var result = multiplayerMissionAgentVisualSpawnComponent.GetSpawnPointFrameForPlayer(player, side, 0, 0, false);
```

### FreeSpawnPointFromPlayer
`public void FreeSpawnPointFromPlayer(VirtualPlayer player)`

**Purpose:** **Purpose:** Executes the FreeSpawnPointFromPlayer logic.

```csharp
// Obtain an instance of MultiplayerMissionAgentVisualSpawnComponent from the subsystem API first
MultiplayerMissionAgentVisualSpawnComponent multiplayerMissionAgentVisualSpawnComponent = ...;
multiplayerMissionAgentVisualSpawnComponent.FreeSpawnPointFromPlayer(player);
```

### SpawnAgentVisualsForPeer
`public void SpawnAgentVisualsForPeer(MissionPeer missionPeer, AgentBuildData buildData, int selectedEquipmentSetIndex = -1, bool isBot = false, int totalTroopCount = 0)`

**Purpose:** **Purpose:** Executes the SpawnAgentVisualsForPeer logic.

```csharp
// Obtain an instance of MultiplayerMissionAgentVisualSpawnComponent from the subsystem API first
MultiplayerMissionAgentVisualSpawnComponent multiplayerMissionAgentVisualSpawnComponent = ...;
multiplayerMissionAgentVisualSpawnComponent.SpawnAgentVisualsForPeer(missionPeer, buildData, 0, false, 0);
```

### RemoveAgentVisuals
`public void RemoveAgentVisuals(MissionPeer missionPeer, bool sync = false)`

**Purpose:** **Purpose:** Removes agent visuals from the current collection or state.

```csharp
// Obtain an instance of MultiplayerMissionAgentVisualSpawnComponent from the subsystem API first
MultiplayerMissionAgentVisualSpawnComponent multiplayerMissionAgentVisualSpawnComponent = ...;
multiplayerMissionAgentVisualSpawnComponent.RemoveAgentVisuals(missionPeer, false);
```

### OnMyAgentSpawned
`public void OnMyAgentSpawned()`

**Purpose:** **Purpose:** Invoked when the my agent spawned event is raised.

```csharp
// Obtain an instance of MultiplayerMissionAgentVisualSpawnComponent from the subsystem API first
MultiplayerMissionAgentVisualSpawnComponent multiplayerMissionAgentVisualSpawnComponent = ...;
multiplayerMissionAgentVisualSpawnComponent.OnMyAgentSpawned();
```

### OnPreMissionTick
`public override void OnPreMissionTick(float dt)`

**Purpose:** **Purpose:** Invoked when the pre mission tick event is raised.

```csharp
// Obtain an instance of MultiplayerMissionAgentVisualSpawnComponent from the subsystem API first
MultiplayerMissionAgentVisualSpawnComponent multiplayerMissionAgentVisualSpawnComponent = ...;
multiplayerMissionAgentVisualSpawnComponent.OnPreMissionTick(0);
```

## Usage Example

```csharp
var component = agent.GetComponent<MultiplayerMissionAgentVisualSpawnComponent>();
```

## See Also

- [Area Index](../)