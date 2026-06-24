<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemOwnerComparer`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemOwnerComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ItemOwnerComparer : KingdomArmySortControllerVM.ItemComparerBase`
**Base:** `KingdomArmySortControllerVM.ItemComparerBase`
**Area:** campaign-ext

## Overview

`ItemOwnerComparer` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OwnerState` | `public int OwnerState { get; set; }` |
| `PartiesState` | `public int PartiesState { get; set; }` |
| `StrengthState` | `public int StrengthState { get; set; }` |
| `NameState` | `public int NameState { get; set; }` |
| `DistanceState` | `public int DistanceState { get; set; }` |
| `IsNameSelected` | `public bool IsNameSelected { get; set; }` |
| `IsPartiesSelected` | `public bool IsPartiesSelected { get; set; }` |
| `IsStrengthSelected` | `public bool IsStrengthSelected { get; set; }` |
| `IsOwnerSelected` | `public bool IsOwnerSelected { get; set; }` |
| `IsDistanceSelected` | `public bool IsDistanceSelected { get; set; }` |

## Key Methods

### SetSortMode
`public void SetSortMode(bool isAscending)`

**Purpose:** Sets the value or state of `sort mode`.

### Compare
`public abstract int Compare(KingdomArmyItemVM x, KingdomArmyItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(KingdomArmyItemVM x, KingdomArmyItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(KingdomArmyItemVM x, KingdomArmyItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(KingdomArmyItemVM x, KingdomArmyItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(KingdomArmyItemVM x, KingdomArmyItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(KingdomArmyItemVM x, KingdomArmyItemVM y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
// First obtain a ItemOwnerComparer instance from game state, then call one of its public methods
var value = new ItemOwnerComparer();
value.SetSortMode(false);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
