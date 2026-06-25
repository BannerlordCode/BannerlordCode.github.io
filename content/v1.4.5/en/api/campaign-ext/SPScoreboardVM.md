---
title: "SPScoreboardVM"
description: "Auto-generated class reference for SPScoreboardVM."
---
# SPScoreboardVM

**Namespace:** SandBox.ViewModelCollection
**Module:** SandBox.ViewModelCollection
**Type:** `public class SPScoreboardVM : ScoreboardBaseVM, IBattleObserver`
**Base:** `ScoreboardBaseVM`
**File:** `Modules.SandBox/SandBox.ViewModelCollection/SandBox.ViewModelCollection/SPScoreboardVM.cs`

## Overview

`SPScoreboardVM` lives in `SandBox.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `BattleResults` | `public override MBBindingList<BattleResultVM> BattleResults { get; set; }` |

## Key Methods

### CreateSimulation
`public static SPScoreboardVM CreateSimulation(BattleSimulation simulation)`

**Purpose:** Constructs a new simulation entity and returns it to the caller.

```csharp
// Static call; no instance required
SPScoreboardVM.CreateSimulation(simulation);
```

### CreateMission
`public static SPScoreboardVM CreateMission(Mission mission)`

**Purpose:** Constructs a new mission entity and returns it to the caller.

```csharp
// Static call; no instance required
SPScoreboardVM.CreateMission(mission);
```

### CreateCustom
`public static SPScoreboardVM CreateCustom(BattleScoreContext battleScoreContext, BattleSimulation simulation = null)`

**Purpose:** Constructs a new custom entity and returns it to the caller.

```csharp
// Static call; no instance required
SPScoreboardVM.CreateCustom(battleScoreContext, null);
```

### Initialize
`public override void Initialize(IMissionScreen missionScreen, Mission mission, Action releaseSimulationSources, Action<bool> onToggle)`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of SPScoreboardVM from the subsystem API first
SPScoreboardVM sPScoreboardVM = ...;
sPScoreboardVM.Initialize(missionScreen, mission, releaseSimulationSources, onToggle);
```

### ExecutePlayAction
`public override void ExecutePlayAction()`

**Purpose:** Runs the operation or workflow associated with play action.

```csharp
// Obtain an instance of SPScoreboardVM from the subsystem API first
SPScoreboardVM sPScoreboardVM = ...;
sPScoreboardVM.ExecutePlayAction();
```

### ExecuteFastForwardAction
`public override void ExecuteFastForwardAction()`

**Purpose:** Runs the operation or workflow associated with fast forward action.

```csharp
// Obtain an instance of SPScoreboardVM from the subsystem API first
SPScoreboardVM sPScoreboardVM = ...;
sPScoreboardVM.ExecuteFastForwardAction();
```

### ExecutePauseSimulationAction
`public override void ExecutePauseSimulationAction()`

**Purpose:** Runs the operation or workflow associated with pause simulation action.

```csharp
// Obtain an instance of SPScoreboardVM from the subsystem API first
SPScoreboardVM sPScoreboardVM = ...;
sPScoreboardVM.ExecutePauseSimulationAction();
```

### ExecuteEndSimulationAction
`public override void ExecuteEndSimulationAction()`

**Purpose:** Runs the operation or workflow associated with end simulation action.

```csharp
// Obtain an instance of SPScoreboardVM from the subsystem API first
SPScoreboardVM sPScoreboardVM = ...;
sPScoreboardVM.ExecuteEndSimulationAction();
```

### ExecuteQuitAction
`public override void ExecuteQuitAction()`

**Purpose:** Runs the operation or workflow associated with quit action.

```csharp
// Obtain an instance of SPScoreboardVM from the subsystem API first
SPScoreboardVM sPScoreboardVM = ...;
sPScoreboardVM.ExecuteQuitAction();
```

### OnBattleOver
`public void OnBattleOver()`

**Purpose:** Invoked when the battle over event is raised.

```csharp
// Obtain an instance of SPScoreboardVM from the subsystem API first
SPScoreboardVM sPScoreboardVM = ...;
sPScoreboardVM.OnBattleOver();
```

### OnExitBattle
`public void OnExitBattle()`

**Purpose:** Invoked when the exit battle event is raised.

```csharp
// Obtain an instance of SPScoreboardVM from the subsystem API first
SPScoreboardVM sPScoreboardVM = ...;
sPScoreboardVM.OnExitBattle();
```

### TroopNumberChanged
`public void TroopNumberChanged(BattleSideEnum side, IBattleCombatant battleCombatant, BasicCharacterObject character, int number = 0, int numberDead = 0, int numberWounded = 0, int numberRouted = 0, int numberKilled = 0, int numberReadyToUpgrade = 0)`

**Purpose:** Executes the TroopNumberChanged logic.

```csharp
// Obtain an instance of SPScoreboardVM from the subsystem API first
SPScoreboardVM sPScoreboardVM = ...;
sPScoreboardVM.TroopNumberChanged(side, battleCombatant, character, 0, 0, 0, 0, 0, 0);
```

### HeroSkillIncreased
`public void HeroSkillIncreased(BattleSideEnum side, IBattleCombatant battleCombatant, BasicCharacterObject heroCharacter, SkillObject upgradedSkill)`

**Purpose:** Executes the HeroSkillIncreased logic.

```csharp
// Obtain an instance of SPScoreboardVM from the subsystem API first
SPScoreboardVM sPScoreboardVM = ...;
sPScoreboardVM.HeroSkillIncreased(side, battleCombatant, heroCharacter, upgradedSkill);
```

### BattleResultsReady
`public void BattleResultsReady()`

**Purpose:** Executes the BattleResultsReady logic.

```csharp
// Obtain an instance of SPScoreboardVM from the subsystem API first
SPScoreboardVM sPScoreboardVM = ...;
sPScoreboardVM.BattleResultsReady();
```

### TroopSideChanged
`public void TroopSideChanged(BattleSideEnum prevSide, BattleSideEnum newSide, IBattleCombatant battleCombatant, BasicCharacterObject character)`

**Purpose:** Executes the TroopSideChanged logic.

```csharp
// Obtain an instance of SPScoreboardVM from the subsystem API first
SPScoreboardVM sPScoreboardVM = ...;
sPScoreboardVM.TroopSideChanged(prevSide, newSide, battleCombatant, character);
```

## Usage Example

```csharp
SPScoreboardVM.CreateSimulation(simulation);
```

## See Also

- [Area Index](../)