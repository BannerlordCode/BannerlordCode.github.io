---
title: "SetAgentActionSet"
description: "Auto-generated class reference for SetAgentActionSet."
---
# SetAgentActionSet

**Namespace:** NetworkMessages.FromServer
**Module:** NetworkMessages.FromServer
**Type:** `public sealed class SetAgentActionSet : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `TaleWorlds.MountAndBlade/NetworkMessages/FromServer/SetAgentActionSet.cs`

## Overview

`SetAgentActionSet` lives in `NetworkMessages.FromServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `NetworkMessages.FromServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AgentIndex` | `public int AgentIndex { get; }` |
| `ActionSet` | `public MBActionSet ActionSet { get; }` |
| `NumPaces` | `public int NumPaces { get; }` |
| `MonsterUsageSetIndex` | `public int MonsterUsageSetIndex { get; }` |
| `WalkingSpeedLimit` | `public float WalkingSpeedLimit { get; }` |
| `CrouchWalkingSpeedLimit` | `public float CrouchWalkingSpeedLimit { get; }` |
| `StepSize` | `public float StepSize { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
SetAgentActionSet instance = ...;
```

## See Also

- [Area Index](../)