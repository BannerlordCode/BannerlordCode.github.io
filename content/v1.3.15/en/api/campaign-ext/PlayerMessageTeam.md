---
title: "PlayerMessageTeam"
description: "Auto-generated class reference for PlayerMessageTeam."
---
# PlayerMessageTeam

**Namespace:** NetworkMessages.FromServer
**Module:** NetworkMessages.FromServer
**Type:** `public sealed class PlayerMessageTeam : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `TaleWorlds.MountAndBlade/NetworkMessages/FromServer/PlayerMessageTeam.cs`

## Overview

`PlayerMessageTeam` lives in `NetworkMessages.FromServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `NetworkMessages.FromServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Message` | `public string Message { get; }` |
| `Player` | `public NetworkCommunicator Player { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
PlayerMessageTeam instance = ...;
```

## See Also

- [Area Index](../)