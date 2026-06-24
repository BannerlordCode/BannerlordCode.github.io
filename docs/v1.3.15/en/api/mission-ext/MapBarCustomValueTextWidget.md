<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapBarCustomValueTextWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapBarCustomValueTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapBar
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapBarCustomValueTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapBar/MapBarCustomValueTextWidget.cs`

## Overview

`MapBarCustomValueTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MapBarCustomValueTextWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ValueAsInt` | `public int ValueAsInt { get; set; }` |
| `IsWarning` | `public bool IsWarning { get; set; }` |
| `NormalColor` | `public Color NormalColor { get; set; }` |
| `WarningColor` | `public Color WarningColor { get; set; }` |

## Usage Example

```csharp
var widget = new MapBarCustomValueTextWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)