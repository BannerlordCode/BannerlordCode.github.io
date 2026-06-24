<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DimensionSyncWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DimensionSyncWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class DimensionSyncWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.Widgets/DimensionSyncWidget.cs`

## Overview

`DimensionSyncWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `DimensionSyncWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `WidgetToCopyHeightFrom` | `public Widget WidgetToCopyHeightFrom { get; set; }` |
| `PaddingAmount` | `public int PaddingAmount { get; set; }` |
| `DimensionToSync` | `public Dimensions DimensionToSync { get; set; }` |

## Usage Example

```csharp
var widget = new DimensionSyncWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)