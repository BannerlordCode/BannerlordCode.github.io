---
title: "PlayerStatsBase"
description: "PlayerStatsBase: a public class in TaleWorlds.MountAndBlade.Diamond; 11 exposed members (2 methods, 9 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Diamond/PlayerStatsBase.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PlayerStatsBase

**Namespace:** `TaleWorlds.MountAndBlade.Diamond`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class PlayerStatsBase`
**File:** `TaleWorlds.MountAndBlade.Diamond/PlayerStatsBase.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

PlayerStatsBase lives in the TaleWorlds.MountAndBlade.Diamond module, source file TaleWorlds.MountAndBlade.Diamond/PlayerStatsBase.cs. It is a public class; the inheritance chain is PlayerStatsBase. It exposes 11 public/protected members: 2 methods, 9 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PlayerStatsBase lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Diamond`, inheritance chain PlayerStatsBase. The surface is property-led (properties 9/11, methods 2/11), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Diamond/PlayerStatsBase.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `PlayerId` | `public PlayerId PlayerId` | property |
| `KillCount` | `public int KillCount` | property |
| `DeathCount` | `public int DeathCount` | property |
| `AssistCount` | `public int AssistCount` | property |
| `WinCount` | `public int WinCount` | property |
| `LoseCount` | `public int LoseCount` | property |
| `ForfeitCount` | `public int ForfeitCount` | property |
| `AverageKillPerDeath` | `public float AverageKillPerDeath` | property |
| `GameType` | `public string GameType` | property |
| `FillWith` | `public void FillWith(PlayerId playerId, int killCount, int deathCount, int assistCount, int winCount, int loseCount, int forfeitCount)` | method |
| `Update` | `public virtual void Update(BattlePlayerStatsBase battleStats, bool won)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace Announcement](../Announcement/)
- [same namespace AnnouncementType](../AnnouncementType/)
- [same namespace AnotherPlayerData](../AnotherPlayerData/)
- [same namespace AnotherPlayerState](../AnotherPlayerState/)
