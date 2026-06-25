---
title: "ScoreboardBaseVM"
description: "Auto-generated class reference for ScoreboardBaseVM."
---
# ScoreboardBaseVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class ScoreboardBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/ScoreboardBaseVM.cs`

## Overview

`ScoreboardBaseVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MissionTimeStr` | `public string MissionTimeStr { get; set; }` |
| `IsPowerComparerEnabled` | `public bool IsPowerComparerEnabled { get; set; }` |
| `QuitText` | `public string QuitText { get; set; }` |
| `ShowScoreboardText` | `public string ShowScoreboardText { get; set; }` |
| `FastForwardText` | `public string FastForwardText { get; set; }` |
| `MoraleText` | `public string MoraleText { get; set; }` |
| `Attackers` | `public SPScoreboardSideVM Attackers { get; set; }` |
| `Defenders` | `public SPScoreboardSideVM Defenders { get; set; }` |
| `NeutralTroops` | `public SPScoreboardSideVM NeutralTroops { get; set; }` |
| `KillHint` | `public HintViewModel KillHint { get; set; }` |
| `DeadHint` | `public HintViewModel DeadHint { get; set; }` |
| `UpgradeHint` | `public HintViewModel UpgradeHint { get; set; }` |
| `WoundedHint` | `public HintViewModel WoundedHint { get; set; }` |
| `RoutedHint` | `public HintViewModel RoutedHint { get; set; }` |
| `RemainingHint` | `public HintViewModel RemainingHint { get; set; }` |
| `BattleResultIndex` | `public int BattleResultIndex { get; set; }` |
| `BattleResult` | `public string BattleResult { get; set; }` |
| `IsMouseEnabled` | `public bool IsMouseEnabled { get; set; }` |
| `IsOver` | `public bool IsOver { get; set; }` |
| `SimulationResult` | `public string SimulationResult { get; set; }` |
| `IsMainCharacterDead` | `public bool IsMainCharacterDead { get; set; }` |
| `ShowScoreboard` | `public bool ShowScoreboard { get; set; }` |
| `IsSimulation` | `public bool IsSimulation { get; set; }` |
| `IsNavalBattle` | `public bool IsNavalBattle { get; set; }` |
| `IsFastForwarding` | `public bool IsFastForwarding { get; set; }` |
| `IsPaused` | `public bool IsPaused { get; set; }` |
| `PowerComparer` | `public PowerLevelComparer PowerComparer { get; set; }` |
| `ShowMouseKey` | `public InputKeyItemVM ShowMouseKey { get; set; }` |
| `ShowScoreboardKey` | `public InputKeyItemVM ShowScoreboardKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `FastForwardKey` | `public InputKeyItemVM FastForwardKey { get; set; }` |
| `PauseInputKey` | `public InputKeyItemVM PauseInputKey { get; set; }` |
| `BattleResults` | `public virtual MBBindingList<BattleResultVM> BattleResults { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of ScoreboardBaseVM from the subsystem API first
ScoreboardBaseVM scoreboardBaseVM = ...;
scoreboardBaseVM.RefreshValues();
```

### OnMainHeroDeath
`public void OnMainHeroDeath()`

**Purpose:** **Purpose:** Invoked when the main hero death event is raised.

```csharp
// Obtain an instance of ScoreboardBaseVM from the subsystem API first
ScoreboardBaseVM scoreboardBaseVM = ...;
scoreboardBaseVM.OnMainHeroDeath();
```

### OnTakenControlOfAnotherAgent
`public void OnTakenControlOfAnotherAgent()`

**Purpose:** **Purpose:** Invoked when the taken control of another agent event is raised.

```csharp
// Obtain an instance of ScoreboardBaseVM from the subsystem API first
ScoreboardBaseVM scoreboardBaseVM = ...;
scoreboardBaseVM.OnTakenControlOfAnotherAgent();
```

### Initialize
`public virtual void Initialize(IMissionScreen missionScreen, Mission mission, Action releaseSimulationSources, Action<bool> onToggle)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of ScoreboardBaseVM from the subsystem API first
ScoreboardBaseVM scoreboardBaseVM = ...;
scoreboardBaseVM.Initialize(missionScreen, mission, releaseSimulationSources, onToggle);
```

### OnDeploymentFinished
`public virtual void OnDeploymentFinished()`

**Purpose:** **Purpose:** Invoked when the deployment finished event is raised.

```csharp
// Obtain an instance of ScoreboardBaseVM from the subsystem API first
ScoreboardBaseVM scoreboardBaseVM = ...;
scoreboardBaseVM.OnDeploymentFinished();
```

### Tick
`public void Tick(float dt)`

**Purpose:** **Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of ScoreboardBaseVM from the subsystem API first
ScoreboardBaseVM scoreboardBaseVM = ...;
scoreboardBaseVM.Tick(0);
```

### SetMouseState
`public void SetMouseState(bool visible)`

**Purpose:** **Purpose:** Assigns a new value to mouse state and updates the object's internal state.

```csharp
// Obtain an instance of ScoreboardBaseVM from the subsystem API first
ScoreboardBaseVM scoreboardBaseVM = ...;
scoreboardBaseVM.SetMouseState(false);
```

### GetFormattedTimeTextFromSeconds
`public static string GetFormattedTimeTextFromSeconds(int seconds)`

**Purpose:** **Purpose:** Reads and returns the formatted time text from seconds value held by the this instance.

```csharp
// Static call; no instance required
ScoreboardBaseVM.GetFormattedTimeTextFromSeconds(0);
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of ScoreboardBaseVM from the subsystem API first
ScoreboardBaseVM scoreboardBaseVM = ...;
scoreboardBaseVM.OnFinalize();
```

### ExecuteShowScoreboardAction
`public virtual void ExecuteShowScoreboardAction()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with show scoreboard action.

```csharp
// Obtain an instance of ScoreboardBaseVM from the subsystem API first
ScoreboardBaseVM scoreboardBaseVM = ...;
scoreboardBaseVM.ExecuteShowScoreboardAction();
```

### ExecutePlayAction
`public virtual void ExecutePlayAction()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with play action.

```csharp
// Obtain an instance of ScoreboardBaseVM from the subsystem API first
ScoreboardBaseVM scoreboardBaseVM = ...;
scoreboardBaseVM.ExecutePlayAction();
```

### ExecuteFastForwardAction
`public virtual void ExecuteFastForwardAction()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with fast forward action.

```csharp
// Obtain an instance of ScoreboardBaseVM from the subsystem API first
ScoreboardBaseVM scoreboardBaseVM = ...;
scoreboardBaseVM.ExecuteFastForwardAction();
```

### ExecutePauseSimulationAction
`public virtual void ExecutePauseSimulationAction()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with pause simulation action.

```csharp
// Obtain an instance of ScoreboardBaseVM from the subsystem API first
ScoreboardBaseVM scoreboardBaseVM = ...;
scoreboardBaseVM.ExecutePauseSimulationAction();
```

### ExecuteEndSimulationAction
`public virtual void ExecuteEndSimulationAction()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with end simulation action.

```csharp
// Obtain an instance of ScoreboardBaseVM from the subsystem API first
ScoreboardBaseVM scoreboardBaseVM = ...;
scoreboardBaseVM.ExecuteEndSimulationAction();
```

### ExecuteQuitAction
`public virtual void ExecuteQuitAction()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with quit action.

```csharp
// Obtain an instance of ScoreboardBaseVM from the subsystem API first
ScoreboardBaseVM scoreboardBaseVM = ...;
scoreboardBaseVM.ExecuteQuitAction();
```

### SetShortcuts
`public virtual void SetShortcuts(ScoreboardHotkeys shortcuts)`

**Purpose:** **Purpose:** Assigns a new value to shortcuts and updates the object's internal state.

```csharp
// Obtain an instance of ScoreboardBaseVM from the subsystem API first
ScoreboardBaseVM scoreboardBaseVM = ...;
scoreboardBaseVM.SetShortcuts(shortcuts);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
ScoreboardBaseVM instance = ...;
```

## See Also

- [Area Index](../)