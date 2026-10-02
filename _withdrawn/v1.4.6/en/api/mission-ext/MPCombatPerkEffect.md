---
title: "MPCombatPerkEffect"
description: "MPCombatPerkEffect: a public class in TaleWorlds.MountAndBlade, inheriting MPPerkEffect; 5 exposed members (3 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/MPCombatPerkEffect.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MPCombatPerkEffect

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade.Multiplayer`
**Type:** `public abstract class MPCombatPerkEffect : MPPerkEffect`
**File:** `TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/MPCombatPerkEffect.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MPCombatPerkEffect lives in the TaleWorlds.MountAndBlade.Multiplayer module, source file TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/MPCombatPerkEffect.cs. It is a public class (abstract), implementing/inheriting MPPerkEffect; the inheritance chain is MPCombatPerkEffect → MPPerkEffect → MPPerkEffectBase. It exposes 5 public/protected members: 3 methods, 1 properties, 1 nested types. The decompiler split this type across 2 source files; the signatures are merged.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MPCombatPerkEffect lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MPCombatPerkEffect → MPPerkEffect → MPPerkEffectBase. The surface is method-led (methods 3/5, properties 1/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/MPCombatPerkEffect.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Deserialize` | `protected override void Deserialize(XmlNode node)` | method |
| `IsSatisfied` | `protected bool IsSatisfied(WeaponComponentData attackerWeapon, DamageTypes damageType)` | method |
| `IsWeaponRanged` | `protected bool IsWeaponRanged(WeaponComponentData attackerWeapon)` | method |
| `HitType` | `protected enum HitType` | property |
| `HitType` | `protected enum HitType` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MPPerkEffect](../MPPerkEffect/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
