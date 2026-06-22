<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ServerStatusItemBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ServerStatusItemBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ServerStatusItemBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/ServerStatusItemBrushWidget.cs`

## Overview

`ServerStatusItemBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `Status` | `public int Status { get; set; }` |

## Usage Example

```csharp
// Typical usage of ServerStatusItemBrushWidget (Widget)
// 声明/访问一个 ServerStatusItemBrushWidget
var widget = root.GetChild("serverStatusItemBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)