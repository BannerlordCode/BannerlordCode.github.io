---
title: "MultiplayerMissionAgentVisualSpawnComponent"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerMissionAgentVisualSpawnComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerMissionAgentVisualSpawnComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerMissionAgentVisualSpawnComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MultiplayerMissionAgentVisualSpawnComponent.cs`

## Overview

`MultiplayerMissionAgentVisualSpawnComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `MultiplayerMissionAgentVisualSpawnComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetSpawnPointFrameForPlayer
`public MatrixFrame GetSpawnPointFrameForPlayer(VirtualPlayer player, BattleSideEnum side, int agentVisualIndex, int totalTroopCount, bool isMounted = false)`

**Purpose:** Gets the current value of `spawn point frame for player`.

### FreeSpawnPointFromPlayer
`public void FreeSpawnPointFromPlayer(VirtualPlayer player)`

**Purpose:** Handles logic related to `free spawn point from player`.

### SpawnAgentVisualsForPeer
`public void SpawnAgentVisualsForPeer(MissionPeer missionPeer, AgentBuildData buildData, int selectedEquipmentSetIndex = -1, bool isBot = false, int totalTroopCount = 0)`

**Purpose:** Handles logic related to `spawn agent visuals for peer`.

### RemoveAgentVisuals
`public void RemoveAgentVisuals(MissionPeer missionPeer, bool sync = false)`

**Purpose:** Removes `agent visuals` from the current collection or state.

### OnMyAgentSpawned
`public void OnMyAgentSpawned()`

**Purpose:** Called when the `my agent spawned` event is raised.

### OnPreMissionTick
`public override void OnPreMissionTick(float dt)`

**Purpose:** Called when the `pre mission tick` event is raised.

## Usage Example

```csharp
var component = agent.GetComponent<MultiplayerMissionAgentVisualSpawnComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)