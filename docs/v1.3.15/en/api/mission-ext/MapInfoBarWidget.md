<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapInfoBarWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapInfoBarWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.MapBar
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapInfoBarWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MapBar/MapInfoBarWidget.cs`

## Overview

`MapInfoBarWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ExtendButtonWidget` | `public ButtonWidget ExtendButtonWidget { get; set; }` |
| `IsInfoBarExtended` | `public bool IsInfoBarExtended { get; set; }` |

## Key Methods

### MapBarExtendStateChangeEvent
```csharp
public delegate void MapBarExtendStateChangeEvent(bool newState)
```

## Usage Example

```csharp
// Typical usage of MapInfoBarWidget (Widget)
// 声明/访问一个 MapInfoBarWidget
var widget = root.GetChild("mapInfoBarWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)