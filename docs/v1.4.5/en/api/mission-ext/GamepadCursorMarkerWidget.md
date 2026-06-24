<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GamepadCursorMarkerWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GamepadCursorMarkerWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GamepadCursorMarkerWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets/GamepadCursorMarkerWidget.cs`

## Overview

`GamepadCursorMarkerWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `GamepadCursorMarkerWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `FlipVisual` | `public bool FlipVisual { get; set; }` |

## Usage Example

```csharp
var widget = new GamepadCursorMarkerWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)