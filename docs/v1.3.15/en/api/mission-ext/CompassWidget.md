<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CompassWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CompassWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CompassWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/CompassWidget.cs`

## Overview

`CompassWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ItemContainerPanel` | `public Widget ItemContainerPanel { get; set; }` |
| `MarkerContainerPanel` | `public Widget MarkerContainerPanel { get; set; }` |

## Usage Example

```csharp
// Typical usage of CompassWidget (Widget)
// 声明/访问一个 CompassWidget
var widget = root.GetChild("compassWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)