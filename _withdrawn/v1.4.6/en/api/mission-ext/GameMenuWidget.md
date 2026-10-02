---
title: "GameMenuWidget"
description: "GameMenuWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameMenu, inheriting Widget; 23 exposed members (3 methods, 19 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenu/GameMenuWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# GameMenuWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameMenu`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class GameMenuWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenu/GameMenuWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

GameMenuWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenu/GameMenuWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is GameMenuWidget → Widget → PropertyOwnerObject. It exposes 23 public/protected members: 3 methods, 19 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameMenuWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameMenu`, inheritance chain GameMenuWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 19/23, methods 3/23), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenu/GameMenuWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace GameMenuTroopSelectionItemButtonWidget](../GameMenuTroopSelectionItemButtonWidget/)
- [same namespace SettlementMenuPartyCharacterListsButtonWidget](../SettlementMenuPartyCharacterListsButtonWidget/)
