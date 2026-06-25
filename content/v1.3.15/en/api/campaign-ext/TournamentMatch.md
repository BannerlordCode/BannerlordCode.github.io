---
title: "TournamentMatch"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TournamentMatch`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TournamentMatch

**Namespace:** TaleWorlds.CampaignSystem.TournamentGames
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TournamentMatch`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/TournamentGames/TournamentMatch.cs`

## Overview

`TournamentMatch` lives in `TaleWorlds.CampaignSystem.TournamentGames` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.TournamentGames` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Teams` | `public IEnumerable<TournamentTeam> Teams { get; }` |
| `Participants` | `public IEnumerable<TournamentParticipant> Participants { get; }` |
| `State` | `public TournamentMatch.MatchState State { get; }` |
| `Winners` | `public IEnumerable<TournamentParticipant> Winners { get; }` |
| `IsReady` | `public bool IsReady { get; }` |

## Key Methods

### End
`public void End()`

**Purpose:** Handles logic related to `end`.

### Start
`public void Start()`

**Purpose:** Handles logic related to `start`.

### GetParticipant
`public TournamentParticipant GetParticipant(int uniqueSeed)`

**Purpose:** Gets the current value of `participant`.

### IsParticipantRequired
`public bool IsParticipantRequired()`

**Purpose:** Handles logic related to `is participant required`.

### AddParticipant
`public void AddParticipant(TournamentParticipant participant, bool firstTime)`

**Purpose:** Adds `participant` to the current collection or state.

### IsPlayerParticipating
`public bool IsPlayerParticipating()`

**Purpose:** Handles logic related to `is player participating`.

### IsPlayerWinner
`public bool IsPlayerWinner()`

**Purpose:** Handles logic related to `is player winner`.

## Usage Example

```csharp
var value = new TournamentMatch();
value.End();
```

## See Also

- [Complete Class Catalog](../catalog)