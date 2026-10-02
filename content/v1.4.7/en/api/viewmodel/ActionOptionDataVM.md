---
title: "ActionOptionDataVM"
description: "ActionOptionDataVM — class in TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions. 8 public members (0 static)."
---

<!-- v147-skeleton -->
# ActionOptionDataVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`  
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`  
**Type:** `public class ActionOptionDataVM : GenericOptionDataVM`  
**Base:** `GenericOptionDataVM`  
**Source:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/ActionOptionDataVM.cs`

## Overview

`ActionOptionDataVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends GenericOptionDataVM, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ActionOptionDataVM`.
- **Instance members** (7): `RefreshValues`, `Cancel`, `IsChanged`, `ResetData`, `SetValue`, `UpdateValue`, ….
- **Extension points** (7): `RefreshValues`, `Cancel`, `IsChanged`, `ResetData`, `SetValue`, `UpdateValue`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ApplyValue` | method (override) | Overrides the base member. Takes no arguments. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `Cancel` | method (override) | Overrides the base member. Takes no arguments. Capability check used to gate an operation. |
| `IsChanged` | method (override) | Overrides the base member. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `ResetData` | method (override) | Overrides the base member. Takes no arguments. Removes from or clears the collection this type owns. |
| `SetValue` | method (override) | Overrides the base member. Takes 1 argument: `float value`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `UpdateValue` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `ActionOptionDataVM` | ctor | Instance entry point. Takes 6 arguments: `Action onAction`, `OptionsVM optionsVM`, `IOptionData option`, `TextObject name`, …. Returns ``. |

- Constructed as `public ActionOptionDataVM(Action onAction, OptionsVM optionsVM, IOptionData option, TextObject name, TextObject optionActionName, TextObject description)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new ActionOptionDataVM(onAction, optionsVM, option, name, optionActionName, description);

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 7 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/ActionOptionDataVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GenericOptionDataVM](../GenericOptionDataVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`.
- [IOptionData](../../engine/IOptionData/) — `TaleWorlds.Engine.Options`.

Section: [api/viewmodel/](../) — the other types in this bucket.
