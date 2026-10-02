---
title: "CircleItemPlacerWidget"
description: "CircleItemPlacerWidget: a public class in TaleWorlds.GauntletUI, inheriting Widget; 7 exposed members (2 methods, 4 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/CircleItemPlacerWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CircleItemPlacerWidget

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class CircleItemPlacerWidget : Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/CircleItemPlacerWidget.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

CircleItemPlacerWidget lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/CircleItemPlacerWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is CircleItemPlacerWidget → Widget → PropertyOwnerObject. It exposes 7 public/protected members: 2 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CircleItemPlacerWidget lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI`, inheritance chain CircleItemPlacerWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 4/7, methods 2/7), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/CircleItemPlacerWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `DistanceFromCenterModifier` | `public float DistanceFromCenterModifier` | property |
| `DirectionWidget` | `public Widget DirectionWidget` | property |
| `DirectionWidgetDistanceMultiplier` | `public float DirectionWidgetDistanceMultiplier` | property |
| `ActivateOnlyWithController` | `public bool ActivateOnlyWithController` | property |
| `CircleItemPlacerWidget` | `public CircleItemPlacerWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `AnimateDistanceFromCenterTo` | `public void AnimateDistanceFromCenterTo(float distanceFromCenter, float animationDuration)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AlignmentAxis](../AlignmentAxis/)
- [same namespace AnimatedDropdownWidget](../AnimatedDropdownWidget/)
- [same namespace AnimationInterpolation](../AnimationInterpolation/)
- [same namespace AudioProperty](../AudioProperty/)
