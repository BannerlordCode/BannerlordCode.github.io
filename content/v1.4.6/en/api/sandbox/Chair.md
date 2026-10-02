---
title: "Chair"
description: "Chair: a public class in SandBox, inheriting UsableMachine; 9 exposed members (7 methods, 1 properties, 0 fields). Source: SandBox/Objects/Usables/Chair.cs."
---
# Chair

**Namespace:** `SandBox.Objects.Usables`
**Module:** `SandBox`
**Type:** `public class Chair : UsableMachine`
**File:** `SandBox/Objects/Usables/Chair.cs`

## Overview

Chair lives in the SandBox module, source file SandBox/Objects/Usables/Chair.cs. It is a public class, implementing/inheriting UsableMachine; the inheritance chain is Chair → UsableMachine. It exposes 9 public/protected members: 7 methods, 1 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Chair is a top-level type in SandBox, namespace differing from (SandBox.Objects.Usables) the module directory; inheritance chain Chair → UsableMachine. The surface is method-led (methods 7/9, properties 1/9), so it mostly exposes operations. UsableMachine on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/Usables/Chair.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnInit` | `protected override void OnInit()` | method |
| `IsAgentFullySitting` | `public bool IsAgentFullySitting(Agent usingAgent)` | method |
| `CreateAIBehaviorObject` | `public override UsableMachineAIBase CreateAIBehaviorObject()` | method |
| `GetActionTextForStandingPoint` | `public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)` | method |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | method |
| `GetBestPointAlternativeTo` | `public override StandingPoint GetBestPointAlternativeTo(StandingPoint standingPoint, Agent agent)` | method |
| `GetOrder` | `public override OrderType GetOrder(BattleSideEnum side)` | method |
| `SittableType` | `public enum SittableType` | property |
| `SittableType` | `public enum SittableType` | nested type |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CheckpointUsePoint](../CheckpointUsePoint)
- [same namespace DisguiseMissionUsePoint](../DisguiseMissionUsePoint)
- [same namespace MusicianGroup](../MusicianGroup)
- [same namespace Passage](../Passage)
