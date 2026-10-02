---
title: "BattlePeer"
description: "BattlePeer: a public class in TaleWorlds.MountAndBlade.Diamond; 13 exposed members (2 methods, 10 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/BattlePeer.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BattlePeer

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class BattlePeer`
**File:** `TaleWorlds.MountAndBlade.Diamond/BattlePeer.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

BattlePeer lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/BattlePeer.cs. It is a public class; the inheritance chain is BattlePeer. It exposes 13 public/protected members: 2 methods, 10 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BattlePeer lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond`, inheritance chain BattlePeer. The surface is property-led (properties 10/13, methods 2/13), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/BattlePeer.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Index` | `public int Index` | property |
| `Name` | `public string Name` | property |
| `PlayerId` | `public PlayerId PlayerId` | property |
| `TeamNo` | `public int TeamNo` | property |
| `BattleJoinType` | `public BattleJoinType BattleJoinType` | property |
| `Quit` | `public bool Quit` | property |
| `PlayerData` | `public PlayerData PlayerData` | property |
| `List` | `public Dictionary<string, List<string>>UsedCosmetics` | property |
| `SessionKey` | `public int SessionKey` | property |
| `QuitType` | `public BattlePeerQuitType QuitType` | property |
| `BattlePeer` | `public BattlePeer(string name, PlayerData playerData, Dictionary<string, List<string>>usedCosmetics, int teamNo, BattleJoinType battleJoinType)` | constructor |
| `Rejoin` | `public void Rejoin(int teamNo)` | method |
| `InitializeSession` | `public void InitializeSession(int index, int sessionKey)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Announcement](../Announcement/)
- [same namespace AnnouncementType](../AnnouncementType/)
- [same namespace AnotherPlayerData](../AnotherPlayerData/)
- [same namespace AnotherPlayerState](../AnotherPlayerState/)
