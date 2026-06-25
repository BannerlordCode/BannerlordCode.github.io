---
title: "GameMenu"
description: "Auto-generated class reference for GameMenu."
---
# GameMenu

**Namespace:** TaleWorlds.CampaignSystem.GameMenus
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenu`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/GameMenus/GameMenu.cs`

## Overview

`GameMenu` lives in `TaleWorlds.CampaignSystem.GameMenus` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.GameMenus` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Type` | `public GameMenu.MenuAndOptionType Type { get; }` |
| `StringId` | `public string StringId { get; }` |
| `RelatedObject` | `public object RelatedObject { get; }` |
| `MenuTitle` | `public TextObject MenuTitle { get; }` |
| `OverlayType` | `public GameMenu.MenuOverlayType OverlayType { get; }` |
| `IsReady` | `public bool IsReady { get; }` |
| `MenuItemAmount` | `public int MenuItemAmount { get; }` |
| `CurrentRepeatableObject` | `public object CurrentRepeatableObject { get; }` |
| `IsWaitMenu` | `public bool IsWaitMenu { get; }` |
| `IsWaitActive` | `public bool IsWaitActive { get; }` |
| `IsEmpty` | `public bool IsEmpty { get; }` |
| `Progress` | `public float Progress { get; }` |
| `TargetWaitHours` | `public float TargetWaitHours { get; }` |
| `OnTick` | `public OnTickDelegate OnTick { get; }` |
| `OnCondition` | `public OnConditionDelegate OnCondition { get; }` |
| `OnConsequence` | `public OnConsequenceDelegate OnConsequence { get; }` |
| `CurrentRepeatableIndex` | `public int CurrentRepeatableIndex { get; set; }` |
| `MenuOptions` | `public IEnumerable<GameMenuOption> MenuOptions { get; }` |
| `AutoSelectFirst` | `public bool AutoSelectFirst { get; }` |

## Key Methods

### GetMenuOptionConditionsHold
`public bool GetMenuOptionConditionsHold(Game game, MenuContext menuContext, int menuItemNumber)`

**Purpose:** Reads and returns the `menu option conditions hold` value held by the current object.

```csharp
// Obtain an instance of GameMenu from the subsystem API first
GameMenu gameMenu = ...;
var result = gameMenu.GetMenuOptionConditionsHold(game, menuContext, 0);
```

### GetMenuOptionText
`public TextObject GetMenuOptionText(int menuItemNumber)`

**Purpose:** Reads and returns the `menu option text` value held by the current object.

```csharp
// Obtain an instance of GameMenu from the subsystem API first
GameMenu gameMenu = ...;
var result = gameMenu.GetMenuOptionText(0);
```

### GetGameMenuOption
`public GameMenuOption GetGameMenuOption(int menuItemNumber)`

**Purpose:** Reads and returns the `game menu option` value held by the current object.

```csharp
// Obtain an instance of GameMenu from the subsystem API first
GameMenu gameMenu = ...;
var result = gameMenu.GetGameMenuOption(0);
```

### GetMenuOptionText2
`public TextObject GetMenuOptionText2(int menuItemNumber)`

**Purpose:** Reads and returns the `menu option text2` value held by the current object.

```csharp
// Obtain an instance of GameMenu from the subsystem API first
GameMenu gameMenu = ...;
var result = gameMenu.GetMenuOptionText2(0);
```

### GetMenuOptionIdString
`public string GetMenuOptionIdString(int menuItemNumber)`

**Purpose:** Reads and returns the `menu option id string` value held by the current object.

```csharp
// Obtain an instance of GameMenu from the subsystem API first
GameMenu gameMenu = ...;
var result = gameMenu.GetMenuOptionIdString(0);
```

### GetMenuOptionTooltip
`public TextObject GetMenuOptionTooltip(int menuItemNumber)`

**Purpose:** Reads and returns the `menu option tooltip` value held by the current object.

```csharp
// Obtain an instance of GameMenu from the subsystem API first
GameMenu gameMenu = ...;
var result = gameMenu.GetMenuOptionTooltip(0);
```

### GetMenuOptionIsLeave
`public bool GetMenuOptionIsLeave(int menuItemNumber)`

**Purpose:** Reads and returns the `menu option is leave` value held by the current object.

```csharp
// Obtain an instance of GameMenu from the subsystem API first
GameMenu gameMenu = ...;
var result = gameMenu.GetMenuOptionIsLeave(0);
```

### SetProgressOfWaitingInMenu
`public void SetProgressOfWaitingInMenu(float progress)`

**Purpose:** Assigns a new value to `progress of waiting in menu` and updates the object's internal state.

```csharp
// Obtain an instance of GameMenu from the subsystem API first
GameMenu gameMenu = ...;
gameMenu.SetProgressOfWaitingInMenu(0);
```

### SetTargetedWaitingTimeAndInitialProgress
`public void SetTargetedWaitingTimeAndInitialProgress(float targetedWaitingTime, float initialProgress)`

**Purpose:** Assigns a new value to `targeted waiting time and initial progress` and updates the object's internal state.

```csharp
// Obtain an instance of GameMenu from the subsystem API first
GameMenu gameMenu = ...;
gameMenu.SetTargetedWaitingTimeAndInitialProgress(0, 0);
```

### GetLeaveMenuOption
`public GameMenuOption GetLeaveMenuOption(Game game, MenuContext menuContext)`

**Purpose:** Reads and returns the `leave menu option` value held by the current object.

```csharp
// Obtain an instance of GameMenu from the subsystem API first
GameMenu gameMenu = ...;
var result = gameMenu.GetLeaveMenuOption(game, menuContext);
```

### RunOnTick
`public void RunOnTick(MenuContext menuContext, float dt)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of GameMenu from the subsystem API first
GameMenu gameMenu = ...;
gameMenu.RunOnTick(menuContext, 0);
```

### RunWaitMenuCondition
`public bool RunWaitMenuCondition(MenuContext menuContext)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of GameMenu from the subsystem API first
GameMenu gameMenu = ...;
var result = gameMenu.RunWaitMenuCondition(menuContext);
```

### RunWaitMenuConsequence
`public void RunWaitMenuConsequence(MenuContext menuContext)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of GameMenu from the subsystem API first
GameMenu gameMenu = ...;
gameMenu.RunWaitMenuConsequence(menuContext);
```

### RunMenuOptionConsequence
`public void RunMenuOptionConsequence(MenuContext menuContext, int menuItemNumber)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of GameMenu from the subsystem API first
GameMenu gameMenu = ...;
gameMenu.RunMenuOptionConsequence(menuContext, 0);
```

### StartWait
`public void StartWait()`

**Purpose:** Starts the `wait` flow or state machine.

```csharp
// Obtain an instance of GameMenu from the subsystem API first
GameMenu gameMenu = ...;
gameMenu.StartWait();
```

### EndWait
`public void EndWait()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of GameMenu from the subsystem API first
GameMenu gameMenu = ...;
gameMenu.EndWait();
```

### RunOnInit
`public void RunOnInit(Game game, MenuContext menuContext)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of GameMenu from the subsystem API first
GameMenu gameMenu = ...;
gameMenu.RunOnInit(game, menuContext);
```

### PreInit
`public void PreInit(MenuContext menuContext)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of GameMenu from the subsystem API first
GameMenu gameMenu = ...;
gameMenu.PreInit(menuContext);
```

### AfterInit
`public void AfterInit(MenuContext menuContext)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of GameMenu from the subsystem API first
GameMenu gameMenu = ...;
gameMenu.AfterInit(menuContext);
```

### GetText
`public TextObject GetText()`

**Purpose:** Reads and returns the `text` value held by the current object.

```csharp
// Obtain an instance of GameMenu from the subsystem API first
GameMenu gameMenu = ...;
var result = gameMenu.GetText();
```

### ActivateGameMenu
`public static void ActivateGameMenu(string menuId)`

**Purpose:** Activates the resource, state, or feature associated with `game menu`.

```csharp
// Static call; no instance required
GameMenu.ActivateGameMenu("example");
```

### SwitchToMenu
`public static void SwitchToMenu(string menuId)`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
GameMenu.SwitchToMenu("example");
```

### ExitToLast
`public static void ExitToLast()`

**Purpose:** Performs the operation described by this method.

```csharp
// Static call; no instance required
GameMenu.ExitToLast();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
GameMenu gameMenu = ...;
gameMenu.GetMenuOptionConditionsHold(game, menuContext, 0);
```

## See Also

- [Area Index](../)