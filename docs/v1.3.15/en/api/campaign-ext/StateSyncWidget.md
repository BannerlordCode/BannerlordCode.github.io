<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StateSyncWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StateSyncWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class StateSyncWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/StateSyncWidget.cs`

## Overview

`StateSyncWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `StateSyncWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SourceWidget` | `public Widget SourceWidget { get; set; }` |
| `TargetWidget` | `public Widget TargetWidget { get; set; }` |

## Usage Example

```csharp
var widget = new StateSyncWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)