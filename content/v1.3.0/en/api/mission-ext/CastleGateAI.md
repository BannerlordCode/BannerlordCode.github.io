---
title: "CastleGateAI"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CastleGateAI`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Resets `initial gate state` to its initial state.

## Usage Example

```csharp
var value = new CastleGateAI();
value.ResetInitialGateState(newInitialState);
```

## See Also

- [Complete Class Catalog](../catalog)