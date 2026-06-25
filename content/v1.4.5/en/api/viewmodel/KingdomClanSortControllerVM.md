---
title: "KingdomClanSortControllerVM"
description: "Auto-generated class reference for KingdomClanSortControllerVM."
---
# KingdomClanSortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomClanSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans/KingdomClanSortControllerVM.cs`

## Overview

`KingdomClanSortControllerVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Clans` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `InfluenceState` | `public int InfluenceState { get; set; }` |
| `FiefsState` | `public int FiefsState { get; set; }` |
| `MembersState` | `public int MembersState { get; set; }` |
| `NameState` | `public int NameState { get; set; }` |
| `TypeState` | `public int TypeState { get; set; }` |
| `IsNameSelected` | `public bool IsNameSelected { get; set; }` |
| `IsTypeSelected` | `public bool IsTypeSelected { get; set; }` |
| `IsFiefsSelected` | `public bool IsFiefsSelected { get; set; }` |
| `IsMembersSelected` | `public bool IsMembersSelected { get; set; }` |
| `IsInfluenceSelected` | `public bool IsInfluenceSelected { get; set; }` |

## Key Methods

### SetSortMode
`public void SetSortMode(bool isAscending)`

**Purpose:** Assigns a new value to sort mode and updates the object's internal state.

```csharp
// Obtain an instance of KingdomClanSortControllerVM from the subsystem API first
KingdomClanSortControllerVM kingdomClanSortControllerVM = ...;
kingdomClanSortControllerVM.SetSortMode(false);
```

### Compare
`public abstract int Compare(KingdomClanItemVM x, KingdomClanItemVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of KingdomClanSortControllerVM from the subsystem API first
KingdomClanSortControllerVM kingdomClanSortControllerVM = ...;
var result = kingdomClanSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(KingdomClanItemVM x, KingdomClanItemVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of KingdomClanSortControllerVM from the subsystem API first
KingdomClanSortControllerVM kingdomClanSortControllerVM = ...;
var result = kingdomClanSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(KingdomClanItemVM x, KingdomClanItemVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of KingdomClanSortControllerVM from the subsystem API first
KingdomClanSortControllerVM kingdomClanSortControllerVM = ...;
var result = kingdomClanSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(KingdomClanItemVM x, KingdomClanItemVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of KingdomClanSortControllerVM from the subsystem API first
KingdomClanSortControllerVM kingdomClanSortControllerVM = ...;
var result = kingdomClanSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(KingdomClanItemVM x, KingdomClanItemVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of KingdomClanSortControllerVM from the subsystem API first
KingdomClanSortControllerVM kingdomClanSortControllerVM = ...;
var result = kingdomClanSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(KingdomClanItemVM x, KingdomClanItemVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of KingdomClanSortControllerVM from the subsystem API first
KingdomClanSortControllerVM kingdomClanSortControllerVM = ...;
var result = kingdomClanSortControllerVM.Compare(x, y);
```

### SortByCurrentState
`public void SortByCurrentState()`

**Purpose:** Executes the SortByCurrentState logic.

```csharp
// Obtain an instance of KingdomClanSortControllerVM from the subsystem API first
KingdomClanSortControllerVM kingdomClanSortControllerVM = ...;
kingdomClanSortControllerVM.SortByCurrentState();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
KingdomClanSortControllerVM kingdomClanSortControllerVM = ...;
kingdomClanSortControllerVM.SetSortMode(false);
```

## See Also

- [Area Index](../)