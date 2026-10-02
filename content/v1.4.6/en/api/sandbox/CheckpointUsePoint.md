---
title: "CheckpointUsePoint"
description: "CheckpointUsePoint: a public class in SandBox, inheriting UsableMachine; 7 exposed members (5 methods, 1 properties, 1 fields). Source: SandBox/Objects/Usables/CheckpointUsePoint.cs."
---
# CheckpointUsePoint

**Namespace:** `SandBox.Objects.Usables`
**Module:** `SandBox`
**Type:** `public class CheckpointUsePoint : UsableMachine`
**File:** `SandBox/Objects/Usables/CheckpointUsePoint.cs`

## Overview

CheckpointUsePoint lives in the SandBox module, source file SandBox/Objects/Usables/CheckpointUsePoint.cs. It is a public class, implementing/inheriting UsableMachine; the inheritance chain is CheckpointUsePoint → UsableMachine. It exposes 7 public/protected members: 5 methods, 1 properties, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CheckpointUsePoint is a top-level type in SandBox, namespace differing from (SandBox.Objects.Usables) the module directory; inheritance chain CheckpointUsePoint → UsableMachine. The surface is method-led (methods 5/7, properties 1/7), so it mostly exposes operations. UsableMachine on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/Usables/CheckpointUsePoint.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SpawnPoint` | `public GameEntity SpawnPoint` | property |
| `OnInit` | `protected override void OnInit()` | method |
| `AfterMissionStart` | `public override void AfterMissionStart()` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `GetActionTextForStandingPoint` | `public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)` | method |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | method |
| `CheckpointSpawnPointTag` | `public const string CheckpointSpawnPointTag` | field |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace Chair](../Chair)
- [same namespace DisguiseMissionUsePoint](../DisguiseMissionUsePoint)
- [same namespace MusicianGroup](../MusicianGroup)
- [same namespace Passage](../Passage)
