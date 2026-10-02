---
title: "GameplayCheatsVM"
description: "GameplayCheatsVM — class in SandBox.ViewModelCollection.Map.Cheat. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# GameplayCheatsVM

**Namespace:** `SandBox.ViewModelCollection.Map.Cheat`  
**Module:** `SandBox.ViewModelCollection`  
**Type:** `public class GameplayCheatsVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `SandBox.ViewModelCollection/Map/Cheat/GameplayCheatsVM.cs`

## Overview

`GameplayCheatsVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GameplayCheatsVM`.
- **Instance members** (4): `RefreshValues`, `OnFinalize`, `ExecuteClose`, `SetCloseInputKey`.
- **Extension points** (2): `RefreshValues`, `OnFinalize`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `ExecuteClose` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `SetCloseInputKey` | method | Instance entry point. Takes 1 argument: `HotKey hotKey`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `GameplayCheatsVM` | ctor | Instance entry point. Takes 2 arguments: `Action onClose`, `IEnumerable<GameplayCheatBase> cheats`. Returns ``. |

- Constructed as `public GameplayCheatsVM(Action onClose, IEnumerable<GameplayCheatBase> cheats)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new GameplayCheatsVM(onClose, cheats);

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.ViewModelCollection/Map/Cheat/GameplayCheatsVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [CheatItemBaseVM](../CheatItemBaseVM/) — `SandBox.ViewModelCollection.Map.Cheat`.
- [CheatGroupItemVM](../CheatGroupItemVM/) — `SandBox.ViewModelCollection.Map.Cheat`.
- [InputKeyItemVM](../InputKeyItemVM/) — `SandBox.ViewModelCollection.Input`.
- [CheatActionItemVM](../CheatActionItemVM/) — `SandBox.ViewModelCollection.Map.Cheat`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.
- [HotKey](../../system/HotKey/) — `TaleWorlds.InputSystem`.

Section: [api/sandbox/](../) — the other types in this bucket.
