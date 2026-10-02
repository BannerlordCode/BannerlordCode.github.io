---
title: "FillBarWidget"
description: "FillBarWidget: a public class in TaleWorlds.GauntletUI.ExtraWidgets, inheriting Widget; 14 exposed members (1 methods, 12 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI.ExtraWidgets/FillBarWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# FillBarWidget

**Namespace:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Module:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Type:** `public class FillBarWidget : Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/FillBarWidget.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

FillBarWidget lives in the TaleWorlds.GauntletUI.ExtraWidgets module, source file TaleWorlds.GauntletUI.ExtraWidgets/FillBarWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is FillBarWidget → Widget → PropertyOwnerObject. It exposes 14 public/protected members: 1 methods, 12 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FillBarWidget lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI.ExtraWidgets`, inheritance chain FillBarWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 12/14, methods 1/14), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.ExtraWidgets/FillBarWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `FillBarWidget` | `public FillBarWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `CurrentAmount` | `public int CurrentAmount` | property |
| `MaxAmount` | `public int MaxAmount` | property |
| `InitialAmount` | `public int InitialAmount` | property |
| `MaxAmountAsFloat` | `public float MaxAmountAsFloat` | property |
| `CurrentAmountAsFloat` | `public float CurrentAmountAsFloat` | property |
| `InitialAmountAsFloat` | `public float InitialAmountAsFloat` | property |
| `CompletelyFillChange` | `public bool CompletelyFillChange` | property |
| `ShowNegativeChange` | `public bool ShowNegativeChange` | property |
| `CustomChangeColor` | `public bool CustomChangeColor` | property |
| `FillWidget` | `public Widget FillWidget` | property |
| `ChangeWidget` | `public Widget ChangeWidget` | property |
| `DividerWidget` | `public Widget DividerWidget` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AnimatedNumberTextWidget](../AnimatedNumberTextWidget/)
- [same namespace CustomWidgetManager](../CustomWidgetManager/)
- [same namespace DelayedStateChanger](../DelayedStateChanger/)
- [same namespace DialogButtonsParentWidget](../DialogButtonsParentWidget/)
