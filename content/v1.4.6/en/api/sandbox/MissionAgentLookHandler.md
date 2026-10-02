---
title: "MissionAgentLookHandler"
description: "MissionAgentLookHandler: a public class in SandBox, inheriting MissionLogic; 5 exposed members (4 methods, 0 properties, 0 fields). Source: SandBox/Missions/MissionLogics/MissionAgentLookHandler.cs."
---
# MissionAgentLookHandler

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class MissionAgentLookHandler : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/MissionAgentLookHandler.cs`

## Overview

MissionAgentLookHandler lives in the SandBox module, source file SandBox/Missions/MissionLogics/MissionAgentLookHandler.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is MissionAgentLookHandler → MissionLogic. It exposes 5 public/protected members: 4 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionAgentLookHandler is a top-level type in SandBox, namespace differing from (SandBox.Missions.MissionLogics) the module directory; inheritance chain MissionAgentLookHandler → MissionLogic. The surface is method-led (methods 4/5, properties 0/5), so it mostly exposes operations. MissionLogic on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/MissionAgentLookHandler.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionAgentLookHandler` | `public MissionAgentLookHandler()` | constructor |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `OnAgentBuild` | `public override void OnAgentBuild(Agent agent, Banner banner)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BattleAgentLogic](../BattleAgentLogic)
- [same namespace BattleSurgeonLogic](../BattleSurgeonLogic)
- [same namespace CampaignMissionComponent](../CampaignMissionComponent)
- [same namespace CampaignSiegeStateHandler](../CampaignSiegeStateHandler)
