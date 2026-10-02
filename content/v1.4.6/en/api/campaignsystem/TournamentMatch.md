---
title: "TournamentMatch"
description: "TournamentMatch: a public class in TaleWorlds.CampaignSystem; 15 exposed members (7 methods, 6 properties, 0 fields). Source: TaleWorlds.CampaignSystem/TournamentGames/TournamentMatch.cs."
---
# TournamentMatch

**Namespace:** `TaleWorlds.CampaignSystem.TournamentGames`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class TournamentMatch`
**File:** `TaleWorlds.CampaignSystem/TournamentGames/TournamentMatch.cs`

## Overview

TournamentMatch lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/TournamentGames/TournamentMatch.cs. It is a public class; the inheritance chain is TournamentMatch. It exposes 15 public/protected members: 7 methods, 6 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TournamentMatch is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.TournamentGames) the module directory; inheritance chain TournamentMatch. The surface is method-led (methods 7/15, properties 6/15), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/TournamentGames/TournamentMatch.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IEnumerable` | `public IEnumerable<TournamentTeam>Teams` | property |
| `IEnumerable` | `public IEnumerable<TournamentParticipant>Participants` | property |
| `State` | `public TournamentMatch.MatchState State` | property |
| `IEnumerable` | `public IEnumerable<TournamentParticipant>Winners` | property |
| `IsReady` | `public bool IsReady` | property |
| `TournamentMatch` | `public TournamentMatch(int participantCount, int numberOfTeamsPerMatch, int numberOfWinnerParticipants, TournamentGame.QualificationMode qualificationMode)` | constructor |
| `End` | `public void End()` | method |
| `Start` | `public void Start()` | method |
| `GetParticipant` | `public TournamentParticipant GetParticipant(int uniqueSeed)` | method |
| `IsParticipantRequired` | `public bool IsParticipantRequired()` | method |
| `AddParticipant` | `public void AddParticipant(TournamentParticipant participant, bool firstTime)` | method |
| `IsPlayerParticipating` | `public bool IsPlayerParticipating()` | method |
| `IsPlayerWinner` | `public bool IsPlayerWinner()` | method |
| `MatchState` | `public enum MatchState` | property |
| `MatchState` | `public enum MatchState` | nested type |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace FightTournamentGame](../FightTournamentGame)
- [same namespace ITournamentManager](../ITournamentManager)
- [same namespace TournamentCampaignBehavior](../TournamentCampaignBehavior)
- [same namespace TournamentGame](../TournamentGame)
