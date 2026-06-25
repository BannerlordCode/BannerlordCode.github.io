---
title: "ItemComparer"
description: "Auto-generated class reference for ItemComparer."
---
# ItemComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Inventory
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ItemComparer : IComparer<SPItemVM>`
**Base:** `IComparer<SPItemVM>`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Inventory/SPInventorySortControllerVM.cs`

## Overview

`ItemComparer` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Inventory` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetSortMode
`public void SetSortMode(bool isAscending)`

**Purpose:** Assigns a new value to sort mode and updates the object's internal state.

```csharp
// Obtain an instance of ItemComparer from the subsystem API first
ItemComparer itemComparer = ...;
itemComparer.SetSortMode(false);
```

### Compare
`public abstract int Compare(SPItemVM x, SPItemVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of ItemComparer from the subsystem API first
ItemComparer itemComparer = ...;
var result = itemComparer.Compare(x, y);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
ItemComparer instance = ...;
```

## See Also

- [Area Index](../)