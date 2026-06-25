---
title: "CraftingPieceItemButtonWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingPieceItemButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CraftingPieceItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftingPieceItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting/CraftingPieceItemButtonWidget.cs`

## Overview

`CraftingPieceItemButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `CraftingPieceItemButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ImageIdentifier` | `public ImageIdentifierWidget ImageIdentifier { get; set; }` |
| `PlayerHasPiece` | `public bool PlayerHasPiece { get; set; }` |
| `HasPieceBrush` | `public Brush HasPieceBrush { get; set; }` |
| `DontHavePieceBrush` | `public Brush DontHavePieceBrush { get; set; }` |
| `HasPieceMaterialBrush` | `public Brush HasPieceMaterialBrush { get; set; }` |
| `DontHavePieceMaterialBrush` | `public Brush DontHavePieceMaterialBrush { get; set; }` |

## Usage Example

```csharp
var widget = new CraftingPieceItemButtonWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)