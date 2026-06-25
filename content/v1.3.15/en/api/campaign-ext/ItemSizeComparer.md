---
title: "ItemSizeComparer"
description: "Auto-generated class reference for ItemSizeComparer."
---
# ItemSizeComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ItemSizeComparer : ClanPartiesSortControllerVM.ItemComparerBase`
**Base:** `ClanPartiesSortControllerVM.ItemComparerBase`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanPartiesSortControllerVM.cs`

## Overview

`ItemSizeComparer` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public override int Compare(ClanPartyItemVM x, ClanPartyItemVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of ItemSizeComparer from the subsystem API first
ItemSizeComparer itemSizeComparer = ...;
var result = itemSizeComparer.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ItemSizeComparer itemSizeComparer = ...;
itemSizeComparer.Compare(x, y);
```

## See Also

- [Area Index](../)