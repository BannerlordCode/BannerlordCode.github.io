---
title: "IMissionDeploymentPlan"
description: "IMissionDeploymentPlan: a public interface in TaleWorlds.MountAndBlade; 25 exposed members (25 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/IMissionDeploymentPlan.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IMissionDeploymentPlan

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface IMissionDeploymentPlan`
**File:** `TaleWorlds.MountAndBlade/IMissionDeploymentPlan.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

IMissionDeploymentPlan lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/IMissionDeploymentPlan.cs. It is a public interface; the inheritance chain is IMissionDeploymentPlan. It exposes 25 public/protected members: 25 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IMissionDeploymentPlan lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain IMissionDeploymentPlan. The surface is method-led (methods 25/25, properties 0/25), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/IMissionDeploymentPlan.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Initialize` | `void Initialize();` | method |
| `ClearAll` | `void ClearAll();` | method |
| `MakeDefaultDeploymentPlans` | `void MakeDefaultDeploymentPlans();` | method |
| `MakeDeploymentPlan` | `void MakeDeploymentPlan(Team team, float spawnPathOffset = 0f, float targetOffset = 0f);` | method |
| `RemakeDeploymentPlan` | `bool RemakeDeploymentPlan(Team team);` | method |
| `ClearDeploymentPlan` | `void ClearDeploymentPlan(Team team);` | method |
| `IsPlanMade` | `bool IsPlanMade(Team team);` | method |
| `IsPlanMade` | `bool IsPlanMade(Team team, out bool isFirstPlan);` | method |
| `IsPositionInsideDeploymentBoundaries` | `bool IsPositionInsideDeploymentBoundaries(Team team, in Vec2 position);` | method |
| `HasDeploymentBoundaries` | `bool HasDeploymentBoundaries(Team team);` | method |
| `TupleElementNames` | `[return: TupleElementNames(new string[]` | method |
| `MBList` | `MBReadOnlyList<ValueTuple<string, MBList<Vec2>>>GetDeploymentBoundaries(Team team);` | method |
| `SupportsReinforcements` | `bool SupportsReinforcements();` | method |
| `UpdateReinforcementPlan` | `void UpdateReinforcementPlan(Team team);` | method |
| `SupportsNavmesh` | `bool SupportsNavmesh(Team team);` | method |
| `HasPlayerSpawnFrame` | `bool HasPlayerSpawnFrame(BattleSideEnum battleSide);` | method |
| `GetPlayerSpawnFrame` | `bool GetPlayerSpawnFrame(BattleSideEnum battleSide, out WorldPosition position, out Vec2 direction);` | method |
| `GetClosestDeploymentBoundaryPosition` | `Vec2 GetClosestDeploymentBoundaryPosition(Team team, in Vec2 position);` | method |
| `ProjectPositionToDeploymentBoundaries` | `void ProjectPositionToDeploymentBoundaries(Team team, ref WorldPosition position);` | method |
| `GetPathDeploymentBoundaryIntersection` | `bool GetPathDeploymentBoundaryIntersection(Team team, in WorldPosition startPosition, in WorldPosition endPosition, out WorldPosition intersection);` | method |
| `GetDeploymentFrame` | `MatrixFrame GetDeploymentFrame(Team team);` | method |
| `GetFormationPlan` | `IFormationDeploymentPlan GetFormationPlan(Team team, FormationClass fClass, bool isReinforcement = false);` | method |
| `GetSpawnPathOffset` | `float GetSpawnPathOffset(Team team);` | method |
| `GetZoomFocusFrame` | `MatrixFrame GetZoomFocusFrame(Team team);` | method |
| `GetZoomOffset` | `float GetZoomOffset(Team team, float fovAngle);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
