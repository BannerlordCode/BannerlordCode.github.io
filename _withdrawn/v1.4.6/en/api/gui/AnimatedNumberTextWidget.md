---
title: "AnimatedNumberTextWidget"
description: "AnimatedNumberTextWidget: a public class in TaleWorlds.GauntletUI.ExtraWidgets, inheriting TextWidget; 9 exposed members (3 methods, 5 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI.ExtraWidgets/AnimatedNumberTextWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AnimatedNumberTextWidget

**Namespace:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Module:** `TaleWorlds.GauntletUI.ExtraWidgets`
**Type:** `public class AnimatedNumberTextWidget : TextWidget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/AnimatedNumberTextWidget.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

AnimatedNumberTextWidget lives in the TaleWorlds.GauntletUI.ExtraWidgets module, source file TaleWorlds.GauntletUI.ExtraWidgets/AnimatedNumberTextWidget.cs. It is a public class, implementing/inheriting TextWidget; the inheritance chain is AnimatedNumberTextWidget → TextWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 9 public/protected members: 3 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AnimatedNumberTextWidget lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI.ExtraWidgets`, inheritance chain AnimatedNumberTextWidget → TextWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 5/9, methods 3/9), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI.ExtraWidgets/AnimatedNumberTextWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `AnimatedNumberTextWidget` | `public AnimatedNumberTextWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `StartAnimation` | `public void StartAnimation()` | method |
| `Reset` | `public void Reset()` | method |
| `AnimationDelay` | `public float AnimationDelay` | property |
| `AnimationDuration` | `public float AnimationDuration` | property |
| `ReferenceNumber` | `public int ReferenceNumber` | property |
| `Number` | `public int Number` | property |
| `AutoStart` | `public bool AutoStart` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface TextWidget](../TextWidget/)
- [same namespace CustomWidgetManager](../CustomWidgetManager/)
- [same namespace DelayedStateChanger](../DelayedStateChanger/)
- [same namespace DialogButtonsParentWidget](../DialogButtonsParentWidget/)
- [same namespace DisabledAlphaChangerWidget](../DisabledAlphaChangerWidget/)
