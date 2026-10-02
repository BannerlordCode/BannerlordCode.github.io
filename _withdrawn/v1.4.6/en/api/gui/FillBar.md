---
title: "FillBar"
description: "FillBar: a public class in TaleWorlds.GauntletUI.ExtraWidgets, inheriting BrushWidget; 11 exposed members (2 methods, 8 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI.ExtraWidgets/FillBar.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# FillBar

**Namespace:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Module:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Type:** `public class FillBar : BrushWidget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/FillBar.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

FillBar lives in the TaleWorlds.GauntletUI.ExtraWidgets module, source file TaleWorlds.GauntletUI.ExtraWidgets/FillBar.cs. It is a public class, implementing/inheriting BrushWidget; the inheritance chain is FillBar → BrushWidget → Widget → PropertyOwnerObject. It exposes 11 public/protected members: 2 methods, 8 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FillBar lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI.ExtraWidgets`, inheritance chain FillBar → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 8/11, methods 2/11), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.ExtraWidgets/FillBar.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `FillBar` | `public FillBar(UIContext context) : base(context)` | constructor |
| `OnRender` | `protected override void OnRender(TwoDimensionContext twoDimensionContext, TwoDimensionDrawContext drawContext)` | method |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `MaxAmount` | `public int MaxAmount` | property |
| `CurrentAmount` | `public int CurrentAmount` | property |
| `InitialAmount` | `public int InitialAmount` | property |
| `MaxAmountAsFloat` | `public float MaxAmountAsFloat` | property |
| `CurrentAmountAsFloat` | `public float CurrentAmountAsFloat` | property |
| `InitialAmountAsFloat` | `public float InitialAmountAsFloat` | property |
| `IsVertical` | `public bool IsVertical` | property |
| `IsSmoothFillEnabled` | `public bool IsSmoothFillEnabled` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface BrushWidget](../BrushWidget/)
- [same namespace AnimatedNumberTextWidget](../AnimatedNumberTextWidget/)
- [same namespace CustomWidgetManager](../CustomWidgetManager/)
- [same namespace DelayedStateChanger](../DelayedStateChanger/)
- [same namespace DialogButtonsParentWidget](../DialogButtonsParentWidget/)
