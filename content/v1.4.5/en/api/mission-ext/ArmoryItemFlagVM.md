---
title: "ArmoryItemFlagVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ArmoryItemFlagVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ArmoryItemFlagVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ArmoryItemFlagVM : ViewModel`
**Base:** `ViewModel`
**Area:** mission-ext

## Overview

`ArmoryItemFlagVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### RefreshWith
`public void RefreshWith(EquipmentIndex equipmentIndex, Equipment equipment)`

**Purpose:** Refreshes the display or cache of `with`.

### OnSelect
`public void OnSelect()`

**Purpose:** Called when the `select` event is raised.

### IsItemUsageApplicable
`public static bool IsItemUsageApplicable(WeaponComponentData weapon)`

**Purpose:** Handles logic related to `is item usage applicable`.

## Usage Example

```csharp
// First obtain a ArmoryItemFlagVM instance from game state, then call one of its public methods
var value = new ArmoryItemFlagVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
