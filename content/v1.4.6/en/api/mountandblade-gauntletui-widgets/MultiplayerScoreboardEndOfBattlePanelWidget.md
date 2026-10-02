---
title: "MultiplayerScoreboardEndOfBattlePanelWidget"
description: "MultiplayerScoreboardEndOfBattlePanelWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 6 exposed members (2 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Scoreboard/MultiplayerScoreboardEndOfBattlePanelWidget.cs."
---
# MultiplayerScoreboardEndOfBattlePanelWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MultiplayerScoreboardEndOfBattlePanelWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Scoreboard/MultiplayerScoreboardEndOfBattlePanelWidget.cs`

## Overview

MultiplayerScoreboardEndOfBattlePanelWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Scoreboard/MultiplayerScoreboardEndOfBattlePanelWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is MultiplayerScoreboardEndOfBattlePanelWidget → Widget. It exposes 6 public/protected members: 2 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerScoreboardEndOfBattlePanelWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Scoreboard) the module directory; inheritance chain MultiplayerScoreboardEndOfBattlePanelWidget → Widget. The surface is property-led (properties 3/6, methods 2/6), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Scoreboard/MultiplayerScoreboardEndOfBattlePanelWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MultiplayerScoreboardEndOfBattlePanelWidget` | `public MultiplayerScoreboardEndOfBattlePanelWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `StartAnimation` | `public void StartAnimation()` | method |
| `IsAvailable` | `public bool IsAvailable` | property |
| `FirstDelay` | `public float FirstDelay` | property |
| `SecondDelay` | `public float SecondDelay` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MultiplayerScoreboardAnimatedFillBarWidget](../MultiplayerScoreboardAnimatedFillBarWidget)
- [same namespace MultiplayerScoreboardScreenWidget](../MultiplayerScoreboardScreenWidget)
- [same namespace MultiplayerScoreboardSideWidget](../MultiplayerScoreboardSideWidget)
- [same namespace MultiplayerScoreboardStatsListPanel](../MultiplayerScoreboardStatsListPanel)
