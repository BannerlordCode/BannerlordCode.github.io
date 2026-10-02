---
title: "FillBarWidget"
description: "FillBarWidget: a public class in TaleWorlds.GauntletUI.ExtraWidgets, inheriting Widget; 14 exposed members (1 methods, 12 properties, 0 fields). Source: TaleWorlds.GauntletUI.ExtraWidgets/FillBarWidget.cs."
---
# FillBarWidget

**Namespace:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Module:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Type:** `public class FillBarWidget : Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/FillBarWidget.cs`

## Overview

FillBarWidget lives in the TaleWorlds.GauntletUI.ExtraWidgets module, source file TaleWorlds.GauntletUI.ExtraWidgets/FillBarWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is FillBarWidget → Widget. It exposes 14 public/protected members: 1 methods, 12 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FillBarWidget is a top-level type in TaleWorlds.GauntletUI.ExtraWidgets, namespace matching the module directory; inheritance chain FillBarWidget → Widget. The surface is property-led (properties 12/14, methods 1/14), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.ExtraWidgets/FillBarWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FillBarWidget` | `public FillBarWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `CurrentAmount` | `public int CurrentAmount` | property |
| `MaxAmount` | `public int MaxAmount` | property |
| `InitialAmount` | `public int InitialAmount` | property |
| `MaxAmountAsFloat` | `public float MaxAmountAsFloat` | property |
| `CurrentAmountAsFloat` | `public float CurrentAmountAsFloat` | property |
| `InitialAmountAsFloat` | `public float InitialAmountAsFloat` | property |
| `CompletelyFillChange` | `public bool CompletelyFillChange` | property |
| `ShowNegativeChange` | `public bool ShowNegativeChange` | property |
| `CustomChangeColor` | `public bool CustomChangeColor` | property |
| `FillWidget` | `public Widget FillWidget` | property |
| `ChangeWidget` | `public Widget ChangeWidget` | property |
| `DividerWidget` | `public Widget DividerWidget` | property |

## See Also

- [↑ gauntletui-extrawidgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimatedNumberTextWidget](../AnimatedNumberTextWidget)
- [same namespace CustomWidgetManager](../CustomWidgetManager)
- [same namespace DelayedStateChanger](../DelayedStateChanger)
- [same namespace DialogButtonsParentWidget](../DialogButtonsParentWidget)
