---
title: "CraftingPieceItemButtonWidget"
description: "CraftingPieceItemButtonWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ButtonWidget; 7 exposed members (0 methods, 6 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftingPieceItemButtonWidget.cs."
---
# CraftingPieceItemButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class CraftingPieceItemButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftingPieceItemButtonWidget.cs`

## Overview

CraftingPieceItemButtonWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftingPieceItemButtonWidget.cs. It is a public class, implementing/inheriting ButtonWidget; the inheritance chain is CraftingPieceItemButtonWidget → ButtonWidget. It exposes 7 public/protected members: 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CraftingPieceItemButtonWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting) the module directory; inheritance chain CraftingPieceItemButtonWidget → ButtonWidget. The surface is property-led (properties 6/7, methods 0/7), so it mostly exposes state for reading. ButtonWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftingPieceItemButtonWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CraftingPieceItemButtonWidget` | `public CraftingPieceItemButtonWidget(UIContext context) : base(context)` | constructor |
| `ImageIdentifier` | `public ImageIdentifierWidget ImageIdentifier` | property |
| `PlayerHasPiece` | `public bool PlayerHasPiece` | property |
| `HasPieceBrush` | `public Brush HasPieceBrush` | property |
| `DontHavePieceBrush` | `public Brush DontHavePieceBrush` | property |
| `HasPieceMaterialBrush` | `public Brush HasPieceMaterialBrush` | property |
| `DontHavePieceMaterialBrush` | `public Brush DontHavePieceMaterialBrush` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CardSelectionPopupButtonWidget](../CardSelectionPopupButtonWidget)
- [same namespace CraftedWeaponDesignResultListPanel](../CraftedWeaponDesignResultListPanel)
- [same namespace CraftingCardHighlightBrushWidget](../CraftingCardHighlightBrushWidget)
- [same namespace CraftingDifficultyBarParentWidget](../CraftingDifficultyBarParentWidget)
