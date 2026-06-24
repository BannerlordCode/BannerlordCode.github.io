<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OptionsGamepadCategoryWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# OptionsGamepadCategoryWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options.Gamepad
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OptionsGamepadCategoryWidget : Widget`
**Base:** `Widget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Options.Gamepad/OptionsGamepadCategoryWidget.cs`

## Overview

`OptionsGamepadCategoryWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `OptionsGamepadCategoryWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Playstation4LayoutParentWidget` | `public Widget Playstation4LayoutParentWidget { get; set; }` |
| `Playstation5LayoutParentWidget` | `public Widget Playstation5LayoutParentWidget { get; set; }` |
| `XboxLayoutParentWidget` | `public Widget XboxLayoutParentWidget { get; set; }` |
| `CurrentGamepadType` | `public int CurrentGamepadType { get; set; }` |

## Usage Example

```csharp
var widget = new OptionsGamepadCategoryWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)