---
title: "PeerVisualsHolder"
description: "Auto-generated class reference for PeerVisualsHolder."
---
# PeerVisualsHolder

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PeerVisualsHolder`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/PeerVisualsHolder.cs`

## Overview

`PeerVisualsHolder` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Peer` | `public MissionPeer Peer { get; }` |
| `VisualsIndex` | `public int VisualsIndex { get; }` |
| `AgentVisuals` | `public IAgentVisual AgentVisuals { get; }` |
| `MountAgentVisuals` | `public IAgentVisual MountAgentVisuals { get; }` |

## Key Methods

### SetMountVisuals
`public void SetMountVisuals(IAgentVisual mountAgentVisuals)`

**Purpose:** Assigns a new value to mount visuals and updates the object's internal state.

```csharp
// Obtain an instance of PeerVisualsHolder from the subsystem API first
PeerVisualsHolder peerVisualsHolder = ...;
peerVisualsHolder.SetMountVisuals(mountAgentVisuals);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PeerVisualsHolder peerVisualsHolder = ...;
peerVisualsHolder.SetMountVisuals(mountAgentVisuals);
```

## See Also

- [Area Index](../)