---
title: "SearchBodyMissionHandler"
description: "SearchBodyMissionHandler: a public class in SandBox, inheriting MissionLogic; 2 exposed members (2 methods, 0 properties, 0 fields). Source: SandBox/Missions/MissionLogics/SearchBodyMissionHandler.cs."
---
# SearchBodyMissionHandler

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class SearchBodyMissionHandler : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/SearchBodyMissionHandler.cs`

## Overview

SearchBodyMissionHandler lives in the SandBox module, source file SandBox/Missions/MissionLogics/SearchBodyMissionHandler.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is SearchBodyMissionHandler → MissionLogic. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SearchBodyMissionHandler is a top-level type in SandBox, namespace differing from (SandBox.Missions.MissionLogics) the module directory; inheritance chain SearchBodyMissionHandler → MissionLogic. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. MissionLogic on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/SearchBodyMissionHandler.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnAgentInteraction` | `public override void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)` | method |
| `IsThereAgentAction` | `public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BattleAgentLogic](../BattleAgentLogic)
- [same namespace BattleSurgeonLogic](../BattleSurgeonLogic)
- [same namespace CampaignMissionComponent](../CampaignMissionComponent)
- [same namespace CampaignSiegeStateHandler](../CampaignSiegeStateHandler)
