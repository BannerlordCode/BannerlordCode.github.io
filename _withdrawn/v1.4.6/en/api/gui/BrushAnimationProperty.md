---
title: "BrushAnimationProperty"
description: "BrushAnimationProperty: a public class in TaleWorlds.GauntletUI; 11 exposed members (5 methods, 4 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushAnimationProperty.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BrushAnimationProperty

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class BrushAnimationProperty`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushAnimationProperty.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

BrushAnimationProperty lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushAnimationProperty.cs. It is a public class; the inheritance chain is BrushAnimationProperty. It exposes 11 public/protected members: 5 methods, 4 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BrushAnimationProperty lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI`, inheritance chain BrushAnimationProperty. The surface is method-led (methods 5/11, properties 4/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushAnimationProperty.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `LayerName` | `public string LayerName` | property |
| `IEnumerable` | `public IEnumerable<BrushAnimationKeyFrame>KeyFrames` | property |
| `Count` | `public int Count` | property |
| `BrushAnimationProperty` | `public BrushAnimationProperty()` | constructor |
| `GetFrameAfter` | `public BrushAnimationKeyFrame GetFrameAfter(float time)` | method |
| `GetFrameAt` | `public BrushAnimationKeyFrame GetFrameAt(int i)` | method |
| `Clone` | `public BrushAnimationProperty Clone()` | method |
| `AddKeyFrame` | `public void AddKeyFrame(BrushAnimationKeyFrame keyFrame)` | method |
| `RemoveKeyFrame` | `public void RemoveKeyFrame(BrushAnimationKeyFrame keyFrame)` | method |
| `BrushAnimationPropertyType` | `public enum BrushAnimationPropertyType` | property |
| `BrushAnimationPropertyType` | `public enum BrushAnimationPropertyType` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AlignmentAxis](../AlignmentAxis/)
- [same namespace AnimatedDropdownWidget](../AnimatedDropdownWidget/)
- [same namespace AnimationInterpolation](../AnimationInterpolation/)
- [same namespace AudioProperty](../AudioProperty/)
