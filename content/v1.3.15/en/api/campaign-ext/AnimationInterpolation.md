---
title: "AnimationInterpolation"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AnimationInterpolation`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AnimationInterpolation

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public static class AnimationInterpolation`
**Area:** campaign-ext

## Overview

`AnimationInterpolation` lives in `TaleWorlds.GauntletUI`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

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
// Prepare the required context, then call the static entry point directly
AnimationInterpolation.Ease(type, function, 0);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
