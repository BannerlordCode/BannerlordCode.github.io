<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemComparerBase`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemComparerBase

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ItemComparerBase : IComparer<KingdomSettlementItemVM>`
**Base:** `IComparer<KingdomSettlementItemVM>`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Settlements/KingdomSettlementSortControllerVM.cs`

## Overview

`ItemComparerBase` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetSortMode
`public void SetSortMode(bool isAscending)`

**Purpose:** Sets the value or state of `sort mode`.

### Compare
`public abstract int Compare(KingdomSettlementItemVM x, KingdomSettlementItemVM y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
var implementation = new CustomItemComparerBase();
```

## See Also

- [Complete Class Catalog](../catalog)