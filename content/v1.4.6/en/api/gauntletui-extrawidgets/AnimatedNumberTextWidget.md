---
title: "AnimatedNumberTextWidget"
description: "AnimatedNumberTextWidget: a public class in TaleWorlds.GauntletUI.ExtraWidgets, inheriting TextWidget; 9 exposed members (3 methods, 5 properties, 0 fields). Source: TaleWorlds.GauntletUI.ExtraWidgets/AnimatedNumberTextWidget.cs."
---
# AnimatedNumberTextWidget

**Namespace:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Module:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Type:** `public class AnimatedNumberTextWidget : TextWidget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/AnimatedNumberTextWidget.cs`

## Overview

AnimatedNumberTextWidget lives in the TaleWorlds.GauntletUI.ExtraWidgets module, source file TaleWorlds.GauntletUI.ExtraWidgets/AnimatedNumberTextWidget.cs. It is a public class, implementing/inheriting TextWidget; the inheritance chain is AnimatedNumberTextWidget → TextWidget. It exposes 9 public/protected members: 3 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AnimatedNumberTextWidget is a top-level type in TaleWorlds.GauntletUI.ExtraWidgets, namespace matching the module directory; inheritance chain AnimatedNumberTextWidget → TextWidget. The surface is property-led (properties 5/9, methods 3/9), so it mostly exposes state for reading. TextWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.ExtraWidgets/AnimatedNumberTextWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AnimatedNumberTextWidget` | `public AnimatedNumberTextWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `StartAnimation` | `public void StartAnimation()` | method |
| `Reset` | `public void Reset()` | method |
| `AnimationDelay` | `public float AnimationDelay` | property |
| `AnimationDuration` | `public float AnimationDuration` | property |
| `ReferenceNumber` | `public int ReferenceNumber` | property |
| `Number` | `public int Number` | property |
| `AutoStart` | `public bool AutoStart` | property |

## See Also

- [↑ gauntletui-extrawidgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CustomWidgetManager](../CustomWidgetManager)
- [same namespace DelayedStateChanger](../DelayedStateChanger)
- [same namespace DialogButtonsParentWidget](../DialogButtonsParentWidget)
- [same namespace DisabledAlphaChangerWidget](../DisabledAlphaChangerWidget)
