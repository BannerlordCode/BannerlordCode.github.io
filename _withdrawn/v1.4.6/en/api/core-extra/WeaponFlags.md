---
title: "WeaponFlags"
description: "WeaponFlags: a public enum in TaleWorlds.Core, inheriting ulong; 41 exposed members (0 methods, 0 properties, 0 fields). Canonical bucket core-extra. Source: TaleWorlds.Core/WeaponFlags.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# WeaponFlags

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public enum WeaponFlags : ulong`
**File:** `TaleWorlds.Core/WeaponFlags.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## Overview

WeaponFlags lives in the TaleWorlds.Core module, source file TaleWorlds.Core/WeaponFlags.cs. It is a public enum, implementing/inheriting ulong; the inheritance chain is WeaponFlags → ulong. It exposes 41 public/protected members: 41 enum values.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WeaponFlags lands in canonical bucket `core-extra` (matched rule `rule:TaleWorlds.Core`), namespace `TaleWorlds.Core`, inheritance chain WeaponFlags → ulong. The surface is method-led (methods 0/41, properties 0/41), so it mostly exposes operations. ulong on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.Core/WeaponFlags.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `1UL` | `MeleeWeapon == 1UL` | enum value |
| `2UL` | `RangedWeapon == 2UL` | enum value |
| `3UL` | `WeaponMask == 3UL` | enum value |
| `4UL` | `FirearmAmmo == 4UL` | enum value |
| `16UL` | `NotUsableWithOneHand == 16UL` | enum value |
| `32UL` | `NotUsableWithTwoHand == 32UL` | enum value |
| `48UL` | `HandUsageMask == 48UL` | enum value |
| `64UL` | `WideGrip == 64UL` | enum value |
| `128UL` | `AttachAmmoToVisual == 128UL` | enum value |
| `256UL` | `Consumable == 256UL` | enum value |
| `512UL` | `HasHitPoints == 512UL` | enum value |
| `768UL` | `DataValueMask == 768UL` | enum value |
| `1024UL` | `HasString == 1024UL` | enum value |
| `3072UL` | `StringHeldByHand == 3072UL` | enum value |
| `4096UL` | `UnloadWhenSheathed == 4096UL` | enum value |
| `8192UL` | `AffectsArea == 8192UL` | enum value |
| `16384UL` | `AffectsAreaBig == 16384UL` | enum value |
| `32768UL` | `Burning == 32768UL` | enum value |
| `65536UL` | `BonusAgainstShield == 65536UL` | enum value |
| `131072UL` | `CanPenetrateShield == 131072UL` | enum value |
| `262144UL` | `CantReloadOnHorseback == 262144UL` | enum value |
| `524288UL` | `AutoReload == 524288UL` | enum value |
| `1048576UL` | `CanBeUsedWhileCrouched == 1048576UL` | enum value |
| `2097152UL` | `TwoHandIdleOnMount == 2097152UL` | enum value |
| `4194304UL` | `NoBlood == 4194304UL` | enum value |
| `8388608UL` | `PenaltyWithShield == 8388608UL` | enum value |
| `16777216UL` | `CanDismount == 16777216UL` | enum value |
| `33554432UL` | `CanHook == 33554432UL` | enum value |
| `67108864UL` | `CanKnockDown == 67108864UL` | enum value |
| `134217728UL` | `CanCrushThrough == 134217728UL` | enum value |
| `268435456UL` | `CanBlockRanged == 268435456UL` | enum value |
| `536870912UL` | `MissileWithPhysics == 536870912UL` | enum value |
| `1073741824UL` | `MultiplePenetration == 1073741824UL` | enum value |
| `2147483648UL` | `LeavesTrail == 2147483648UL` | enum value |
| `4294967296UL` | `UseHandAsThrowBase == 4294967296UL` | enum value |
| `8589934592UL` | `HeldBackwards == 8589934592UL` | enum value |
| `17179869184UL` | `CanKillEvenIfBlunt == 17179869184UL` | enum value |
| `68719476736UL` | `AmmoBreaksOnBounceBack == 68719476736UL` | enum value |
| `137438953472UL` | `AmmoCanBreakOnBounceBack == 137438953472UL` | enum value |
| `206158430208UL` | `AmmoBreakOnBounceBackMask == 206158430208UL` | enum value |
| `274877906944UL` | `AmmoSticksWhenShot == 274877906944UL` | enum value |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionSetCode](../ActionSetCode/)
- [same namespace AgentAttackType](../AgentAttackType/)
- [same namespace AgentControllerType](../AgentControllerType/)
- [same namespace AgentData](../AgentData/)
