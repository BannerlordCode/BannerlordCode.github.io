<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GamepadCursorParentWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GamepadCursorParentWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GamepadCursorParentWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GamepadCursorParentWidget.cs`

## Overview

`GamepadCursorParentWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `XOffset` | `public float XOffset { get; set; }` |
| `YOffset` | `public float YOffset { get; set; }` |
| `HasTarget` | `public bool HasTarget { get; set; }` |
| `CenterWidget` | `public BrushWidget CenterWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of GamepadCursorParentWidget (Widget)
// 声明/访问一个 GamepadCursorParentWidget
var widget = root.GetChild("gamepadCursorParentWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)