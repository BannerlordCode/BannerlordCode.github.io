---
title: "ApplyOrderWithAgent"
description: "Auto-generated class reference for ApplyOrderWithAgent."
---
# ApplyOrderWithAgent

**Namespace:** NetworkMessages.FromClient
**Module:** NetworkMessages.FromClient
**Type:** `public sealed class ApplyOrderWithAgent : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `bin/TaleWorlds.MountAndBlade/NetworkMessages.FromClient/ApplyOrderWithAgent.cs`

## Overview

`ApplyOrderWithAgent` lives in `NetworkMessages.FromClient` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `NetworkMessages.FromClient` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OrderType` | `public OrderType OrderType { get; }` |
| `AgentIndex` | `public int AgentIndex { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
ApplyOrderWithAgent instance = ...;
```

## See Also

- [Area Index](../)