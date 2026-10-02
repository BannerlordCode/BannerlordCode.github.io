---
title: "SiegeDeploymentVisualizationMissionView"
description: "SiegeDeploymentVisualizationMissionView: a public class in TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer, inheriting MissionView; 8 exposed members (6 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/SiegeDeploymentVisualizationMissionView.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SiegeDeploymentVisualizationMissionView

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class SiegeDeploymentVisualizationMissionView : MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/SiegeDeploymentVisualizationMissionView.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

SiegeDeploymentVisualizationMissionView lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/SiegeDeploymentVisualizationMissionView.cs. It is a public class, implementing/inheriting MissionView; the inheritance chain is SiegeDeploymentVisualizationMissionView → MissionView → MissionBehavior → IMissionBehavior. It exposes 8 public/protected members: 6 methods, 1 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SiegeDeploymentVisualizationMissionView lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer`, inheritance chain SiegeDeploymentVisualizationMissionView → MissionView → MissionBehavior → IMissionBehavior. The surface is method-led (methods 6/8, properties 1/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/SiegeDeploymentVisualizationMissionView.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnDeploymentFinished` | `public override void OnDeploymentFinished()` | method |
| `OnEndMission` | `protected override void OnEndMission()` | method |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | method |
| `SetDeploymentVisualizationSelector` | `public static string SetDeploymentVisualizationSelector(List<string>strings)` | method |
| `OnMissionScreenTick` | `public override void OnMissionScreenTick(float dt)` | method |
| `DeploymentVisualizationPreference` | `public enum DeploymentVisualizationPreference` | property |
| `DeploymentVisualizationPreference` | `public enum DeploymentVisualizationPreference` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionView](../MissionView/)
- [same namespace BarterView](../BarterView/)
- [same namespace BoardGameView](../BoardGameView/)
- [same namespace DeploymentMissionView](../DeploymentMissionView/)
- [same namespace DeploymentView](../DeploymentView/)
