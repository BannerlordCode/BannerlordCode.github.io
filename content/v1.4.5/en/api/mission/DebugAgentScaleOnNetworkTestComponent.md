---
title: "DebugAgentScaleOnNetworkTestComponent"
description: "Auto-generated class reference for DebugAgentScaleOnNetworkTestComponent."
---
# DebugAgentScaleOnNetworkTestComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal sealed class DebugAgentScaleOnNetworkTestComponent : UdpNetworkComponent`
**Base:** `UdpNetworkComponent`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/DebugAgentScaleOnNetworkTestComponent.cs`

## Overview

`DebugAgentScaleOnNetworkTestComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `DebugAgentScaleOnNetworkTestComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnUdpNetworkHandlerTick
`public override void OnUdpNetworkHandlerTick(float dt)`

**Purpose:** **Purpose:** Invoked when the udp network handler tick event is raised.

```csharp
// Obtain an instance of DebugAgentScaleOnNetworkTestComponent from the subsystem API first
DebugAgentScaleOnNetworkTestComponent debugAgentScaleOnNetworkTestComponent = ...;
debugAgentScaleOnNetworkTestComponent.OnUdpNetworkHandlerTick(0);
```

### OnUdpNetworkHandlerClose
`public override void OnUdpNetworkHandlerClose()`

**Purpose:** **Purpose:** Invoked when the udp network handler close event is raised.

```csharp
// Obtain an instance of DebugAgentScaleOnNetworkTestComponent from the subsystem API first
DebugAgentScaleOnNetworkTestComponent debugAgentScaleOnNetworkTestComponent = ...;
debugAgentScaleOnNetworkTestComponent.OnUdpNetworkHandlerClose();
```

## Usage Example

```csharp
var component = agent.GetComponent<DebugAgentScaleOnNetworkTestComponent>();
```

## See Also

- [Area Index](../)