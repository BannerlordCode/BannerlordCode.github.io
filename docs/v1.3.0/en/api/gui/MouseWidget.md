<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MouseWidget`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MouseWidget

**Namespace:** TaleWorlds.GauntletUI.ExtraWidgets
**Module:** TaleWorlds.GauntletUI
**Type:** `public class MouseWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI.ExtraWidgets/MouseWidget.cs`

## Overview

`MouseWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `MouseWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
`public void UpdatePressedKeys()`

**Purpose:** Updates the state or data of `pressed keys`.

## Usage Example

```csharp
var widget = new MouseWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)