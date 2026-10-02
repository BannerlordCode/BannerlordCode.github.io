---
title: "TournamentParticipant"
description: "TournamentParticipant: a public class in TaleWorlds.CampaignSystem.TournamentGames; 11 exposed members (3 methods, 7 properties, 0 fields). Canonical bucket campaign. Source: TaleWorlds.CampaignSystem/TournamentGames/TournamentParticipant.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TournamentParticipant

**Namespace:** `TaleWorlds.CampaignSystem.TournamentGames`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class TournamentParticipant`
**File:** `TaleWorlds.CampaignSystem/TournamentGames/TournamentParticipant.cs`
**Bucket:** `campaign` (rule:TaleWorlds.CampaignSystem)

## Overview

TournamentParticipant lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/TournamentGames/TournamentParticipant.cs. It is a public class; the inheritance chain is TournamentParticipant. It exposes 11 public/protected members: 3 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TournamentParticipant lands in canonical bucket `campaign` (matched rule `rule:TaleWorlds.CampaignSystem`), namespace `TaleWorlds.CampaignSystem.TournamentGames`, inheritance chain TournamentParticipant. The surface is property-led (properties 7/11, methods 3/11), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/TournamentGames/TournamentParticipant.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace FightTournamentGame](../FightTournamentGame/)
- [same namespace ITournamentManager](../ITournamentManager/)
- [same namespace TournamentCampaignBehavior](../TournamentCampaignBehavior/)
- [same namespace TournamentGame](../TournamentGame/)
