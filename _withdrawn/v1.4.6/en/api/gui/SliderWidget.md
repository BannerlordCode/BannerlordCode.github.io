---
title: "SliderWidget"
description: "SliderWidget: a public class in TaleWorlds.GauntletUI.BaseTypes, inheriting ImageWidget; 28 exposed members (8 methods, 19 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/SliderWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SliderWidget

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class SliderWidget : ImageWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/SliderWidget.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

SliderWidget lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/SliderWidget.cs. It is a public class, implementing/inheriting ImageWidget; the inheritance chain is SliderWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 28 public/protected members: 8 methods, 19 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SliderWidget lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI.BaseTypes`, inheritance chain SliderWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 19/28, methods 8/28), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/SliderWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `UpdateValueOnScroll` | `public bool UpdateValueOnScroll` | property |
| `SliderWidget` | `public SliderWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `OnParallelUpdate` | `protected override void OnParallelUpdate(float dt)` | method |
| `OnMousePressed` | `protected internal override void OnMousePressed()` | method |
| `OnMouseReleased` | `protected internal override void OnMouseReleased(bool isFromInput)` | method |
| `OnMouseMove` | `protected internal override void OnMouseMove()` | method |
| `OnValueIntChanged` | `protected internal virtual void OnValueIntChanged(int value)` | method |
| `OnValueFloatChanged` | `protected internal virtual void OnValueFloatChanged(float value)` | method |
| `OnPreviewMouseScroll` | `protected override bool OnPreviewMouseScroll()` | method |
| `IsDiscrete` | `public bool IsDiscrete` | property |
| `Locked` | `public bool Locked` | property |
| `UpdateValueOnRelease` | `public bool UpdateValueOnRelease` | property |
| `UpdateValueContinuously` | `public bool UpdateValueContinuously` | property |
| `AlignmentAxis` | `public AlignmentAxis AlignmentAxis` | property |
| `ReverseDirection` | `public bool ReverseDirection` | property |
| `Filler` | `public Widget Filler` | property |
| `HandleExtension` | `public Widget HandleExtension` | property |
| `ValueFloat` | `public float ValueFloat` | property |
| `ValueInt` | `public int ValueInt` | property |
| `MinValueFloat` | `public float MinValueFloat` | property |
| `MaxValueFloat` | `public float MaxValueFloat` | property |
| `MinValueInt` | `public int MinValueInt` | property |
| `MaxValueInt` | `public int MaxValueInt` | property |
| `DiscreteIncrementInterval` | `public int DiscreteIncrementInterval` | property |
| `DoNotUpdateHandleSize` | `public bool DoNotUpdateHandleSize` | property |
| `Handle` | `public Widget Handle` | property |
| `SliderArea` | `public Widget SliderArea` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ImageWidget](../ImageWidget/)
- [same namespace BasicContainer](../BasicContainer/)
- [same namespace BrushWidget](../BrushWidget/)
- [same namespace ButtonType](../ButtonType/)
- [same namespace ButtonWidget](../ButtonWidget/)
