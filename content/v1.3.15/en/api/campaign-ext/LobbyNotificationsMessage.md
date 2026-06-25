---
title: "LobbyNotificationsMessage"
description: "Auto-generated class reference for LobbyNotificationsMessage."
---
# LobbyNotificationsMessage

**Namespace:** Messages.FromLobbyServer.ToClient
**Module:** Messages.FromLobbyServer
**Type:** `public class LobbyNotificationsMessage : Message`
**Base:** `Message`
**File:** `TaleWorlds.MountAndBlade.Diamond/Messages/FromLobbyServer/ToClient/LobbyNotificationsMessage.cs`

## Overview

`LobbyNotificationsMessage` lives in `Messages.FromLobbyServer.ToClient` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Messages.FromLobbyServer.ToClient` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Notifications` | `public LobbyNotification Notifications { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
LobbyNotificationsMessage instance = ...;
```

## See Also

- [Area Index](../)