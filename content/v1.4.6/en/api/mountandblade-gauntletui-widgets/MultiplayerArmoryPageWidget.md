---
title: "MultiplayerArmoryPageWidget"
description: "MultiplayerArmoryPageWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 16 exposed members (1 methods, 14 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Armory/MultiplayerArmoryPageWidget.cs."
---
# MultiplayerArmoryPageWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MultiplayerArmoryPageWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Armory/MultiplayerArmoryPageWidget.cs`

## Overview

MultiplayerArmoryPageWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Armory/MultiplayerArmoryPageWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is MultiplayerArmoryPageWidget → Widget. It exposes 16 public/protected members: 1 methods, 14 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerArmoryPageWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory) the module directory; inheritance chain MultiplayerArmoryPageWidget → Widget. The surface is property-led (properties 14/16, methods 1/16), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Armory/MultiplayerArmoryPageWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MultiplayerArmoryPageWidget` | `public MultiplayerArmoryPageWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `IsTauntAssignmentActive` | `public bool IsTauntAssignmentActive` | property |
| `IsTauntControlsOpen` | `public bool IsTauntControlsOpen` | property |
| `TauntEnabledRadialDistance` | `public int TauntEnabledRadialDistance` | property |
| `TauntDisabledRadialDistance` | `public int TauntDisabledRadialDistance` | property |
| `TauntStateAnimationDuration` | `public float TauntStateAnimationDuration` | property |
| `TauntAssignmentOverlayAlpha` | `public float TauntAssignmentOverlayAlpha` | property |
| `LeftSideParent` | `public Widget LeftSideParent` | property |
| `GameModesDropdownParent` | `public Widget GameModesDropdownParent` | property |
| `HeroPreviewParent` | `public Widget HeroPreviewParent` | property |
| `TauntAssignmentOverlay` | `public Widget TauntAssignmentOverlay` | property |
| `ManageTauntsButton` | `public Widget ManageTauntsButton` | property |
| `TauntSlotsContainer` | `public Widget TauntSlotsContainer` | property |
| `RightPanelTabControl` | `public TabControl RightPanelTabControl` | property |
| `TauntCircleActionSelector` | `public CircleActionSelectorWidget TauntCircleActionSelector` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MultiplayerArmoryCosmeticCategoryButtonWidget](../MultiplayerArmoryCosmeticCategoryButtonWidget)
- [same namespace MultiplayerArmoryCosmeticsSectionWidget](../MultiplayerArmoryCosmeticsSectionWidget)
- [same namespace MultiplayerLobbyArmoryCosmeticItemBrushWidget](../MultiplayerLobbyArmoryCosmeticItemBrushWidget)
- [same namespace MultiplayerLobbyArmoryCosmeticItemButtonWidget](../MultiplayerLobbyArmoryCosmeticItemButtonWidget)
