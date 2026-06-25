---
title: "BrushAnimationProperty"
description: "Auto-generated class reference for BrushAnimationProperty."
---
# BrushAnimationProperty

**Namespace:** TaleWorlds.GauntletUI
**Module:** TaleWorlds.GauntletUI
**Type:** `public class BrushAnimationProperty`
**Base:** none
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BrushAnimationProperty.cs`

## Overview

`BrushAnimationProperty` lives in `TaleWorlds.GauntletUI` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `LayerName` | `public string LayerName { get; set; }` |
| `KeyFrames` | `public IEnumerable<BrushAnimationKeyFrame> KeyFrames { get; }` |
| `Count` | `public int Count { get; }` |

## Key Methods

### GetFrameAfter
`public BrushAnimationKeyFrame GetFrameAfter(float time)`

**Purpose:** Reads and returns the frame after value held by the this instance.

```csharp
// Obtain an instance of BrushAnimationProperty from the subsystem API first
BrushAnimationProperty brushAnimationProperty = ...;
var result = brushAnimationProperty.GetFrameAfter(0);
```

### GetFrameAt
`public BrushAnimationKeyFrame GetFrameAt(int i)`

**Purpose:** Reads and returns the frame at value held by the this instance.

```csharp
// Obtain an instance of BrushAnimationProperty from the subsystem API first
BrushAnimationProperty brushAnimationProperty = ...;
var result = brushAnimationProperty.GetFrameAt(0);
```

### Clone
`public BrushAnimationProperty Clone()`

**Purpose:** Duplicates the this instance's state and returns a new instance.

```csharp
// Obtain an instance of BrushAnimationProperty from the subsystem API first
BrushAnimationProperty brushAnimationProperty = ...;
var result = brushAnimationProperty.Clone();
```

### AddKeyFrame
`public void AddKeyFrame(BrushAnimationKeyFrame keyFrame)`

**Purpose:** Adds key frame to the current collection or state.

```csharp
// Obtain an instance of BrushAnimationProperty from the subsystem API first
BrushAnimationProperty brushAnimationProperty = ...;
brushAnimationProperty.AddKeyFrame(keyFrame);
```

### RemoveKeyFrame
`public void RemoveKeyFrame(BrushAnimationKeyFrame keyFrame)`

**Purpose:** Removes key frame from the current collection or state.

```csharp
// Obtain an instance of BrushAnimationProperty from the subsystem API first
BrushAnimationProperty brushAnimationProperty = ...;
brushAnimationProperty.RemoveKeyFrame(keyFrame);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BrushAnimationProperty brushAnimationProperty = ...;
brushAnimationProperty.GetFrameAfter(0);
```

## See Also

- [Area Index](../)