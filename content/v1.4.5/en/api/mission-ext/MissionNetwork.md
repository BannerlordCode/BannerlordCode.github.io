---
title: "MissionNetwork"
description: "Auto-generated class reference for MissionNetwork."
---
# MissionNetwork

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionNetwork : MissionLogic, IUdpNetworkHandler`
**Base:** `MissionLogic`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionNetwork.cs`

## Overview

`MissionNetwork` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnAfterMissionCreated
`public override void OnAfterMissionCreated()`

**Purpose:** Invoked when the `after mission created` event is raised.

```csharp
// Obtain an instance of MissionNetwork from the subsystem API first
MissionNetwork missionNetwork = ...;
missionNetwork.OnAfterMissionCreated();
```

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the `behavior initialize` event is raised.

```csharp
// Obtain an instance of MissionNetwork from the subsystem API first
MissionNetwork missionNetwork = ...;
missionNetwork.OnBehaviorInitialize();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Invoked when the `remove behavior` event is raised.

```csharp
// Obtain an instance of MissionNetwork from the subsystem API first
MissionNetwork missionNetwork = ...;
missionNetwork.OnRemoveBehavior();
```

### OnPlayerConnectedToServer
`public virtual void OnPlayerConnectedToServer(NetworkCommunicator networkPeer)`

**Purpose:** Invoked when the `player connected to server` event is raised.

```csharp
// Obtain an instance of MissionNetwork from the subsystem API first
MissionNetwork missionNetwork = ...;
missionNetwork.OnPlayerConnectedToServer(networkPeer);
```

### OnPlayerDisconnectedFromServer
`public virtual void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer)`

**Purpose:** Invoked when the `player disconnected from server` event is raised.

```csharp
// Obtain an instance of MissionNetwork from the subsystem API first
MissionNetwork missionNetwork = ...;
missionNetwork.OnPlayerDisconnectedFromServer(networkPeer);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MissionNetwork instance = ...;
```

## See Also

- [Area Index](../)