---
title: "GameMenuManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameMenuManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameMenuManager

**Namespace:** TaleWorlds.CampaignSystem.GameMenus
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/GameMenus/GameMenuManager.cs`

## Overview

`GameMenuManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `GameMenuManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `NextGameMenuId` | `public string NextGameMenuId { get; }` |
| `NextMenu` | `public GameMenu NextMenu { get; }` |

## Key Methods

### SetNextMenu
`public void SetNextMenu(string name)`

**Purpose:** Sets the value or state of `next menu`.

### ExitToLast
`public void ExitToLast()`

**Purpose:** Handles logic related to `exit to last`.

### SetCurrentRepeatableIndex
`public void SetCurrentRepeatableIndex(MenuContext menuContext, int index)`

**Purpose:** Sets the value or state of `current repeatable index`.

### GetMenuOptionConditionsHold
`public bool GetMenuOptionConditionsHold(MenuContext menuContext, int menuItemNumber)`

**Purpose:** Gets the current value of `menu option conditions hold`.

### RefreshMenuOptions
`public void RefreshMenuOptions(MenuContext menuContext)`

**Purpose:** Refreshes the display or cache of `menu options`.

### RefreshMenuOptionConditions
`public void RefreshMenuOptionConditions(MenuContext menuContext)`

**Purpose:** Refreshes the display or cache of `menu option conditions`.

### GetMenuOptionIdString
`public string GetMenuOptionIdString(MenuContext menuContext, int menuItemNumber)`

**Purpose:** Gets the current value of `menu option id string`.

### RunConsequencesOfMenuOption
`public void RunConsequencesOfMenuOption(MenuContext menuContext, int menuItemNumber)`

**Purpose:** Handles logic related to `run consequences of menu option`.

### GetVirtualMenuOptionTooltip
`public TextObject GetVirtualMenuOptionTooltip(MenuContext menuContext, int virtualMenuItemIndex)`

**Purpose:** Gets the current value of `virtual menu option tooltip`.

### GetMenuOverlayType
`public GameMenu.MenuOverlayType GetMenuOverlayType(MenuContext menuContext)`

**Purpose:** Gets the current value of `menu overlay type`.

### GetVirtualMenuOptionText
`public TextObject GetVirtualMenuOptionText(MenuContext menuContext, int virtualMenuItemIndex)`

**Purpose:** Gets the current value of `virtual menu option text`.

### GetVirtualGameMenuOption
`public GameMenuOption GetVirtualGameMenuOption(MenuContext menuContext, int virtualMenuItemIndex)`

**Purpose:** Gets the current value of `virtual game menu option`.

### GetVirtualMenuOptionText2
`public TextObject GetVirtualMenuOptionText2(MenuContext menuContext, int virtualMenuItemIndex)`

**Purpose:** Gets the current value of `virtual menu option text2`.

### GetVirtualMenuProgress
`public float GetVirtualMenuProgress(MenuContext menuContext)`

**Purpose:** Gets the current value of `virtual menu progress`.

### GetVirtualMenuAndOptionType
`public GameMenu.MenuAndOptionType GetVirtualMenuAndOptionType(MenuContext menuContext)`

**Purpose:** Gets the current value of `virtual menu and option type`.

### GetVirtualMenuIsWaitActive
`public bool GetVirtualMenuIsWaitActive(MenuContext menuContext)`

**Purpose:** Gets the current value of `virtual menu is wait active`.

### GetVirtualMenuTargetWaitHours
`public float GetVirtualMenuTargetWaitHours(MenuContext menuContext)`

**Purpose:** Gets the current value of `virtual menu target wait hours`.

### GetVirtualMenuOptionIsEnabled
`public bool GetVirtualMenuOptionIsEnabled(MenuContext menuContext, int virtualMenuItemIndex)`

**Purpose:** Gets the current value of `virtual menu option is enabled`.

### GetVirtualMenuOptionAmount
`public int GetVirtualMenuOptionAmount(MenuContext menuContext)`

**Purpose:** Gets the current value of `virtual menu option amount`.

### GetVirtualMenuOptionIsLeave
`public bool GetVirtualMenuOptionIsLeave(MenuContext menuContext, int virtualMenuItemIndex)`

**Purpose:** Gets the current value of `virtual menu option is leave`.

### GetLeaveMenuOption
`public GameMenuOption GetLeaveMenuOption(MenuContext menuContext)`

**Purpose:** Gets the current value of `leave menu option`.

### GetVirtualMenuOptionConditionsHold
`public bool GetVirtualMenuOptionConditionsHold(MenuContext menuContext, int virtualMenuItemIndex)`

**Purpose:** Gets the current value of `virtual menu option conditions hold`.

### OnFrameTick
`public void OnFrameTick(MenuContext menuContext, float dt)`

**Purpose:** Called when the `frame tick` event is raised.

### GetMenuText
`public TextObject GetMenuText(MenuContext menuContext)`

**Purpose:** Gets the current value of `menu text`.

### AddGameMenu
`public void AddGameMenu(GameMenu gameMenu)`

**Purpose:** Adds `game menu` to the current collection or state.

### RemoveRelatedGameMenus
`public void RemoveRelatedGameMenus(object relatedObject)`

**Purpose:** Removes `related game menus` from the current collection or state.

### RemoveRelatedGameMenuOptions
`public void RemoveRelatedGameMenuOptions(object relatedObject)`

**Purpose:** Removes `related game menu options` from the current collection or state.

### GetGameMenu
`public GameMenu GetGameMenu(string menuId)`

**Purpose:** Gets the current value of `game menu`.

## Usage Example

```csharp
GameMenuManager example = GameMenuManager.NextGameMenuId;
```

## See Also

- [Complete Class Catalog](../catalog)