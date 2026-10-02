---
title: "ParallaxContainerWidget"
description: "ParallaxContainerWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 4 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/ParallaxContainerWidget.cs."
---
# ParallaxContainerWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ParallaxContainerWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ParallaxContainerWidget.cs`

## Overview

ParallaxContainerWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/ParallaxContainerWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is ParallaxContainerWidget → Widget. It exposes 4 public/protected members: 3 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ParallaxContainerWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace matching the module directory; inheritance chain ParallaxContainerWidget → Widget. The surface is method-led (methods 3/4, properties 0/4), so it mostly exposes operations. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/ParallaxContainerWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ParallaxContainerWidget` | `public ParallaxContainerWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `OnChildAdded` | `protected override void OnChildAdded(Widget child)` | method |
| `OnBeforeChildRemoved` | `protected override void OnBeforeChildRemoved(Widget child)` | method |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AutoHideRichTextWidget](../AutoHideRichTextWidget)
- [same namespace AutoHideTextWidget](../AutoHideTextWidget)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager)
