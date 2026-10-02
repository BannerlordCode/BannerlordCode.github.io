---
title: "MissionAgentHandler"
description: "MissionAgentHandler: a public class in SandBox, inheriting MissionLogic; 31 exposed members (27 methods, 3 properties, 0 fields). Source: SandBox/Missions/MissionLogics/MissionAgentHandler.cs."
---
# MissionAgentHandler

**Namespace:** `SandBox.Missions.MissionLogics`
**Module:** `SandBox`
**Type:** `public class MissionAgentHandler : MissionLogic`
**File:** `SandBox/Missions/MissionLogics/MissionAgentHandler.cs`

## Overview

MissionAgentHandler lives in the SandBox module, source file SandBox/Missions/MissionLogics/MissionAgentHandler.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is MissionAgentHandler → MissionLogic. It exposes 31 public/protected members: 27 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionAgentHandler is a top-level type in SandBox, namespace differing from (SandBox.Missions.MissionLogics) the module directory; inheritance chain MissionAgentHandler → MissionLogic. The surface is method-led (methods 27/31, properties 3/31), so it mostly exposes operations. MissionLogic on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Missions/MissionLogics/MissionAgentHandler.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `HasPassages` | `public bool HasPassages()` | method |
| `List` | `public List<UsableMachine>TownPassageProps` | property |
| `List` | `public List<UsableMachine>DisabledPassages` | property |
| `List` | `public List<UsableMachine>UsablePoints` | property |
| `MissionAgentHandler` | `public MissionAgentHandler()` | constructor |
| `EarlyStart` | `public override void EarlyStart()` | method |
| `OnRenderingStarted` | `public override void OnRenderingStarted()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `OnEndMission` | `protected override void OnEndMission()` | method |
| `OnMissionModeChange` | `public override void OnMissionModeChange(MissionMode oldMissionMode, bool atStart)` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)` | method |
| `DetectMissingEntities` | `public void DetectMissingEntities()` | method |
| `int>FindUnusedUsablePointCount` | `public Dictionary<string, int>FindUnusedUsablePointCount()` | method |
| `SpawnLocationCharacters` | `public void SpawnLocationCharacters(string overridenTagValue = null)` | method |
| `SpawnDefaultLocationCharacter` | `public Agent SpawnDefaultLocationCharacter(LocationCharacter locationCharacter, bool simulateAgentAfterSpawn = false)` | method |
| `SimulateAgent` | `public void SimulateAgent(Agent agent)` | method |
| `FadeoutExitingLocationCharacter` | `public void FadeoutExitingLocationCharacter(LocationCharacter locationCharacter)` | method |
| `SpawnEnteringLocationCharacter` | `public void SpawnEnteringLocationCharacter(LocationCharacter locationCharacter, Location fromLocation)` | method |
| `HasUsablePointWithTag` | `public bool HasUsablePointWithTag(string tag)` | method |
| `IEnumerable` | `public IEnumerable<string>GetAllSpawnTags()` | method |
| `List` | `public List<UsableMachine>GetAllUsablePointsWithTag(string tag)` | method |
| `SpawnWanderingAgent` | `public Agent SpawnWanderingAgent(LocationCharacter locationCharacter)` | method |
| `SpawnWanderingAgentWithDelay` | `public void SpawnWanderingAgentWithDelay(LocationCharacter locationCharacter, MatrixFrame matrixFrame, GameEntity spawnEntity, bool noHorses = true, bool hasTorch = false, float delay = 3f)` | method |
| `SpawnWanderingAgentWithInitialFrame` | `public Agent SpawnWanderingAgentWithInitialFrame(LocationCharacter locationCharacter, MatrixFrame spawnPointFrame, WeakGameEntity spawnEntity, bool noHorses = true, bool hasTorch = false)` | method |
| `GetRandomTournamentTeamColor` | `public static uint GetRandomTournamentTeamColor(int teamIndex)` | method |
| `uint>GetAgentSettlementColors` | `public static ValueTuple<uint, uint>GetAgentSettlementColors(LocationCharacter locationCharacter)` | method |
| `FindUnusedPointWithTagForAgent` | `public UsableMachine FindUnusedPointWithTagForAgent(Agent agent, string tag)` | method |
| `List` | `public List<UsableMachine>FindUnusedPoints(string tag)` | method |
| `List` | `public List<UsableMachine>FindAllUnusedPoints(Agent agent, string primaryTag)` | method |
| `TeleportTargetAgentNearReferenceAgent` | `public void TeleportTargetAgentNearReferenceAgent(Agent referenceAgent, Agent teleportAgent, bool teleportFollowers, bool teleportOpposite)` | method |
| `GetPointCountOfUsableMachine` | `public static int GetPointCountOfUsableMachine(UsableMachine usableMachine, bool checkForUnusedOnes)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BattleAgentLogic](../BattleAgentLogic)
- [same namespace BattleSurgeonLogic](../BattleSurgeonLogic)
- [same namespace CampaignMissionComponent](../CampaignMissionComponent)
- [same namespace CampaignSiegeStateHandler](../CampaignSiegeStateHandler)
