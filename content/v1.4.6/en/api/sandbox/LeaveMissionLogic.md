---
title: "LeaveMissionLogic"
description: "LeaveMissionLogic: a public class in SandBox, inheriting MissionLogic; 3 exposed members (2 methods, 0 properties, 0 fields). Source: SandBox/Missions/MissionLogics/LeaveMissionLogic.cs."
---
# LeaveMissionLogic

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class LeaveMissionLogic : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/LeaveMissionLogic.cs`

## Overview

LeaveMissionLogic lives in the SandBox module, source file SandBox/Missions/MissionLogics/LeaveMissionLogic.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is LeaveMissionLogic → MissionLogic. It exposes 3 public/protected members: 2 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: LeaveMissionLogic is a top-level type in SandBox, namespace differing from (SandBox.Missions.MissionLogics) the module directory; inheritance chain LeaveMissionLogic → MissionLogic. The surface is method-led (methods 2/3, properties 0/3), so it mostly exposes operations. MissionLogic on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/LeaveMissionLogic.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `LeaveMissionLogic` | `public LeaveMissionLogic(string leaveMenuId = " ")` | constructor |
| `MissionEnded` | `public override bool MissionEnded(ref MissionResult missionResult)` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BattleAgentLogic](../BattleAgentLogic)
- [same namespace BattleSurgeonLogic](../BattleSurgeonLogic)
- [same namespace CampaignMissionComponent](../CampaignMissionComponent)
- [same namespace CampaignSiegeStateHandler](../CampaignSiegeStateHandler)
