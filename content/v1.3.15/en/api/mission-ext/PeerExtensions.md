---
title: "PeerExtensions"
description: "Auto-generated class reference for PeerExtensions."
---
# PeerExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class PeerExtensions`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/PeerExtensions.cs`

## Overview

`PeerExtensions` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SendExistingObjects
`public static void SendExistingObjects(this NetworkCommunicator peer, Mission mission)`

**Purpose:** **Purpose:** Executes the SendExistingObjects logic.

```csharp
// Static call; no instance required
PeerExtensions.SendExistingObjects(peer, mission);
```

### GetPeer
`public static VirtualPlayer GetPeer(this PeerComponent peerComponent)`

**Purpose:** **Purpose:** Reads and returns the peer value held by the this instance.

```csharp
// Static call; no instance required
PeerExtensions.GetPeer(peerComponent);
```

### GetNetworkPeer
`public static NetworkCommunicator GetNetworkPeer(this PeerComponent peerComponent)`

**Purpose:** **Purpose:** Reads and returns the network peer value held by the this instance.

```csharp
// Static call; no instance required
PeerExtensions.GetNetworkPeer(peerComponent);
```

### RemoveComponent
`public static void RemoveComponent(this NetworkCommunicator networkPeer, PeerComponent component)`

**Purpose:** **Purpose:** Removes component from the current collection or state.

```csharp
// Static call; no instance required
PeerExtensions.RemoveComponent(networkPeer, component);
```

### GetComponent
`public static PeerComponent GetComponent(this NetworkCommunicator networkPeer, uint componentId)`

**Purpose:** **Purpose:** Reads and returns the component value held by the this instance.

```csharp
// Static call; no instance required
PeerExtensions.GetComponent(networkPeer, 0);
```

### AddComponent
`public static void AddComponent(this NetworkCommunicator networkPeer, Type peerComponentType)`

**Purpose:** **Purpose:** Adds component to the current collection or state.

```csharp
// Static call; no instance required
PeerExtensions.AddComponent(networkPeer, peerComponentType);
```

### AddComponent
`public static void AddComponent(this NetworkCommunicator networkPeer, uint componentId)`

**Purpose:** **Purpose:** Adds component to the current collection or state.

```csharp
// Static call; no instance required
PeerExtensions.AddComponent(networkPeer, 0);
```

## Usage Example

```csharp
PeerExtensions.SendExistingObjects(peer, mission);
```

## See Also

- [Area Index](../)