---
title: "SPScoreboardSideVM"
description: "Auto-generated class reference for SPScoreboardSideVM."
---
# SPScoreboardSideVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SPScoreboardSideVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard/SPScoreboardSideVM.cs`

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

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of SPScoreboardSideVM from the subsystem API first
SPScoreboardSideVM sPScoreboardSideVM = ...;
sPScoreboardSideVM.RefreshValues();
```

### UpdateScores
`public void UpdateScores(IBattleCombatant battleCombatant, bool isPlayerParty, BasicCharacterObject character, int numberRemaining, int numberDead, int numberWounded, int numberRouted, int numberKilled, int numberReadyToUpgrade)`

**Purpose:** Recalculates and stores the latest representation of `scores`.

```csharp
// Obtain an instance of SPScoreboardSideVM from the subsystem API first
SPScoreboardSideVM sPScoreboardSideVM = ...;
sPScoreboardSideVM.UpdateScores(battleCombatant, false, character, 0, 0, 0, 0, 0, 0);
```

### UpdateHeroSkills
`public void UpdateHeroSkills(IBattleCombatant battleCombatant, bool isPlayerParty, BasicCharacterObject heroCharacter, SkillObject upgradedSkill)`

**Purpose:** Recalculates and stores the latest representation of `hero skills`.

```csharp
// Obtain an instance of SPScoreboardSideVM from the subsystem API first
SPScoreboardSideVM sPScoreboardSideVM = ...;
sPScoreboardSideVM.UpdateHeroSkills(battleCombatant, false, heroCharacter, upgradedSkill);
```

### GetPartyAddIfNotExists
`public SPScoreboardPartyVM GetPartyAddIfNotExists(IBattleCombatant battleCombatant, bool isPlayerParty)`

**Purpose:** Reads and returns the `party add if not exists` value held by the current object.

```csharp
// Obtain an instance of SPScoreboardSideVM from the subsystem API first
SPScoreboardSideVM sPScoreboardSideVM = ...;
var result = sPScoreboardSideVM.GetPartyAddIfNotExists(battleCombatant, false);
```

### GetParty
`public SPScoreboardPartyVM GetParty(IBattleCombatant battleCombatant)`

**Purpose:** Reads and returns the `party` value held by the current object.

```csharp
// Obtain an instance of SPScoreboardSideVM from the subsystem API first
SPScoreboardSideVM sPScoreboardSideVM = ...;
var result = sPScoreboardSideVM.GetParty(battleCombatant);
```

### RemoveTroop
`public SPScoreboardStatsVM RemoveTroop(IBattleCombatant battleCombatant, BasicCharacterObject troop)`

**Purpose:** Removes `troop` from the current collection or state.

```csharp
// Obtain an instance of SPScoreboardSideVM from the subsystem API first
SPScoreboardSideVM sPScoreboardSideVM = ...;
var result = sPScoreboardSideVM.RemoveTroop(battleCombatant, troop);
```

### AddTroop
`public void AddTroop(IBattleCombatant battleCombatant, BasicCharacterObject currentTroop, SPScoreboardStatsVM scoreToBringOver)`

**Purpose:** Adds `troop` to the current collection or state.

```csharp
// Obtain an instance of SPScoreboardSideVM from the subsystem API first
SPScoreboardSideVM sPScoreboardSideVM = ...;
sPScoreboardSideVM.AddTroop(battleCombatant, currentTroop, scoreToBringOver);
```

### GetShipAddIfNotExists
`public SPScoreboardShipVM GetShipAddIfNotExists(IShipOrigin ship, string shipType, IBattleCombatant owner, TeamSideEnum teamSideEnum)`

**Purpose:** Reads and returns the `ship add if not exists` value held by the current object.

```csharp
// Obtain an instance of SPScoreboardSideVM from the subsystem API first
SPScoreboardSideVM sPScoreboardSideVM = ...;
var result = sPScoreboardSideVM.GetShipAddIfNotExists(ship, "example", owner, teamSideEnum);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SPScoreboardSideVM sPScoreboardSideVM = ...;
sPScoreboardSideVM.RefreshValues();
```

## See Also

- [Area Index](../)