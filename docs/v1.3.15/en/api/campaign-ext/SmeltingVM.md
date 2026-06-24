<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SmeltingVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SmeltingVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SmeltingVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/Smelting/SmeltingVM.cs`

## Overview

`SmeltingVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `WeaponTypeName` | `public string WeaponTypeName { get; set; }` |
| `WeaponTypeCode` | `public string WeaponTypeCode { get; set; }` |
| `CurrentSelectedItem` | `public SmeltingItemVM CurrentSelectedItem { get; set; }` |
| `IsAnyItemSelected` | `public bool IsAnyItemSelected { get; set; }` |
| `SmeltableItemList` | `public MBBindingList<SmeltingItemVM> SmeltableItemList { get; set; }` |
| `SelectAllHint` | `public HintViewModel SelectAllHint { get; set; }` |
| `SortController` | `public SmeltingSortControllerVM SortController { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### RefreshList
`public void RefreshList()`

**Purpose:** Refreshes the display or cache of `list`.

### TrySmeltingSelectedItems
`public void TrySmeltingSelectedItems(Hero currentCraftingHero)`

**Purpose:** Attempts to get `smelting selected items`, usually returning the result in an out parameter.

### SaveItemLockStates
`public void SaveItemLockStates()`

**Purpose:** Saves `item lock states` data.

## Usage Example

```csharp
var value = new SmeltingVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)