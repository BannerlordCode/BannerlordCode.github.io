---
title: "IndoorMissionController"
description: "IndoorMissionController: a public class in SandBox, inheriting MissionLogic; 3 exposed members (3 methods, 0 properties, 0 fields). Source: SandBox/Missions/MissionLogics/IndoorMissionController.cs."
---
# IndoorMissionController

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class IndoorMissionController : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/IndoorMissionController.cs`

## Overview

IndoorMissionController lives in the SandBox module, source file SandBox/Missions/MissionLogics/IndoorMissionController.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is IndoorMissionController → MissionLogic. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IndoorMissionController is a top-level type in SandBox, namespace differing from (SandBox.Missions.MissionLogics) the module directory; inheritance chain IndoorMissionController → MissionLogic. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. MissionLogic on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/IndoorMissionController.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnCreated` | `public override void OnCreated()` | method |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `AfterStart` | `public override void AfterStart()` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BattleAgentLogic](../BattleAgentLogic)
- [same namespace BattleSurgeonLogic](../BattleSurgeonLogic)
- [same namespace CampaignMissionComponent](../CampaignMissionComponent)
- [same namespace CampaignSiegeStateHandler](../CampaignSiegeStateHandler)
