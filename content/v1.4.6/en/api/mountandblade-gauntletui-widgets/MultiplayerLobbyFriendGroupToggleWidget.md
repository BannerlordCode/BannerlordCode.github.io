---
title: "MultiplayerLobbyFriendGroupToggleWidget"
description: "MultiplayerLobbyFriendGroupToggleWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ToggleButtonWidget; 8 exposed members (2 methods, 5 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Friend/MultiplayerLobbyFriendGroupToggleWidget.cs."
---
# MultiplayerLobbyFriendGroupToggleWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Friend`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MultiplayerLobbyFriendGroupToggleWidget : ToggleButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Friend/MultiplayerLobbyFriendGroupToggleWidget.cs`

## Overview

MultiplayerLobbyFriendGroupToggleWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Friend/MultiplayerLobbyFriendGroupToggleWidget.cs. It is a public class, implementing/inheriting ToggleButtonWidget; the inheritance chain is MultiplayerLobbyFriendGroupToggleWidget → ToggleButtonWidget → ButtonWidget. It exposes 8 public/protected members: 2 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerLobbyFriendGroupToggleWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Friend) the module directory; inheritance chain MultiplayerLobbyFriendGroupToggleWidget → ToggleButtonWidget → ButtonWidget. The surface is property-led (properties 5/8, methods 2/8), so it mostly exposes state for reading. ButtonWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Friend/MultiplayerLobbyFriendGroupToggleWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MultiplayerLobbyFriendGroupToggleWidget` | `public MultiplayerLobbyFriendGroupToggleWidget(UIContext context) : base(context)` | constructor |
| `OnClick` | `protected override void OnClick(Widget widget)` | method |
| `RefreshState` | `protected override void RefreshState()` | method |
| `CollapseIndicator` | `public Widget CollapseIndicator` | property |
| `TitleContainer` | `public Widget TitleContainer` | property |
| `PlayerCountText` | `public TextWidget PlayerCountText` | property |
| `PlayerCount` | `public int PlayerCount` | property |
| `InitialClosedState` | `public bool InitialClosedState` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface ToggleButtonWidget](../ToggleButtonWidget)
- [same namespace MultiplayerLobbyFriendGroupWidget](../MultiplayerLobbyFriendGroupWidget)
- [same namespace MultiplayerLobbyFriendsPanelWidget](../MultiplayerLobbyFriendsPanelWidget)
