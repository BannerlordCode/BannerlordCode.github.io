---
title: "GenericOptionDataVM"
description: "GenericOptionDataVM — class in TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions. 17 public members (0 static)."
---

<!-- v147-skeleton -->
# GenericOptionDataVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`  
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`  
**Type:** `public abstract class GenericOptionDataVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GenericOptionDataVM.cs`

## Overview

`GenericOptionDataVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GenericOptionDataVM`.
- **Instance members** (14): `IsNative`, `IsAction`, `UpdateData`, `RefreshValues`, `GetOptionType`, `GetOptionData`, ….
- **Extension points** (8): `UpdateData`, `RefreshValues`, `UpdateValue`, `Cancel`, `IsChanged`, `SetValue`, ….
- **Data and constants** (2): `_optionsVM`, `Option`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `ApplyValue` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `Cancel` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Capability check used to gate an operation. |
| `IsChanged` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `ResetData` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Removes from or clears the collection this type owns. |
| `SetValue` | method (abstract) | Abstract — a subclass must supply it. Takes 1 argument: `float value`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `UpdateData` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `bool initUpdate`. Called from the owner’s update loop — do not assume a frame boundary. |
| `UpdateValue` | method (abstract) | Abstract — a subclass must supply it. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `GetOptionData` | method | Instance entry point. Takes no arguments. Returns `IOptionData`. Read path: prefer it over reaching for the backing store. |
| `GetOptionType` | method | Instance entry point. Takes no arguments. Returns `object`. Read path: prefer it over reaching for the backing store. |
| `IsAction` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsNative` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `ResetToDefault` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `UpdateEnableState` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `GenericOptionDataVM` | ctor | Protected — for subclasses only. Takes 5 arguments: `OptionsVM optionsVM`, `IOptionData option`, `TextObject name`, `TextObject description`, …. Returns ``. |
| `_optionsVM` | field | Protected — for subclasses only `OptionsVM` field — direct storage with no validation or notification. |
| `Option` | field | Protected — for subclasses only `IOptionData` field — direct storage with no validation or notification. |

- Constructed as `protected GenericOptionDataVM(OptionsVM optionsVM, IOptionData option, TextObject name, TextObject description, OptionsVM.OptionsDataType typeID)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new GenericOptionDataVM(optionsVM, option, name, description, typeID);
viewModel.IsNative = true;
viewModel.IsAction = true;

// Command the widget invokes on confirm:
viewModel.UpdateData(initUpdate);
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 8 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GenericOptionDataVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [IOptionData](../../engine/IOptionData/) — `TaleWorlds.Engine.Options`.
- [HintViewModel](../HintViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.

Section: [api/viewmodel/](../) — the other types in this bucket.
