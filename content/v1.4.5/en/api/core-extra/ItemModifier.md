---
title: "ItemModifier"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemModifier`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ItemModifier

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class ItemModifier : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/ItemModifier.cs`

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

**Purpose:** Handles logic related to `deserialize`.

### IsBeneficial
`public bool IsBeneficial()`

**Purpose:** Handles logic related to `is beneficial`.

### Equals
`public bool Equals(ItemModifier other)`

**Purpose:** Handles logic related to `equals`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### ModifyDamage
`public int ModifyDamage(int baseDamage)`

**Purpose:** Handles logic related to `modify damage`.

### ModifySpeed
`public int ModifySpeed(int baseSpeed)`

**Purpose:** Handles logic related to `modify speed`.

### ModifyMountSpeed
`public int ModifyMountSpeed(int baseSpeed)`

**Purpose:** Handles logic related to `modify mount speed`.

### ModifyMountManeuver
`public int ModifyMountManeuver(int baseManeuver)`

**Purpose:** Handles logic related to `modify mount maneuver`.

### ModifyMountCharge
`public int ModifyMountCharge(int baseCharge)`

**Purpose:** Handles logic related to `modify mount charge`.

### ModifyMountHitPoints
`public int ModifyMountHitPoints(int baseCharge)`

**Purpose:** Handles logic related to `modify mount hit points`.

### ModifyMissileSpeed
`public int ModifyMissileSpeed(int baseSpeed)`

**Purpose:** Handles logic related to `modify missile speed`.

### ModifyArmor
`public int ModifyArmor(int armorValue)`

**Purpose:** Handles logic related to `modify armor`.

### ModifyHitPoints
`public short ModifyHitPoints(short baseHitPoints)`

**Purpose:** Handles logic related to `modify hit points`.

### ModifyStackCount
`public short ModifyStackCount(short baseStackCount)`

**Purpose:** Handles logic related to `modify stack count`.

## Usage Example

```csharp
var value = new ItemModifier();
value.Deserialize(objectManager, node);
```

## See Also

- [Complete Class Catalog](../catalog)