---
title: "ParallaxItemBrushWidget"
description: "ParallaxItemBrushWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting BrushWidget; 8 exposed members (1 methods, 5 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/ParallaxItemBrushWidget.cs."
---
# ParallaxItemBrushWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ParallaxItemBrushWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ParallaxItemBrushWidget.cs`

## Overview

ParallaxItemBrushWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/ParallaxItemBrushWidget.cs. It is a public class, implementing/inheriting BrushWidget; the inheritance chain is ParallaxItemBrushWidget → BrushWidget. It exposes 8 public/protected members: 1 methods, 5 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ParallaxItemBrushWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace matching the module directory; inheritance chain ParallaxItemBrushWidget → BrushWidget. The surface is property-led (properties 5/8, methods 1/8), so it mostly exposes state for reading. BrushWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/ParallaxItemBrushWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsEaseInOutEnabled` | `public bool IsEaseInOutEnabled` | property |
| `OneDirectionDuration` | `public float OneDirectionDuration` | property |
| `OneDirectionDistance` | `public float OneDirectionDistance` | property |
| `InitialDirection` | `public ParallaxItemBrushWidget.ParallaxMovementDirection InitialDirection` | property |
| `ParallaxItemBrushWidget` | `public ParallaxItemBrushWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `ParallaxMovementDirection` | `public enum ParallaxMovementDirection` | property |
| `ParallaxMovementDirection` | `public enum ParallaxMovementDirection` | nested type |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AutoHideRichTextWidget](../AutoHideRichTextWidget)
- [same namespace AutoHideTextWidget](../AutoHideTextWidget)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager)
