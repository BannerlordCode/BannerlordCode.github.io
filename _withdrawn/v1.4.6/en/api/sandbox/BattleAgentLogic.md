---
title: "BattleAgentLogic"
description: "BattleAgentLogic: a public class in SandBox.Missions.MissionLogics, inheriting MissionLogic; 8 exposed members (8 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Missions/MissionLogics/BattleAgentLogic.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BattleAgentLogic

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class BattleAgentLogic : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/BattleAgentLogic.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

BattleAgentLogic lives in the SandBox module, source file SandBox/Missions/MissionLogics/BattleAgentLogic.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is BattleAgentLogic → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 8 public/protected members: 8 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BattleAgentLogic lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Missions.MissionLogics`, inheritance chain BattleAgentLogic → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 8/8, properties 0/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/BattleAgentLogic.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionLogic](../../mission-ext/MissionLogic/)
- [same namespace BattleSurgeonLogic](../BattleSurgeonLogic/)
- [same namespace CampaignMissionComponent](../CampaignMissionComponent/)
- [same namespace CampaignSiegeStateHandler](../CampaignSiegeStateHandler/)
- [same namespace CombatMissionWithDialogueController](../CombatMissionWithDialogueController/)
