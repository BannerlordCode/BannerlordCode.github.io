---
title: "PlayerStatsCaptain"
description: "PlayerStatsCaptain: a public class in TaleWorlds.MountAndBlade.Diamond, inheriting PlayerStatsRanked; 8 exposed members (3 methods, 4 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/PlayerStatsCaptain.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PlayerStatsCaptain

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class PlayerStatsCaptain : PlayerStatsRanked`
**File:** `TaleWorlds.MountAndBlade.Diamond/PlayerStatsCaptain.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

PlayerStatsCaptain lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/PlayerStatsCaptain.cs. It is a public class, implementing/inheriting PlayerStatsRanked; the inheritance chain is PlayerStatsCaptain → PlayerStatsRanked → PlayerStatsBase. It exposes 8 public/protected members: 3 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PlayerStatsCaptain lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond`, inheritance chain PlayerStatsCaptain → PlayerStatsRanked → PlayerStatsBase. The surface is property-led (properties 4/8, methods 3/8), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/PlayerStatsCaptain.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CaptainsKilled` | `public int CaptainsKilled` | property |
| `MVPs` | `public int MVPs` | property |
| `Score` | `public int Score` | property |
| `AverageScore` | `public int AverageScore` | property |
| `PlayerStatsCaptain` | `public PlayerStatsCaptain()` | constructor |
| `FillWith` | `public void FillWith(PlayerId playerId, int killCount, int deathCount, int assistCount, int winCount, int loseCount, int forfeitCount, int rating, int ratingDeviation, string rank, bool evaluating, int evaluationMatchesPlayedCount, int captainsKilled, int mvps, int score)` | method |
| `FillWithNewPlayer` | `public void FillWithNewPlayer(PlayerId playerId, int defaultRating, int defaultRatingDeviation)` | method |
| `Update` | `public void Update(BattlePlayerStatsCaptain stats, bool won)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface PlayerStatsRanked](../PlayerStatsRanked/)
- [same namespace Announcement](../Announcement/)
- [same namespace AnnouncementType](../AnnouncementType/)
- [same namespace AnotherPlayerData](../AnotherPlayerData/)
- [same namespace AnotherPlayerState](../AnotherPlayerState/)
