---
title: "ItemVillagesComparer"
description: "Auto-generated class reference for ItemVillagesComparer."
---
# ItemVillagesComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ItemVillagesComparer : KingdomSettlementSortControllerVM.ItemComparerBase`
**Base:** `KingdomSettlementSortControllerVM.ItemComparerBase`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Settlements/KingdomSettlementSortControllerVM.cs`

## Overview

`ItemVillagesComparer` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public override int Compare(KingdomSettlementItemVM x, KingdomSettlementItemVM y)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of ItemVillagesComparer from the subsystem API first
ItemVillagesComparer itemVillagesComparer = ...;
var result = itemVillagesComparer.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ItemVillagesComparer itemVillagesComparer = ...;
itemVillagesComparer.Compare(x, y);
```

## See Also

- [Area Index](../)