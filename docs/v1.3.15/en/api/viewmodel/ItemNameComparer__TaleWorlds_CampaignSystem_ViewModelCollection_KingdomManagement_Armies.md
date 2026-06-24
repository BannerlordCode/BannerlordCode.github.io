<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemNameComparer`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemNameComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ItemNameComparer : KingdomArmySortControllerVM.ItemComparerBase`
**Base:** `KingdomArmySortControllerVM.ItemComparerBase`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomArmySortControllerVM.cs`

## Overview

`ItemNameComparer` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public override int Compare(KingdomArmyItemVM x, KingdomArmyItemVM y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
var value = new ItemNameComparer();
value.Compare(x, y);
```

## See Also

- [Complete Class Catalog](../catalog)