---
title: "PlayerJoinGameData"
description: "PlayerJoinGameData: a public class in TaleWorlds.MountAndBlade.Diamond; 10 exposed members (1 methods, 7 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/PlayerJoinGameData.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PlayerJoinGameData

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class PlayerJoinGameData`
**File:** `TaleWorlds.MountAndBlade.Diamond/PlayerJoinGameData.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

PlayerJoinGameData lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/PlayerJoinGameData.cs. It is a public class; the inheritance chain is PlayerJoinGameData. It exposes 10 public/protected members: 1 methods, 7 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PlayerJoinGameData lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond`, inheritance chain PlayerJoinGameData. The surface is property-led (properties 7/10, methods 1/10), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/PlayerJoinGameData.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `PlayerData` | `public PlayerData PlayerData` | property |
| `PlayerId` | `public PlayerId PlayerId` | property |
| `Name` | `public string Name` | property |
| `PartyId` | `public Guid? PartyId` | property |
| `List` | `public Dictionary<string, List<string>>UsedCosmetics` | property |
| `IpAddress` | `public string IpAddress` | property |
| `IsAdmin` | `public bool IsAdmin` | property |
| `PlayerJoinGameData` | `public PlayerJoinGameData()` | constructor |
| `PlayerJoinGameData` | `public PlayerJoinGameData(PlayerData playerData, string name, Guid? partyId, Dictionary<string, List<string>>usedCosmetics, string ipAddress, bool isAdmin)` | constructor |
| `ToString` | `public override string ToString()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Announcement](../Announcement/)
- [same namespace AnnouncementType](../AnnouncementType/)
- [same namespace AnotherPlayerData](../AnotherPlayerData/)
- [same namespace AnotherPlayerState](../AnotherPlayerState/)
