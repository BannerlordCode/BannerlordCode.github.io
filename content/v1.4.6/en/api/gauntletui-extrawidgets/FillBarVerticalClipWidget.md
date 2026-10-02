---
title: "FillBarVerticalClipWidget"
description: "FillBarVerticalClipWidget: a public class in TaleWorlds.GauntletUI.ExtraWidgets, inheriting Widget; 15 exposed members (2 methods, 12 properties, 0 fields). Source: TaleWorlds.GauntletUI.ExtraWidgets/FillBarVerticalClipWidget.cs."
---
# FillBarVerticalClipWidget

**Namespace:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Module:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Type:** `public class FillBarVerticalClipWidget : Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/FillBarVerticalClipWidget.cs`

## Overview

FillBarVerticalClipWidget lives in the TaleWorlds.GauntletUI.ExtraWidgets module, source file TaleWorlds.GauntletUI.ExtraWidgets/FillBarVerticalClipWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is FillBarVerticalClipWidget → Widget. It exposes 15 public/protected members: 2 methods, 12 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FillBarVerticalClipWidget is a top-level type in TaleWorlds.GauntletUI.ExtraWidgets, namespace matching the module directory; inheritance chain FillBarVerticalClipWidget → Widget. The surface is property-led (properties 12/15, methods 2/15), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.ExtraWidgets/FillBarVerticalClipWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FillBarVerticalClipWidget` | `public FillBarVerticalClipWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
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
| `ClipWidget` | `public Widget ClipWidget` | property |

## See Also

- [↑ gauntletui-extrawidgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimatedNumberTextWidget](../AnimatedNumberTextWidget)
- [same namespace CustomWidgetManager](../CustomWidgetManager)
- [same namespace DelayedStateChanger](../DelayedStateChanger)
- [same namespace DialogButtonsParentWidget](../DialogButtonsParentWidget)
