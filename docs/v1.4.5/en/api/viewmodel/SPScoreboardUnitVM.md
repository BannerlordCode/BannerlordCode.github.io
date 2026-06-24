<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SPScoreboardUnitVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SPScoreboardUnitVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SPScoreboardUnitVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard/SPScoreboardUnitVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### UpdateScores
`public void UpdateScores(int numberRemaining, int numberDead, int numberWounded, int numberRouted, int numberKilled, int numberReadyToUpgrade)`

**Purpose:** Updates the state or data of `scores`.

### UpdateHeroSkills
`public void UpdateHeroSkills(SkillObject gainedSkill, int currentSkill)`

**Purpose:** Updates the state or data of `hero skills`.

## Usage Example

```csharp
var value = new SPScoreboardUnitVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)