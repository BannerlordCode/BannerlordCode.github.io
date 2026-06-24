<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ScoreboardBaseVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Refreshes the display or cache of `values`.

### OnMainHeroDeath
`public void OnMainHeroDeath()`

**Purpose:** Called when the `main hero death` event is raised.

### OnTakenControlOfAnotherAgent
`public void OnTakenControlOfAnotherAgent()`

**Purpose:** Called when the `taken control of another agent` event is raised.

### Initialize
`public virtual void Initialize(IMissionScreen missionScreen, Mission mission, Action releaseSimulationSources, Action<bool> onToggle)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### OnDeploymentFinished
`public virtual void OnDeploymentFinished()`

**Purpose:** Called when the `deployment finished` event is raised.

### Tick
`public void Tick(float dt)`

**Purpose:** Handles logic related to `tick`.

### SetMouseState
`public void SetMouseState(bool visible)`

**Purpose:** Sets the value or state of `mouse state`.

### GetFormattedTimeTextFromSeconds
`public static string GetFormattedTimeTextFromSeconds(int seconds)`

**Purpose:** Gets the current value of `formatted time text from seconds`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### ExecuteShowScoreboardAction
`public virtual void ExecuteShowScoreboardAction()`

**Purpose:** Executes the `show scoreboard action` operation or workflow.

### ExecutePlayAction
`public virtual void ExecutePlayAction()`

**Purpose:** Executes the `play action` operation or workflow.

### ExecuteFastForwardAction
`public virtual void ExecuteFastForwardAction()`

**Purpose:** Executes the `fast forward action` operation or workflow.

### ExecutePauseSimulationAction
`public virtual void ExecutePauseSimulationAction()`

**Purpose:** Executes the `pause simulation action` operation or workflow.

### ExecuteEndSimulationAction
`public virtual void ExecuteEndSimulationAction()`

**Purpose:** Executes the `end simulation action` operation or workflow.

### ExecuteQuitAction
`public virtual void ExecuteQuitAction()`

**Purpose:** Executes the `quit action` operation or workflow.

### SetShortcuts
`public virtual void SetShortcuts(ScoreboardHotkeys shortcuts)`

**Purpose:** Sets the value or state of `shortcuts`.

## Usage Example

```csharp
var implementation = new CustomScoreboardBaseVM();
```

## See Also

- [Complete Class Catalog](../catalog)