---
title: "BattleScoreContext"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleScoreContext`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BattleScoreContext

**Namespace:** TaleWorlds.MountAndBlade.Missions.BattleScore
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class BattleScoreContext`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade.Missions.BattleScore/BattleScoreContext.cs`

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

**Purpose:** Gets the current value of `attacker banner`.

### GetDefenderBanner
`public abstract Banner GetDefenderBanner()`

**Purpose:** Gets the current value of `defender banner`.

## Usage Example

```csharp
var implementation = new CustomBattleScoreContext();
```

## See Also

- [Complete Class Catalog](../catalog)