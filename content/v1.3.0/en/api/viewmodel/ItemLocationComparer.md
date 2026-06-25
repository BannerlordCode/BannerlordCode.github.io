---
title: "ItemLocationComparer"
description: "Auto-generated class reference for ItemLocationComparer."
---
# ItemLocationComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ItemLocationComparer : ClanMembersSortControllerVM.ItemComparerBase`
**Base:** `ClanMembersSortControllerVM.ItemComparerBase`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanMembersSortControllerVM.cs`

## Overview

`ItemLocationComparer` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public override int Compare(ClanLordItemVM x, ClanLordItemVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of ItemLocationComparer from the subsystem API first
ItemLocationComparer itemLocationComparer = ...;
var result = itemLocationComparer.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ItemLocationComparer itemLocationComparer = ...;
itemLocationComparer.Compare(x, y);
```

## See Also

- [Area Index](../)