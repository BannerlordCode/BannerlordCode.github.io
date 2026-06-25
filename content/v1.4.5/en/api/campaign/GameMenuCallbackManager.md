---
title: "GameMenuCallbackManager"
description: "Auto-generated class reference for GameMenuCallbackManager."
---
# GameMenuCallbackManager

**Namespace:** TaleWorlds.CampaignSystem.GameMenus
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuCallbackManager`
**Base:** none
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameMenus/GameMenuCallbackManager.cs`

## Overview

`GameMenuCallbackManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `GameMenuCallbackManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnGameLoad
`public void OnGameLoad()`

**Purpose:** **Purpose:** Invoked when the game load event is raised.

```csharp
// Obtain an instance of GameMenuCallbackManager from the subsystem API first
GameMenuCallbackManager gameMenuCallbackManager = ...;
gameMenuCallbackManager.OnGameLoad();
```

### InitializeState
`public void InitializeState(string menuId, MenuContext state)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by state.

```csharp
// Obtain an instance of GameMenuCallbackManager from the subsystem API first
GameMenuCallbackManager gameMenuCallbackManager = ...;
gameMenuCallbackManager.InitializeState("example", state);
```

### OnConsequence
`public void OnConsequence(string menuId, GameMenuOption gameMenuOption, MenuContext state)`

**Purpose:** **Purpose:** Invoked when the consequence event is raised.

```csharp
// Obtain an instance of GameMenuCallbackManager from the subsystem API first
GameMenuCallbackManager gameMenuCallbackManager = ...;
gameMenuCallbackManager.OnConsequence("example", gameMenuOption, state);
```

### GetMenuOptionTooltip
`public TextObject GetMenuOptionTooltip(MenuContext menuContext, int menuItemNumber)`

**Purpose:** **Purpose:** Reads and returns the menu option tooltip value held by the this instance.

```csharp
// Obtain an instance of GameMenuCallbackManager from the subsystem API first
GameMenuCallbackManager gameMenuCallbackManager = ...;
var result = gameMenuCallbackManager.GetMenuOptionTooltip(menuContext, 0);
```

### GetVirtualMenuOptionTooltip
`public TextObject GetVirtualMenuOptionTooltip(MenuContext menuContext, int virtualMenuItemIndex)`

**Purpose:** **Purpose:** Reads and returns the virtual menu option tooltip value held by the this instance.

```csharp
// Obtain an instance of GameMenuCallbackManager from the subsystem API first
GameMenuCallbackManager gameMenuCallbackManager = ...;
var result = gameMenuCallbackManager.GetVirtualMenuOptionTooltip(menuContext, 0);
```

### GetVirtualMenuOptionText
`public TextObject GetVirtualMenuOptionText(MenuContext menuContext, int virtualMenuItemIndex)`

**Purpose:** **Purpose:** Reads and returns the virtual menu option text value held by the this instance.

```csharp
// Obtain an instance of GameMenuCallbackManager from the subsystem API first
GameMenuCallbackManager gameMenuCallbackManager = ...;
var result = gameMenuCallbackManager.GetVirtualMenuOptionText(menuContext, 0);
```

### GetMenuOptionText
`public TextObject GetMenuOptionText(MenuContext menuContext, int menuItemNumber)`

**Purpose:** **Purpose:** Reads and returns the menu option text value held by the this instance.

```csharp
// Obtain an instance of GameMenuCallbackManager from the subsystem API first
GameMenuCallbackManager gameMenuCallbackManager = ...;
var result = gameMenuCallbackManager.GetMenuOptionText(menuContext, 0);
```

## Usage Example

```csharp
var manager = GameMenuCallbackManager.Current;
```

## See Also

- [Area Index](../)