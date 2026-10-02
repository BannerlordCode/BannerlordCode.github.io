---
title: "CheckpointArea"
description: "CheckpointArea: a public class in SandBox.Objects, inheriting VolumeBox; 5 exposed members (3 methods, 1 properties, 1 fields). Canonical bucket sandbox. Source: SandBox/Objects/CheckpointArea.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CheckpointArea

**Namespace:** `SandBox.Objects`
**Module:** `SandBox`
**Type:** `public class CheckpointArea : VolumeBox`
**File:** `SandBox/Objects/CheckpointArea.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

CheckpointArea lives in the SandBox module, source file SandBox/Objects/CheckpointArea.cs. It is a public class, implementing/inheriting VolumeBox; the inheritance chain is CheckpointArea → VolumeBox → MissionObject → ScriptComponentBehavior → DotNetObject. It exposes 5 public/protected members: 3 methods, 1 properties, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CheckpointArea lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Objects`, inheritance chain CheckpointArea → VolumeBox → MissionObject → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 3/5, properties 1/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/CheckpointArea.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SpawnPoint` | `public GameEntity SpawnPoint` | property |
| `AfterMissionStart` | `public override void AfterMissionStart()` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `CheckpointSpawnPointTag` | `public const string CheckpointSpawnPointTag` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface VolumeBox](../../mission-ext/VolumeBox/)
- [same namespace DefaultMusicInstrumentData](../DefaultMusicInstrumentData/)
- [same namespace DynamicPatrolAreaParent](../DynamicPatrolAreaParent/)
- [same namespace GenericMissionEventBox](../GenericMissionEventBox/)
- [same namespace GroupSpawnPoint](../GroupSpawnPoint/)
