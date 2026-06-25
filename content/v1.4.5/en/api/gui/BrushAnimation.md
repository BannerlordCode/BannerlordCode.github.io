---
title: "BrushAnimation"
description: "Auto-generated class reference for BrushAnimation."
---
# BrushAnimation

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class BrushAnimation`
**Base:** none
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/BrushAnimation.cs`

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

**Purpose:** Adds animation property to the current collection or state.

```csharp
// Obtain an instance of BrushAnimation from the subsystem API first
BrushAnimation brushAnimation = ...;
brushAnimation.AddAnimationProperty(property);
```

### RemoveAnimationProperty
`public void RemoveAnimationProperty(BrushAnimationProperty property)`

**Purpose:** Removes animation property from the current collection or state.

```csharp
// Obtain an instance of BrushAnimation from the subsystem API first
BrushAnimation brushAnimation = ...;
brushAnimation.RemoveAnimationProperty(property);
```

### FillFrom
`public void FillFrom(BrushAnimation animation)`

**Purpose:** Executes the FillFrom logic.

```csharp
// Obtain an instance of BrushAnimation from the subsystem API first
BrushAnimation brushAnimation = ...;
brushAnimation.FillFrom(animation);
```

### GetLayerAnimation
`public BrushLayerAnimation GetLayerAnimation(string name)`

**Purpose:** Reads and returns the layer animation value held by the this instance.

```csharp
// Obtain an instance of BrushAnimation from the subsystem API first
BrushAnimation brushAnimation = ...;
var result = brushAnimation.GetLayerAnimation("example");
```

### GetLayerAnimations
`public IEnumerable<BrushLayerAnimation> GetLayerAnimations()`

**Purpose:** Reads and returns the layer animations value held by the this instance.

```csharp
// Obtain an instance of BrushAnimation from the subsystem API first
BrushAnimation brushAnimation = ...;
var result = brushAnimation.GetLayerAnimations();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BrushAnimation brushAnimation = ...;
brushAnimation.AddAnimationProperty(property);
```

## See Also

- [Area Index](../)