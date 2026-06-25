---
title: "ItemNameComparer"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemNameComparer`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ItemNameComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ItemNameComparer : ItemComparerBase`
**Base:** `ItemComparerBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting/SmeltingSortControllerVM.cs`

## Overview

`ItemNameComparer` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public override int Compare(SmeltingItemVM x, SmeltingItemVM y)`

**Purpose:** Handles logic related to `compare`.

## Usage Example

```csharp
var value = new ItemNameComparer();
value.Compare(x, y);
```

## See Also

- [Complete Class Catalog](../catalog)