<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CheckPoint`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CheckPoint

**Namespace:** SandBox.Tournaments.MissionLogics
**Module:** SandBox.Tournaments
**Type:** `public class CheckPoint`
**Area:** campaign-ext

## Overview

`CheckPoint` lives in `SandBox.Tournaments.MissionLogics`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.Tournaments.MissionLogics` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CheckPoints` | `public List<TownHorseRaceMissionController.CheckPoint> CheckPoints { get; }` |
| `Name` | `public string Name { get; }` |

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### StartMatch
`public void StartMatch(TournamentMatch match, bool isLastRound)`

**Purpose:** Handles logic related to `start match`.

### SkipMatch
`public void SkipMatch(TournamentMatch match)`

**Purpose:** Handles logic related to `skip match`.

### IsMatchEnded
`public bool IsMatchEnded()`

**Purpose:** Handles logic related to `is match ended`.

### OnMatchEnded
`public void OnMatchEnded()`

**Purpose:** Called when the `match ended` event is raised.

### GetBestTargetPosition
`public Vec3 GetBestTargetPosition()`

**Purpose:** Gets the current value of `best target position`.

### AddToCheckList
`public void AddToCheckList(Agent agent)`

**Purpose:** Adds `to check list` to the current collection or state.

### RemoveFromCheckList
`public void RemoveFromCheckList(Agent agent)`

**Purpose:** Removes `from check list` from the current collection or state.

## Usage Example

```csharp
// First obtain a CheckPoint instance from game state, then call one of its public methods
var value = new CheckPoint();
value.AfterStart();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
