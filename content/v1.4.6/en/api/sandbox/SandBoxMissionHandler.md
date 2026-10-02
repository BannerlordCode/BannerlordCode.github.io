---
title: "SandBoxMissionHandler"
description: "SandBoxMissionHandler: a public class in SandBox, inheriting MissionLogic; 1 exposed members (1 methods, 0 properties, 0 fields). Source: SandBox/Missions/MissionLogics/SandBoxMissionHandler.cs."
---
# SandBoxMissionHandler

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class SandBoxMissionHandler : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/SandBoxMissionHandler.cs`

## Overview

SandBoxMissionHandler lives in the SandBox module, source file SandBox/Missions/MissionLogics/SandBoxMissionHandler.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is SandBoxMissionHandler → MissionLogic. It exposes 1 public/protected members: 1 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SandBoxMissionHandler is a top-level type in SandBox, namespace differing from (SandBox.Missions.MissionLogics) the module directory; inheritance chain SandBoxMissionHandler → MissionLogic. The surface is method-led (methods 1/1, properties 0/1), so it mostly exposes operations. MissionLogic on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/SandBoxMissionHandler.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BattleAgentLogic](../BattleAgentLogic)
- [same namespace BattleSurgeonLogic](../BattleSurgeonLogic)
- [same namespace CampaignMissionComponent](../CampaignMissionComponent)
- [same namespace CampaignSiegeStateHandler](../CampaignSiegeStateHandler)
