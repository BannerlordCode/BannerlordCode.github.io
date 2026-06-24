<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TroopTypeSelectionPopUpVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TroopTypeSelectionPopUpVM

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TroopTypeSelectionPopUpVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle.CustomBattle/TroopTypeSelectionPopUpVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### OpenPopUp
`public void OpenPopUp(string title, MBBindingList<CustomBattleTroopTypeVM> troops)`

**Purpose:** Handles logic related to `open pop up`.

### OnItemSelectionToggled
`public void OnItemSelectionToggled(CustomBattleTroopTypeVM item)`

**Purpose:** Called when the `item selection toggled` event is raised.

### ExecuteSelectAll
`public void ExecuteSelectAll()`

**Purpose:** Executes the `select all` operation or workflow.

### ExecuteBackToDefault
`public void ExecuteBackToDefault()`

**Purpose:** Executes the `back to default` operation or workflow.

### ExecuteCancel
`public void ExecuteCancel()`

**Purpose:** Executes the `cancel` operation or workflow.

### ExecuteDone
`public void ExecuteDone()`

**Purpose:** Executes the `done` operation or workflow.

### ExecuteReset
`public void ExecuteReset()`

**Purpose:** Executes the `reset` operation or workflow.

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `cancel input key`.

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `done input key`.

### SetResetInputKey
`public void SetResetInputKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `reset input key`.

## Usage Example

```csharp
var value = new TroopTypeSelectionPopUpVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)