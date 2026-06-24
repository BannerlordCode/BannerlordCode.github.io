<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PeerExtensions`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PeerExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class PeerExtensions`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/PeerExtensions.cs`

## Overview

`PeerExtensions` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SendExistingObjects
`public static void SendExistingObjects(this NetworkCommunicator peer, Mission mission)`

**Purpose:** Handles logic related to `send existing objects`.

### GetPeer
`public static VirtualPlayer GetPeer(this PeerComponent peerComponent)`

**Purpose:** Gets the current value of `peer`.

### GetNetworkPeer
`public static NetworkCommunicator GetNetworkPeer(this PeerComponent peerComponent)`

**Purpose:** Gets the current value of `network peer`.

### RemoveComponent
`public static void RemoveComponent(this NetworkCommunicator networkPeer, PeerComponent component)`

**Purpose:** Removes `component` from the current collection or state.

### GetComponent
`public static PeerComponent GetComponent(this NetworkCommunicator networkPeer, uint componentId)`

**Purpose:** Gets the current value of `component`.

### AddComponent
`public static void AddComponent(this NetworkCommunicator networkPeer, Type peerComponentType)`

**Purpose:** Adds `component` to the current collection or state.

### AddComponent
`public static void AddComponent(this NetworkCommunicator networkPeer, uint componentId)`

**Purpose:** Adds `component` to the current collection or state.

## Usage Example

```csharp
PeerExtensions.SendExistingObjects(peer, mission);
```

## See Also

- [Complete Class Catalog](../catalog)