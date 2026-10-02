---
title: "CraftingScreenWidget"
description: "CraftingScreenWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 8 exposed members (0 methods, 7 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftingScreenWidget.cs."
---
# CraftingScreenWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class CraftingScreenWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftingScreenWidget.cs`

## Overview

CraftingScreenWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftingScreenWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is CraftingScreenWidget → Widget. It exposes 8 public/protected members: 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CraftingScreenWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting) the module directory; inheritance chain CraftingScreenWidget → Widget. The surface is property-led (properties 7/8, methods 0/8), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftingScreenWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CraftingScreenWidget` | `public CraftingScreenWidget(UIContext context) : base(context)` | constructor |
| `IsInCraftingMode` | `public bool IsInCraftingMode` | property |
| `IsInRefinementMode` | `public bool IsInRefinementMode` | property |
| `IsInSmeltingMode` | `public bool IsInSmeltingMode` | property |
| `MainActionButtonWidget` | `public ButtonWidget MainActionButtonWidget` | property |
| `FinalCraftButtonWidget` | `public ButtonWidget FinalCraftButtonWidget` | property |
| `NewCraftedWeaponPopupWidget` | `public Widget NewCraftedWeaponPopupWidget` | property |
| `CraftingOrderPopupWidget` | `public Widget CraftingOrderPopupWidget` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CardSelectionPopupButtonWidget](../CardSelectionPopupButtonWidget)
- [same namespace CraftedWeaponDesignResultListPanel](../CraftedWeaponDesignResultListPanel)
- [same namespace CraftingCardHighlightBrushWidget](../CraftingCardHighlightBrushWidget)
- [same namespace CraftingDifficultyBarParentWidget](../CraftingDifficultyBarParentWidget)
