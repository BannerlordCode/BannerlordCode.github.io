---
title: "TroopTraitsMaskExtensions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TroopTraitsMaskExtensions`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TroopTraitsMaskExtensions

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class TroopTraitsMaskExtensions`
**Area:** core-extra

## Overview

`TroopTraitsMaskExtensions` lives in `TaleWorlds.Core`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### HasMelee
`public static bool HasMelee(this TroopTraitsMask troopTraitsMask)`

**Purpose:** Checks whether the current object has/contains `melee`.

### HasRanged
`public static bool HasRanged(this TroopTraitsMask troopTraitsMask)`

**Purpose:** Checks whether the current object has/contains `ranged`.

### HasMount
`public static bool HasMount(this TroopTraitsMask troopTraitsMask)`

**Purpose:** Checks whether the current object has/contains `mount`.

### HasArmor
`public static bool HasArmor(this TroopTraitsMask troopTraitsMask)`

**Purpose:** Checks whether the current object has/contains `armor`.

### HasThrown
`public static bool HasThrown(this TroopTraitsMask troopTraitsMask)`

**Purpose:** Checks whether the current object has/contains `thrown`.

### HasSpear
`public static bool HasSpear(this TroopTraitsMask troopTraitsMask)`

**Purpose:** Checks whether the current object has/contains `spear`.

### HasShield
`public static bool HasShield(this TroopTraitsMask troopTraitsMask)`

**Purpose:** Checks whether the current object has/contains `shield`.

### HasLowTier
`public static bool HasLowTier(this TroopTraitsMask troopFilterMask)`

**Purpose:** Checks whether the current object has/contains `low tier`.

### HasHighTier
`public static bool HasHighTier(this TroopTraitsMask troopFilterMask)`

**Purpose:** Checks whether the current object has/contains `high tier`.

### GetTroopTraitsText
`public static string GetTroopTraitsText(this TroopTraitsMask troopTraitsMask)`

**Purpose:** Gets the current value of `troop traits text`.

### GetTraitsFilterText
`public static string GetTraitsFilterText(this TroopTraitsMask troopTraitsFilter)`

**Purpose:** Gets the current value of `traits filter text`.

### GetClassFilterText
`public static string GetClassFilterText(this TroopTraitsMask troopTraitsFilter)`

**Purpose:** Gets the current value of `class filter text`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
TroopTraitsMaskExtensions.HasMelee(troopTraitsMask);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
