---
title: "CanvasLine"
description: "Auto-generated class reference for CanvasLine."
---
# CanvasLine

**Namespace:** TaleWorlds.GauntletUI.Canvas
**Module:** TaleWorlds.GauntletUI
**Type:** `public class CanvasLine : CanvasObject`
**Base:** `CanvasObject`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Canvas/CanvasLine.cs`

## Overview

`CanvasLine` lives in `TaleWorlds.GauntletUI.Canvas` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.Canvas` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Alignment` | `public CanvasLineAlignment Alignment { get; set; }` |

## Key Methods

### LoadFrom
`public void LoadFrom(XmlNode lineNode)`

**Purpose:** Reads `from` from persistent storage or a stream.

```csharp
// Obtain an instance of CanvasLine from the subsystem API first
CanvasLine canvasLine = ...;
canvasLine.LoadFrom(lineNode);
```

### GetHorizontalPositionOf
`public float GetHorizontalPositionOf(int index)`

**Purpose:** Reads and returns the `horizontal position of` value held by the current object.

```csharp
// Obtain an instance of CanvasLine from the subsystem API first
CanvasLine canvasLine = ...;
var result = canvasLine.GetHorizontalPositionOf(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CanvasLine canvasLine = ...;
canvasLine.LoadFrom(lineNode);
```

## See Also

- [Area Index](../)