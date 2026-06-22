<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MouseWidget`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MouseWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class MouseWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/MouseWidget.cs`

## Overview

`MouseWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `LeftMouseButton` | `public Widget LeftMouseButton { get; set; }` |
| `RightMouseButton` | `public Widget RightMouseButton { get; set; }` |
| `MiddleMouseButton` | `public Widget MiddleMouseButton { get; set; }` |
| `MouseX1Button` | `public Widget MouseX1Button { get; set; }` |
| `MouseX2Button` | `public Widget MouseX2Button { get; set; }` |
| `MouseScrollUp` | `public Widget MouseScrollUp { get; set; }` |
| `MouseScrollDown` | `public Widget MouseScrollDown { get; set; }` |
| `KeyboardKeys` | `public TextWidget KeyboardKeys { get; set; }` |

## Key Methods

### UpdatePressedKeys
```csharp
public void UpdatePressedKeys()
```

## Usage Example

```csharp
// Typical usage of MouseWidget (Widget)
// 声明/访问一个 MouseWidget
var widget = root.GetChild("mouseWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)