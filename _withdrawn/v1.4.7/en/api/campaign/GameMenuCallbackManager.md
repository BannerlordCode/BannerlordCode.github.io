---
title: "GameMenuCallbackManager"
description: "GameMenuCallbackManager — class in TaleWorlds.CampaignSystem.GameMenus. 9 public members (1 static)."
---

<!-- v147-skeleton -->
# GameMenuCallbackManager

**Namespace:** `TaleWorlds.CampaignSystem.GameMenus`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class GameMenuCallbackManager`  
**Source:** `TaleWorlds.CampaignSystem/GameMenus/GameMenuCallbackManager.cs`

## Overview

`GameMenuCallbackManager` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GameMenuCallbackManager`.
- **Static entry points** (1): `Instance`.
- **Instance members** (7): `OnGameLoad`, `InitializeState`, `OnConsequence`, `GetMenuOptionTooltip`, `GetVirtualMenuOptionTooltip`, `GetVirtualMenuOptionText`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Instance` | property (static) | Static entry point `GameMenuCallbackManager` property. Read it for current state; a declared setter writes that state in place. |
| `GetMenuOptionText` | method | Instance entry point. Takes 2 arguments: `MenuContext menuContext`, `int menuItemNumber`. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetMenuOptionTooltip` | method | Instance entry point. Takes 2 arguments: `MenuContext menuContext`, `int menuItemNumber`. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetVirtualMenuOptionText` | method | Instance entry point. Takes 2 arguments: `MenuContext menuContext`, `int virtualMenuItemIndex`. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `GetVirtualMenuOptionTooltip` | method | Instance entry point. Takes 2 arguments: `MenuContext menuContext`, `int virtualMenuItemIndex`. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `InitializeState` | method | Instance entry point. Takes 2 arguments: `string menuId`, `MenuContext state`. |
| `OnConsequence` | method | Instance entry point. Takes 3 arguments: `string menuId`, `GameMenuOption gameMenuOption`, `MenuContext state`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnGameLoad` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `GameMenuCallbackManager` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public GameMenuCallbackManager()`.

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
var gameMenuCallbackManager = GameMenuCallbackManager.Instance;
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `TaleWorlds.CampaignSystem/GameMenus/GameMenuCallbackManager.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GameMenuInitializationHandler](../GameMenuInitializationHandler/) — `TaleWorlds.CampaignSystem.GameMenus`.
- [GameMenu](../GameMenu/) — `TaleWorlds.CampaignSystem.GameMenus`.
- [GameMenuEventHandlerDelegate](../GameMenuEventHandlerDelegate/) — `TaleWorlds.CampaignSystem.GameMenus`.
- [GameMenuEventHandler](../GameMenuEventHandler/) — `TaleWorlds.CampaignSystem.GameMenus`.

Section: [api/campaign/](../) — the other types in this bucket.
