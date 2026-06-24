<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SPScoreboardSideVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SPScoreboardSideVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SPScoreboardSideVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard/SPScoreboardSideVM.cs`

## Overview

`SPScoreboardSideVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentPower` | `public float CurrentPower { get; }` |
| `InitialPower` | `public float InitialPower { get; }` |
| `BannerVisual` | `public BannerImageIdentifierVM BannerVisual { get; set; }` |
| `BannerVisualSmall` | `public BannerImageIdentifierVM BannerVisualSmall { get; set; }` |
| `Score` | `public SPScoreboardStatsVM Score { get; set; }` |
| `Parties` | `public MBBindingList<SPScoreboardPartyVM> Parties { get; set; }` |
| `Ships` | `public MBBindingList<SPScoreboardShipVM> Ships { get; set; }` |
| `SortController` | `public SPScoreboardSortControllerVM SortController { get; set; }` |
| `Morale` | `public float Morale { get; set; }` |
| `MoraleHint` | `public BasicTooltipViewModel MoraleHint { get; set; }` |
| `IsPlayerSide` | `public bool IsPlayerSide { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### UpdateScores
`public void UpdateScores(IBattleCombatant battleCombatant, bool isPlayerParty, BasicCharacterObject character, int numberRemaining, int numberDead, int numberWounded, int numberRouted, int numberKilled, int numberReadyToUpgrade)`

**Purpose:** Updates the state or data of `scores`.

### UpdateHeroSkills
`public void UpdateHeroSkills(IBattleCombatant battleCombatant, bool isPlayerParty, BasicCharacterObject heroCharacter, SkillObject upgradedSkill)`

**Purpose:** Updates the state or data of `hero skills`.

### GetPartyAddIfNotExists
`public SPScoreboardPartyVM GetPartyAddIfNotExists(IBattleCombatant battleCombatant, bool isPlayerParty)`

**Purpose:** Gets the current value of `party add if not exists`.

### GetParty
`public SPScoreboardPartyVM GetParty(IBattleCombatant battleCombatant)`

**Purpose:** Gets the current value of `party`.

### RemoveTroop
`public SPScoreboardStatsVM RemoveTroop(IBattleCombatant battleCombatant, BasicCharacterObject troop)`

**Purpose:** Removes `troop` from the current collection or state.

### AddTroop
`public void AddTroop(IBattleCombatant battleCombatant, BasicCharacterObject currentTroop, SPScoreboardStatsVM scoreToBringOver)`

**Purpose:** Adds `troop` to the current collection or state.

### GetShipAddIfNotExists
`public SPScoreboardShipVM GetShipAddIfNotExists(IShipOrigin ship, string shipType, IBattleCombatant owner, TeamSideEnum teamSideEnum)`

**Purpose:** Gets the current value of `ship add if not exists`.

## Usage Example

```csharp
var value = new SPScoreboardSideVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)