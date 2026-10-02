---
title: "ISandBoxMissionManager"
description: "ISandBoxMissionManager: a public interface in TaleWorlds.CampaignSystem; 5 exposed members (5 methods, 0 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/ISandBoxMissionManager.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ISandBoxMissionManager

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface ISandBoxMissionManager`
**File:** `TaleWorlds.CampaignSystem/ISandBoxMissionManager.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

ISandBoxMissionManager lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ISandBoxMissionManager.cs. It is a public interface; the inheritance chain is ISandBoxMissionManager. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ISandBoxMissionManager lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem`, inheritance chain ISandBoxMissionManager. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ISandBoxMissionManager.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OpenTournamentFightMission` | `IMission OpenTournamentFightMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating);` | method |
| `OpenTournamentHorseRaceMission` | `IMission OpenTournamentHorseRaceMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating);` | method |
| `OpenTournamentJoustingMission` | `IMission OpenTournamentJoustingMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating);` | method |
| `OpenTournamentArcheryMission` | `IMission OpenTournamentArcheryMission(string scene, TournamentGame tournamentGame, Settlement settlement, CultureObject culture, bool isPlayerParticipating);` | method |
| `OpenBattleChallengeMission` | `IMission OpenBattleChallengeMission(string scene, IList<Hero>priorityCharsAttacker, IList<Hero>priorityCharsDefender);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionNotes](../ActionNotes/)
- [same namespace AIBehaviorData](../AIBehaviorData/)
- [same namespace Army](../Army/)
- [same namespace AtmosphereGrid](../AtmosphereGrid/)
