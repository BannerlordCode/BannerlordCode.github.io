---
title: "AnimatedBasicAreaIndicator"
description: "Auto-generated class reference for AnimatedBasicAreaIndicator."
---
# AnimatedBasicAreaIndicator

**Namespace:** SandBox.Objects.AreaMarkers
**Module:** SandBox.Objects
**Type:** `public class AnimatedBasicAreaIndicator : AreaMarker`
**Base:** `AreaMarker`
**File:** `SandBox/Objects/AreaMarkers/AnimatedBasicAreaIndicator.cs`

## Overview

`AnimatedBasicAreaIndicator` lives in `SandBox.Objects.AreaMarkers` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.Objects.AreaMarkers` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; }` |

## Key Methods

### SetIsActive
`public void SetIsActive(bool isActive)`

**Purpose:** Assigns a new value to `is active` and updates the object's internal state.

```csharp
// Obtain an instance of AnimatedBasicAreaIndicator from the subsystem API first
AnimatedBasicAreaIndicator animatedBasicAreaIndicator = ...;
animatedBasicAreaIndicator.SetIsActive(false);
```

### SetOverriddenName
`public void SetOverriddenName(TextObject name)`

**Purpose:** Assigns a new value to `overridden name` and updates the object's internal state.

```csharp
// Obtain an instance of AnimatedBasicAreaIndicator from the subsystem API first
AnimatedBasicAreaIndicator animatedBasicAreaIndicator = ...;
animatedBasicAreaIndicator.SetOverriddenName(name);
```

### GetName
`public override TextObject GetName()`

**Purpose:** Reads and returns the `name` value held by the current object.

```csharp
// Obtain an instance of AnimatedBasicAreaIndicator from the subsystem API first
AnimatedBasicAreaIndicator animatedBasicAreaIndicator = ...;
var result = animatedBasicAreaIndicator.GetName();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
AnimatedBasicAreaIndicator animatedBasicAreaIndicator = ...;
animatedBasicAreaIndicator.SetIsActive(false);
```

## See Also

- [Area Index](../)