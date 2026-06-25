---
title: "SPScoreboardStatsVM"
description: "Auto-generated class reference for SPScoreboardStatsVM."
---
# SPScoreboardStatsVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SPScoreboardStatsVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard/SPScoreboardStatsVM.cs`

## Overview

`SPScoreboardStatsVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NameText` | `public string NameText { get; set; }` |
| `IsMainHero` | `public bool IsMainHero { get; set; }` |
| `IsMainParty` | `public bool IsMainParty { get; set; }` |
| `Kill` | `public int Kill { get; set; }` |
| `Dead` | `public int Dead { get; set; }` |
| `Wounded` | `public int Wounded { get; set; }` |
| `Routed` | `public int Routed { get; set; }` |
| `Remaining` | `public int Remaining { get; set; }` |
| `ReadyToUpgrade` | `public int ReadyToUpgrade { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of SPScoreboardStatsVM from the subsystem API first
SPScoreboardStatsVM sPScoreboardStatsVM = ...;
sPScoreboardStatsVM.RefreshValues();
```

### UpdateScores
`public void UpdateScores(int numberRemaining, int numberDead, int numberWounded, int numberRouted, int numberKilled, int numberReadyToUpgrade)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of scores.

```csharp
// Obtain an instance of SPScoreboardStatsVM from the subsystem API first
SPScoreboardStatsVM sPScoreboardStatsVM = ...;
sPScoreboardStatsVM.UpdateScores(0, 0, 0, 0, 0, 0);
```

### IsAnyStatRelevant
`public bool IsAnyStatRelevant()`

**Purpose:** **Purpose:** Determines whether the this instance is in the any stat relevant state or condition.

```csharp
// Obtain an instance of SPScoreboardStatsVM from the subsystem API first
SPScoreboardStatsVM sPScoreboardStatsVM = ...;
var result = sPScoreboardStatsVM.IsAnyStatRelevant();
```

### GetScoreForOneAliveMember
`public SPScoreboardStatsVM GetScoreForOneAliveMember()`

**Purpose:** **Purpose:** Reads and returns the score for one alive member value held by the this instance.

```csharp
// Obtain an instance of SPScoreboardStatsVM from the subsystem API first
SPScoreboardStatsVM sPScoreboardStatsVM = ...;
var result = sPScoreboardStatsVM.GetScoreForOneAliveMember();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SPScoreboardStatsVM sPScoreboardStatsVM = ...;
sPScoreboardStatsVM.RefreshValues();
```

## See Also

- [Area Index](../)