---
title: "DeploymentMissionView"
description: "DeploymentMissionView: a public class in TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer, inheriting MissionView; 3 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/DeploymentMissionView.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DeploymentMissionView

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class DeploymentMissionView : MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/DeploymentMissionView.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

DeploymentMissionView lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/DeploymentMissionView.cs. It is a public class, implementing/inheriting MissionView; the inheritance chain is DeploymentMissionView → MissionView → MissionBehavior → IMissionBehavior. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DeploymentMissionView lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer`, inheritance chain DeploymentMissionView → MissionView → MissionBehavior → IMissionBehavior. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/DeploymentMissionView.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnDeploymentPlanMade` | `public override void OnDeploymentPlanMade(Team team, bool isFirstPlan)` | method |
| `OnDeploymentFinished` | `public override void OnDeploymentFinished()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionView](../MissionView/)
- [same namespace BarterView](../BarterView/)
- [same namespace BoardGameView](../BoardGameView/)
- [same namespace DeploymentView](../DeploymentView/)
- [same namespace FaceGeneratorMissionView](../FaceGeneratorMissionView/)
