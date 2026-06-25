---
title: "WorkshopItemLocationComparer"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WorkshopItemLocationComparer`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# WorkshopItemLocationComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class WorkshopItemLocationComparer : WorkshopItemComparerBase`
**Base:** `WorkshopItemComparerBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories/ClanIncomeSortControllerVM.cs`

## Overview

`WorkshopItemLocationComparer` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public override int Compare(ClanFinanceWorkshopItemVM x, ClanFinanceWorkshopItemVM y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
var value = new WorkshopItemLocationComparer();
value.Compare(x, y);
```

## See Also

- [Complete Class Catalog](../catalog)