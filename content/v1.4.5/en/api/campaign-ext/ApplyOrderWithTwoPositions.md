---
title: "ApplyOrderWithTwoPositions"
description: "Auto-generated class reference for ApplyOrderWithTwoPositions."
---
# ApplyOrderWithTwoPositions

**Namespace:** NetworkMessages.FromClient
**Module:** NetworkMessages.FromClient
**Type:** `public sealed class ApplyOrderWithTwoPositions : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `bin/TaleWorlds.MountAndBlade/NetworkMessages.FromClient/ApplyOrderWithTwoPositions.cs`

## Overview

`ApplyOrderWithTwoPositions` lives in `NetworkMessages.FromClient` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `NetworkMessages.FromClient` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OrderType` | `public OrderType OrderType { get; }` |
| `Position1` | `public Vec3 Position1 { get; }` |
| `Position2` | `public Vec3 Position2 { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
ApplyOrderWithTwoPositions instance = ...;
```

## See Also

- [Area Index](../)