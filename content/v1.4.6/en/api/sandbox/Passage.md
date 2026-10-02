---
title: "Passage"
description: "Passage: a public class in SandBox, inheriting UsableMachine; 4 exposed members (3 methods, 1 properties, 0 fields). Source: SandBox/Objects/Usables/Passage.cs."
---
# Passage

**Namespace:** `SandBox.Objects.Usables`
**Module:** `SandBox`
**Type:** `public class Passage : UsableMachine`
**File:** `SandBox/Objects/Usables/Passage.cs`

## Overview

Passage lives in the SandBox module, source file SandBox/Objects/Usables/Passage.cs. It is a public class, implementing/inheriting UsableMachine; the inheritance chain is Passage → UsableMachine. It exposes 4 public/protected members: 3 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Passage is a top-level type in SandBox, namespace differing from (SandBox.Objects.Usables) the module directory; inheritance chain Passage → UsableMachine. The surface is method-led (methods 3/4, properties 1/4), so it mostly exposes operations. UsableMachine on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/Usables/Passage.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ToLocation` | `public Location ToLocation` | property |
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
