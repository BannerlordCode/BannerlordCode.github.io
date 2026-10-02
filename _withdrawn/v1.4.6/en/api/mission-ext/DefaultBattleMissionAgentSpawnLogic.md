---
title: "DefaultBattleMissionAgentSpawnLogic"
description: "DefaultBattleMissionAgentSpawnLogic: a public class in TaleWorlds.MountAndBlade, inheriting MissionLogic, IBattleMissionAgentSpawnLogic; 45 exposed members (24 methods, 17 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/DefaultBattleMissionAgentSpawnLogic.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultBattleMissionAgentSpawnLogic

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class DefaultBattleMissionAgentSpawnLogic : MissionLogic, IBattleMissionAgentSpawnLogic, IMissionAgentSpawnLogic, IMissionBehavior`
**File:** `TaleWorlds.MountAndBlade/DefaultBattleMissionAgentSpawnLogic.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

DefaultBattleMissionAgentSpawnLogic lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/DefaultBattleMissionAgentSpawnLogic.cs. It is a public class, implementing/inheriting MissionLogic, IBattleMissionAgentSpawnLogic, IMissionAgentSpawnLogic, IMissionBehavior; the inheritance chain is DefaultBattleMissionAgentSpawnLogic → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 45 public/protected members: 24 methods, 17 properties, 2 events, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultBattleMissionAgentSpawnLogic lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain DefaultBattleMissionAgentSpawnLogic → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 24/45, properties 17/45), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/DefaultBattleMissionAgentSpawnLogic.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MaxNumberOfAgentsForMission` | `public static int MaxNumberOfAgentsForMission` | property |
| `MaxNumberOfTroopsForMission` | `public static int MaxNumberOfTroopsForMission` | property |
| `int>OnReinforcementsSpawned;` | `public event Action<BattleSideEnum, int>OnReinforcementsSpawned;` | event |
| `int>OnInitialTroopsSpawned;` | `public event Action<BattleSideEnum, int>OnInitialTroopsSpawned;` | event |
| `NumberOfRemainingTroops` | `public int NumberOfRemainingTroops` | property |
| `NumberOfActiveDefenderTroops` | `public int NumberOfActiveDefenderTroops` | property |
| `NumberOfActiveAttackerTroops` | `public int NumberOfActiveAttackerTroops` | property |
| `NumberOfRemainingDefenderTroops` | `public int NumberOfRemainingDefenderTroops` | property |
| `NumberOfRemainingAttackerTroops` | `public int NumberOfRemainingAttackerTroops` | property |
| `PlayerSide` | `public BattleSideEnum PlayerSide` | property |
| `TotalSpawnNumber` | `public int TotalSpawnNumber` | property |
| `BattleSize` | `public int BattleSize` | property |
| `NumberOfAgents` | `public int NumberOfAgents` | property |
| `DefenderActivePhase` | `public MissionSpawnPhase DefenderActivePhase` | property |
| `AttackerActivePhase` | `public MissionSpawnPhase AttackerActivePhase` | property |
| `SpawnSettings` | `public readonly ref MissionSpawnSettings SpawnSettings` | property |
| `DeploymentPlan` | `public IMissionDeploymentPlan DeploymentPlan` | property |
| `IsInitialSpawnOver` | `public bool IsInitialSpawnOver` | property |
| `IsDeploymentOver` | `public bool IsDeploymentOver` | property |
| `DefaultBattleMissionAgentSpawnLogic` | `public DefaultBattleMissionAgentSpawnLogic(IMissionTroopSupplier[]suppliers, BattleSideEnum playerSide, Mission.BattleSizeType battleSizeType)` | constructor |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `OnEndMission` | `protected override void OnEndMission()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `InitWithSinglePhase` | `public void InitWithSinglePhase(int defenderTotalSpawn, int attackerTotalSpawn, int defenderInitialSpawn, int attackerInitialSpawn, bool spawnDefenders, bool spawnAttackers, in MissionSpawnSettings spawnSettings)` | method |
| `IEnumerable` | `public IEnumerable<IAgentOriginBase>GetAllTroopsForSide(BattleSideEnum side)` | method |
| `SetCustomReinforcementSpawnTimer` | `public void SetCustomReinforcementSpawnTimer(ICustomReinforcementSpawnTimer timer)` | method |
| `SetSpawnTroops` | `public void SetSpawnTroops(BattleSideEnum side, bool spawnTroops, bool enforceSpawning = false)` | method |
| `SetSpawnHorses` | `public void SetSpawnHorses(BattleSideEnum side, bool spawnHorses)` | method |
| `StartSpawner` | `public void StartSpawner(BattleSideEnum side)` | method |
| `StopSpawner` | `public void StopSpawner(BattleSideEnum side)` | method |
| `IsSideSpawnEnabled` | `public bool IsSideSpawnEnabled(BattleSideEnum side)` | method |
| `OnSideDeploymentOver` | `public void OnSideDeploymentOver(BattleSideEnum battleSide)` | method |
| `GetNumberOfPlayerControllableTroops` | `public int GetNumberOfPlayerControllableTroops()` | method |
| `GetReinforcementInterval` | `public float GetReinforcementInterval(BattleSideEnum side = BattleSideEnum.None)` | method |
| `SetReinforcementsSpawnEnabled` | `public void SetReinforcementsSpawnEnabled(bool value, bool resetTimers = true)` | method |
| `GetTotalNumberOfTroopsForSide` | `public int GetTotalNumberOfTroopsForSide(BattleSideEnum side)` | method |
| `GetGeneralCharacterOfSide` | `public BasicCharacterObject GetGeneralCharacterOfSide(BattleSideEnum side)` | method |
| `GetSpawnHorses` | `public bool GetSpawnHorses(BattleSideEnum side)` | method |
| `IsSideDepleted` | `public bool IsSideDepleted(BattleSideEnum side)` | method |
| `AddPhaseChangeAction` | `public void AddPhaseChangeAction(BattleSideEnum side, DefaultBattleMissionAgentSpawnLogic.OnPhaseChangedDelegate onPhaseChanged)` | method |
| `ComputeDeploymentBaseOffsets` | `public static void ComputeDeploymentBaseOffsets(SpawnPathData sideSpawnPathData, float baseDeploymentOffset, out float deployingSideBaseOffset, out float opposingSideBaseOffset)` | method |
| `ComputeTeamDeploymentOffsets` | `public static void ComputeTeamDeploymentOffsets(SpawnPathData spawnPathData, float deploymentBaseOffset, float interTeamGapOffset, float[]teamOffsetRanges, out float[]teamDeployOffsets)` | method |
| `OnPhaseChangedDelegate` | `public delegate void OnPhaseChangedDelegate();` | method |
| `OnPhaseChangedDelegate` | `public delegate void OnPhaseChangedDelegate()` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionLogic](../MissionLogic/)
- [base / interface IBattleMissionAgentSpawnLogic](../IBattleMissionAgentSpawnLogic/)
- [base / interface IMissionAgentSpawnLogic](../IMissionAgentSpawnLogic/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
