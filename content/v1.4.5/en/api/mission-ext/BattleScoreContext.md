---
title: "BattleScoreContext"
description: "Auto-generated class reference for BattleScoreContext."
---
# BattleScoreContext

**Namespace:** TaleWorlds.MountAndBlade.Missions.BattleScore
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BattleScoreContext`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Missions.BattleScore/BattleScoreContext.cs`

## Overview

`BattleScoreContext` lives in `TaleWorlds.MountAndBlade.Missions.BattleScore` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Missions.BattleScore` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsPowerComparisonRelevant` | `public abstract bool IsPowerComparisonRelevant { get; }` |

## Key Methods

### GetAttackerBanner
`public abstract Banner GetAttackerBanner()`

**Purpose:** **Purpose:** Reads and returns the attacker banner value held by the this instance.

```csharp
// Obtain an instance of BattleScoreContext from the subsystem API first
BattleScoreContext battleScoreContext = ...;
var result = battleScoreContext.GetAttackerBanner();
```

### GetDefenderBanner
`public abstract Banner GetDefenderBanner()`

**Purpose:** **Purpose:** Reads and returns the defender banner value held by the this instance.

```csharp
// Obtain an instance of BattleScoreContext from the subsystem API first
BattleScoreContext battleScoreContext = ...;
var result = battleScoreContext.GetDefenderBanner();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
BattleScoreContext instance = ...;
```

## See Also

- [Area Index](../)