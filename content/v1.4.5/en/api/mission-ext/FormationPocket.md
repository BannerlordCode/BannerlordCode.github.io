---
title: "FormationPocket"
description: "Auto-generated class reference for FormationPocket."
---
# FormationPocket

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FormationPocket`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/FormationPocket.cs`

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

**Purpose:** **Purpose:** Adds troop to the current collection or state.

```csharp
// Obtain an instance of FormationPocket from the subsystem API first
FormationPocket formationPocket = ...;
formationPocket.AddTroop();
```

### IsFormationPocketFilled
`public bool IsFormationPocketFilled()`

**Purpose:** **Purpose:** Determines whether the this instance is in the formation pocket filled state or condition.

```csharp
// Obtain an instance of FormationPocket from the subsystem API first
FormationPocket formationPocket = ...;
var result = formationPocket.IsFormationPocketFilled();
```

### UpdateScoreToSeek
`public void UpdateScoreToSeek()`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of score to seek.

```csharp
// Obtain an instance of FormationPocket from the subsystem API first
FormationPocket formationPocket = ...;
formationPocket.UpdateScoreToSeek();
```

### SetBestScoreSoFar
`public void SetBestScoreSoFar(int bestScoreSoFar)`

**Purpose:** **Purpose:** Assigns a new value to best score so far and updates the object's internal state.

```csharp
// Obtain an instance of FormationPocket from the subsystem API first
FormationPocket formationPocket = ...;
formationPocket.SetBestScoreSoFar(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
FormationPocket formationPocket = ...;
formationPocket.AddTroop();
```

## See Also

- [Area Index](../)