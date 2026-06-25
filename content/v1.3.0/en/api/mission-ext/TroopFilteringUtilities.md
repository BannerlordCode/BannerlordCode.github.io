---
title: "TroopFilteringUtilities"
description: "Auto-generated class reference for TroopFilteringUtilities."
---
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

**Purpose:** Reads and returns the filter value held by the this instance.

```csharp
// Static call; no instance required
TroopFilteringUtilities.GetFilter(false, false, false, false, false, false, false);
```

### GetFilter
`public static TroopTraitsMask GetFilter(params FormationClass formationClasses)`

**Purpose:** Reads and returns the filter value held by the this instance.

```csharp
// Static call; no instance required
TroopFilteringUtilities.GetFilter(formationClasses);
```

### GetFilter
`public static TroopTraitsMask GetFilter(params FormationFilterType filterTypes)`

**Purpose:** Reads and returns the filter value held by the this instance.

```csharp
// Static call; no instance required
TroopFilteringUtilities.GetFilter(filterTypes);
```

### GetPriorityFunction
`public static void GetPriorityFunction(TroopTraitsMask filter, out Func<Agent, int> priorityFunc)`

**Purpose:** Reads and returns the priority function value held by the this instance.

```csharp
// Static call; no instance required
TroopFilteringUtilities.GetPriorityFunction(filter, func<Agent, 0);
```

### GetPriorityFunction
`public static void GetPriorityFunction(TroopTraitsMask filter, out Func<IAgentOriginBase, int> priorityFunc)`

**Purpose:** Reads and returns the priority function value held by the this instance.

```csharp
// Static call; no instance required
TroopFilteringUtilities.GetPriorityFunction(filter, func<IAgentOriginBase, 0);
```

### GetTroopPriority
`public static int GetTroopPriority(TroopTraitsMask troopMask, int battleTier, TroopTraitsMask filter)`

**Purpose:** Reads and returns the troop priority value held by the this instance.

```csharp
// Static call; no instance required
TroopFilteringUtilities.GetTroopPriority(troopMask, 0, filter);
```

### GetMaxPriority
`public static int GetMaxPriority(TroopTraitsMask filter)`

**Purpose:** Reads and returns the max priority value held by the this instance.

```csharp
// Static call; no instance required
TroopFilteringUtilities.GetMaxPriority(filter);
```

## Usage Example

```csharp
TroopFilteringUtilities.GetFilter(false, false, false, false, false, false, false);
```

## See Also

- [Area Index](../)