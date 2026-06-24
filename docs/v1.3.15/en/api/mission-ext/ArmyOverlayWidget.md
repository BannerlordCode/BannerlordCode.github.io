<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ArmyOverlayWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
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

## Mental Model

Treat `ArmyOverlayWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

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
var widget = new ArmyOverlayWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)