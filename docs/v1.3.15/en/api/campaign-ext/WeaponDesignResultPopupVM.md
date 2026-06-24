<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WeaponDesignResultPopupVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WeaponDesignResultPopupVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class WeaponDesignResultPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/WeaponDesignResultPopupVM.cs`

## Overview

`WeaponDesignResultPopupVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `WeaponFlagIconsList` | `public MBBindingList<ItemFlagVM> WeaponFlagIconsList { get; set; }` |
| `IsInOrderMode` | `public bool IsInOrderMode { get; set; }` |
| `CraftedWeaponFinalWorth` | `public int CraftedWeaponFinalWorth { get; set; }` |
| `CraftedWeaponPriceDifference` | `public int CraftedWeaponPriceDifference { get; set; }` |
| `CraftedWeaponInitialWorth` | `public int CraftedWeaponInitialWorth { get; set; }` |
| `CraftedWeaponWorthText` | `public string CraftedWeaponWorthText { get; set; }` |
| `IsOrderSuccessful` | `public bool IsOrderSuccessful { get; set; }` |
| `CanConfirm` | `public bool CanConfirm { get; set; }` |
| `OrderResultText` | `public string OrderResultText { get; set; }` |
| `OrderOwnerRemarkText` | `public string OrderOwnerRemarkText { get; set; }` |
| `WeaponCraftedText` | `public string WeaponCraftedText { get; set; }` |
| `DoneLbl` | `public string DoneLbl { get; set; }` |
| `DesignResultPropertyList` | `public MBBindingList<WeaponDesignResultPropertyItemVM> DesignResultPropertyList { get; set; }` |
| `ItemName` | `public string ItemName { get; set; }` |
| `ItemVisualModel` | `public ItemCollectionElementViewModel ItemVisualModel { get; set; }` |
| `ConfirmDisabledReasonHint` | `public HintViewModel ConfirmDisabledReasonHint { get; set; }` |
| `SecondaryUsageSelector` | `public SelectorVM<CraftingSecondaryUsageItemVM> SecondaryUsageSelector { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### ExecuteFinalizeCrafting
`public void ExecuteFinalizeCrafting()`

**Purpose:** Executes the `finalize crafting` operation or workflow.

### ExecuteRandomCraftName
`public void ExecuteRandomCraftName()`

**Purpose:** Executes the `random craft name` operation or workflow.

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `done input key`.

## Usage Example

```csharp
var value = new WeaponDesignResultPopupVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)