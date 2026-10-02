---
title: "BrightnessOptionVM"
description: "BrightnessOptionVM — class in TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions. 13 public members (0 static)."
---

<!-- v147-skeleton -->
# BrightnessOptionVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`  
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`  
**Type:** `public class BrightnessOptionVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/BrightnessOptionVM.cs`

## Overview

`BrightnessOptionVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 7 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `BrightnessOptionVM`.
- **Instance members** (12): `RefreshValues`, `ExecuteConfirm`, `ExecuteCancel`, `Value`, `InitialValue`, `InitialValue1`, ….
- **Extension points** (1): `RefreshValues`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `ExecuteCancel` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteConfirm` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `InitialValue` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `InitialValue1` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `InitialValue2` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `SetCancelInputKey` | method | Instance entry point. Takes 1 argument: `HotKey hotkey`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetConfirmInputKey` | method | Instance entry point. Takes 1 argument: `HotKey hotkey`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `Value` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `Value1` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `Value2` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `Visible` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `BrightnessOptionVM` | ctor | Instance entry point. Takes 1 argument: `Action<bool> onClose`. Returns ``. |

- Constructed as `public BrightnessOptionVM(Action<bool> onClose = null)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new BrightnessOptionVM(onClose);
// viewModel.Value = ...;   // int
// viewModel.InitialValue = ...;   // int
// viewModel.InitialValue1 = ...;   // float

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/BrightnessOptionVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [HotKey](../../system/HotKey/) — `TaleWorlds.InputSystem`.
- [InputKeyItemVM](../../sandbox/InputKeyItemVM/) — `SandBox.ViewModelCollection.Input`.

Section: [api/viewmodel/](../) — the other types in this bucket.
