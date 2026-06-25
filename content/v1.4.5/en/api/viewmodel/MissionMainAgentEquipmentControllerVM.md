---
title: "MissionMainAgentEquipmentControllerVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionMainAgentEquipmentControllerVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionMainAgentEquipmentControllerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionMainAgentEquipmentControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.HUD/MissionMainAgentEquipmentControllerVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### OnDropControllerToggle
`public void OnDropControllerToggle(bool isActive)`

**Purpose:** Called when the `drop controller toggle` event is raised.

### SetCurrentFocusedWeaponEntity
`public void SetCurrentFocusedWeaponEntity(SpawnedItemEntity weaponEntity)`

**Purpose:** Sets the value or state of `current focused weapon entity`.

### OnEquipControllerToggle
`public void OnEquipControllerToggle(bool isActive)`

**Purpose:** Called when the `equip controller toggle` event is raised.

### OnCancelEquipController
`public void OnCancelEquipController()`

**Purpose:** Called when the `cancel equip controller` event is raised.

### OnCancelDropController
`public void OnCancelDropController()`

**Purpose:** Called when the `cancel drop controller` event is raised.

### GetItemTypeAsString
`public static string GetItemTypeAsString(ItemObject item)`

**Purpose:** Gets the current value of `item type as string`.

## Usage Example

```csharp
var value = new MissionMainAgentEquipmentControllerVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)