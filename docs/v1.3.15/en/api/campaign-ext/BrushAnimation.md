<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BrushAnimation`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BrushAnimation

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class BrushAnimation`
**Base:** none
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushAnimation.cs`

## Overview

`BrushAnimation` lives in `TaleWorlds.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `Duration` | `public float Duration { get; set; }` |
| `Loop` | `public bool Loop { get; set; }` |
| `InterpolationType` | `public AnimationInterpolation.Type InterpolationType { get; set; }` |
| `InterpolationFunction` | `public AnimationInterpolation.Function InterpolationFunction { get; set; }` |
| `StyleAnimation` | `public BrushLayerAnimation StyleAnimation { get; set; }` |

## Key Methods

### AddAnimationProperty
`public void AddAnimationProperty(BrushAnimationProperty property)`

**Purpose:** Adds `animation property` to the current collection or state.

### RemoveAnimationProperty
`public void RemoveAnimationProperty(BrushAnimationProperty property)`

**Purpose:** Removes `animation property` from the current collection or state.

### FillFrom
`public void FillFrom(BrushAnimation animation)`

**Purpose:** Handles logic related to `fill from`.

### GetLayerAnimation
`public BrushLayerAnimation GetLayerAnimation(string name)`

**Purpose:** Gets the current value of `layer animation`.

### GetLayerAnimations
`public IEnumerable<BrushLayerAnimation> GetLayerAnimations()`

**Purpose:** Gets the current value of `layer animations`.

## Usage Example

```csharp
var value = new BrushAnimation();
value.AddAnimationProperty(property);
```

## See Also

- [Complete Class Catalog](../catalog)