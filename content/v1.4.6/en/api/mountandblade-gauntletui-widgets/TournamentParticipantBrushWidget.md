---
title: "TournamentParticipantBrushWidget"
description: "TournamentParticipantBrushWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting BrushWidget; 12 exposed members (4 methods, 7 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tournament/TournamentParticipantBrushWidget.cs."
---
# TournamentParticipantBrushWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tournament`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class TournamentParticipantBrushWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tournament/TournamentParticipantBrushWidget.cs`

## Overview

TournamentParticipantBrushWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tournament/TournamentParticipantBrushWidget.cs. It is a public class, implementing/inheriting BrushWidget; the inheritance chain is TournamentParticipantBrushWidget → BrushWidget. It exposes 12 public/protected members: 4 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TournamentParticipantBrushWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tournament) the module directory; inheritance chain TournamentParticipantBrushWidget → BrushWidget. The surface is property-led (properties 7/12, methods 4/12), so it mostly exposes state for reading. BrushWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tournament/TournamentParticipantBrushWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TournamentParticipantBrushWidget` | `public TournamentParticipantBrushWidget(UIContext context) : base(context)` | constructor |
| `OnMousePressed` | `protected override void OnMousePressed()` | method |
| `OnChildAdded` | `protected override void OnChildAdded(Widget child)` | method |
| `OnConnectedToRoot` | `protected override void OnConnectedToRoot()` | method |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `NameTextWidget` | `public TextWidget NameTextWidget` | property |
| `MatchState` | `public int MatchState` | property |
| `IsDead` | `public bool IsDead` | property |
| `IsMainHero` | `public bool IsMainHero` | property |
| `MainHeroTextBrush` | `public Brush MainHeroTextBrush` | property |
| `NormalTextBrush` | `public Brush NormalTextBrush` | property |
| `OnMission` | `public bool OnMission` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace TournamentMatchWidget](../TournamentMatchWidget)
- [same namespace TournamentScreenWidget](../TournamentScreenWidget)
