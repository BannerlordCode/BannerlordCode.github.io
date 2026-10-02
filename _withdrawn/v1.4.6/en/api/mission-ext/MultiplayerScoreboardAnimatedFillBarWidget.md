---
title: "MultiplayerScoreboardAnimatedFillBarWidget"
description: "MultiplayerScoreboardAnimatedFillBarWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard, inheriting FillBarWidget; 12 exposed members (5 methods, 4 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Scoreboard/MultiplayerScoreboardAnimatedFillBarWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MultiplayerScoreboardAnimatedFillBarWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MultiplayerScoreboardAnimatedFillBarWidget : FillBarWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Scoreboard/MultiplayerScoreboardAnimatedFillBarWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MultiplayerScoreboardAnimatedFillBarWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Scoreboard/MultiplayerScoreboardAnimatedFillBarWidget.cs. It is a public class, implementing/inheriting FillBarWidget; the inheritance chain is MultiplayerScoreboardAnimatedFillBarWidget → FillBarWidget → Widget → PropertyOwnerObject. It exposes 12 public/protected members: 5 methods, 4 properties, 1 events, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerScoreboardAnimatedFillBarWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard`, inheritance chain MultiplayerScoreboardAnimatedFillBarWidget → FillBarWidget → Widget → PropertyOwnerObject. The surface is method-led (methods 5/12, properties 4/12), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Scoreboard/MultiplayerScoreboardAnimatedFillBarWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface FillBarWidget](../../gui/FillBarWidget/)
- [same namespace MultiplayerScoreboardEndOfBattlePanelWidget](../MultiplayerScoreboardEndOfBattlePanelWidget/)
- [same namespace MultiplayerScoreboardScreenWidget](../MultiplayerScoreboardScreenWidget/)
- [same namespace MultiplayerScoreboardSideWidget](../MultiplayerScoreboardSideWidget/)
- [same namespace MultiplayerScoreboardStatsListPanel](../MultiplayerScoreboardStatsListPanel/)
