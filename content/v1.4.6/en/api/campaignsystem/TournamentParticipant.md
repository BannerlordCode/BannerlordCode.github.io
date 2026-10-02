---
title: "TournamentParticipant"
description: "TournamentParticipant: a public class in TaleWorlds.CampaignSystem; 11 exposed members (3 methods, 7 properties, 0 fields). Source: TaleWorlds.CampaignSystem/TournamentGames/TournamentParticipant.cs."
---
# TournamentParticipant

**Namespace:** `TaleWorlds.CampaignSystem.TournamentGames`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class TournamentParticipant`
**File:** `TaleWorlds.CampaignSystem/TournamentGames/TournamentParticipant.cs`

## Overview

TournamentParticipant lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/TournamentGames/TournamentParticipant.cs. It is a public class; the inheritance chain is TournamentParticipant. It exposes 11 public/protected members: 3 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TournamentParticipant is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.TournamentGames) the module directory; inheritance chain TournamentParticipant. The surface is property-led (properties 7/11, methods 3/11), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/TournamentGames/TournamentParticipant.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Score` | `public int Score` | property |
| `Character` | `public CharacterObject Character` | property |
| `Descriptor` | `public UniqueTroopDescriptor Descriptor` | property |
| `Team` | `public TournamentTeam Team` | property |
| `MatchEquipment` | `public Equipment MatchEquipment` | property |
| `IsAssigned` | `public bool IsAssigned` | property |
| `IsPlayer` | `public bool IsPlayer` | property |
| `TournamentParticipant` | `public TournamentParticipant(CharacterObject character, UniqueTroopDescriptor descriptor = default(UniqueTroopDescriptor))` | constructor |
| `SetTeam` | `public void SetTeam(TournamentTeam team)` | method |
| `AddScore` | `public int AddScore(int score)` | method |
| `ResetScore` | `public void ResetScore()` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace FightTournamentGame](../FightTournamentGame)
- [same namespace ITournamentManager](../ITournamentManager)
- [same namespace TournamentCampaignBehavior](../TournamentCampaignBehavior)
- [same namespace TournamentGame](../TournamentGame)
