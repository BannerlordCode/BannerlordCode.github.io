<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleScoreboardVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CustomBattleScoreboardVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleScoreboardVM`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard/CustomBattleScoreboardVM.cs`

## Overview

`CustomBattleScoreboardVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CustomBattleScoreboardVM
`public class CustomBattleScoreboardVM(BattleScoreContext scoreboardContext)`

**Purpose:** Handles logic related to `custom battle scoreboard v m`.

### Initialize
`public override void Initialize(IMissionScreen missionScreen, Mission mission, Action releaseSimulationSources, Action<bool> onToggle)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteFastForwardAction
`public override void ExecuteFastForwardAction()`

**Purpose:** Executes the `fast forward action` operation or workflow.

### ExecuteQuitAction
`public override void ExecuteQuitAction()`

**Purpose:** Executes the `quit action` operation or workflow.

### OnBattleOver
`public void OnBattleOver()`

**Purpose:** Called when the `battle over` event is raised.

### OnExitBattle
`public void OnExitBattle()`

**Purpose:** Called when the `exit battle` event is raised.

### TroopNumberChanged
`public void TroopNumberChanged(BattleSideEnum side, IBattleCombatant battleCombatant, BasicCharacterObject character, int number = 0, int numberDead = 0, int numberWounded = 0, int numberRouted = 0, int numberKilled = 0, int numberReadyToUpgrade = 0)`

**Purpose:** Handles logic related to `troop number changed`.

### HeroSkillIncreased
`public void HeroSkillIncreased(BattleSideEnum side, IBattleCombatant battleCombatant, BasicCharacterObject heroCharacter, SkillObject upgradedSkill)`

**Purpose:** Handles logic related to `hero skill increased`.

### BattleResultsReady
`public void BattleResultsReady()`

**Purpose:** Handles logic related to `battle results ready`.

### TroopSideChanged
`public void TroopSideChanged(BattleSideEnum prevSide, BattleSideEnum newSide, IBattleCombatant battleCombatant, BasicCharacterObject character)`

**Purpose:** Handles logic related to `troop side changed`.

## Usage Example

```csharp
var value = new CustomBattleScoreboardVM();
value.CustomBattleScoreboardVM(scoreboardContext);
```

## See Also

- [Complete Class Catalog](../catalog)