<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SortButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SortButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SortButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/SortButtonWidget.cs`

## Overview

`SortButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `SortButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SortState` | `public int SortState { get; set; }` |
| `SortVisualWidget` | `public BrushWidget SortVisualWidget { get; set; }` |

## Usage Example

```csharp
var widget = new SortButtonWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)