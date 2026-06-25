---
title: "MissionMainAgentEquipmentControllerVM"
description: "Auto-generated class reference for MissionMainAgentEquipmentControllerVM."
---
# MissionMainAgentEquipmentControllerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMainAgentEquipmentControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentEquipmentControllerVM.cs`

## Overview

`MissionMainAgentEquipmentControllerVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsDropControllerActive` | `public bool IsDropControllerActive { get; set; }` |
| `IsEquipControllerActive` | `public bool IsEquipControllerActive { get; set; }` |
| `DropText` | `public string DropText { get; set; }` |
| `EquipText` | `public string EquipText { get; set; }` |
| `FocusedItemText` | `public string FocusedItemText { get; set; }` |
| `SelectedItemText` | `public string SelectedItemText { get; set; }` |
| `DropActions` | `public MBBindingList<EquipmentActionItemVM> DropActions { get; set; }` |
| `EquipActions` | `public MBBindingList<EquipmentActionItemVM> EquipActions { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MissionMainAgentEquipmentControllerVM from the subsystem API first
MissionMainAgentEquipmentControllerVM missionMainAgentEquipmentControllerVM = ...;
missionMainAgentEquipmentControllerVM.RefreshValues();
```

### OnDropControllerToggle
`public void OnDropControllerToggle(bool isActive)`

**Purpose:** **Purpose:** Invoked when the drop controller toggle event is raised.

```csharp
// Obtain an instance of MissionMainAgentEquipmentControllerVM from the subsystem API first
MissionMainAgentEquipmentControllerVM missionMainAgentEquipmentControllerVM = ...;
missionMainAgentEquipmentControllerVM.OnDropControllerToggle(false);
```

### SetCurrentFocusedWeaponEntity
`public void SetCurrentFocusedWeaponEntity(SpawnedItemEntity weaponEntity)`

**Purpose:** **Purpose:** Assigns a new value to current focused weapon entity and updates the object's internal state.

```csharp
// Obtain an instance of MissionMainAgentEquipmentControllerVM from the subsystem API first
MissionMainAgentEquipmentControllerVM missionMainAgentEquipmentControllerVM = ...;
missionMainAgentEquipmentControllerVM.SetCurrentFocusedWeaponEntity(weaponEntity);
```

### OnEquipControllerToggle
`public void OnEquipControllerToggle(bool isActive)`

**Purpose:** **Purpose:** Invoked when the equip controller toggle event is raised.

```csharp
// Obtain an instance of MissionMainAgentEquipmentControllerVM from the subsystem API first
MissionMainAgentEquipmentControllerVM missionMainAgentEquipmentControllerVM = ...;
missionMainAgentEquipmentControllerVM.OnEquipControllerToggle(false);
```

### OnCancelEquipController
`public void OnCancelEquipController()`

**Purpose:** **Purpose:** Invoked when the cancel equip controller event is raised.

```csharp
// Obtain an instance of MissionMainAgentEquipmentControllerVM from the subsystem API first
MissionMainAgentEquipmentControllerVM missionMainAgentEquipmentControllerVM = ...;
missionMainAgentEquipmentControllerVM.OnCancelEquipController();
```

### OnCancelDropController
`public void OnCancelDropController()`

**Purpose:** **Purpose:** Invoked when the cancel drop controller event is raised.

```csharp
// Obtain an instance of MissionMainAgentEquipmentControllerVM from the subsystem API first
MissionMainAgentEquipmentControllerVM missionMainAgentEquipmentControllerVM = ...;
missionMainAgentEquipmentControllerVM.OnCancelDropController();
```

### GetItemTypeAsString
`public static string GetItemTypeAsString(ItemObject item)`

**Purpose:** **Purpose:** Reads and returns the item type as string value held by the this instance.

```csharp
// Static call; no instance required
MissionMainAgentEquipmentControllerVM.GetItemTypeAsString(item);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionMainAgentEquipmentControllerVM missionMainAgentEquipmentControllerVM = ...;
missionMainAgentEquipmentControllerVM.RefreshValues();
```

## See Also

- [Area Index](../)