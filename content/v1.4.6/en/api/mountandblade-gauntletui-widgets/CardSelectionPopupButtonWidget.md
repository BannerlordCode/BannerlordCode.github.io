---
title: "CardSelectionPopupButtonWidget"
description: "CardSelectionPopupButtonWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ButtonWidget; 6 exposed members (4 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CardSelectionPopupButtonWidget.cs."
---
# CardSelectionPopupButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class CardSelectionPopupButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CardSelectionPopupButtonWidget.cs`

## Overview

CardSelectionPopupButtonWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CardSelectionPopupButtonWidget.cs. It is a public class, implementing/inheriting ButtonWidget; the inheritance chain is CardSelectionPopupButtonWidget → ButtonWidget. It exposes 6 public/protected members: 4 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CardSelectionPopupButtonWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting) the module directory; inheritance chain CardSelectionPopupButtonWidget → ButtonWidget. The surface is method-led (methods 4/6, properties 1/6), so it mostly exposes operations. ButtonWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CardSelectionPopupButtonWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PropertiesContainer` | `public CircularAutoScrollablePanelWidget PropertiesContainer` | property |
| `CardSelectionPopupButtonWidget` | `public CardSelectionPopupButtonWidget(UIContext context) : base(context)` | constructor |
| `SetState` | `public override void SetState(string stateName)` | method |
| `OnHoverBegin` | `protected override void OnHoverBegin()` | method |
| `OnHoverEnd` | `protected override void OnHoverEnd()` | method |
| `OnMouseScroll` | `protected override void OnMouseScroll()` | method |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CraftedWeaponDesignResultListPanel](../CraftedWeaponDesignResultListPanel)
- [same namespace CraftingCardHighlightBrushWidget](../CraftingCardHighlightBrushWidget)
- [same namespace CraftingDifficultyBarParentWidget](../CraftingDifficultyBarParentWidget)
- [same namespace CraftingItemStatSliderWidget](../CraftingItemStatSliderWidget)
