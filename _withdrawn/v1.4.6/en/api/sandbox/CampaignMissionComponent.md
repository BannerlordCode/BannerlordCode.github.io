---
title: "CampaignMissionComponent"
description: "CampaignMissionComponent: a public class in SandBox.Missions.MissionLogics, inheriting MissionLogic, ICampaignMission; 17 exposed members (13 methods, 4 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Missions/MissionLogics/CampaignMissionComponent.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CampaignMissionComponent

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class CampaignMissionComponent : MissionLogic, ICampaignMission`
**File:** `SandBox/Missions/MissionLogics/CampaignMissionComponent.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

CampaignMissionComponent lives in the SandBox module, source file SandBox/Missions/MissionLogics/CampaignMissionComponent.cs. It is a public class, implementing/inheriting MissionLogic, ICampaignMission; the inheritance chain is CampaignMissionComponent → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 17 public/protected members: 13 methods, 4 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CampaignMissionComponent lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Missions.MissionLogics`, inheritance chain CampaignMissionComponent → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 13/17, properties 4/17), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/CampaignMissionComponent.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `State` | `public GameState State` | property |
| `AgentSupplier` | `public IMissionTroopSupplier AgentSupplier` | property |
| `Location` | `public Location Location` | property |
| `LastVisitedAlley` | `public Alley LastVisitedAlley` | property |
| `OnAgentCreated` | `public override void OnAgentCreated(Agent agent)` | method |
| `OnPreDisplayMissionTick` | `public override void OnPreDisplayMissionTick(float dt)` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `OnObjectDisabled` | `protected override void OnObjectDisabled(DestructableComponent missionObject)` | method |
| `EarlyStart` | `public override void EarlyStart()` | method |
| `OnCreated` | `public override void OnCreated()` | method |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnMissionResultReady` | `public override void OnMissionResultReady(MissionResult missionResult)` | method |
| `OnEndMission` | `protected override void OnEndMission()` | method |
| `PlayConversationSoundEvent` | `public void PlayConversationSoundEvent(string soundPath)` | method |
| `FadeOutCharacter` | `public void FadeOutCharacter(CharacterObject characterObject)` | method |
| `OnGameStateChanged` | `public void OnGameStateChanged()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionLogic](../../mission-ext/MissionLogic/)
- [base / interface ICampaignMission](../../campaign/ICampaignMission/)
- [same namespace BattleAgentLogic](../BattleAgentLogic/)
- [same namespace BattleSurgeonLogic](../BattleSurgeonLogic/)
- [same namespace CampaignSiegeStateHandler](../CampaignSiegeStateHandler/)
- [same namespace CombatMissionWithDialogueController](../CombatMissionWithDialogueController/)
