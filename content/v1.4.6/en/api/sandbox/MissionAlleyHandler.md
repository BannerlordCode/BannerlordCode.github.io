---
title: "MissionAlleyHandler"
description: "MissionAlleyHandler: a public class in SandBox, inheriting MissionLogic; 5 exposed members (4 methods, 1 properties, 0 fields). Source: SandBox/Missions/MissionLogics/MissionAlleyHandler.cs."
---
# MissionAlleyHandler

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class MissionAlleyHandler : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/MissionAlleyHandler.cs`

## Overview

MissionAlleyHandler lives in the SandBox module, source file SandBox/Missions/MissionLogics/MissionAlleyHandler.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is MissionAlleyHandler → MissionLogic. It exposes 5 public/protected members: 4 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionAlleyHandler is a top-level type in SandBox, namespace differing from (SandBox.Missions.MissionLogics) the module directory; inheritance chain MissionAlleyHandler → MissionLogic. The surface is method-led (methods 4/5, properties 1/5), so it mostly exposes operations. MissionLogic on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/MissionAlleyHandler.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CanThugConversationBeTriggered` | `public bool CanThugConversationBeTriggered` | property |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnAgentHit` | `public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)` | method |
| `StartCommonAreaBattle` | `public void StartCommonAreaBattle(Alley alley)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BattleAgentLogic](../BattleAgentLogic)
- [same namespace BattleSurgeonLogic](../BattleSurgeonLogic)
- [same namespace CampaignMissionComponent](../CampaignMissionComponent)
- [same namespace CampaignSiegeStateHandler](../CampaignSiegeStateHandler)
