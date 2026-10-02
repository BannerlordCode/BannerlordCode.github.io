---
title: "CardSelectionPopupButtonWidget"
description: "CardSelectionPopupButtonWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting, inheriting ButtonWidget; 6 exposed members (4 methods, 1 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CardSelectionPopupButtonWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CardSelectionPopupButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class CardSelectionPopupButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CardSelectionPopupButtonWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

CardSelectionPopupButtonWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CardSelectionPopupButtonWidget.cs. It is a public class, implementing/inheriting ButtonWidget; the inheritance chain is CardSelectionPopupButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 6 public/protected members: 4 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CardSelectionPopupButtonWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting`, inheritance chain CardSelectionPopupButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is method-led (methods 4/6, properties 1/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CardSelectionPopupButtonWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `PropertiesContainer` | `public CircularAutoScrollablePanelWidget PropertiesContainer` | property |
| `CardSelectionPopupButtonWidget` | `public CardSelectionPopupButtonWidget(UIContext context) : base(context)` | constructor |
| `SetState` | `public override void SetState(string stateName)` | method |
| `OnHoverBegin` | `protected override void OnHoverBegin()` | method |
| `OnHoverEnd` | `protected override void OnHoverEnd()` | method |
| `OnMouseScroll` | `protected override void OnMouseScroll()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ButtonWidget](../../gui/ButtonWidget/)
- [same namespace CraftedWeaponDesignResultListPanel](../CraftedWeaponDesignResultListPanel/)
- [same namespace CraftingCardHighlightBrushWidget](../CraftingCardHighlightBrushWidget/)
- [same namespace CraftingDifficultyBarParentWidget](../CraftingDifficultyBarParentWidget/)
- [same namespace CraftingItemStatSliderWidget](../CraftingItemStatSliderWidget/)
