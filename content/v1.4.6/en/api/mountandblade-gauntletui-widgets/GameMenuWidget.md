---
title: "GameMenuWidget"
description: "GameMenuWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 23 exposed members (3 methods, 19 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenu/GameMenuWidget.cs."
---
# GameMenuWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameMenu`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class GameMenuWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenu/GameMenuWidget.cs`

## Overview

GameMenuWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenu/GameMenuWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is GameMenuWidget → Widget. It exposes 23 public/protected members: 3 methods, 19 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameMenuWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameMenu) the module directory; inheritance chain GameMenuWidget → Widget. The surface is property-led (properties 19/23, methods 3/23), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenu/GameMenuWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EncounterModeMenuWidth` | `public int EncounterModeMenuWidth` | property |
| `EncounterModeMenuHeight` | `public int EncounterModeMenuHeight` | property |
| `EncounterModeMenuMarginTop` | `public int EncounterModeMenuMarginTop` | property |
| `NormalModeMenuWidth` | `public int NormalModeMenuWidth` | property |
| `NormalModeMenuHeight` | `public int NormalModeMenuHeight` | property |
| `NormalModeMenuMarginTop` | `public int NormalModeMenuMarginTop` | property |
| `IsOverlayExtended` | `public bool IsOverlayExtended` | property |
| `GameMenuWidget` | `public GameMenuWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `UpdateOverlayState` | `public void UpdateOverlayState()` | method |
| `OnOptionStateChanged` | `public void OnOptionStateChanged()` | method |
| `ScopeTargeter` | `public NavigationScopeTargeter ScopeTargeter` | property |
| `TitleTextWidget` | `public TextWidget TitleTextWidget` | property |
| `TitleContainerWidget` | `public Widget TitleContainerWidget` | property |
| `IsNight` | `public bool IsNight` | property |
| `IsEncounterMenu` | `public bool IsEncounterMenu` | property |
| `Overlay` | `public Widget Overlay` | property |
| `ExtendButtonWidget` | `public ButtonWidget ExtendButtonWidget` | property |
| `ExtendButtonArrowWidget` | `public BrushWidget ExtendButtonArrowWidget` | property |
| `OptionItemsList` | `public ListPanel OptionItemsList` | property |
| `SpriteName` | `public string SpriteName` | property |
| `MenuId` | `public string MenuId` | property |
| `OverriddenSpriteMapBrush` | `public Brush OverriddenSpriteMapBrush` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace GameMenuTroopSelectionItemButtonWidget](../GameMenuTroopSelectionItemButtonWidget)
- [same namespace SettlementMenuPartyCharacterListsButtonWidget](../SettlementMenuPartyCharacterListsButtonWidget)
