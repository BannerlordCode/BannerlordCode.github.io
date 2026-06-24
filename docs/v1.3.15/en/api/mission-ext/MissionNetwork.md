<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionNetwork`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionNetwork

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionNetwork : MissionLogic, IUdpNetworkHandler`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/MissionNetwork.cs`

## Overview

`MissionNetwork` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnAfterMissionCreated
`public override void OnAfterMissionCreated()`

**Purpose:** Called when the `after mission created` event is raised.

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Called when the `remove behavior` event is raised.

### OnPlayerConnectedToServer
`public virtual void OnPlayerConnectedToServer(NetworkCommunicator networkPeer)`

**Purpose:** Called when the `player connected to server` event is raised.

### OnPlayerDisconnectedFromServer
`public virtual void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer)`

**Purpose:** Called when the `player disconnected from server` event is raised.

## Usage Example

```csharp
var implementation = new CustomMissionNetwork();
```

## See Also

- [Complete Class Catalog](../catalog)