---
title: "WeaponStatsData"
description: "Auto-generated class reference for WeaponStatsData."
---
# WeaponStatsData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct WeaponStatsData`
**Base:** none
**File:** `TaleWorlds.MountAndBlade/WeaponStatsData.cs`

## Overview

`WeaponStatsData` is an `EngineStruct` — a struct whose layout is mirrored into native code as `Weapon_stats_data` (`WeaponStatsData.cs:8`, `WeaponStatsData.cs:9`). It is a plain field bag with no properties, no methods and no constructor: roughly two dozen public mutable fields carrying one weapon's performance numbers between managed code and the native weapon engine.

The field split follows the engine's data model rather than any OO design. Physical quantities are `int` (`ThrustSpeed`, `SwingSpeed`, `MissileSpeed`, `WeaponLength`, `ThrustDamage`, `SwingDamage`, `DefendSpeed`, `Accuracy`, `ShieldArmor`). Two handle-shaped values are wider: `WeaponFrame` is a `MatrixFrame` describing the weapon's attach transform, and `WeaponFlags` is a `ulong` rather than the `int` the managed `WeaponFlags` enum uses. `WeaponBalance` and `SweetSpot` are the only `float`s. `MaxDataValue` and `ReloadPhaseCount` are `short` (`WeaponStatsData.cs:66`). `ThrustDamageType` and `SwingDamageType` are `int` carrying the `DamageTypes` value as a number, not as the enum.

There is no validation anywhere, because there is no code. Any two `WeaponStatsData` values are structurally compatible and neither knows whether the numbers are coherent.

## Mental Model

The decisive property is that this is a **marshalling shape, not a domain object**. The `[EngineStruct("Weapon_stats_data", false, null)]` attribute names the native struct and declares it blittable, so the layout must match native memory exactly. That has three consequences worth stating plainly.

First, field order and types are part of the contract. Reordering the fields, or changing `WeaponFlags` from `ulong` to something narrower, breaks the native side silently rather than at compile time in managed code. Add new fields only at the end and only if the native struct has room.

Second, `WeaponFlags` being a `ulong` while the managed `WeaponFlags` enum is not is a genuine trap. A field declared as `ulong` holding bits from the managed enum is fine, but any code that assigns the enum directly without a cast produces a compile error, and any code that casts the *wrong* way truncates. Read it with `SetFlags`/`HasAnyFlag` semantics deliberately rather than assuming the two types are interchangeable.

Third, because every field is public and mutable, there is no invariant to protect. A `WeaponStatsData` with `SwingDamageType` holding a value that is not a valid `DamageTypes` member is representable and will be passed to native code unchanged. If you build one, build it through the managed `WeaponData`/`WeaponComponentData` path where possible, and treat this struct as the transport rather than as the place to hold game state.

The two `DamageTypes` fields being `int` rather than the enum is the same class of issue in miniature: the compiler will not stop you storing a cast that no longer corresponds to a defined member.

## How to use

**Getting it.** You construct it directly — there is no factory and no engine-side constructor call exposed here:

```csharp
var stats = new WeaponStatsData();
stats.WeaponClass = (int)WeaponClass.OneHandedSword;
stats.SwingDamage = 42;
stats.ThrustDamageType = (int)DamageTypes.Cut;
stats.SwingDamageType  = (int)DamageTypes.Cut;
stats.WeaponFlags = (ulong)WeaponFlags.CanBlock;
```

**Typical use** — pairing it with the managed weapon data it mirrors, for a native call:

```csharp
WeaponComponentData managed = item.PrimaryWeapon;
var stats = new WeaponStatsData
{
    WeaponClass    = (int)managed.WeaponClass,
    SwingSpeed     = managed.SwingSpeed,
    WeaponLength   = (int)managed.GetRealWeaponLength(),
    TotalInertia   = 0,   // not carried on this struct; set if the native path needs it
    WeaponBalance  = managed.WeaponBalance,
    WeaponFlags    = (ulong)managed.GetWeaponFlags()
};
// Pass to the native weapon interface; do not retain it as game state.
```

**Typical use** — reading it back out of a native result:

```csharp
MBDebug.Print("native swing damage type: " + (DamageTypes)stats.SwingDamageType);
MBDebug.Print("has CanBlock: " + stats.WeaponFlags.HasFlag((ulong)WeaponFlags.CanBlock));
```

**Most common mistake, and what it costs.** Adding a field to this struct, or reordering the existing ones, because it is a convenient bag for mod data. The attribute marks it blittable and names it for the native side, so the layout is not yours to change: a reorder or a widened type shifts every subsequent field and the native code reads the wrong values for weapon class, damage and speed — with no managed-side exception, because the marshalling is still perfectly valid C#. The cost appears as combat behaving nonsensically in one specific dimension — plausible-looking but wrong damage, or a weapon class that reads as something else entirely — which is very hard to trace back to a struct definition. Put mod-specific data in your own struct and convert at the boundary; leave this one's field list exactly as the native struct defines it.

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
WeaponStatsData entry = ...;
```

## See Also

- [Area Index](../)
- [WeaponData](../WeaponData)
- [WeaponStatsData (中文页面)](../../../../zh/api/mission-ext/WeaponStatsData)
- [Agent](../../mission/Agent)
- [MissionLogic](../MissionLogic)