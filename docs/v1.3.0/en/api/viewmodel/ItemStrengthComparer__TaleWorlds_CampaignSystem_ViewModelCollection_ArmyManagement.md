<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemStrengthComparer`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ItemStrengthComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ItemStrengthComparer : ArmyManagementSortControllerVM.ItemComparerBase`
**Base:** `ArmyManagementSortControllerVM.ItemComparerBase`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementSortControllerVM.cs`

## Overview

`ItemStrengthComparer` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public override int Compare(ArmyManagementItemVM x, ArmyManagementItemVM y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
var value = new ItemStrengthComparer();
value.Compare(x, y);
```

## See Also

- [Complete Class Catalog](../catalog)