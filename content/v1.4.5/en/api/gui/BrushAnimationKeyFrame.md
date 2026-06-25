---
title: "BrushAnimationKeyFrame"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BrushAnimationKeyFrame`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BrushAnimationKeyFrame

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class BrushAnimationKeyFrame`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI/TaleWorlds.GauntletUI/BrushAnimationKeyFrame.cs`

## Overview

`BrushAnimationKeyFrame` lives in `TaleWorlds.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Time` | `public float Time { get; }` |
| `Index` | `public int Index { get; }` |

## Key Methods

### InitializeAsFloat
`public void InitializeAsFloat(float time, float value)`

**Purpose:** Initializes the state, resources, or bindings for `as float`.

### InitializeAsColor
`public void InitializeAsColor(float time, Color value)`

**Purpose:** Initializes the state, resources, or bindings for `as color`.

### InitializeAsSprite
`public void InitializeAsSprite(float time, Sprite value)`

**Purpose:** Initializes the state, resources, or bindings for `as sprite`.

### InitializeIndex
`public void InitializeIndex(int index)`

**Purpose:** Initializes the state, resources, or bindings for `index`.

### GetValueAsFloat
`public float GetValueAsFloat()`

**Purpose:** Gets the current value of `value as float`.

### GetValueAsColor
`public Color GetValueAsColor()`

**Purpose:** Gets the current value of `value as color`.

### GetValueAsSprite
`public Sprite GetValueAsSprite()`

**Purpose:** Gets the current value of `value as sprite`.

### GetValueAsObject
`public object GetValueAsObject()`

**Purpose:** Gets the current value of `value as object`.

### Clone
`public BrushAnimationKeyFrame Clone()`

**Purpose:** Handles logic related to `clone`.

## Usage Example

```csharp
var value = new BrushAnimationKeyFrame();
value.InitializeAsFloat(0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)