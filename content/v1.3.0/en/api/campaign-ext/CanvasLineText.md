---
title: "CanvasLineText"
description: "Auto-generated class reference for CanvasLineText."
---
# CanvasLineText

**Namespace:** TaleWorlds.GauntletUI.Canvas
**Module:** TaleWorlds.GauntletUI
**Type:** `public class CanvasLineText : CanvasLineElement`
**Base:** `CanvasLineElement`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Canvas/CanvasLineText.cs`

## Overview

`CanvasLineText` lives in `TaleWorlds.GauntletUI.Canvas` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.Canvas` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Value` | `public string Value { get; set; }` |
| `FontSize` | `public float FontSize { get; set; }` |
| `FontColor` | `public Color FontColor { get; set; }` |

## Key Methods

### LoadFrom
`public void LoadFrom(XmlNode textNode)`

**Purpose:** Reads from from persistent storage or a stream.

```csharp
// Obtain an instance of CanvasLineText from the subsystem API first
CanvasLineText canvasLineText = ...;
canvasLineText.LoadFrom(textNode);
```

### Update
`public override void Update(float scale)`

**Purpose:** Recalculates and stores the latest representation of the this instance.

```csharp
// Obtain an instance of CanvasLineText from the subsystem API first
CanvasLineText canvasLineText = ...;
canvasLineText.Update(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CanvasLineText canvasLineText = ...;
canvasLineText.LoadFrom(textNode);
```

## See Also

- [Area Index](../)