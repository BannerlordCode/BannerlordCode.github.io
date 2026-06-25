---
title: "CanvasWidget"
description: "Auto-generated class reference for CanvasWidget."
---
# CanvasWidget

**Namespace:** TaleWorlds.GauntletUI.Canvas
**Module:** TaleWorlds.GauntletUI
**Type:** `public class CanvasWidget : Widget, ILayout`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/Canvas/CanvasWidget.cs`

## Overview

`CanvasWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `CanvasWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `CanvasAsString` | `public string CanvasAsString { get; set; }` |
| `CanvasNode` | `public XmlElement CanvasNode { get; set; }` |

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
CanvasWidget widget = ...;
```

## See Also

- [Area Index](../)