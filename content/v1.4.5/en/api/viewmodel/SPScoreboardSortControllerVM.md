---
title: "SPScoreboardSortControllerVM"
description: "Auto-generated class reference for SPScoreboardSortControllerVM."
---
# SPScoreboardSortControllerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SPScoreboardSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard/SPScoreboardSortControllerVM.cs`

## Overview

`SPScoreboardSortControllerVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `RemainingState` | `public int RemainingState { get; set; }` |
| `IsRemainingSelected` | `public bool IsRemainingSelected { get; set; }` |
| `KillState` | `public int KillState { get; set; }` |
| `IsKillSelected` | `public bool IsKillSelected { get; set; }` |
| `UpgradeState` | `public int UpgradeState { get; set; }` |
| `IsUpgradeSelected` | `public bool IsUpgradeSelected { get; set; }` |
| `DeadState` | `public int DeadState { get; set; }` |
| `IsDeadSelected` | `public bool IsDeadSelected { get; set; }` |
| `WoundedState` | `public int WoundedState { get; set; }` |
| `IsWoundedSelected` | `public bool IsWoundedSelected { get; set; }` |
| `RoutedState` | `public int RoutedState { get; set; }` |
| `IsRoutedSelected` | `public bool IsRoutedSelected { get; set; }` |

## Key Methods

### SetSortMode
`public void SetSortMode(bool isAscending)`

**Purpose:** Assigns a new value to sort mode and updates the object's internal state.

```csharp
// Obtain an instance of SPScoreboardSortControllerVM from the subsystem API first
SPScoreboardSortControllerVM sPScoreboardSortControllerVM = ...;
sPScoreboardSortControllerVM.SetSortMode(false);
```

### Compare
`public abstract int Compare(SPScoreboardUnitVM x, SPScoreboardUnitVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of SPScoreboardSortControllerVM from the subsystem API first
SPScoreboardSortControllerVM sPScoreboardSortControllerVM = ...;
var result = sPScoreboardSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(SPScoreboardUnitVM x, SPScoreboardUnitVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of SPScoreboardSortControllerVM from the subsystem API first
SPScoreboardSortControllerVM sPScoreboardSortControllerVM = ...;
var result = sPScoreboardSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(SPScoreboardUnitVM x, SPScoreboardUnitVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of SPScoreboardSortControllerVM from the subsystem API first
SPScoreboardSortControllerVM sPScoreboardSortControllerVM = ...;
var result = sPScoreboardSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(SPScoreboardUnitVM x, SPScoreboardUnitVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of SPScoreboardSortControllerVM from the subsystem API first
SPScoreboardSortControllerVM sPScoreboardSortControllerVM = ...;
var result = sPScoreboardSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(SPScoreboardUnitVM x, SPScoreboardUnitVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of SPScoreboardSortControllerVM from the subsystem API first
SPScoreboardSortControllerVM sPScoreboardSortControllerVM = ...;
var result = sPScoreboardSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(SPScoreboardUnitVM x, SPScoreboardUnitVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of SPScoreboardSortControllerVM from the subsystem API first
SPScoreboardSortControllerVM sPScoreboardSortControllerVM = ...;
var result = sPScoreboardSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(SPScoreboardUnitVM x, SPScoreboardUnitVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of SPScoreboardSortControllerVM from the subsystem API first
SPScoreboardSortControllerVM sPScoreboardSortControllerVM = ...;
var result = sPScoreboardSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(SPScoreboardUnitVM x, SPScoreboardUnitVM y)`

**Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of SPScoreboardSortControllerVM from the subsystem API first
SPScoreboardSortControllerVM sPScoreboardSortControllerVM = ...;
var result = sPScoreboardSortControllerVM.Compare(x, y);
```

### ExecuteSortByRemaining
`public void ExecuteSortByRemaining()`

**Purpose:** Runs the operation or workflow associated with sort by remaining.

```csharp
// Obtain an instance of SPScoreboardSortControllerVM from the subsystem API first
SPScoreboardSortControllerVM sPScoreboardSortControllerVM = ...;
sPScoreboardSortControllerVM.ExecuteSortByRemaining();
```

### ExecuteSortByKill
`public void ExecuteSortByKill()`

**Purpose:** Runs the operation or workflow associated with sort by kill.

```csharp
// Obtain an instance of SPScoreboardSortControllerVM from the subsystem API first
SPScoreboardSortControllerVM sPScoreboardSortControllerVM = ...;
sPScoreboardSortControllerVM.ExecuteSortByKill();
```

### ExecuteSortByUpgrade
`public void ExecuteSortByUpgrade()`

**Purpose:** Runs the operation or workflow associated with sort by upgrade.

```csharp
// Obtain an instance of SPScoreboardSortControllerVM from the subsystem API first
SPScoreboardSortControllerVM sPScoreboardSortControllerVM = ...;
sPScoreboardSortControllerVM.ExecuteSortByUpgrade();
```

### ExecuteSortByDead
`public void ExecuteSortByDead()`

**Purpose:** Runs the operation or workflow associated with sort by dead.

```csharp
// Obtain an instance of SPScoreboardSortControllerVM from the subsystem API first
SPScoreboardSortControllerVM sPScoreboardSortControllerVM = ...;
sPScoreboardSortControllerVM.ExecuteSortByDead();
```

### ExecuteSortByWounded
`public void ExecuteSortByWounded()`

**Purpose:** Runs the operation or workflow associated with sort by wounded.

```csharp
// Obtain an instance of SPScoreboardSortControllerVM from the subsystem API first
SPScoreboardSortControllerVM sPScoreboardSortControllerVM = ...;
sPScoreboardSortControllerVM.ExecuteSortByWounded();
```

### ExecuteSortByRouted
`public void ExecuteSortByRouted()`

**Purpose:** Runs the operation or workflow associated with sort by routed.

```csharp
// Obtain an instance of SPScoreboardSortControllerVM from the subsystem API first
SPScoreboardSortControllerVM sPScoreboardSortControllerVM = ...;
sPScoreboardSortControllerVM.ExecuteSortByRouted();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SPScoreboardSortControllerVM sPScoreboardSortControllerVM = ...;
sPScoreboardSortControllerVM.SetSortMode(false);
```

## See Also

- [Area Index](../)