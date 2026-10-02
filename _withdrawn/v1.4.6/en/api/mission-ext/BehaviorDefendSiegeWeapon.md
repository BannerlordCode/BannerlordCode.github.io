---
title: "BehaviorDefendSiegeWeapon"
description: "BehaviorDefendSiegeWeapon: a public class in TaleWorlds.MountAndBlade, inheriting BehaviorComponent; 9 exposed members (8 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/BehaviorDefendSiegeWeapon.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BehaviorDefendSiegeWeapon

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BehaviorDefendSiegeWeapon : BehaviorComponent`
**File:** `TaleWorlds.MountAndBlade/BehaviorDefendSiegeWeapon.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

BehaviorDefendSiegeWeapon lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/BehaviorDefendSiegeWeapon.cs. It is a public class, implementing/inheriting BehaviorComponent; the inheritance chain is BehaviorDefendSiegeWeapon → BehaviorComponent. It exposes 9 public/protected members: 8 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BehaviorDefendSiegeWeapon lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain BehaviorDefendSiegeWeapon → BehaviorComponent. The surface is method-led (methods 8/9, properties 0/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/BehaviorDefendSiegeWeapon.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `BehaviorDefendSiegeWeapon` | `public BehaviorDefendSiegeWeapon(Formation formation) : base(formation)` | constructor |
| `SetDefensePositionFromTactic` | `public void SetDefensePositionFromTactic(WorldPosition defensePosition)` | method |
| `SetDefendedSiegeWeaponFromTactic` | `public void SetDefendedSiegeWeaponFromTactic(SiegeWeapon siegeWeapon)` | method |
| `GetBehaviorString` | `public override TextObject GetBehaviorString()` | method |
| `CalculateCurrentOrder` | `protected override void CalculateCurrentOrder()` | method |
| `TickOccasionally` | `public override void TickOccasionally()` | method |
| `OnBehaviorActivatedAux` | `protected override void OnBehaviorActivatedAux()` | method |
| `ResetBehavior` | `public override void ResetBehavior()` | method |
| `GetAiWeight` | `protected override float GetAiWeight()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface BehaviorComponent](../BehaviorComponent/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
