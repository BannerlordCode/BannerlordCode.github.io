---
title: "StealthFailCounterMissionLogic"
description: "StealthFailCounterMissionLogic: a public class in SandBox, inheriting MissionLogic; 7 exposed members (4 methods, 2 properties, 1 fields). Source: SandBox/Missions/StealthFailCounterMissionLogic.cs."
---
# StealthFailCounterMissionLogic

**Namespace:** `SandBox.Missions`
**Module:** `SandBox`
**Type:** `public class StealthFailCounterMissionLogic : MissionLogic`
**File:** `SandBox/Missions/StealthFailCounterMissionLogic.cs`

## Overview

StealthFailCounterMissionLogic lives in the SandBox module, source file SandBox/Missions/StealthFailCounterMissionLogic.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is StealthFailCounterMissionLogic → MissionLogic. It exposes 7 public/protected members: 4 methods, 2 properties, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StealthFailCounterMissionLogic is a top-level type in SandBox, namespace differing from (SandBox.Missions) the module directory; inheritance chain StealthFailCounterMissionLogic → MissionLogic. The surface is method-led (methods 4/7, properties 2/7), so it mostly exposes operations. MissionLogic on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/StealthFailCounterMissionLogic.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsActive` | `public bool IsActive` | property |
| `FailCounterElapsedTime` | `public float FailCounterElapsedTime` | property |
| `OnAgentAlarmedStateChanged` | `public override void OnAgentAlarmedStateChanged(Agent agent, Agent.AIStateFlag flag)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `SetFailTexts` | `public void SetFailTexts(TextObject title, TextObject description)` | method |
| `FailCounterSeconds` | `public float FailCounterSeconds` | field |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CameraJumpScript](../CameraJumpScript)
- [same namespace ChangeLightIntensityScript](../ChangeLightIntensityScript)
- [same namespace CheckpointLoadedMissionEvent](../CheckpointLoadedMissionEvent)
- [same namespace CheckpointMissionLogic](../CheckpointMissionLogic)
