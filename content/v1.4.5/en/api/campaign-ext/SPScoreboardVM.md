---
title: "SPScoreboardVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SPScoreboardVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SPScoreboardVM

**Namespace:** SandBox.ViewModelCollection
**Module:** SandBox.ViewModelCollection
**Type:** `public class SPScoreboardVM : ScoreboardBaseVM, IBattleObserver`
**Base:** `ScoreboardBaseVM`
**Area:** campaign-ext

## Overview

`SPScoreboardVM` lives in `SandBox.ViewModelCollection`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `BattleResults` | `public override MBBindingList<BattleResultVM> BattleResults { get; set; }` |

## Key Methods

### CreateSimulation
`public static SPScoreboardVM CreateSimulation(BattleSimulation simulation)`

**Purpose:** Creates a new `simulation` instance or object.

### CreateMission
`public static SPScoreboardVM CreateMission(Mission mission)`

**Purpose:** Creates a new `mission` instance or object.

### CreateCustom
`public static SPScoreboardVM CreateCustom(BattleScoreContext battleScoreContext, BattleSimulation simulation = null)`

**Purpose:** Creates a new `custom` instance or object.

### Initialize
`public override void Initialize(IMissionScreen missionScreen, Mission mission, Action releaseSimulationSources, Action<bool> onToggle)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### ExecutePlayAction
`public override void ExecutePlayAction()`

**Purpose:** Executes the `play action` operation or workflow.

### ExecuteFastForwardAction
`public override void ExecuteFastForwardAction()`

**Purpose:** Executes the `fast forward action` operation or workflow.

### ExecutePauseSimulationAction
`public override void ExecutePauseSimulationAction()`

**Purpose:** Executes the `pause simulation action` operation or workflow.

### ExecuteEndSimulationAction
`public override void ExecuteEndSimulationAction()`

**Purpose:** Executes the `end simulation action` operation or workflow.

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
// Prepare the required context, then call the static entry point directly
SPScoreboardVM.CreateSimulation(simulation);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
