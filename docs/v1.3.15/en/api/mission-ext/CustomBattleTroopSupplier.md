<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleTroopSupplier`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `supply troops`.

### SupplyOneTroop
`public IAgentOriginBase SupplyOneTroop()`

**Purpose:** Handles logic related to `supply one troop`.

### GetAllTroops
`public IEnumerable<IAgentOriginBase> GetAllTroops()`

**Purpose:** Gets the current value of `all troops`.

### GetGeneralCharacter
`public BasicCharacterObject GetGeneralCharacter()`

**Purpose:** Gets the current value of `general character`.

### OnTroopWounded
`public void OnTroopWounded()`

**Purpose:** Called when the `troop wounded` event is raised.

### OnTroopKilled
`public void OnTroopKilled()`

**Purpose:** Called when the `troop killed` event is raised.

### OnTroopRouted
`public void OnTroopRouted()`

**Purpose:** Called when the `troop routed` event is raised.

### GetNumberOfPlayerControllableTroops
`public int GetNumberOfPlayerControllableTroops()`

**Purpose:** Gets the current value of `number of player controllable troops`.

## Usage Example

```csharp
var value = new CustomBattleTroopSupplier();
value.SupplyTroops(0);
```

## See Also

- [Complete Class Catalog](../catalog)