---
title: "CircleLoadingAnimWidget"
description: "CircleLoadingAnimWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 12 exposed members (3 methods, 7 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/CircleLoadingAnimWidget.cs."
---
# CircleLoadingAnimWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class CircleLoadingAnimWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CircleLoadingAnimWidget.cs`

## Overview

CircleLoadingAnimWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/CircleLoadingAnimWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is CircleLoadingAnimWidget → Widget. It exposes 12 public/protected members: 3 methods, 7 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CircleLoadingAnimWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace matching the module directory; inheritance chain CircleLoadingAnimWidget → Widget. The surface is property-led (properties 7/12, methods 3/12), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/CircleLoadingAnimWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NumOfCirclesInASecond` | `public float NumOfCirclesInASecond` | property |
| `FullAlpha` | `public float FullAlpha` | property |
| `CircleRadius` | `public float CircleRadius` | property |
| `StaySeconds` | `public float StaySeconds` | property |
| `FadeInSeconds` | `public float FadeInSeconds` | property |
| `FadeOutSeconds` | `public float FadeOutSeconds` | property |
| `CircleLoadingAnimWidget` | `public CircleLoadingAnimWidget(UIContext context) : base(context)` | constructor |
| `OnChildAdded` | `protected override void OnChildAdded(Widget child)` | method |
| `OnAfterChildRemoved` | `protected override void OnAfterChildRemoved(Widget child, int previousIndexOfChild)` | method |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `VisualState` | `public enum VisualState` | property |
| `VisualState` | `public enum VisualState` | nested type |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AutoHideRichTextWidget](../AutoHideRichTextWidget)
- [same namespace AutoHideTextWidget](../AutoHideTextWidget)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager)
