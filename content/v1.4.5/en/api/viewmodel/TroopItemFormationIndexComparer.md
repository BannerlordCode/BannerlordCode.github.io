---
title: "TroopItemFormationIndexComparer"
description: "Auto-generated class reference for TroopItemFormationIndexComparer."
---
# TroopItemFormationIndexComparer

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `class TroopItemFormationIndexComparer : IComparer<OrderTroopItemVM>`
**Base:** `IComparer<OrderTroopItemVM>`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Order/MissionOrderTroopControllerVM.cs`

## Overview

`TroopItemFormationIndexComparer` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Order` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Compare
`public int Compare(OrderTroopItemVM x, OrderTroopItemVM y)`

**Purpose:** **Purpose:** Compares the this instance with another instance for ordering.

```csharp
// Obtain an instance of TroopItemFormationIndexComparer from the subsystem API first
TroopItemFormationIndexComparer troopItemFormationIndexComparer = ...;
var result = troopItemFormationIndexComparer.Compare(x, y);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TroopItemFormationIndexComparer troopItemFormationIndexComparer = ...;
troopItemFormationIndexComparer.Compare(x, y);
```

## See Also

- [Area Index](../)