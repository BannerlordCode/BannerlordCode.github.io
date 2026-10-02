---
title: "BattleSurgeonLogic"
description: "BattleSurgeonLogic: a public class in SandBox, inheriting MissionLogic; 2 exposed members (2 methods, 0 properties, 0 fields). Source: SandBox/Missions/MissionLogics/BattleSurgeonLogic.cs."
---
# BattleSurgeonLogic

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class BattleSurgeonLogic : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/BattleSurgeonLogic.cs`

## Overview

BattleSurgeonLogic lives in the SandBox module, source file SandBox/Missions/MissionLogics/BattleSurgeonLogic.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is BattleSurgeonLogic → MissionLogic. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BattleSurgeonLogic is a top-level type in SandBox, namespace differing from (SandBox.Missions.MissionLogics) the module directory; inheritance chain BattleSurgeonLogic → MissionLogic. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. MissionLogic on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/BattleSurgeonLogic.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnGetAgentState` | `protected override void OnGetAgentState(Agent agent, bool usedSurgery)` | method |
| `OnAgentCreated` | `public override void OnAgentCreated(Agent agent)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BattleAgentLogic](../BattleAgentLogic)
- [same namespace CampaignMissionComponent](../CampaignMissionComponent)
- [same namespace CampaignSiegeStateHandler](../CampaignSiegeStateHandler)
- [same namespace CombatMissionWithDialogueController](../CombatMissionWithDialogueController)
