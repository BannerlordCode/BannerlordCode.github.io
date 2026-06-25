---
title: "BlowWeaponRecord"
description: "Auto-generated class reference for BlowWeaponRecord."
---
# BlowWeaponRecord

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct BlowWeaponRecord`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/BlowWeaponRecord.cs`

## Overview

`BlowWeaponRecord` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsMissile` | `public bool IsMissile { get; }` |
| `IsShield` | `public bool IsShield { get; }` |
| `IsRanged` | `public bool IsRanged { get; }` |
| `IsAmmo` | `public bool IsAmmo { get; }` |

## Key Methods

### FillAsMeleeBlow
`public void FillAsMeleeBlow(ItemObject item, WeaponComponentData weaponComponentData, int affectorWeaponSlot, sbyte weaponAttachBoneIndex)`

**Purpose:** Executes the FillAsMeleeBlow logic.

```csharp
// Obtain an instance of BlowWeaponRecord from the subsystem API first
BlowWeaponRecord blowWeaponRecord = ...;
blowWeaponRecord.FillAsMeleeBlow(item, weaponComponentData, 0, 0);
```

### FillAsMissileBlow
`public void FillAsMissileBlow(ItemObject item, WeaponComponentData weaponComponentData, int missileIndex, sbyte weaponAttachBoneIndex, Vec3 startingPosition, Vec3 currentPosition, Vec3 velocity)`

**Purpose:** Executes the FillAsMissileBlow logic.

```csharp
// Obtain an instance of BlowWeaponRecord from the subsystem API first
BlowWeaponRecord blowWeaponRecord = ...;
blowWeaponRecord.FillAsMissileBlow(item, weaponComponentData, 0, 0, startingPosition, currentPosition, velocity);
```

### HasWeapon
`public bool HasWeapon()`

**Purpose:** Determines whether the this instance already holds weapon.

```csharp
// Obtain an instance of BlowWeaponRecord from the subsystem API first
BlowWeaponRecord blowWeaponRecord = ...;
var result = blowWeaponRecord.HasWeapon();
```

### GetHitSound
`public int GetHitSound(bool isOwnerHumanoid, bool isCriticalBlow, bool isLowBlow, bool isNonTipThrust, AgentAttackType attackType, DamageTypes damageType)`

**Purpose:** Reads and returns the hit sound value held by the this instance.

```csharp
// Obtain an instance of BlowWeaponRecord from the subsystem API first
BlowWeaponRecord blowWeaponRecord = ...;
var result = blowWeaponRecord.GetHitSound(false, false, false, false, attackType, damageType);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BlowWeaponRecord blowWeaponRecord = ...;
blowWeaponRecord.FillAsMeleeBlow(item, weaponComponentData, 0, 0);
```

## See Also

- [Area Index](../)