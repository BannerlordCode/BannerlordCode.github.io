---
title: "ITeamDeploymentPlan"
description: "ITeamDeploymentPlan: a public interface in TaleWorlds.MountAndBlade; 15 exposed members (14 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/ITeamDeploymentPlan.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ITeamDeploymentPlan

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface ITeamDeploymentPlan`
**File:** `TaleWorlds.MountAndBlade/ITeamDeploymentPlan.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ITeamDeploymentPlan lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ITeamDeploymentPlan.cs. It is a public interface; the inheritance chain is ITeamDeploymentPlan. It exposes 15 public/protected members: 14 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ITeamDeploymentPlan lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain ITeamDeploymentPlan. The surface is method-led (methods 14/15, properties 1/15), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ITeamDeploymentPlan.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Team` | `Team Team` | property |
| `MakeDeploymentPlan` | `void MakeDeploymentPlan(float spawnPathOffset = 0f, float targetOffset = 0f, FormationSceneSpawnEntry[, ]formationSceneSpawnEntries = null, bool isReinforcement = false);` | method |
| `ClearPlan` | `void ClearPlan(bool isReinforcement = false);` | method |
| `IsFirstPlan` | `bool IsFirstPlan(bool isReinforcement = false);` | method |
| `IsPlanMade` | `bool IsPlanMade(bool isReinforcement = false);` | method |
| `TupleElementNames` | `[return: TupleElementNames(new string[]` | method |
| `MBList` | `MBReadOnlyList<ValueTuple<string, MBList<Vec2>>>GetDeploymentBoundaries();` | method |
| `GetSpawnPathOffset` | `float GetSpawnPathOffset(bool isReinforcement = false);` | method |
| `GetTargetOffset` | `float GetTargetOffset(bool isReinforcement = false);` | method |
| `GetDeploymentFrame` | `MatrixFrame GetDeploymentFrame();` | method |
| `HasDeploymentBoundaries` | `bool HasDeploymentBoundaries();` | method |
| `GetFormationPlan` | `IFormationDeploymentPlan GetFormationPlan(FormationClass formationIndex, bool isReinforcement = false);` | method |
| `GetMeanPosition` | `Vec3 GetMeanPosition(bool isReinforcement = false);` | method |
| `IsPositionInsideDeploymentBoundaries` | `bool IsPositionInsideDeploymentBoundaries(in Vec2 position, [TupleElementNames(new string[]` | method |
| `GetClosestDeploymentBoundaryPosition` | `Vec2 GetClosestDeploymentBoundaryPosition(in Vec2 position);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
