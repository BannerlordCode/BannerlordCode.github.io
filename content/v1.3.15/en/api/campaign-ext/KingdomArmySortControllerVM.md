---
title: "KingdomArmySortControllerVM"
description: "Auto-generated class reference for KingdomArmySortControllerVM."
---
# KingdomArmySortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomArmySortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Armies/KingdomArmySortControllerVM.cs`

## Overview

`KingdomArmySortControllerVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Armies` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `OwnerState` | `public int OwnerState { get; set; }` |
| `PartiesState` | `public int PartiesState { get; set; }` |
| `StrengthState` | `public int StrengthState { get; set; }` |
| `NameState` | `public int NameState { get; set; }` |
| `DistanceState` | `public int DistanceState { get; set; }` |
| `IsNameSelected` | `public bool IsNameSelected { get; set; }` |
| `IsPartiesSelected` | `public bool IsPartiesSelected { get; set; }` |
| `IsStrengthSelected` | `public bool IsStrengthSelected { get; set; }` |
| `IsOwnerSelected` | `public bool IsOwnerSelected { get; set; }` |
| `IsDistanceSelected` | `public bool IsDistanceSelected { get; set; }` |

## Key Methods

### SetSortMode
`public void SetSortMode(bool isAscending)`

**Purpose:** Assigns a new value to sort mode and updates the object's internal state.

```csharp
// Obtain an instance of KingdomArmySortControllerVM from the subsystem API first
KingdomArmySortControllerVM kingdomArmySortControllerVM = ...;
kingdomArmySortControllerVM.SetSortMode(false);
```

### Compare
`public abstract int Compare(KingdomArmyItemVM x, KingdomArmyItemVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of KingdomArmySortControllerVM from the subsystem API first
KingdomArmySortControllerVM kingdomArmySortControllerVM = ...;
var result = kingdomArmySortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(KingdomArmyItemVM x, KingdomArmyItemVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of KingdomArmySortControllerVM from the subsystem API first
KingdomArmySortControllerVM kingdomArmySortControllerVM = ...;
var result = kingdomArmySortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(KingdomArmyItemVM x, KingdomArmyItemVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of KingdomArmySortControllerVM from the subsystem API first
KingdomArmySortControllerVM kingdomArmySortControllerVM = ...;
var result = kingdomArmySortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(KingdomArmyItemVM x, KingdomArmyItemVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of KingdomArmySortControllerVM from the subsystem API first
KingdomArmySortControllerVM kingdomArmySortControllerVM = ...;
var result = kingdomArmySortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(KingdomArmyItemVM x, KingdomArmyItemVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of KingdomArmySortControllerVM from the subsystem API first
KingdomArmySortControllerVM kingdomArmySortControllerVM = ...;
var result = kingdomArmySortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(KingdomArmyItemVM x, KingdomArmyItemVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of KingdomArmySortControllerVM from the subsystem API first
KingdomArmySortControllerVM kingdomArmySortControllerVM = ...;
var result = kingdomArmySortControllerVM.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
KingdomArmySortControllerVM kingdomArmySortControllerVM = ...;
kingdomArmySortControllerVM.SetSortMode(false);
```

## See Also

- [Area Index](../)