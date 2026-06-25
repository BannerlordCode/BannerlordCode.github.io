---
title: "CanvasLine"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CanvasLine`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Loads `from` data.

### GetHorizontalPositionOf
`public float GetHorizontalPositionOf(int index)`

**Purpose:** Gets the current value of `horizontal position of`.

## Usage Example

```csharp
var value = new CanvasLine();
value.LoadFrom(lineNode);
```

## See Also

- [Complete Class Catalog](../catalog)