---
title: "GameMenu"
description: "GameMenu — class in TaleWorlds.CampaignSystem.GameMenus. 49 public members (3 static)."
---

<!-- v147-skeleton -->
# GameMenu

**Namespace:** `TaleWorlds.CampaignSystem.GameMenus`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class GameMenu`  
**Source:** `TaleWorlds.CampaignSystem/GameMenus/GameMenu.cs`

## Overview

`GameMenu` is a named type in the TaleWorlds.CampaignSystem.GameMenus namespace. It groups the members that belong to one concept so that callers work against a single type instead of loose helpers and parallel collections.

## Mental Model

Model the type as the answer to "what does the game call this thing?". Its members divide into state you read, state you change, and operations that do the work. Keep those three groups straight when you extend it.

Assume the type is used from several subsystems at once: a member that looks private in practice (a setter, a public field) becomes part of the contract the moment someone uses it.

Concretely, the surface breaks down like this:

- **Static entry points** (3): `ActivateGameMenu`, `SwitchToMenu`, `ExitToLast`.
- **Instance members** (44): `Type`, `StringId`, `RelatedObject`, `MenuTitle`, `OverlayType`, `IsReady`, ….
- **Data and constants** (2): `OnInit`, `LastSelectedMenuObject`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ActivateGameMenu` | method (static) | Static entry point. Takes 1 argument: `string menuId`. |
| `ExitToLast` | method (static) | Static entry point. Takes no arguments. |
| `SwitchToMenu` | method (static) | Static entry point. Takes 1 argument: `string menuId`. |
| `AfterInit` | method | Instance entry point. Takes 1 argument: `MenuContext menuContext`. |
| `AutoSelectFirst` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `CurrentRepeatableIndex` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `CurrentRepeatableObject` | property | Instance entry point `object` property. Read it for current state; a declared setter writes that state in place. |
| `EndWait` | method | Instance entry point. Takes no arguments. |
| `GetGameMenuOption` | method | Instance entry point. Takes 1 argument: `int menuItemNumber`. Returns `GameMenuOption`. Read path: prefer it over reaching for the backing store. |
| `GetLeaveMenuOption` | method | Instance entry point. Takes 2 arguments: `Game game`, `MenuContext menuContext`. Returns `GameMenuOption`. Read path: prefer it over reaching for the backing store. |
| `GetMenuOptionConditionsHold` | method | Instance entry point. Takes 3 arguments: `Game game`, `MenuContext menuContext`, `int menuItemNumber`. Returns `bool`. Read path: prefer it over reaching for the backing store. |
| `GetMenuOptionIdString` | method | Instance entry point. Takes 1 argument: `int menuItemNumber`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `GetMenuOptionIsLeave` | method | Instance entry point. Takes 1 argument: `int menuItemNumber`. Returns `bool`. Read path: prefer it over reaching for the backing store. |
| `GetMenuOptionText` | method | Instance entry point. Takes 1 argument: `int menuItemNumber`. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetMenuOptionText2` | method | Instance entry point. Takes 1 argument: `int menuItemNumber`. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetMenuOptionTooltip` | method | Instance entry point. Takes 1 argument: `int menuItemNumber`. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetText` | method | Instance entry point. Takes no arguments. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `IsEmpty` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsReady` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsWaitActive` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsWaitMenu` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `MenuAndOptionType` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `MenuFlags` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `MenuItemAmount` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |

25 further public members follow the same patterns.
## Usage Example

```csharp
// Static entry points on GameMenu:
GameMenu.ActivateGameMenu(menuId);
GameMenu.SwitchToMenu(menuId);
GameMenu.ExitToLast();
```

## Risks and Boundaries

- Members that look like plain data usually have engine invariants behind them; writing them directly can leave the world out of sync.
- Objects owned by a subsystem are not thread-safe.
- Public fields and setters are API — renaming one breaks every mod that used it.
- The declaration in `TaleWorlds.CampaignSystem/GameMenus/GameMenu.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GameStateManager](../../core-extra/GameStateManager/) — `TaleWorlds.Core`.

Section: [api/campaign/](../) — the other types in this bucket.
