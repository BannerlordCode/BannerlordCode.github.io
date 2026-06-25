---
title: "SPScoreboardPartyVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SPScoreboardPartyVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SPScoreboardPartyVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SPScoreboardPartyVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard/SPScoreboardPartyVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### UpdateScores
`public void UpdateScores(BasicCharacterObject character, int numberRemaining, int numberDead, int numberWounded, int numberRouted, int numberKilled, int numberReadyToUpgrade)`

**Purpose:** Updates the state or data of `scores`.

### UpdateHeroSkills
`public void UpdateHeroSkills(BasicCharacterObject heroCharacter, SkillObject upgradedSkill)`

**Purpose:** Updates the state or data of `hero skills`.

### GetUnitAddIfNotExists
`public SPScoreboardUnitVM GetUnitAddIfNotExists(BasicCharacterObject character)`

**Purpose:** Gets the current value of `unit add if not exists`.

### GetUnit
`public SPScoreboardUnitVM GetUnit(BasicCharacterObject character)`

**Purpose:** Gets the current value of `unit`.

## Usage Example

```csharp
var value = new SPScoreboardPartyVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)