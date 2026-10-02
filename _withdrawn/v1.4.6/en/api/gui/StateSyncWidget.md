---
title: "StateSyncWidget"
description: "StateSyncWidget: a public class in TaleWorlds.GauntletUI.ExtraWidgets, inheriting BrushWidget; 4 exposed members (1 methods, 2 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI.ExtraWidgets/StateSyncWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# StateSyncWidget

**Namespace:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Module:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Type:** `public class StateSyncWidget : BrushWidget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/StateSyncWidget.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

StateSyncWidget lives in the TaleWorlds.GauntletUI.ExtraWidgets module, source file TaleWorlds.GauntletUI.ExtraWidgets/StateSyncWidget.cs. It is a public class, implementing/inheriting BrushWidget; the inheritance chain is StateSyncWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 4 public/protected members: 1 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StateSyncWidget lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI.ExtraWidgets`, inheritance chain StateSyncWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 2/4, methods 1/4), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.ExtraWidgets/StateSyncWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `StateSyncWidget` | `public StateSyncWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `SourceWidget` | `public Widget SourceWidget` | property |
| `TargetWidget` | `public Widget TargetWidget` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface BrushWidget](../BrushWidget/)
- [same namespace AnimatedNumberTextWidget](../AnimatedNumberTextWidget/)
- [same namespace CustomWidgetManager](../CustomWidgetManager/)
- [same namespace DelayedStateChanger](../DelayedStateChanger/)
- [same namespace DialogButtonsParentWidget](../DialogButtonsParentWidget/)
