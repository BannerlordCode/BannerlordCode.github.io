---
title: "TournamentBehavior"
description: "Auto-generated class reference for TournamentBehavior."
---
# TournamentBehavior

**Namespace:** SandBox.Tournaments.MissionLogics
**Module:** SandBox.Tournaments
**Type:** `public class TournamentBehavior : MissionLogic, ICameraModeLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Tournaments.MissionLogics/TournamentBehavior.cs`

## Overview

`TournamentBehavior` lives in `SandBox.Tournaments.MissionLogics` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Tournaments.MissionLogics` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Rounds` | `public TournamentRound Rounds { get; }` |
| `IsPlayerEliminated` | `public bool IsPlayerEliminated { get; }` |
| `CurrentRoundIndex` | `public int CurrentRoundIndex { get; }` |
| `LastMatch` | `public TournamentMatch LastMatch { get; }` |
| `NextRound` | `public TournamentRound NextRound { get; }` |
| `Winner` | `public TournamentParticipant Winner { get; }` |
| `IsPlayerParticipating` | `public bool IsPlayerParticipating { get; }` |
| `Settlement` | `public Settlement Settlement { get; }` |
| `BetOdd` | `public float BetOdd { get; }` |
| `BettedDenars` | `public int BettedDenars { get; }` |
| `OverallExpectedDenars` | `public int OverallExpectedDenars { get; }` |

## Key Methods

### GetMissionCameraLockMode
`public SpectatorCameraTypes GetMissionCameraLockMode(bool lockedToMainPlayer)`

**Purpose:** Reads and returns the `mission camera lock mode` value held by the current object.

```csharp
// Obtain an instance of TournamentBehavior from the subsystem API first
TournamentBehavior tournamentBehavior = ...;
var result = tournamentBehavior.GetMissionCameraLockMode(false);
```

### GetAllPossibleParticipants
`public MBList<CharacterObject> GetAllPossibleParticipants()`

**Purpose:** Reads and returns the `all possible participants` value held by the current object.

```csharp
// Obtain an instance of TournamentBehavior from the subsystem API first
TournamentBehavior tournamentBehavior = ...;
var result = tournamentBehavior.GetAllPossibleParticipants();
```

### DeleteTournamentSetsExcept
`public static void DeleteTournamentSetsExcept(GameEntity selectedSetEntity)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
TournamentBehavior.DeleteTournamentSetsExcept(selectedSetEntity);
```

### DeleteAllTournamentSets
`public static void DeleteAllTournamentSets()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
TournamentBehavior.DeleteAllTournamentSets();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TournamentBehavior from the subsystem API first
TournamentBehavior tournamentBehavior = ...;
tournamentBehavior.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the `mission tick` event is raised.

```csharp
// Obtain an instance of TournamentBehavior from the subsystem API first
TournamentBehavior tournamentBehavior = ...;
tournamentBehavior.OnMissionTick(0);
```

### StartMatch
`public void StartMatch()`

**Purpose:** Starts the `match` flow or state machine.

```csharp
// Obtain an instance of TournamentBehavior from the subsystem API first
TournamentBehavior tournamentBehavior = ...;
tournamentBehavior.StartMatch();
```

### SkipMatch
`public void SkipMatch(bool isLeave = false)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TournamentBehavior from the subsystem API first
TournamentBehavior tournamentBehavior = ...;
tournamentBehavior.SkipMatch(false);
```

### EndTournamentViaLeave
`public void EndTournamentViaLeave()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TournamentBehavior from the subsystem API first
TournamentBehavior tournamentBehavior = ...;
tournamentBehavior.EndTournamentViaLeave();
```

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)`

**Purpose:** Invoked when the `end mission request` event is raised.

```csharp
// Obtain an instance of TournamentBehavior from the subsystem API first
TournamentBehavior tournamentBehavior = ...;
var result = tournamentBehavior.OnEndMissionRequest(canPlayerLeave);
```

### PlaceABet
`public void PlaceABet(int bet)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of TournamentBehavior from the subsystem API first
TournamentBehavior tournamentBehavior = ...;
tournamentBehavior.PlaceABet(0);
```

### GetExpectedDenarsForBet
`public int GetExpectedDenarsForBet(int bet)`

**Purpose:** Reads and returns the `expected denars for bet` value held by the current object.

```csharp
// Obtain an instance of TournamentBehavior from the subsystem API first
TournamentBehavior tournamentBehavior = ...;
var result = tournamentBehavior.GetExpectedDenarsForBet(0);
```

### GetMaximumBet
`public int GetMaximumBet()`

**Purpose:** Reads and returns the `maximum bet` value held by the current object.

```csharp
// Obtain an instance of TournamentBehavior from the subsystem API first
TournamentBehavior tournamentBehavior = ...;
var result = tournamentBehavior.GetMaximumBet();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TournamentBehavior tournamentBehavior = ...;
tournamentBehavior.GetMissionCameraLockMode(false);
```

## See Also

- [Area Index](../)