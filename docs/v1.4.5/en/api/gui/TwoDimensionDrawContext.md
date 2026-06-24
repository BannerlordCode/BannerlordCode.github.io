<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TwoDimensionDrawContext`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TwoDimensionDrawContext

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class TwoDimensionDrawContext`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.TwoDimension/TaleWorlds.TwoDimension/TwoDimensionDrawContext.cs`

## Overview

`TwoDimensionDrawContext` lives in `TaleWorlds.TwoDimension` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Reset
`public void Reset()`

**Purpose:** Resets `reset` to its initial state.

### CreateSimpleMaterial
`public SimpleMaterial CreateSimpleMaterial()`

**Purpose:** Creates a new `simple material` instance or object.

### CreateTextMaterial
`public TextMaterial CreateTextMaterial()`

**Purpose:** Creates a new `text material` instance or object.

### PushScissor
`public void PushScissor(in Rectangle2D newScissorRectangle)`

**Purpose:** Handles logic related to `push scissor`.

### PopScissor
`public void PopScissor()`

**Purpose:** Handles logic related to `pop scissor`.

### IsDiscardedByAnyScissor
`public bool IsDiscardedByAnyScissor(in Rectangle2D rect)`

**Purpose:** Handles logic related to `is discarded by any scissor`.

### SetCircualMask
`public void SetCircualMask(Vector2 position, float radius, float smoothingRadius)`

**Purpose:** Sets the value or state of `circual mask`.

### ClearCircualMask
`public void ClearCircualMask()`

**Purpose:** Handles logic related to `clear circual mask`.

### DrawTo
`public void DrawTo(TwoDimensionContext twoDimensionContext)`

**Purpose:** Handles logic related to `draw to`.

### DrawSprite
`public void DrawSprite(Sprite sprite, SimpleMaterial material, in Rectangle2D rectangle, float scale)`

**Purpose:** Handles logic related to `draw sprite`.

### Draw
`public void Draw(SimpleMaterial material, in ImageDrawObject drawObject)`

**Purpose:** Handles logic related to `draw`.

### Draw
`public void Draw(TextMaterial material, in TextDrawObject drawObject)`

**Purpose:** Handles logic related to `draw`.

### Draw
`public void Draw(Text text, TextMaterial materialOriginal, in Rectangle2D parentRectangle, in Rectangle2D rectangle)`

**Purpose:** Handles logic related to `draw`.

## Usage Example

```csharp
var value = new TwoDimensionDrawContext();
value.Reset();
```

## See Also

- [Complete Class Catalog](../catalog)