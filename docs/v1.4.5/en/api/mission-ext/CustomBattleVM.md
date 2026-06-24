<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CustomBattleVM

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/CustomBattleVM.cs`

## Overview

`CustomBattleVM` lives in `TaleWorlds.MountAndBlade.CustomBattle` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.CustomBattle` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TroopTypeSelectionPopUp` | `public TroopTypeSelectionPopUpVM TroopTypeSelectionPopUp { get; set; }` |
| `IsAttackerCustomMachineSelectionEnabled` | `public bool IsAttackerCustomMachineSelectionEnabled { get; set; }` |
| `IsDefenderCustomMachineSelectionEnabled` | `public bool IsDefenderCustomMachineSelectionEnabled { get; set; }` |
| `RandomizeButtonText` | `public string RandomizeButtonText { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `BackButtonText` | `public string BackButtonText { get; set; }` |
| `StartButtonText` | `public string StartButtonText { get; set; }` |
| `SwitchButtonText` | `public string SwitchButtonText { get; set; }` |
| `EnemySide` | `public CustomBattleSideVM EnemySide { get; set; }` |
| `PlayerSide` | `public CustomBattleSideVM PlayerSide { get; set; }` |
| `GameTypeSelectionGroup` | `public GameTypeSelectionGroupVM GameTypeSelectionGroup { get; set; }` |
| `MapSelectionGroup` | `public MapSelectionGroupVM MapSelectionGroup { get; set; }` |
| `AttackerMeleeMachines` | `public MBBindingList<CustomBattleSiegeMachineVM> AttackerMeleeMachines { get; set; }` |
| `AttackerRangedMachines` | `public MBBindingList<CustomBattleSiegeMachineVM> AttackerRangedMachines { get; set; }` |
| `DefenderMachines` | `public MBBindingList<CustomBattleSiegeMachineVM> DefenderMachines { get; set; }` |
| `CanSwitchMode` | `public bool CanSwitchMode { get; set; }` |
| `SwitchHint` | `public HintViewModel SwitchHint { get; set; }` |
| `StartInputKey` | `public InputKeyItemVM StartInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey { get; set; }` |
| `RandomizeInputKey` | `public InputKeyItemVM RandomizeInputKey { get; set; }` |

## Key Methods

### SetActiveState
`public void SetActiveState(bool isActive)`

**Purpose:** Sets the value or state of `active state`.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteBack
`public void ExecuteBack()`

**Purpose:** Executes the `back` operation or workflow.

### ExecuteStart
`public void ExecuteStart()`

**Purpose:** Executes the `start` operation or workflow.

### ExecuteRandomize
`public void ExecuteRandomize()`

**Purpose:** Executes the `randomize` operation or workflow.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### ExecuteSwitchToNextCustomBattle
`public void ExecuteSwitchToNextCustomBattle()`

**Purpose:** Executes the `switch to next custom battle` operation or workflow.

### SetStartInputKey
`public void SetStartInputKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `start input key`.

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `cancel input key`.

### SetResetInputKey
`public void SetResetInputKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `reset input key`.

### SetRandomizeInputKey
`public void SetRandomizeInputKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `randomize input key`.

## Usage Example

```csharp
var value = new CustomBattleVM();
value.SetActiveState(false);
```

## See Also

- [Complete Class Catalog](../catalog)