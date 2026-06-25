---
title: "BrushAnimationKeyFrame"
description: "Auto-generated class reference for BrushAnimationKeyFrame."
---
# BrushAnimationKeyFrame

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class BrushAnimationKeyFrame`
**Base:** none
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushAnimationKeyFrame.cs`

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

**Purpose:** Prepares the resources, state, or bindings required by as float.

```csharp
// Obtain an instance of BrushAnimationKeyFrame from the subsystem API first
BrushAnimationKeyFrame brushAnimationKeyFrame = ...;
brushAnimationKeyFrame.InitializeAsFloat(0, 0);
```

### InitializeAsColor
`public void InitializeAsColor(float time, Color value)`

**Purpose:** Prepares the resources, state, or bindings required by as color.

```csharp
// Obtain an instance of BrushAnimationKeyFrame from the subsystem API first
BrushAnimationKeyFrame brushAnimationKeyFrame = ...;
brushAnimationKeyFrame.InitializeAsColor(0, value);
```

### InitializeAsSprite
`public void InitializeAsSprite(float time, Sprite value)`

**Purpose:** Prepares the resources, state, or bindings required by as sprite.

```csharp
// Obtain an instance of BrushAnimationKeyFrame from the subsystem API first
BrushAnimationKeyFrame brushAnimationKeyFrame = ...;
brushAnimationKeyFrame.InitializeAsSprite(0, value);
```

### InitializeIndex
`public void InitializeIndex(int index)`

**Purpose:** Prepares the resources, state, or bindings required by index.

```csharp
// Obtain an instance of BrushAnimationKeyFrame from the subsystem API first
BrushAnimationKeyFrame brushAnimationKeyFrame = ...;
brushAnimationKeyFrame.InitializeIndex(0);
```

### GetValueAsFloat
`public float GetValueAsFloat()`

**Purpose:** Reads and returns the value as float value held by the this instance.

```csharp
// Obtain an instance of BrushAnimationKeyFrame from the subsystem API first
BrushAnimationKeyFrame brushAnimationKeyFrame = ...;
var result = brushAnimationKeyFrame.GetValueAsFloat();
```

### GetValueAsColor
`public Color GetValueAsColor()`

**Purpose:** Reads and returns the value as color value held by the this instance.

```csharp
// Obtain an instance of BrushAnimationKeyFrame from the subsystem API first
BrushAnimationKeyFrame brushAnimationKeyFrame = ...;
var result = brushAnimationKeyFrame.GetValueAsColor();
```

### GetValueAsSprite
`public Sprite GetValueAsSprite()`

**Purpose:** Reads and returns the value as sprite value held by the this instance.

```csharp
// Obtain an instance of BrushAnimationKeyFrame from the subsystem API first
BrushAnimationKeyFrame brushAnimationKeyFrame = ...;
var result = brushAnimationKeyFrame.GetValueAsSprite();
```

### GetValueAsObject
`public object GetValueAsObject()`

**Purpose:** Reads and returns the value as object value held by the this instance.

```csharp
// Obtain an instance of BrushAnimationKeyFrame from the subsystem API first
BrushAnimationKeyFrame brushAnimationKeyFrame = ...;
var result = brushAnimationKeyFrame.GetValueAsObject();
```

### Clone
`public BrushAnimationKeyFrame Clone()`

**Purpose:** Duplicates the this instance's state and returns a new instance.

```csharp
// Obtain an instance of BrushAnimationKeyFrame from the subsystem API first
BrushAnimationKeyFrame brushAnimationKeyFrame = ...;
var result = brushAnimationKeyFrame.Clone();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BrushAnimationKeyFrame brushAnimationKeyFrame = ...;
brushAnimationKeyFrame.InitializeAsFloat(0, 0);
```

## See Also

- [Area Index](../)