<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FormationPocket`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FormationPocket

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FormationPocket`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/FormationPocket.cs`

## Overview

`FormationPocket` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PriorityFunction` | `public Func<Agent, int> PriorityFunction { get; }` |
| `MaxValue` | `public int MaxValue { get; }` |
| `TroopCount` | `public int TroopCount { get; }` |
| `Index` | `public int Index { get; }` |
| `AddedTroopCount` | `public int AddedTroopCount { get; }` |
| `ScoreToSeek` | `public int ScoreToSeek { get; }` |
| `BestScoreSoFar` | `public int BestScoreSoFar { get; }` |

## Key Methods

### AddTroop
`public void AddTroop()`

**Purpose:** Adds `troop` to the current collection or state.

### IsFormationPocketFilled
`public bool IsFormationPocketFilled()`

**Purpose:** Handles logic related to `is formation pocket filled`.

### UpdateScoreToSeek
`public void UpdateScoreToSeek()`

**Purpose:** Updates the state or data of `score to seek`.

### SetBestScoreSoFar
`public void SetBestScoreSoFar(int bestScoreSoFar)`

**Purpose:** Sets the value or state of `best score so far`.

## Usage Example

```csharp
var value = new FormationPocket();
value.AddTroop();
```

## See Also

- [Complete Class Catalog](../catalog)