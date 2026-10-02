---
title: "EavesdroppingMissionLogic"
description: "EavesdroppingMissionLogic: a public class in SandBox, inheriting MissionLogic; 6 exposed members (3 methods, 1 properties, 0 fields). Source: SandBox/Missions/EavesdroppingMissionLogic.cs."
---
# EavesdroppingMissionLogic

**Namespace:** `SandBox.Missions`
**Module:** `SandBox`
**Type:** `public class EavesdroppingMissionLogic : MissionLogic`
**File:** `SandBox/Missions/EavesdroppingMissionLogic.cs`

## Overview

EavesdroppingMissionLogic lives in the SandBox module, source file SandBox/Missions/EavesdroppingMissionLogic.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is EavesdroppingMissionLogic → MissionLogic. It exposes 6 public/protected members: 3 methods, 1 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EavesdroppingMissionLogic is a top-level type in SandBox, namespace differing from (SandBox.Missions) the module directory; inheritance chain EavesdroppingMissionLogic → MissionLogic. The surface is method-led (methods 3/6, properties 1/6), so it mostly exposes operations. MissionLogic on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/EavesdroppingMissionLogic.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EavesdroppingMissionLogic` | `public EavesdroppingMissionLogic(CharacterObject disguiseShadowingTargetCharacter, CharacterObject disguiseOfficerCharacter)` | constructor |
| `OnEndMission` | `protected override void OnEndMission()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `EavesdropSound` | `public class EavesdropSound` | property |
| `EavesdropSound` | `public class EavesdropSound` | nested type |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CameraJumpScript](../CameraJumpScript)
- [same namespace ChangeLightIntensityScript](../ChangeLightIntensityScript)
- [same namespace CheckpointLoadedMissionEvent](../CheckpointLoadedMissionEvent)
- [same namespace CheckpointMissionLogic](../CheckpointMissionLogic)
