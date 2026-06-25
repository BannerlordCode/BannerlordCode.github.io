---
title: "TroopTypeSelectionPopUpVM"
description: "Auto-generated class reference for TroopTypeSelectionPopUpVM."
---
# TroopTypeSelectionPopUpVM

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TroopTypeSelectionPopUpVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle.CustomBattle/TroopTypeSelectionPopUpVM.cs`

## Overview

`TroopTypeSelectionPopUpVM` lives in `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey { get; set; }` |
| `Items` | `public MBBindingList<CustomBattleTroopTypeVM> Items { get; set; }` |
| `Title` | `public string Title { get; set; }` |
| `DoneLbl` | `public string DoneLbl { get; set; }` |
| `CancelLbl` | `public string CancelLbl { get; set; }` |
| `SelectAllLbl` | `public string SelectAllLbl { get; set; }` |
| `BackToDefaultLbl` | `public string BackToDefaultLbl { get; set; }` |
| `IsOpen` | `public bool IsOpen { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of TroopTypeSelectionPopUpVM from the subsystem API first
TroopTypeSelectionPopUpVM troopTypeSelectionPopUpVM = ...;
troopTypeSelectionPopUpVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of TroopTypeSelectionPopUpVM from the subsystem API first
TroopTypeSelectionPopUpVM troopTypeSelectionPopUpVM = ...;
troopTypeSelectionPopUpVM.OnFinalize();
```

### OpenPopUp
`public void OpenPopUp(string title, MBBindingList<CustomBattleTroopTypeVM> troops)`

**Purpose:** **Purpose:** Opens the resource or UI associated with pop up.

```csharp
// Obtain an instance of TroopTypeSelectionPopUpVM from the subsystem API first
TroopTypeSelectionPopUpVM troopTypeSelectionPopUpVM = ...;
troopTypeSelectionPopUpVM.OpenPopUp("example", troops);
```

### OnItemSelectionToggled
`public void OnItemSelectionToggled(CustomBattleTroopTypeVM item)`

**Purpose:** **Purpose:** Invoked when the item selection toggled event is raised.

```csharp
// Obtain an instance of TroopTypeSelectionPopUpVM from the subsystem API first
TroopTypeSelectionPopUpVM troopTypeSelectionPopUpVM = ...;
troopTypeSelectionPopUpVM.OnItemSelectionToggled(item);
```

### ExecuteSelectAll
`public void ExecuteSelectAll()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with select all.

```csharp
// Obtain an instance of TroopTypeSelectionPopUpVM from the subsystem API first
TroopTypeSelectionPopUpVM troopTypeSelectionPopUpVM = ...;
troopTypeSelectionPopUpVM.ExecuteSelectAll();
```

### ExecuteBackToDefault
`public void ExecuteBackToDefault()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with back to default.

```csharp
// Obtain an instance of TroopTypeSelectionPopUpVM from the subsystem API first
TroopTypeSelectionPopUpVM troopTypeSelectionPopUpVM = ...;
troopTypeSelectionPopUpVM.ExecuteBackToDefault();
```

### ExecuteCancel
`public void ExecuteCancel()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with cancel.

```csharp
// Obtain an instance of TroopTypeSelectionPopUpVM from the subsystem API first
TroopTypeSelectionPopUpVM troopTypeSelectionPopUpVM = ...;
troopTypeSelectionPopUpVM.ExecuteCancel();
```

### ExecuteDone
`public void ExecuteDone()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with done.

```csharp
// Obtain an instance of TroopTypeSelectionPopUpVM from the subsystem API first
TroopTypeSelectionPopUpVM troopTypeSelectionPopUpVM = ...;
troopTypeSelectionPopUpVM.ExecuteDone();
```

### ExecuteReset
`public void ExecuteReset()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with reset.

```csharp
// Obtain an instance of TroopTypeSelectionPopUpVM from the subsystem API first
TroopTypeSelectionPopUpVM troopTypeSelectionPopUpVM = ...;
troopTypeSelectionPopUpVM.ExecuteReset();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotkey)`

**Purpose:** **Purpose:** Assigns a new value to cancel input key and updates the object's internal state.

```csharp
// Obtain an instance of TroopTypeSelectionPopUpVM from the subsystem API first
TroopTypeSelectionPopUpVM troopTypeSelectionPopUpVM = ...;
troopTypeSelectionPopUpVM.SetCancelInputKey(hotkey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**Purpose:** **Purpose:** Assigns a new value to done input key and updates the object's internal state.

```csharp
// Obtain an instance of TroopTypeSelectionPopUpVM from the subsystem API first
TroopTypeSelectionPopUpVM troopTypeSelectionPopUpVM = ...;
troopTypeSelectionPopUpVM.SetDoneInputKey(hotkey);
```

### SetResetInputKey
`public void SetResetInputKey(HotKey hotkey)`

**Purpose:** **Purpose:** Assigns a new value to reset input key and updates the object's internal state.

```csharp
// Obtain an instance of TroopTypeSelectionPopUpVM from the subsystem API first
TroopTypeSelectionPopUpVM troopTypeSelectionPopUpVM = ...;
troopTypeSelectionPopUpVM.SetResetInputKey(hotkey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TroopTypeSelectionPopUpVM troopTypeSelectionPopUpVM = ...;
troopTypeSelectionPopUpVM.RefreshValues();
```

## See Also

- [Area Index](../)