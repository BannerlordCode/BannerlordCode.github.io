---
title: "ShallowItemVM"
description: "Auto-generated class reference for ShallowItemVM."
---
# ShallowItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ShallowItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout/ShallowItemVM.cs`

## Overview

`ShallowItemVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Icon` | `public string Icon { get; set; }` |
| `Hint` | `public HintViewModel Hint { get; set; }` |
| `Type` | `public ItemGroup Type { get; }` |
| `ItemInformationList` | `public MBBindingList<ArmoryItemFlagVM> ItemInformationList { get; set; }` |
| `PropertyList` | `public MBBindingList<ShallowItemPropertyVM> PropertyList { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `Icon` | `public ItemImageIdentifierVM Icon { get; set; }` |
| `TypeAsString` | `public string TypeAsString { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `HasAnyAlternativeUsage` | `public bool HasAnyAlternativeUsage { get; set; }` |
| `IsValid` | `public bool IsValid { get; set; }` |
| `AlternativeUsageSelector` | `public SelectorVM<AlternativeUsageItemOptionVM> AlternativeUsageSelector { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of ShallowItemVM from the subsystem API first
ShallowItemVM shallowItemVM = ...;
shallowItemVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of ShallowItemVM from the subsystem API first
ShallowItemVM shallowItemVM = ...;
shallowItemVM.OnFinalize();
```

### RefreshWith
`public void RefreshWith(EquipmentIndex equipmentIndex, Equipment equipment)`

**Purpose:** Keeps the display or cache of `with` in sync with the underlying state.

```csharp
// Obtain an instance of ShallowItemVM from the subsystem API first
ShallowItemVM shallowItemVM = ...;
shallowItemVM.RefreshWith(equipmentIndex, equipment);
```

### OnSelect
`public void OnSelect()`

**Purpose:** Invoked when the `select` event is raised.

```csharp
// Obtain an instance of ShallowItemVM from the subsystem API first
ShallowItemVM shallowItemVM = ...;
shallowItemVM.OnSelect();
```

### IsItemUsageApplicable
`public static bool IsItemUsageApplicable(WeaponComponentData weapon)`

**Purpose:** Determines whether the current object is in the `item usage applicable` state or condition.

```csharp
// Static call; no instance required
ShallowItemVM.IsItemUsageApplicable(weapon);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ShallowItemVM shallowItemVM = ...;
shallowItemVM.RefreshValues();
```

## See Also

- [Area Index](../)