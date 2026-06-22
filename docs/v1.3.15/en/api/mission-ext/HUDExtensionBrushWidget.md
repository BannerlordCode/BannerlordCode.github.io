<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HUDExtensionBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HUDExtensionBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class HUDExtensionBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/HUDExtensionBrushWidget.cs`

## Overview

`HUDExtensionBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `AlphaChangeDuration` | `public float AlphaChangeDuration { get; set; }` |
| `OrderEnabledAlpha` | `public float OrderEnabledAlpha { get; set; }` |
| `IsOrderActive` | `public bool IsOrderActive { get; set; }` |

## Usage Example

```csharp
// Typical usage of HUDExtensionBrushWidget (Widget)
// 声明/访问一个 HUDExtensionBrushWidget
var widget = root.GetChild("hUDExtensionBrushWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)