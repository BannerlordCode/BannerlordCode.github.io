---
title: "MultiplayerLobbyBattleRewardWidget"
description: "MultiplayerLobbyBattleRewardWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 8 exposed members (4 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyBattleRewardWidget.cs."
---
# MultiplayerLobbyBattleRewardWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MultiplayerLobbyBattleRewardWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyBattleRewardWidget.cs`

## Overview

MultiplayerLobbyBattleRewardWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyBattleRewardWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is MultiplayerLobbyBattleRewardWidget → Widget. It exposes 8 public/protected members: 4 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerLobbyBattleRewardWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby) the module directory; inheritance chain MultiplayerLobbyBattleRewardWidget → Widget. The surface is method-led (methods 4/8, properties 3/8), so it mostly exposes operations. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/MultiplayerLobbyBattleRewardWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AnimationDuration` | `public float AnimationDuration` | property |
| `TextRevealAnimationDuration` | `public float TextRevealAnimationDuration` | property |
| `AnimationInitialScaleMultiplier` | `public float AnimationInitialScaleMultiplier` | property |
| `MultiplayerLobbyBattleRewardWidget` | `public MultiplayerLobbyBattleRewardWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `StartAnimation` | `public void StartAnimation()` | method |
| `StartPreAnimation` | `public void StartPreAnimation()` | method |
| `EndAnimation` | `public void EndAnimation()` | method |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MultiplayerLobbyAfterBattleExperiencePanelWidget](../MultiplayerLobbyAfterBattleExperiencePanelWidget)
- [same namespace MultiplayerLobbyAfterBattlePopupWidget](../MultiplayerLobbyAfterBattlePopupWidget)
- [same namespace MultiplayerLobbyAnimatedRankChangeWidget](../MultiplayerLobbyAnimatedRankChangeWidget)
- [same namespace MultiplayerLobbyBadgeButtonWidget](../MultiplayerLobbyBadgeButtonWidget)
