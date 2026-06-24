<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ShallowItemVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ShallowItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ShallowItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.ClassLoadout/ShallowItemVM.cs`

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
var value = new ShallowItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)