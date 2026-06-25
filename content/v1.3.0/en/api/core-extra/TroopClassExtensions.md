---
title: "TroopClassExtensions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TroopClassExtensions`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TroopClassExtensions

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class TroopClassExtensions`
**Base:** none
**File:** `TaleWorlds.Core/TroopClassExtensions.cs`

## Overview

`TroopClassExtensions` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsRanged
`public static bool IsRanged(this FormationClass troopClass)`

**Purpose:** Handles logic related to `is ranged`.

### IsMounted
`public static bool IsMounted(this FormationClass troopClass)`

**Purpose:** Handles logic related to `is mounted`.

### IsMeleeInfantry
`public static bool IsMeleeInfantry(this FormationClass troopClass)`

**Purpose:** Handles logic related to `is melee infantry`.

### IsMeleeCavalry
`public static bool IsMeleeCavalry(this FormationClass troopClass)`

**Purpose:** Handles logic related to `is melee cavalry`.

### DefaultClass
`public static FormationClass DefaultClass(this FormationClass troopClass)`

**Purpose:** Handles logic related to `default class`.

### AlternativeClass
`public static FormationClass AlternativeClass(this FormationClass troopClass)`

**Purpose:** Handles logic related to `alternative class`.

### DismountedClass
`public static FormationClass DismountedClass(this FormationClass troopClass)`

**Purpose:** Handles logic related to `dismounted class`.

### IsDefaultTroopClass
`public static bool IsDefaultTroopClass(this FormationClass troopClass)`

**Purpose:** Handles logic related to `is default troop class`.

### IsRegularTroopClass
`public static bool IsRegularTroopClass(this FormationClass troopClass)`

**Purpose:** Handles logic related to `is regular troop class`.

### GetNextSpawnPrioritizedClass
`public static FormationClass GetNextSpawnPrioritizedClass(this FormationClass troopClass)`

**Purpose:** Gets the current value of `next spawn prioritized class`.

## Usage Example

```csharp
TroopClassExtensions.IsRanged(troopClass);
```

## See Also

- [Complete Class Catalog](../catalog)