---
title: "HouseMissionController"
description: "HouseMissionController: a public class in SandBox, inheriting MissionLogic; 4 exposed members (4 methods, 0 properties, 0 fields). Source: SandBox/Missions/MissionLogics/HouseMissionController.cs."
---
# HouseMissionController

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class HouseMissionController : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/HouseMissionController.cs`

## Overview

HouseMissionController lives in the SandBox module, source file SandBox/Missions/MissionLogics/HouseMissionController.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is HouseMissionController → MissionLogic. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HouseMissionController is a top-level type in SandBox, namespace differing from (SandBox.Missions.MissionLogics) the module directory; inheritance chain HouseMissionController → MissionLogic. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. MissionLogic on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/HouseMissionController.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `OnCreated` | `public override void OnCreated()` | method |
| `EarlyStart` | `public override void EarlyStart()` | method |
| `AfterStart` | `public override void AfterStart()` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BattleAgentLogic](../BattleAgentLogic)
- [same namespace BattleSurgeonLogic](../BattleSurgeonLogic)
- [same namespace CampaignMissionComponent](../CampaignMissionComponent)
- [same namespace CampaignSiegeStateHandler](../CampaignSiegeStateHandler)
