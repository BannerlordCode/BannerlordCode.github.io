---
title: "BrushLayerState"
description: "Auto-generated class reference for BrushLayerState."
---
# BrushLayerState

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public struct BrushLayerState : IBrushAnimationState, IDataSource`
**Base:** `IBrushAnimationState`
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/BrushLayerState.cs`

## Overview

`BrushLayerState` lives in `TaleWorlds.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### FillFrom
`public void FillFrom(IBrushLayerData styleLayer)`

**Purpose:** **Purpose:** Executes the FillFrom logic.

```csharp
// Obtain an instance of BrushLayerState from the subsystem API first
BrushLayerState brushLayerState = ...;
brushLayerState.FillFrom(styleLayer);
```

### LerpFrom
`public void LerpFrom(BrushLayerState start, IBrushLayerData end, float ratio)`

**Purpose:** **Purpose:** Executes the LerpFrom logic.

```csharp
// Obtain an instance of BrushLayerState from the subsystem API first
BrushLayerState brushLayerState = ...;
brushLayerState.LerpFrom(start, end, 0);
```

### SetValueAsFloat
`public void SetValueAsFloat(BrushAnimationProperty.BrushAnimationPropertyType propertyType, float value)`

**Purpose:** **Purpose:** Assigns a new value to value as float and updates the object's internal state.

```csharp
// Obtain an instance of BrushLayerState from the subsystem API first
BrushLayerState brushLayerState = ...;
brushLayerState.SetValueAsFloat(propertyType, 0);
```

### SetValueAsColor
`public void SetValueAsColor(BrushAnimationProperty.BrushAnimationPropertyType propertyType, in Color value)`

**Purpose:** **Purpose:** Assigns a new value to value as color and updates the object's internal state.

```csharp
// Obtain an instance of BrushLayerState from the subsystem API first
BrushLayerState brushLayerState = ...;
brushLayerState.SetValueAsColor(propertyType, value);
```

### SetValueAsSprite
`public void SetValueAsSprite(BrushAnimationProperty.BrushAnimationPropertyType propertyType, Sprite value)`

**Purpose:** **Purpose:** Assigns a new value to value as sprite and updates the object's internal state.

```csharp
// Obtain an instance of BrushLayerState from the subsystem API first
BrushLayerState brushLayerState = ...;
brushLayerState.SetValueAsSprite(propertyType, value);
```

### GetValueAsFloat
`public float GetValueAsFloat(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**Purpose:** **Purpose:** Reads and returns the value as float value held by the this instance.

```csharp
// Obtain an instance of BrushLayerState from the subsystem API first
BrushLayerState brushLayerState = ...;
var result = brushLayerState.GetValueAsFloat(propertyType);
```

### GetValueAsColor
`public Color GetValueAsColor(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**Purpose:** **Purpose:** Reads and returns the value as color value held by the this instance.

```csharp
// Obtain an instance of BrushLayerState from the subsystem API first
BrushLayerState brushLayerState = ...;
var result = brushLayerState.GetValueAsColor(propertyType);
```

### GetValueAsSprite
`public Sprite GetValueAsSprite(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**Purpose:** **Purpose:** Reads and returns the value as sprite value held by the this instance.

```csharp
// Obtain an instance of BrushLayerState from the subsystem API first
BrushLayerState brushLayerState = ...;
var result = brushLayerState.GetValueAsSprite(propertyType);
```

### SetValueAsLerpOfValues
`public static void SetValueAsLerpOfValues(ref BrushLayerState currentState, in BrushAnimationKeyFrame startValue, in BrushAnimationKeyFrame endValue, BrushAnimationProperty.BrushAnimationPropertyType propertyType, float ratio)`

**Purpose:** **Purpose:** Assigns a new value to value as lerp of values and updates the object's internal state.

```csharp
// Static call; no instance required
BrushLayerState.SetValueAsLerpOfValues(currentState, startValue, endValue, propertyType, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BrushLayerState brushLayerState = ...;
brushLayerState.FillFrom(styleLayer);
```

## See Also

- [Area Index](../)