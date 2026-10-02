---
title: "ISandBoxMissionManager"
description: "ISandBoxMissionManager: a public interface in TaleWorlds.CampaignSystem; 5 exposed members (5 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ISandBoxMissionManager.cs."
---
# ISandBoxMissionManager

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface ISandBoxMissionManager`
**File:** `TaleWorlds.CampaignSystem/ISandBoxMissionManager.cs`

## Overview

ISandBoxMissionManager lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ISandBoxMissionManager.cs. It is a public interface; the inheritance chain is ISandBoxMissionManager. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ISandBoxMissionManager is a top-level type in TaleWorlds.CampaignSystem, namespace matching the module directory; inheritance chain ISandBoxMissionManager. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ISandBoxMissionManager.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OpenTournamentFightMission` | `IMission OpenTournamentFightMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating);` | method |
| `OpenTournamentHorseRaceMission` | `IMission OpenTournamentHorseRaceMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating);` | method |
| `OpenTournamentJoustingMission` | `IMission OpenTournamentJoustingMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating);` | method |
| `OpenTournamentArcheryMission` | `IMission OpenTournamentArcheryMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating);` | method |
| `OpenBattleChallengeMission` | `IMission OpenBattleChallengeMission(string scene, IList<Hero>priorityCharsAttacker, IList<Hero>priorityCharsDefender);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionNotes](../ActionNotes)
- [same namespace AIBehaviorData](../AIBehaviorData)
- [same namespace Army](../Army)
- [same namespace AtmosphereGrid](../AtmosphereGrid)
