---
title: "StateSyncWidget"
description: "StateSyncWidget: a public class in TaleWorlds.GauntletUI.ExtraWidgets, inheriting BrushWidget; 4 exposed members (1 methods, 2 properties, 0 fields). Source: TaleWorlds.GauntletUI.ExtraWidgets/StateSyncWidget.cs."
---
# StateSyncWidget

**Namespace:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Module:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Type:** `public class StateSyncWidget : BrushWidget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/StateSyncWidget.cs`

## Overview

StateSyncWidget lives in the TaleWorlds.GauntletUI.ExtraWidgets module, source file TaleWorlds.GauntletUI.ExtraWidgets/StateSyncWidget.cs. It is a public class, implementing/inheriting BrushWidget; the inheritance chain is StateSyncWidget → BrushWidget. It exposes 4 public/protected members: 1 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StateSyncWidget is a top-level type in TaleWorlds.GauntletUI.ExtraWidgets, namespace matching the module directory; inheritance chain StateSyncWidget → BrushWidget. The surface is property-led (properties 2/4, methods 1/4), so it mostly exposes state for reading. BrushWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.ExtraWidgets/StateSyncWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `StateSyncWidget` | `public StateSyncWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `SourceWidget` | `public Widget SourceWidget` | property |
| `TargetWidget` | `public Widget TargetWidget` | property |

## See Also

- [↑ gauntletui-extrawidgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AnimatedNumberTextWidget](../AnimatedNumberTextWidget)
- [same namespace CustomWidgetManager](../CustomWidgetManager)
- [same namespace DelayedStateChanger](../DelayedStateChanger)
- [same namespace DialogButtonsParentWidget](../DialogButtonsParentWidget)
