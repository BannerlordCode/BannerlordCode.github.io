---
title: "ItemFiefsComparer"
description: "Auto-generated class reference for ItemFiefsComparer."
---
# ItemFiefsComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ItemFiefsComparer : ItemComparerBase`
**Base:** `ItemComparerBase`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans/KingdomClanSortControllerVM.cs`

## Overview

`ItemFiefsComparer` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public override int Compare(KingdomClanItemVM x, KingdomClanItemVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of ItemFiefsComparer from the subsystem API first
ItemFiefsComparer itemFiefsComparer = ...;
var result = itemFiefsComparer.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ItemFiefsComparer itemFiefsComparer = ...;
itemFiefsComparer.Compare(x, y);
```

## See Also

- [Area Index](../)