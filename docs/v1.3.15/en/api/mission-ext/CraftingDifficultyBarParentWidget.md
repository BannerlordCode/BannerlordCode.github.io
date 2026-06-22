<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingDifficultyBarParentWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingDifficultyBarParentWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftingDifficultyBarParentWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftingDifficultyBarParentWidget.cs`

## Overview

`CraftingDifficultyBarParentWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `OrderDifficulty` | `public int OrderDifficulty { get; set; }` |
| `SmithingLevel` | `public int SmithingLevel { get; set; }` |
| `SmithingLevelTextWidget` | `public TextWidget SmithingLevelTextWidget { get; set; }` |
| `OrderDifficultyTextWidget` | `public TextWidget OrderDifficultyTextWidget { get; set; }` |

## Usage Example

```csharp
// Typical usage of CraftingDifficultyBarParentWidget (Widget)
// 声明/访问一个 CraftingDifficultyBarParentWidget
var widget = root.GetChild("craftingDifficultyBarParentWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)