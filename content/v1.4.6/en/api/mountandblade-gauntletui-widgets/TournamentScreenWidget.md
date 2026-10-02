---
title: "TournamentScreenWidget"
description: "TournamentScreenWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 9 exposed members (1 methods, 7 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tournament/TournamentScreenWidget.cs."
---
# TournamentScreenWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tournament`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class TournamentScreenWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tournament/TournamentScreenWidget.cs`

## Overview

TournamentScreenWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tournament/TournamentScreenWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is TournamentScreenWidget → Widget. It exposes 9 public/protected members: 1 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TournamentScreenWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Tournament) the module directory; inheritance chain TournamentScreenWidget → Widget. The surface is property-led (properties 7/9, methods 1/9), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Tournament/TournamentScreenWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TournamentScreenWidget` | `public TournamentScreenWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `IsOver` | `public bool IsOver` | property |
| `FlagsSuccess` | `public DelayedStateChanger FlagsSuccess` | property |
| `ShieldStateChanger` | `public DelayedStateChanger ShieldStateChanger` | property |
| `WinnerTextContainer1` | `public DelayedStateChanger WinnerTextContainer1` | property |
| `CharacterContainer` | `public DelayedStateChanger CharacterContainer` | property |
| `RewardsContainer` | `public DelayedStateChanger RewardsContainer` | property |
| `ScoreboardBattleRewardsWidget` | `public ScoreboardBattleRewardsWidget ScoreboardBattleRewardsWidget` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace TournamentMatchWidget](../TournamentMatchWidget)
- [same namespace TournamentParticipantBrushWidget](../TournamentParticipantBrushWidget)
