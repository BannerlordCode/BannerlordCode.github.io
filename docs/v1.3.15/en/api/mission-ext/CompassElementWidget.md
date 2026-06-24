<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CompassElementWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CompassElementWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CompassElementWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/CompassElementWidget.cs`

## Overview

`CompassElementWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `CompassElementWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Position` | `public float Position { get; set; }` |
| `Distance` | `public int Distance { get; set; }` |
| `BannerWidget` | `public Widget BannerWidget { get; set; }` |
| `FlagWidget` | `public Widget FlagWidget { get; set; }` |

## Usage Example

```csharp
var widget = new CompassElementWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)