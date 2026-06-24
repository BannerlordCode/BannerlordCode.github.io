<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionMainAgentControllerEquipDropVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionMainAgentControllerEquipDropVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMainAgentControllerEquipDropVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD/MissionMainAgentControllerEquipDropVM.cs`

## Overview

`MissionMainAgentControllerEquipDropVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `EquippedWeapons` | `public MBBindingList<ControllerEquippedItemVM> EquippedWeapons { get; set; }` |
| `EquippedExtraWeapon` | `public ControllerEquippedItemVM EquippedExtraWeapon { get; set; }` |
| `HoldToDropText` | `public string HoldToDropText { get; set; }` |
| `PressToEquipText` | `public string PressToEquipText { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `HaveExtraWeapon` | `public bool HaveExtraWeapon { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### InitializeMainAgentPropterties
`public void InitializeMainAgentPropterties()`

**Purpose:** Initializes the state, resources, or bindings for `main agent propterties`.

### OnToggle
`public void OnToggle(bool isEnabled)`

**Purpose:** Called when the `toggle` event is raised.

### OnCancelHoldController
`public void OnCancelHoldController()`

**Purpose:** Called when the `cancel hold controller` event is raised.

### OnWeaponDroppedAtIndex
`public void OnWeaponDroppedAtIndex(int droppedWeaponIndex)`

**Purpose:** Called when the `weapon dropped at index` event is raised.

### OnWeaponEquippedAtIndex
`public void OnWeaponEquippedAtIndex(int equippedWeaponIndex)`

**Purpose:** Called when the `weapon equipped at index` event is raised.

### SetDropProgressForIndex
`public void SetDropProgressForIndex(EquipmentIndex eqIndex, float progress)`

**Purpose:** Sets the value or state of `drop progress for index`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### OnGamepadActiveChanged
`public void OnGamepadActiveChanged(bool isActive)`

**Purpose:** Called when the `gamepad active changed` event is raised.

## Usage Example

```csharp
var value = new MissionMainAgentControllerEquipDropVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)