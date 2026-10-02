---
title: "GameStateManager"
description: "GameStateManager — class in TaleWorlds.Core. 20 public members (2 static)."
---

<!-- v147-skeleton -->
# GameStateManager

**Namespace:** `TaleWorlds.Core`  
**Module:** `TaleWorlds.Core`  
**Type:** `public class GameStateManager`  
**Source:** `TaleWorlds.Core/GameStateManager.cs`

## Overview

`GameStateManager` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GameStateManager`.
- **Static entry points** (1): `Current`.
- **Instance members** (17): `Listeners`, `CurrentType`, `Owner`, `GameStates`, `ActiveStateDisabledByUser`, `ActiveState`, ….
- **Data and constants** (1): `StateActivateCommand`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Current` | property (static) | Static entry point `GameStateManager` property. Read it for current state; a declared setter writes that state in place. |
| `ActiveState` | property | Instance entry point `GameState` property. Read it for current state; a declared setter writes that state in place. |
| `ActiveStateDisabledByUser` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `CleanAndPushState` | method | Instance entry point. Takes 2 arguments: `GameState gameState`, `int level`. |
| `CleanStates` | method | Instance entry point. Takes 1 argument: `int level`. |
| `CurrentType` | property | Instance entry point `GameStateManager.GameStateManagerType` property. Read it for current state; a declared setter writes that state in place. |
| `GameStateManagerType` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `GameStates` | property | Instance entry point `IEnumerable<GameState>` property. Read it for current state; a declared setter writes that state in place. |
| `Listeners` | property | Instance entry point `IReadOnlyCollection<IGameStateManagerListener>` property. Read it for current state; a declared setter writes that state in place. |
| `OnSavedGameLoadFinished` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTick` | method | Instance entry point. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `Owner` | property | Instance entry point `IGameStateManagerOwner` property. Read it for current state; a declared setter writes that state in place. |
| `PopState` | method | Instance entry point. Takes 1 argument: `int level`. Removes from or clears the collection this type owns. |
| `PushState` | method | Instance entry point. Takes 2 arguments: `GameState gameState`, `int level`. Adds to the collection or relation this type owns. |
| `RegisterActiveStateDisableRequest` | method | Instance entry point. Takes 1 argument: `object requestingInstance`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `RegisterListener` | method | Instance entry point. Takes 1 argument: `IGameStateManagerListener listener`. Returns `bool`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `StateActivateCommand` | field (static) | Static entry point `string` field — direct storage with no validation or notification. |
| `UnregisterActiveStateDisableRequest` | method | Instance entry point. Takes 1 argument: `object requestingInstance`. Removes from or clears the collection this type owns. |
| `UnregisterListener` | method | Instance entry point. Takes 1 argument: `IGameStateManagerListener listener`. Returns `bool`. Removes from or clears the collection this type owns. |
| `GameStateManager` | ctor | Instance entry point. Takes 2 arguments: `IGameStateManagerOwner owner`, `GameStateManager.GameStateManagerType gameStateManagerType`. Returns ``. |

- Constructed as `public GameStateManager(IGameStateManagerOwner owner, GameStateManager.GameStateManagerType gameStateManagerType)`.

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
var gameStateManager = GameStateManager.Current;
// Read the live state through gameStateManager.Listeners.
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- The declaration in `TaleWorlds.Core/GameStateManager.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/core-extra/](../) — the other types in this bucket.
