---
title: "BattleAgentLogic"
description: "BattleAgentLogic: a public class in SandBox, inheriting MissionLogic; 8 exposed members (8 methods, 0 properties, 0 fields). Source: SandBox/Missions/MissionLogics/BattleAgentLogic.cs."
---
# BattleAgentLogic

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class BattleAgentLogic : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/BattleAgentLogic.cs`

## Overview

BattleAgentLogic lives in the SandBox module, source file SandBox/Missions/MissionLogics/BattleAgentLogic.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is BattleAgentLogic → MissionLogic. It exposes 8 public/protected members: 8 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BattleAgentLogic is a top-level type in SandBox, namespace differing from (SandBox.Missions.MissionLogics) the module directory; inheritance chain BattleAgentLogic → MissionLogic. The surface is method-led (methods 8/8, properties 0/8), so it mostly exposes operations. MissionLogic on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/BattleAgentLogic.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnAgentBuild` | `public override void OnAgentBuild(Agent agent, Banner banner)` | method |
| `OnAgentHit` | `public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)` | method |
| `OnAgentTeamChanged` | `public override void OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent)` | method |
| `OnScoreHit` | `public override void OnScoreHit(Agent affectedAgent, Agent affectorAgent, WeaponComponentData attackerWeapon, bool isBlocked, bool isSiegeEngineHit, in Blow blow, in AttackCollisionData collisionData, float damagedHp, float hitDistance, float shotDifficulty)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | method |
| `OnAgentFleeing` | `public override void OnAgentFleeing(Agent affectedAgent)` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BattleSurgeonLogic](../BattleSurgeonLogic)
- [same namespace CampaignMissionComponent](../CampaignMissionComponent)
- [same namespace CampaignSiegeStateHandler](../CampaignSiegeStateHandler)
- [same namespace CombatMissionWithDialogueController](../CombatMissionWithDialogueController)
