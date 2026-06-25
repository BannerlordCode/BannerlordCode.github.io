---
title: "BrushLayerState"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BrushLayerState`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BrushLayerState

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public struct BrushLayerState : IBrushAnimationState, IDataSource`
**Base:** `IBrushAnimationState`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushLayerState.cs`

## Overview

`BrushLayerState` lives in `TaleWorlds.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### FillFrom
`public void FillFrom(IBrushLayerData styleLayer)`

**Purpose:** Handles logic related to `fill from`.

### LerpFrom
`public void LerpFrom(BrushLayerState start, IBrushLayerData end, float ratio)`

**Purpose:** Handles logic related to `lerp from`.

### SetValueAsFloat
`public void SetValueAsFloat(BrushAnimationProperty.BrushAnimationPropertyType propertyType, float value)`

**Purpose:** Sets the value or state of `value as float`.

### SetValueAsColor
`public void SetValueAsColor(BrushAnimationProperty.BrushAnimationPropertyType propertyType, in Color value)`

**Purpose:** Sets the value or state of `value as color`.

### SetValueAsSprite
`public void SetValueAsSprite(BrushAnimationProperty.BrushAnimationPropertyType propertyType, Sprite value)`

**Purpose:** Sets the value or state of `value as sprite`.

### GetValueAsFloat
`public float GetValueAsFloat(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**Purpose:** Gets the current value of `value as float`.

### GetValueAsColor
`public Color GetValueAsColor(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**Purpose:** Gets the current value of `value as color`.

### GetValueAsSprite
`public Sprite GetValueAsSprite(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**Purpose:** Gets the current value of `value as sprite`.

### SetValueAsLerpOfValues
`public static void SetValueAsLerpOfValues(ref BrushLayerState currentState, in BrushAnimationKeyFrame startValue, in BrushAnimationKeyFrame endValue, BrushAnimationProperty.BrushAnimationPropertyType propertyType, float ratio)`

**Purpose:** Sets the value or state of `value as lerp of values`.

## Usage Example

```csharp
var value = new BrushLayerState();
value.FillFrom(styleLayer);
```

## See Also

- [Complete Class Catalog](../catalog)