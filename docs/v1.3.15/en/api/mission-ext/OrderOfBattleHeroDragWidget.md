<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderOfBattleHeroDragWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderOfBattleHeroDragWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderOfBattleHeroDragWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleHeroDragWidget.cs`

## Overview

`OrderOfBattleHeroDragWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Key Properties

| Name | Signature |
|------|-----------|
| `StackCount` | `public int StackCount { get; set; }` |
| `StackDragWidget` | `public BrushWidget StackDragWidget { get; set; }` |
| `StackThumbnailWidget` | `public ImageIdentifierWidget StackThumbnailWidget { get; set; }` |
| `InnerBrushName` | `public string InnerBrushName { get; set; }` |

## Usage Example

```csharp
// Typical usage of OrderOfBattleHeroDragWidget (Widget)
// 声明/访问一个 OrderOfBattleHeroDragWidget
var widget = root.GetChild("orderOfBattleHeroDragWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)