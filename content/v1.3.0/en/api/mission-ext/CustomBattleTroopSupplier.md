---
title: "CustomBattleTroopSupplier"
description: "Auto-generated class reference for CustomBattleTroopSupplier."
---
# CustomBattleTroopSupplier

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleTroopSupplier : IMissionTroopSupplier`
**Base:** `IMissionTroopSupplier`
**File:** `TaleWorlds.MountAndBlade/CustomBattleTroopSupplier.cs`

## Overview

`CustomBattleTroopSupplier` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `NumRemovedTroops` | `public int NumRemovedTroops { get; }` |
| `NumTroopsNotSupplied` | `public int NumTroopsNotSupplied { get; }` |
| `AnyTroopRemainsToBeSupplied` | `public bool AnyTroopRemainsToBeSupplied { get; }` |

## Key Methods

### SupplyTroops
`public IEnumerable<IAgentOriginBase> SupplyTroops(int numberToAllocate)`

**Purpose:** **Purpose:** Executes the SupplyTroops logic.

```csharp
// Obtain an instance of CustomBattleTroopSupplier from the subsystem API first
CustomBattleTroopSupplier customBattleTroopSupplier = ...;
var result = customBattleTroopSupplier.SupplyTroops(0);
```

### SupplyOneTroop
`public IAgentOriginBase SupplyOneTroop()`

**Purpose:** **Purpose:** Executes the SupplyOneTroop logic.

```csharp
// Obtain an instance of CustomBattleTroopSupplier from the subsystem API first
CustomBattleTroopSupplier customBattleTroopSupplier = ...;
var result = customBattleTroopSupplier.SupplyOneTroop();
```

### GetAllTroops
`public IEnumerable<IAgentOriginBase> GetAllTroops()`

**Purpose:** **Purpose:** Reads and returns the all troops value held by the this instance.

```csharp
// Obtain an instance of CustomBattleTroopSupplier from the subsystem API first
CustomBattleTroopSupplier customBattleTroopSupplier = ...;
var result = customBattleTroopSupplier.GetAllTroops();
```

### GetGeneralCharacter
`public BasicCharacterObject GetGeneralCharacter()`

**Purpose:** **Purpose:** Reads and returns the general character value held by the this instance.

```csharp
// Obtain an instance of CustomBattleTroopSupplier from the subsystem API first
CustomBattleTroopSupplier customBattleTroopSupplier = ...;
var result = customBattleTroopSupplier.GetGeneralCharacter();
```

### OnTroopWounded
`public void OnTroopWounded()`

**Purpose:** **Purpose:** Invoked when the troop wounded event is raised.

```csharp
// Obtain an instance of CustomBattleTroopSupplier from the subsystem API first
CustomBattleTroopSupplier customBattleTroopSupplier = ...;
customBattleTroopSupplier.OnTroopWounded();
```

### OnTroopKilled
`public void OnTroopKilled()`

**Purpose:** **Purpose:** Invoked when the troop killed event is raised.

```csharp
// Obtain an instance of CustomBattleTroopSupplier from the subsystem API first
CustomBattleTroopSupplier customBattleTroopSupplier = ...;
customBattleTroopSupplier.OnTroopKilled();
```

### OnTroopRouted
`public void OnTroopRouted()`

**Purpose:** **Purpose:** Invoked when the troop routed event is raised.

```csharp
// Obtain an instance of CustomBattleTroopSupplier from the subsystem API first
CustomBattleTroopSupplier customBattleTroopSupplier = ...;
customBattleTroopSupplier.OnTroopRouted();
```

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**Purpose:** **Purpose:** Reads and returns the number of player controllable troops value held by the this instance.

```csharp
// Obtain an instance of CustomBattleTroopSupplier from the subsystem API first
CustomBattleTroopSupplier customBattleTroopSupplier = ...;
var result = customBattleTroopSupplier.GetNumberOfPlayerControllableTroops();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CustomBattleTroopSupplier customBattleTroopSupplier = ...;
customBattleTroopSupplier.SupplyTroops(0);
```

## See Also

- [Area Index](../)