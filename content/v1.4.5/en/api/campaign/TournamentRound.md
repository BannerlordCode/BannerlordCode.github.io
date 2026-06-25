---
title: "TournamentRound"
description: "Auto-generated class reference for TournamentRound."
---
# TournamentRound

**Namespace:** TaleWorlds.CampaignSystem.TournamentGames
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TournamentRound`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.TournamentGames/TournamentRound.cs`

## Overview

`TournamentRound` lives in `TaleWorlds.CampaignSystem.TournamentGames` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.TournamentGames` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Matches` | `public TournamentMatch Matches { get; }` |
| `CurrentMatchIndex` | `public int CurrentMatchIndex { get; }` |
| `CurrentMatch` | `public TournamentMatch CurrentMatch { get; }` |

## Key Methods

### OnMatchEnded
`public void OnMatchEnded()`

**Purpose:** Invoked when the `match ended` event is raised.

```csharp
// Obtain an instance of TournamentRound from the subsystem API first
TournamentRound tournamentRound = ...;
tournamentRound.OnMatchEnded();
```

### EndMatch
`public void EndMatch()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TournamentRound from the subsystem API first
TournamentRound tournamentRound = ...;
tournamentRound.EndMatch();
```

### AddParticipant
`public void AddParticipant(TournamentParticipant participant, bool firstTime = false)`

**Purpose:** Adds `participant` to the current collection or state.

```csharp
// Obtain an instance of TournamentRound from the subsystem API first
TournamentRound tournamentRound = ...;
tournamentRound.AddParticipant(participant, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TournamentRound tournamentRound = ...;
tournamentRound.OnMatchEnded();
```

## See Also

- [Area Index](../)