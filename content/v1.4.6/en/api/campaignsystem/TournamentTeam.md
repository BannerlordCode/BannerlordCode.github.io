---
title: "TournamentTeam"
description: "TournamentTeam: a public class in TaleWorlds.CampaignSystem; 9 exposed members (2 methods, 6 properties, 0 fields). Source: TaleWorlds.CampaignSystem/TournamentGames/TournamentTeam.cs."
---
# TournamentTeam

**Namespace:** `TaleWorlds.CampaignSystem.TournamentGames`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class TournamentTeam`
**File:** `TaleWorlds.CampaignSystem/TournamentGames/TournamentTeam.cs`

## Overview

TournamentTeam lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/TournamentGames/TournamentTeam.cs. It is a public class; the inheritance chain is TournamentTeam. It exposes 9 public/protected members: 2 methods, 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TournamentTeam is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.TournamentGames) the module directory; inheritance chain TournamentTeam. The surface is property-led (properties 6/9, methods 2/9), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/TournamentGames/TournamentTeam.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TeamSize` | `public int TeamSize` | property |
| `TeamColor` | `public uint TeamColor` | property |
| `TeamBanner` | `public Banner TeamBanner` | property |
| `IsPlayerTeam` | `public bool IsPlayerTeam` | property |
| `IEnumerable` | `public IEnumerable<TournamentParticipant>Participants` | property |
| `Score` | `public int Score` | property |
| `TournamentTeam` | `public TournamentTeam(int teamSize, uint teamColor, Banner teamBanner)` | constructor |
| `IsParticipantRequired` | `public bool IsParticipantRequired()` | method |
| `AddParticipant` | `public void AddParticipant(TournamentParticipant participant)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace FightTournamentGame](../FightTournamentGame)
- [same namespace ITournamentManager](../ITournamentManager)
- [same namespace TournamentCampaignBehavior](../TournamentCampaignBehavior)
- [same namespace TournamentGame](../TournamentGame)
