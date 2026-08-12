---
title: "GameMenuManager"
description: "Runtime manager for the campaign game-menu subsystem: registers and looks up game menus, drives menu transitions, and evaluates the text, tooltip, and availability of virtual menu options."
---
# GameMenuManager

**Namespace:** TaleWorlds.CampaignSystem.GameMenus
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/GameMenus/GameMenuManager.cs`

Coordinates the campaign-layer game-menu subsystem — registering menus, switching between them, and resolving what each menu option shows and does — without touching the battle (`Mission`) or UI (Gauntlet) layers.

## Overview

`GameMenuManager` is the runtime manager for the menu subsystem in the `TaleWorlds.CampaignSystem` namespace. It runs in the Campaign simulation layer — not in the UI presentation layer and not in the `Mission` combat layer. It is responsible for registering and looking up game menus (`AddGameMenu` / `GetGameMenu`), for navigating between menus (`NextMenu` / `SetNextMenu`), and for evaluating and refreshing the text, tooltips, and availability of virtual menu options. It is created by `Campaign` at campaign start and held as a singleton, so that each `CampaignBehavior` can query and drive the menu flow through a `MenuContext`. Use it when you need to open, switch, or read a game menu from code; do not depend on it directly for pure UI presentation or combat logic.

## Mental Model

`GameMenuManager` lives in the Campaign simulation layer and is the central coordinator of the menu subsystem: `Campaign` creates it at campaign start and holds it as a singleton, and it does not participate directly in combat (`Mission`) or presentation (Gauntlet UI). It maintains a menu registry (`AddGameMenu` / `GetGameMenu`), resolves the text, tooltip, and availability of virtual menu options inside a `MenuContext`, and drives menu transitions. When your `CampaignBehavior` needs to open or switch a game menu from a map menu, read the current menu state, or refresh option display, reach for it through `Campaign.Current.GameMenuManager`; if you are only doing UI presentation or combat logic, take the UI / `Mission` path instead of depending on this manager.

## When to use

- Open, switch, or read the state of a campaign game menu from code (typically inside a `CampaignBehavior` menu callback), drive a menu transition with `SetNextMenu`, or re-evaluate an option's text/availability after underlying state changes via `RefreshMenuOptions`.
- Look up a registered `GameMenu` by id, or remove menus/options that were registered against a specific `RelatedObject`.

## When NOT to use

- Pure UI presentation or layout — go through the Gauntlet UI / Widget layer instead.
- Battle or combat logic — that belongs to the `Mission` layer, not the campaign menu manager.
- Directly mutating a `GameMenu`'s fields instead of routing through the manager's refresh/evaluation methods. Prefer `RefreshMenuOptions` / `RefreshMenuOptionConditions` so the displayed UI stays in sync with the underlying state.

## Key Properties

| Name | Signature |
|------|-----------|
| `NextGameMenuId` | `public string NextGameMenuId { get; }` |
| `NextMenu` | `public GameMenu NextMenu { get; }` |

## Key Methods

### Registration and lookup

These methods own the menu registry (a `Dictionary<string, GameMenu>` keyed by `GameMenu.StringId`). Call them from campaign setup or cleanup; `GetGameMenu` returns `null` when the id is absent.

#### AddGameMenu
`public void AddGameMenu(GameMenu gameMenu)`

**Purpose:** Registers a game menu in the manager's registry, keyed by `gameMenu.StringId`.

```csharp
// Obtain the GameMenuManager instance from the subsystem API first
GameMenuManager gameMenuManager = ...;
gameMenuManager.AddGameMenu(gameMenu);
```

#### GetGameMenu
`public GameMenu GetGameMenu(string menuId)`

**Purpose:** Looks up and returns the registered `GameMenu` for `menuId` (or `null` if not found).

```csharp
// Obtain the GameMenuManager instance from the subsystem API first
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetGameMenu("example");
```

#### RemoveRelatedGameMenus
`public void RemoveRelatedGameMenus(object relatedObject)`

**Purpose:** Removes every registered `GameMenu` whose `RelatedObject` equals `relatedObject`.

```csharp
// Obtain the GameMenuManager instance from the subsystem API first
GameMenuManager gameMenuManager = ...;
gameMenuManager.RemoveRelatedGameMenus(relatedObject);
```

#### RemoveRelatedGameMenuOptions
`public void RemoveRelatedGameMenuOptions(object relatedObject)`

**Purpose:** Removes every `GameMenuOption` whose `RelatedObject` equals `relatedObject` across all registered menus.

```csharp
// Obtain the GameMenuManager instance from the subsystem API first
GameMenuManager gameMenuManager = ...;
gameMenuManager.RemoveRelatedGameMenuOptions(relatedObject);
```

### Navigation and transitions

#### SetNextMenu
`public void SetNextMenu(string name)`

**Purpose:** Sets `NextGameMenuId` to `name`, updating the next-menu state. `NextMenu` then resolves it through the registry.

```csharp
// Obtain the GameMenuManager instance from the subsystem API first
GameMenuManager gameMenuManager = ...;
gameMenuManager.SetNextMenu("example");
```

#### ExitToLast
`public void ExitToLast()`

**Purpose:** Exits the current menu mode back to the last map state (via `Game.Current.GameStateManager.LastOrDefault<MapState>().ExitMenuMode()`), only when a menu context is active.

```csharp
// Obtain the GameMenuManager instance from the subsystem API first
GameMenuManager gameMenuManager = ...;
gameMenuManager.ExitToLast();
```

### Repeatable selection

#### SetCurrentRepeatableIndex
`public void SetCurrentRepeatableIndex(MenuContext menuContext, int index)`

**Purpose:** Sets `menuContext.GameMenu.CurrentRepeatableIndex` to `index`. Throws `MBMisuseException` if `menuContext.GameMenu` is null.

```csharp
// Obtain the GameMenuManager instance from the subsystem API first
GameMenuManager gameMenuManager = ...;
gameMenuManager.SetCurrentRepeatableIndex(menuContext, 0);
```

### Menu text and state evaluation

These readers resolve the displayed strings and state of the *virtual* menu options — the flattened view that accounts for repeat objects. They require an active `MenuContext` with a non-null `GameMenu`; otherwise they throw `MBMisuseException`.

#### GetMenuText
`public TextObject GetMenuText(MenuContext menuContext)`

**Purpose:** Returns the menu's `TextObject` (or throws `MBMisuseException` when no menu is active).

```csharp
// Obtain the GameMenuManager instance from the subsystem API first
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetMenuText(menuContext);
```

#### GetMenuOptionIdString
`public string GetMenuOptionIdString(MenuContext menuContext, int menuItemNumber)`

**Purpose:** Returns the id string of the menu option at `menuItemNumber` (empty string when no menu is active).

```csharp
// Obtain the GameMenuManager instance from the subsystem API first
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetMenuOptionIdString(menuContext, 0);
```

#### GetVirtualMenuOptionText
`public TextObject GetVirtualMenuOptionText(MenuContext menuContext, int virtualMenuItemIndex)`

**Purpose:** Returns the displayed text of the virtual menu option at `virtualMenuItemIndex`.

```csharp
// Obtain the GameMenuManager instance from the subsystem API first
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetVirtualMenuOptionText(menuContext, 0);
```

#### GetVirtualMenuOptionText2
`public TextObject GetVirtualMenuOptionText2(MenuContext menuContext, int virtualMenuItemIndex)`

**Purpose:** Returns the secondary displayed text of the virtual menu option at `virtualMenuItemIndex`.

```csharp
// Obtain the GameMenuManager instance from the subsystem API first
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetVirtualMenuOptionText2(menuContext, 0);
```

#### GetVirtualMenuOptionTooltip
`public TextObject GetVirtualMenuOptionTooltip(MenuContext menuContext, int virtualMenuItemIndex)`

**Purpose:** Returns the tooltip of the virtual menu option at `virtualMenuItemIndex`.

```csharp
// Obtain the GameMenuManager instance from the subsystem API first
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetVirtualMenuOptionTooltip(menuContext, 0);
```

#### GetMenuOverlayType
`public GameMenu.MenuOverlayType GetMenuOverlayType(MenuContext menuContext)`

**Purpose:** Returns the menu's overlay type (defaults to `GameMenu.MenuOverlayType.SettlementWithCharacters` when no menu is active).

```csharp
// Obtain the GameMenuManager instance from the subsystem API first
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetMenuOverlayType(menuContext);
```

#### GetVirtualMenuAndOptionType
`public GameMenu.MenuAndOptionType GetVirtualMenuAndOptionType(MenuContext menuContext)`

**Purpose:** Returns the combined menu/option type (defaults to `GameMenu.MenuAndOptionType.RegularMenuOption` when no menu is active).

```csharp
// Obtain the GameMenuManager instance from the subsystem API first
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetVirtualMenuAndOptionType(menuContext);
```

#### GetVirtualMenuProgress
`public float GetVirtualMenuProgress(MenuContext menuContext)`

**Purpose:** Returns the menu's wait progress (0 when no menu is active).

```csharp
// Obtain the GameMenuManager instance from the subsystem API first
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetVirtualMenuProgress(menuContext);
```

#### GetVirtualMenuIsWaitActive
`public bool GetVirtualMenuIsWaitActive(MenuContext menuContext)`

**Purpose:** Returns whether the menu's wait is active (false when no menu is active).

```csharp
// Obtain the GameMenuManager instance from the subsystem API first
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetVirtualMenuIsWaitActive(menuContext);
```

#### GetVirtualMenuTargetWaitHours
`public float GetVirtualMenuTargetWaitHours(MenuContext menuContext)`

**Purpose:** Returns the menu's target wait hours (0 when no menu is active).

```csharp
// Obtain the GameMenuManager instance from the subsystem API first
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetVirtualMenuTargetWaitHours(menuContext);
```

#### GetVirtualMenuOptionAmount
`public int GetVirtualMenuOptionAmount(MenuContext menuContext)`

**Purpose:** Returns the total number of virtual menu options (base item count plus repeat objects).

```csharp
// Obtain the GameMenuManager instance from the subsystem API first
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetVirtualMenuOptionAmount(menuContext);
```

#### GetVirtualGameMenuOption
`public GameMenuOption GetVirtualGameMenuOption(MenuContext menuContext, int virtualMenuItemIndex)`

**Purpose:** Returns the `GameMenuOption` at the virtual index (throws `MBMisuseException` when no menu is active).

```csharp
// Obtain the GameMenuManager instance from the subsystem API first
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetVirtualGameMenuOption(menuContext, 0);
```

#### GetLeaveMenuOption
`public GameMenuOption GetLeaveMenuOption(MenuContext menuContext)`

**Purpose:** Returns the menu's leave option (or `null` when no menu is active).

```csharp
// Obtain the GameMenuManager instance from the subsystem API first
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetLeaveMenuOption(menuContext);
```

### Conditions and availability

#### GetMenuOptionConditionsHold
`public bool GetMenuOptionConditionsHold(MenuContext menuContext, int menuItemNumber)`

**Purpose:** Evaluates whether the conditions for the menu option at `menuItemNumber` hold. Throws `MBNullParameterException("Game")` when `Game.Current` is null, and `MBMisuseException` when no menu is active.

```csharp
// Obtain the GameMenuManager instance from the subsystem API first
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetMenuOptionConditionsHold(menuContext, 0);
```

#### GetVirtualMenuOptionConditionsHold
`public bool GetVirtualMenuOptionConditionsHold(MenuContext menuContext, int virtualMenuItemIndex)`

**Purpose:** Evaluates whether the conditions for the virtual menu option hold.

```csharp
// Obtain the GameMenuManager instance from the subsystem API first
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetVirtualMenuOptionConditionsHold(menuContext, 0);
```

#### GetVirtualMenuOptionIsEnabled
`public bool GetVirtualMenuOptionIsEnabled(MenuContext menuContext, int virtualMenuItemIndex)`

**Purpose:** Returns whether the virtual menu option is enabled.

```csharp
// Obtain the GameMenuManager instance from the subsystem API first
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetVirtualMenuOptionIsEnabled(menuContext, 0);
```

#### GetVirtualMenuOptionIsLeave
`public bool GetVirtualMenuOptionIsLeave(MenuContext menuContext, int virtualMenuItemIndex)`

**Purpose:** Returns whether the virtual menu option is the leave option.

```csharp
// Obtain the GameMenuManager instance from the subsystem API first
GameMenuManager gameMenuManager = ...;
var result = gameMenuManager.GetVirtualMenuOptionIsLeave(menuContext, 0);
```

### Refresh

#### RefreshMenuOptions
`public void RefreshMenuOptions(MenuContext menuContext)`

**Purpose:** Triggers `menuContext.Handler.OnMenuRefresh()` so the displayed options reflect the underlying state. Fails an assert when `menuContext.GameMenu` is null or `Game.Current` is null.

```csharp
// Obtain the GameMenuManager instance from the subsystem API first
GameMenuManager gameMenuManager = ...;
gameMenuManager.RefreshMenuOptions(menuContext);
```

#### RefreshMenuOptionConditions
`public void RefreshMenuOptionConditions(MenuContext menuContext)`

**Purpose:** Re-evaluates `GetMenuOptionConditionsHold` for every virtual menu option. Fails an assert when `menuContext.GameMenu` is null or `Game.Current` is null.

```csharp
// Obtain the GameMenuManager instance from the subsystem API first
GameMenuManager gameMenuManager = ...;
gameMenuManager.RefreshMenuOptionConditions(menuContext);
```

### Execution and tick

#### RunConsequencesOfMenuOption
`public void RunConsequencesOfMenuOption(MenuContext menuContext, int menuItemNumber)`

**Purpose:** Runs the consequence of the menu option at `menuItemNumber`. Throws `MBNullParameterException("Game")` when `Game.Current` is null, and `MBMisuseException` when no menu is active.

```csharp
// Obtain the GameMenuManager instance from the subsystem API first
GameMenuManager gameMenuManager = ...;
gameMenuManager.RunConsequencesOfMenuOption(menuContext, 0);
```

#### OnFrameTick
`public void OnFrameTick(MenuContext menuContext, float dt)`

**Purpose:** Called on each frame tick; forwards to `menuContext.GameMenu.RunOnTick(menuContext, dt)` when a menu is active.

```csharp
// Obtain the GameMenuManager instance from the subsystem API first
GameMenuManager gameMenuManager = ...;
gameMenuManager.OnFrameTick(menuContext, 0);
```

## Usage Example

```csharp
// Inside a CampaignBehavior menu callback, get the manager through Campaign.Current
GameMenuManager manager = Campaign.Current.GameMenuManager;
GameMenu townMenu = manager.GetGameMenu("town");
MenuContext context = Campaign.Current.CurrentMenuContext;
manager.RefreshMenuOptions(context);
```

## Dependencies

- [GameMenu](../GameMenu/) — the menu data model that this manager registers and looks up.
- [GameMenuOption](../GameMenuOption/) — the menu option whose text, tooltip, and availability this manager evaluates and refreshes.
- [Campaign-ext API index](../)

## Risk

- **Active-menu requirement:** nearly every evaluation/refresh reader requires an active `MenuContext` whose `GameMenu` is non-null. Calling them when no menu is active throws `MBMisuseException` ("Current game menu empty, can not run ..."). Guard with `Campaign.Current.CurrentMenuContext?.GameMenu != null`, or only call from within a menu callback.
- **Running-game requirement:** `GetMenuOptionConditionsHold`, `RefreshMenuOptions`, and `RefreshMenuOptionConditions` depend on `Game.Current`. When `Game.Current` is `null` (outside a running game) they throw `MBNullParameterException("Game")` or fail a `Debug.FailedAssert`.
- **Null returns:** `GetGameMenu(string)` and the `NextMenu` property return `null` when the id is not in the registry (`Dictionary.TryGetValue`). Always null-check before use; do not assume a menu exists.
- **Duplicate registration:** registration is keyed by `GameMenu.StringId`; calling `AddGameMenu` with a duplicate `StringId` throws (dictionary `Add`). Ensure unique ids across modules.
- **Reference-based removal:** `RemoveRelatedGameMenus` / `RemoveRelatedGameMenuOptions` match by `RelatedObject` reference equality. Passing the wrong object purges menus or options unexpectedly.

## See Also

- ↑ Parent: [Campaign-ext API index](../)
- ↔ Siblings: [GameMenu](../GameMenu/), [GameMenuOption](../GameMenuOption/)
