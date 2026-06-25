---
title: "WorkshopItemComparerBase"
description: "Auto-generated class reference for WorkshopItemComparerBase."
---
# WorkshopItemComparerBase

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class WorkshopItemComparerBase : IComparer<ClanFinanceWorkshopItemVM>`
**Base:** `IComparer<ClanFinanceWorkshopItemVM>`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories/ClanIncomeSortControllerVM.cs`

## Overview

`WorkshopItemComparerBase` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetSortMode
`public void SetSortMode(bool isAcending)`

**Purpose:** Assigns a new value to sort mode and updates the object's internal state.

```csharp
// Obtain an instance of WorkshopItemComparerBase from the subsystem API first
WorkshopItemComparerBase workshopItemComparerBase = ...;
workshopItemComparerBase.SetSortMode(false);
```

### Compare
`public abstract int Compare(ClanFinanceWorkshopItemVM x, ClanFinanceWorkshopItemVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of WorkshopItemComparerBase from the subsystem API first
WorkshopItemComparerBase workshopItemComparerBase = ...;
var result = workshopItemComparerBase.Compare(x, y);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
WorkshopItemComparerBase instance = ...;
```

## See Also

- [Area Index](../)