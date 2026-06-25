---
title: "SPScoreboardUnitVM"
description: "Auto-generated class reference for SPScoreboardUnitVM."
---
# SPScoreboardUnitVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SPScoreboardUnitVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardUnitVM.cs`

## Overview

`SPScoreboardUnitVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsGainedAnySkills` | `public bool IsGainedAnySkills { get; set; }` |
| `GainedSkills` | `public MBBindingList<SPScoreboardSkillItemVM> GainedSkills { get; set; }` |
| `IsHero` | `public bool IsHero { get; set; }` |
| `Score` | `public SPScoreboardStatsVM Score { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of SPScoreboardUnitVM from the subsystem API first
SPScoreboardUnitVM sPScoreboardUnitVM = ...;
sPScoreboardUnitVM.RefreshValues();
```

### UpdateScores
`public void UpdateScores(int numberRemaining, int numberDead, int numberWounded, int numberRouted, int numberKilled, int numberReadyToUpgrade)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of scores.

```csharp
// Obtain an instance of SPScoreboardUnitVM from the subsystem API first
SPScoreboardUnitVM sPScoreboardUnitVM = ...;
sPScoreboardUnitVM.UpdateScores(0, 0, 0, 0, 0, 0);
```

### UpdateHeroSkills
`public void UpdateHeroSkills(SkillObject gainedSkill, int currentSkill)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of hero skills.

```csharp
// Obtain an instance of SPScoreboardUnitVM from the subsystem API first
SPScoreboardUnitVM sPScoreboardUnitVM = ...;
sPScoreboardUnitVM.UpdateHeroSkills(gainedSkill, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SPScoreboardUnitVM sPScoreboardUnitVM = ...;
sPScoreboardUnitVM.RefreshValues();
```

## See Also

- [Area Index](../)