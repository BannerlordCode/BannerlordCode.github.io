---
title: "MissionAlleyHandler"
description: "MissionAlleyHandler: a public class in SandBox.Missions.MissionLogics, inheriting MissionLogic; 5 exposed members (4 methods, 1 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Missions/MissionLogics/MissionAlleyHandler.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionAlleyHandler

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class MissionAlleyHandler : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/MissionAlleyHandler.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MissionAlleyHandler lives in the SandBox module, source file SandBox/Missions/MissionLogics/MissionAlleyHandler.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is MissionAlleyHandler → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 5 public/protected members: 4 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionAlleyHandler lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Missions.MissionLogics`, inheritance chain MissionAlleyHandler → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 4/5, properties 1/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/MissionAlleyHandler.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CanThugConversationBeTriggered` | `public bool CanThugConversationBeTriggered` | property |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnAgentHit` | `public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)` | method |
| `StartCommonAreaBattle` | `public void StartCommonAreaBattle(Alley alley)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionLogic](../../mission-ext/MissionLogic/)
- [same namespace BattleAgentLogic](../BattleAgentLogic/)
- [same namespace BattleSurgeonLogic](../BattleSurgeonLogic/)
- [same namespace CampaignMissionComponent](../CampaignMissionComponent/)
- [same namespace CampaignSiegeStateHandler](../CampaignSiegeStateHandler/)
