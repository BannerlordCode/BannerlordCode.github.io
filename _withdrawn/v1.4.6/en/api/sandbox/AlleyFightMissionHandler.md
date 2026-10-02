---
title: "AlleyFightMissionHandler"
description: "AlleyFightMissionHandler: a public class in SandBox.Missions.MissionLogics.Towns, inheriting MissionLogic, IMissionAgentSpawnLogic; 18 exposed members (16 methods, 1 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Missions/MissionLogics/Towns/AlleyFightMissionHandler.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AlleyFightMissionHandler

**Namespace:** `SandBox.Missions.MissionLogics.Towns`
**Module:** `SandBox`
**Type:** `public class AlleyFightMissionHandler : MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior`
**File:** `SandBox/Missions/MissionLogics/Towns/AlleyFightMissionHandler.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

AlleyFightMissionHandler lives in the SandBox module, source file SandBox/Missions/MissionLogics/Towns/AlleyFightMissionHandler.cs. It is a public class, implementing/inheriting MissionLogic, IMissionAgentSpawnLogic, IMissionBehavior; the inheritance chain is AlleyFightMissionHandler → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 18 public/protected members: 16 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AlleyFightMissionHandler lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Missions.MissionLogics.Towns`, inheritance chain AlleyFightMissionHandler → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 16/18, properties 1/18), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/Towns/AlleyFightMissionHandler.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `PlayerSide` | `public BattleSideEnum PlayerSide` | property |
| `AlleyFightMissionHandler` | `public AlleyFightMissionHandler(TroopRoster playerSideTroops, TroopRoster rivalSideTroops)` | constructor |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `EarlyStart` | `public override void EarlyStart()` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnEndMissionRequest` | `public override InquiryData OnEndMissionRequest(out bool canLeave)` | method |
| `OnRetreatMission` | `public override void OnRetreatMission()` | method |
| `OnRenderingStarted` | `public override void OnRenderingStarted()` | method |
| `OnMissionStateFinalized` | `public override void OnMissionStateFinalized()` | method |
| `StartSpawner` | `public void StartSpawner(BattleSideEnum side)` | method |
| `StopSpawner` | `public void StopSpawner(BattleSideEnum side)` | method |
| `IsSideSpawnEnabled` | `public bool IsSideSpawnEnabled(BattleSideEnum side)` | method |
| `IsSideDepleted` | `public bool IsSideDepleted(BattleSideEnum side)` | method |
| `GetReinforcementInterval` | `public float GetReinforcementInterval(BattleSideEnum side = BattleSideEnum.None)` | method |
| `IEnumerable` | `public IEnumerable<IAgentOriginBase>GetAllTroopsForSide(BattleSideEnum side)` | method |
| `GetNumberOfPlayerControllableTroops` | `public int GetNumberOfPlayerControllableTroops()` | method |
| `GetSpawnHorses` | `public bool GetSpawnHorses(BattleSideEnum side)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionLogic](../../mission-ext/MissionLogic/)
- [base / interface IMissionAgentSpawnLogic](../../mission-ext/IMissionAgentSpawnLogic/)
- [base / interface IMissionBehavior](../../mission-ext/IMissionBehavior/)
- [same namespace PrisonBreakMissionController](../PrisonBreakMissionController/)
- [same namespace TownCenterMissionController](../TownCenterMissionController/)
- [same namespace WorkshopMissionHandler](../WorkshopMissionHandler/)
