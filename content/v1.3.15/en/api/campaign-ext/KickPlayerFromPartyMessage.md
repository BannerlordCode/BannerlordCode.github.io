---
title: "KickPlayerFromPartyMessage"
description: "Auto-generated class reference for KickPlayerFromPartyMessage."
---
# KickPlayerFromPartyMessage

**Namespace:** Messages.FromClient.ToLobbyServer
**Module:** Messages.FromClient
**Type:** `public class KickPlayerFromPartyMessage : Message`
**Base:** `Message`
**File:** `TaleWorlds.MountAndBlade.Diamond/Messages/FromClient/ToLobbyServer/KickPlayerFromPartyMessage.cs`

## Overview

`KickPlayerFromPartyMessage` lives in `Messages.FromClient.ToLobbyServer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Messages.FromClient.ToLobbyServer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `KickedPlayerId` | `public PlayerId KickedPlayerId { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
KickPlayerFromPartyMessage instance = ...;
```

## See Also

- [Area Index](../)