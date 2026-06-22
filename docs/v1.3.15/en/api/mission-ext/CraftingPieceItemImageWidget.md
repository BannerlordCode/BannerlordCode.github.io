<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingPieceItemImageWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingPieceItemImageWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftingPieceItemImageWidget : ImageWidget`
**Base:** `ImageWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftingPieceItemImageWidget.cs`

## Overview

`CraftingPieceItemImageWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

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
// Typical usage of CraftingPieceItemImageWidget (Widget)
// 声明/访问一个 CraftingPieceItemImageWidget
var widget = root.GetChild("craftingPieceItemImageWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)