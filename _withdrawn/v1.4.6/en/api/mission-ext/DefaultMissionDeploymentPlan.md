---
title: "DefaultMissionDeploymentPlan"
description: "DefaultMissionDeploymentPlan: a public class in TaleWorlds.MountAndBlade, inheriting IMissionDeploymentPlan; 37 exposed members (36 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/DefaultMissionDeploymentPlan.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultMissionDeploymentPlan

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class DefaultMissionDeploymentPlan : IMissionDeploymentPlan`
**File:** `TaleWorlds.MountAndBlade/DefaultMissionDeploymentPlan.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

DefaultMissionDeploymentPlan lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/DefaultMissionDeploymentPlan.cs. It is a public class, implementing/inheriting IMissionDeploymentPlan; the inheritance chain is DefaultMissionDeploymentPlan → IMissionDeploymentPlan. It exposes 37 public/protected members: 36 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultMissionDeploymentPlan lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain DefaultMissionDeploymentPlan → IMissionDeploymentPlan. The surface is method-led (methods 36/37, properties 0/37), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/DefaultMissionDeploymentPlan.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `DefaultMissionDeploymentPlan` | `public DefaultMissionDeploymentPlan(Mission mission)` | constructor |
| `Initialize` | `public void Initialize()` | method |
| `ClearDeploymentPlan` | `public void ClearDeploymentPlan(Team team)` | method |
| `ClearReinforcementPlan` | `public void ClearReinforcementPlan(Team team)` | method |
| `HasPlayerSpawnFrame` | `public bool HasPlayerSpawnFrame(BattleSideEnum battleSide)` | method |
| `GetPlayerSpawnFrame` | `public bool GetPlayerSpawnFrame(BattleSideEnum battleSide, out WorldPosition position, out Vec2 direction)` | method |
| `HasSignificantMountedTroops` | `public static bool HasSignificantMountedTroops(int footTroopCount, int mountedTroopCount)` | method |
| `ClearAddedTroops` | `public void ClearAddedTroops(Team team, bool isReinforcement = false)` | method |
| `ClearAll` | `public void ClearAll()` | method |
| `AddTroops` | `public void AddTroops(Team team, FormationClass formationClass, int footTroopCount, int mountedTroopCount = 0, bool isReinforcement = false)` | method |
| `SetSpawnWithHorses` | `public void SetSpawnWithHorses(Team team, bool spawnWithHorses)` | method |
| `MakeDefaultDeploymentPlans` | `public void MakeDefaultDeploymentPlans()` | method |
| `MakeDeploymentPlan` | `public void MakeDeploymentPlan(Team team, float spawnPathOffset = 0f, float targetOffset = 0f)` | method |
| `MakeReinforcementDeploymentPlan` | `public void MakeReinforcementDeploymentPlan(Team team)` | method |
| `RemakeDeploymentPlan` | `public bool RemakeDeploymentPlan(Team team)` | method |
| `IsPositionInsideDeploymentBoundaries` | `public bool IsPositionInsideDeploymentBoundaries(Team team, in Vec2 position)` | method |
| `GetClosestDeploymentBoundaryPosition` | `public Vec2 GetClosestDeploymentBoundaryPosition(Team team, in Vec2 position)` | method |
| `SupportsReinforcements` | `public bool SupportsReinforcements()` | method |
| `SupportsNavmesh` | `public bool SupportsNavmesh(Team team)` | method |
| `GetPathDeploymentBoundaryIntersection` | `public bool GetPathDeploymentBoundaryIntersection(Team team, in WorldPosition startPosition, in WorldPosition endPosition, out WorldPosition intersection)` | method |
| `IsPositionInsideSiegeDeploymentBoundaries` | `public bool IsPositionInsideSiegeDeploymentBoundaries(in Vec2 position)` | method |
| `GetSpawnPathOffset` | `public float GetSpawnPathOffset(Team team)` | method |
| `GetTargetOffset` | `public float GetTargetOffset(Team team)` | method |
| `GetTroopCount` | `public int GetTroopCount(Team team, bool isReinforcement = false)` | method |
| `GetFormationPlan` | `public IFormationDeploymentPlan GetFormationPlan(Team team, FormationClass fClass, bool isReinforcement)` | method |
| `IsPlanMade` | `public bool IsPlanMade(Team team)` | method |
| `IsPlanMade` | `public bool IsPlanMade(Team team, out bool isFirstPlan)` | method |
| `IsReinforcementPlanMade` | `public bool IsReinforcementPlanMade(Team team)` | method |
| `IsInitialPlanSuitableForFormations` | `public bool IsInitialPlanSuitableForFormations(Team team, [TupleElementNames(new string[]` | method |
| `HasDeploymentBoundaries` | `public bool HasDeploymentBoundaries(Team team)` | method |
| `GetDeploymentFrame` | `public MatrixFrame GetDeploymentFrame(Team team)` | method |
| `ProjectPositionToDeploymentBoundaries` | `public void ProjectPositionToDeploymentBoundaries(Team team, ref WorldPosition endPosition)` | method |
| `MBList` | `public MBReadOnlyList<ValueTuple<string, MBList<Vec2>>>GetDeploymentBoundaries(Team team)` | method |
| `GetMeanPosition` | `public Vec3 GetMeanPosition(Team team, bool isReinforcement = false)` | method |
| `UpdateReinforcementPlan` | `public void UpdateReinforcementPlan(Team team)` | method |
| `GetZoomFocusFrame` | `public MatrixFrame GetZoomFocusFrame(Team team)` | method |
| `GetZoomOffset` | `public float GetZoomOffset(Team team, float fovAngle)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IMissionDeploymentPlan](../IMissionDeploymentPlan/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
