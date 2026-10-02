---
title: "TwoWaySliderWidget"
description: "TwoWaySliderWidget: a public class in TaleWorlds.GauntletUI.ExtraWidgets, inheriting SliderWidget; 4 exposed members (1 methods, 2 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI.ExtraWidgets/TwoWaySliderWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TwoWaySliderWidget

**Namespace:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Module:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Type:** `public class TwoWaySliderWidget : SliderWidget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/TwoWaySliderWidget.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

TwoWaySliderWidget lives in the TaleWorlds.GauntletUI.ExtraWidgets module, source file TaleWorlds.GauntletUI.ExtraWidgets/TwoWaySliderWidget.cs. It is a public class, implementing/inheriting SliderWidget; the inheritance chain is TwoWaySliderWidget → SliderWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 4 public/protected members: 1 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TwoWaySliderWidget lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI.ExtraWidgets`, inheritance chain TwoWaySliderWidget → SliderWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 2/4, methods 1/4), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.ExtraWidgets/TwoWaySliderWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `TwoWaySliderWidget` | `public TwoWaySliderWidget(UIContext context) : base(context)` | constructor |
| `OnValueIntChanged` | `protected override void OnValueIntChanged(int value)` | method |
| `ChangeFillWidget` | `public BrushWidget ChangeFillWidget` | property |
| `BaseValueInt` | `public int BaseValueInt` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SliderWidget](../SliderWidget/)
- [same namespace AnimatedNumberTextWidget](../AnimatedNumberTextWidget/)
- [same namespace CustomWidgetManager](../CustomWidgetManager/)
- [same namespace DelayedStateChanger](../DelayedStateChanger/)
- [same namespace DialogButtonsParentWidget](../DialogButtonsParentWidget/)
