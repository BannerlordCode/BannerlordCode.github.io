---
title: "IBattleServerSessionHandler"
description: "IBattleServerSessionHandler: a public interface in TaleWorlds.MountAndBlade.Diamond; 8 exposed members (8 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/IBattleServerSessionHandler.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IBattleServerSessionHandler

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public interface IBattleServerSessionHandler`
**File:** `TaleWorlds.MountAndBlade.Diamond/IBattleServerSessionHandler.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

IBattleServerSessionHandler lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/IBattleServerSessionHandler.cs. It is a public interface; the inheritance chain is IBattleServerSessionHandler. It exposes 8 public/protected members: 8 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IBattleServerSessionHandler lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond`, inheritance chain IBattleServerSessionHandler. The surface is method-led (methods 8/8, properties 0/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/IBattleServerSessionHandler.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnConnected` | `void OnConnected();` | method |
| `OnCantConnect` | `void OnCantConnect();` | method |
| `OnDisconnected` | `void OnDisconnected();` | method |
| `OnNewPlayer` | `void OnNewPlayer(BattlePeer peer);` | method |
| `OnStartGame` | `void OnStartGame(string sceneName, string gameType, string faction1, string faction2, int minRequiredPlayerCountToStartBattle, int battleSize, string[]profanityList, string[]allowList);` | method |
| `OnPlayerFledBattle` | `void OnPlayerFledBattle(BattlePeer peer, out BattleResult battleResult, bool isQuitFromBattle);` | method |
| `OnEndMission` | `void OnEndMission();` | method |
| `OnStopServer` | `void OnStopServer();` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Announcement](../Announcement/)
- [same namespace AnnouncementType](../AnnouncementType/)
- [same namespace AnotherPlayerData](../AnotherPlayerData/)
- [same namespace AnotherPlayerState](../AnotherPlayerState/)
