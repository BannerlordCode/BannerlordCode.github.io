---
title: "AmmoBarrelBase"
description: "AmmoBarrelBase: a public class in TaleWorlds.MountAndBlade.Objects.Usables, inheriting UsableMachine; 11 exposed members (10 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/Objects/Usables/AmmoBarrelBase.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AmmoBarrelBase

**Namespace:** `TaleWorlds.MountAndBlade.Objects.Usables`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class AmmoBarrelBase : UsableMachine`
**File:** `TaleWorlds.MountAndBlade/Objects/Usables/AmmoBarrelBase.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

AmmoBarrelBase lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Objects/Usables/AmmoBarrelBase.cs. It is a public class (abstract), implementing/inheriting UsableMachine; the inheritance chain is AmmoBarrelBase → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. It exposes 11 public/protected members: 10 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AmmoBarrelBase lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Objects.Usables`, inheritance chain AmmoBarrelBase → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 10/11, properties 0/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Objects/Usables/AmmoBarrelBase.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `AmmoBarrelBase` | `public AmmoBarrelBase()` | constructor |
| `OnInit` | `protected internal override void OnInit()` | method |
| `WeaponClass[]GetRequiredWeaponClasses` | `protected abstract WeaponClass[]GetRequiredWeaponClasses();` | method |
| `OnDeploymentFinished` | `public override void OnDeploymentFinished()` | method |
| `GetSoundEvent` | `protected abstract int GetSoundEvent();` | method |
| `GetActionTextForStandingPoint` | `public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)` | method |
| `GetDescriptionText` | `public abstract override TextObject GetDescriptionText(WeakGameEntity gameEntity);` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnTickParallel` | `protected internal override void OnTickParallel(float dt)` | method |
| `OnTick` | `protected internal override void OnTick(float dt)` | method |
| `GetOrder` | `public override OrderType GetOrder(BattleSideEnum side)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface UsableMachine](../UsableMachine/)
- [same namespace ArrowBarrel](../ArrowBarrel/)
- [same namespace ClimbingMachine](../ClimbingMachine/)
- [same namespace EventTriggeringUsableMachine](../EventTriggeringUsableMachine/)
- [same namespace JavelinBarrel](../JavelinBarrel/)
