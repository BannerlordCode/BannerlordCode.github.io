---
title: "SortButtonWidget"
description: "SortButtonWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ButtonWidget; 4 exposed members (1 methods, 2 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/SortButtonWidget.cs."
---
# SortButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class SortButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/SortButtonWidget.cs`

## Overview

SortButtonWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/SortButtonWidget.cs. It is a public class, implementing/inheriting ButtonWidget; the inheritance chain is SortButtonWidget → ButtonWidget. It exposes 4 public/protected members: 1 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SortButtonWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace matching the module directory; inheritance chain SortButtonWidget → ButtonWidget. The surface is property-led (properties 2/4, methods 1/4), so it mostly exposes state for reading. ButtonWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/SortButtonWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SortButtonWidget` | `public SortButtonWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `SortState` | `public int SortState` | property |
| `SortVisualWidget` | `public BrushWidget SortVisualWidget` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AutoHideRichTextWidget](../AutoHideRichTextWidget)
- [same namespace AutoHideTextWidget](../AutoHideTextWidget)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager)
