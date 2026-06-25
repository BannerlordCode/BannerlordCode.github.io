---
title: "ArmyManagementSortControllerVM"
description: "Auto-generated class reference for ArmyManagementSortControllerVM."
---
# ArmyManagementSortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ArmyManagementSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementSortControllerVM.cs`

## Overview

`ArmyManagementSortControllerVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DistanceState` | `public int DistanceState { get; set; }` |
| `CostState` | `public int CostState { get; set; }` |
| `StrengthState` | `public int StrengthState { get; set; }` |
| `NameState` | `public int NameState { get; set; }` |
| `ClanState` | `public int ClanState { get; set; }` |
| `ShipCountState` | `public int ShipCountState { get; set; }` |
| `IsNameSelected` | `public bool IsNameSelected { get; set; }` |
| `IsCostSelected` | `public bool IsCostSelected { get; set; }` |
| `IsStrengthSelected` | `public bool IsStrengthSelected { get; set; }` |
| `IsDistanceSelected` | `public bool IsDistanceSelected { get; set; }` |
| `IsClanSelected` | `public bool IsClanSelected { get; set; }` |
| `IsShipCountSelected` | `public bool IsShipCountSelected { get; set; }` |

## Key Methods

### ExecuteSortByDistance
`public void ExecuteSortByDistance()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with sort by distance.

```csharp
// Obtain an instance of ArmyManagementSortControllerVM from the subsystem API first
ArmyManagementSortControllerVM armyManagementSortControllerVM = ...;
armyManagementSortControllerVM.ExecuteSortByDistance();
```

### ExecuteSortByCost
`public void ExecuteSortByCost()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with sort by cost.

```csharp
// Obtain an instance of ArmyManagementSortControllerVM from the subsystem API first
ArmyManagementSortControllerVM armyManagementSortControllerVM = ...;
armyManagementSortControllerVM.ExecuteSortByCost();
```

### ExecuteSortByStrength
`public void ExecuteSortByStrength()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with sort by strength.

```csharp
// Obtain an instance of ArmyManagementSortControllerVM from the subsystem API first
ArmyManagementSortControllerVM armyManagementSortControllerVM = ...;
armyManagementSortControllerVM.ExecuteSortByStrength();
```

### ExecuteSortByName
`public void ExecuteSortByName()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with sort by name.

```csharp
// Obtain an instance of ArmyManagementSortControllerVM from the subsystem API first
ArmyManagementSortControllerVM armyManagementSortControllerVM = ...;
armyManagementSortControllerVM.ExecuteSortByName();
```

### ExecuteSortByClan
`public void ExecuteSortByClan()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with sort by clan.

```csharp
// Obtain an instance of ArmyManagementSortControllerVM from the subsystem API first
ArmyManagementSortControllerVM armyManagementSortControllerVM = ...;
armyManagementSortControllerVM.ExecuteSortByClan();
```

### ExecuteSortByShipCount
`public void ExecuteSortByShipCount()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with sort by ship count.

```csharp
// Obtain an instance of ArmyManagementSortControllerVM from the subsystem API first
ArmyManagementSortControllerVM armyManagementSortControllerVM = ...;
armyManagementSortControllerVM.ExecuteSortByShipCount();
```

### SetSortMode
`public void SetSortMode(bool isAscending)`

**Purpose:** **Purpose:** Assigns a new value to sort mode and updates the object's internal state.

```csharp
// Obtain an instance of ArmyManagementSortControllerVM from the subsystem API first
ArmyManagementSortControllerVM armyManagementSortControllerVM = ...;
armyManagementSortControllerVM.SetSortMode(false);
```

### Compare
`public abstract int Compare(ArmyManagementItemVM x, ArmyManagementItemVM y)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of ArmyManagementSortControllerVM from the subsystem API first
ArmyManagementSortControllerVM armyManagementSortControllerVM = ...;
var result = armyManagementSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(ArmyManagementItemVM x, ArmyManagementItemVM y)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of ArmyManagementSortControllerVM from the subsystem API first
ArmyManagementSortControllerVM armyManagementSortControllerVM = ...;
var result = armyManagementSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(ArmyManagementItemVM x, ArmyManagementItemVM y)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of ArmyManagementSortControllerVM from the subsystem API first
ArmyManagementSortControllerVM armyManagementSortControllerVM = ...;
var result = armyManagementSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(ArmyManagementItemVM x, ArmyManagementItemVM y)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of ArmyManagementSortControllerVM from the subsystem API first
ArmyManagementSortControllerVM armyManagementSortControllerVM = ...;
var result = armyManagementSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(ArmyManagementItemVM x, ArmyManagementItemVM y)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of ArmyManagementSortControllerVM from the subsystem API first
ArmyManagementSortControllerVM armyManagementSortControllerVM = ...;
var result = armyManagementSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(ArmyManagementItemVM x, ArmyManagementItemVM y)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of ArmyManagementSortControllerVM from the subsystem API first
ArmyManagementSortControllerVM armyManagementSortControllerVM = ...;
var result = armyManagementSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(ArmyManagementItemVM x, ArmyManagementItemVM y)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of ArmyManagementSortControllerVM from the subsystem API first
ArmyManagementSortControllerVM armyManagementSortControllerVM = ...;
var result = armyManagementSortControllerVM.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ArmyManagementSortControllerVM armyManagementSortControllerVM = ...;
armyManagementSortControllerVM.ExecuteSortByDistance();
```

## See Also

- [Area Index](../)