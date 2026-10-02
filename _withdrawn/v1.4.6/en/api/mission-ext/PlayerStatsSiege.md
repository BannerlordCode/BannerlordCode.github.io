---
title: "PlayerStatsSiege"
description: "PlayerStatsSiege: a public class in TaleWorlds.MountAndBlade.Diamond, inheriting PlayerStatsBase; 11 exposed members (3 methods, 7 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/PlayerStatsSiege.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PlayerStatsSiege

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class PlayerStatsSiege : PlayerStatsBase`
**File:** `TaleWorlds.MountAndBlade.Diamond/PlayerStatsSiege.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

PlayerStatsSiege lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/PlayerStatsSiege.cs. It is a public class, implementing/inheriting PlayerStatsBase; the inheritance chain is PlayerStatsSiege → PlayerStatsBase. It exposes 11 public/protected members: 3 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PlayerStatsSiege lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond`, inheritance chain PlayerStatsSiege → PlayerStatsBase. The surface is property-led (properties 7/11, methods 3/11), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/PlayerStatsSiege.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `WallsBreached` | `public int WallsBreached` | property |
| `SiegeEngineKills` | `public int SiegeEngineKills` | property |
| `SiegeEnginesDestroyed` | `public int SiegeEnginesDestroyed` | property |
| `ObjectiveGoldGained` | `public int ObjectiveGoldGained` | property |
| `Score` | `public int Score` | property |
| `AverageScore` | `public int AverageScore` | property |
| `AverageKillCount` | `public int AverageKillCount` | property |
| `PlayerStatsSiege` | `public PlayerStatsSiege()` | constructor |
| `FillWith` | `public void FillWith(PlayerId playerId, int killCount, int deathCount, int assistCount, int winCount, int loseCount, int forfeitCount, int wallsBreached, int siegeEngineKills, int siegeEnginesDestroyed, int objectiveGoldGained, int score)` | method |
| `FillWithNewPlayer` | `public void FillWithNewPlayer(PlayerId playerId)` | method |
| `Update` | `public void Update(BattlePlayerStatsSiege stats, bool won)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface PlayerStatsBase](../PlayerStatsBase/)
- [same namespace Announcement](../Announcement/)
- [same namespace AnnouncementType](../AnnouncementType/)
- [same namespace AnotherPlayerData](../AnotherPlayerData/)
- [same namespace AnotherPlayerState](../AnotherPlayerState/)
