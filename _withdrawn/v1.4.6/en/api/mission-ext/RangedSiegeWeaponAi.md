---
title: "RangedSiegeWeaponAi"
description: "RangedSiegeWeaponAi: a public class in TaleWorlds.MountAndBlade, inheriting UsableMachineAIBase; 8 exposed members (4 methods, 1 properties, 1 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/RangedSiegeWeaponAi.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# RangedSiegeWeaponAi

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class RangedSiegeWeaponAi : UsableMachineAIBase`
**File:** `TaleWorlds.MountAndBlade/RangedSiegeWeaponAi.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

RangedSiegeWeaponAi lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/RangedSiegeWeaponAi.cs. It is a public class (abstract), implementing/inheriting UsableMachineAIBase; the inheritance chain is RangedSiegeWeaponAi → UsableMachineAIBase. It exposes 8 public/protected members: 4 methods, 1 properties, 1 fields, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RangedSiegeWeaponAi lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain RangedSiegeWeaponAi → UsableMachineAIBase. The surface is method-led (methods 4/8, properties 1/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/RangedSiegeWeaponAi.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RangedSiegeWeaponAi` | `public RangedSiegeWeaponAi(RangedSiegeWeapon rangedSiegeWeapon) : base(rangedSiegeWeapon)` | constructor |
| `InitializeThreatSeeker` | `public void InitializeThreatSeeker()` | method |
| `OnTick` | `protected override void OnTick(Agent agentToCompareTo, Formation formationToCompareTo, Team potentialUsersTeam, float dt)` | method |
| `UpdateAim` | `protected virtual void UpdateAim(RangedSiegeWeapon rangedSiegeWeapon, float dt)` | method |
| `FindNextTarget` | `public void FindNextTarget()` | method |
| `ForceTargetEntityTag` | `public const string ForceTargetEntityTag` | field |
| `ThreatSeeker` | `public class ThreatSeeker` | property |
| `ThreatSeeker` | `public class ThreatSeeker` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface UsableMachineAIBase](../UsableMachineAIBase/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
