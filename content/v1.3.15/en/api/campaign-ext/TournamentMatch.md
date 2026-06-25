---
title: "TournamentMatch"
description: "Auto-generated class reference for TournamentMatch."
---
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

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TournamentMatch from the subsystem API first
TournamentMatch tournamentMatch = ...;
tournamentMatch.End();
```

### Start
`public void Start()`

**Purpose:** Starts the current object's flow or state machine.

```csharp
// Obtain an instance of TournamentMatch from the subsystem API first
TournamentMatch tournamentMatch = ...;
tournamentMatch.Start();
```

### GetParticipant
`public TournamentParticipant GetParticipant(int uniqueSeed)`

**Purpose:** Reads and returns the `participant` value held by the current object.

```csharp
// Obtain an instance of TournamentMatch from the subsystem API first
TournamentMatch tournamentMatch = ...;
var result = tournamentMatch.GetParticipant(0);
```

### IsParticipantRequired
`public bool IsParticipantRequired()`

**Purpose:** Determines whether the current object is in the `participant required` state or condition.

```csharp
// Obtain an instance of TournamentMatch from the subsystem API first
TournamentMatch tournamentMatch = ...;
var result = tournamentMatch.IsParticipantRequired();
```

### AddParticipant
`public void AddParticipant(TournamentParticipant participant, bool firstTime)`

**Purpose:** Adds `participant` to the current collection or state.

```csharp
// Obtain an instance of TournamentMatch from the subsystem API first
TournamentMatch tournamentMatch = ...;
tournamentMatch.AddParticipant(participant, false);
```

### IsPlayerParticipating
`public bool IsPlayerParticipating()`

**Purpose:** Determines whether the current object is in the `player participating` state or condition.

```csharp
// Obtain an instance of TournamentMatch from the subsystem API first
TournamentMatch tournamentMatch = ...;
var result = tournamentMatch.IsPlayerParticipating();
```

### IsPlayerWinner
`public bool IsPlayerWinner()`

**Purpose:** Determines whether the current object is in the `player winner` state or condition.

```csharp
// Obtain an instance of TournamentMatch from the subsystem API first
TournamentMatch tournamentMatch = ...;
var result = tournamentMatch.IsPlayerWinner();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TournamentMatch tournamentMatch = ...;
tournamentMatch.End();
```

## See Also

- [Area Index](../)