<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OptionsGamepadCategoryWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OptionsGamepadCategoryWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options.Gamepad
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OptionsGamepadCategoryWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Options/Gamepad/OptionsGamepadCategoryWidget.cs`

## Overview

`OptionsGamepadCategoryWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `Playstation4LayoutParentWidget` | `public Widget Playstation4LayoutParentWidget { get; set; }` |
| `Playstation5LayoutParentWidget` | `public Widget Playstation5LayoutParentWidget { get; set; }` |
| `XboxLayoutParentWidget` | `public Widget XboxLayoutParentWidget { get; set; }` |
| `CurrentGamepadType` | `public int CurrentGamepadType { get; set; }` |

## Usage Example

```csharp
// Typical usage of OptionsGamepadCategoryWidget (Widget)
// 声明/访问一个 OptionsGamepadCategoryWidget
var widget = root.GetChild("optionsGamepadCategoryWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)