---
title: "OrderOfBattleHeroDragWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderOfBattleHeroDragWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
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

## Mental Model

Treat `OrderOfBattleHeroDragWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `StackCount` | `public int StackCount { get; set; }` |
| `StackDragWidget` | `public BrushWidget StackDragWidget { get; set; }` |
| `StackThumbnailWidget` | `public ImageIdentifierWidget StackThumbnailWidget { get; set; }` |
| `InnerBrushName` | `public string InnerBrushName { get; set; }` |

## Usage Example

```csharp
var widget = new OrderOfBattleHeroDragWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)