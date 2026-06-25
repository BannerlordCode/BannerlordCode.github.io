---
title: "PeerVisualsHolder"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PeerVisualsHolder`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Sets the value or state of `mount visuals`.

## Usage Example

```csharp
var value = new PeerVisualsHolder();
value.SetMountVisuals(mountAgentVisuals);
```

## See Also

- [Complete Class Catalog](../catalog)