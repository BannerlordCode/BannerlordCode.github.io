---
title: "BarterItemVisualBrushWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BarterItemVisualBrushWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BarterItemVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BarterItemVisualBrushWidget`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Barter/BarterItemVisualBrushWidget.cs`

## Overview

`BarterItemVisualBrushWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `BarterItemVisualBrushWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SpriteWidget` | `public BrushWidget SpriteWidget { get; set; }` |
| `SpriteClipWidget` | `public Widget SpriteClipWidget { get; set; }` |
| `ImageIdentifierWidget` | `public ImageIdentifierWidget ImageIdentifierWidget { get; set; }` |
| `MaskedTextureWidget` | `public MaskedTextureWidget MaskedTextureWidget { get; set; }` |
| `HasVisualIdentifier` | `public bool HasVisualIdentifier { get; set; }` |
| `Type` | `public string Type { get; set; }` |
| `FiefImagePath` | `public string FiefImagePath { get; set; }` |

## Key Methods

### BarterItemVisualBrushWidget
`public class BarterItemVisualBrushWidget(UIContext context)`

**Purpose:** Handles logic related to `barter item visual brush widget`.

## Usage Example

```csharp
var widget = new BarterItemVisualBrushWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)