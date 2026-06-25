---
title: "ItemStrengthComparer"
description: "Auto-generated class reference for ItemStrengthComparer."
---
# ItemStrengthComparer

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ItemStrengthComparer : ItemComparerBase`
**Base:** `ItemComparerBase`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies/KingdomArmySortControllerVM.cs`

## Overview

`ItemStrengthComparer` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public override int Compare(KingdomArmyItemVM x, KingdomArmyItemVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of ItemStrengthComparer from the subsystem API first
ItemStrengthComparer itemStrengthComparer = ...;
var result = itemStrengthComparer.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ItemStrengthComparer itemStrengthComparer = ...;
itemStrengthComparer.Compare(x, y);
```

## See Also

- [Area Index](../)