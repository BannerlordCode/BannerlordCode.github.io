---
title: "TournamentRound"
description: "TournamentRound: a public class in TaleWorlds.CampaignSystem.TournamentGames; 7 exposed members (3 methods, 3 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/TournamentGames/TournamentRound.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TournamentRound

**Namespace:** `TaleWorlds.CampaignSystem.TournamentGames`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class TournamentRound`
**File:** `TaleWorlds.CampaignSystem/TournamentGames/TournamentRound.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

TournamentRound lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/TournamentGames/TournamentRound.cs. It is a public class; the inheritance chain is TournamentRound. It exposes 7 public/protected members: 3 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TournamentRound lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.TournamentGames`, inheritance chain TournamentRound. The surface is method-led (methods 3/7, properties 3/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/TournamentGames/TournamentRound.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `TournamentMatch[]Matches` | `public TournamentMatch[]Matches` | property |
| `CurrentMatchIndex` | `public int CurrentMatchIndex` | property |
| `CurrentMatch` | `public TournamentMatch CurrentMatch` | property |
| `TournamentRound` | `public TournamentRound(int participantCount, int numberOfMatches, int numberOfTeamsPerMatch, int numberOfWinnerParticipants, TournamentGame.QualificationMode qualificationMode)` | constructor |
| `OnMatchEnded` | `public void OnMatchEnded()` | method |
| `EndMatch` | `public void EndMatch()` | method |
| `AddParticipant` | `public void AddParticipant(TournamentParticipant participant, bool firstTime = false)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace FightTournamentGame](../FightTournamentGame/)
- [same namespace ITournamentManager](../ITournamentManager/)
- [same namespace TournamentCampaignBehavior](../TournamentCampaignBehavior/)
- [same namespace TournamentGame](../TournamentGame/)
