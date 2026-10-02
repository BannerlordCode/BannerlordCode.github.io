---
title: "CheckpointArea"
description: "CheckpointArea: a public class in SandBox, inheriting VolumeBox; 5 exposed members (3 methods, 1 properties, 1 fields). Source: SandBox/Objects/CheckpointArea.cs."
---
# CheckpointArea

**Namespace:** `SandBox.Objects`
**Module:** `SandBox`
**Type:** `public class CheckpointArea : VolumeBox`
**File:** `SandBox/Objects/CheckpointArea.cs`

## Overview

CheckpointArea lives in the SandBox module, source file SandBox/Objects/CheckpointArea.cs. It is a public class, implementing/inheriting VolumeBox; the inheritance chain is CheckpointArea → VolumeBox. It exposes 5 public/protected members: 3 methods, 1 properties, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CheckpointArea is a top-level type in SandBox, namespace differing from (SandBox.Objects) the module directory; inheritance chain CheckpointArea → VolumeBox. The surface is method-led (methods 3/5, properties 1/5), so it mostly exposes operations. VolumeBox on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/CheckpointArea.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SpawnPoint` | `public GameEntity SpawnPoint` | property |
| `AfterMissionStart` | `public override void AfterMissionStart()` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `CheckpointSpawnPointTag` | `public const string CheckpointSpawnPointTag` | field |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace DefaultMusicInstrumentData](../DefaultMusicInstrumentData)
- [same namespace DynamicPatrolAreaParent](../DynamicPatrolAreaParent)
- [same namespace GenericMissionEventBox](../GenericMissionEventBox)
- [same namespace GroupSpawnPoint](../GroupSpawnPoint)
