<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GamepadCursorMarkerWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GamepadCursorMarkerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GamepadCursorMarkerWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GamepadCursorMarkerWidget.cs`

## Overview

`GamepadCursorMarkerWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `FlipVisual` | `public bool FlipVisual { get; set; }` |

## Usage Example

```csharp
// Typical usage of GamepadCursorMarkerWidget (Widget)
// 声明/访问一个 GamepadCursorMarkerWidget
var widget = root.GetChild("gamepadCursorMarkerWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)