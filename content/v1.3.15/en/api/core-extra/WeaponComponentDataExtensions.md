---
title: "WeaponComponentDataExtensions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WeaponComponentDataExtensions`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# WeaponComponentDataExtensions

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class WeaponComponentDataExtensions`
**Area:** core-extra

## Overview

`WeaponComponentDataExtensions` lives in `TaleWorlds.Core`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetModifiedThrustDamage
`public static int GetModifiedThrustDamage(this WeaponComponentData componentData, ItemModifier itemModifier)`

**Purpose:** Gets the current value of `modified thrust damage`.

### GetModifiedSwingDamage
`public static int GetModifiedSwingDamage(this WeaponComponentData componentData, ItemModifier itemModifier)`

**Purpose:** Gets the current value of `modified swing damage`.

### GetModifiedMissileDamage
`public static int GetModifiedMissileDamage(this WeaponComponentData componentData, ItemModifier itemModifier)`

**Purpose:** Gets the current value of `modified missile damage`.

### GetModifiedThrustSpeed
`public static int GetModifiedThrustSpeed(this WeaponComponentData componentData, ItemModifier itemModifier)`

**Purpose:** Gets the current value of `modified thrust speed`.

### GetModifiedSwingSpeed
`public static int GetModifiedSwingSpeed(this WeaponComponentData componentData, ItemModifier itemModifier)`

**Purpose:** Gets the current value of `modified swing speed`.

### GetModifiedMissileSpeed
`public static int GetModifiedMissileSpeed(this WeaponComponentData componentData, ItemModifier itemModifier)`

**Purpose:** Gets the current value of `modified missile speed`.

### GetModifiedHandling
`public static int GetModifiedHandling(this WeaponComponentData componentData, ItemModifier itemModifier)`

**Purpose:** Gets the current value of `modified handling`.

### GetModifiedStackCount
`public static short GetModifiedStackCount(this WeaponComponentData componentData, ItemModifier itemModifier)`

**Purpose:** Gets the current value of `modified stack count`.

### GetModifiedMaximumHitPoints
`public static short GetModifiedMaximumHitPoints(this WeaponComponentData componentData, ItemModifier itemModifier)`

**Purpose:** Gets the current value of `modified maximum hit points`.

### GetModifiedArmor
`public static int GetModifiedArmor(this WeaponComponentData componentData, ItemModifier itemModifier)`

**Purpose:** Gets the current value of `modified armor`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
WeaponComponentDataExtensions.GetModifiedThrustDamage(componentData, itemModifier);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
