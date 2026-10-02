---
title: "TooltipWidget"
description: "TooltipWidget: a public class in TaleWorlds.GauntletUI.ExtraWidgets, inheriting Widget; 5 exposed members (2 methods, 2 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI.ExtraWidgets/TooltipWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TooltipWidget

**Namespace:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Module:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Type:** `public class TooltipWidget : Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/TooltipWidget.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

TooltipWidget lives in the TaleWorlds.GauntletUI.ExtraWidgets module, source file TaleWorlds.GauntletUI.ExtraWidgets/TooltipWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is TooltipWidget → Widget → PropertyOwnerObject. It exposes 5 public/protected members: 2 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TooltipWidget lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI.ExtraWidgets`, inheritance chain TooltipWidget → Widget → PropertyOwnerObject. The surface is method-led (methods 2/5, properties 2/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.ExtraWidgets/TooltipWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `PositioningType` | `public TooltipPositioningType PositioningType` | property |
| `TooltipWidget` | `public TooltipWidget(UIContext context) : base(context)` | constructor |
| `RefreshState` | `protected override void RefreshState()` | method |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `AnimTime` | `public float AnimTime` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AnimatedNumberTextWidget](../AnimatedNumberTextWidget/)
- [same namespace CustomWidgetManager](../CustomWidgetManager/)
- [same namespace DelayedStateChanger](../DelayedStateChanger/)
- [same namespace DialogButtonsParentWidget](../DialogButtonsParentWidget/)
