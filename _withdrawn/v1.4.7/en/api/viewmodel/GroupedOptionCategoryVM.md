---
title: "GroupedOptionCategoryVM"
description: "GroupedOptionCategoryVM — class in TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions. 7 public members (0 static)."
---

<!-- v147-skeleton -->
# GroupedOptionCategoryVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`  
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`  
**Type:** `public class GroupedOptionCategoryVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GroupedOptionCategoryVM.cs`

## Overview

`GroupedOptionCategoryVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GroupedOptionCategoryVM`.
- **Instance members** (5): `AllOptions`, `RefreshValues`, `ResetData`, `ExecuteResetToDefault`, `GetOption`.
- **Extension points** (1): `RefreshValues`.
- **Data and constants** (1): `_options`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `AllOptions` | property | Instance entry point `IEnumerable<GenericOptionDataVM>` property. Read it for current state; a declared setter writes that state in place. |
| `ExecuteResetToDefault` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `GetOption` | method | Instance entry point. Takes 1 argument: `ManagedOptions.ManagedOptionsType optionType`. Returns `GenericOptionDataVM`. Read path: prefer it over reaching for the backing store. |
| `ResetData` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `GroupedOptionCategoryVM` | ctor | Instance entry point. Takes 5 arguments: `OptionsVM options`, `TextObject name`, `OptionCategory category`, `bool isEnabled`, …. Returns ``. |
| `_options` | field | Protected — for subclasses only `OptionsVM` field — direct storage with no validation or notification. |

- Constructed as `public GroupedOptionCategoryVM(OptionsVM options, TextObject name, OptionCategory category, bool isEnabled, bool isResetSupported = false)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new GroupedOptionCategoryVM(options, name, category, isEnabled, isResetSupported);
// viewModel.AllOptions = ...;   // IEnumerable<GenericOptionDataVM>

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.ViewModelCollection/GameOptions/GroupedOptionCategoryVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GenericOptionDataVM](../GenericOptionDataVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions`.
- [OptionCategory](../../mission-ext/OptionCategory/) — `TaleWorlds.MountAndBlade.Options`.
- [OptionGroup](../../mission-ext/OptionGroup/) — `TaleWorlds.MountAndBlade.Options`.
- [IOptionData](../../engine/IOptionData/) — `TaleWorlds.Engine.Options`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.

Section: [api/viewmodel/](../) — the other types in this bucket.
