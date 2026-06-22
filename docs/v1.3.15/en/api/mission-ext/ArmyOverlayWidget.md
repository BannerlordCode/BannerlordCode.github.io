<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ArmyOverlayWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ArmyOverlayWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.Overlay
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ArmyOverlayWidget : OverlayBaseWidget`
**Base:** `OverlayBaseWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/Overlay/ArmyOverlayWidget.cs`

## Overview

`ArmyOverlayWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `Overlay` | `public Widget Overlay { get; set; }` |
| `ArmyListGridWidget` | `public GridWidget ArmyListGridWidget { get; set; }` |
| `ExtendButton` | `public ButtonWidget ExtendButton { get; set; }` |
| `IsInfoBarExtended` | `public bool IsInfoBarExtended { get; set; }` |
| `PageControlWidget` | `public ContainerPageControlWidget PageControlWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of ArmyOverlayWidget (Widget)
// 声明/访问一个 ArmyOverlayWidget
var widget = root.GetChild("armyOverlayWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)