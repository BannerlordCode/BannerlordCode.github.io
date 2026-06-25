---
title: "CastleGateAI"
description: "Auto-generated class reference for CastleGateAI."
---
# CastleGateAI

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CastleGateAI : UsableMachineAIBase`
**Base:** `UsableMachineAIBase`
**File:** `TaleWorlds.MountAndBlade/CastleGateAI.cs`

## Overview

`CastleGateAI` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HasActionCompleted` | `public override bool HasActionCompleted { get; }` |

## Key Methods

### ResetInitialGateState
`public void ResetInitialGateState(CastleGate.GateState newInitialState)`

**Purpose:** Returns initial gate state to its default or initial condition.

```csharp
// Obtain an instance of CastleGateAI from the subsystem API first
CastleGateAI castleGateAI = ...;
castleGateAI.ResetInitialGateState(newInitialState);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CastleGateAI castleGateAI = ...;
castleGateAI.ResetInitialGateState(newInitialState);
```

## See Also

- [Area Index](../)