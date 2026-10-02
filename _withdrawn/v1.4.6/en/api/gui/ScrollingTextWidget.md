---
title: "ScrollingTextWidget"
description: "ScrollingTextWidget: a public class in TaleWorlds.GauntletUI.ExtraWidgets, inheriting TextWidget; 10 exposed members (3 methods, 6 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI.ExtraWidgets/ScrollingTextWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ScrollingTextWidget

**Namespace:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Module:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Type:** `public class ScrollingTextWidget : TextWidget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/ScrollingTextWidget.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

ScrollingTextWidget lives in the TaleWorlds.GauntletUI.ExtraWidgets module, source file TaleWorlds.GauntletUI.ExtraWidgets/ScrollingTextWidget.cs. It is a public class, implementing/inheriting TextWidget; the inheritance chain is ScrollingTextWidget → TextWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 10 public/protected members: 3 methods, 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ScrollingTextWidget lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI.ExtraWidgets`, inheritance chain ScrollingTextWidget → TextWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 6/10, methods 3/10), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.ExtraWidgets/ScrollingTextWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ActualText` | `public string ActualText` | property |
| `ScrollingTextWidget` | `public ScrollingTextWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `OnBrushChanged` | `public override void OnBrushChanged()` | method |
| `SetText` | `protected override void SetText(string value)` | method |
| `ScrollOnHoverWidget` | `public Widget ScrollOnHoverWidget` | property |
| `IsAutoScrolling` | `public bool IsAutoScrolling` | property |
| `ScrollPerTick` | `public float ScrollPerTick` | property |
| `InbetweenScrollDuration` | `public float InbetweenScrollDuration` | property |
| `DefaultTextHorizontalAlignment` | `public TextHorizontalAlignment DefaultTextHorizontalAlignment` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface TextWidget](../TextWidget/)
- [same namespace AnimatedNumberTextWidget](../AnimatedNumberTextWidget/)
- [same namespace CustomWidgetManager](../CustomWidgetManager/)
- [same namespace DelayedStateChanger](../DelayedStateChanger/)
- [same namespace DialogButtonsParentWidget](../DialogButtonsParentWidget/)
