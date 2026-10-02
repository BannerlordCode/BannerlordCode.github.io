---
title: "ParallaxItemBrushWidget"
description: "ParallaxItemBrushWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting BrushWidget; 8 exposed members (1 methods, 5 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/ParallaxItemBrushWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ParallaxItemBrushWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ParallaxItemBrushWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ParallaxItemBrushWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

ParallaxItemBrushWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/ParallaxItemBrushWidget.cs. It is a public class, implementing/inheriting BrushWidget; the inheritance chain is ParallaxItemBrushWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 8 public/protected members: 1 methods, 5 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ParallaxItemBrushWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets`, inheritance chain ParallaxItemBrushWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 5/8, methods 1/8), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/ParallaxItemBrushWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsEaseInOutEnabled` | `public bool IsEaseInOutEnabled` | property |
| `OneDirectionDuration` | `public float OneDirectionDuration` | property |
| `OneDirectionDistance` | `public float OneDirectionDistance` | property |
| `InitialDirection` | `public ParallaxItemBrushWidget.ParallaxMovementDirection InitialDirection` | property |
| `ParallaxItemBrushWidget` | `public ParallaxItemBrushWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `ParallaxMovementDirection` | `public enum ParallaxMovementDirection` | property |
| `ParallaxMovementDirection` | `public enum ParallaxMovementDirection` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface BrushWidget](../../gui/BrushWidget/)
- [same namespace AutoHideRichTextWidget](../AutoHideRichTextWidget/)
- [same namespace AutoHideTextWidget](../AutoHideTextWidget/)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget/)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager/)
