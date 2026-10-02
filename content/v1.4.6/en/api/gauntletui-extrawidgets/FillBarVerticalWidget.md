---
title: "FillBarVerticalWidget"
description: "FillBarVerticalWidget: a public class in TaleWorlds.GauntletUI.ExtraWidgets, inheriting Widget; 13 exposed members (1 methods, 11 properties, 0 fields). Source: TaleWorlds.GauntletUI.ExtraWidgets/FillBarVerticalWidget.cs."
---
# FillBarVerticalWidget

**Namespace:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Module:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Type:** `public class FillBarVerticalWidget : Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/FillBarVerticalWidget.cs`

## Overview

FillBarVerticalWidget lives in the TaleWorlds.GauntletUI.ExtraWidgets module, source file TaleWorlds.GauntletUI.ExtraWidgets/FillBarVerticalWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is FillBarVerticalWidget → Widget. It exposes 13 public/protected members: 1 methods, 11 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FillBarVerticalWidget is a top-level type in TaleWorlds.GauntletUI.ExtraWidgets, namespace matching the module directory; inheritance chain FillBarVerticalWidget → Widget. The surface is property-led (properties 11/13, methods 1/13), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.ExtraWidgets/FillBarVerticalWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FillBarVerticalWidget` | `public FillBarVerticalWidget(UIContext context) : base(context)` | constructor |
| `OnRender` | `protected override void OnRender(TwoDimensionContext twoDimensionContext, TwoDimensionDrawContext drawContext)` | method |
| `IsDirectionUpward` | `public bool IsDirectionUpward` | property |
| `CurrentAmount` | `public int CurrentAmount` | property |
| `MaxAmount` | `public int MaxAmount` | property |
| `InitialAmount` | `public int InitialAmount` | property |
| `MaxAmountAsFloat` | `public float MaxAmountAsFloat` | property |
| `CurrentAmountAsFloat` | `public float CurrentAmountAsFloat` | property |
| `InitialAmountAsFloat` | `public float InitialAmountAsFloat` | property |
| `FillWidget` | `public Widget FillWidget` | property |
| `ChangeWidget` | `public Widget ChangeWidget` | property |
| `DividerWidget` | `public Widget DividerWidget` | property |
| `ContainerWidget` | `public Widget ContainerWidget` | property |

## See Also

- [↑ gauntletui-extrawidgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimatedNumberTextWidget](../AnimatedNumberTextWidget)
- [same namespace CustomWidgetManager](../CustomWidgetManager)
- [same namespace DelayedStateChanger](../DelayedStateChanger)
- [same namespace DialogButtonsParentWidget](../DialogButtonsParentWidget)
