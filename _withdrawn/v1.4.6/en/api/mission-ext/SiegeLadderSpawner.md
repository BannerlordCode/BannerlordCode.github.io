---
title: "SiegeLadderSpawner"
description: "SiegeLadderSpawner: a public class in TaleWorlds.MountAndBlade.Objects.Siege, inheriting SpawnerBase; 22 exposed members (6 methods, 2 properties, 14 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/Objects/Siege/SiegeLadderSpawner.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SiegeLadderSpawner

**Namespace:** `TaleWorlds.MountAndBlade.Objects.Siege`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SiegeLadderSpawner : SpawnerBase`
**File:** `TaleWorlds.MountAndBlade/Objects/Siege/SiegeLadderSpawner.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

SiegeLadderSpawner lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Objects/Siege/SiegeLadderSpawner.cs. It is a public class, implementing/inheriting SpawnerBase; the inheritance chain is SiegeLadderSpawner → SpawnerBase → ScriptComponentBehavior → DotNetObject. It exposes 22 public/protected members: 6 methods, 2 properties, 14 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SiegeLadderSpawner lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Objects.Siege`, inheritance chain SiegeLadderSpawner → SpawnerBase → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 6/22, properties 2/22), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Objects/Siege/SiegeLadderSpawner.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `UpperStateRotationRadian` | `public float UpperStateRotationRadian` | property |
| `DownStateRotationRadian` | `public float DownStateRotationRadian` | property |
| `OnEditorInit` | `protected internal override void OnEditorInit()` | method |
| `OnEditorTick` | `protected internal override void OnEditorTick(float dt)` | method |
| `OnEditorVariableChanged` | `protected internal override void OnEditorVariableChanged(string variableName)` | method |
| `OnCheckForProblems` | `protected internal override bool OnCheckForProblems()` | method |
| `OnPreInit` | `protected internal override void OnPreInit()` | method |
| `AssignParameters` | `public override void AssignParameters(SpawnerEntityMissionHelper _spawnerMissionHelper)` | method |
| `fork_holder` | `public MatrixFrame fork_holder` | field |
| `initial_wait_pos` | `public MatrixFrame initial_wait_pos` | field |
| `use_push` | `public MatrixFrame use_push` | field |
| `stand_position_wall_push` | `public MatrixFrame stand_position_wall_push` | field |
| `distance_holder` | `public MatrixFrame distance_holder` | field |
| `stand_position_ground_wait` | `public MatrixFrame stand_position_ground_wait` | field |
| `TargetWallSegmentTag` | `public string TargetWallSegmentTag` | field |
| `OnWallNavMeshId` | `public int OnWallNavMeshId` | field |
| `AddOnDeployTag` | `public string AddOnDeployTag` | field |
| `RemoveOnDeployTag` | `public string RemoveOnDeployTag` | field |
| `DownStateRotationDegree` | `public float DownStateRotationDegree` | field |
| `TacticalPositionWidth` | `public float TacticalPositionWidth` | field |
| `BarrierTagToRemove` | `public string BarrierTagToRemove` | field |
| `IndestructibleMerlonsTag` | `public string IndestructibleMerlonsTag` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SpawnerBase](../SpawnerBase/)
- [same namespace BallistaSpawner](../BallistaSpawner/)
- [same namespace BatteringRamSpawner](../BatteringRamSpawner/)
- [same namespace FireTrebuchet](../FireTrebuchet/)
- [same namespace ISpawnable](../ISpawnable/)
