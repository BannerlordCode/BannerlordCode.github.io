---
title: "MouseWidget"
description: "MouseWidget: a public class in TaleWorlds.GauntletUI.ExtraWidgets, inheriting Widget; 11 exposed members (2 methods, 8 properties, 0 fields). Source: TaleWorlds.GauntletUI.ExtraWidgets/MouseWidget.cs."
---
# MouseWidget

**Namespace:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Module:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Type:** `public class MouseWidget : Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/MouseWidget.cs`

## Overview

MouseWidget lives in the TaleWorlds.GauntletUI.ExtraWidgets module, source file TaleWorlds.GauntletUI.ExtraWidgets/MouseWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is MouseWidget → Widget. It exposes 11 public/protected members: 2 methods, 8 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MouseWidget is a top-level type in TaleWorlds.GauntletUI.ExtraWidgets, namespace matching the module directory; inheritance chain MouseWidget → Widget. The surface is property-led (properties 8/11, methods 2/11), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.ExtraWidgets/MouseWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MouseWidget` | `public MouseWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `UpdatePressedKeys` | `public void UpdatePressedKeys()` | method |
| `LeftMouseButton` | `public Widget LeftMouseButton` | property |
| `RightMouseButton` | `public Widget RightMouseButton` | property |
| `MiddleMouseButton` | `public Widget MiddleMouseButton` | property |
| `MouseX1Button` | `public Widget MouseX1Button` | property |
| `MouseX2Button` | `public Widget MouseX2Button` | property |
| `MouseScrollUp` | `public Widget MouseScrollUp` | property |
| `MouseScrollDown` | `public Widget MouseScrollDown` | property |
| `KeyboardKeys` | `public TextWidget KeyboardKeys` | property |

## See Also

- [↑ gauntletui-extrawidgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimatedNumberTextWidget](../AnimatedNumberTextWidget)
- [same namespace CustomWidgetManager](../CustomWidgetManager)
- [same namespace DelayedStateChanger](../DelayedStateChanger)
- [same namespace DialogButtonsParentWidget](../DialogButtonsParentWidget)
