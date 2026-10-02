---
title: "PlayerBattleInfo"
description: "PlayerBattleInfo: a public class in TaleWorlds.MountAndBlade.Diamond; 18 exposed members (5 methods, 9 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/PlayerBattleInfo.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PlayerBattleInfo

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class PlayerBattleInfo`
**File:** `TaleWorlds.MountAndBlade.Diamond/PlayerBattleInfo.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

PlayerBattleInfo lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/PlayerBattleInfo.cs. It is a public class; the inheritance chain is PlayerBattleInfo. It exposes 18 public/protected members: 5 methods, 9 properties, 3 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PlayerBattleInfo lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond`, inheritance chain PlayerBattleInfo. The surface is property-led (properties 9/18, methods 5/18), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/PlayerBattleInfo.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `PlayerId` | `public PlayerId PlayerId` | property |
| `Name` | `public string Name` | property |
| `TeamNo` | `public int TeamNo` | property |
| `Fled` | `public bool Fled` | property |
| `Disconnected` | `public bool Disconnected` | property |
| `JoinType` | `public BattleJoinType JoinType` | property |
| `PeerIndex` | `public int PeerIndex` | property |
| `CurrentState` | `public PlayerBattleInfo.State CurrentState` | property |
| `PlayerBattleInfo` | `public PlayerBattleInfo()` | constructor |
| `PlayerBattleInfo` | `public PlayerBattleInfo(PlayerId playerId, string name, int teamNo)` | constructor |
| `PlayerBattleInfo` | `public PlayerBattleInfo(PlayerId playerId, string name, int teamNo, int peerIndex, PlayerBattleInfo.State state)` | constructor |
| `Flee` | `public void Flee()` | method |
| `Disconnect` | `public void Disconnect()` | method |
| `Initialize` | `public void Initialize(int peerIndex)` | method |
| `RejoinBattle` | `public void RejoinBattle(int teamNo)` | method |
| `Clone` | `public PlayerBattleInfo Clone()` | method |
| `State` | `public enum State` | property |
| `State` | `public enum State` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Announcement](../Announcement/)
- [same namespace AnnouncementType](../AnnouncementType/)
- [same namespace AnotherPlayerData](../AnotherPlayerData/)
- [same namespace AnotherPlayerState](../AnotherPlayerState/)
