---
title: "SPScoreboardPartyVM"
description: "Auto-generated class reference for SPScoreboardPartyVM."
---
# SPScoreboardPartyVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SPScoreboardPartyVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard/SPScoreboardPartyVM.cs`

## Overview

`SPScoreboardPartyVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `BattleCombatant` | `public IBattleCombatant BattleCombatant { get; }` |
| `CurrentPower` | `public float CurrentPower { get; }` |
| `InitialPower` | `public float InitialPower { get; }` |
| `Score` | `public SPScoreboardStatsVM Score { get; set; }` |
| `Members` | `public MBBindingList<SPScoreboardUnitVM> Members { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of SPScoreboardPartyVM from the subsystem API first
SPScoreboardPartyVM sPScoreboardPartyVM = ...;
sPScoreboardPartyVM.RefreshValues();
```

### UpdateScores
`public void UpdateScores(BasicCharacterObject character, int numberRemaining, int numberDead, int numberWounded, int numberRouted, int numberKilled, int numberReadyToUpgrade)`

**Purpose:** Recalculates and stores the latest representation of scores.

```csharp
// Obtain an instance of SPScoreboardPartyVM from the subsystem API first
SPScoreboardPartyVM sPScoreboardPartyVM = ...;
sPScoreboardPartyVM.UpdateScores(character, 0, 0, 0, 0, 0, 0);
```

### UpdateHeroSkills
`public void UpdateHeroSkills(BasicCharacterObject heroCharacter, SkillObject upgradedSkill)`

**Purpose:** Recalculates and stores the latest representation of hero skills.

```csharp
// Obtain an instance of SPScoreboardPartyVM from the subsystem API first
SPScoreboardPartyVM sPScoreboardPartyVM = ...;
sPScoreboardPartyVM.UpdateHeroSkills(heroCharacter, upgradedSkill);
```

### GetUnitAddIfNotExists
`public SPScoreboardUnitVM GetUnitAddIfNotExists(BasicCharacterObject character)`

**Purpose:** Reads and returns the unit add if not exists value held by the this instance.

```csharp
// Obtain an instance of SPScoreboardPartyVM from the subsystem API first
SPScoreboardPartyVM sPScoreboardPartyVM = ...;
var result = sPScoreboardPartyVM.GetUnitAddIfNotExists(character);
```

### GetUnit
`public SPScoreboardUnitVM GetUnit(BasicCharacterObject character)`

**Purpose:** Reads and returns the unit value held by the this instance.

```csharp
// Obtain an instance of SPScoreboardPartyVM from the subsystem API first
SPScoreboardPartyVM sPScoreboardPartyVM = ...;
var result = sPScoreboardPartyVM.GetUnit(character);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SPScoreboardPartyVM sPScoreboardPartyVM = ...;
sPScoreboardPartyVM.RefreshValues();
```

## See Also

- [Area Index](../)