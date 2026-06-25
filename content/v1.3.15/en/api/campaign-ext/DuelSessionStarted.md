---
title: "DuelSessionStarted"
description: "Auto-generated class reference for DuelSessionStarted."
---
# DuelSessionStarted

**Namespace:** NetworkMessages.FromServer
**Module:** NetworkMessages.FromServer
**Type:** `public sealed class DuelSessionStarted : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `TaleWorlds.MountAndBlade/NetworkMessages/FromServer/DuelSessionStarted.cs`

## Overview

`DuelSessionStarted` lives in `NetworkMessages.FromServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `NetworkMessages.FromServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `RequesterPeer` | `public NetworkCommunicator RequesterPeer { get; }` |
| `RequestedPeer` | `public NetworkCommunicator RequestedPeer { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
DuelSessionStarted instance = ...;
```

## See Also

- [Area Index](../)