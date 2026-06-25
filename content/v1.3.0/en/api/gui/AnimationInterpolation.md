---
title: "AnimationInterpolation"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AnimationInterpolation`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AnimationInterpolation

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public static class AnimationInterpolation`
**Base:** none
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/AnimationInterpolation.cs`

## Overview

`AnimationInterpolation` lives in `TaleWorlds.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Ease
`public static float Ease(AnimationInterpolation.Type type, AnimationInterpolation.Function function, float ratio)`

**Purpose:** Handles logic related to `ease`.

### Ease
`public float Ease(AnimationInterpolation.Function function, float t)`

**Purpose:** Handles logic related to `ease`.

### Ease
`public float Ease(AnimationInterpolation.Function function, float t)`

**Purpose:** Handles logic related to `ease`.

### Ease
`public float Ease(AnimationInterpolation.Function function, float t)`

**Purpose:** Handles logic related to `ease`.

## Usage Example

```csharp
AnimationInterpolation.Ease(type, function, 0);
```

## See Also

- [Complete Class Catalog](../catalog)