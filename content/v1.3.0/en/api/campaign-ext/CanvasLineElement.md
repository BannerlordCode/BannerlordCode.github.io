---
title: "CanvasLineElement"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CanvasLineElement`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CanvasLineElement

**Namespace:** TaleWorlds.GauntletUI.Canvas
**Module:** TaleWorlds.GauntletUI
**Type:** `public abstract class CanvasLineElement : CanvasObject`
**Base:** `CanvasObject`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Canvas/CanvasLineElement.cs`

## Overview

`CanvasLineElement` lives in `TaleWorlds.GauntletUI.Canvas` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.GauntletUI.Canvas` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Line` | `public CanvasLine Line { get; set; }` |
| `SegmentIndex` | `public int SegmentIndex { get; set; }` |

## Usage Example

```csharp
var implementation = new CustomCanvasLineElement();
```

## See Also

- [Complete Class Catalog](../catalog)