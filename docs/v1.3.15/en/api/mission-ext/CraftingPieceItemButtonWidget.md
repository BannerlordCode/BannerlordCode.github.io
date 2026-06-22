<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingPieceItemButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingPieceItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftingPieceItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftingPieceItemButtonWidget.cs`

## Overview

`CraftingPieceItemButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

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
// Typical usage of CraftingPieceItemButtonWidget (Widget)
// 声明/访问一个 CraftingPieceItemButtonWidget
var widget = root.GetChild("craftingPieceItemButtonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)