---
title: "DisconnectedFromChatRoomMessage"
description: "DisconnectedFromChatRoomMessage: a public class in TaleWorlds.MountAndBlade.Diamond.Messages.FromLobbyServer.ToClient, inheriting Message; 4 exposed members (0 methods, 2 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/Messages/FromLobbyServer/ToClient/DisconnectedFromChatRoomMessage.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DisconnectedFromChatRoomMessage

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.Messages.FromLobbyServer.ToClient`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class DisconnectedFromChatRoomMessage : Message`
**File:** `TaleWorlds.MountAndBlade.Diamond/Messages/FromLobbyServer/ToClient/DisconnectedFromChatRoomMessage.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

DisconnectedFromChatRoomMessage lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/Messages/FromLobbyServer/ToClient/DisconnectedFromChatRoomMessage.cs. It is a public class, implementing/inheriting Message; the inheritance chain is DisconnectedFromChatRoomMessage → Message. It exposes 4 public/protected members: 2 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DisconnectedFromChatRoomMessage lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond.Messages.FromLobbyServer.ToClient`, inheritance chain DisconnectedFromChatRoomMessage → Message. The surface is property-led (properties 2/4, methods 0/4), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/Messages/FromLobbyServer/ToClient/DisconnectedFromChatRoomMessage.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RoomId` | `public Guid RoomId` | property |
| `RoomName` | `public string RoomName` | property |
| `DisconnectedFromChatRoomMessage` | `public DisconnectedFromChatRoomMessage()` | constructor |
| `DisconnectedFromChatRoomMessage` | `public DisconnectedFromChatRoomMessage(Guid roomId, string roomName)` | constructor |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface Message](../../engine/Message/)
