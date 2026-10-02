---
title: "CivilianPortShipSpawnMissionLogic"
description: "CivilianPortShipSpawnMissionLogic: a public class in SandBox, inheriting MissionLogic; 4 exposed members (3 methods, 0 properties, 0 fields). Source: SandBox/Missions/CivilianPortShipSpawnMissionLogic.cs."
---
# CivilianPortShipSpawnMissionLogic

**Namespace:** `SandBox.Missions`
**Module:** `SandBox`
**Type:** `public class CivilianPortShipSpawnMissionLogic : MissionLogic`
**File:** `SandBox/Missions/CivilianPortShipSpawnMissionLogic.cs`

## Overview

CivilianPortShipSpawnMissionLogic lives in the SandBox module, source file SandBox/Missions/CivilianPortShipSpawnMissionLogic.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is CivilianPortShipSpawnMissionLogic → MissionLogic. It exposes 4 public/protected members: 3 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CivilianPortShipSpawnMissionLogic is a top-level type in SandBox, namespace differing from (SandBox.Missions) the module directory; inheritance chain CivilianPortShipSpawnMissionLogic → MissionLogic. The surface is method-led (methods 3/4, properties 0/4), so it mostly exposes operations. MissionLogic on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/CivilianPortShipSpawnMissionLogic.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CivilianPortShipSpawnMissionLogic` | `public CivilianPortShipSpawnMissionLogic(List<Ship>mainPartyShips, List<Ship>townLordShips)` | constructor |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `EarlyStart` | `public override void EarlyStart()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CameraJumpScript](../CameraJumpScript)
- [same namespace ChangeLightIntensityScript](../ChangeLightIntensityScript)
- [same namespace CheckpointLoadedMissionEvent](../CheckpointLoadedMissionEvent)
- [same namespace CheckpointMissionLogic](../CheckpointMissionLogic)
