---
title: "DebugValueUpdateSlider"
description: "DebugValueUpdateSlider: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting SliderWidget; 5 exposed members (2 methods, 2 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/DebugValueUpdateSlider.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DebugValueUpdateSlider

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class DebugValueUpdateSlider : SliderWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/DebugValueUpdateSlider.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

DebugValueUpdateSlider lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/DebugValueUpdateSlider.cs. It is a public class, implementing/inheriting SliderWidget; the inheritance chain is DebugValueUpdateSlider → SliderWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 5 public/protected members: 2 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DebugValueUpdateSlider lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets`, inheritance chain DebugValueUpdateSlider → SliderWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is method-led (methods 2/5, properties 2/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/DebugValueUpdateSlider.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `DebugValueUpdateSlider` | `public DebugValueUpdateSlider(UIContext context) : base(context)` | constructor |
| `OnValueIntChanged` | `protected override void OnValueIntChanged(int value)` | method |
| `OnValueFloatChanged` | `protected override void OnValueFloatChanged(float value)` | method |
| `WidgetToUpdate` | `public TextWidget WidgetToUpdate` | property |
| `ValueToUpdate` | `public FillBarVerticalWidget ValueToUpdate` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SliderWidget](../../gui/SliderWidget/)
- [same namespace AutoHideRichTextWidget](../AutoHideRichTextWidget/)
- [same namespace AutoHideTextWidget](../AutoHideTextWidget/)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget/)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager/)
