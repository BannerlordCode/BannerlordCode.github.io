---
title: "ClimbingMachine"
description: "ClimbingMachine: a public class in TaleWorlds.MountAndBlade, inheriting UsableMachine; 8 exposed members (7 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade/Objects/Usables/ClimbingMachine.cs."
---
# ClimbingMachine

**Namespace:** `TaleWorlds.MountAndBlade.Objects.Usables`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ClimbingMachine : UsableMachine`
**File:** `TaleWorlds.MountAndBlade/Objects/Usables/ClimbingMachine.cs`

## Overview

ClimbingMachine lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Objects/Usables/ClimbingMachine.cs. It is a public class, implementing/inheriting UsableMachine; the inheritance chain is ClimbingMachine → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior. It exposes 8 public/protected members: 7 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClimbingMachine is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.Objects.Usables) the module directory; inheritance chain ClimbingMachine → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior. The surface is method-led (methods 7/8, properties 1/8), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Objects/Usables/ClimbingMachine.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SinkingReferenceOffset` | `public override float SinkingReferenceOffset` | property |
| `GetActionTextForStandingPoint` | `public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)` | method |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | method |
| `OnInit` | `protected internal override void OnInit()` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnDeploymentFinished` | `public override void OnDeploymentFinished()` | method |
| `OnTick` | `protected internal override void OnTick(float dt)` | method |
| `OnMissionEnded` | `public override void OnMissionEnded()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface UsableMachine](../UsableMachine)
- [same namespace AmmoBarrelBase](../AmmoBarrelBase)
- [same namespace ArrowBarrel](../ArrowBarrel)
- [same namespace EventTriggeringUsableMachine](../EventTriggeringUsableMachine)
- [same namespace JavelinBarrel](../JavelinBarrel)
