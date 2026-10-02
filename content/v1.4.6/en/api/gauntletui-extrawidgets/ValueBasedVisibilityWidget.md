---
title: "ValueBasedVisibilityWidget"
description: "ValueBasedVisibilityWidget: a public class in TaleWorlds.GauntletUI.ExtraWidgets, inheriting Widget; 8 exposed members (0 methods, 6 properties, 0 fields). Source: TaleWorlds.GauntletUI.ExtraWidgets/ValueBasedVisibilityWidget.cs."
---
# ValueBasedVisibilityWidget

**Namespace:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Module:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Type:** `public class ValueBasedVisibilityWidget : Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/ValueBasedVisibilityWidget.cs`

## Overview

ValueBasedVisibilityWidget lives in the TaleWorlds.GauntletUI.ExtraWidgets module, source file TaleWorlds.GauntletUI.ExtraWidgets/ValueBasedVisibilityWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is ValueBasedVisibilityWidget → Widget. It exposes 8 public/protected members: 6 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ValueBasedVisibilityWidget is a top-level type in TaleWorlds.GauntletUI.ExtraWidgets, namespace matching the module directory; inheritance chain ValueBasedVisibilityWidget → Widget. The surface is property-led (properties 6/8, methods 0/8), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.ExtraWidgets/ValueBasedVisibilityWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `WatchType` | `public ValueBasedVisibilityWidget.WatchTypes WatchType` | property |
| `ValueBasedVisibilityWidget` | `public ValueBasedVisibilityWidget(UIContext context) : base(context)` | constructor |
| `IndexToWatch` | `public int IndexToWatch` | property |
| `IndexToWatchFloat` | `public float IndexToWatchFloat` | property |
| `IndexToBeVisible` | `public int IndexToBeVisible` | property |
| `IndexToBeVisibleFloat` | `public float IndexToBeVisibleFloat` | property |
| `WatchTypes` | `public enum WatchTypes` | property |
| `WatchTypes` | `public enum WatchTypes` | nested type |

## See Also

- [↑ gauntletui-extrawidgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimatedNumberTextWidget](../AnimatedNumberTextWidget)
- [same namespace CustomWidgetManager](../CustomWidgetManager)
- [same namespace DelayedStateChanger](../DelayedStateChanger)
- [same namespace DialogButtonsParentWidget](../DialogButtonsParentWidget)
