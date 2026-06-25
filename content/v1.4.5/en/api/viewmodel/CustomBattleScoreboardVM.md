---
title: "CustomBattleScoreboardVM"
description: "Auto-generated class reference for CustomBattleScoreboardVM."
---
# CustomBattleScoreboardVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleScoreboardVM`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard/CustomBattleScoreboardVM.cs`

## Overview

`CustomBattleScoreboardVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CustomBattleScoreboardVM
`public class CustomBattleScoreboardVM(BattleScoreContext scoreboardContext)`

**Purpose:** Executes the CustomBattleScoreboardVM logic.

```csharp
// Obtain an instance of CustomBattleScoreboardVM from the subsystem API first
CustomBattleScoreboardVM customBattleScoreboardVM = ...;
var result = customBattleScoreboardVM.CustomBattleScoreboardVM(scoreboardContext);
```

### Initialize
`public override void Initialize(IMissionScreen missionScreen, Mission mission, Action releaseSimulationSources, Action<bool> onToggle)`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of CustomBattleScoreboardVM from the subsystem API first
CustomBattleScoreboardVM customBattleScoreboardVM = ...;
customBattleScoreboardVM.Initialize(missionScreen, mission, releaseSimulationSources, onToggle);
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of CustomBattleScoreboardVM from the subsystem API first
CustomBattleScoreboardVM customBattleScoreboardVM = ...;
customBattleScoreboardVM.RefreshValues();
```

### ExecuteFastForwardAction
`public override void ExecuteFastForwardAction()`

**Purpose:** Runs the operation or workflow associated with fast forward action.

```csharp
// Obtain an instance of CustomBattleScoreboardVM from the subsystem API first
CustomBattleScoreboardVM customBattleScoreboardVM = ...;
customBattleScoreboardVM.ExecuteFastForwardAction();
```

### ExecuteQuitAction
`public override void ExecuteQuitAction()`

**Purpose:** Runs the operation or workflow associated with quit action.

```csharp
// Obtain an instance of CustomBattleScoreboardVM from the subsystem API first
CustomBattleScoreboardVM customBattleScoreboardVM = ...;
customBattleScoreboardVM.ExecuteQuitAction();
```

### OnBattleOver
`public void OnBattleOver()`

**Purpose:** Invoked when the battle over event is raised.

```csharp
// Obtain an instance of CustomBattleScoreboardVM from the subsystem API first
CustomBattleScoreboardVM customBattleScoreboardVM = ...;
customBattleScoreboardVM.OnBattleOver();
```

### OnExitBattle
`public void OnExitBattle()`

**Purpose:** Invoked when the exit battle event is raised.

```csharp
// Obtain an instance of CustomBattleScoreboardVM from the subsystem API first
CustomBattleScoreboardVM customBattleScoreboardVM = ...;
customBattleScoreboardVM.OnExitBattle();
```

### TroopNumberChanged
`public void TroopNumberChanged(BattleSideEnum side, IBattleCombatant battleCombatant, BasicCharacterObject character, int number = 0, int numberDead = 0, int numberWounded = 0, int numberRouted = 0, int numberKilled = 0, int numberReadyToUpgrade = 0)`

**Purpose:** Executes the TroopNumberChanged logic.

```csharp
// Obtain an instance of CustomBattleScoreboardVM from the subsystem API first
CustomBattleScoreboardVM customBattleScoreboardVM = ...;
customBattleScoreboardVM.TroopNumberChanged(side, battleCombatant, character, 0, 0, 0, 0, 0, 0);
```

### HeroSkillIncreased
`public void HeroSkillIncreased(BattleSideEnum side, IBattleCombatant battleCombatant, BasicCharacterObject heroCharacter, SkillObject upgradedSkill)`

**Purpose:** Executes the HeroSkillIncreased logic.

```csharp
// Obtain an instance of CustomBattleScoreboardVM from the subsystem API first
CustomBattleScoreboardVM customBattleScoreboardVM = ...;
customBattleScoreboardVM.HeroSkillIncreased(side, battleCombatant, heroCharacter, upgradedSkill);
```

### BattleResultsReady
`public void BattleResultsReady()`

**Purpose:** Executes the BattleResultsReady logic.

```csharp
// Obtain an instance of CustomBattleScoreboardVM from the subsystem API first
CustomBattleScoreboardVM customBattleScoreboardVM = ...;
customBattleScoreboardVM.BattleResultsReady();
```

### TroopSideChanged
`public void TroopSideChanged(BattleSideEnum prevSide, BattleSideEnum newSide, IBattleCombatant battleCombatant, BasicCharacterObject character)`

**Purpose:** Executes the TroopSideChanged logic.

```csharp
// Obtain an instance of CustomBattleScoreboardVM from the subsystem API first
CustomBattleScoreboardVM customBattleScoreboardVM = ...;
customBattleScoreboardVM.TroopSideChanged(prevSide, newSide, battleCombatant, character);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CustomBattleScoreboardVM customBattleScoreboardVM = ...;
customBattleScoreboardVM.CustomBattleScoreboardVM(scoreboardContext);
```

## See Also

- [Area Index](../)