---
title: "EavesdroppingMissionLogic"
description: "EavesdroppingMissionLogic: a public class in SandBox.Missions, inheriting MissionLogic; 6 exposed members (3 methods, 1 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Missions/EavesdroppingMissionLogic.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EavesdroppingMissionLogic

**Namespace:** `SandBox.Missions`
**Module:** `SandBox`
**Type:** `public class EavesdroppingMissionLogic : MissionLogic`
**File:** `SandBox/Missions/EavesdroppingMissionLogic.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

EavesdroppingMissionLogic lives in the SandBox module, source file SandBox/Missions/EavesdroppingMissionLogic.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is EavesdroppingMissionLogic → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 6 public/protected members: 3 methods, 1 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EavesdroppingMissionLogic lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Missions`, inheritance chain EavesdroppingMissionLogic → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 3/6, properties 1/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/EavesdroppingMissionLogic.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `EavesdroppingMissionLogic` | `public EavesdroppingMissionLogic(CharacterObject disguiseShadowingTargetCharacter, CharacterObject disguiseOfficerCharacter)` | constructor |
| `OnEndMission` | `protected override void OnEndMission()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `EavesdropSound` | `public class EavesdropSound` | property |
| `EavesdropSound` | `public class EavesdropSound` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionLogic](../../mission-ext/MissionLogic/)
- [same namespace CameraJumpScript](../CameraJumpScript/)
- [same namespace ChangeLightIntensityScript](../ChangeLightIntensityScript/)
- [same namespace CheckpointLoadedMissionEvent](../CheckpointLoadedMissionEvent/)
- [same namespace CheckpointMissionLogic](../CheckpointMissionLogic/)
