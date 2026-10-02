---
title: "ChangeLightIntensityScript"
description: "ChangeLightIntensityScript: a public class in SandBox.Missions, inheriting ScriptComponentBehavior; 4 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Missions/ChangeLightIntensityScript.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ChangeLightIntensityScript

**Namespace:** `SandBox.Missions`
**Module:** `SandBox`
**Type:** `public class ChangeLightIntensityScript : ScriptComponentBehavior`
**File:** `SandBox/Missions/ChangeLightIntensityScript.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

ChangeLightIntensityScript lives in the SandBox module, source file SandBox/Missions/ChangeLightIntensityScript.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is ChangeLightIntensityScript → ScriptComponentBehavior → DotNetObject. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ChangeLightIntensityScript lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Missions`, inheritance chain ChangeLightIntensityScript → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/ChangeLightIntensityScript.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `OnEditorTick` | `protected override void OnEditorTick(float dt)` | method |
| `OnEditorVariableChanged` | `protected override void OnEditorVariableChanged(string variableName)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ScriptComponentBehavior](../../engine/ScriptComponentBehavior/)
- [same namespace CameraJumpScript](../CameraJumpScript/)
- [same namespace CheckpointLoadedMissionEvent](../CheckpointLoadedMissionEvent/)
- [same namespace CheckpointMissionLogic](../CheckpointMissionLogic/)
- [same namespace CivilianPortShipSpawnMissionLogic](../CivilianPortShipSpawnMissionLogic/)
