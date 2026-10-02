---
title: "RichTextWidget"
description: "RichTextWidget: a public class in TaleWorlds.GauntletUI.BaseTypes, inheriting BrushWidget; 14 exposed members (9 methods, 4 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/RichTextWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# RichTextWidget

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class RichTextWidget : BrushWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/RichTextWidget.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

RichTextWidget lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/RichTextWidget.cs. It is a public class, implementing/inheriting BrushWidget; the inheritance chain is RichTextWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 14 public/protected members: 9 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RichTextWidget lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI.BaseTypes`, inheritance chain RichTextWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is method-led (methods 9/14, properties 4/14), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/RichTextWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `AutoHideIfEmpty` | `public bool AutoHideIfEmpty` | property |
| `LinkHoverCursorState` | `public string LinkHoverCursorState` | property |
| `Text` | `public string Text` | property |
| `RichTextWidget` | `public RichTextWidget(UIContext context) : base(context)` | constructor |
| `OnBrushChanged` | `public override void OnBrushChanged()` | method |
| `SetText` | `protected virtual void SetText(string value)` | method |
| `RefreshState` | `protected override void RefreshState()` | method |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `OnRender` | `protected override void OnRender(TwoDimensionContext twoDimensionContext, TwoDimensionDrawContext drawContext)` | method |
| `OnMousePressed` | `protected internal override void OnMousePressed()` | method |
| `OnMouseReleased` | `protected internal override void OnMouseReleased(bool isFromInput)` | method |
| `OnMouseAlternatePressed` | `protected internal override void OnMouseAlternatePressed()` | method |
| `OnMouseAlternateReleased` | `protected internal override void OnMouseAlternateReleased(bool isFromInput)` | method |
| `CanBreakWords` | `public bool CanBreakWords` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface BrushWidget](../BrushWidget/)
- [same namespace BasicContainer](../BasicContainer/)
- [same namespace BrushWidget](../BrushWidget/)
- [same namespace ButtonType](../ButtonType/)
- [same namespace ButtonWidget](../ButtonWidget/)
