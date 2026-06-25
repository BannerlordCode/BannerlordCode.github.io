---
title: "TournamentBehavior"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TournamentBehavior`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TournamentBehavior

**Namespace:** SandBox.Tournaments.MissionLogics
**Module:** SandBox.Tournaments
**Type:** `public class TournamentBehavior : MissionLogic, ICameraModeLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Tournaments/MissionLogics/TournamentBehavior.cs`

## Overview

`TournamentBehavior` lives in `SandBox.Tournaments.MissionLogics` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Tournaments.MissionLogics` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TournamentGame` | `public TournamentGame TournamentGame { get; }` |
| `Rounds` | `public TournamentRound Rounds { get; }` |
| `IsPlayerEliminated` | `public bool IsPlayerEliminated { get; }` |
| `CurrentRoundIndex` | `public int CurrentRoundIndex { get; }` |
| `LastMatch` | `public TournamentMatch LastMatch { get; }` |
| `CurrentRound` | `public TournamentRound CurrentRound { get; }` |
| `NextRound` | `public TournamentRound NextRound { get; }` |
| `CurrentMatch` | `public TournamentMatch CurrentMatch { get; }` |
| `Winner` | `public TournamentParticipant Winner { get; }` |
| `IsPlayerParticipating` | `public bool IsPlayerParticipating { get; }` |
| `Settlement` | `public Settlement Settlement { get; }` |
| `BetOdd` | `public float BetOdd { get; }` |
| `MaximumBetInstance` | `public int MaximumBetInstance { get; }` |
| `BettedDenars` | `public int BettedDenars { get; }` |
| `OverallExpectedDenars` | `public int OverallExpectedDenars { get; }` |
| `PlayerDenars` | `public int PlayerDenars { get; }` |

## Key Methods

### GetMissionCameraLockMode
`public SpectatorCameraTypes GetMissionCameraLockMode(bool lockedToMainPlayer)`

**Purpose:** Gets the current value of `mission camera lock mode`.

### GetAllPossibleParticipants
`public MBList<CharacterObject> GetAllPossibleParticipants()`

**Purpose:** Gets the current value of `all possible participants`.

### DeleteTournamentSetsExcept
`public static void DeleteTournamentSetsExcept(GameEntity selectedSetEntity)`

**Purpose:** Handles logic related to `delete tournament sets except`.

### DeleteAllTournamentSets
`public static void DeleteAllTournamentSets()`

**Purpose:** Handles logic related to `delete all tournament sets`.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### StartMatch
`public void StartMatch()`

**Purpose:** Handles logic related to `start match`.

### SkipMatch
`public void SkipMatch(bool isLeave = false)`

**Purpose:** Handles logic related to `skip match`.

### EndTournamentViaLeave
`public void EndTournamentViaLeave()`

**Purpose:** Handles logic related to `end tournament via leave`.

### OnEndMissionRequest
`public override InquiryData OnEndMissionRequest(out bool canPlayerLeave)`

**Purpose:** Called when the `end mission request` event is raised.

### PlaceABet
`public void PlaceABet(int bet)`

**Purpose:** Handles logic related to `place a bet`.

### GetExpectedDenarsForBet
`public int GetExpectedDenarsForBet(int bet)`

**Purpose:** Gets the current value of `expected denars for bet`.

### GetMaximumBet
`public int GetMaximumBet()`

**Purpose:** Gets the current value of `maximum bet`.

## Usage Example

```csharp
var value = new TournamentBehavior();
value.GetMissionCameraLockMode(false);
```

## See Also

- [Complete Class Catalog](../catalog)