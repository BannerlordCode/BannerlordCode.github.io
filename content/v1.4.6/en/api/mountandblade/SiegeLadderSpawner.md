---
title: "SiegeLadderSpawner"
description: "SiegeLadderSpawner: a public class in TaleWorlds.MountAndBlade, inheriting SpawnerBase; 22 exposed members (6 methods, 2 properties, 14 fields). Source: TaleWorlds.MountAndBlade/Objects/Siege/SiegeLadderSpawner.cs."
---
# SiegeLadderSpawner

**Namespace:** `TaleWorlds.MountAndBlade.Objects.Siege`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SiegeLadderSpawner : SpawnerBase`
**File:** `TaleWorlds.MountAndBlade/Objects/Siege/SiegeLadderSpawner.cs`

## Overview

SiegeLadderSpawner lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Objects/Siege/SiegeLadderSpawner.cs. It is a public class, implementing/inheriting SpawnerBase; the inheritance chain is SiegeLadderSpawner → SpawnerBase → ScriptComponentBehavior. It exposes 22 public/protected members: 6 methods, 2 properties, 14 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SiegeLadderSpawner is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.Objects.Siege) the module directory; inheritance chain SiegeLadderSpawner → SpawnerBase → ScriptComponentBehavior. The surface is method-led (methods 6/22, properties 2/22), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Objects/Siege/SiegeLadderSpawner.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface SpawnerBase](../SpawnerBase)
- [same namespace BallistaSpawner](../BallistaSpawner)
- [same namespace BatteringRamSpawner](../BatteringRamSpawner)
- [same namespace FireTrebuchet](../FireTrebuchet)
- [same namespace ISpawnable](../ISpawnable)
