---
title: "SyncPlayerMuteState"
description: "Auto-generated class reference for SyncPlayerMuteState."
---
# SyncPlayerMuteState

**Namespace:** NetworkMessages.FromServer
**Module:** NetworkMessages.FromServer
**Type:** `public sealed class SyncPlayerMuteState : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `bin/TaleWorlds.MountAndBlade/NetworkMessages.FromServer/SyncPlayerMuteState.cs`

## Overview

`SyncPlayerMuteState` lives in `NetworkMessages.FromServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `NetworkMessages.FromServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerId` | `public PlayerId PlayerId { get; }` |
| `IsMuted` | `public bool IsMuted { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
SyncPlayerMuteState instance = ...;
```

## See Also

- [Area Index](../)