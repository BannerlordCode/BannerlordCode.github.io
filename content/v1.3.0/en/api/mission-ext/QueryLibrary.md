---
title: "QueryLibrary"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `QueryLibrary`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# QueryLibrary

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class QueryLibrary`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/QueryLibrary.cs`

## Overview

`QueryLibrary` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsInfantry
`public static bool IsInfantry(Agent a)`

**Purpose:** Handles logic related to `is infantry`.

### IsInfantryWithoutBanner
`public static bool IsInfantryWithoutBanner(Agent a)`

**Purpose:** Handles logic related to `is infantry without banner`.

### HasShield
`public static bool HasShield(Agent a)`

**Purpose:** Checks whether the current object has/contains `shield`.

### IsRanged
`public static bool IsRanged(Agent a)`

**Purpose:** Handles logic related to `is ranged`.

### IsRangedWithoutBanner
`public static bool IsRangedWithoutBanner(Agent a)`

**Purpose:** Handles logic related to `is ranged without banner`.

### IsCavalry
`public static bool IsCavalry(Agent a)`

**Purpose:** Handles logic related to `is cavalry`.

### IsCavalryWithoutBanner
`public static bool IsCavalryWithoutBanner(Agent a)`

**Purpose:** Handles logic related to `is cavalry without banner`.

### IsRangedCavalry
`public static bool IsRangedCavalry(Agent a)`

**Purpose:** Handles logic related to `is ranged cavalry`.

### IsRangedCavalryWithoutBanner
`public static bool IsRangedCavalryWithoutBanner(Agent a)`

**Purpose:** Handles logic related to `is ranged cavalry without banner`.

### HasSpear
`public static bool HasSpear(Agent a)`

**Purpose:** Checks whether the current object has/contains `spear`.

### HasThrown
`public static bool HasThrown(Agent a)`

**Purpose:** Checks whether the current object has/contains `thrown`.

### IsHeavy
`public static bool IsHeavy(Agent a)`

**Purpose:** Handles logic related to `is heavy`.

## Usage Example

```csharp
QueryLibrary.IsInfantry(a);
```

## See Also

- [Complete Class Catalog](../catalog)