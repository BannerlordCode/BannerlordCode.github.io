---
title: "ItemInfluenceComparer"
description: "Auto-generated class reference for ItemInfluenceComparer."
---
# ItemInfluenceComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ItemInfluenceComparer : KingdomClanSortControllerVM.ItemComparerBase`
**Base:** `KingdomClanSortControllerVM.ItemComparerBase`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Clans/KingdomClanSortControllerVM.cs`

## Overview

`ItemInfluenceComparer` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public override int Compare(KingdomClanItemVM x, KingdomClanItemVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of ItemInfluenceComparer from the subsystem API first
ItemInfluenceComparer itemInfluenceComparer = ...;
var result = itemInfluenceComparer.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ItemInfluenceComparer itemInfluenceComparer = ...;
itemInfluenceComparer.Compare(x, y);
```

## See Also

- [Area Index](../)