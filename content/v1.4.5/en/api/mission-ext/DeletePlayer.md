---
title: "DeletePlayer"
description: "Auto-generated class reference for DeletePlayer."
---
# DeletePlayer

**Namespace:** TaleWorlds.MountAndBlade.Network.Messages
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class DeletePlayer : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Network.Messages/DeletePlayer.cs`

## Overview

`DeletePlayer` lives in `TaleWorlds.MountAndBlade.Network.Messages` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Network.Messages` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PlayerIndex` | `public int PlayerIndex { get; }` |
| `AddToDisconnectList` | `public bool AddToDisconnectList { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
DeletePlayer instance = ...;
```

## See Also

- [Area Index](../)