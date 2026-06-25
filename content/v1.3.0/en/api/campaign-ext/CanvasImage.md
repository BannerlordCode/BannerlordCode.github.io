---
title: "CanvasImage"
description: "Auto-generated class reference for CanvasImage."
---
# CanvasImage

**Namespace:** TaleWorlds.GauntletUI.Canvas
**Module:** TaleWorlds.GauntletUI
**Type:** `public class CanvasImage : CanvasElement`
**Base:** `CanvasElement`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Canvas/CanvasImage.cs`

## Overview

`CanvasImage` lives in `TaleWorlds.GauntletUI.Canvas` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.Canvas` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Sprite` | `public Sprite Sprite { get; set; }` |

## Key Methods

### LoadFrom
`public override void LoadFrom(XmlNode canvasImageNode)`

**Purpose:** Reads from from persistent storage or a stream.

```csharp
// Obtain an instance of CanvasImage from the subsystem API first
CanvasImage canvasImage = ...;
canvasImage.LoadFrom(canvasImageNode);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CanvasImage canvasImage = ...;
canvasImage.LoadFrom(canvasImageNode);
```

## See Also

- [Area Index](../)