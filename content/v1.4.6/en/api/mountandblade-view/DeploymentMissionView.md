---
title: "DeploymentMissionView"
description: "DeploymentMissionView: a public class in TaleWorlds.MountAndBlade.View, inheriting MissionView; 3 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/DeploymentMissionView.cs."
---
# DeploymentMissionView

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class DeploymentMissionView : MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/DeploymentMissionView.cs`

## Overview

DeploymentMissionView lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/DeploymentMissionView.cs. It is a public class, implementing/inheriting MissionView; the inheritance chain is DeploymentMissionView → MissionView → MissionBehavior. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DeploymentMissionView is a top-level type in TaleWorlds.MountAndBlade.View, namespace differing from (TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer) the module directory; inheritance chain DeploymentMissionView → MissionView → MissionBehavior. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. MissionBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/DeploymentMissionView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnDeploymentPlanMade` | `public override void OnDeploymentPlanMade(Team team, bool isFirstPlan)` | method |
| `OnDeploymentFinished` | `public override void OnDeploymentFinished()` | method |

## See Also

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionView](../MissionView)
- [same namespace BarterView](../BarterView)
- [same namespace BoardGameView](../BoardGameView)
- [same namespace DeploymentView](../DeploymentView)
- [same namespace FaceGeneratorMissionView](../FaceGeneratorMissionView)
