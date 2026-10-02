---
title: "ClimbingMachine"
description: "ClimbingMachine: a public class in TaleWorlds.MountAndBlade.Objects.Usables, inheriting UsableMachine; 8 exposed members (7 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/Objects/Usables/ClimbingMachine.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ClimbingMachine

**Namespace:** `TaleWorlds.MountAndBlade.Objects.Usables`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class ClimbingMachine : UsableMachine`
**File:** `TaleWorlds.MountAndBlade/Objects/Usables/ClimbingMachine.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ClimbingMachine lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Objects/Usables/ClimbingMachine.cs. It is a public class, implementing/inheriting UsableMachine; the inheritance chain is ClimbingMachine → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. It exposes 8 public/protected members: 7 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ClimbingMachine lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Objects.Usables`, inheritance chain ClimbingMachine → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 7/8, properties 1/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Objects/Usables/ClimbingMachine.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface UsableMachine](../UsableMachine/)
- [same namespace AmmoBarrelBase](../AmmoBarrelBase/)
- [same namespace ArrowBarrel](../ArrowBarrel/)
- [same namespace EventTriggeringUsableMachine](../EventTriggeringUsableMachine/)
- [same namespace JavelinBarrel](../JavelinBarrel/)
