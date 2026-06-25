---
title: "BlowWeaponRecord"
description: "Auto-generated class reference for BlowWeaponRecord."
---
# BlowWeaponRecord

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct BlowWeaponRecord`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BlowWeaponRecord.cs`

## Overview

`BlowWeaponRecord` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsShield` | `public bool IsShield { get; }` |
| `IsAmmo` | `public bool IsAmmo { get; }` |

## Key Methods

### FillAsMeleeBlow
`public void FillAsMeleeBlow(ItemObject item, WeaponComponentData weaponComponentData, int affectorWeaponSlot, sbyte weaponAttachBoneIndex)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of BlowWeaponRecord from the subsystem API first
BlowWeaponRecord blowWeaponRecord = ...;
blowWeaponRecord.FillAsMeleeBlow(item, weaponComponentData, 0, 0);
```

### FillAsMissileBlow
`public void FillAsMissileBlow(ItemObject item, WeaponComponentData weaponComponentData, int missileIndex, sbyte weaponAttachBoneIndex, Vec3 startingPosition, Vec3 currentPosition, Vec3 velocity)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of BlowWeaponRecord from the subsystem API first
BlowWeaponRecord blowWeaponRecord = ...;
blowWeaponRecord.FillAsMissileBlow(item, weaponComponentData, 0, 0, startingPosition, currentPosition, velocity);
```

### HasWeapon
`public bool HasWeapon()`

**Purpose:** Determines whether the current object already holds `weapon`.

```csharp
// Obtain an instance of BlowWeaponRecord from the subsystem API first
BlowWeaponRecord blowWeaponRecord = ...;
var result = blowWeaponRecord.HasWeapon();
```

### GetHitSound
`public int GetHitSound(bool isOwnerHumanoid, bool isCriticalBlow, bool isLowBlow, bool isNonTipThrust, AgentAttackType attackType, DamageTypes damageType)`

**Purpose:** Reads and returns the `hit sound` value held by the current object.

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