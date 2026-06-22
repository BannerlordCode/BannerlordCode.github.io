<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameMenuTroopSelectionItemButtonWidget`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameMenuTroopSelectionItemButtonWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.GameMenu
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GameMenuTroopSelectionItemButtonWidget : ButtonWidget`
**Base:** `ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/GameMenu/GameMenuTroopSelectionItemButtonWidget.cs`

## Overview

`GameMenuTroopSelectionItemButtonWidget` is a Gauntlet UI widget — a UI element used in Gauntlet XML/.prefab or created in code. Subclass Widget to build custom UI elements; access instances via the widget tree.

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
// Typical usage of GameMenuTroopSelectionItemButtonWidget (Widget)
// 声明/访问一个 GameMenuTroopSelectionItemButtonWidget
var widget = root.GetChild("gameMenuTroopSelectionItemButtonWidget");;
```

## See Also

- [Complete Class Catalog](../catalog)