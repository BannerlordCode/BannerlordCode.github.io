---
title: "CharacterViewModel"
description: "CharacterViewModel — class in TaleWorlds.Core.ViewModelCollection. 13 public members (1 static)."
---

<!-- v147-skeleton -->
# CharacterViewModel

**Namespace:** `TaleWorlds.Core.ViewModelCollection`  
**Module:** `TaleWorlds.Core.ViewModelCollection`  
**Type:** `public class CharacterViewModel : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.Core.ViewModelCollection/CharacterViewModel.cs`

## Overview

`CharacterViewModel` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (2): `CharacterViewModel`, `CharacterViewModel`.
- **Instance members** (8): `SetEquipment`, `SetEquipment`, `FillFrom`, `FillFrom`, `ExecuteEquipWeaponAtIndex`, `ExecuteStartCustomAnimation`, ….
- **Extension points** (1): `SetEquipment`.
- **Data and constants** (3): `OnCustomAnimationFinished`, `_equipment`, `_bannerCode`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `SetEquipment` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `Equipment equipment`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `ExecuteEquipWeaponAtIndex` | method | Instance entry point. Takes 2 arguments: `EquipmentIndex index`, `bool isLeftHand`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteStartCustomAnimation` | method | Instance entry point. Takes 3 arguments: `string animation`, `bool loop`, `float loopInterval`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteStopCustomAnimation` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `FillFrom` | method | Instance entry point. Takes 3 arguments: `BasicCharacterObject character`, `int seed`, `string bannerCode`. |
| `FillFrom` | method | Instance entry point. Takes 2 arguments: `CharacterViewModel characterViewModel`, `int seed`. |
| `OnCustomAnimationFinished` | field (static) | Static entry point `Action<CharacterViewModel>` field — direct storage with no validation or notification. |
| `SetEquipment` | method | Instance entry point. Takes 2 arguments: `EquipmentIndex index`, `EquipmentElement item`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `StanceTypes` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `CharacterViewModel` | ctor | Instance entry point. Takes no arguments. Returns ``. |
| `CharacterViewModel` | ctor | Instance entry point. Takes 1 argument: `CharacterViewModel.StanceTypes stance`. Returns ``. |
| `_bannerCode` | field | Protected — for subclasses only `string` field — direct storage with no validation or notification. |
| `_equipment` | field | Protected — for subclasses only `Equipment` field — direct storage with no validation or notification. |

- Constructed as `public CharacterViewModel()`.
- Constructed as `public CharacterViewModel(CharacterViewModel.StanceTypes stance = CharacterViewModel.StanceTypes.None)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new CharacterViewModel();
// viewModel.StanceTypes = ...;   // enum

// Command the widget invokes on confirm:
viewModel.SetEquipment(index, item);
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.Core.ViewModelCollection/CharacterViewModel.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/viewmodel/](../) — the other types in this bucket.
