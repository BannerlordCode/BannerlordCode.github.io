---
title: "FillBarVerticalClipWidget"
description: "FillBarVerticalClipWidget: a public class in TaleWorlds.GauntletUI.ExtraWidgets, inheriting Widget; 15 exposed members (2 methods, 12 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI.ExtraWidgets/FillBarVerticalClipWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# FillBarVerticalClipWidget

**Namespace:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Module:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Type:** `public class FillBarVerticalClipWidget : Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/FillBarVerticalClipWidget.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

FillBarVerticalClipWidget lives in the TaleWorlds.GauntletUI.ExtraWidgets module, source file TaleWorlds.GauntletUI.ExtraWidgets/FillBarVerticalClipWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is FillBarVerticalClipWidget → Widget → PropertyOwnerObject. It exposes 15 public/protected members: 2 methods, 12 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FillBarVerticalClipWidget lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI.ExtraWidgets`, inheritance chain FillBarVerticalClipWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 12/15, methods 2/15), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.ExtraWidgets/FillBarVerticalClipWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `FillBarVerticalClipWidget` | `public FillBarVerticalClipWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `OnRender` | `protected override void OnRender(TwoDimensionContext twoDimensionContext, TwoDimensionDrawContext drawContext)` | method |
| `IsDirectionUpward` | `public bool IsDirectionUpward` | property |
| `CurrentAmount` | `public int CurrentAmount` | property |
| `MaxAmount` | `public int MaxAmount` | property |
| `InitialAmount` | `public int InitialAmount` | property |
| `MaxAmountAsFloat` | `public float MaxAmountAsFloat` | property |
| `CurrentAmountAsFloat` | `public float CurrentAmountAsFloat` | property |
| `InitialAmountAsFloat` | `public float InitialAmountAsFloat` | property |
| `FillWidget` | `public Widget FillWidget` | property |
| `ChangeWidget` | `public Widget ChangeWidget` | property |
| `DividerWidget` | `public Widget DividerWidget` | property |
| `ContainerWidget` | `public Widget ContainerWidget` | property |
| `ClipWidget` | `public Widget ClipWidget` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AnimatedNumberTextWidget](../AnimatedNumberTextWidget/)
- [same namespace CustomWidgetManager](../CustomWidgetManager/)
- [same namespace DelayedStateChanger](../DelayedStateChanger/)
- [same namespace DialogButtonsParentWidget](../DialogButtonsParentWidget/)
