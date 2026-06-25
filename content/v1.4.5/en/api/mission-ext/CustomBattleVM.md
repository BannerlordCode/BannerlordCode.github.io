---
title: "CustomBattleVM"
description: "Auto-generated class reference for CustomBattleVM."
---
# CustomBattleVM

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/CustomBattleVM.cs`

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

**Purpose:** Assigns a new value to `active state` and updates the object's internal state.

```csharp
// Obtain an instance of CustomBattleVM from the subsystem API first
CustomBattleVM customBattleVM = ...;
customBattleVM.SetActiveState(false);
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of CustomBattleVM from the subsystem API first
CustomBattleVM customBattleVM = ...;
customBattleVM.RefreshValues();
```

### ExecuteBack
`public void ExecuteBack()`

**Purpose:** Runs the operation or workflow associated with `back`.

```csharp
// Obtain an instance of CustomBattleVM from the subsystem API first
CustomBattleVM customBattleVM = ...;
customBattleVM.ExecuteBack();
```

### ExecuteStart
`public void ExecuteStart()`

**Purpose:** Runs the operation or workflow associated with `start`.

```csharp
// Obtain an instance of CustomBattleVM from the subsystem API first
CustomBattleVM customBattleVM = ...;
customBattleVM.ExecuteStart();
```

### ExecuteRandomize
`public void ExecuteRandomize()`

**Purpose:** Runs the operation or workflow associated with `randomize`.

```csharp
// Obtain an instance of CustomBattleVM from the subsystem API first
CustomBattleVM customBattleVM = ...;
customBattleVM.ExecuteRandomize();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of CustomBattleVM from the subsystem API first
CustomBattleVM customBattleVM = ...;
customBattleVM.OnFinalize();
```

### ExecuteSwitchToNextCustomBattle
`public void ExecuteSwitchToNextCustomBattle()`

**Purpose:** Runs the operation or workflow associated with `switch to next custom battle`.

```csharp
// Obtain an instance of CustomBattleVM from the subsystem API first
CustomBattleVM customBattleVM = ...;
customBattleVM.ExecuteSwitchToNextCustomBattle();
```

### SetStartInputKey
`public void SetStartInputKey(HotKey hotkey)`

**Purpose:** Assigns a new value to `start input key` and updates the object's internal state.

```csharp
// Obtain an instance of CustomBattleVM from the subsystem API first
CustomBattleVM customBattleVM = ...;
customBattleVM.SetStartInputKey(hotkey);
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotkey)`

**Purpose:** Assigns a new value to `cancel input key` and updates the object's internal state.

```csharp
// Obtain an instance of CustomBattleVM from the subsystem API first
CustomBattleVM customBattleVM = ...;
customBattleVM.SetCancelInputKey(hotkey);
```

### SetResetInputKey
`public void SetResetInputKey(HotKey hotkey)`

**Purpose:** Assigns a new value to `reset input key` and updates the object's internal state.

```csharp
// Obtain an instance of CustomBattleVM from the subsystem API first
CustomBattleVM customBattleVM = ...;
customBattleVM.SetResetInputKey(hotkey);
```

### SetRandomizeInputKey
`public void SetRandomizeInputKey(HotKey hotkey)`

**Purpose:** Assigns a new value to `randomize input key` and updates the object's internal state.

```csharp
// Obtain an instance of CustomBattleVM from the subsystem API first
CustomBattleVM customBattleVM = ...;
customBattleVM.SetRandomizeInputKey(hotkey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CustomBattleVM customBattleVM = ...;
customBattleVM.SetActiveState(false);
```

## See Also

- [Area Index](../)