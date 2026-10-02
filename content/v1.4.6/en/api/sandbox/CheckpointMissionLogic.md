---
title: "CheckpointMissionLogic"
description: "CheckpointMissionLogic: a public class in SandBox, inheriting MissionLogic; 7 exposed members (6 methods, 0 properties, 0 fields). Source: SandBox/Missions/CheckpointMissionLogic.cs."
---
# CheckpointMissionLogic

**Namespace:** `SandBox.Missions`
**Module:** `SandBox`
**Type:** `public class CheckpointMissionLogic : MissionLogic`
**File:** `SandBox/Missions/CheckpointMissionLogic.cs`

## Overview

CheckpointMissionLogic lives in the SandBox module, source file SandBox/Missions/CheckpointMissionLogic.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is CheckpointMissionLogic → MissionLogic. It exposes 7 public/protected members: 6 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CheckpointMissionLogic is a top-level type in SandBox, namespace differing from (SandBox.Missions) the module directory; inheritance chain CheckpointMissionLogic → MissionLogic. The surface is method-led (methods 6/7, properties 0/7), so it mostly exposes operations. MissionLogic on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/CheckpointMissionLogic.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CheckpointMissionLogic` | `public CheckpointMissionLogic()` | constructor |
| `EarlyStart` | `public override void EarlyStart()` | method |
| `OnRenderingStarted` | `public override void OnRenderingStarted()` | method |
| `OnEarlyAgentRemoved` | `public override void OnEarlyAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `OnCheckpointUsed` | `public void OnCheckpointUsed(int checkpointUniqueId)` | method |
| `RegisterAgent` | `public void RegisterAgent(Agent agent)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CameraJumpScript](../CameraJumpScript)
- [same namespace ChangeLightIntensityScript](../ChangeLightIntensityScript)
- [same namespace CheckpointLoadedMissionEvent](../CheckpointLoadedMissionEvent)
- [same namespace CivilianPortShipSpawnMissionLogic](../CivilianPortShipSpawnMissionLogic)
