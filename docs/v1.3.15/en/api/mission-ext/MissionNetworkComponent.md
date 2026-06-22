<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionNetworkComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionNetworkComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class MissionNetworkComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MissionNetworkComponent.cs`

## Overview

`MissionNetworkComponent` is an AgentComponent — per-agent state/logic attached to an Agent. Access via `agent.GetComponent<MissionNetworkComponent>()` (some have a typed agent property). Subclass AgentComponent to add your own.

## Key Methods

### OnPlayerDisconnectedFromServer
```csharp
public override void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer)
```

### OnRemoveBehavior
```csharp
public override void OnRemoveBehavior()
```

### OnAddTeam
```csharp
public override void OnAddTeam(Team team)
```

### OnBehaviorInitialize
```csharp
public override void OnBehaviorInitialize()
```

### OnClearScene
```csharp
public override void OnClearScene()
```

### OnMissionTick
```csharp
public override void OnMissionTick(float dt)
```

### OnPeerSelectedTeam
```csharp
public void OnPeerSelectedTeam(MissionPeer missionPeer)
```

### OnClientSynchronized
```csharp
public void OnClientSynchronized(NetworkCommunicator networkPeer)
```

## Usage Example

```csharp
// Typical usage of MissionNetworkComponent (Component)
agent.GetComponent<MissionNetworkComponent>();
```

## See Also

- [Complete Class Catalog](../catalog)