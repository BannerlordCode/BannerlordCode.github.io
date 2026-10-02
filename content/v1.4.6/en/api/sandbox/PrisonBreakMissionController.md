---
title: "PrisonBreakMissionController"
description: "PrisonBreakMissionController: a public class in SandBox, inheriting MissionLogic; 12 exposed members (11 methods, 0 properties, 0 fields). Source: SandBox/Missions/MissionLogics/Towns/PrisonBreakMissionController.cs."
---
# PrisonBreakMissionController

**Namespace:** `SandBox.Missions.MissionLogics.Towns`
**Module:** `SandBox`
**Type:** `public class PrisonBreakMissionController : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/Towns/PrisonBreakMissionController.cs`

## Overview

PrisonBreakMissionController lives in the SandBox module, source file SandBox/Missions/MissionLogics/Towns/PrisonBreakMissionController.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is PrisonBreakMissionController → MissionLogic. It exposes 12 public/protected members: 11 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PrisonBreakMissionController is a top-level type in SandBox, namespace differing from (SandBox.Missions.MissionLogics.Towns) the module directory; inheritance chain PrisonBreakMissionController → MissionLogic. The surface is method-led (methods 11/12, properties 0/12), so it mostly exposes operations. MissionLogic on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/Towns/PrisonBreakMissionController.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AlleyFightMissionHandler](../AlleyFightMissionHandler)
- [same namespace TownCenterMissionController](../TownCenterMissionController)
- [same namespace WorkshopMissionHandler](../WorkshopMissionHandler)
