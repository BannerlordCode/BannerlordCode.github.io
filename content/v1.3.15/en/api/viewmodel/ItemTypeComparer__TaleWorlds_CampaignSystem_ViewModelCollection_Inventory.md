---
title: "ItemTypeComparer"
description: "Auto-generated class reference for ItemTypeComparer."
---
# ItemTypeComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ItemTypeComparer : SPInventorySortControllerVM.ItemComparer`
**Base:** `SPInventorySortControllerVM.ItemComparer`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/SPInventorySortControllerVM.cs`

## Overview

`ItemTypeComparer` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public override int Compare(SPItemVM x, SPItemVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of ItemTypeComparer from the subsystem API first
ItemTypeComparer itemTypeComparer = ...;
var result = itemTypeComparer.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ItemTypeComparer itemTypeComparer = ...;
itemTypeComparer.Compare(x, y);
```

## See Also

- [Area Index](../)