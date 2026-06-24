<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemFoodComparer`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemFoodComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ItemFoodComparer : KingdomSettlementSortControllerVM.ItemComparerBase`
**Base:** `KingdomSettlementSortControllerVM.ItemComparerBase`
**Area:** campaign-ext

## Overview

`ItemFoodComparer` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TypeState` | `public int TypeState { get; set; }` |
| `NameState` | `public int NameState { get; set; }` |
| `OwnerState` | `public int OwnerState { get; set; }` |
| `ProsperityState` | `public int ProsperityState { get; set; }` |
| `DefendersState` | `public int DefendersState { get; set; }` |
| `IsTypeSelected` | `public bool IsTypeSelected { get; set; }` |
| `IsNameSelected` | `public bool IsNameSelected { get; set; }` |
| `IsDefendersSelected` | `public bool IsDefendersSelected { get; set; }` |
| `IsOwnerSelected` | `public bool IsOwnerSelected { get; set; }` |
| `IsProsperitySelected` | `public bool IsProsperitySelected { get; set; }` |

## Key Methods

### SetSortMode
`public void SetSortMode(bool isAscending)`

**Purpose:** Sets the value or state of `sort mode`.

### Compare
`public abstract int Compare(KingdomSettlementItemVM x, KingdomSettlementItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(KingdomSettlementItemVM x, KingdomSettlementItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(KingdomSettlementItemVM x, KingdomSettlementItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(KingdomSettlementItemVM x, KingdomSettlementItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(KingdomSettlementItemVM x, KingdomSettlementItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(KingdomSettlementItemVM x, KingdomSettlementItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(KingdomSettlementItemVM x, KingdomSettlementItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(KingdomSettlementItemVM x, KingdomSettlementItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(KingdomSettlementItemVM x, KingdomSettlementItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(KingdomSettlementItemVM x, KingdomSettlementItemVM y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
// First obtain a ItemFoodComparer instance from game state, then call one of its public methods
var value = new ItemFoodComparer();
value.SetSortMode(false);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
