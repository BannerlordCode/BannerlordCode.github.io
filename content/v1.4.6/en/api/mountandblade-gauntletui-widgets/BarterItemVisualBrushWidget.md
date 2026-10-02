---
title: "BarterItemVisualBrushWidget"
description: "BarterItemVisualBrushWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting BrushWidget; 9 exposed members (1 methods, 7 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Barter/BarterItemVisualBrushWidget.cs."
---
# BarterItemVisualBrushWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class BarterItemVisualBrushWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Barter/BarterItemVisualBrushWidget.cs`

## Overview

BarterItemVisualBrushWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Barter/BarterItemVisualBrushWidget.cs. It is a public class, implementing/inheriting BrushWidget; the inheritance chain is BarterItemVisualBrushWidget → BrushWidget. It exposes 9 public/protected members: 1 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BarterItemVisualBrushWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter) the module directory; inheritance chain BarterItemVisualBrushWidget → BrushWidget. The surface is property-led (properties 7/9, methods 1/9), so it mostly exposes state for reading. BrushWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Barter/BarterItemVisualBrushWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BarterItemVisualBrushWidget` | `public BarterItemVisualBrushWidget(UIContext context) : base(context)` | constructor |
| `OnParallelUpdate` | `protected override void OnParallelUpdate(float dt)` | method |
| `SpriteWidget` | `public BrushWidget SpriteWidget` | property |
| `SpriteClipWidget` | `public Widget SpriteClipWidget` | property |
| `ImageIdentifierWidget` | `public ImageIdentifierWidget ImageIdentifierWidget` | property |
| `MaskedTextureWidget` | `public MaskedTextureWidget MaskedTextureWidget` | property |
| `HasVisualIdentifier` | `public bool HasVisualIdentifier` | property |
| `Type` | `public string Type` | property |
| `FiefImagePath` | `public string FiefImagePath` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BarterItemCountControlButtonWidget](../BarterItemCountControlButtonWidget)
- [same namespace BarterItemCountTextWidget](../BarterItemCountTextWidget)
- [same namespace BarterTupleItemButtonWidget](../BarterTupleItemButtonWidget)
