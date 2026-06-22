<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerMissionAgentVisualSpawnComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerMissionAgentVisualSpawnComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerMissionAgentVisualSpawnComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MultiplayerMissionAgentVisualSpawnComponent.cs`

## Overview

`MultiplayerMissionAgentVisualSpawnComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<MultiplayerMissionAgentVisualSpawnComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Methods

### SpawnAgentVisualsForPeer
```csharp
public void SpawnAgentVisualsForPeer(MissionPeer missionPeer, AgentBuildData buildData, int selectedEquipmentSetIndex = -1, bool isBot = false, int totalTroopCount = 0)
```

### RemoveAgentVisuals
```csharp
public void RemoveAgentVisuals(MissionPeer missionPeer, bool sync = false)
```

### OnMyAgentSpawned
```csharp
public void OnMyAgentSpawned()
```

### OnPreMissionTick
```csharp
public override void OnPreMissionTick(float dt)
```

### GetSpawnPointFrameForPlayer
```csharp
public MatrixFrame GetSpawnPointFrameForPlayer(VirtualPlayer player, BattleSideEnum side, int agentVisualIndex, int totalTroopCount, bool isMounted = false)
```

### FreeSpawnPointFromPlayer
```csharp
public void FreeSpawnPointFromPlayer(VirtualPlayer player)
```

## Usage Example

```csharp
// Typical usage of MultiplayerMissionAgentVisualSpawnComponent (Component)
agent.GetComponent<MultiplayerMissionAgentVisualSpawnComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)