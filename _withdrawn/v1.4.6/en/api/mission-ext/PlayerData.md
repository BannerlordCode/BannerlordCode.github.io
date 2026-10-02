---
title: "PlayerData"
description: "PlayerData: a public class in TaleWorlds.MountAndBlade.Diamond; 34 exposed members (5 methods, 28 properties, 1 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/PlayerData.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PlayerData

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class PlayerData`
**File:** `TaleWorlds.MountAndBlade.Diamond/PlayerData.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

PlayerData lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/PlayerData.cs. It is a public class; the inheritance chain is PlayerData. It exposes 34 public/protected members: 5 methods, 28 properties, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PlayerData lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond`, inheritance chain PlayerData. The surface is property-led (properties 28/34, methods 5/34), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/PlayerData.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `PlayerId` | `public PlayerId PlayerId` | property |
| `OwnerPlayerId` | `public PlayerId OwnerPlayerId` | property |
| `Sigil` | `public string Sigil` | property |
| `BodyProperties` | `public BodyProperties BodyProperties` | property |
| `ShownBadgeIndex` | `public int ShownBadgeIndex` | property |
| `PlayerStatsBase[]Stats` | `public PlayerStatsBase[]Stats` | property |
| `Race` | `public int Race` | property |
| `IsFemale` | `public bool IsFemale` | property |
| `KillCount` | `public int KillCount` | property |
| `DeathCount` | `public int DeathCount` | property |
| `AssistCount` | `public int AssistCount` | property |
| `WinCount` | `public int WinCount` | property |
| `LoseCount` | `public int LoseCount` | property |
| `Experience` | `public int Experience` | property |
| `LastPlayerName` | `public string LastPlayerName` | property |
| `Username` | `public string Username` | property |
| `UserId` | `public int UserId` | property |
| `IsUsingClanSigil` | `public bool IsUsingClanSigil` | property |
| `LastRegion` | `public string LastRegion` | property |
| `string[]LastGameTypes` | `public string[]LastGameTypes` | property |
| `LastLogin` | `public DateTime? LastLogin` | property |
| `Playtime` | `public int Playtime` | property |
| `ShownBadgeId` | `public string ShownBadgeId` | property |
| `Gold` | `public int Gold` | property |
| `IsMuted` | `public bool IsMuted` | property |
| `Level` | `public int Level` | property |
| `ExperienceToNextLevel` | `public int ExperienceToNextLevel` | property |
| `ExperienceInCurrentLevel` | `public int ExperienceInCurrentLevel` | property |
| `FillWith` | `public void FillWith(PlayerId playerId, PlayerId ownerPlayerId, BodyProperties bodyProperties, bool isFemale, string sigil, int experience, string lastPlayerName, string username, int userId, string lastRegion, string[]lastGameTypes, DateTime? lastLogin, int playtime, string shownBadgeId, int gold, PlayerStatsBase[]stats, bool shouldLog, bool isUsingClanSigil)` | method |
| `FillWithNewPlayer` | `public void FillWithNewPlayer(PlayerId playerId, PlayerId ownerPlayerId, string[]gameTypes)` | method |
| `HasGameStats` | `public bool HasGameStats(string gameType)` | method |
| `GetGameStats` | `public PlayerStatsBase GetGameStats(string gameType)` | method |
| `UpdateGameStats` | `public void UpdateGameStats(PlayerStatsBase playerGameTypeStats)` | method |
| `DefaultSigil` | `public const string DefaultSigil` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Announcement](../Announcement/)
- [same namespace AnnouncementType](../AnnouncementType/)
- [same namespace AnotherPlayerData](../AnotherPlayerData/)
- [same namespace AnotherPlayerState](../AnotherPlayerState/)
