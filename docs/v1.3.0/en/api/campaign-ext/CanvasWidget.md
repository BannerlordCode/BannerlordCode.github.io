<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CanvasWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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
var widget = new CanvasWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)