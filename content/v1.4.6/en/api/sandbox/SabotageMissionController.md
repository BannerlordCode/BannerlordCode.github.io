---
title: "SabotageMissionController"
description: "SabotageMissionController: a public class in SandBox, inheriting MissionLogic; 4 exposed members (3 methods, 0 properties, 0 fields). Source: SandBox/Missions/SabotageMissionController.cs."
---
# SabotageMissionController

**Namespace:** `SandBox.Missions`
**Module:** `SandBox`
**Type:** `public class SabotageMissionController : MissionLogic`
**File:** `SandBox/Missions/SabotageMissionController.cs`

## Overview

SabotageMissionController lives in the SandBox module, source file SandBox/Missions/SabotageMissionController.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is SabotageMissionController → MissionLogic. It exposes 4 public/protected members: 3 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SabotageMissionController is a top-level type in SandBox, namespace differing from (SandBox.Missions) the module directory; inheritance chain SabotageMissionController → MissionLogic. The surface is method-led (methods 3/4, properties 0/4), so it mostly exposes operations. MissionLogic on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/SabotageMissionController.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SabotageMissionController` | `public SabotageMissionController()` | constructor |
| `OnEndMission` | `protected override void OnEndMission()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CameraJumpScript](../CameraJumpScript)
- [same namespace ChangeLightIntensityScript](../ChangeLightIntensityScript)
- [same namespace CheckpointLoadedMissionEvent](../CheckpointLoadedMissionEvent)
- [same namespace CheckpointMissionLogic](../CheckpointMissionLogic)
