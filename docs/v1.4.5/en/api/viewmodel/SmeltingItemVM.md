<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SmeltingItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SmeltingItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SmeltingItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting/SmeltingItemVM.cs`

## Overview

`SmeltingItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `EquipmentElement` | `public EquipmentElement EquipmentElement { get; }` |
| `Visual` | `public ItemImageIdentifierVM Visual { get; set; }` |
| `Yield` | `public MBBindingList<CraftingResourceItemVM> Yield { get; set; }` |
| `InputMaterials` | `public MBBindingList<CraftingResourceItemVM> InputMaterials { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `NumOfItems` | `public int NumOfItems { get; set; }` |
| `HasMoreThanOneItem` | `public bool HasMoreThanOneItem { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `LockHint` | `public HintViewModel LockHint { get; set; }` |
| `IsLocked` | `public bool IsLocked { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteSelection
`public void ExecuteSelection()`

**Purpose:** Executes the `selection` operation or workflow.

### ExecuteShowItemTooltip
`public void ExecuteShowItemTooltip()`

**Purpose:** Executes the `show item tooltip` operation or workflow.

### ExecuteHideItemTooltip
`public void ExecuteHideItemTooltip()`

**Purpose:** Executes the `hide item tooltip` operation or workflow.

## Usage Example

```csharp
var value = new SmeltingItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)