<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CompassElementWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CompassElementWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CompassElementWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/CompassElementWidget.cs`

## Overview

`CompassElementWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `Position` | `public float Position { get; set; }` |
| `Distance` | `public int Distance { get; set; }` |
| `BannerWidget` | `public Widget BannerWidget { get; set; }` |
| `FlagWidget` | `public Widget FlagWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of CompassElementWidget (Widget)
// 声明/访问一个 CompassElementWidget
var widget = root.GetChild("compassElementWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)