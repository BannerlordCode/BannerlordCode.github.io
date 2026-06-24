<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ItemTableauWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemTableauWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ItemTableauWidget : TextureWidget`
**Base:** `TextureWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ItemTableauWidget.cs`

## Overview

`ItemTableauWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `ItemTableauWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ItemModifierId` | `public string ItemModifierId { get; set; }` |
| `StringId` | `public string StringId { get; set; }` |
| `InitialTiltRotation` | `public float InitialTiltRotation { get; set; }` |
| `InitialPanRotation` | `public float InitialPanRotation { get; set; }` |
| `BannerCode` | `public string BannerCode { get; set; }` |

## Usage Example

```csharp
var widget = new ItemTableauWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)