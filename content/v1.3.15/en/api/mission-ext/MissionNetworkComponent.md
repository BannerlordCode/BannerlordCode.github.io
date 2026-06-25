---
title: "MissionNetworkComponent"
description: "Auto-generated class reference for MissionNetworkComponent."
---
# MissionNetworkComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class MissionNetworkComponent : MissionNetwork`
**Base:** `MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MissionNetworkComponent.cs`

## Overview

`MissionNetworkComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `MissionNetworkComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnPlayerDisconnectedFromServer
`public override void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer)`

**Purpose:** Invoked when the `player disconnected from server` event is raised.

```csharp
// Obtain an instance of MissionNetworkComponent from the subsystem API first
MissionNetworkComponent missionNetworkComponent = ...;
missionNetworkComponent.OnPlayerDisconnectedFromServer(networkPeer);
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Invoked when the `remove behavior` event is raised.

```csharp
// Obtain an instance of MissionNetworkComponent from the subsystem API first
MissionNetworkComponent missionNetworkComponent = ...;
missionNetworkComponent.OnRemoveBehavior();
```

### OnAddTeam
`public override void OnAddTeam(Team team)`

**Purpose:** Invoked when the `add team` event is raised.

```csharp
// Obtain an instance of MissionNetworkComponent from the subsystem API first
MissionNetworkComponent missionNetworkComponent = ...;
missionNetworkComponent.OnAddTeam(team);
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the `behavior initialize` event is raised.

```csharp
// Obtain an instance of MissionNetworkComponent from the subsystem API first
MissionNetworkComponent missionNetworkComponent = ...;
missionNetworkComponent.OnBehaviorInitialize();
```

### OnClearScene
`public override void OnClearScene()`

**Purpose:** Invoked when the `clear scene` event is raised.

```csharp
// Obtain an instance of MissionNetworkComponent from the subsystem API first
MissionNetworkComponent missionNetworkComponent = ...;
missionNetworkComponent.OnClearScene();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the `mission tick` event is raised.

```csharp
// Obtain an instance of MissionNetworkComponent from the subsystem API first
MissionNetworkComponent missionNetworkComponent = ...;
missionNetworkComponent.OnMissionTick(0);
```

### OnPeerSelectedTeam
`public void OnPeerSelectedTeam(MissionPeer missionPeer)`

**Purpose:** Invoked when the `peer selected team` event is raised.

```csharp
// Obtain an instance of MissionNetworkComponent from the subsystem API first
MissionNetworkComponent missionNetworkComponent = ...;
missionNetworkComponent.OnPeerSelectedTeam(missionPeer);
```

### OnClientSynchronized
`public void OnClientSynchronized(NetworkCommunicator networkPeer)`

**Purpose:** Invoked when the `client synchronized` event is raised.

```csharp
// Obtain an instance of MissionNetworkComponent from the subsystem API first
MissionNetworkComponent missionNetworkComponent = ...;
missionNetworkComponent.OnClientSynchronized(networkPeer);
```

## Usage Example

```csharp
var component = agent.GetComponent<MissionNetworkComponent>();
```

## See Also

- [Area Index](../)