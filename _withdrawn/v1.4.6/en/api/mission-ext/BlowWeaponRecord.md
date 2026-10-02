---
title: "BlowWeaponRecord"
description: "BlowWeaponRecord: a public struct in TaleWorlds.MountAndBlade; 8 exposed members (4 methods, 4 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/BlowWeaponRecord.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BlowWeaponRecord

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public struct BlowWeaponRecord`
**File:** `TaleWorlds.MountAndBlade/BlowWeaponRecord.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

BlowWeaponRecord lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/BlowWeaponRecord.cs. It is a public struct; the inheritance chain is BlowWeaponRecord. It exposes 8 public/protected members: 4 methods, 4 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BlowWeaponRecord lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain BlowWeaponRecord. The surface is method-led (methods 4/8, properties 4/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/BlowWeaponRecord.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `FillAsMeleeBlow` | `public void FillAsMeleeBlow(ItemObject item, WeaponComponentData weaponComponentData, int affectorWeaponSlot, sbyte weaponAttachBoneIndex)` | method |
| `FillAsMissileBlow` | `public void FillAsMissileBlow(ItemObject item, WeaponComponentData weaponComponentData, int missileIndex, sbyte weaponAttachBoneIndex, Vec3 startingPosition, Vec3 currentPosition, Vec3 velocity)` | method |
| `HasWeapon` | `public bool HasWeapon()` | method |
| `IsMissile` | `public bool IsMissile` | property |
| `IsShield` | `public bool IsShield` | property |
| `IsRanged` | `public bool IsRanged` | property |
| `IsAmmo` | `public bool IsAmmo` | property |
| `GetHitSound` | `public int GetHitSound(bool isOwnerHumanoid, bool isCriticalBlow, bool isLowBlow, bool isNonTipThrust, AgentAttackType attackType, DamageTypes damageType)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
