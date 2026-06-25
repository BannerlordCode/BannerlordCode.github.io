---
title: "AnimationInterpolation"
description: "Auto-generated class reference for AnimationInterpolation."
---
# AnimationInterpolation

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public static class AnimationInterpolation`
**Base:** none
**File:** `bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/AnimationInterpolation.cs`

## Overview

`AnimationInterpolation` lives in `TaleWorlds.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Ease
`public float Ease(Function function, float t)`

**Purpose:** Executes the Ease logic.

```csharp
// Obtain an instance of AnimationInterpolation from the subsystem API first
AnimationInterpolation animationInterpolation = ...;
var result = animationInterpolation.Ease(function, 0);
```

### Ease
`public float Ease(Function function, float t)`

**Purpose:** Executes the Ease logic.

```csharp
// Obtain an instance of AnimationInterpolation from the subsystem API first
AnimationInterpolation animationInterpolation = ...;
var result = animationInterpolation.Ease(function, 0);
```

### Ease
`public float Ease(Function function, float t)`

**Purpose:** Executes the Ease logic.

```csharp
// Obtain an instance of AnimationInterpolation from the subsystem API first
AnimationInterpolation animationInterpolation = ...;
var result = animationInterpolation.Ease(function, 0);
```

### Ease
`public static float Ease(Type type, Function function, float ratio)`

**Purpose:** Executes the Ease logic.

```csharp
// Static call; no instance required
AnimationInterpolation.Ease(type, function, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
AnimationInterpolation animationInterpolation = ...;
animationInterpolation.Ease(function, 0);
```

## See Also

- [Area Index](../)