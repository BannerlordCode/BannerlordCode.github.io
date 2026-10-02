---
title: "StealthFailCounterMissionLogic"
description: "StealthFailCounterMissionLogic: a public class in SandBox.Missions, inheriting MissionLogic; 7 exposed members (4 methods, 2 properties, 1 fields). Canonical bucket sandbox. Source: SandBox/Missions/StealthFailCounterMissionLogic.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# StealthFailCounterMissionLogic

**Namespace:** `SandBox.Missions`
**Module:** `SandBox`
**Type:** `public class StealthFailCounterMissionLogic : MissionLogic`
**File:** `SandBox/Missions/StealthFailCounterMissionLogic.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

StealthFailCounterMissionLogic lives in the SandBox module, source file SandBox/Missions/StealthFailCounterMissionLogic.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is StealthFailCounterMissionLogic → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 7 public/protected members: 4 methods, 2 properties, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StealthFailCounterMissionLogic lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Missions`, inheritance chain StealthFailCounterMissionLogic → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 4/7, properties 2/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/StealthFailCounterMissionLogic.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsActive` | `public bool IsActive` | property |
| `FailCounterElapsedTime` | `public float FailCounterElapsedTime` | property |
| `OnAgentAlarmedStateChanged` | `public override void OnAgentAlarmedStateChanged(Agent agent, Agent.AIStateFlag flag)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `SetFailTexts` | `public void SetFailTexts(TextObject title, TextObject description)` | method |
| `FailCounterSeconds` | `public float FailCounterSeconds` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionLogic](../../mission-ext/MissionLogic/)
- [same namespace CameraJumpScript](../CameraJumpScript/)
- [same namespace ChangeLightIntensityScript](../ChangeLightIntensityScript/)
- [same namespace CheckpointLoadedMissionEvent](../CheckpointLoadedMissionEvent/)
- [same namespace CheckpointMissionLogic](../CheckpointMissionLogic/)
