---
title: "SiegeTowerSpawner"
description: "SiegeTowerSpawner: a public class in TaleWorlds.MountAndBlade.Objects.Siege, inheriting SpawnerBase; 24 exposed members (5 methods, 1 properties, 18 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/Objects/Siege/SiegeTowerSpawner.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SiegeTowerSpawner

**Namespace:** `TaleWorlds.MountAndBlade.Objects.Siege`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SiegeTowerSpawner : SpawnerBase`
**File:** `TaleWorlds.MountAndBlade/Objects/Siege/SiegeTowerSpawner.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

SiegeTowerSpawner lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Objects/Siege/SiegeTowerSpawner.cs. It is a public class, implementing/inheriting SpawnerBase; the inheritance chain is SiegeTowerSpawner → SpawnerBase → ScriptComponentBehavior → DotNetObject. It exposes 24 public/protected members: 5 methods, 1 properties, 18 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SiegeTowerSpawner lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Objects.Siege`, inheritance chain SiegeTowerSpawner → SpawnerBase → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 5/24, properties 1/24), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Objects/Siege/SiegeTowerSpawner.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RampRotationRadian` | `public float RampRotationRadian` | property |
| `OnEditorInit` | `protected internal override void OnEditorInit()` | method |
| `OnEditorTick` | `protected internal override void OnEditorTick(float dt)` | method |
| `OnEditorVariableChanged` | `protected internal override void OnEditorVariableChanged(string variableName)` | method |
| `OnPreInit` | `protected internal override void OnPreInit()` | method |
| `AssignParameters` | `public override void AssignParameters(SpawnerEntityMissionHelper _spawnerMissionHelper)` | method |
| `wait_pos_ground` | `public MatrixFrame wait_pos_ground` | field |
| `TargetWallSegmentTag` | `public string TargetWallSegmentTag` | field |
| `PathEntityName` | `public string PathEntityName` | field |
| `SoilNavMeshID1` | `public int SoilNavMeshID1` | field |
| `SoilNavMeshID2` | `public int SoilNavMeshID2` | field |
| `DitchNavMeshID1` | `public int DitchNavMeshID1` | field |
| `DitchNavMeshID2` | `public int DitchNavMeshID2` | field |
| `GroundToSoilNavMeshID1` | `public int GroundToSoilNavMeshID1` | field |
| `GroundToSoilNavMeshID2` | `public int GroundToSoilNavMeshID2` | field |
| `SoilGenericNavMeshID` | `public int SoilGenericNavMeshID` | field |
| `GroundGenericNavMeshID` | `public int GroundGenericNavMeshID` | field |
| `AddOnDeployTag` | `public string AddOnDeployTag` | field |
| `RemoveOnDeployTag` | `public string RemoveOnDeployTag` | field |
| `BarrierLength` | `public float BarrierLength` | field |
| `SpeedModifierFactor` | `public float SpeedModifierFactor` | field |
| `ai_barrier_l` | `public MatrixFrame ai_barrier_l` | field |
| `ai_barrier_r` | `public MatrixFrame ai_barrier_r` | field |
| `BarrierTagToRemove` | `public string BarrierTagToRemove` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SpawnerBase](../SpawnerBase/)
- [same namespace BallistaSpawner](../BallistaSpawner/)
- [same namespace BatteringRamSpawner](../BatteringRamSpawner/)
- [same namespace FireTrebuchet](../FireTrebuchet/)
- [same namespace ISpawnable](../ISpawnable/)
