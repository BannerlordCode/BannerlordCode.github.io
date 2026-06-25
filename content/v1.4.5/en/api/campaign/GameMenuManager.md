---
title: "GameMenuManager"
description: "Auto-generated class reference for GameMenuManager."
---
# GameMenuManager

**Namespace:** TaleWorlds.CampaignSystem.GameMenus
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuManager`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameMenus/GameMenuManager.cs`

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

**Purpose:** Assigns a new value to next menu and updates the object's internal state.

```csharp
// Obtain an instance of GameMenuManager from the subsystem API first
GameMenuManager gameMenuManager = ...;
gameMenuManager.SetNextMenu("example");
```

### ExitToLast
`public void ExitToLast()`

**Purpose:** Executes the ExitToLast logic.

```csharp
// Obtain an instance of GameMenuManager from the subsystem API first
GameMenuManager gameMenuManager = ...;
gameMenuManager.ExitToLast();
```

### SetCurrentRepeatableIndex
`public void SetCurrentRepeatableIndex(MenuContext menuContext, int index)`

**Purpose:** Assigns a new value to current repeatable index and updates the object's internal state.

```csharp
// Obtain an instance of GameMenuManager from the subsystem API first
GameMenuManager gameMenuManager = ...;
gameMenuManager.SetCurrentRepeatableIndex(menuContext, 0);
```

### GetMenuOptionConditionsHold
`public bool GetMenuOptionConditionsHold(MenuContext menuContext, int menuItemNumber)`

**Purpose:** Reads and returns the menu option conditions hold value held by the this instance.

```csharp
// Obtain an instance of GameMenuManager from the subsystem API first
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetMenuOptionConditionsHold(menuContext, 0);
```

### RefreshMenuOptions
`public void RefreshMenuOptions(MenuContext menuContext)`

**Purpose:** Keeps the display or cache of menu options in sync with the underlying state.

```csharp
// Obtain an instance of GameMenuManager from the subsystem API first
GameMenuManager gameMenuManager = ...;
gameMenuManager.RefreshMenuOptions(menuContext);
```

### RefreshMenuOptionConditions
`public void RefreshMenuOptionConditions(MenuContext menuContext)`

**Purpose:** Keeps the display or cache of menu option conditions in sync with the underlying state.

```csharp
// Obtain an instance of GameMenuManager from the subsystem API first
GameMenuManager gameMenuManager = ...;
gameMenuManager.RefreshMenuOptionConditions(menuContext);
```

### GetMenuOptionIdString
`public string GetMenuOptionIdString(MenuContext menuContext, int menuItemNumber)`

**Purpose:** Reads and returns the menu option id string value held by the this instance.

```csharp
// Obtain an instance of GameMenuManager from the subsystem API first
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetMenuOptionIdString(menuContext, 0);
```

### RunConsequencesOfMenuOption
`public void RunConsequencesOfMenuOption(MenuContext menuContext, int menuItemNumber)`

**Purpose:** Executes the RunConsequencesOfMenuOption logic.

```csharp
// Obtain an instance of GameMenuManager from the subsystem API first
GameMenuManager gameMenuManager = ...;
gameMenuManager.RunConsequencesOfMenuOption(menuContext, 0);
```

### GetVirtualMenuOptionTooltip
`public TextObject GetVirtualMenuOptionTooltip(MenuContext menuContext, int virtualMenuItemIndex)`

**Purpose:** Reads and returns the virtual menu option tooltip value held by the this instance.

```csharp
// Obtain an instance of GameMenuManager from the subsystem API first
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetVirtualMenuOptionTooltip(menuContext, 0);
```

### GetMenuOverlayType
`public GameMenu.MenuOverlayType GetMenuOverlayType(MenuContext menuContext)`

**Purpose:** Reads and returns the menu overlay type value held by the this instance.

```csharp
// Obtain an instance of GameMenuManager from the subsystem API first
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetMenuOverlayType(menuContext);
```

### GetVirtualMenuOptionText
`public TextObject GetVirtualMenuOptionText(MenuContext menuContext, int virtualMenuItemIndex)`

**Purpose:** Reads and returns the virtual menu option text value held by the this instance.

```csharp
// Obtain an instance of GameMenuManager from the subsystem API first
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetVirtualMenuOptionText(menuContext, 0);
```

### GetVirtualGameMenuOption
`public GameMenuOption GetVirtualGameMenuOption(MenuContext menuContext, int virtualMenuItemIndex)`

**Purpose:** Reads and returns the virtual game menu option value held by the this instance.

```csharp
// Obtain an instance of GameMenuManager from the subsystem API first
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetVirtualGameMenuOption(menuContext, 0);
```

### GetVirtualMenuOptionText2
`public TextObject GetVirtualMenuOptionText2(MenuContext menuContext, int virtualMenuItemIndex)`

**Purpose:** Reads and returns the virtual menu option text2 value held by the this instance.

```csharp
// Obtain an instance of GameMenuManager from the subsystem API first
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetVirtualMenuOptionText2(menuContext, 0);
```

### GetVirtualMenuProgress
`public float GetVirtualMenuProgress(MenuContext menuContext)`

**Purpose:** Reads and returns the virtual menu progress value held by the this instance.

```csharp
// Obtain an instance of GameMenuManager from the subsystem API first
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetVirtualMenuProgress(menuContext);
```

### GetVirtualMenuAndOptionType
`public GameMenu.MenuAndOptionType GetVirtualMenuAndOptionType(MenuContext menuContext)`

**Purpose:** Reads and returns the virtual menu and option type value held by the this instance.

```csharp
// Obtain an instance of GameMenuManager from the subsystem API first
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetVirtualMenuAndOptionType(menuContext);
```

### GetVirtualMenuIsWaitActive
`public bool GetVirtualMenuIsWaitActive(MenuContext menuContext)`

**Purpose:** Reads and returns the virtual menu is wait active value held by the this instance.

```csharp
// Obtain an instance of GameMenuManager from the subsystem API first
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetVirtualMenuIsWaitActive(menuContext);
```

### GetVirtualMenuTargetWaitHours
`public float GetVirtualMenuTargetWaitHours(MenuContext menuContext)`

**Purpose:** Reads and returns the virtual menu target wait hours value held by the this instance.

```csharp
// Obtain an instance of GameMenuManager from the subsystem API first
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetVirtualMenuTargetWaitHours(menuContext);
```

### GetVirtualMenuOptionIsEnabled
`public bool GetVirtualMenuOptionIsEnabled(MenuContext menuContext, int virtualMenuItemIndex)`

**Purpose:** Reads and returns the virtual menu option is enabled value held by the this instance.

```csharp
// Obtain an instance of GameMenuManager from the subsystem API first
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetVirtualMenuOptionIsEnabled(menuContext, 0);
```

### GetVirtualMenuOptionAmount
`public int GetVirtualMenuOptionAmount(MenuContext menuContext)`

**Purpose:** Reads and returns the virtual menu option amount value held by the this instance.

```csharp
// Obtain an instance of GameMenuManager from the subsystem API first
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetVirtualMenuOptionAmount(menuContext);
```

### GetVirtualMenuOptionIsLeave
`public bool GetVirtualMenuOptionIsLeave(MenuContext menuContext, int virtualMenuItemIndex)`

**Purpose:** Reads and returns the virtual menu option is leave value held by the this instance.

```csharp
// Obtain an instance of GameMenuManager from the subsystem API first
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetVirtualMenuOptionIsLeave(menuContext, 0);
```

### GetLeaveMenuOption
`public GameMenuOption GetLeaveMenuOption(MenuContext menuContext)`

**Purpose:** Reads and returns the leave menu option value held by the this instance.

```csharp
// Obtain an instance of GameMenuManager from the subsystem API first
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetLeaveMenuOption(menuContext);
```

### GetVirtualMenuOptionConditionsHold
`public bool GetVirtualMenuOptionConditionsHold(MenuContext menuContext, int virtualMenuItemIndex)`

**Purpose:** Reads and returns the virtual menu option conditions hold value held by the this instance.

```csharp
// Obtain an instance of GameMenuManager from the subsystem API first
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetVirtualMenuOptionConditionsHold(menuContext, 0);
```

### OnFrameTick
`public void OnFrameTick(MenuContext menuContext, float dt)`

**Purpose:** Invoked when the frame tick event is raised.

```csharp
// Obtain an instance of GameMenuManager from the subsystem API first
GameMenuManager gameMenuManager = ...;
gameMenuManager.OnFrameTick(menuContext, 0);
```

### GetMenuText
`public TextObject GetMenuText(MenuContext menuContext)`

**Purpose:** Reads and returns the menu text value held by the this instance.

```csharp
// Obtain an instance of GameMenuManager from the subsystem API first
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetMenuText(menuContext);
```

### AddGameMenu
`public void AddGameMenu(GameMenu gameMenu)`

**Purpose:** Adds game menu to the current collection or state.

```csharp
// Obtain an instance of GameMenuManager from the subsystem API first
GameMenuManager gameMenuManager = ...;
gameMenuManager.AddGameMenu(gameMenu);
```

### RemoveRelatedGameMenus
`public void RemoveRelatedGameMenus(object relatedObject)`

**Purpose:** Removes related game menus from the current collection or state.

```csharp
// Obtain an instance of GameMenuManager from the subsystem API first
GameMenuManager gameMenuManager = ...;
gameMenuManager.RemoveRelatedGameMenus(relatedObject);
```

### RemoveRelatedGameMenuOptions
`public void RemoveRelatedGameMenuOptions(object relatedObject)`

**Purpose:** Removes related game menu options from the current collection or state.

```csharp
// Obtain an instance of GameMenuManager from the subsystem API first
GameMenuManager gameMenuManager = ...;
gameMenuManager.RemoveRelatedGameMenuOptions(relatedObject);
```

### GetGameMenu
`public GameMenu GetGameMenu(string menuId)`

**Purpose:** Reads and returns the game menu value held by the this instance.

```csharp
// Obtain an instance of GameMenuManager from the subsystem API first
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetGameMenu("example");
```

## Usage Example

```csharp
var manager = GameMenuManager.Current;
```

## See Also

- [Area Index](../)