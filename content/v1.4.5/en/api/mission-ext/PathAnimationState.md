---
title: "PathAnimationState"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PathAnimationState`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PathAnimationState

**Namespace:** TaleWorlds.MountAndBlade.View.Scripts
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct PathAnimationState`
**Area:** mission-ext

## Overview

`PathAnimationState` lives in `TaleWorlds.MountAndBlade.View.Scripts`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Scripts` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### SetInitialState
`public void SetInitialState()`

**Purpose:** Sets the value or state of `initial state`.

### SetPositiveState
`public void SetPositiveState()`

**Purpose:** Sets the value or state of `positive state`.

### SetNegativeState
`public void SetNegativeState()`

**Purpose:** Sets the value or state of `negative state`.

### SetIsReady
`public void SetIsReady(bool isReady)`

**Purpose:** Sets the value or state of `is ready`.

### GetCameraFade
`public float GetCameraFade()`

**Purpose:** Gets the current value of `camera fade`.

### Destroy
`public void Destroy()`

**Purpose:** Handles logic related to `destroy`.

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**Purpose:** Gets the current value of `tick requirement`.

## Usage Example

```csharp
// First obtain a PathAnimationState instance from game state, then call one of its public methods
var value = new PathAnimationState();
value.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
