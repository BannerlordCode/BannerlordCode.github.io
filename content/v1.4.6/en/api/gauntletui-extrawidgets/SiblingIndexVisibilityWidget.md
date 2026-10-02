---
title: "SiblingIndexVisibilityWidget"
description: "SiblingIndexVisibilityWidget: a public class in TaleWorlds.GauntletUI.ExtraWidgets, inheriting Widget; 7 exposed members (1 methods, 4 properties, 0 fields). Source: TaleWorlds.GauntletUI.ExtraWidgets/SiblingIndexVisibilityWidget.cs."
---
# SiblingIndexVisibilityWidget

**Namespace:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Module:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Type:** `public class SiblingIndexVisibilityWidget : Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/SiblingIndexVisibilityWidget.cs`

## Overview

SiblingIndexVisibilityWidget lives in the TaleWorlds.GauntletUI.ExtraWidgets module, source file TaleWorlds.GauntletUI.ExtraWidgets/SiblingIndexVisibilityWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is SiblingIndexVisibilityWidget → Widget. It exposes 7 public/protected members: 1 methods, 4 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SiblingIndexVisibilityWidget is a top-level type in TaleWorlds.GauntletUI.ExtraWidgets, namespace matching the module directory; inheritance chain SiblingIndexVisibilityWidget → Widget. The surface is property-led (properties 4/7, methods 1/7), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.ExtraWidgets/SiblingIndexVisibilityWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `WatchType` | `public SiblingIndexVisibilityWidget.WatchTypes WatchType` | property |
| `SiblingIndexVisibilityWidget` | `public SiblingIndexVisibilityWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `IndexToBeVisible` | `public int IndexToBeVisible` | property |
| `WidgetToWatch` | `public Widget WidgetToWatch` | property |
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
