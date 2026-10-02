---
title: "GameMenuPartyItemButtonWidget"
description: "GameMenuPartyItemButtonWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ButtonWidget; 16 exposed members (2 methods, 13 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/GameMenuPartyItemButtonWidget.cs."
---
# GameMenuPartyItemButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class GameMenuPartyItemButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/GameMenuPartyItemButtonWidget.cs`

## Overview

GameMenuPartyItemButtonWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/GameMenuPartyItemButtonWidget.cs. It is a public class, implementing/inheriting ButtonWidget; the inheritance chain is GameMenuPartyItemButtonWidget → ButtonWidget. It exposes 16 public/protected members: 2 methods, 13 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: GameMenuPartyItemButtonWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay) the module directory; inheritance chain GameMenuPartyItemButtonWidget → ButtonWidget. The surface is property-led (properties 13/16, methods 2/16), so it mostly exposes state for reading. ButtonWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/GameMenuPartyItemButtonWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PartyBackgroundBrush` | `public Brush PartyBackgroundBrush` | property |
| `CharacterBackgroundBrush` | `public Brush CharacterBackgroundBrush` | property |
| `BackgroundImageWidget` | `public ImageWidget BackgroundImageWidget` | property |
| `GameMenuPartyItemButtonWidget` | `public GameMenuPartyItemButtonWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `HandleClick` | `protected override void HandleClick()` | method |
| `Relation` | `public int Relation` | property |
| `Location` | `public string Location` | property |
| `Power` | `public string Power` | property |
| `Description` | `public string Description` | property |
| `Profession` | `public string Profession` | property |
| `Name` | `public string Name` | property |
| `IsMergedWithArmy` | `public bool IsMergedWithArmy` | property |
| `IsPartyItem` | `public bool IsPartyItem` | property |
| `ContextMenu` | `public Widget ContextMenu` | property |
| `CurrentCharacterImageWidget` | `public ImageIdentifierWidget CurrentCharacterImageWidget` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ArmyOverlayWidget](../ArmyOverlayWidget)
- [same namespace OverlayBaseWidget](../OverlayBaseWidget)
- [same namespace OverlayPopupWidget](../OverlayPopupWidget)
- [same namespace PowerLevelComparerWidget](../PowerLevelComparerWidget)
