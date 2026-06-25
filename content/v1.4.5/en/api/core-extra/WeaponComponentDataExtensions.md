---
title: "WeaponComponentDataExtensions"
description: "Auto-generated class reference for WeaponComponentDataExtensions."
---
# WeaponComponentDataExtensions

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class WeaponComponentDataExtensions`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/WeaponComponentDataExtensions.cs`

## Overview

`WeaponComponentDataExtensions` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetModifiedThrustDamage
`public static int GetModifiedThrustDamage(this WeaponComponentData componentData, ItemModifier itemModifier)`

**Purpose:** Reads and returns the `modified thrust damage` value held by the current object.

```csharp
// Static call; no instance required
WeaponComponentDataExtensions.GetModifiedThrustDamage(componentData, itemModifier);
```

### GetModifiedSwingDamage
`public static int GetModifiedSwingDamage(this WeaponComponentData componentData, ItemModifier itemModifier)`

**Purpose:** Reads and returns the `modified swing damage` value held by the current object.

```csharp
// Static call; no instance required
WeaponComponentDataExtensions.GetModifiedSwingDamage(componentData, itemModifier);
```

### GetModifiedMissileDamage
`public static int GetModifiedMissileDamage(this WeaponComponentData componentData, ItemModifier itemModifier)`

**Purpose:** Reads and returns the `modified missile damage` value held by the current object.

```csharp
// Static call; no instance required
WeaponComponentDataExtensions.GetModifiedMissileDamage(componentData, itemModifier);
```

### GetModifiedThrustSpeed
`public static int GetModifiedThrustSpeed(this WeaponComponentData componentData, ItemModifier itemModifier)`

**Purpose:** Reads and returns the `modified thrust speed` value held by the current object.

```csharp
// Static call; no instance required
WeaponComponentDataExtensions.GetModifiedThrustSpeed(componentData, itemModifier);
```

### GetModifiedSwingSpeed
`public static int GetModifiedSwingSpeed(this WeaponComponentData componentData, ItemModifier itemModifier)`

**Purpose:** Reads and returns the `modified swing speed` value held by the current object.

```csharp
// Static call; no instance required
WeaponComponentDataExtensions.GetModifiedSwingSpeed(componentData, itemModifier);
```

### GetModifiedMissileSpeed
`public static int GetModifiedMissileSpeed(this WeaponComponentData componentData, ItemModifier itemModifier)`

**Purpose:** Reads and returns the `modified missile speed` value held by the current object.

```csharp
// Static call; no instance required
WeaponComponentDataExtensions.GetModifiedMissileSpeed(componentData, itemModifier);
```

### GetModifiedHandling
`public static int GetModifiedHandling(this WeaponComponentData componentData, ItemModifier itemModifier)`

**Purpose:** Reads and returns the `modified handling` value held by the current object.

```csharp
// Static call; no instance required
WeaponComponentDataExtensions.GetModifiedHandling(componentData, itemModifier);
```

### GetModifiedStackCount
`public static short GetModifiedStackCount(this WeaponComponentData componentData, ItemModifier itemModifier)`

**Purpose:** Reads and returns the `modified stack count` value held by the current object.

```csharp
// Static call; no instance required
WeaponComponentDataExtensions.GetModifiedStackCount(componentData, itemModifier);
```

### GetModifiedMaximumHitPoints
`public static short GetModifiedMaximumHitPoints(this WeaponComponentData componentData, ItemModifier itemModifier)`

**Purpose:** Reads and returns the `modified maximum hit points` value held by the current object.

```csharp
// Static call; no instance required
WeaponComponentDataExtensions.GetModifiedMaximumHitPoints(componentData, itemModifier);
```

### GetModifiedArmor
`public static int GetModifiedArmor(this WeaponComponentData componentData, ItemModifier itemModifier)`

**Purpose:** Reads and returns the `modified armor` value held by the current object.

```csharp
// Static call; no instance required
WeaponComponentDataExtensions.GetModifiedArmor(componentData, itemModifier);
```

## Usage Example

```csharp
WeaponComponentDataExtensions.GetModifiedThrustDamage(componentData, itemModifier);
```

## See Also

- [Area Index](../)