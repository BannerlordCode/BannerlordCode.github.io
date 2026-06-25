---
title: "ItemDistanceComparer"
description: "Auto-generated class reference for ItemDistanceComparer."
---
# ItemDistanceComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ItemDistanceComparer : KingdomArmySortControllerVM.ItemComparerBase`
**Base:** `KingdomArmySortControllerVM.ItemComparerBase`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomArmySortControllerVM.cs`

## Overview

`ItemDistanceComparer` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public override int Compare(KingdomArmyItemVM x, KingdomArmyItemVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of ItemDistanceComparer from the subsystem API first
ItemDistanceComparer itemDistanceComparer = ...;
var result = itemDistanceComparer.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ItemDistanceComparer itemDistanceComparer = ...;
itemDistanceComparer.Compare(x, y);
```

## See Also

- [Area Index](../)