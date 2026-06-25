---
title: "TwoDimensionDrawContext"
description: "Auto-generated class reference for TwoDimensionDrawContext."
---
# TwoDimensionDrawContext

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class TwoDimensionDrawContext`
**Base:** none
**File:** `bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/TwoDimensionDrawContext.cs`

## Overview

`TwoDimensionDrawContext` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Reset
`public void Reset()`

**Purpose:** **Purpose:** Returns the this instance to its default or initial condition.

```csharp
// Obtain an instance of TwoDimensionDrawContext from the subsystem API first
TwoDimensionDrawContext twoDimensionDrawContext = ...;
twoDimensionDrawContext.Reset();
```

### CreateSimpleMaterial
`public SimpleMaterial CreateSimpleMaterial()`

**Purpose:** **Purpose:** Constructs a new simple material entity and returns it to the caller.

```csharp
// Obtain an instance of TwoDimensionDrawContext from the subsystem API first
TwoDimensionDrawContext twoDimensionDrawContext = ...;
var result = twoDimensionDrawContext.CreateSimpleMaterial();
```

### CreateTextMaterial
`public TextMaterial CreateTextMaterial()`

**Purpose:** **Purpose:** Constructs a new text material entity and returns it to the caller.

```csharp
// Obtain an instance of TwoDimensionDrawContext from the subsystem API first
TwoDimensionDrawContext twoDimensionDrawContext = ...;
var result = twoDimensionDrawContext.CreateTextMaterial();
```

### PushScissor
`public void PushScissor(in Rectangle2D newScissorRectangle)`

**Purpose:** **Purpose:** Executes the PushScissor logic.

```csharp
// Obtain an instance of TwoDimensionDrawContext from the subsystem API first
TwoDimensionDrawContext twoDimensionDrawContext = ...;
twoDimensionDrawContext.PushScissor(newScissorRectangle);
```

### PopScissor
`public void PopScissor()`

**Purpose:** **Purpose:** Executes the PopScissor logic.

```csharp
// Obtain an instance of TwoDimensionDrawContext from the subsystem API first
TwoDimensionDrawContext twoDimensionDrawContext = ...;
twoDimensionDrawContext.PopScissor();
```

### IsDiscardedByAnyScissor
`public bool IsDiscardedByAnyScissor(in Rectangle2D rect)`

**Purpose:** **Purpose:** Determines whether the this instance is in the discarded by any scissor state or condition.

```csharp
// Obtain an instance of TwoDimensionDrawContext from the subsystem API first
TwoDimensionDrawContext twoDimensionDrawContext = ...;
var result = twoDimensionDrawContext.IsDiscardedByAnyScissor(rect);
```

### SetCircualMask
`public void SetCircualMask(Vector2 position, float radius, float smoothingRadius)`

**Purpose:** **Purpose:** Assigns a new value to circual mask and updates the object's internal state.

```csharp
// Obtain an instance of TwoDimensionDrawContext from the subsystem API first
TwoDimensionDrawContext twoDimensionDrawContext = ...;
twoDimensionDrawContext.SetCircualMask(position, 0, 0);
```

### ClearCircualMask
`public void ClearCircualMask()`

**Purpose:** **Purpose:** Removes all circual mask from the this instance.

```csharp
// Obtain an instance of TwoDimensionDrawContext from the subsystem API first
TwoDimensionDrawContext twoDimensionDrawContext = ...;
twoDimensionDrawContext.ClearCircualMask();
```

### DrawTo
`public void DrawTo(TwoDimensionContext twoDimensionContext)`

**Purpose:** **Purpose:** Executes the DrawTo logic.

```csharp
// Obtain an instance of TwoDimensionDrawContext from the subsystem API first
TwoDimensionDrawContext twoDimensionDrawContext = ...;
twoDimensionDrawContext.DrawTo(twoDimensionContext);
```

### DrawSprite
`public void DrawSprite(Sprite sprite, SimpleMaterial material, in Rectangle2D rectangle, float scale)`

**Purpose:** **Purpose:** Executes the DrawSprite logic.

```csharp
// Obtain an instance of TwoDimensionDrawContext from the subsystem API first
TwoDimensionDrawContext twoDimensionDrawContext = ...;
twoDimensionDrawContext.DrawSprite(sprite, material, rectangle, 0);
```

### Draw
`public void Draw(SimpleMaterial material, in ImageDrawObject drawObject)`

**Purpose:** **Purpose:** Executes the Draw logic.

```csharp
// Obtain an instance of TwoDimensionDrawContext from the subsystem API first
TwoDimensionDrawContext twoDimensionDrawContext = ...;
twoDimensionDrawContext.Draw(material, drawObject);
```

### Draw
`public void Draw(TextMaterial material, in TextDrawObject drawObject)`

**Purpose:** **Purpose:** Executes the Draw logic.

```csharp
// Obtain an instance of TwoDimensionDrawContext from the subsystem API first
TwoDimensionDrawContext twoDimensionDrawContext = ...;
twoDimensionDrawContext.Draw(material, drawObject);
```

### Draw
`public void Draw(Text text, TextMaterial materialOriginal, in Rectangle2D parentRectangle, in Rectangle2D rectangle)`

**Purpose:** **Purpose:** Executes the Draw logic.

```csharp
// Obtain an instance of TwoDimensionDrawContext from the subsystem API first
TwoDimensionDrawContext twoDimensionDrawContext = ...;
twoDimensionDrawContext.Draw(text, materialOriginal, parentRectangle, rectangle);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
TwoDimensionDrawContext twoDimensionDrawContext = ...;
twoDimensionDrawContext.Reset();
```

## See Also

- [Area Index](../)