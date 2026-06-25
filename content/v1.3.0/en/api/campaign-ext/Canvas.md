---
title: "Canvas"
description: "Auto-generated class reference for Canvas."
---
# Canvas

**Namespace:** TaleWorlds.GauntletUI.Canvas
**Module:** TaleWorlds.GauntletUI
**Type:** `public class Canvas`
**Base:** none
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Canvas/Canvas.cs`

## Overview

`Canvas` lives in `TaleWorlds.GauntletUI.Canvas` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.Canvas` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Root` | `public CanvasObject Root { get; }` |

## Key Methods

### LoadFrom
`public void LoadFrom(XmlNode canvasNode)`

**Purpose:** Reads `from` from persistent storage or a stream.

```csharp
// Obtain an instance of Canvas from the subsystem API first
Canvas canvas = ...;
canvas.LoadFrom(canvasNode);
```

### Update
`public void Update(float scale)`

**Purpose:** Recalculates and stores the latest representation of the current object.

```csharp
// Obtain an instance of Canvas from the subsystem API first
Canvas canvas = ...;
canvas.Update(0);
```

### DoMeasure
`public void DoMeasure(bool fixedWidth, bool fixedHeight, float width, float height)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Canvas from the subsystem API first
Canvas canvas = ...;
canvas.DoMeasure(false, false, 0, 0);
```

### DoLayout
`public void DoLayout()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Canvas from the subsystem API first
Canvas canvas = ...;
canvas.DoLayout();
```

### DoRender
`public void DoRender(Vector2 globalPosition, TwoDimensionDrawContext drawContext)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Canvas from the subsystem API first
Canvas canvas = ...;
canvas.DoRender(globalPosition, drawContext);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Canvas canvas = ...;
canvas.LoadFrom(canvasNode);
```

## See Also

- [Area Index](../)