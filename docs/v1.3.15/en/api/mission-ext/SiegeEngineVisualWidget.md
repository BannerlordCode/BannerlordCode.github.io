<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SiegeEngineVisualWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SiegeEngineVisualWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.FlagMarker
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SiegeEngineVisualWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/FlagMarker/SiegeEngineVisualWidget.cs`

## Overview

`SiegeEngineVisualWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `EngineID` | `public string EngineID { get; set; }` |
| `OutlineWidget` | `public Widget OutlineWidget { get; set; }` |
| `IconWidget` | `public Widget IconWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of SiegeEngineVisualWidget (Widget)
// 声明/访问一个 SiegeEngineVisualWidget
var widget = root.GetChild("siegeEngineVisualWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)