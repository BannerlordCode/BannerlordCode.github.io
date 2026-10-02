---
title: "BrushAnimation"
description: "BrushAnimation: a public class in TaleWorlds.GauntletUI; 12 exposed members (5 methods, 6 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushAnimation.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BrushAnimation

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class BrushAnimation`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushAnimation.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

BrushAnimation lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushAnimation.cs. It is a public class; the inheritance chain is BrushAnimation. It exposes 12 public/protected members: 5 methods, 6 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BrushAnimation lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI`, inheritance chain BrushAnimation. The surface is property-led (properties 6/12, methods 5/12), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushAnimation.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Name` | `public string Name` | property |
| `Duration` | `public float Duration` | property |
| `Loop` | `public bool Loop` | property |
| `InterpolationType` | `public AnimationInterpolation.Type InterpolationType` | property |
| `InterpolationFunction` | `public AnimationInterpolation.Function InterpolationFunction` | property |
| `StyleAnimation` | `public BrushLayerAnimation StyleAnimation` | property |
| `BrushAnimation` | `public BrushAnimation()` | constructor |
| `AddAnimationProperty` | `public void AddAnimationProperty(BrushAnimationProperty property)` | method |
| `RemoveAnimationProperty` | `public void RemoveAnimationProperty(BrushAnimationProperty property)` | method |
| `FillFrom` | `public void FillFrom(BrushAnimation animation)` | method |
| `GetLayerAnimation` | `public BrushLayerAnimation GetLayerAnimation(string name)` | method |
| `IEnumerable` | `public IEnumerable<BrushLayerAnimation>GetLayerAnimations()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AlignmentAxis](../AlignmentAxis/)
- [same namespace AnimatedDropdownWidget](../AnimatedDropdownWidget/)
- [same namespace AnimationInterpolation](../AnimationInterpolation/)
- [same namespace AudioProperty](../AudioProperty/)
