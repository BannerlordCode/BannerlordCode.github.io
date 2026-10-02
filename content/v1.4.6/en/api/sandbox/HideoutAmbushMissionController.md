---
title: "HideoutAmbushMissionController"
description: "HideoutAmbushMissionController: a public class in SandBox, inheriting MissionLogic; 22 exposed members (18 methods, 2 properties, 0 fields). Source: SandBox/Missions/MissionLogics/Hideout/HideoutAmbushMissionController.cs."
---
# HideoutAmbushMissionController

**Namespace:** `SandBox.Missions.MissionLogics.Hideout`
**Module:** `SandBox`
**Type:** `public class HideoutAmbushMissionController : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/Hideout/HideoutAmbushMissionController.cs`

## Overview

HideoutAmbushMissionController lives in the SandBox module, source file SandBox/Missions/MissionLogics/Hideout/HideoutAmbushMissionController.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is HideoutAmbushMissionController → MissionLogic. It exposes 22 public/protected members: 18 methods, 2 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HideoutAmbushMissionController is a top-level type in SandBox, namespace differing from (SandBox.Missions.MissionLogics.Hideout) the module directory; inheritance chain HideoutAmbushMissionController → MissionLogic. The surface is method-led (methods 18/22, properties 2/22), so it mostly exposes operations. MissionLogic on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/Hideout/HideoutAmbushMissionController.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsReadyForCallTroopsCinematic` | `public bool IsReadyForCallTroopsCinematic` | property |
| `HideoutAmbushMissionController` | `public HideoutAmbushMissionController(IMissionTroopSupplier[]suppliers, BattleSideEnum playerSide, int playerTroopCount)` | constructor |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `OnCreated` | `public override void OnCreated()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `OnAgentBuild` | `public override void OnAgentBuild(Agent agent, Banner banner)` | method |
| `OnAgentAlarmedStateChanged` | `public override void OnAgentAlarmedStateChanged(Agent agent, Agent.AIStateFlag flag)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | method |
| `OnEndMission` | `protected override void OnEndMission()` | method |
| `OnMissionStateFinalized` | `public override void OnMissionStateFinalized()` | method |
| `OnObjectUsed` | `public override void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)` | method |
| `OnStealthMissionCounterFailed` | `public void OnStealthMissionCounterFailed(OnStealthMissionCounterFailedEvent obj)` | method |
| `IsSideDepleted` | `public bool IsSideDepleted(BattleSideEnum side)` | method |
| `SetOverriddenHideoutBossCharacterObject` | `public void SetOverriddenHideoutBossCharacterObject(CharacterObject characterObject)` | method |
| `OnAgentsShouldBeEnabled` | `public void OnAgentsShouldBeEnabled()` | method |
| `StartBossFightDuelMode` | `public static void StartBossFightDuelMode()` | method |
| `StartBossFightBattleMode` | `public static void StartBossFightBattleMode()` | method |
| `KillAllSentries` | `public static string KillAllSentries(List<string>strings)` | method |
| `TroopData` | `public class TroopData` | property |
| `TroopData` | `public class TroopData` | nested type |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace HideoutAmbushBossFightCinematicController](../HideoutAmbushBossFightCinematicController)
- [same namespace HideoutCinematicController](../HideoutCinematicController)
- [same namespace HideoutMissionController](../HideoutMissionController)
