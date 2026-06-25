---
title: "NetworkStatusReplicationComponent"
description: "Auto-generated class reference for NetworkStatusReplicationComponent."
---
# NetworkStatusReplicationComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal sealed class NetworkStatusReplicationComponent : UdpNetworkComponent`
**Base:** `UdpNetworkComponent`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/NetworkStatusReplicationComponent.cs`

## Overview

`NetworkStatusReplicationComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `NetworkStatusReplicationComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnUdpNetworkHandlerTick
`public override void OnUdpNetworkHandlerTick(float dt)`

**Purpose:** **Purpose:** Invoked when the udp network handler tick event is raised.

```csharp
// Obtain an instance of NetworkStatusReplicationComponent from the subsystem API first
NetworkStatusReplicationComponent networkStatusReplicationComponent = ...;
networkStatusReplicationComponent.OnUdpNetworkHandlerTick(0);
```

### OnUdpNetworkHandlerClose
`public override void OnUdpNetworkHandlerClose()`

**Purpose:** **Purpose:** Invoked when the udp network handler close event is raised.

```csharp
// Obtain an instance of NetworkStatusReplicationComponent from the subsystem API first
NetworkStatusReplicationComponent networkStatusReplicationComponent = ...;
networkStatusReplicationComponent.OnUdpNetworkHandlerClose();
```

## Usage Example

```csharp
var component = agent.GetComponent<NetworkStatusReplicationComponent>();
```

## See Also

- [Area Index](../)