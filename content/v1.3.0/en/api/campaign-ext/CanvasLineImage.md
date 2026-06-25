---
title: "CanvasLineImage"
description: "Auto-generated class reference for CanvasLineImage."
---
# CanvasLineImage

**Namespace:** TaleWorlds.GauntletUI.Canvas
**Module:** TaleWorlds.GauntletUI
**Type:** `public class CanvasLineImage : CanvasLineElement`
**Base:** `CanvasLineElement`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Canvas/CanvasLineImage.cs`

## Overview

`CanvasLineImage` lives in `TaleWorlds.GauntletUI.Canvas` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.Canvas` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Sprite` | `public Sprite Sprite { get; set; }` |

## Key Methods

### LoadFrom
`public void LoadFrom(XmlNode imageNode)`

**Purpose:** Reads `from` from persistent storage or a stream.

```csharp
// Obtain an instance of CanvasLineImage from the subsystem API first
CanvasLineImage canvasLineImage = ...;
canvasLineImage.LoadFrom(imageNode);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CanvasLineImage canvasLineImage = ...;
canvasLineImage.LoadFrom(imageNode);
```

## See Also

- [Area Index](../)