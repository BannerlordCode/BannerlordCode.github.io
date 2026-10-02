---
title: "CircleLoadingAnimWidget"
description: "CircleLoadingAnimWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 12 exposed members (3 methods, 7 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/CircleLoadingAnimWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CircleLoadingAnimWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class CircleLoadingAnimWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/CircleLoadingAnimWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

CircleLoadingAnimWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/CircleLoadingAnimWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is CircleLoadingAnimWidget → Widget → PropertyOwnerObject. It exposes 12 public/protected members: 3 methods, 7 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CircleLoadingAnimWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets`, inheritance chain CircleLoadingAnimWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 7/12, methods 3/12), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/CircleLoadingAnimWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `NumOfCirclesInASecond` | `public float NumOfCirclesInASecond` | property |
| `FullAlpha` | `public float FullAlpha` | property |
| `CircleRadius` | `public float CircleRadius` | property |
| `StaySeconds` | `public float StaySeconds` | property |
| `FadeInSeconds` | `public float FadeInSeconds` | property |
| `FadeOutSeconds` | `public float FadeOutSeconds` | property |
| `CircleLoadingAnimWidget` | `public CircleLoadingAnimWidget(UIContext context) : base(context)` | constructor |
| `OnChildAdded` | `protected override void OnChildAdded(Widget child)` | method |
| `OnAfterChildRemoved` | `protected override void OnAfterChildRemoved(Widget child, int previousIndexOfChild)` | method |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `VisualState` | `public enum VisualState` | property |
| `VisualState` | `public enum VisualState` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AutoHideRichTextWidget](../AutoHideRichTextWidget/)
- [same namespace AutoHideTextWidget](../AutoHideTextWidget/)
- [same namespace AutoHideZeroTextWidget](../AutoHideZeroTextWidget/)
- [same namespace BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager/)
