---
title: "WorkshopItemNameComparer"
description: "Auto-generated class reference for WorkshopItemNameComparer."
---
# WorkshopItemNameComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class WorkshopItemNameComparer : ClanIncomeSortControllerVM.WorkshopItemComparerBase`
**Base:** `ClanIncomeSortControllerVM.WorkshopItemComparerBase`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ClanManagement/Categories/ClanIncomeSortControllerVM.cs`

## Overview

`WorkshopItemNameComparer` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public override int Compare(ClanFinanceWorkshopItemVM x, ClanFinanceWorkshopItemVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of WorkshopItemNameComparer from the subsystem API first
WorkshopItemNameComparer workshopItemNameComparer = ...;
var result = workshopItemNameComparer.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
WorkshopItemNameComparer workshopItemNameComparer = ...;
workshopItemNameComparer.Compare(x, y);
```

## See Also

- [Area Index](../)