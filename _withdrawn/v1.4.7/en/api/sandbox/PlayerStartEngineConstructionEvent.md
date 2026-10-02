---
title: "PlayerStartEngineConstructionEvent"
description: "PlayerStartEngineConstructionEvent — class in SandBox.ViewModelCollection.MapSiege. 2 public members (0 static)."
---

<!-- v147-skeleton -->
# PlayerStartEngineConstructionEvent

**Namespace:** `SandBox.ViewModelCollection.MapSiege`  
**Module:** `SandBox.ViewModelCollection`  
**Type:** `public class PlayerStartEngineConstructionEvent : EventBase`  
**Base:** `EventBase`  
**Source:** `SandBox.ViewModelCollection/MapSiege/PlayerStartEngineConstructionEvent.cs`

## Overview

`PlayerStartEngineConstructionEvent` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends EventBase, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `PlayerStartEngineConstructionEvent`.
- **Instance members** (1): `Engine`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Engine` | property | Instance entry point `SiegeEngineType` property. Read it for current state; a declared setter writes that state in place. |
| `PlayerStartEngineConstructionEvent` | ctor | Instance entry point. Takes 1 argument: `SiegeEngineType engine`. Returns ``. |

- Constructed as `public PlayerStartEngineConstructionEvent(SiegeEngineType engine)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new PlayerStartEngineConstructionEvent(engine);
// viewModel.Engine = ...;   // SiegeEngineType
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- The declaration in `SandBox.ViewModelCollection/MapSiege/PlayerStartEngineConstructionEvent.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [EventBase](../../core-extra/EventBase/) — `TaleWorlds.Library.EventSystem`.

Section: [api/sandbox/](../) — the other types in this bucket.
