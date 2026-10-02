---
title: "CheckpointUsePoint"
description: "CheckpointUsePoint: a public class in SandBox.Objects.Usables, inheriting UsableMachine; 7 exposed members (5 methods, 1 properties, 1 fields). Canonical bucket sandbox. Source: SandBox/Objects/Usables/CheckpointUsePoint.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CheckpointUsePoint

**Namespace:** `SandBox.Objects.Usables`
**Module:** `SandBox`
**Type:** `public class CheckpointUsePoint : UsableMachine`
**File:** `SandBox/Objects/Usables/CheckpointUsePoint.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

CheckpointUsePoint lives in the SandBox module, source file SandBox/Objects/Usables/CheckpointUsePoint.cs. It is a public class, implementing/inheriting UsableMachine; the inheritance chain is CheckpointUsePoint → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. It exposes 7 public/protected members: 5 methods, 1 properties, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CheckpointUsePoint lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Objects.Usables`, inheritance chain CheckpointUsePoint → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 5/7, properties 1/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/Usables/CheckpointUsePoint.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SpawnPoint` | `public GameEntity SpawnPoint` | property |
| `OnInit` | `protected override void OnInit()` | method |
| `AfterMissionStart` | `public override void AfterMissionStart()` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `GetActionTextForStandingPoint` | `public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)` | method |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | method |
| `CheckpointSpawnPointTag` | `public const string CheckpointSpawnPointTag` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface UsableMachine](../../mission-ext/UsableMachine/)
- [same namespace Chair](../Chair/)
- [same namespace DisguiseMissionUsePoint](../DisguiseMissionUsePoint/)
- [same namespace MusicianGroup](../MusicianGroup/)
- [same namespace Passage](../Passage/)
