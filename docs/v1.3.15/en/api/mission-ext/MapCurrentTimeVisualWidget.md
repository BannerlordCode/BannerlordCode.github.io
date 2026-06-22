<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapCurrentTimeVisualWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapCurrentTimeVisualWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapBar
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapCurrentTimeVisualWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapBar/MapCurrentTimeVisualWidget.cs`

## Overview

`MapCurrentTimeVisualWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentTimeState` | `public int CurrentTimeState { get; set; }` |
| `FastForwardButton` | `public ButtonWidget FastForwardButton { get; set; }` |
| `PlayButton` | `public ButtonWidget PlayButton { get; set; }` |
| `PauseButton` | `public ButtonWidget PauseButton { get; set; }` |

## Usage Example

```csharp
// Typical usage of MapCurrentTimeVisualWidget (Widget)
// 声明/访问一个 MapCurrentTimeVisualWidget
var widget = root.GetChild("mapCurrentTimeVisualWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)