---
title: "DefaultTeamDeploymentPlan"
description: "DefaultTeamDeploymentPlan: a public class in TaleWorlds.MountAndBlade, inheriting ITeamDeploymentPlan; 28 exposed members (20 methods, 2 properties, 5 fields). Source: TaleWorlds.MountAndBlade/DefaultTeamDeploymentPlan.cs."
---
# DefaultTeamDeploymentPlan

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class DefaultTeamDeploymentPlan : ITeamDeploymentPlan`
**File:** `TaleWorlds.MountAndBlade/DefaultTeamDeploymentPlan.cs`

## Overview

DefaultTeamDeploymentPlan lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/DefaultTeamDeploymentPlan.cs. It is a public class, implementing/inheriting ITeamDeploymentPlan; the inheritance chain is DefaultTeamDeploymentPlan → ITeamDeploymentPlan. It exposes 28 public/protected members: 20 methods, 2 properties, 5 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultTeamDeploymentPlan is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain DefaultTeamDeploymentPlan → ITeamDeploymentPlan. The surface is method-led (methods 20/28, properties 2/28), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/DefaultTeamDeploymentPlan.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Team` | `public Team Team` | property |
| `SpawnWithHorses` | `public bool SpawnWithHorses` | property |
| `DefaultTeamDeploymentPlan` | `public DefaultTeamDeploymentPlan(Mission mission, Team team)` | constructor |
| `SetSpawnWithHorses` | `public void SetSpawnWithHorses(bool value)` | method |
| `MakeDeploymentPlan` | `public void MakeDeploymentPlan(float spawnPathOffset = 0f, float targetOffset = 0f, FormationSceneSpawnEntry[, ]formationSceneSpawnEntries = null, bool isReinforcement = false)` | method |
| `UpdateReinforcementPlans` | `public void UpdateReinforcementPlans()` | method |
| `ClearPlan` | `public void ClearPlan(bool isReinforcement = false)` | method |
| `ClearAddedTroops` | `public void ClearAddedTroops(bool isReinforcement = false)` | method |
| `AddTroops` | `public void AddTroops(FormationClass formationClass, int footTroopCount, int mountedTroopCount, bool isReinforcement = false)` | method |
| `GetTroopCount` | `public int GetTroopCount(bool isReinforcement = false)` | method |
| `IsFirstPlan` | `public bool IsFirstPlan(bool isReinforcement = false)` | method |
| `IsPlanMade` | `public bool IsPlanMade(bool isReinforcement = false)` | method |
| `MBList` | `public MBReadOnlyList<ValueTuple<string, MBList<Vec2>>>GetDeploymentBoundaries()` | method |
| `GetSpawnPathOffset` | `public float GetSpawnPathOffset(bool isReinforcement = false)` | method |
| `GetTargetOffset` | `public float GetTargetOffset(bool isReinforcement = false)` | method |
| `GetDeploymentFrame` | `public MatrixFrame GetDeploymentFrame()` | method |
| `HasDeploymentBoundaries` | `public bool HasDeploymentBoundaries()` | method |
| `GetFormationPlan` | `public IFormationDeploymentPlan GetFormationPlan(FormationClass fClass, bool isReinforcement = false)` | method |
| `GetMeanPosition` | `public Vec3 GetMeanPosition(bool isReinforcement = false)` | method |
| `IsInitialPlanSuitableForFormations` | `public bool IsInitialPlanSuitableForFormations(ValueTuple<int, int>[]troopDataPerFormationClass)` | method |
| `IsPositionInsideDeploymentBoundaries` | `public bool IsPositionInsideDeploymentBoundaries(in Vec2 position, [TupleElementNames(new string[]` | method |
| `GetClosestDeploymentBoundaryPosition` | `public Vec2 GetClosestDeploymentBoundaryPosition(in Vec2 position)` | method |
| `GetPathDeploymentBoundaryIntersection` | `public bool GetPathDeploymentBoundaryIntersection(in WorldPosition startPosition, in WorldPosition endPosition, out WorldPosition intersection)` | method |
| `DeployZoneMinimumWidth` | `public const float DeployZoneMinimumWidth` | field |
| `DeployZoneForwardMargin` | `public const float DeployZoneForwardMargin` | field |
| `DeployZoneExtraWidthPerTroop` | `public const float DeployZoneExtraWidthPerTroop` | field |
| `DefenderDeploymentFrameEntityTag` | `public const string DefenderDeploymentFrameEntityTag` | field |
| `AttackerDeploymentFrameEntityTag` | `public const string AttackerDeploymentFrameEntityTag` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface ITeamDeploymentPlan](../ITeamDeploymentPlan)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
