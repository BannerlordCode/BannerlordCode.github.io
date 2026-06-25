---
title: "TournamentParticipant"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TournamentParticipant`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TournamentParticipant

**Namespace:** TaleWorlds.CampaignSystem.TournamentGames
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TournamentParticipant`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/TournamentGames/TournamentParticipant.cs`

## Overview

`TournamentParticipant` lives in `TaleWorlds.CampaignSystem.TournamentGames` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.TournamentGames` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Score` | `public int Score { get; }` |
| `Character` | `public CharacterObject Character { get; }` |
| `Descriptor` | `public UniqueTroopDescriptor Descriptor { get; }` |
| `Team` | `public TournamentTeam Team { get; }` |
| `MatchEquipment` | `public Equipment MatchEquipment { get; set; }` |
| `IsAssigned` | `public bool IsAssigned { get; set; }` |
| `IsPlayer` | `public bool IsPlayer { get; }` |

## Key Methods

### SetTeam
`public void SetTeam(TournamentTeam team)`

**Purpose:** Sets the value or state of `team`.

### AddScore
`public int AddScore(int score)`

**Purpose:** Adds `score` to the current collection or state.

### ResetScore
`public void ResetScore()`

**Purpose:** Resets `score` to its initial state.

## Usage Example

```csharp
var value = new TournamentParticipant();
value.SetTeam(team);
```

## See Also

- [Complete Class Catalog](../catalog)