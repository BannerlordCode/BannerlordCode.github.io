<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GraphLineWidget`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GraphLineWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets.Graph
**Module:** TaleWorlds.GauntletUI
**Type:** `public class GraphLineWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI.ExtraWidgets/TaleWorlds.GauntletUI.ExtraWidgets.Graph/GraphLineWidget.cs`

## Overview

`GraphLineWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `GraphLineWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `LineBrushStateName` | `public string LineBrushStateName { get; set; }` |
| `PointContainerWidget` | `public Widget PointContainerWidget { get; set; }` |

## Usage Example

```csharp
var widget = new GraphLineWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)