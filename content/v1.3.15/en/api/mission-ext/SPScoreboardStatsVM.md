---
title: "SPScoreboardStatsVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SPScoreboardStatsVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SPScoreboardStatsVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SPScoreboardStatsVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardStatsVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### UpdateScores
`public void UpdateScores(int numberRemaining, int numberDead, int numberWounded, int numberRouted, int numberKilled, int numberReadyToUpgrade)`

**Purpose:** Updates the state or data of `scores`.

### IsAnyStatRelevant
`public bool IsAnyStatRelevant()`

**Purpose:** Handles logic related to `is any stat relevant`.

### GetScoreForOneAliveMember
`public SPScoreboardStatsVM GetScoreForOneAliveMember()`

**Purpose:** Gets the current value of `score for one alive member`.

## Usage Example

```csharp
var value = new SPScoreboardStatsVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)