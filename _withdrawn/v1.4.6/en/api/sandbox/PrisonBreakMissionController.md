---
title: "PrisonBreakMissionController"
description: "PrisonBreakMissionController: a public class in SandBox.Missions.MissionLogics.Towns, inheriting MissionLogic; 12 exposed members (11 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Missions/MissionLogics/Towns/PrisonBreakMissionController.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PrisonBreakMissionController

**Namespace:** `SandBox.Missions.MissionLogics.Towns`
**Module:** `SandBox`
**Type:** `public class PrisonBreakMissionController : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/Towns/PrisonBreakMissionController.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

PrisonBreakMissionController lives in the SandBox module, source file SandBox/Missions/MissionLogics/Towns/PrisonBreakMissionController.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is PrisonBreakMissionController → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 12 public/protected members: 11 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PrisonBreakMissionController lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Missions.MissionLogics.Towns`, inheritance chain PrisonBreakMissionController → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 11/12, properties 0/12), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/Towns/PrisonBreakMissionController.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `PrisonBreakMissionController` | `public PrisonBreakMissionController(CharacterObject prisonerCharacter)` | constructor |
| `OnCreated` | `public override void OnCreated()` | method |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnAgentInteraction` | `public override void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)` | method |
| `IsThereAgentAction` | `public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)` | method |
| `OnAgentAlarmedStateChanged` | `public override void OnAgentAlarmedStateChanged(Agent agent, Agent.AIStateFlag flag)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | method |
| `OnEndMissionRequest` | `public override InquiryData OnEndMissionRequest(out bool canLeave)` | method |
| `OnStealthMissionCounterFailed` | `public void OnStealthMissionCounterFailed(OnStealthMissionCounterFailedEvent obj)` | method |
| `OnEndMission` | `protected override void OnEndMission()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionLogic](../../mission-ext/MissionLogic/)
- [same namespace AlleyFightMissionHandler](../AlleyFightMissionHandler/)
- [same namespace TownCenterMissionController](../TownCenterMissionController/)
- [same namespace WorkshopMissionHandler](../WorkshopMissionHandler/)
