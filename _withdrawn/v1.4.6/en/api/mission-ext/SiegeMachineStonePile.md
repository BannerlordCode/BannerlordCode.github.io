---
title: "SiegeMachineStonePile"
description: "SiegeMachineStonePile: a public class in TaleWorlds.MountAndBlade.Objects.Usables, inheriting UsableMachine, ISpawnable; 5 exposed members (5 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/Objects/Usables/SiegeMachineStonePile.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SiegeMachineStonePile

**Namespace:** `TaleWorlds.MountAndBlade.Objects.Usables`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SiegeMachineStonePile : UsableMachine, ISpawnable`
**File:** `TaleWorlds.MountAndBlade/Objects/Usables/SiegeMachineStonePile.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

SiegeMachineStonePile lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Objects/Usables/SiegeMachineStonePile.cs. It is a public class, implementing/inheriting UsableMachine, ISpawnable; the inheritance chain is SiegeMachineStonePile → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SiegeMachineStonePile lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Objects.Usables`, inheritance chain SiegeMachineStonePile → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Objects/Usables/SiegeMachineStonePile.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnInit` | `protected internal override void OnInit()` | method |
| `GetActionTextForStandingPoint` | `public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)` | method |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | method |
| `SetSpawnedFromSpawner` | `public void SetSpawnedFromSpawner()` | method |
| `GetOrder` | `public override OrderType GetOrder(BattleSideEnum side)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface UsableMachine](../UsableMachine/)
- [base / interface ISpawnable](../ISpawnable/)
- [same namespace AmmoBarrelBase](../AmmoBarrelBase/)
- [same namespace ArrowBarrel](../ArrowBarrel/)
- [same namespace ClimbingMachine](../ClimbingMachine/)
- [same namespace EventTriggeringUsableMachine](../EventTriggeringUsableMachine/)
