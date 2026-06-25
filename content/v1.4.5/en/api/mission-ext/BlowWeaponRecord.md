---
title: "BlowWeaponRecord"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BlowWeaponRecord`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BlowWeaponRecord

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct BlowWeaponRecord`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BlowWeaponRecord.cs`

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

**Purpose:** Handles logic related to `fill as melee blow`.

### FillAsMissileBlow
`public void FillAsMissileBlow(ItemObject item, WeaponComponentData weaponComponentData, int missileIndex, sbyte weaponAttachBoneIndex, Vec3 startingPosition, Vec3 currentPosition, Vec3 velocity)`

**Purpose:** Handles logic related to `fill as missile blow`.

### HasWeapon
`public bool HasWeapon()`

**Purpose:** Checks whether the current object has/contains `weapon`.

### GetHitSound
`public int GetHitSound(bool isOwnerHumanoid, bool isCriticalBlow, bool isLowBlow, bool isNonTipThrust, AgentAttackType attackType, DamageTypes damageType)`

**Purpose:** Gets the current value of `hit sound`.

## Usage Example

```csharp
var value = new BlowWeaponRecord();
value.FillAsMeleeBlow(item, weaponComponentData, 0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)