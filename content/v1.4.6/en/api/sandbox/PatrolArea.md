---
title: "PatrolArea"
description: "PatrolArea: a public class in SandBox, inheriting UsableMachine; 6 exposed members (6 methods, 0 properties, 0 fields). Source: SandBox/Objects/Usables/PatrolArea.cs."
---
# PatrolArea

**Namespace:** `SandBox.Objects.Usables`
**Module:** `SandBox`
**Type:** `public class PatrolArea : UsableMachine`
**File:** `SandBox/Objects/Usables/PatrolArea.cs`

## Overview

PatrolArea lives in the SandBox module, source file SandBox/Objects/Usables/PatrolArea.cs. It is a public class, implementing/inheriting UsableMachine; the inheritance chain is PatrolArea → UsableMachine. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PatrolArea is a top-level type in SandBox, namespace differing from (SandBox.Objects.Usables) the module directory; inheritance chain PatrolArea → UsableMachine. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. UsableMachine on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/Usables/PatrolArea.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetActionTextForStandingPoint` | `public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)` | method |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | method |
| `CreateAIBehaviorObject` | `public override UsableMachineAIBase CreateAIBehaviorObject()` | method |
| `OnInit` | `protected override void OnInit()` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace Chair](../Chair)
- [same namespace CheckpointUsePoint](../CheckpointUsePoint)
- [same namespace DisguiseMissionUsePoint](../DisguiseMissionUsePoint)
- [same namespace MusicianGroup](../MusicianGroup)
