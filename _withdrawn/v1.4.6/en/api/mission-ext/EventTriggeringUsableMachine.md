---
title: "EventTriggeringUsableMachine"
description: "EventTriggeringUsableMachine: a public class in TaleWorlds.MountAndBlade.Objects.Usables, inheriting UsableMachine; 6 exposed members (4 methods, 2 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/Objects/Usables/EventTriggeringUsableMachine.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EventTriggeringUsableMachine

**Namespace:** `TaleWorlds.MountAndBlade.Objects.Usables`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class EventTriggeringUsableMachine : UsableMachine`
**File:** `TaleWorlds.MountAndBlade/Objects/Usables/EventTriggeringUsableMachine.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

EventTriggeringUsableMachine lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Objects/Usables/EventTriggeringUsableMachine.cs. It is a public class, implementing/inheriting UsableMachine; the inheritance chain is EventTriggeringUsableMachine → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. It exposes 6 public/protected members: 4 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EventTriggeringUsableMachine lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Objects.Usables`, inheritance chain EventTriggeringUsableMachine → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 4/6, properties 2/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Objects/Usables/EventTriggeringUsableMachine.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ActionText` | `public TextObject ActionText` | property |
| `DescriptionText` | `public TextObject DescriptionText` | property |
| `OnInit` | `protected internal override void OnInit()` | method |
| `OnTick` | `protected internal override void OnTick(float dt)` | method |
| `GetActionTextForStandingPoint` | `public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)` | method |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface UsableMachine](../UsableMachine/)
- [same namespace AmmoBarrelBase](../AmmoBarrelBase/)
- [same namespace ArrowBarrel](../ArrowBarrel/)
- [same namespace ClimbingMachine](../ClimbingMachine/)
- [same namespace JavelinBarrel](../JavelinBarrel/)
