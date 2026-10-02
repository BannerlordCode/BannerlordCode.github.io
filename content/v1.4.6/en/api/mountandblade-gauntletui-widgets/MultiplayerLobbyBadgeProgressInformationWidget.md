---
title: "MultiplayerLobbyBadgeProgressInformationWidget"
description: "MultiplayerLobbyBadgeProgressInformationWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 7 exposed members (1 methods, 5 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyBadgeProgressInformationWidget.cs."
---
# MultiplayerLobbyBadgeProgressInformationWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MultiplayerLobbyBadgeProgressInformationWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyBadgeProgressInformationWidget.cs`

## Overview

MultiplayerLobbyBadgeProgressInformationWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyBadgeProgressInformationWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is MultiplayerLobbyBadgeProgressInformationWidget → Widget. It exposes 7 public/protected members: 1 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerLobbyBadgeProgressInformationWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby) the module directory; inheritance chain MultiplayerLobbyBadgeProgressInformationWidget → Widget. The surface is property-led (properties 5/7, methods 1/7), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyBadgeProgressInformationWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CenterBadgeSize` | `public float CenterBadgeSize` | property |
| `OuterBadgeBaseSize` | `public float OuterBadgeBaseSize` | property |
| `SizeDecayFromCenterPerElement` | `public float SizeDecayFromCenterPerElement` | property |
| `MultiplayerLobbyBadgeProgressInformationWidget` | `public MultiplayerLobbyBadgeProgressInformationWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `ShownBadgeCount` | `public int ShownBadgeCount` | property |
| `ActiveBadgesList` | `public ListPanel ActiveBadgesList` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MultiplayerLobbyAfterBattleExperiencePanelWidget](../MultiplayerLobbyAfterBattleExperiencePanelWidget)
- [same namespace MultiplayerLobbyAfterBattlePopupWidget](../MultiplayerLobbyAfterBattlePopupWidget)
- [same namespace MultiplayerLobbyAnimatedRankChangeWidget](../MultiplayerLobbyAnimatedRankChangeWidget)
- [same namespace MultiplayerLobbyBadgeButtonWidget](../MultiplayerLobbyBadgeButtonWidget)
