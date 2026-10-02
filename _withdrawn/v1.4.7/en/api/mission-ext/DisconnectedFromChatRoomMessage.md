---
title: "DisconnectedFromChatRoomMessage"
description: "DisconnectedFromChatRoomMessage — class in TaleWorlds.MountAndBlade.Diamond.Messages.FromLobbyServer.ToClient. 2 public members (0 static)."
---

<!-- v147-skeleton -->
# DisconnectedFromChatRoomMessage

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.Messages.FromLobbyServer.ToClient`  
**Module:** `TaleWorlds.MountAndBlade.Diamond`  
**Type:** `public class DisconnectedFromChatRoomMessage : Message`  
**Base:** `Message`  
**Source:** `TaleWorlds.MountAndBlade.Diamond/Messages/FromLobbyServer/ToClient/DisconnectedFromChatRoomMessage.cs`

## Overview

`DisconnectedFromChatRoomMessage` is a named type in the TaleWorlds.MountAndBlade.Diamond.Messages.FromLobbyServer.ToClient namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

It extends Message, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Constructed with** (2): `DisconnectedFromChatRoomMessage`, `DisconnectedFromChatRoomMessage`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `DisconnectedFromChatRoomMessage` | ctor | Instance entry point. Takes no arguments. Returns ``. |
| `DisconnectedFromChatRoomMessage` | ctor | Instance entry point. Takes 2 arguments: `Guid roomId`, `string roomName`. Returns ``. |

- Constructed as `public DisconnectedFromChatRoomMessage()`.
- Constructed as `public DisconnectedFromChatRoomMessage(Guid roomId, string roomName)`.

## Usage Example

```csharp
var disconnectedFromChatRoomMessage = new DisconnectedFromChatRoomMessage();
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.MountAndBlade.Diamond/Messages/FromLobbyServer/ToClient/DisconnectedFromChatRoomMessage.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [Client](../../engine/Client/) — `TaleWorlds.Diamond`.

Section: [api/mission-ext/](../) — the other types in this bucket.
