---
title: "CanvasObject"
description: "Auto-generated class reference for CanvasObject."
---
# CanvasObject

**Namespace:** TaleWorlds.GauntletUI.Canvas
**Module:** TaleWorlds.GauntletUI
**Type:** `public class CanvasObject`
**Base:** none
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Canvas/CanvasObject.cs`

## Overview

`CanvasObject` lives in `TaleWorlds.GauntletUI.Canvas` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.Canvas` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Parent` | `public CanvasObject Parent { get; }` |
| `Children` | `public List<CanvasObject> Children { get; }` |
| `Scale` | `public float Scale { get; }` |
| `LocalPosition` | `public Vector2 LocalPosition { get; }` |
| `Width` | `public float Width { get; }` |
| `Height` | `public float Height { get; }` |
| `FontFactory` | `public FontFactory FontFactory { get; }` |
| `SpriteData` | `public SpriteData SpriteData { get; }` |

## Key Methods

### Update
`public virtual void Update(float scale)`

**Purpose:** Recalculates and stores the latest representation of the this instance.

```csharp
// Obtain an instance of CanvasObject from the subsystem API first
CanvasObject canvasObject = ...;
canvasObject.Update(0);
```

### BeginMeasure
`public void BeginMeasure(bool fixedWidth, bool fixedHeight, float width, float height)`

**Purpose:** Executes the BeginMeasure logic.

```csharp
// Obtain an instance of CanvasObject from the subsystem API first
CanvasObject canvasObject = ...;
canvasObject.BeginMeasure(false, false, 0, 0);
```

### DoMeasure
`public void DoMeasure()`

**Purpose:** Executes the DoMeasure logic.

```csharp
// Obtain an instance of CanvasObject from the subsystem API first
CanvasObject canvasObject = ...;
canvasObject.DoMeasure();
```

### DoLayout
`public void DoLayout()`

**Purpose:** Executes the DoLayout logic.

```csharp
// Obtain an instance of CanvasObject from the subsystem API first
CanvasObject canvasObject = ...;
canvasObject.DoLayout();
```

### GetMarginSize
`public virtual Vector2 GetMarginSize()`

**Purpose:** Reads and returns the margin size value held by the this instance.

```csharp
// Obtain an instance of CanvasObject from the subsystem API first
CanvasObject canvasObject = ...;
var result = canvasObject.GetMarginSize();
```

### DoRender
`public void DoRender(Vector2 globalPosition, TwoDimensionDrawContext drawContext)`

**Purpose:** Executes the DoRender logic.

```csharp
// Obtain an instance of CanvasObject from the subsystem API first
CanvasObject canvasObject = ...;
canvasObject.DoRender(globalPosition, drawContext);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CanvasObject canvasObject = ...;
canvasObject.Update(0);
```

## See Also

- [Area Index](../)