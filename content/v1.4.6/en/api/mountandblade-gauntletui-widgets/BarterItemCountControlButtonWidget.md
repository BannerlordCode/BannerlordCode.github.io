---
title: "BarterItemCountControlButtonWidget"
description: "BarterItemCountControlButtonWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting ButtonWidget; 5 exposed members (3 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Barter/BarterItemCountControlButtonWidget.cs."
---
# BarterItemCountControlButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class BarterItemCountControlButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Barter/BarterItemCountControlButtonWidget.cs`

## Overview

BarterItemCountControlButtonWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Barter/BarterItemCountControlButtonWidget.cs. It is a public class, implementing/inheriting ButtonWidget; the inheritance chain is BarterItemCountControlButtonWidget → ButtonWidget. It exposes 5 public/protected members: 3 methods, 1 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BarterItemCountControlButtonWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter) the module directory; inheritance chain BarterItemCountControlButtonWidget → ButtonWidget. The surface is method-led (methods 3/5, properties 1/5), so it mostly exposes operations. ButtonWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Barter/BarterItemCountControlButtonWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IncreaseToHoldDelay` | `public float IncreaseToHoldDelay` | property |
| `BarterItemCountControlButtonWidget` | `public BarterItemCountControlButtonWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `OnMousePressed` | `protected override void OnMousePressed()` | method |
| `OnMouseReleased` | `protected override void OnMouseReleased(bool isFromInput)` | method |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BarterItemCountTextWidget](../BarterItemCountTextWidget)
- [same namespace BarterItemVisualBrushWidget](../BarterItemVisualBrushWidget)
- [same namespace BarterTupleItemButtonWidget](../BarterTupleItemButtonWidget)
