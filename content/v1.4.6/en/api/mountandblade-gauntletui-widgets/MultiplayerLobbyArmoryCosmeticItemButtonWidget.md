---
title: "MultiplayerLobbyArmoryCosmeticItemButtonWidget"
description: "MultiplayerLobbyArmoryCosmeticItemButtonWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ButtonWidget; 10 exposed members (3 methods, 6 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Armory/MultiplayerLobbyArmoryCosmeticItemButtonWidget.cs."
---
# MultiplayerLobbyArmoryCosmeticItemButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MultiplayerLobbyArmoryCosmeticItemButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Armory/MultiplayerLobbyArmoryCosmeticItemButtonWidget.cs`

## Overview

MultiplayerLobbyArmoryCosmeticItemButtonWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Armory/MultiplayerLobbyArmoryCosmeticItemButtonWidget.cs. It is a public class, implementing/inheriting ButtonWidget; the inheritance chain is MultiplayerLobbyArmoryCosmeticItemButtonWidget → ButtonWidget. It exposes 10 public/protected members: 3 methods, 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerLobbyArmoryCosmeticItemButtonWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory) the module directory; inheritance chain MultiplayerLobbyArmoryCosmeticItemButtonWidget → ButtonWidget. The surface is property-led (properties 6/10, methods 3/10), so it mostly exposes state for reading. ButtonWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Armory/MultiplayerLobbyArmoryCosmeticItemButtonWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MultiplayerLobbyArmoryCosmeticItemButtonWidget` | `public MultiplayerLobbyArmoryCosmeticItemButtonWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `HandleClick` | `protected override void HandleClick()` | method |
| `HandleAlternateClick` | `protected override void HandleAlternateClick()` | method |
| `ItemType` | `public int ItemType` | property |
| `IsUnlocked` | `public bool IsUnlocked` | property |
| `SelectableStateAnimationDuration` | `public float SelectableStateAnimationDuration` | property |
| `SelectableStateAlpha` | `public float SelectableStateAlpha` | property |
| `NonSelectableStateAlpha` | `public float NonSelectableStateAlpha` | property |
| `IsSelectable` | `public bool IsSelectable` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MultiplayerArmoryCosmeticCategoryButtonWidget](../MultiplayerArmoryCosmeticCategoryButtonWidget)
- [same namespace MultiplayerArmoryCosmeticsSectionWidget](../MultiplayerArmoryCosmeticsSectionWidget)
- [same namespace MultiplayerArmoryPageWidget](../MultiplayerArmoryPageWidget)
- [same namespace MultiplayerLobbyArmoryCosmeticItemBrushWidget](../MultiplayerLobbyArmoryCosmeticItemBrushWidget)
