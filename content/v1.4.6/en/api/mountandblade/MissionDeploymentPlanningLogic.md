---
title: "MissionDeploymentPlanningLogic"
description: "MissionDeploymentPlanningLogic: a public class in TaleWorlds.MountAndBlade, inheriting MissionLogic, IMissionDeploymentPlan; 24 exposed members (24 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MissionDeploymentPlanningLogic.cs."
---
# MissionDeploymentPlanningLogic

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class MissionDeploymentPlanningLogic : MissionLogic, IMissionDeploymentPlan`
**File:** `TaleWorlds.MountAndBlade/MissionDeploymentPlanningLogic.cs`

## Overview

MissionDeploymentPlanningLogic lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionDeploymentPlanningLogic.cs. It is a public class (abstract), implementing/inheriting MissionLogic, IMissionDeploymentPlan; the inheritance chain is MissionDeploymentPlanningLogic → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 24 public/protected members: 24 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionDeploymentPlanningLogic is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MissionDeploymentPlanningLogic → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 24/24, properties 0/24), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionDeploymentPlanningLogic.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Initialize` | `public virtual void Initialize()` | method |
| `ClearAll` | `public virtual void ClearAll()` | method |
| `MakeDefaultDeploymentPlans` | `public virtual void MakeDefaultDeploymentPlans()` | method |
| `MakeDeploymentPlan` | `public virtual void MakeDeploymentPlan(Team team, float spawnPathOffset = 0f, float targetPathOffset = 0f)` | method |
| `RemakeDeploymentPlan` | `public virtual bool RemakeDeploymentPlan(Team team)` | method |
| `ClearDeploymentPlan` | `public virtual void ClearDeploymentPlan(Team team)` | method |
| `IsPlanMade` | `public virtual bool IsPlanMade(Team team)` | method |
| `IsPlanMade` | `public virtual bool IsPlanMade(Team team, out bool isFirstPlan)` | method |
| `IsPositionInsideDeploymentBoundaries` | `public virtual bool IsPositionInsideDeploymentBoundaries(Team team, in Vec2 position)` | method |
| `HasDeploymentBoundaries` | `public virtual bool HasDeploymentBoundaries(Team team)` | method |
| `MBList` | `public virtual MBReadOnlyList<ValueTuple<string, MBList<Vec2>>>GetDeploymentBoundaries(Team team)` | method |
| `SupportsReinforcements` | `public virtual bool SupportsReinforcements()` | method |
| `UpdateReinforcementPlan` | `public virtual void UpdateReinforcementPlan(Team team)` | method |
| `SupportsNavmesh` | `public virtual bool SupportsNavmesh(Team team)` | method |
| `HasPlayerSpawnFrame` | `public virtual bool HasPlayerSpawnFrame(BattleSideEnum battleSide)` | method |
| `GetPlayerSpawnFrame` | `public virtual bool GetPlayerSpawnFrame(BattleSideEnum battleSide, out WorldPosition position, out Vec2 direction)` | method |
| `GetClosestDeploymentBoundaryPosition` | `public virtual Vec2 GetClosestDeploymentBoundaryPosition(Team team, in Vec2 position)` | method |
| `ProjectPositionToDeploymentBoundaries` | `public virtual void ProjectPositionToDeploymentBoundaries(Team team, ref WorldPosition position)` | method |
| `GetPathDeploymentBoundaryIntersection` | `public virtual bool GetPathDeploymentBoundaryIntersection(Team team, in WorldPosition startPosition, in WorldPosition endPosition, out WorldPosition foundPosition)` | method |
| `GetDeploymentFrame` | `public virtual MatrixFrame GetDeploymentFrame(Team team)` | method |
| `GetFormationPlan` | `public virtual IFormationDeploymentPlan GetFormationPlan(Team team, FormationClass fClass, bool isReinforcement = false)` | method |
| `GetSpawnPathOffset` | `public virtual float GetSpawnPathOffset(Team team)` | method |
| `GetZoomFocusFrame` | `public virtual MatrixFrame GetZoomFocusFrame(Team team)` | method |
| `GetZoomOffset` | `public virtual float GetZoomOffset(Team team, float fovAngle)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionLogic](../MissionLogic)
- [base / interface IMissionDeploymentPlan](../IMissionDeploymentPlan)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
