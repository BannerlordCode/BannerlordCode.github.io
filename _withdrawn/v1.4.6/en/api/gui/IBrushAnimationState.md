---
title: "IBrushAnimationState"
description: "IBrushAnimationState: a public interface in TaleWorlds.GauntletUI; 8 exposed members (8 methods, 0 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/IBrushAnimationState.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IBrushAnimationState

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public interface IBrushAnimationState`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/IBrushAnimationState.cs`
**Bucket:** `gui` (rule:TaleWorlds.GauntletUI)

## Overview

IBrushAnimationState lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/IBrushAnimationState.cs. It is a public interface; the inheritance chain is IBrushAnimationState. It exposes 8 public/protected members: 8 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IBrushAnimationState lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.GauntletUI`), namespace `TaleWorlds.GauntletUI`, inheritance chain IBrushAnimationState. The surface is method-led (methods 8/8, properties 0/8), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/IBrushAnimationState.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `FillFrom` | `void FillFrom(IDataSource source);` | method |
| `LerpFrom` | `void LerpFrom(IBrushAnimationState start, IDataSource end, float ratio);` | method |
| `GetValueAsFloat` | `float GetValueAsFloat(BrushAnimationProperty.BrushAnimationPropertyType propertyType);` | method |
| `GetValueAsColor` | `Color GetValueAsColor(BrushAnimationProperty.BrushAnimationPropertyType propertyType);` | method |
| `GetValueAsSprite` | `Sprite GetValueAsSprite(BrushAnimationProperty.BrushAnimationPropertyType propertyType);` | method |
| `SetValueAsFloat` | `void SetValueAsFloat(BrushAnimationProperty.BrushAnimationPropertyType propertyType, float value);` | method |
| `SetValueAsColor` | `void SetValueAsColor(BrushAnimationProperty.BrushAnimationPropertyType propertyType, in Color value);` | method |
| `SetValueAsSprite` | `void SetValueAsSprite(BrushAnimationProperty.BrushAnimationPropertyType propertyType, Sprite value);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AlignmentAxis](../AlignmentAxis/)
- [same namespace AnimatedDropdownWidget](../AnimatedDropdownWidget/)
- [same namespace AnimationInterpolation](../AnimationInterpolation/)
- [same namespace AudioProperty](../AudioProperty/)
