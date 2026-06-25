---
title: "CanvasImage"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CanvasImage`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Loads `from` data.

## Usage Example

```csharp
var value = new CanvasImage();
value.LoadFrom(canvasImageNode);
```

## See Also

- [Complete Class Catalog](../catalog)