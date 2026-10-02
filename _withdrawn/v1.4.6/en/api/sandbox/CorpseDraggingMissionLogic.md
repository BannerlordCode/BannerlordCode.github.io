---
title: "CorpseDraggingMissionLogic"
description: "CorpseDraggingMissionLogic: a public class in SandBox.Missions.MissionLogics, inheriting MissionLogic, IPlayerInputEffector; 6 exposed members (6 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Missions/MissionLogics/CorpseDraggingMissionLogic.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CorpseDraggingMissionLogic

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class CorpseDraggingMissionLogic : MissionLogic, IPlayerInputEffector, IMissionBehavior`
**File:** `SandBox/Missions/MissionLogics/CorpseDraggingMissionLogic.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

CorpseDraggingMissionLogic lives in the SandBox module, source file SandBox/Missions/MissionLogics/CorpseDraggingMissionLogic.cs. It is a public class, implementing/inheriting MissionLogic, IPlayerInputEffector, IMissionBehavior; the inheritance chain is CorpseDraggingMissionLogic → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CorpseDraggingMissionLogic lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Missions.MissionLogics`, inheritance chain CorpseDraggingMissionLogic → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/CorpseDraggingMissionLogic.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnFixedMissionTick` | `public override void OnFixedMissionTick(float fixedDt)` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `IsThereAgentAction` | `public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)` | method |
| `OnAgentInteraction` | `public override void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)` | method |
| `OnCollectPlayerEventControlFlags` | `public Agent.EventControlFlag OnCollectPlayerEventControlFlags()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionLogic](../../mission-ext/MissionLogic/)
- [base / interface IPlayerInputEffector](../../mission-ext/IPlayerInputEffector/)
- [base / interface IMissionBehavior](../../mission-ext/IMissionBehavior/)
- [same namespace BattleAgentLogic](../BattleAgentLogic/)
- [same namespace BattleSurgeonLogic](../BattleSurgeonLogic/)
- [same namespace CampaignMissionComponent](../CampaignMissionComponent/)
- [same namespace CampaignSiegeStateHandler](../CampaignSiegeStateHandler/)
