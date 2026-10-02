---
title: "CombatMissionWithDialogueController"
description: "CombatMissionWithDialogueController: a public class in SandBox, inheriting MissionLogic, IMissionAgentSpawnLogic; 17 exposed members (15 methods, 1 properties, 0 fields). Source: SandBox/Missions/MissionLogics/CombatMissionWithDialogueController.cs."
---
# CombatMissionWithDialogueController

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class CombatMissionWithDialogueController : MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`
**File:** `SandBox/Missions/MissionLogics/CombatMissionWithDialogueController.cs`

## Overview

CombatMissionWithDialogueController lives in the SandBox module, source file SandBox/Missions/MissionLogics/CombatMissionWithDialogueController.cs. It is a public class, implementing/inheriting MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior; the inheritance chain is CombatMissionWithDialogueController → MissionLogic. It exposes 17 public/protected members: 15 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CombatMissionWithDialogueController is a top-level type in SandBox, namespace differing from (SandBox.Missions.MissionLogics) the module directory; inheritance chain CombatMissionWithDialogueController → MissionLogic. The surface is method-led (methods 15/17, properties 1/17), so it mostly exposes operations. MissionLogic on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/CombatMissionWithDialogueController.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PlayerSide` | `public BattleSideEnum PlayerSide` | property |
| `CombatMissionWithDialogueController` | `public CombatMissionWithDialogueController(IMissionTroopSupplier[]suppliers, BasicCharacterObject characterToTalkTo)` | constructor |
| `OnCreated` | `public override void OnCreated()` | method |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `OnAgentHit` | `public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)` | method |
| `StartFight` | `public void StartFight(bool hasPlayerChangedSide)` | method |
| `StartConversation` | `public void StartConversation(Agent agent, bool setActionsInstantly)` | method |
| `StartSpawner` | `public void StartSpawner(BattleSideEnum side)` | method |
| `StopSpawner` | `public void StopSpawner(BattleSideEnum side)` | method |
| `IsSideSpawnEnabled` | `public bool IsSideSpawnEnabled(BattleSideEnum side)` | method |
| `GetReinforcementInterval` | `public float GetReinforcementInterval(BattleSideEnum battleSide = BattleSideEnum.None)` | method |
| `IsSideDepleted` | `public bool IsSideDepleted(BattleSideEnum side)` | method |
| `IEnumerable` | `public IEnumerable<IAgentOriginBase>GetAllTroopsForSide(BattleSideEnum side)` | method |
| `GetNumberOfPlayerControllableTroops` | `public int GetNumberOfPlayerControllableTroops()` | method |
| `GetSpawnHorses` | `public bool GetSpawnHorses(BattleSideEnum side)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BattleAgentLogic](../BattleAgentLogic)
- [same namespace BattleSurgeonLogic](../BattleSurgeonLogic)
- [same namespace CampaignMissionComponent](../CampaignMissionComponent)
- [same namespace CampaignSiegeStateHandler](../CampaignSiegeStateHandler)
