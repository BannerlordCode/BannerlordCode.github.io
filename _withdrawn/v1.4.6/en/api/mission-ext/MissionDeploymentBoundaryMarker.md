---
title: "MissionDeploymentBoundaryMarker"
description: "MissionDeploymentBoundaryMarker: a public class in TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer, inheriting MissionView; 10 exposed members (5 methods, 0 properties, 4 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/MissionDeploymentBoundaryMarker.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionDeploymentBoundaryMarker

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class MissionDeploymentBoundaryMarker : MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/MissionDeploymentBoundaryMarker.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MissionDeploymentBoundaryMarker lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/MissionDeploymentBoundaryMarker.cs. It is a public class, implementing/inheriting MissionView; the inheritance chain is MissionDeploymentBoundaryMarker → MissionView → MissionBehavior → IMissionBehavior. It exposes 10 public/protected members: 5 methods, 4 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionDeploymentBoundaryMarker lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer`, inheritance chain MissionDeploymentBoundaryMarker → MissionView → MissionBehavior → IMissionBehavior. The surface is method-led (methods 5/10, properties 0/10), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/MissionDeploymentBoundaryMarker.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MissionDeploymentBoundaryMarker` | `public MissionDeploymentBoundaryMarker(string prefabName, float markerInterval = 2f)` | constructor |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnEndMission` | `protected override void OnEndMission()` | method |
| `OnDeploymentPlanMade` | `public override void OnDeploymentPlanMade(Team team, bool isFirstPlan)` | method |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | method |
| `MarkLine` | `protected virtual void MarkLine(Vec3 startPoint, Vec3 endPoint, List<GameEntity>boundary, Banner banner = null)` | method |
| `AttackerStaticDeploymentBoundaryName` | `public const string AttackerStaticDeploymentBoundaryName` | field |
| `DefenderStaticDeploymentBoundaryName` | `public const string DefenderStaticDeploymentBoundaryName` | field |
| `List` | `protected readonly Dictionary<string, List<GameEntity>>[]_boundaryMarkersPerSide` | field |
| `_boundaryMarkersRemoved` | `protected bool _boundaryMarkersRemoved` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionView](../MissionView/)
- [same namespace BarterView](../BarterView/)
- [same namespace BoardGameView](../BoardGameView/)
- [same namespace DeploymentMissionView](../DeploymentMissionView/)
- [same namespace DeploymentView](../DeploymentView/)
