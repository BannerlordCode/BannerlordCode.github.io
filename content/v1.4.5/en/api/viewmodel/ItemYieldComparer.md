---
title: "ItemYieldComparer"
description: "Auto-generated class reference for ItemYieldComparer."
---
# ItemYieldComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ItemYieldComparer : ItemComparerBase`
**Base:** `ItemComparerBase`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting/SmeltingSortControllerVM.cs`

## Overview

`ItemYieldComparer` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public override int Compare(SmeltingItemVM x, SmeltingItemVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of ItemYieldComparer from the subsystem API first
ItemYieldComparer itemYieldComparer = ...;
var result = itemYieldComparer.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ItemYieldComparer itemYieldComparer = ...;
itemYieldComparer.Compare(x, y);
```

## See Also

- [Area Index](../)