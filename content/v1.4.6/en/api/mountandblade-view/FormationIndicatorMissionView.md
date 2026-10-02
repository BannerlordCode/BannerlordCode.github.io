---
title: "FormationIndicatorMissionView"
description: "FormationIndicatorMissionView: a public class in TaleWorlds.MountAndBlade.View, inheriting MissionView; 4 exposed members (2 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/FormationIndicatorMissionView.cs."
---
# FormationIndicatorMissionView

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer`
**Module:** `TaleWorlds.MountAndBlade.View`
**Type:** `public class FormationIndicatorMissionView : MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/FormationIndicatorMissionView.cs`

## Overview

FormationIndicatorMissionView lives in the TaleWorlds.MountAndBlade.View module, source file TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/FormationIndicatorMissionView.cs. It is a public class, implementing/inheriting MissionView; the inheritance chain is FormationIndicatorMissionView → MissionView → MissionBehavior. It exposes 4 public/protected members: 2 methods, 1 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FormationIndicatorMissionView is a top-level type in TaleWorlds.MountAndBlade.View, namespace differing from (TaleWorlds.MountAndBlade.View.MissionViews.Singleplayer) the module directory; inheritance chain FormationIndicatorMissionView → MissionView → MissionBehavior. The surface is method-led (methods 2/4, properties 1/4), so it mostly exposes operations. MissionBehavior on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Singleplayer/FormationIndicatorMissionView.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnMissionScreenTick` | `public override void OnMissionScreenTick(float dt)` | method |
| `Indicator` | `public class Indicator` | property |
| `Indicator` | `public class Indicator` | nested type |

## See Also

- [↑ mountandblade-view module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionView](../MissionView)
- [same namespace BarterView](../BarterView)
- [same namespace BoardGameView](../BoardGameView)
- [same namespace DeploymentMissionView](../DeploymentMissionView)
- [same namespace DeploymentView](../DeploymentView)
