<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MobilePartyTrackerItemWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MobilePartyTrackerItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MobilePartyTrackerItemWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Map/MobilePartyTrackerItemWidget.cs`

## Overview

`MobilePartyTrackerItemWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `FrameVisualWidget` | `public Widget FrameVisualWidget { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `IsBehind` | `public bool IsBehind { get; set; }` |
| `IsTracked` | `public bool IsTracked { get; set; }` |
| `TrackerType` | `public string TrackerType { get; set; }` |
| `Position` | `public Vec2 Position { get; set; }` |
| `TrackerImageBrush` | `public Brush TrackerImageBrush { get; set; }` |

## Usage Example

```csharp
// Typical usage of MobilePartyTrackerItemWidget (Widget)
// 声明/访问一个 MobilePartyTrackerItemWidget
var widget = root.GetChild("mobilePartyTrackerItemWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)