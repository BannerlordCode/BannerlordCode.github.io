---
title: "MultiplayerScoreboardAnimatedFillBarWidget"
description: "MultiplayerScoreboardAnimatedFillBarWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting FillBarWidget; 12 exposed members (5 methods, 4 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Scoreboard/MultiplayerScoreboardAnimatedFillBarWidget.cs."
---
# MultiplayerScoreboardAnimatedFillBarWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MultiplayerScoreboardAnimatedFillBarWidget : FillBarWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Scoreboard/MultiplayerScoreboardAnimatedFillBarWidget.cs`

## Overview

MultiplayerScoreboardAnimatedFillBarWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Scoreboard/MultiplayerScoreboardAnimatedFillBarWidget.cs. It is a public class, implementing/inheriting FillBarWidget; the inheritance chain is MultiplayerScoreboardAnimatedFillBarWidget → FillBarWidget. It exposes 12 public/protected members: 5 methods, 4 properties, 1 events, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerScoreboardAnimatedFillBarWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard) the module directory; inheritance chain MultiplayerScoreboardAnimatedFillBarWidget → FillBarWidget. The surface is method-led (methods 5/12, properties 4/12), so it mostly exposes operations. FillBarWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Scoreboard/MultiplayerScoreboardAnimatedFillBarWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnFullFillFinished;` | `public event MultiplayerScoreboardAnimatedFillBarWidget.FullFillFinishedHandler OnFullFillFinished;` | event |
| `MultiplayerScoreboardAnimatedFillBarWidget` | `public MultiplayerScoreboardAnimatedFillBarWidget(UIContext context) : base(context)` | constructor |
| `StartAnimation` | `public void StartAnimation(float animationDelay = 0f)` | method |
| `Reset` | `public void Reset()` | method |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `IsStartRequested` | `public bool IsStartRequested` | property |
| `AnimationDelay` | `public float AnimationDelay` | property |
| `AnimationFillSpeed` | `public float AnimationFillSpeed` | property |
| `TimesOfFullFill` | `public int TimesOfFullFill` | property |
| `FullFillFinishedHandler` | `public delegate void FullFillFinishedHandler(bool isPositive);` | method |
| `FullFillFinishedHandler` | `public delegate void FullFillFinishedHandler(bool isPositive)` | nested type |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MultiplayerScoreboardEndOfBattlePanelWidget](../MultiplayerScoreboardEndOfBattlePanelWidget)
- [same namespace MultiplayerScoreboardScreenWidget](../MultiplayerScoreboardScreenWidget)
- [same namespace MultiplayerScoreboardSideWidget](../MultiplayerScoreboardSideWidget)
- [same namespace MultiplayerScoreboardStatsListPanel](../MultiplayerScoreboardStatsListPanel)
