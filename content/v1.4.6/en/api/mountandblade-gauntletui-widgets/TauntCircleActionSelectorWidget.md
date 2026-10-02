---
title: "TauntCircleActionSelectorWidget"
description: "TauntCircleActionSelectorWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting CircleActionSelectorWidget; 4 exposed members (2 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Armory/TauntCircleActionSelectorWidget.cs."
---
# TauntCircleActionSelectorWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class TauntCircleActionSelectorWidget : CircleActionSelectorWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Armory/TauntCircleActionSelectorWidget.cs`

## Overview

TauntCircleActionSelectorWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Armory/TauntCircleActionSelectorWidget.cs. It is a public class, implementing/inheriting CircleActionSelectorWidget; the inheritance chain is TauntCircleActionSelectorWidget → CircleActionSelectorWidget. It exposes 4 public/protected members: 2 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TauntCircleActionSelectorWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory) the module directory; inheritance chain TauntCircleActionSelectorWidget → CircleActionSelectorWidget. The surface is method-led (methods 2/4, properties 1/4), so it mostly exposes operations. CircleActionSelectorWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Armory/TauntCircleActionSelectorWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `TauntCircleActionSelectorWidget` | `public TauntCircleActionSelectorWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `OnSelectedIndexChanged` | `protected override void OnSelectedIndexChanged(int selectedIndex)` | method |
| `FallbackNavigationWidget` | `public Widget FallbackNavigationWidget` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MultiplayerArmoryCosmeticCategoryButtonWidget](../MultiplayerArmoryCosmeticCategoryButtonWidget)
- [same namespace MultiplayerArmoryCosmeticsSectionWidget](../MultiplayerArmoryCosmeticsSectionWidget)
- [same namespace MultiplayerArmoryPageWidget](../MultiplayerArmoryPageWidget)
- [same namespace MultiplayerLobbyArmoryCosmeticItemBrushWidget](../MultiplayerLobbyArmoryCosmeticItemBrushWidget)
