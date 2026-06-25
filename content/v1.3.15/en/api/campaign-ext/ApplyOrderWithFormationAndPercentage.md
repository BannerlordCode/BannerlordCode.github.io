---
title: "ApplyOrderWithFormationAndPercentage"
description: "Auto-generated class reference for ApplyOrderWithFormationAndPercentage."
---
# ApplyOrderWithFormationAndPercentage

**Namespace:** NetworkMessages.FromClient
**Module:** NetworkMessages.FromClient
**Type:** `public sealed class ApplyOrderWithFormationAndPercentage : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `TaleWorlds.MountAndBlade/NetworkMessages/FromClient/ApplyOrderWithFormationAndPercentage.cs`

## Overview

`ApplyOrderWithFormationAndPercentage` lives in `NetworkMessages.FromClient` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `NetworkMessages.FromClient` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OrderType` | `public OrderType OrderType { get; }` |
| `FormationIndex` | `public int FormationIndex { get; }` |
| `Percentage` | `public int Percentage { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
ApplyOrderWithFormationAndPercentage instance = ...;
```

## See Also

- [Area Index](../)