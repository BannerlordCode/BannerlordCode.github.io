---
title: "PlayerStatsTeamDeathmatch"
description: "PlayerStatsTeamDeathmatch: a public class in TaleWorlds.MountAndBlade.Diamond, inheriting PlayerStatsBase; 6 exposed members (3 methods, 2 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/PlayerStatsTeamDeathmatch.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PlayerStatsTeamDeathmatch

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class PlayerStatsTeamDeathmatch : PlayerStatsBase`
**File:** `TaleWorlds.MountAndBlade.Diamond/PlayerStatsTeamDeathmatch.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

PlayerStatsTeamDeathmatch lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/PlayerStatsTeamDeathmatch.cs. It is a public class, implementing/inheriting PlayerStatsBase; the inheritance chain is PlayerStatsTeamDeathmatch → PlayerStatsBase. It exposes 6 public/protected members: 3 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PlayerStatsTeamDeathmatch lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond`, inheritance chain PlayerStatsTeamDeathmatch → PlayerStatsBase. The surface is method-led (methods 3/6, properties 2/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/PlayerStatsTeamDeathmatch.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Score` | `public int Score` | property |
| `AverageScore` | `public float AverageScore` | property |
| `PlayerStatsTeamDeathmatch` | `public PlayerStatsTeamDeathmatch()` | constructor |
| `FillWith` | `public void FillWith(PlayerId playerId, int killCount, int deathCount, int assistCount, int winCount, int loseCount, int forfeitCount, int score)` | method |
| `FillWithNewPlayer` | `public void FillWithNewPlayer(PlayerId playerId)` | method |
| `Update` | `public void Update(BattlePlayerStatsTeamDeathmatch stats, bool won)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface PlayerStatsBase](../PlayerStatsBase/)
- [same namespace Announcement](../Announcement/)
- [same namespace AnnouncementType](../AnnouncementType/)
- [same namespace AnotherPlayerData](../AnotherPlayerData/)
- [same namespace AnotherPlayerState](../AnotherPlayerState/)
