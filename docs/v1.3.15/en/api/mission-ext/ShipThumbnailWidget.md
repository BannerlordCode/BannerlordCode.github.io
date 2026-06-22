<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ShipThumbnailWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ShipThumbnailWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ShipThumbnailWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ShipThumbnailWidget.cs`

## Overview

`ShipThumbnailWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `PrefabId` | `public string PrefabId { get; set; }` |
| `SpriteBrush` | `public Brush SpriteBrush { get; set; }` |
| `StyleBrush` | `public Brush StyleBrush { get; set; }` |

## Usage Example

```csharp
// Typical usage of ShipThumbnailWidget (Widget)
// 声明/访问一个 ShipThumbnailWidget
var widget = root.GetChild("shipThumbnailWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)