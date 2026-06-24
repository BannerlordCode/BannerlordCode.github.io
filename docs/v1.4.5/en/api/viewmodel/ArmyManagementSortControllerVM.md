<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ArmyManagementSortControllerVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ArmyManagementSortControllerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ArmyManagementSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement/ArmyManagementSortControllerVM.cs`

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

### SetSortMode
`public void SetSortMode(bool isAscending)`

**Purpose:** Sets the value or state of `sort mode`.

### Compare
`public abstract int Compare(ArmyManagementItemVM x, ArmyManagementItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(ArmyManagementItemVM x, ArmyManagementItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(ArmyManagementItemVM x, ArmyManagementItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(ArmyManagementItemVM x, ArmyManagementItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(ArmyManagementItemVM x, ArmyManagementItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(ArmyManagementItemVM x, ArmyManagementItemVM y)`

**Purpose:** Handles logic related to `compare`.

### Compare
`public override int Compare(ArmyManagementItemVM x, ArmyManagementItemVM y)`

**Purpose:** Handles logic related to `compare`.

### ExecuteSortByDistance
`public void ExecuteSortByDistance()`

**Purpose:** Executes the `sort by distance` operation or workflow.

### ExecuteSortByCost
`public void ExecuteSortByCost()`

**Purpose:** Executes the `sort by cost` operation or workflow.

### ExecuteSortByStrength
`public void ExecuteSortByStrength()`

**Purpose:** Executes the `sort by strength` operation or workflow.

### ExecuteSortByName
`public void ExecuteSortByName()`

**Purpose:** Executes the `sort by name` operation or workflow.

### ExecuteSortByClan
`public void ExecuteSortByClan()`

**Purpose:** Executes the `sort by clan` operation or workflow.

### ExecuteSortByShipCount
`public void ExecuteSortByShipCount()`

**Purpose:** Executes the `sort by ship count` operation or workflow.

## Usage Example

```csharp
var value = new ArmyManagementSortControllerVM();
value.SetSortMode(false);
```

## See Also

- [Complete Class Catalog](../catalog)