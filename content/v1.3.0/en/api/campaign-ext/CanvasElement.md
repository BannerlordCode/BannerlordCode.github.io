---
title: "CanvasElement"
description: "Auto-generated class reference for CanvasElement."
---
# CanvasElement

**Namespace:** TaleWorlds.GauntletUI.Canvas
**Module:** TaleWorlds.GauntletUI
**Type:** `public abstract class CanvasElement : CanvasObject`
**Base:** `CanvasObject`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Canvas/CanvasElement.cs`

## Overview

`CanvasElement` lives in `TaleWorlds.GauntletUI.Canvas` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.Canvas` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `PositionX` | `public float PositionX { get; set; }` |
| `PositionY` | `public float PositionY { get; set; }` |
| `RelativePositionX` | `public float RelativePositionX { get; set; }` |
| `RelativePositionY` | `public float RelativePositionY { get; set; }` |
| `PivotX` | `public float PivotX { get; set; }` |
| `PivotY` | `public float PivotY { get; set; }` |

## Key Methods

### LoadFrom
`public virtual void LoadFrom(XmlNode canvasImageNode)`

**Purpose:** Reads from from persistent storage or a stream.

```csharp
// Obtain an instance of CanvasElement from the subsystem API first
CanvasElement canvasElement = ...;
canvasElement.LoadFrom(canvasImageNode);
```

### GetMarginSize
`public override Vector2 GetMarginSize()`

**Purpose:** Reads and returns the margin size value held by the this instance.

```csharp
// Obtain an instance of CanvasElement from the subsystem API first
CanvasElement canvasElement = ...;
var result = canvasElement.GetMarginSize();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
CanvasElement instance = ...;
```

## See Also

- [Area Index](../)