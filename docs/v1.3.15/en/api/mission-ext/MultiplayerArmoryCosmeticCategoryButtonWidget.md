<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MultiplayerArmoryCosmeticCategoryButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MultiplayerArmoryCosmeticCategoryButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.Lobby.Armory
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerArmoryCosmeticCategoryButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/Lobby/Armory/MultiplayerArmoryCosmeticCategoryButtonWidget.cs`

## Overview

`MultiplayerArmoryCosmeticCategoryButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `ClothingCategorySpriteBrush` | `public Brush ClothingCategorySpriteBrush { get; set; }` |
| `TauntCategorySpriteBrush` | `public Brush TauntCategorySpriteBrush { get; set; }` |
| `CosmeticTypeName` | `public string CosmeticTypeName { get; set; }` |
| `CosmeticCategoryName` | `public string CosmeticCategoryName { get; set; }` |

## Usage Example

```csharp
// Typical usage of MultiplayerArmoryCosmeticCategoryButtonWidget (Widget)
// 声明/访问一个 MultiplayerArmoryCosmeticCategoryButtonWidget
var widget = root.GetChild("multiplayerArmoryCosmeticCategoryButtonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)