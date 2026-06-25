---
title: "GameMenuCallbackManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameMenuCallbackManager`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GameMenuCallbackManager

**Namespace:** TaleWorlds.CampaignSystem.GameMenus
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuCallbackManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/GameMenus/GameMenuCallbackManager.cs`

## Overview

`GameMenuCallbackManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `GameMenuCallbackManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Instance` | `public static GameMenuCallbackManager Instance { get; }` |

## Key Methods

### OnGameLoad
`public void OnGameLoad()`

**Purpose:** Called when the `game load` event is raised.

### InitializeState
`public void InitializeState(string menuId, MenuContext state)`

**Purpose:** Initializes the state, resources, or bindings for `state`.

### OnConsequence
`public void OnConsequence(string menuId, GameMenuOption gameMenuOption, MenuContext state)`

**Purpose:** Called when the `consequence` event is raised.

### GetMenuOptionTooltip
`public TextObject GetMenuOptionTooltip(MenuContext menuContext, int menuItemNumber)`

**Purpose:** Gets the current value of `menu option tooltip`.

### GetVirtualMenuOptionTooltip
`public TextObject GetVirtualMenuOptionTooltip(MenuContext menuContext, int virtualMenuItemIndex)`

**Purpose:** Gets the current value of `virtual menu option tooltip`.

### GetVirtualMenuOptionText
`public TextObject GetVirtualMenuOptionText(MenuContext menuContext, int virtualMenuItemIndex)`

**Purpose:** Gets the current value of `virtual menu option text`.

### GetMenuOptionText
`public TextObject GetMenuOptionText(MenuContext menuContext, int menuItemNumber)`

**Purpose:** Gets the current value of `menu option text`.

## Usage Example

```csharp
var manager = GameMenuCallbackManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)