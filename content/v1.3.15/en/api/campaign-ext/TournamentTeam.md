---
title: "TournamentTeam"
description: "Auto-generated class reference for TournamentTeam."
---
# TournamentTeam

**Namespace:** TaleWorlds.CampaignSystem.TournamentGames
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TournamentTeam`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/TournamentGames/TournamentTeam.cs`

## Overview

`TournamentTeam` lives in `TaleWorlds.CampaignSystem.TournamentGames` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.TournamentGames` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TeamSize` | `public int TeamSize { get; }` |
| `TeamColor` | `public uint TeamColor { get; }` |
| `TeamBanner` | `public Banner TeamBanner { get; }` |
| `IsPlayerTeam` | `public bool IsPlayerTeam { get; }` |
| `Participants` | `public IEnumerable<TournamentParticipant> Participants { get; }` |
| `Score` | `public int Score { get; }` |

## Key Methods

### IsParticipantRequired
`public bool IsParticipantRequired()`

**Purpose:** Determines whether the current object is in the `participant required` state or condition.

```csharp
// Obtain an instance of TournamentTeam from the subsystem API first
TournamentTeam tournamentTeam = ...;
var result = tournamentTeam.IsParticipantRequired();
```

### AddParticipant
`public void AddParticipant(TournamentParticipant participant)`

**Purpose:** Adds `participant` to the current collection or state.

```csharp
// Obtain an instance of TournamentTeam from the subsystem API first
TournamentTeam tournamentTeam = ...;
tournamentTeam.AddParticipant(participant);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TournamentTeam tournamentTeam = ...;
tournamentTeam.IsParticipantRequired();
```

## See Also

- [Area Index](../)