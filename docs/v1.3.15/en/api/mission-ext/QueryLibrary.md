<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `QueryLibrary`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# QueryLibrary

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public static class QueryLibrary`
**Area:** mission-ext

## Overview

`QueryLibrary` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
// Prepare the required context, then call the static entry point directly
QueryLibrary.IsInfantry(a);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
