---
title: "CameraJumpScript"
description: "CameraJumpScript: a public class in SandBox.Missions, inheriting ScriptComponentBehavior; 6 exposed members (6 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Missions/CameraJumpScript.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CameraJumpScript

**Namespace:** `SandBox.Missions`
**Module:** `SandBox`
**Type:** `public class CameraJumpScript : ScriptComponentBehavior`
**File:** `SandBox/Missions/CameraJumpScript.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

CameraJumpScript lives in the SandBox module, source file SandBox/Missions/CameraJumpScript.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is CameraJumpScript → ScriptComponentBehavior → DotNetObject. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CameraJumpScript lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Missions`, inheritance chain CameraJumpScript → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/CameraJumpScript.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnInit` | `protected override void OnInit()` | method |
| `OnEditorInit` | `protected override void OnEditorInit()` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `OnEditorTick` | `protected override void OnEditorTick(float dt)` | method |
| `OnEditorVariableChanged` | `protected override void OnEditorVariableChanged(string variableName)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ScriptComponentBehavior](../../engine/ScriptComponentBehavior/)
- [same namespace ChangeLightIntensityScript](../ChangeLightIntensityScript/)
- [same namespace CheckpointLoadedMissionEvent](../CheckpointLoadedMissionEvent/)
- [same namespace CheckpointMissionLogic](../CheckpointMissionLogic/)
- [same namespace CivilianPortShipSpawnMissionLogic](../CivilianPortShipSpawnMissionLogic/)
