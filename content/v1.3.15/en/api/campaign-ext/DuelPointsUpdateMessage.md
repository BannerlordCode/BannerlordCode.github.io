---
title: "DuelPointsUpdateMessage"
description: "Auto-generated class reference for DuelPointsUpdateMessage."
---
# DuelPointsUpdateMessage

**Namespace:** NetworkMessages.FromServer
**Module:** NetworkMessages.FromServer
**Type:** `public sealed class DuelPointsUpdateMessage : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `TaleWorlds.MountAndBlade/NetworkMessages/FromServer/DuelPointsUpdateMessage.cs`

## Overview

`DuelPointsUpdateMessage` lives in `NetworkMessages.FromServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `NetworkMessages.FromServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Bounty` | `public int Bounty { get; }` |
| `Score` | `public int Score { get; }` |
| `NumberOfWins` | `public int NumberOfWins { get; }` |
| `NetworkCommunicator` | `public NetworkCommunicator NetworkCommunicator { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
DuelPointsUpdateMessage instance = ...;
```

## See Also

- [Area Index](../)