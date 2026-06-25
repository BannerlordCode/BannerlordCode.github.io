---
title: "BrushState"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BrushState`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BrushState

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public struct BrushState : IBrushAnimationState, IDataSource`
**Base:** `IBrushAnimationState`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushState.cs`

## Overview

`BrushState` lives in `TaleWorlds.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### FillFrom
`public void FillFrom(Style style)`

**Purpose:** Handles logic related to `fill from`.

### LerpFrom
`public void LerpFrom(BrushState start, Style end, float ratio)`

**Purpose:** Handles logic related to `lerp from`.

### GetValueAsFloat
`public float GetValueAsFloat(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**Purpose:** Gets the current value of `value as float`.

### GetValueAsColor
`public Color GetValueAsColor(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**Purpose:** Gets the current value of `value as color`.

### GetValueAsSprite
`public Sprite GetValueAsSprite(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**Purpose:** Gets the current value of `value as sprite`.

### SetValueAsFloat
`public void SetValueAsFloat(BrushAnimationProperty.BrushAnimationPropertyType propertyType, float value)`

**Purpose:** Sets the value or state of `value as float`.

### SetValueAsColor
`public void SetValueAsColor(BrushAnimationProperty.BrushAnimationPropertyType propertyType, in Color value)`

**Purpose:** Sets the value or state of `value as color`.

### SetValueAsSprite
`public void SetValueAsSprite(BrushAnimationProperty.BrushAnimationPropertyType propertyType, Sprite value)`

**Purpose:** Sets the value or state of `value as sprite`.

### CreateTextMaterial
`public TextMaterial CreateTextMaterial(TwoDimensionDrawContext drawContext)`

**Purpose:** Creates a new `text material` instance or object.

## Usage Example

```csharp
var value = new BrushState();
value.FillFrom(style);
```

## See Also

- [Complete Class Catalog](../catalog)