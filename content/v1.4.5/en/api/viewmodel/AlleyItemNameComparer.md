---
title: "AlleyItemNameComparer"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AlleyItemNameComparer`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AlleyItemNameComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class AlleyItemNameComparer : AlleyItemComparerBase`
**Base:** `AlleyItemComparerBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories/ClanIncomeSortControllerVM.cs`

## Overview

`AlleyItemNameComparer` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public override int Compare(ClanFinanceAlleyItemVM x, ClanFinanceAlleyItemVM y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
var value = new AlleyItemNameComparer();
value.Compare(x, y);
```

## See Also

- [Complete Class Catalog](../catalog)