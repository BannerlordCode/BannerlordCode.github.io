<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OptionsGamepadVisualWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OptionsGamepadVisualWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options.Gamepad
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OptionsGamepadVisualWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/Gamepad/OptionsGamepadVisualWidget.cs`

## Overview

`OptionsGamepadVisualWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ParentAreaWidget` | `public Widget ParentAreaWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of OptionsGamepadVisualWidget (Widget)
// 声明/访问一个 OptionsGamepadVisualWidget
var widget = root.GetChild("optionsGamepadVisualWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)