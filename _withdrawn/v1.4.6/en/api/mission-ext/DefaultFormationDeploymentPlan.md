---
title: "DefaultFormationDeploymentPlan"
description: "DefaultFormationDeploymentPlan: a public class in TaleWorlds.MountAndBlade, inheriting IFormationDeploymentPlan; 23 exposed members (13 methods, 9 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/DefaultFormationDeploymentPlan.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultFormationDeploymentPlan

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class DefaultFormationDeploymentPlan : IFormationDeploymentPlan`
**File:** `TaleWorlds.MountAndBlade/DefaultFormationDeploymentPlan.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

DefaultFormationDeploymentPlan lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/DefaultFormationDeploymentPlan.cs. It is a public class, implementing/inheriting IFormationDeploymentPlan; the inheritance chain is DefaultFormationDeploymentPlan → IFormationDeploymentPlan. It exposes 23 public/protected members: 13 methods, 9 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultFormationDeploymentPlan lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain DefaultFormationDeploymentPlan → IFormationDeploymentPlan. The surface is method-led (methods 13/23, properties 9/23), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/DefaultFormationDeploymentPlan.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Class` | `public FormationClass Class` | property |
| `SpawnClass` | `public FormationClass SpawnClass` | property |
| `PlannedWidth` | `public float PlannedWidth` | property |
| `PlannedDepth` | `public float PlannedDepth` | property |
| `PlannedTroopCount` | `public int PlannedTroopCount` | property |
| `PlannedFootTroopCount` | `public int PlannedFootTroopCount` | property |
| `PlannedMountedTroopCount` | `public int PlannedMountedTroopCount` | property |
| `HasDimensions` | `public bool HasDimensions` | property |
| `HasSignificantMountedTroops` | `public bool HasSignificantMountedTroops` | property |
| `DefaultFormationDeploymentPlan` | `public DefaultFormationDeploymentPlan(FormationClass fClass)` | constructor |
| `HasFrame` | `public bool HasFrame()` | method |
| `GetDefaultFlank` | `public FormationDeploymentFlank GetDefaultFlank(int formationTroopCount, bool teamPlanHasAnyFootTroops, bool spawnWithHorses = false)` | method |
| `GetFlankDeploymentOrder` | `public FormationDeploymentOrder GetFlankDeploymentOrder(int offset = 0)` | method |
| `GetFrame` | `public MatrixFrame GetFrame()` | method |
| `GetPosition` | `public Vec3 GetPosition()` | method |
| `GetDirection` | `public Vec2 GetDirection()` | method |
| `CreateNewDeploymentWorldPosition` | `public WorldPosition CreateNewDeploymentWorldPosition(WorldPosition.WorldPositionEnforcedCache worldPositionEnforcedCache)` | method |
| `Clear` | `public void Clear()` | method |
| `SetPlannedTroopCount` | `public void SetPlannedTroopCount(int footTroopCount, int mountedTroopCount)` | method |
| `SetPlannedDimensions` | `public void SetPlannedDimensions(float width, float depth)` | method |
| `SetFrame` | `public void SetFrame(in WorldFrame frame)` | method |
| `SetSpawnClass` | `public void SetSpawnClass(FormationClass spawnClass)` | method |
| `GetFormationDefaultFlankAux` | `public static FormationDeploymentFlank GetFormationDefaultFlankAux(FormationClass formationClass, int formationTroopCount, bool teamPlanHasAnyFootTroops, bool hasSignificantMountedTroops, bool canSpawnWithHorses)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IFormationDeploymentPlan](../IFormationDeploymentPlan/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
