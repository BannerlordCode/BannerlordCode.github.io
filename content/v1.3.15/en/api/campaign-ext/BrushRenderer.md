---
title: "BrushRenderer"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BrushRenderer`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Updates the state or data of `update`.

### IsUpdateNeeded
`public bool IsUpdateNeeded()`

**Purpose:** Handles logic related to `is update needed`.

### Render
`public void Render(TwoDimensionDrawContext drawContext, in Rectangle2D rect, float scale, float contextAlpha, Vector2 overlayOffset = default(Vector2), Vector2 overlaySize = default(Vector2))`

**Purpose:** Handles logic related to `render`.

### CreateTextMaterial
`public TextMaterial CreateTextMaterial(TwoDimensionDrawContext drawContext)`

**Purpose:** Creates a new `text material` instance or object.

### RestartAnimation
`public void RestartAnimation()`

**Purpose:** Handles logic related to `restart animation`.

### SetSeed
`public void SetSeed(int seed)`

**Purpose:** Sets the value or state of `seed`.

## Usage Example

```csharp
var value = new BrushRenderer();
value.Update(0, 0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)