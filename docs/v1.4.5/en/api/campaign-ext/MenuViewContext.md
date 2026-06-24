<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MenuViewContext`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MenuViewContext

**Namespace:** SandBox.View.Menu
**Module:** SandBox.View
**Type:** `public class MenuViewContext : IMenuContextHandler`
**Base:** `IMenuContextHandler`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.View/SandBox.View.Menu/MenuViewContext.cs`

## Overview

`MenuViewContext` lives in `SandBox.View.Menu` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Menu` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MenuViews` | `public List<MenuView> MenuViews { get; }` |

## Key Methods

### UpdateMenuContext
`public void UpdateMenuContext(MenuContext menuContext)`

**Purpose:** Updates the state or data of `menu context`.

### AddLayer
`public void AddLayer(ScreenLayer layer)`

**Purpose:** Adds `layer` to the current collection or state.

### RemoveLayer
`public void RemoveLayer(ScreenLayer layer)`

**Purpose:** Removes `layer` from the current collection or state.

### OnFrameTick
`public void OnFrameTick(float dt)`

**Purpose:** Called when the `frame tick` event is raised.

### OnResume
`public void OnResume()`

**Purpose:** Called when the `resume` event is raised.

### OnHourlyTick
`public void OnHourlyTick()`

**Purpose:** Called when the `hourly tick` event is raised.

### OnActivate
`public void OnActivate()`

**Purpose:** Called when the `activate` event is raised.

### OnDeactivate
`public void OnDeactivate()`

**Purpose:** Called when the `deactivate` event is raised.

### OnInitialize
`public void OnInitialize()`

**Purpose:** Called when the `initialize` event is raised.

### OnFinalize
`public void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### StopAllSounds
`public void StopAllSounds()`

**Purpose:** Handles logic related to `stop all sounds`.

### OnMapConversationActivated
`public void OnMapConversationActivated()`

**Purpose:** Called when the `map conversation activated` event is raised.

### OnMapConversationDeactivated
`public void OnMapConversationDeactivated()`

**Purpose:** Called when the `map conversation deactivated` event is raised.

### OnGameStateDeactivate
`public void OnGameStateDeactivate()`

**Purpose:** Called when the `game state deactivate` event is raised.

### OnGameStateInitialize
`public void OnGameStateInitialize()`

**Purpose:** Called when the `game state initialize` event is raised.

### OnGameStateFinalize
`public void OnGameStateFinalize()`

**Purpose:** Called when the `game state finalize` event is raised.

### CloseCharacterDeveloper
`public void CloseCharacterDeveloper()`

**Purpose:** Handles logic related to `close character developer`.

### RemoveMenuView
`public void RemoveMenuView(MenuView menuView)`

**Purpose:** Removes `menu view` from the current collection or state.

### CloseTownManagement
`public void CloseTownManagement()`

**Purpose:** Handles logic related to `close town management`.

### CloseRecruitVolunteers
`public void CloseRecruitVolunteers()`

**Purpose:** Handles logic related to `close recruit volunteers`.

### CloseTournamentLeaderboard
`public void CloseTournamentLeaderboard()`

**Purpose:** Handles logic related to `close tournament leaderboard`.

### CloseTroopSelection
`public void CloseTroopSelection()`

**Purpose:** Handles logic related to `close troop selection`.

## Usage Example

```csharp
var value = new MenuViewContext();
value.UpdateMenuContext(menuContext);
```

## See Also

- [Complete Class Catalog](../catalog)