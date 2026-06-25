---
title: "OrderOfBattleHeroButtonWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderOfBattleHeroButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderOfBattleHeroButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderOfBattleHeroButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/OrderOfBattle/OrderOfBattleHeroButtonWidget.cs`

## Overview

`OrderOfBattleHeroButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `OrderOfBattleHeroButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsMainHero` | `public bool IsMainHero { get; set; }` |
| `MainHeroHueFactor` | `public int MainHeroHueFactor { get; set; }` |
| `CanMainHeroAcceptEvents` | `public bool CanMainHeroAcceptEvents { get; set; }` |

## Usage Example

```csharp
var widget = new OrderOfBattleHeroButtonWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)