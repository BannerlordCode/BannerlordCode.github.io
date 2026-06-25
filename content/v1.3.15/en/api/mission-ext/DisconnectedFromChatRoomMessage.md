---
title: "DisconnectedFromChatRoomMessage"
description: "Auto-generated class reference for DisconnectedFromChatRoomMessage."
---
# DisconnectedFromChatRoomMessage

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Messages.FromLobbyServer.ToClient
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DisconnectedFromChatRoomMessage : Message`
**Base:** `Message`
**File:** `TaleWorlds.MountAndBlade.Diamond/Messages/FromLobbyServer/ToClient/DisconnectedFromChatRoomMessage.cs`

## Overview

`DisconnectedFromChatRoomMessage` lives in `TaleWorlds.MountAndBlade.Diamond.Messages.FromLobbyServer.ToClient` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Diamond.Messages.FromLobbyServer.ToClient` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `RoomId` | `public Guid RoomId { get; }` |
| `RoomName` | `public string RoomName { get; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
DisconnectedFromChatRoomMessage instance = ...;
```

## See Also

- [Area Index](../)