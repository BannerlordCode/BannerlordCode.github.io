---
title: "DefaultDeploymentPlan"
description: "DefaultDeploymentPlan: a public class in TaleWorlds.MountAndBlade; 29 exposed members (15 methods, 11 properties, 3 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/DefaultDeploymentPlan.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultDeploymentPlan

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class DefaultDeploymentPlan`
**File:** `TaleWorlds.MountAndBlade/DefaultDeploymentPlan.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

DefaultDeploymentPlan lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/DefaultDeploymentPlan.cs. It is a public class; the inheritance chain is DefaultDeploymentPlan. It exposes 29 public/protected members: 15 methods, 11 properties, 3 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultDeploymentPlan lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain DefaultDeploymentPlan. The surface is method-led (methods 15/29, properties 11/29), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/DefaultDeploymentPlan.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SpawnWithHorses` | `public bool SpawnWithHorses` | property |
| `PlanCount` | `public int PlanCount` | property |
| `IsPlanMade` | `public bool IsPlanMade` | property |
| `SpawnPathOffset` | `public float SpawnPathOffset` | property |
| `TargetOffset` | `public float TargetOffset` | property |
| `IsSafeToDeploy` | `public bool IsSafeToDeploy` | property |
| `SafetyScore` | `public float SafetyScore` | property |
| `FootTroopCount` | `public int FootTroopCount` | property |
| `MountedTroopCount` | `public int MountedTroopCount` | property |
| `TroopCount` | `public int TroopCount` | property |
| `MeanPosition` | `public Vec3 MeanPosition` | property |
| `CreateInitialPlan` | `public static DefaultDeploymentPlan CreateInitialPlan(Mission mission, Team team)` | method |
| `CreateReinforcementPlan` | `public static DefaultDeploymentPlan CreateReinforcementPlan(Mission mission, Team team)` | method |
| `CreateReinforcementPlanWithSpawnPath` | `public static DefaultDeploymentPlan CreateReinforcementPlanWithSpawnPath(Mission mission, Team team, SpawnPathData spawnPathData)` | method |
| `SetSpawnWithHorses` | `public void SetSpawnWithHorses(bool value)` | method |
| `MakeDeploymentPlan` | `public void MakeDeploymentPlan(float spawnPathOffset = 0f, float targetOffset = 0f, FormationSceneSpawnEntry[, ]formationSceneSpawnEntries = null)` | method |
| `ClearPlan` | `public void ClearPlan()` | method |
| `ClearAddedTroops` | `public void ClearAddedTroops()` | method |
| `AddTroops` | `public void AddTroops(FormationClass formationClass, int footTroopCount, int mountedTroopCount)` | method |
| `GetFormationPlan` | `public DefaultFormationDeploymentPlan GetFormationPlan(FormationClass fClass)` | method |
| `GetFormationDeploymentFrame` | `public bool GetFormationDeploymentFrame(FormationClass fClass, out MatrixFrame frame)` | method |
| `GetFirstValidFormationDeploymentFrame` | `public bool GetFirstValidFormationDeploymentFrame(out MatrixFrame frame)` | method |
| `IsPlanSuitableForFormations` | `public bool IsPlanSuitableForFormations(ValueTuple<int, int>[]troopDataPerFormationClass)` | method |
| `UpdateSafetyScore` | `public void UpdateSafetyScore()` | method |
| `GetFrameFromFormationSpawnEntity` | `public WorldFrame GetFrameFromFormationSpawnEntity(GameEntity formationSpawnEntity, float depthOffset = 0f)` | method |
| `float>GetFormationSpawnWidthAndDepth` | `public static ValueTuple<float, float>GetFormationSpawnWidthAndDepth(FormationClass formationNo, int troopCount, bool hasMountedTroops, bool considerCavalryAsInfantry = false)` | method |
| `VerticalFormationGap` | `public const float VerticalFormationGap` | field |
| `HorizontalFormationGap` | `public const float HorizontalFormationGap` | field |
| `MaxSafetyScore` | `public const float MaxSafetyScore` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
