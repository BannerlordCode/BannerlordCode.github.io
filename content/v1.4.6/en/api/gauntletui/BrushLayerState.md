---
title: "BrushLayerState"
description: "BrushLayerState: a public struct in TaleWorlds.GauntletUI, inheriting IBrushAnimationState, IDataSource; 9 exposed members (9 methods, 0 properties, 0 fields). Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushLayerState.cs."
---
# BrushLayerState

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public struct BrushLayerState : IBrushAnimationState, IDataSource`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushLayerState.cs`

## Overview

BrushLayerState lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushLayerState.cs. It is a public struct, implementing/inheriting IBrushAnimationState, IDataSource; the inheritance chain is BrushLayerState → IBrushAnimationState. It exposes 9 public/protected members: 9 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BrushLayerState is a top-level type in TaleWorlds.GauntletUI, namespace matching the module directory; inheritance chain BrushLayerState → IBrushAnimationState. The surface is method-led (methods 9/9, properties 0/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushLayerState.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FillFrom` | `public void FillFrom(IBrushLayerData styleLayer)` | method |
| `LerpFrom` | `public void LerpFrom(BrushLayerState start, IBrushLayerData end, float ratio)` | method |
| `SetValueAsFloat` | `public void SetValueAsFloat(BrushAnimationProperty.BrushAnimationPropertyType propertyType, float value)` | method |
| `SetValueAsColor` | `public void SetValueAsColor(BrushAnimationProperty.BrushAnimationPropertyType propertyType, in Color value)` | method |
| `SetValueAsSprite` | `public void SetValueAsSprite(BrushAnimationProperty.BrushAnimationPropertyType propertyType, Sprite value)` | method |
| `GetValueAsFloat` | `public float GetValueAsFloat(BrushAnimationProperty.BrushAnimationPropertyType propertyType)` | method |
| `GetValueAsColor` | `public Color GetValueAsColor(BrushAnimationProperty.BrushAnimationPropertyType propertyType)` | method |
| `GetValueAsSprite` | `public Sprite GetValueAsSprite(BrushAnimationProperty.BrushAnimationPropertyType propertyType)` | method |
| `SetValueAsLerpOfValues` | `public static void SetValueAsLerpOfValues(ref BrushLayerState currentState, in BrushAnimationKeyFrame startValue, in BrushAnimationKeyFrame endValue, BrushAnimationProperty.BrushAnimationPropertyType propertyType, float ratio)` | method |

## See Also

- [↑ gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface IBrushAnimationState](../IBrushAnimationState)
- [base / interface IDataSource](../IDataSource)
- [same namespace AlignmentAxis](../AlignmentAxis)
- [same namespace AnimatedDropdownWidget](../AnimatedDropdownWidget)
- [same namespace AnimationInterpolation](../AnimationInterpolation)
- [same namespace AudioProperty](../AudioProperty)
