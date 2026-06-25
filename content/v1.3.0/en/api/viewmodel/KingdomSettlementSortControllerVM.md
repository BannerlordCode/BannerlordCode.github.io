---
title: "KingdomSettlementSortControllerVM"
description: "Auto-generated class reference for KingdomSettlementSortControllerVM."
---
# KingdomSettlementSortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomSettlementSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Settlements/KingdomSettlementSortControllerVM.cs`

## Overview

`KingdomSettlementSortControllerVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `TypeState` | `public int TypeState { get; set; }` |
| `NameState` | `public int NameState { get; set; }` |
| `OwnerState` | `public int OwnerState { get; set; }` |
| `ProsperityState` | `public int ProsperityState { get; set; }` |
| `DefendersState` | `public int DefendersState { get; set; }` |
| `IsTypeSelected` | `public bool IsTypeSelected { get; set; }` |
| `IsNameSelected` | `public bool IsNameSelected { get; set; }` |
| `IsDefendersSelected` | `public bool IsDefendersSelected { get; set; }` |
| `IsOwnerSelected` | `public bool IsOwnerSelected { get; set; }` |
| `IsProsperitySelected` | `public bool IsProsperitySelected { get; set; }` |

## Key Methods

### SetSortMode
`public void SetSortMode(bool isAscending)`

**Purpose:** Assigns a new value to `sort mode` and updates the object's internal state.

```csharp
// Obtain an instance of KingdomSettlementSortControllerVM from the subsystem API first
KingdomSettlementSortControllerVM kingdomSettlementSortControllerVM = ...;
kingdomSettlementSortControllerVM.SetSortMode(false);
```

### Compare
`public abstract int Compare(KingdomSettlementItemVM x, KingdomSettlementItemVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of KingdomSettlementSortControllerVM from the subsystem API first
KingdomSettlementSortControllerVM kingdomSettlementSortControllerVM = ...;
var result = kingdomSettlementSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(KingdomSettlementItemVM x, KingdomSettlementItemVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of KingdomSettlementSortControllerVM from the subsystem API first
KingdomSettlementSortControllerVM kingdomSettlementSortControllerVM = ...;
var result = kingdomSettlementSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(KingdomSettlementItemVM x, KingdomSettlementItemVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of KingdomSettlementSortControllerVM from the subsystem API first
KingdomSettlementSortControllerVM kingdomSettlementSortControllerVM = ...;
var result = kingdomSettlementSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(KingdomSettlementItemVM x, KingdomSettlementItemVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of KingdomSettlementSortControllerVM from the subsystem API first
KingdomSettlementSortControllerVM kingdomSettlementSortControllerVM = ...;
var result = kingdomSettlementSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(KingdomSettlementItemVM x, KingdomSettlementItemVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of KingdomSettlementSortControllerVM from the subsystem API first
KingdomSettlementSortControllerVM kingdomSettlementSortControllerVM = ...;
var result = kingdomSettlementSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(KingdomSettlementItemVM x, KingdomSettlementItemVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of KingdomSettlementSortControllerVM from the subsystem API first
KingdomSettlementSortControllerVM kingdomSettlementSortControllerVM = ...;
var result = kingdomSettlementSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(KingdomSettlementItemVM x, KingdomSettlementItemVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of KingdomSettlementSortControllerVM from the subsystem API first
KingdomSettlementSortControllerVM kingdomSettlementSortControllerVM = ...;
var result = kingdomSettlementSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(KingdomSettlementItemVM x, KingdomSettlementItemVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of KingdomSettlementSortControllerVM from the subsystem API first
KingdomSettlementSortControllerVM kingdomSettlementSortControllerVM = ...;
var result = kingdomSettlementSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(KingdomSettlementItemVM x, KingdomSettlementItemVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of KingdomSettlementSortControllerVM from the subsystem API first
KingdomSettlementSortControllerVM kingdomSettlementSortControllerVM = ...;
var result = kingdomSettlementSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(KingdomSettlementItemVM x, KingdomSettlementItemVM y)`

**Purpose:** Compares the current object with another instance for ordering.

```csharp
// Obtain an instance of KingdomSettlementSortControllerVM from the subsystem API first
KingdomSettlementSortControllerVM kingdomSettlementSortControllerVM = ...;
var result = kingdomSettlementSortControllerVM.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
KingdomSettlementSortControllerVM kingdomSettlementSortControllerVM = ...;
kingdomSettlementSortControllerVM.SetSortMode(false);
```

## See Also

- [Area Index](../)