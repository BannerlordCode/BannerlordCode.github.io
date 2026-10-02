---
title: "BarterTupleItemButtonWidget"
description: "BarterTupleItemButtonWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ButtonWidget; 6 exposed members (1 methods, 4 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Barter/BarterTupleItemButtonWidget.cs."
---
# BarterTupleItemButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class BarterTupleItemButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Barter/BarterTupleItemButtonWidget.cs`

## Overview

BarterTupleItemButtonWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Barter/BarterTupleItemButtonWidget.cs. It is a public class, implementing/inheriting ButtonWidget; the inheritance chain is BarterTupleItemButtonWidget → ButtonWidget. It exposes 6 public/protected members: 1 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BarterTupleItemButtonWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter) the module directory; inheritance chain BarterTupleItemButtonWidget → ButtonWidget. The surface is property-led (properties 4/6, methods 1/6), so it mostly exposes state for reading. ButtonWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Barter/BarterTupleItemButtonWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SliderParentList` | `public ListPanel SliderParentList` | property |
| `CountText` | `public TextWidget CountText` | property |
| `BarterTupleItemButtonWidget` | `public BarterTupleItemButtonWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `IsMultiple` | `public bool IsMultiple` | property |
| `IsOffered` | `public bool IsOffered` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BarterItemCountControlButtonWidget](../BarterItemCountControlButtonWidget)
- [same namespace BarterItemCountTextWidget](../BarterItemCountTextWidget)
- [same namespace BarterItemVisualBrushWidget](../BarterItemVisualBrushWidget)
