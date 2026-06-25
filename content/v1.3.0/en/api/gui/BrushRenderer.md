---
title: "BrushRenderer"
description: "Auto-generated class reference for BrushRenderer."
---
# BrushRenderer

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class BrushRenderer`
**Base:** none
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushRenderer.cs`

## Overview

`BrushRenderer` lives in `TaleWorlds.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `LastUpdatedFrameNumber` | `public ulong LastUpdatedFrameNumber { get; }` |
| `ForcePixelPerfectPlacement` | `public bool ForcePixelPerfectPlacement { get; set; }` |
| `CurrentStyle` | `public Style CurrentStyle { get; set; }` |
| `Brush` | `public Brush Brush { get; set; }` |
| `CurrentState` | `public string CurrentState { get; set; }` |

## Key Methods

### Update
`public void Update(ulong frameNumber, float globalAnimTime, float dt)`

**Purpose:** Recalculates and stores the latest representation of the this instance.

```csharp
// Obtain an instance of BrushRenderer from the subsystem API first
BrushRenderer brushRenderer = ...;
brushRenderer.Update(0, 0, 0);
```

### IsUpdateNeeded
`public bool IsUpdateNeeded()`

**Purpose:** Determines whether the this instance is in the update needed state or condition.

```csharp
// Obtain an instance of BrushRenderer from the subsystem API first
BrushRenderer brushRenderer = ...;
var result = brushRenderer.IsUpdateNeeded();
```

### Render
`public void Render(TwoDimensionDrawContext drawContext, in Rectangle2D rect, float scale, float contextAlpha, Vector2 overlayOffset = default(Vector2))`

**Purpose:** Executes the Render logic.

```csharp
// Obtain an instance of BrushRenderer from the subsystem API first
BrushRenderer brushRenderer = ...;
brushRenderer.Render(drawContext, rect, 0, 0, default(Vector2));
```

### CreateTextMaterial
`public TextMaterial CreateTextMaterial(TwoDimensionDrawContext drawContext)`

**Purpose:** Constructs a new text material entity and returns it to the caller.

```csharp
// Obtain an instance of BrushRenderer from the subsystem API first
BrushRenderer brushRenderer = ...;
var result = brushRenderer.CreateTextMaterial(drawContext);
```

### RestartAnimation
`public void RestartAnimation()`

**Purpose:** Executes the RestartAnimation logic.

```csharp
// Obtain an instance of BrushRenderer from the subsystem API first
BrushRenderer brushRenderer = ...;
brushRenderer.RestartAnimation();
```

### SetSeed
`public void SetSeed(int seed)`

**Purpose:** Assigns a new value to seed and updates the object's internal state.

```csharp
// Obtain an instance of BrushRenderer from the subsystem API first
BrushRenderer brushRenderer = ...;
brushRenderer.SetSeed(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BrushRenderer brushRenderer = ...;
brushRenderer.Update(0, 0, 0);
```

## See Also

- [Area Index](../)