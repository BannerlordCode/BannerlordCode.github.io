---
title: "TooltipWidget"
description: "TooltipWidget: a public class in TaleWorlds.GauntletUI.ExtraWidgets, inheriting Widget; 5 exposed members (2 methods, 2 properties, 0 fields). Source: TaleWorlds.GauntletUI.ExtraWidgets/TooltipWidget.cs."
---
# TooltipWidget

**Namespace:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Module:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Type:** `public class TooltipWidget : Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/TooltipWidget.cs`

## Overview

TooltipWidget lives in the TaleWorlds.GauntletUI.ExtraWidgets module, source file TaleWorlds.GauntletUI.ExtraWidgets/TooltipWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is TooltipWidget → Widget. It exposes 5 public/protected members: 2 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TooltipWidget is a top-level type in TaleWorlds.GauntletUI.ExtraWidgets, namespace matching the module directory; inheritance chain TooltipWidget → Widget. The surface is method-led (methods 2/5, properties 2/5), so it mostly exposes operations. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.ExtraWidgets/TooltipWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PositioningType` | `public TooltipPositioningType PositioningType` | property |
| `TooltipWidget` | `public TooltipWidget(UIContext context) : base(context)` | constructor |
| `RefreshState` | `protected override void RefreshState()` | method |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `AnimTime` | `public float AnimTime` | property |

## See Also

- [↑ gauntletui-extrawidgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimatedNumberTextWidget](../AnimatedNumberTextWidget)
- [same namespace CustomWidgetManager](../CustomWidgetManager)
- [same namespace DelayedStateChanger](../DelayedStateChanger)
- [same namespace DialogButtonsParentWidget](../DialogButtonsParentWidget)
