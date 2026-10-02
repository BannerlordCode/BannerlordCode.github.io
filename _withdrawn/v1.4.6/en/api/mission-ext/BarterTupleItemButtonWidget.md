---
title: "BarterTupleItemButtonWidget"
description: "BarterTupleItemButtonWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter, inheriting ButtonWidget; 6 exposed members (1 methods, 4 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Barter/BarterTupleItemButtonWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BarterTupleItemButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class BarterTupleItemButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Barter/BarterTupleItemButtonWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

BarterTupleItemButtonWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Barter/BarterTupleItemButtonWidget.cs. It is a public class, implementing/inheriting ButtonWidget; the inheritance chain is BarterTupleItemButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 6 public/protected members: 1 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BarterTupleItemButtonWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter`, inheritance chain BarterTupleItemButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 4/6, methods 1/6), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Barter/BarterTupleItemButtonWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `SliderParentList` | `public ListPanel SliderParentList` | property |
| `CountText` | `public TextWidget CountText` | property |
| `BarterTupleItemButtonWidget` | `public BarterTupleItemButtonWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `IsMultiple` | `public bool IsMultiple` | property |
| `IsOffered` | `public bool IsOffered` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface ButtonWidget](../../gui/ButtonWidget/)
- [same namespace BarterItemCountControlButtonWidget](../BarterItemCountControlButtonWidget/)
- [same namespace BarterItemCountTextWidget](../BarterItemCountTextWidget/)
- [same namespace BarterItemVisualBrushWidget](../BarterItemVisualBrushWidget/)
