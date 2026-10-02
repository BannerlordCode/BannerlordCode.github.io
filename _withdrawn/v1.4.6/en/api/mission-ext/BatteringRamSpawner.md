---
title: "BatteringRamSpawner"
description: "BatteringRamSpawner: a public class in TaleWorlds.MountAndBlade.Objects.Siege, inheriting SpawnerBase; 18 exposed members (6 methods, 0 properties, 12 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/Objects/Siege/BatteringRamSpawner.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BatteringRamSpawner

**Namespace:** `TaleWorlds.MountAndBlade.Objects.Siege`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class BatteringRamSpawner : SpawnerBase`
**File:** `TaleWorlds.MountAndBlade/Objects/Siege/BatteringRamSpawner.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

BatteringRamSpawner lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/Objects/Siege/BatteringRamSpawner.cs. It is a public class, implementing/inheriting SpawnerBase; the inheritance chain is BatteringRamSpawner → SpawnerBase → ScriptComponentBehavior → DotNetObject. It exposes 18 public/protected members: 6 methods, 12 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BatteringRamSpawner lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.Objects.Siege`, inheritance chain BatteringRamSpawner → SpawnerBase → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 6/18, properties 0/18), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/Objects/Siege/BatteringRamSpawner.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnEditorInit` | `protected internal override void OnEditorInit()` | method |
| `OnEditorTick` | `protected internal override void OnEditorTick(float dt)` | method |
| `OnEditorVariableChanged` | `protected internal override void OnEditorVariableChanged(string variableName)` | method |
| `OnCheckForProblems` | `protected internal override bool OnCheckForProblems()` | method |
| `OnPreInit` | `protected internal override void OnPreInit()` | method |
| `AssignParameters` | `public override void AssignParameters(SpawnerEntityMissionHelper _spawnerMissionHelper)` | method |
| `wait_pos_ground` | `public MatrixFrame wait_pos_ground` | field |
| `GateTag` | `public string GateTag` | field |
| `PathEntityName` | `public string PathEntityName` | field |
| `BridgeNavMeshID_1` | `public int BridgeNavMeshID_1` | field |
| `BridgeNavMeshID_2` | `public int BridgeNavMeshID_2` | field |
| `DitchNavMeshID_1` | `public int DitchNavMeshID_1` | field |
| `DitchNavMeshID_2` | `public int DitchNavMeshID_2` | field |
| `GroundToBridgeNavMeshID_1` | `public int GroundToBridgeNavMeshID_1` | field |
| `GroundToBridgeNavMeshID_2` | `public int GroundToBridgeNavMeshID_2` | field |
| `AddOnDeployTag` | `public string AddOnDeployTag` | field |
| `RemoveOnDeployTag` | `public string RemoveOnDeployTag` | field |
| `SpeedModifierFactor` | `public float SpeedModifierFactor` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SpawnerBase](../SpawnerBase/)
- [same namespace BallistaSpawner](../BallistaSpawner/)
- [same namespace FireTrebuchet](../FireTrebuchet/)
- [same namespace ISpawnable](../ISpawnable/)
- [same namespace MangonelSpawner](../MangonelSpawner/)
