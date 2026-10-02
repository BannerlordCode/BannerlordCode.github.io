---
title: "CraftingItemStatSliderWidget"
description: "CraftingItemStatSliderWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting SliderWidget; 9 exposed members (1 methods, 7 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftingItemStatSliderWidget.cs."
---
# CraftingItemStatSliderWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class CraftingItemStatSliderWidget : SliderWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftingItemStatSliderWidget.cs`

## Overview

CraftingItemStatSliderWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftingItemStatSliderWidget.cs. It is a public class, implementing/inheriting SliderWidget; the inheritance chain is CraftingItemStatSliderWidget → SliderWidget. It exposes 9 public/protected members: 1 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CraftingItemStatSliderWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting) the module directory; inheritance chain CraftingItemStatSliderWidget → SliderWidget. The surface is property-led (properties 7/9, methods 1/9), so it mostly exposes state for reading. SliderWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftingItemStatSliderWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CraftingItemStatSliderWidget` | `public CraftingItemStatSliderWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `ValueText` | `public TextWidget ValueText` | property |
| `LabelTextWidget` | `public TextWidget LabelTextWidget` | property |
| `HasValidTarget` | `public bool HasValidTarget` | property |
| `HasValidValue` | `public bool HasValidValue` | property |
| `IsExceedingBeneficial` | `public bool IsExceedingBeneficial` | property |
| `TargetValue` | `public float TargetValue` | property |
| `TargetFill` | `public BrushWidget TargetFill` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CardSelectionPopupButtonWidget](../CardSelectionPopupButtonWidget)
- [same namespace CraftedWeaponDesignResultListPanel](../CraftedWeaponDesignResultListPanel)
- [same namespace CraftingCardHighlightBrushWidget](../CraftingCardHighlightBrushWidget)
- [same namespace CraftingDifficultyBarParentWidget](../CraftingDifficultyBarParentWidget)
