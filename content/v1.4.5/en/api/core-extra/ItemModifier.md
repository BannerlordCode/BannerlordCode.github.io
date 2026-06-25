---
title: "ItemModifier"
description: "Auto-generated class reference for ItemModifier."
---
# ItemModifier

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class ItemModifier : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/ItemModifier.cs`

## Overview

`ItemModifier` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public TextObject Name { get; }` |
| `Damage` | `public int Damage { get; }` |
| `Speed` | `public int Speed { get; }` |
| `MissileSpeed` | `public int MissileSpeed { get; }` |
| `Armor` | `public int Armor { get; }` |
| `HitPoints` | `public short HitPoints { get; }` |
| `StackCount` | `public short StackCount { get; }` |
| `MountSpeed` | `public float MountSpeed { get; }` |
| `Maneuver` | `public float Maneuver { get; }` |
| `ChargeDamage` | `public float ChargeDamage { get; }` |
| `MountHitPoints` | `public float MountHitPoints { get; }` |
| `LootDropScore` | `public float LootDropScore { get; }` |
| `ProductionDropScore` | `public float ProductionDropScore { get; }` |
| `PriceMultiplier` | `public float PriceMultiplier { get; }` |
| `ItemQuality` | `public ItemQuality ItemQuality { get; }` |

## Key Methods

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** **Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of ItemModifier from the subsystem API first
ItemModifier itemModifier = ...;
itemModifier.Deserialize(objectManager, node);
```

### IsBeneficial
`public bool IsBeneficial()`

**Purpose:** **Purpose:** Determines whether the this instance is in the beneficial state or condition.

```csharp
// Obtain an instance of ItemModifier from the subsystem API first
ItemModifier itemModifier = ...;
var result = itemModifier.IsBeneficial();
```

### Equals
`public bool Equals(ItemModifier other)`

**Purpose:** **Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of ItemModifier from the subsystem API first
ItemModifier itemModifier = ...;
var result = itemModifier.Equals(other);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** **Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of ItemModifier from the subsystem API first
ItemModifier itemModifier = ...;
var result = itemModifier.GetHashCode();
```

### ModifyDamage
`public int ModifyDamage(int baseDamage)`

**Purpose:** **Purpose:** Executes the ModifyDamage logic.

```csharp
// Obtain an instance of ItemModifier from the subsystem API first
ItemModifier itemModifier = ...;
var result = itemModifier.ModifyDamage(0);
```

### ModifySpeed
`public int ModifySpeed(int baseSpeed)`

**Purpose:** **Purpose:** Executes the ModifySpeed logic.

```csharp
// Obtain an instance of ItemModifier from the subsystem API first
ItemModifier itemModifier = ...;
var result = itemModifier.ModifySpeed(0);
```

### ModifyMountSpeed
`public int ModifyMountSpeed(int baseSpeed)`

**Purpose:** **Purpose:** Executes the ModifyMountSpeed logic.

```csharp
// Obtain an instance of ItemModifier from the subsystem API first
ItemModifier itemModifier = ...;
var result = itemModifier.ModifyMountSpeed(0);
```

### ModifyMountManeuver
`public int ModifyMountManeuver(int baseManeuver)`

**Purpose:** **Purpose:** Executes the ModifyMountManeuver logic.

```csharp
// Obtain an instance of ItemModifier from the subsystem API first
ItemModifier itemModifier = ...;
var result = itemModifier.ModifyMountManeuver(0);
```

### ModifyMountCharge
`public int ModifyMountCharge(int baseCharge)`

**Purpose:** **Purpose:** Executes the ModifyMountCharge logic.

```csharp
// Obtain an instance of ItemModifier from the subsystem API first
ItemModifier itemModifier = ...;
var result = itemModifier.ModifyMountCharge(0);
```

### ModifyMountHitPoints
`public int ModifyMountHitPoints(int baseCharge)`

**Purpose:** **Purpose:** Executes the ModifyMountHitPoints logic.

```csharp
// Obtain an instance of ItemModifier from the subsystem API first
ItemModifier itemModifier = ...;
var result = itemModifier.ModifyMountHitPoints(0);
```

### ModifyMissileSpeed
`public int ModifyMissileSpeed(int baseSpeed)`

**Purpose:** **Purpose:** Executes the ModifyMissileSpeed logic.

```csharp
// Obtain an instance of ItemModifier from the subsystem API first
ItemModifier itemModifier = ...;
var result = itemModifier.ModifyMissileSpeed(0);
```

### ModifyArmor
`public int ModifyArmor(int armorValue)`

**Purpose:** **Purpose:** Executes the ModifyArmor logic.

```csharp
// Obtain an instance of ItemModifier from the subsystem API first
ItemModifier itemModifier = ...;
var result = itemModifier.ModifyArmor(0);
```

### ModifyHitPoints
`public short ModifyHitPoints(short baseHitPoints)`

**Purpose:** **Purpose:** Executes the ModifyHitPoints logic.

```csharp
// Obtain an instance of ItemModifier from the subsystem API first
ItemModifier itemModifier = ...;
var result = itemModifier.ModifyHitPoints(0);
```

### ModifyStackCount
`public short ModifyStackCount(short baseStackCount)`

**Purpose:** **Purpose:** Executes the ModifyStackCount logic.

```csharp
// Obtain an instance of ItemModifier from the subsystem API first
ItemModifier itemModifier = ...;
var result = itemModifier.ModifyStackCount(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ItemModifier itemModifier = ...;
itemModifier.Deserialize(objectManager, node);
```

## See Also

- [Area Index](../)