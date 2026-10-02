---
title: "ChangeLightIntensityScript"
description: "ChangeLightIntensityScript: a public class in SandBox, inheriting ScriptComponentBehavior; 4 exposed members (4 methods, 0 properties, 0 fields). Source: SandBox/Missions/ChangeLightIntensityScript.cs."
---
# ChangeLightIntensityScript

**Namespace:** `SandBox.Missions`
**Module:** `SandBox`
**Type:** `public class ChangeLightIntensityScript : ScriptComponentBehavior`
**File:** `SandBox/Missions/ChangeLightIntensityScript.cs`

## Overview

ChangeLightIntensityScript lives in the SandBox module, source file SandBox/Missions/ChangeLightIntensityScript.cs. It is a public class, implementing/inheriting ScriptComponentBehavior; the inheritance chain is ChangeLightIntensityScript → ScriptComponentBehavior. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ChangeLightIntensityScript is a top-level type in SandBox, namespace differing from (SandBox.Missions) the module directory; inheritance chain ChangeLightIntensityScript → ScriptComponentBehavior. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. ScriptComponentBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/ChangeLightIntensityScript.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `OnEditorTick` | `protected override void OnEditorTick(float dt)` | method |
| `OnEditorVariableChanged` | `protected override void OnEditorVariableChanged(string variableName)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CameraJumpScript](../CameraJumpScript)
- [same namespace CheckpointLoadedMissionEvent](../CheckpointLoadedMissionEvent)
- [same namespace CheckpointMissionLogic](../CheckpointMissionLogic)
- [same namespace CivilianPortShipSpawnMissionLogic](../CivilianPortShipSpawnMissionLogic)
