---
title: "CanvasElement"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CanvasElement`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Loads `from` data.

### GetMarginSize
`public override Vector2 GetMarginSize()`

**Purpose:** Gets the current value of `margin size`.

## Usage Example

```csharp
var implementation = new CustomCanvasElement();
```

## See Also

- [Complete Class Catalog](../catalog)