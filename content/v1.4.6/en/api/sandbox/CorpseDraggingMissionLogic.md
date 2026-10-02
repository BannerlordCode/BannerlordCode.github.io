---
title: "CorpseDraggingMissionLogic"
description: "CorpseDraggingMissionLogic: a public class in SandBox, inheriting MissionLogic, IPlayerInputEffector; 6 exposed members (6 methods, 0 properties, 0 fields). Source: SandBox/Missions/MissionLogics/CorpseDraggingMissionLogic.cs."
---
# CorpseDraggingMissionLogic

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class CorpseDraggingMissionLogic : MissionLogic, IPlayerInputEffector, IMissionBehavior`
**File:** `SandBox/Missions/MissionLogics/CorpseDraggingMissionLogic.cs`

## Overview

CorpseDraggingMissionLogic lives in the SandBox module, source file SandBox/Missions/MissionLogics/CorpseDraggingMissionLogic.cs. It is a public class, implementing/inheriting MissionLogic, IPlayerInputEffector, IMissionBehavior; the inheritance chain is CorpseDraggingMissionLogic → MissionLogic. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CorpseDraggingMissionLogic is a top-level type in SandBox, namespace differing from (SandBox.Missions.MissionLogics) the module directory; inheritance chain CorpseDraggingMissionLogic → MissionLogic. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. MissionLogic on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/CorpseDraggingMissionLogic.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnFixedMissionTick` | `public override void OnFixedMissionTick(float fixedDt)` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `IsThereAgentAction` | `public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)` | method |
| `OnAgentInteraction` | `public override void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)` | method |
| `OnCollectPlayerEventControlFlags` | `public Agent.EventControlFlag OnCollectPlayerEventControlFlags()` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BattleAgentLogic](../BattleAgentLogic)
- [same namespace BattleSurgeonLogic](../BattleSurgeonLogic)
- [same namespace CampaignMissionComponent](../CampaignMissionComponent)
- [same namespace CampaignSiegeStateHandler](../CampaignSiegeStateHandler)
