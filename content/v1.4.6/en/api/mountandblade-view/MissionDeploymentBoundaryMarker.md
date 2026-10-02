---
title: "MissionDeploymentBoundaryMarker"
description: "MissionDeploymentBoundaryMarker: a public class in TaleWorlds.MountAndBlade.View, inheriting MissionView; 10 exposed members (5 methods, 0 properties, 4 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/MissionDeploymentBoundaryMarker.cs."
---
# MissionDeploymentBoundaryMarker

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class MissionDeploymentBoundaryMarker : MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/MissionDeploymentBoundaryMarker.cs`

## Overview

MissionDeploymentBoundaryMarker lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/MissionDeploymentBoundaryMarker.cs. It is a public class, implementing/inheriting MissionView; the inheritance chain is MissionDeploymentBoundaryMarker → MissionView → MissionBehavior. It exposes 10 public/protected members: 5 methods, 4 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionDeploymentBoundaryMarker is a top-level type in TaleWorlds.MountAndBlade.View, namespace differing from (TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer) the module directory; inheritance chain MissionDeploymentBoundaryMarker → MissionView → MissionBehavior. The surface is method-led (methods 5/10, properties 0/10), so it mostly exposes operations. MissionBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/MissionDeploymentBoundaryMarker.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionView](../MissionView)
- [same namespace BarterView](../BarterView)
- [same namespace BoardGameView](../BoardGameView)
- [same namespace DeploymentMissionView](../DeploymentMissionView)
- [same namespace DeploymentView](../DeploymentView)
