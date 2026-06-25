---
title: "MenuViewContext"
description: "Auto-generated class reference for MenuViewContext."
---
# MenuViewContext

**Namespace:** SandBox.View.Menu
**Module:** SandBox.View
**Type:** `public class MenuViewContext : IMenuContextHandler`
**Base:** `IMenuContextHandler`
**File:** `SandBox.View/Menu/MenuViewContext.cs`

## Overview

`MenuViewContext` lives in `SandBox.View.Menu` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Menu` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `MenuContext` | `public MenuContext MenuContext { get; }` |
| `MenuViews` | `public List<MenuView> MenuViews { get; }` |

## Key Methods

### UpdateMenuContext
`public void UpdateMenuContext(MenuContext menuContext)`

**Purpose:** Recalculates and stores the latest representation of menu context.

```csharp
// Obtain an instance of MenuViewContext from the subsystem API first
MenuViewContext menuViewContext = ...;
menuViewContext.UpdateMenuContext(menuContext);
```

### AddLayer
`public void AddLayer(ScreenLayer layer)`

**Purpose:** Adds layer to the current collection or state.

```csharp
// Obtain an instance of MenuViewContext from the subsystem API first
MenuViewContext menuViewContext = ...;
menuViewContext.AddLayer(layer);
```

### RemoveLayer
`public void RemoveLayer(ScreenLayer layer)`

**Purpose:** Removes layer from the current collection or state.

```csharp
// Obtain an instance of MenuViewContext from the subsystem API first
MenuViewContext menuViewContext = ...;
menuViewContext.RemoveLayer(layer);
```

### OnFrameTick
`public void OnFrameTick(float dt)`

**Purpose:** Invoked when the frame tick event is raised.

```csharp
// Obtain an instance of MenuViewContext from the subsystem API first
MenuViewContext menuViewContext = ...;
menuViewContext.OnFrameTick(0);
```

### OnResume
`public void OnResume()`

**Purpose:** Invoked when the resume event is raised.

```csharp
// Obtain an instance of MenuViewContext from the subsystem API first
MenuViewContext menuViewContext = ...;
menuViewContext.OnResume();
```

### OnHourlyTick
`public void OnHourlyTick()`

**Purpose:** Invoked when the hourly tick event is raised.

```csharp
// Obtain an instance of MenuViewContext from the subsystem API first
MenuViewContext menuViewContext = ...;
menuViewContext.OnHourlyTick();
```

### OnActivate
`public void OnActivate()`

**Purpose:** Invoked when the activate event is raised.

```csharp
// Obtain an instance of MenuViewContext from the subsystem API first
MenuViewContext menuViewContext = ...;
menuViewContext.OnActivate();
```

### OnDeactivate
`public void OnDeactivate()`

**Purpose:** Invoked when the deactivate event is raised.

```csharp
// Obtain an instance of MenuViewContext from the subsystem API first
MenuViewContext menuViewContext = ...;
menuViewContext.OnDeactivate();
```

### OnInitialize
`public void OnInitialize()`

**Purpose:** Invoked when the initialize event is raised.

```csharp
// Obtain an instance of MenuViewContext from the subsystem API first
MenuViewContext menuViewContext = ...;
menuViewContext.OnInitialize();
```

### OnFinalize
`public void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MenuViewContext from the subsystem API first
MenuViewContext menuViewContext = ...;
menuViewContext.OnFinalize();
```

### StopAllSounds
`public void StopAllSounds()`

**Purpose:** Stops the all sounds flow or state machine.

```csharp
// Obtain an instance of MenuViewContext from the subsystem API first
MenuViewContext menuViewContext = ...;
menuViewContext.StopAllSounds();
```

### OnMapConversationActivated
`public void OnMapConversationActivated()`

**Purpose:** Invoked when the map conversation activated event is raised.

```csharp
// Obtain an instance of MenuViewContext from the subsystem API first
MenuViewContext menuViewContext = ...;
menuViewContext.OnMapConversationActivated();
```

### OnMapConversationDeactivated
`public void OnMapConversationDeactivated()`

**Purpose:** Invoked when the map conversation deactivated event is raised.

```csharp
// Obtain an instance of MenuViewContext from the subsystem API first
MenuViewContext menuViewContext = ...;
menuViewContext.OnMapConversationDeactivated();
```

### OnGameStateDeactivate
`public void OnGameStateDeactivate()`

**Purpose:** Invoked when the game state deactivate event is raised.

```csharp
// Obtain an instance of MenuViewContext from the subsystem API first
MenuViewContext menuViewContext = ...;
menuViewContext.OnGameStateDeactivate();
```

### OnGameStateInitialize
`public void OnGameStateInitialize()`

**Purpose:** Invoked when the game state initialize event is raised.

```csharp
// Obtain an instance of MenuViewContext from the subsystem API first
MenuViewContext menuViewContext = ...;
menuViewContext.OnGameStateInitialize();
```

### OnGameStateFinalize
`public void OnGameStateFinalize()`

**Purpose:** Invoked when the game state finalize event is raised.

```csharp
// Obtain an instance of MenuViewContext from the subsystem API first
MenuViewContext menuViewContext = ...;
menuViewContext.OnGameStateFinalize();
```

### CloseCharacterDeveloper
`public void CloseCharacterDeveloper()`

**Purpose:** Closes the resource or UI associated with character developer.

```csharp
// Obtain an instance of MenuViewContext from the subsystem API first
MenuViewContext menuViewContext = ...;
menuViewContext.CloseCharacterDeveloper();
```

### RemoveMenuView
`public void RemoveMenuView(MenuView menuView)`

**Purpose:** Removes menu view from the current collection or state.

```csharp
// Obtain an instance of MenuViewContext from the subsystem API first
MenuViewContext menuViewContext = ...;
menuViewContext.RemoveMenuView(menuView);
```

### CloseTownManagement
`public void CloseTownManagement()`

**Purpose:** Closes the resource or UI associated with town management.

```csharp
// Obtain an instance of MenuViewContext from the subsystem API first
MenuViewContext menuViewContext = ...;
menuViewContext.CloseTownManagement();
```

### CloseRecruitVolunteers
`public void CloseRecruitVolunteers()`

**Purpose:** Closes the resource or UI associated with recruit volunteers.

```csharp
// Obtain an instance of MenuViewContext from the subsystem API first
MenuViewContext menuViewContext = ...;
menuViewContext.CloseRecruitVolunteers();
```

### CloseTournamentLeaderboard
`public void CloseTournamentLeaderboard()`

**Purpose:** Closes the resource or UI associated with tournament leaderboard.

```csharp
// Obtain an instance of MenuViewContext from the subsystem API first
MenuViewContext menuViewContext = ...;
menuViewContext.CloseTournamentLeaderboard();
```

### CloseTroopSelection
`public void CloseTroopSelection()`

**Purpose:** Closes the resource or UI associated with troop selection.

```csharp
// Obtain an instance of MenuViewContext from the subsystem API first
MenuViewContext menuViewContext = ...;
menuViewContext.CloseTroopSelection();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MenuViewContext menuViewContext = ...;
menuViewContext.UpdateMenuContext(menuContext);
```

## See Also

- [Area Index](../)