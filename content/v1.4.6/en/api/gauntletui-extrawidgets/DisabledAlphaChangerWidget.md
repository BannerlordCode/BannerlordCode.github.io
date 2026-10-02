---
title: "DisabledAlphaChangerWidget"
description: "DisabledAlphaChangerWidget: a public class in TaleWorlds.GauntletUI.ExtraWidgets, inheriting Widget; 5 exposed members (1 methods, 3 properties, 0 fields). Source: TaleWorlds.GauntletUI.ExtraWidgets/DisabledAlphaChangerWidget.cs."
---
# DisabledAlphaChangerWidget

**Namespace:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Module:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Type:** `public class DisabledAlphaChangerWidget : Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/DisabledAlphaChangerWidget.cs`

## Overview

DisabledAlphaChangerWidget lives in the TaleWorlds.GauntletUI.ExtraWidgets module, source file TaleWorlds.GauntletUI.ExtraWidgets/DisabledAlphaChangerWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is DisabledAlphaChangerWidget → Widget. It exposes 5 public/protected members: 1 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DisabledAlphaChangerWidget is a top-level type in TaleWorlds.GauntletUI.ExtraWidgets, namespace matching the module directory; inheritance chain DisabledAlphaChangerWidget → Widget. The surface is property-led (properties 3/5, methods 1/5), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.ExtraWidgets/DisabledAlphaChangerWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DisabledAlphaChangerWidget` | `public DisabledAlphaChangerWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `DisabledAlpha` | `public float DisabledAlpha` | property |
| `AnimationDuration` | `public float AnimationDuration` | property |
| `UpdateChildrenAlphas` | `public bool UpdateChildrenAlphas` | property |

## See Also

- [↑ gauntletui-extrawidgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimatedNumberTextWidget](../AnimatedNumberTextWidget)
- [same namespace CustomWidgetManager](../CustomWidgetManager)
- [same namespace DelayedStateChanger](../DelayedStateChanger)
- [same namespace DialogButtonsParentWidget](../DialogButtonsParentWidget)
