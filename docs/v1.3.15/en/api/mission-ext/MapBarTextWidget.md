<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapBarTextWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapBarTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapBar
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapBarTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapBar/MapBarTextWidget.cs`

## Overview

`MapBarTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsWarning` | `public bool IsWarning { get; set; }` |
| `NormalColor` | `public Color NormalColor { get; set; }` |
| `WarningColor` | `public Color WarningColor { get; set; }` |

## Usage Example

```csharp
// Typical usage of MapBarTextWidget (Widget)
// 声明/访问一个 MapBarTextWidget
var widget = root.GetChild("mapBarTextWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)