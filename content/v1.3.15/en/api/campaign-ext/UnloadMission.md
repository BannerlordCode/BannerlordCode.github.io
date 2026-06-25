---
title: "UnloadMission"
description: "Auto-generated class reference for UnloadMission."
---
# UnloadMission

**Namespace:** NetworkMessages.FromServer
**Module:** NetworkMessages.FromServer
**Type:** `public sealed class UnloadMission : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `TaleWorlds.MountAndBlade/NetworkMessages/FromServer/UnloadMission.cs`

## Overview

`UnloadMission` lives in `NetworkMessages.FromServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `NetworkMessages.FromServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `UnloadingForBattleIndexMismatch` | `public bool UnloadingForBattleIndexMismatch { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
UnloadMission instance = ...;
```

## See Also

- [Area Index](../)