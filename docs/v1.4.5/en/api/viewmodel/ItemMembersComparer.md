<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemMembersComparer`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ItemMembersComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ItemMembersComparer : ItemComparerBase`
**Base:** `ItemComparerBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans/KingdomClanSortControllerVM.cs`

## Overview

`ItemMembersComparer` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public override int Compare(KingdomClanItemVM x, KingdomClanItemVM y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
var value = new ItemMembersComparer();
value.Compare(x, y);
```

## See Also

- [Complete Class Catalog](../catalog)