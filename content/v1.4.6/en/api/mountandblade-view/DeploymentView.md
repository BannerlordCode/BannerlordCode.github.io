---
title: "DeploymentView"
description: "DeploymentView: a public class in TaleWorlds.MountAndBlade.View, inheriting MissionView; 4 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/DeploymentView.cs."
---
# DeploymentView

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class DeploymentView : MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/DeploymentView.cs`

## Overview

DeploymentView lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/DeploymentView.cs. It is a public class, implementing/inheriting MissionView; the inheritance chain is DeploymentView → MissionView → MissionBehavior. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DeploymentView is a top-level type in TaleWorlds.MountAndBlade.View, namespace differing from (TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer) the module directory; inheritance chain DeploymentView → MissionView → MissionBehavior. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. MissionBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/DeploymentView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | method |
| `CreateWidgets` | `protected virtual void CreateWidgets()` | method |
| `RemoveWidgets` | `protected virtual void RemoveWidgets()` | method |

## See Also

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionView](../MissionView)
- [same namespace BarterView](../BarterView)
- [same namespace BoardGameView](../BoardGameView)
- [same namespace DeploymentMissionView](../DeploymentMissionView)
- [same namespace FaceGeneratorMissionView](../FaceGeneratorMissionView)
