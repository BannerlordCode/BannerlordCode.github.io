<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TroopFilteringUtilities`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TroopFilteringUtilities

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class TroopFilteringUtilities`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/TroopFilteringUtilities.cs`

## Overview

`TroopFilteringUtilities` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetFilter
`public static TroopTraitsMask GetFilter(bool isMounted, bool isRanged, bool isMelee, bool hasHeavyArmor, bool hasThrown, bool hasSpear, bool hasShield)`

**Purpose:** Gets the current value of `filter`.

### GetFilter
`public static TroopTraitsMask GetFilter(params FormationClass formationClasses)`

**Purpose:** Gets the current value of `filter`.

### GetFilter
`public static TroopTraitsMask GetFilter(params FormationFilterType filterTypes)`

**Purpose:** Gets the current value of `filter`.

### GetPriorityFunction
`public static void GetPriorityFunction(TroopTraitsMask filter, out Func<Agent, int> priorityFunc)`

**Purpose:** Gets the current value of `priority function`.

### GetPriorityFunction
`public static void GetPriorityFunction(TroopTraitsMask filter, out Func<IAgentOriginBase, int> priorityFunc)`

**Purpose:** Gets the current value of `priority function`.

### GetTroopPriority
`public static int GetTroopPriority(TroopTraitsMask troopMask, int battleTier, TroopTraitsMask filter)`

**Purpose:** Gets the current value of `troop priority`.

### GetMaxPriority
`public static int GetMaxPriority(TroopTraitsMask filter)`

**Purpose:** Gets the current value of `max priority`.

## Usage Example

```csharp
TroopFilteringUtilities.GetFilter(false, false, false, false, false, false, false);
```

## See Also

- [Complete Class Catalog](../catalog)