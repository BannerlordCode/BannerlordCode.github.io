---
title: "TournamentParticipant"
description: "Auto-generated class reference for TournamentParticipant."
---
# TournamentParticipant

**Namespace:** TaleWorlds.CampaignSystem.TournamentGames
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TournamentParticipant`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.TournamentGames/TournamentParticipant.cs`

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

## Key Methods

### SetTeam
`public void SetTeam(TournamentTeam team)`

**Purpose:** Assigns a new value to team and updates the object's internal state.

```csharp
// Obtain an instance of TournamentParticipant from the subsystem API first
TournamentParticipant tournamentParticipant = ...;
tournamentParticipant.SetTeam(team);
```

### AddScore
`public int AddScore(int score)`

**Purpose:** Adds score to the current collection or state.

```csharp
// Obtain an instance of TournamentParticipant from the subsystem API first
TournamentParticipant tournamentParticipant = ...;
var result = tournamentParticipant.AddScore(0);
```

### ResetScore
`public void ResetScore()`

**Purpose:** Returns score to its default or initial condition.

```csharp
// Obtain an instance of TournamentParticipant from the subsystem API first
TournamentParticipant tournamentParticipant = ...;
tournamentParticipant.ResetScore();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TournamentParticipant tournamentParticipant = ...;
tournamentParticipant.SetTeam(team);
```

## See Also

- [Area Index](../)