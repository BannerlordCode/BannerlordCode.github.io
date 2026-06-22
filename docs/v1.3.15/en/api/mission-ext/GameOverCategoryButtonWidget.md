<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameOverCategoryButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameOverCategoryButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameOver
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameOverCategoryButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameOver/GameOverCategoryButtonWidget.cs`

## Overview

`GameOverCategoryButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `CategoryID` | `public string CategoryID { get; set; }` |

## Usage Example

```csharp
// Typical usage of GameOverCategoryButtonWidget (Widget)
// 声明/访问一个 GameOverCategoryButtonWidget
var widget = root.GetChild("gameOverCategoryButtonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)