---
title: "PlayerStatsDuel"
description: "PlayerStatsDuel: a public class in TaleWorlds.MountAndBlade.Diamond, inheriting PlayerStatsBase; 8 exposed members (3 methods, 4 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/PlayerStatsDuel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PlayerStatsDuel

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class PlayerStatsDuel : PlayerStatsBase`
**File:** `TaleWorlds.MountAndBlade.Diamond/PlayerStatsDuel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

PlayerStatsDuel lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/PlayerStatsDuel.cs. It is a public class, implementing/inheriting PlayerStatsBase; the inheritance chain is PlayerStatsDuel → PlayerStatsBase. It exposes 8 public/protected members: 3 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PlayerStatsDuel lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond`, inheritance chain PlayerStatsDuel → PlayerStatsBase. The surface is property-led (properties 4/8, methods 3/8), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/PlayerStatsDuel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `DuelsWon` | `public int DuelsWon` | property |
| `InfantryWins` | `public int InfantryWins` | property |
| `ArcherWins` | `public int ArcherWins` | property |
| `CavalryWins` | `public int CavalryWins` | property |
| `PlayerStatsDuel` | `public PlayerStatsDuel()` | constructor |
| `FillWith` | `public void FillWith(PlayerId playerId, int killCount, int deathCount, int assistCount, int winCount, int loseCount, int forfeitCount, int duelsWon, int infantryWins, int archerWins, int cavalryWins)` | method |
| `FillWithNewPlayer` | `public void FillWithNewPlayer(PlayerId playerId)` | method |
| `Update` | `public void Update(BattlePlayerStatsDuel stats, bool won)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface PlayerStatsBase](../PlayerStatsBase/)
- [same namespace Announcement](../Announcement/)
- [same namespace AnnouncementType](../AnnouncementType/)
- [same namespace AnotherPlayerData](../AnotherPlayerData/)
- [same namespace AnotherPlayerState](../AnotherPlayerState/)
