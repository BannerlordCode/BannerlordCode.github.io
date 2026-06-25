---
title: "KingdomWarSortControllerVM"
description: "Auto-generated class reference for KingdomWarSortControllerVM."
---
# KingdomWarSortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomWarSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Diplomacy/KingdomWarSortControllerVM.cs`

## Overview

`KingdomWarSortControllerVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Diplomacy` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ScoreState` | `public int ScoreState { get; set; }` |
| `IsScoreSelected` | `public bool IsScoreSelected { get; set; }` |

## Key Methods

### SetSortMode
`public void SetSortMode(bool isAscending)`

**Purpose:** Assigns a new value to `sort mode` and updates the object's internal state.

```csharp
// Obtain an instance of KingdomWarSortControllerVM from the subsystem API first
KingdomWarSortControllerVM kingdomWarSortControllerVM = ...;
kingdomWarSortControllerVM.SetSortMode(false);
```

### Compare
`public abstract int Compare(KingdomWarItemVM x, KingdomWarItemVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of KingdomWarSortControllerVM from the subsystem API first
KingdomWarSortControllerVM kingdomWarSortControllerVM = ...;
var result = kingdomWarSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(KingdomWarItemVM x, KingdomWarItemVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of KingdomWarSortControllerVM from the subsystem API first
KingdomWarSortControllerVM kingdomWarSortControllerVM = ...;
var result = kingdomWarSortControllerVM.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
KingdomWarSortControllerVM kingdomWarSortControllerVM = ...;
kingdomWarSortControllerVM.SetSortMode(false);
```

## See Also

- [Area Index](../)