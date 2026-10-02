---
title: "ICustomBattleServerSessionHandler"
description: "ICustomBattleServerSessionHandler: a public interface in TaleWorlds.MountAndBlade.Diamond; 10 exposed members (10 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/ICustomBattleServerSessionHandler.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ICustomBattleServerSessionHandler

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public interface ICustomBattleServerSessionHandler`
**File:** `TaleWorlds.MountAndBlade.Diamond/ICustomBattleServerSessionHandler.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ICustomBattleServerSessionHandler lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/ICustomBattleServerSessionHandler.cs. It is a public interface; the inheritance chain is ICustomBattleServerSessionHandler. It exposes 10 public/protected members: 10 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ICustomBattleServerSessionHandler lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond`, inheritance chain ICustomBattleServerSessionHandler. The surface is method-led (methods 10/10, properties 0/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/ICustomBattleServerSessionHandler.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnConnected` | `void OnConnected();` | method |
| `OnCantConnect` | `void OnCantConnect();` | method |
| `OnDisconnected` | `void OnDisconnected();` | method |
| `OnStateChanged` | `void OnStateChanged(CustomBattleServer.State state);` | method |
| `OnSuccessfulGameRegister` | `void OnSuccessfulGameRegister();` | method |
| `Task` | `Task<PlayerJoinGameResponseDataFromHost[]>OnClientWantsToConnectCustomGame(PlayerJoinGameData[]playerJoinData);` | method |
| `OnClientQuitFromCustomGame` | `void OnClientQuitFromCustomGame(PlayerId playerId);` | method |
| `OnGameFinished` | `void OnGameFinished();` | method |
| `OnChatFilterListsReceived` | `void OnChatFilterListsReceived(string[]profanityList, string[]allowList);` | method |
| `OnPlayerKickRequested` | `void OnPlayerKickRequested(PlayerId playerID, bool isBanning);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Announcement](../Announcement/)
- [same namespace AnnouncementType](../AnnouncementType/)
- [same namespace AnotherPlayerData](../AnotherPlayerData/)
- [same namespace AnotherPlayerState](../AnotherPlayerState/)
