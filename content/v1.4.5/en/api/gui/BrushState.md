---
title: "BrushState"
description: "Auto-generated class reference for BrushState."
---
# BrushState

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public struct BrushState : IBrushAnimationState, IDataSource`
**Base:** `IBrushAnimationState`
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/BrushState.cs`

## Overview

`BrushState` lives in `TaleWorlds.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### FillFrom
`public void FillFrom(Style style)`

**Purpose:** **Purpose:** Executes the FillFrom logic.

```csharp
// Obtain an instance of BrushState from the subsystem API first
BrushState brushState = ...;
brushState.FillFrom(style);
```

### LerpFrom
`public void LerpFrom(BrushState start, Style end, float ratio)`

**Purpose:** **Purpose:** Executes the LerpFrom logic.

```csharp
// Obtain an instance of BrushState from the subsystem API first
BrushState brushState = ...;
brushState.LerpFrom(start, end, 0);
```

### GetValueAsFloat
`public float GetValueAsFloat(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**Purpose:** **Purpose:** Reads and returns the value as float value held by the this instance.

```csharp
// Obtain an instance of BrushState from the subsystem API first
BrushState brushState = ...;
var result = brushState.GetValueAsFloat(propertyType);
```

### GetValueAsColor
`public Color GetValueAsColor(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**Purpose:** **Purpose:** Reads and returns the value as color value held by the this instance.

```csharp
// Obtain an instance of BrushState from the subsystem API first
BrushState brushState = ...;
var result = brushState.GetValueAsColor(propertyType);
```

### GetValueAsSprite
`public Sprite GetValueAsSprite(BrushAnimationProperty.BrushAnimationPropertyType propertyType)`

**Purpose:** **Purpose:** Reads and returns the value as sprite value held by the this instance.

```csharp
// Obtain an instance of BrushState from the subsystem API first
BrushState brushState = ...;
var result = brushState.GetValueAsSprite(propertyType);
```

### SetValueAsFloat
`public void SetValueAsFloat(BrushAnimationProperty.BrushAnimationPropertyType propertyType, float value)`

**Purpose:** **Purpose:** Assigns a new value to value as float and updates the object's internal state.

```csharp
// Obtain an instance of BrushState from the subsystem API first
BrushState brushState = ...;
brushState.SetValueAsFloat(propertyType, 0);
```

### SetValueAsColor
`public void SetValueAsColor(BrushAnimationProperty.BrushAnimationPropertyType propertyType, in Color value)`

**Purpose:** **Purpose:** Assigns a new value to value as color and updates the object's internal state.

```csharp
// Obtain an instance of BrushState from the subsystem API first
BrushState brushState = ...;
brushState.SetValueAsColor(propertyType, value);
```

### SetValueAsSprite
`public void SetValueAsSprite(BrushAnimationProperty.BrushAnimationPropertyType propertyType, Sprite value)`

**Purpose:** **Purpose:** Assigns a new value to value as sprite and updates the object's internal state.

```csharp
// Obtain an instance of BrushState from the subsystem API first
BrushState brushState = ...;
brushState.SetValueAsSprite(propertyType, value);
```

### CreateTextMaterial
`public TextMaterial CreateTextMaterial(TwoDimensionDrawContext drawContext)`

**Purpose:** **Purpose:** Constructs a new text material entity and returns it to the caller.

```csharp
// Obtain an instance of BrushState from the subsystem API first
BrushState brushState = ...;
var result = brushState.CreateTextMaterial(drawContext);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BrushState brushState = ...;
brushState.FillFrom(style);
```

## See Also

- [Area Index](../)