---
title: "PlayerStatsRanked"
description: "PlayerStatsRanked: a public class in TaleWorlds.MountAndBlade.Diamond, inheriting PlayerStatsBase; 6 exposed members (2 methods, 4 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/PlayerStatsRanked.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PlayerStatsRanked

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class PlayerStatsRanked : PlayerStatsBase`
**File:** `TaleWorlds.MountAndBlade.Diamond/PlayerStatsRanked.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

PlayerStatsRanked lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/PlayerStatsRanked.cs. It is a public class, implementing/inheriting PlayerStatsBase; the inheritance chain is PlayerStatsRanked → PlayerStatsBase. It exposes 6 public/protected members: 2 methods, 4 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PlayerStatsRanked lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond`, inheritance chain PlayerStatsRanked → PlayerStatsBase. The surface is property-led (properties 4/6, methods 2/6), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/PlayerStatsRanked.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Rating` | `public int Rating` | property |
| `Rank` | `public string Rank` | property |
| `Evaluating` | `public bool Evaluating` | property |
| `EvaluationMatchesPlayedCount` | `public int EvaluationMatchesPlayedCount` | property |
| `FillWith` | `public void FillWith(PlayerId playerId, int killCount, int deathCount, int assistCount, int winCount, int loseCount, int forfeitCount, int rating, int ratingDeviation, string rank, bool evaluating, int evaluationMatchesPlayedCount)` | method |
| `FillWithNewPlayer` | `public virtual void FillWithNewPlayer(PlayerId playerId, string gameType, int defaultRating, int defaultRatingDeviation)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface PlayerStatsBase](../PlayerStatsBase/)
- [same namespace Announcement](../Announcement/)
- [same namespace AnnouncementType](../AnnouncementType/)
- [same namespace AnotherPlayerData](../AnotherPlayerData/)
- [same namespace AnotherPlayerState](../AnotherPlayerState/)
