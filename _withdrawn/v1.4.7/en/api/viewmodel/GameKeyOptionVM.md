---
title: "GameKeyOptionVM"
description: "GameKeyOptionVM — class in TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys. 8 public members (0 static)."
---

<!-- v147-skeleton -->
# GameKeyOptionVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys`  
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`  
**Type:** `public class GameKeyOptionVM : KeyOptionVM`  
**Base:** `KeyOptionVM`  
**Source:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GameKeys/GameKeyOptionVM.cs`

## Overview

`GameKeyOptionVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends KeyOptionVM, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GameKeyOptionVM`.
- **Instance members** (7): `CurrentGameKey`, `RefreshValues`, `Set`, `Update`, `OnDone`, `ExecuteRevert`, ….
- **Extension points** (5): `RefreshValues`, `Set`, `Update`, `OnDone`, `ExecuteRevert`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ExecuteRevert` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnDone` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `Set` | method (override) | Overrides the base member. Takes 1 argument: `InputKey newKey`. |
| `Update` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `Apply` | method | Instance entry point. Takes no arguments. |
| `CurrentGameKey` | property | Instance entry point `GameKey` property. Read it for current state; a declared setter writes that state in place. |
| `GameKeyOptionVM` | ctor | Instance entry point. Takes 6 arguments: `GameKey gameKey`, `Action<KeyOptionVM> onKeybindRequest`, `Action<GameKeyOptionVM`, `InputKey> onKeySet`, …. Returns ``. |

- Constructed as `public GameKeyOptionVM(GameKey gameKey, Action<KeyOptionVM> onKeybindRequest, Action<GameKeyOptionVM, InputKey> onKeySet, Func<GameKeyOptionVM, string> getExtraInformation)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new GameKeyOptionVM(gameKey, onKeybindRequest, theTarget, onKeySet, theTarget, getExtraInformation);
// viewModel.CurrentGameKey = ...;   // GameKey

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 5 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GameKeys/GameKeyOptionVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GameKey](../../system/GameKey/) — `TaleWorlds.InputSystem`.

Section: [api/viewmodel/](../) — the other types in this bucket.
