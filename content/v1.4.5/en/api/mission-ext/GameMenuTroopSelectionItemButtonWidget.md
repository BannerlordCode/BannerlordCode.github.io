---
title: "GameMenuTroopSelectionItemButtonWidget"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameMenuTroopSelectionItemButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameMenuTroopSelectionItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameMenu
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameMenuTroopSelectionItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameMenu/GameMenuTroopSelectionItemButtonWidget.cs`

## Overview

`GameMenuTroopSelectionItemButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

## Mental Model

Treat `GameMenuTroopSelectionItemButtonWidget` as a Widget-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `AddButtonWidget` | `public ButtonWidget AddButtonWidget { get; set; }` |
| `RemoveButtonWidget` | `public ButtonWidget RemoveButtonWidget { get; set; }` |
| `CheckmarkVisualWidget` | `public Widget CheckmarkVisualWidget { get; set; }` |
| `AddRemoveControls` | `public Widget AddRemoveControls { get; set; }` |
| `HeroHealthParent` | `public Widget HeroHealthParent { get; set; }` |
| `IsRosterFull` | `public bool IsRosterFull { get; set; }` |
| `IsLocked` | `public bool IsLocked { get; set; }` |
| `IsTroopHero` | `public bool IsTroopHero { get; set; }` |
| `CurrentAmount` | `public int CurrentAmount { get; set; }` |
| `MaxAmount` | `public int MaxAmount { get; set; }` |

## Usage Example

```csharp
var widget = new GameMenuTroopSelectionItemButtonWidget(context);
```

## See Also

- [Complete Class Catalog](../catalog)