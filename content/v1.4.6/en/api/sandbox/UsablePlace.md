---
title: "UsablePlace"
description: "UsablePlace: a public class in SandBox, inheriting UsableMachine; 3 exposed members (3 methods, 0 properties, 0 fields). Source: SandBox/Objects/Usables/UsablePlace.cs."
---
# UsablePlace

**Namespace:** `SandBox.Objects.Usables`
**Module:** `SandBox`
**Type:** `public class UsablePlace : UsableMachine`
**File:** `SandBox/Objects/Usables/UsablePlace.cs`

## Overview

UsablePlace lives in the SandBox module, source file SandBox/Objects/Usables/UsablePlace.cs. It is a public class, implementing/inheriting UsableMachine; the inheritance chain is UsablePlace → UsableMachine. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: UsablePlace is a top-level type in SandBox, namespace differing from (SandBox.Objects.Usables) the module directory; inheritance chain UsablePlace → UsableMachine. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. UsableMachine on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/Usables/UsablePlace.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | method |
| `GetActionTextForStandingPoint` | `public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)` | method |
| `CreateAIBehaviorObject` | `public override UsableMachineAIBase CreateAIBehaviorObject()` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace Chair](../Chair)
- [same namespace CheckpointUsePoint](../CheckpointUsePoint)
- [same namespace DisguiseMissionUsePoint](../DisguiseMissionUsePoint)
- [same namespace MusicianGroup](../MusicianGroup)
