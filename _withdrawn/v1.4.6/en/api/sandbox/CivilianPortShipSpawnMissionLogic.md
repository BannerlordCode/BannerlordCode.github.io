---
title: "CivilianPortShipSpawnMissionLogic"
description: "CivilianPortShipSpawnMissionLogic: a public class in SandBox.Missions, inheriting MissionLogic; 4 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Missions/CivilianPortShipSpawnMissionLogic.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CivilianPortShipSpawnMissionLogic

**Namespace:** `SandBox.Missions`
**Module:** `SandBox`
**Type:** `public class CivilianPortShipSpawnMissionLogic : MissionLogic`
**File:** `SandBox/Missions/CivilianPortShipSpawnMissionLogic.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

CivilianPortShipSpawnMissionLogic lives in the SandBox module, source file SandBox/Missions/CivilianPortShipSpawnMissionLogic.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is CivilianPortShipSpawnMissionLogic → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 4 public/protected members: 3 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CivilianPortShipSpawnMissionLogic lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Missions`, inheritance chain CivilianPortShipSpawnMissionLogic → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 3/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/CivilianPortShipSpawnMissionLogic.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CivilianPortShipSpawnMissionLogic` | `public CivilianPortShipSpawnMissionLogic(List<Ship>mainPartyShips, List<Ship>townLordShips)` | constructor |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `EarlyStart` | `public override void EarlyStart()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionLogic](../../mission-ext/MissionLogic/)
- [same namespace CameraJumpScript](../CameraJumpScript/)
- [same namespace ChangeLightIntensityScript](../ChangeLightIntensityScript/)
- [same namespace CheckpointLoadedMissionEvent](../CheckpointLoadedMissionEvent/)
- [same namespace CheckpointMissionLogic](../CheckpointMissionLogic/)
