---
title: "FillBarVerticalClipTierColorsWidget"
description: "FillBarVerticalClipTierColorsWidget: a public class in TaleWorlds.GauntletUI.ExtraWidgets, inheriting FillBarVerticalWidget; 6 exposed members (1 methods, 4 properties, 0 fields). Source: TaleWorlds.GauntletUI.ExtraWidgets/FillBarVerticalClipTierColorsWidget.cs."
---
# FillBarVerticalClipTierColorsWidget

**Namespace:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Module:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Type:** `public class FillBarVerticalClipTierColorsWidget : FillBarVerticalWidget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/FillBarVerticalClipTierColorsWidget.cs`

## Overview

FillBarVerticalClipTierColorsWidget lives in the TaleWorlds.GauntletUI.ExtraWidgets module, source file TaleWorlds.GauntletUI.ExtraWidgets/FillBarVerticalClipTierColorsWidget.cs. It is a public class, implementing/inheriting FillBarVerticalWidget; the inheritance chain is FillBarVerticalClipTierColorsWidget → FillBarVerticalWidget → Widget. It exposes 6 public/protected members: 1 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FillBarVerticalClipTierColorsWidget is a top-level type in TaleWorlds.GauntletUI.ExtraWidgets, namespace matching the module directory; inheritance chain FillBarVerticalClipTierColorsWidget → FillBarVerticalWidget → Widget. The surface is property-led (properties 4/6, methods 1/6), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.ExtraWidgets/FillBarVerticalClipTierColorsWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FillBarVerticalClipTierColorsWidget` | `public FillBarVerticalClipTierColorsWidget(UIContext context) : base(context)` | constructor |
| `OnRender` | `protected override void OnRender(TwoDimensionContext twoDimensionContext, TwoDimensionDrawContext drawContext)` | method |
| `MaxedColor` | `public string MaxedColor` | property |
| `HighColor` | `public string HighColor` | property |
| `MediumColor` | `public string MediumColor` | property |
| `LowColor` | `public string LowColor` | property |

## See Also

- [↑ gauntletui-extrawidgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface FillBarVerticalWidget](../FillBarVerticalWidget)
- [same namespace AnimatedNumberTextWidget](../AnimatedNumberTextWidget)
- [same namespace CustomWidgetManager](../CustomWidgetManager)
- [same namespace DelayedStateChanger](../DelayedStateChanger)
- [same namespace DialogButtonsParentWidget](../DialogButtonsParentWidget)
