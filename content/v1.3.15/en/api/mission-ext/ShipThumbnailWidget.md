---
title: "ShipThumbnailWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ShipThumbnailWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
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

## Mental Model

Treat `ShipThumbnailWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `PrefabId` | `public string PrefabId { get; set; }` |
| `SpriteBrush` | `public Brush SpriteBrush { get; set; }` |
| `StyleBrush` | `public Brush StyleBrush { get; set; }` |

## Usage Example

```csharp
var widget = new ShipThumbnailWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)