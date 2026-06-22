<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CompassMarkerTextWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CompassMarkerTextWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CompassMarkerTextWidget : TextWidget`
**Base:** `TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/CompassMarkerTextWidget.cs`

## Overview

`CompassMarkerTextWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsPrimary` | `public bool IsPrimary { get; set; }` |
| `Position` | `public float Position { get; set; }` |
| `PrimaryBrush` | `public Brush PrimaryBrush { get; set; }` |
| `SecondaryBrush` | `public Brush SecondaryBrush { get; set; }` |

## Usage Example

```csharp
// Typical usage of CompassMarkerTextWidget (Widget)
// 声明/访问一个 CompassMarkerTextWidget
var widget = root.GetChild("compassMarkerTextWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)