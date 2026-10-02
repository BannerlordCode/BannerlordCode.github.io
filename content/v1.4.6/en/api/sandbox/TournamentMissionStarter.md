---
title: "TournamentMissionStarter"
description: "TournamentMissionStarter: a public class in SandBox; 5 exposed members (5 methods, 0 properties, 0 fields). Source: SandBox/Tournaments/TournamentMissionStarter.cs."
---
# TournamentMissionStarter

**Namespace:** `SandBox.Tournaments`
**Module:** `SandBox`
**Type:** `public static class TournamentMissionStarter`
**File:** `SandBox/Tournaments/TournamentMissionStarter.cs`

## Overview

TournamentMissionStarter lives in the SandBox module, source file SandBox/Tournaments/TournamentMissionStarter.cs. It is a public class; the inheritance chain is TournamentMissionStarter. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TournamentMissionStarter is a top-level type in SandBox, namespace differing from (SandBox.Tournaments) the module directory; inheritance chain TournamentMissionStarter. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Tournaments/TournamentMissionStarter.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OpenTournamentArcheryMission` | `public static Mission OpenTournamentArcheryMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)` | method |
| `OpenTournamentFightMission` | `public static Mission OpenTournamentFightMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)` | method |
| `OpenTournamentHorseRaceMission` | `public static Mission OpenTournamentHorseRaceMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)` | method |
| `OpenTournamentJoustingMission` | `public static Mission OpenTournamentJoustingMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating)` | method |
| `OpenBattleChallengeMission` | `public static Mission OpenBattleChallengeMission(string scene, IList<Hero>priorityCharsAttacker, IList<Hero>priorityCharsDefender)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ITournamentGameBehavior](../ITournamentGameBehavior)
