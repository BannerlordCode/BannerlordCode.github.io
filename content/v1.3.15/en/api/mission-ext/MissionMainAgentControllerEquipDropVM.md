---
title: "MissionMainAgentControllerEquipDropVM"
description: "Auto-generated class reference for MissionMainAgentControllerEquipDropVM."
---
# MissionMainAgentControllerEquipDropVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMainAgentControllerEquipDropVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentControllerEquipDropVM.cs`

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

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of MissionMainAgentControllerEquipDropVM from the subsystem API first
MissionMainAgentControllerEquipDropVM missionMainAgentControllerEquipDropVM = ...;
missionMainAgentControllerEquipDropVM.RefreshValues();
```

### InitializeMainAgentPropterties
`public void InitializeMainAgentPropterties()`

**Purpose:** Prepares the resources, state, or bindings required by `main agent propterties`.

```csharp
// Obtain an instance of MissionMainAgentControllerEquipDropVM from the subsystem API first
MissionMainAgentControllerEquipDropVM missionMainAgentControllerEquipDropVM = ...;
missionMainAgentControllerEquipDropVM.InitializeMainAgentPropterties();
```

### OnToggle
`public void OnToggle(bool isEnabled)`

**Purpose:** Invoked when the `toggle` event is raised.

```csharp
// Obtain an instance of MissionMainAgentControllerEquipDropVM from the subsystem API first
MissionMainAgentControllerEquipDropVM missionMainAgentControllerEquipDropVM = ...;
missionMainAgentControllerEquipDropVM.OnToggle(false);
```

### OnCancelHoldController
`public void OnCancelHoldController()`

**Purpose:** Invoked when the `cancel hold controller` event is raised.

```csharp
// Obtain an instance of MissionMainAgentControllerEquipDropVM from the subsystem API first
MissionMainAgentControllerEquipDropVM missionMainAgentControllerEquipDropVM = ...;
missionMainAgentControllerEquipDropVM.OnCancelHoldController();
```

### OnWeaponDroppedAtIndex
`public void OnWeaponDroppedAtIndex(int droppedWeaponIndex)`

**Purpose:** Invoked when the `weapon dropped at index` event is raised.

```csharp
// Obtain an instance of MissionMainAgentControllerEquipDropVM from the subsystem API first
MissionMainAgentControllerEquipDropVM missionMainAgentControllerEquipDropVM = ...;
missionMainAgentControllerEquipDropVM.OnWeaponDroppedAtIndex(0);
```

### OnWeaponEquippedAtIndex
`public void OnWeaponEquippedAtIndex(int equippedWeaponIndex)`

**Purpose:** Invoked when the `weapon equipped at index` event is raised.

```csharp
// Obtain an instance of MissionMainAgentControllerEquipDropVM from the subsystem API first
MissionMainAgentControllerEquipDropVM missionMainAgentControllerEquipDropVM = ...;
missionMainAgentControllerEquipDropVM.OnWeaponEquippedAtIndex(0);
```

### SetDropProgressForIndex
`public void SetDropProgressForIndex(EquipmentIndex eqIndex, float progress)`

**Purpose:** Assigns a new value to `drop progress for index` and updates the object's internal state.

```csharp
// Obtain an instance of MissionMainAgentControllerEquipDropVM from the subsystem API first
MissionMainAgentControllerEquipDropVM missionMainAgentControllerEquipDropVM = ...;
missionMainAgentControllerEquipDropVM.SetDropProgressForIndex(eqIndex, 0);
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of MissionMainAgentControllerEquipDropVM from the subsystem API first
MissionMainAgentControllerEquipDropVM missionMainAgentControllerEquipDropVM = ...;
missionMainAgentControllerEquipDropVM.OnFinalize();
```

### OnGamepadActiveChanged
`public void OnGamepadActiveChanged(bool isActive)`

**Purpose:** Invoked when the `gamepad active changed` event is raised.

```csharp
// Obtain an instance of MissionMainAgentControllerEquipDropVM from the subsystem API first
MissionMainAgentControllerEquipDropVM missionMainAgentControllerEquipDropVM = ...;
missionMainAgentControllerEquipDropVM.OnGamepadActiveChanged(false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionMainAgentControllerEquipDropVM missionMainAgentControllerEquipDropVM = ...;
missionMainAgentControllerEquipDropVM.RefreshValues();
```

## See Also

- [Area Index](../)