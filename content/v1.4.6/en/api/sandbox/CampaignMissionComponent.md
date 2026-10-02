---
title: "CampaignMissionComponent"
description: "CampaignMissionComponent: a public class in SandBox, inheriting MissionLogic, ICampaignMission; 17 exposed members (13 methods, 4 properties, 0 fields). Source: SandBox/Missions/MissionLogics/CampaignMissionComponent.cs."
---
# CampaignMissionComponent

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class CampaignMissionComponent : MissionLogic, ICampaignMission`
**File:** `SandBox/Missions/MissionLogics/CampaignMissionComponent.cs`

## Overview

CampaignMissionComponent lives in the SandBox module, source file SandBox/Missions/MissionLogics/CampaignMissionComponent.cs. It is a public class, implementing/inheriting MissionLogic, ICampaignMission; the inheritance chain is CampaignMissionComponent → MissionLogic. It exposes 17 public/protected members: 13 methods, 4 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CampaignMissionComponent is a top-level type in SandBox, namespace differing from (SandBox.Missions.MissionLogics) the module directory; inheritance chain CampaignMissionComponent → MissionLogic. The surface is method-led (methods 13/17, properties 4/17), so it mostly exposes operations. MissionLogic on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/CampaignMissionComponent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BattleAgentLogic](../BattleAgentLogic)
- [same namespace BattleSurgeonLogic](../BattleSurgeonLogic)
- [same namespace CampaignSiegeStateHandler](../CampaignSiegeStateHandler)
- [same namespace CombatMissionWithDialogueController](../CombatMissionWithDialogueController)
