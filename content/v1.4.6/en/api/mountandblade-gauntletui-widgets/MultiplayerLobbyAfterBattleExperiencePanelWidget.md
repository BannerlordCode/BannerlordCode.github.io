---
title: "MultiplayerLobbyAfterBattleExperiencePanelWidget"
description: "MultiplayerLobbyAfterBattleExperiencePanelWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 9 exposed members (3 methods, 5 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyAfterBattleExperiencePanelWidget.cs."
---
# MultiplayerLobbyAfterBattleExperiencePanelWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MultiplayerLobbyAfterBattleExperiencePanelWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyAfterBattleExperiencePanelWidget.cs`

## Overview

MultiplayerLobbyAfterBattleExperiencePanelWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyAfterBattleExperiencePanelWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is MultiplayerLobbyAfterBattleExperiencePanelWidget → Widget. It exposes 9 public/protected members: 3 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerLobbyAfterBattleExperiencePanelWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby) the module directory; inheritance chain MultiplayerLobbyAfterBattleExperiencePanelWidget → Widget. The surface is property-led (properties 5/9, methods 3/9), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyAfterBattleExperiencePanelWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MultiplayerLobbyAfterBattleExperiencePanelWidget` | `public MultiplayerLobbyAfterBattleExperiencePanelWidget(UIContext context) : base(context)` | constructor |
| `StartAnimation` | `public void StartAnimation(float animationDelay)` | method |
| `Reset` | `public void Reset()` | method |
| `RefreshState` | `protected override void RefreshState()` | method |
| `GainedExperience` | `public int GainedExperience` | property |
| `ExperienceFillBar` | `public MultiplayerScoreboardAnimatedFillBarWidget ExperienceFillBar` | property |
| `EarnedExperienceCounterTextWidget` | `public CounterTextBrushWidget EarnedExperienceCounterTextWidget` | property |
| `CurrentLevelTextWidget` | `public TextWidget CurrentLevelTextWidget` | property |
| `NextLevelTextWidget` | `public TextWidget NextLevelTextWidget` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MultiplayerLobbyAfterBattlePopupWidget](../MultiplayerLobbyAfterBattlePopupWidget)
- [same namespace MultiplayerLobbyAnimatedRankChangeWidget](../MultiplayerLobbyAnimatedRankChangeWidget)
- [same namespace MultiplayerLobbyBadgeButtonWidget](../MultiplayerLobbyBadgeButtonWidget)
- [same namespace MultiplayerLobbyBadgeProgressInformationWidget](../MultiplayerLobbyBadgeProgressInformationWidget)
