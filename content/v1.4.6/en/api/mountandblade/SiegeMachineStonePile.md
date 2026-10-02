---
title: "SiegeMachineStonePile"
description: "SiegeMachineStonePile: a public class in TaleWorlds.MountAndBlade, inheriting UsableMachine, ISpawnable; 5 exposed members (5 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/Objects/Usables/SiegeMachineStonePile.cs."
---
# SiegeMachineStonePile

**Namespace:** `TaleWorlds.MountAndBlade.Objects.Usables`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SiegeMachineStonePile : UsableMachine, ISpawnable`
**File:** `TaleWorlds.MountAndBlade/Objects/Usables/SiegeMachineStonePile.cs`

## Overview

SiegeMachineStonePile lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Objects/Usables/SiegeMachineStonePile.cs. It is a public class, implementing/inheriting UsableMachine, ISpawnable; the inheritance chain is SiegeMachineStonePile → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SiegeMachineStonePile is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.Objects.Usables) the module directory; inheritance chain SiegeMachineStonePile → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Objects/Usables/SiegeMachineStonePile.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnInit` | `protected internal override void OnInit()` | method |
| `GetActionTextForStandingPoint` | `public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)` | method |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | method |
| `SetSpawnedFromSpawner` | `public void SetSpawnedFromSpawner()` | method |
| `GetOrder` | `public override OrderType GetOrder(BattleSideEnum side)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface UsableMachine](../UsableMachine)
- [base / interface ISpawnable](../ISpawnable)
- [same namespace AmmoBarrelBase](../AmmoBarrelBase)
- [same namespace ArrowBarrel](../ArrowBarrel)
- [same namespace ClimbingMachine](../ClimbingMachine)
- [same namespace EventTriggeringUsableMachine](../EventTriggeringUsableMachine)
