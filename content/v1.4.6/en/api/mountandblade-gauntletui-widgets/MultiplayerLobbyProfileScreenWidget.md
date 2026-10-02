---
title: "MultiplayerLobbyProfileScreenWidget"
description: "MultiplayerLobbyProfileScreenWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 6 exposed members (1 methods, 4 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyProfileScreenWidget.cs."
---
# MultiplayerLobbyProfileScreenWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MultiplayerLobbyProfileScreenWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyProfileScreenWidget.cs`

## Overview

MultiplayerLobbyProfileScreenWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyProfileScreenWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is MultiplayerLobbyProfileScreenWidget → Widget. It exposes 6 public/protected members: 1 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerLobbyProfileScreenWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby) the module directory; inheritance chain MultiplayerLobbyProfileScreenWidget → Widget. The surface is property-led (properties 4/6, methods 1/6), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyProfileScreenWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MultiplayerLobbyProfileScreenWidget` | `public MultiplayerLobbyProfileScreenWidget(UIContext context) : base(context)` | constructor |
| `LobbyStateChanged` | `public void LobbyStateChanged(bool isSearchRequested, bool isSearching, bool isMatchmakingEnabled, bool isCustomBattleEnabled, bool isPartyLeader, bool isInParty)` | method |
| `SelectedModeIndex` | `public int SelectedModeIndex` | property |
| `FindGameButton` | `public ButtonWidget FindGameButton` | property |
| `SelectionInfo` | `public Widget SelectionInfo` | property |
| `HasUnofficialModulesLoaded` | `public bool HasUnofficialModulesLoaded` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MultiplayerLobbyAfterBattleExperiencePanelWidget](../MultiplayerLobbyAfterBattleExperiencePanelWidget)
- [same namespace MultiplayerLobbyAfterBattlePopupWidget](../MultiplayerLobbyAfterBattlePopupWidget)
- [same namespace MultiplayerLobbyAnimatedRankChangeWidget](../MultiplayerLobbyAnimatedRankChangeWidget)
- [same namespace MultiplayerLobbyBadgeButtonWidget](../MultiplayerLobbyBadgeButtonWidget)
