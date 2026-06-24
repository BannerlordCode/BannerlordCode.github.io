<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BarterItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BarterItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Barter
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BarterItemVM : EncyclopediaLinkVM`
**Base:** `EncyclopediaLinkVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Barter/BarterItemVM.cs`

## Overview

`BarterItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Barter` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Barter` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TotalItemCount` | `public int TotalItemCount { get; set; }` |
| `TotalItemCountText` | `public string TotalItemCountText { get; set; }` |
| `CurrentOfferedAmount` | `public int CurrentOfferedAmount { get; set; }` |
| `CurrentOfferedAmountText` | `public string CurrentOfferedAmountText { get; set; }` |
| `BarterableType` | `public string BarterableType { get; set; }` |
| `HasVisualIdentifier` | `public bool HasVisualIdentifier { get; set; }` |
| `IsMultiple` | `public bool IsMultiple { get; set; }` |
| `IsSelectorActive` | `public bool IsSelectorActive { get; set; }` |
| `VisualIdentifier` | `public ImageIdentifierVM VisualIdentifier { get; set; }` |
| `ItemLbl` | `public string ItemLbl { get; set; }` |
| `FiefFileName` | `public string FiefFileName { get; set; }` |
| `IsItemTransferrable` | `public bool IsItemTransferrable { get; set; }` |
| `IsOffered` | `public bool IsOffered { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### RefreshCompabilityWithItem
`public void RefreshCompabilityWithItem(BarterItemVM item, bool isItemGotOffered)`

**Purpose:** Refreshes the display or cache of `compability with item`.

### ExecuteAddOffered
`public void ExecuteAddOffered()`

**Purpose:** Executes the `add offered` operation or workflow.

### ExecuteRemoveOffered
`public void ExecuteRemoveOffered()`

**Purpose:** Executes the `remove offered` operation or workflow.

### ExecuteAction
`public void ExecuteAction()`

**Purpose:** Executes the `action` operation or workflow.

### BarterTransferEventDelegate
`public delegate void BarterTransferEventDelegate(BarterItemVM itemVM, bool transferAll)`

**Purpose:** Handles logic related to `barter transfer event delegate`.

## Usage Example

```csharp
var value = new BarterItemVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)