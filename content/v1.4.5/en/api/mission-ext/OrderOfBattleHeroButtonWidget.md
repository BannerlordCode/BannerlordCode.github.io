---
title: "OrderOfBattleHeroButtonWidget"
description: "Auto-generated class reference for OrderOfBattleHeroButtonWidget."
---
# OrderOfBattleHeroButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderOfBattleHeroButtonWidget`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.OrderOfBattle/OrderOfBattleHeroButtonWidget.cs`

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

## Key Methods

### OrderOfBattleHeroButtonWidget
`public class OrderOfBattleHeroButtonWidget(UIContext context)`

**Purpose:** Executes the OrderOfBattleHeroButtonWidget logic.

```csharp
// Obtain an instance of OrderOfBattleHeroButtonWidget from the subsystem API first
OrderOfBattleHeroButtonWidget orderOfBattleHeroButtonWidget = ...;
var result = orderOfBattleHeroButtonWidget.OrderOfBattleHeroButtonWidget(context);
```

## Usage Example

```csharp
// Obtain this widget from the Gauntlet widget tree or movie
OrderOfBattleHeroButtonWidget widget = ...;
```

## See Also

- [Area Index](../)