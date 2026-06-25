---
title: "ItemComparerBase"
description: "Auto-generated class reference for ItemComparerBase."
---
# ItemComparerBase

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ItemComparerBase : IComparer<KingdomWarItemVM>`
**Base:** `IComparer<KingdomWarItemVM>`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy/KingdomWarSortControllerVM.cs`

## Overview

`ItemComparerBase` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetSortMode
`public void SetSortMode(bool isAscending)`

**Purpose:** Assigns a new value to sort mode and updates the object's internal state.

```csharp
// Obtain an instance of ItemComparerBase from the subsystem API first
ItemComparerBase itemComparerBase = ...;
itemComparerBase.SetSortMode(false);
```

### Compare
`public abstract int Compare(KingdomWarItemVM x, KingdomWarItemVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of ItemComparerBase from the subsystem API first
ItemComparerBase itemComparerBase = ...;
var result = itemComparerBase.Compare(x, y);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
ItemComparerBase instance = ...;
```

## See Also

- [Area Index](../)