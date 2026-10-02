---
title: "ArmyCompositionGroupVM"
description: "ArmyCompositionGroupVM — class in TaleWorlds.MountAndBlade.CustomBattle. 9 public members (0 static)."
---

<!-- v147-skeleton -->
# ArmyCompositionGroupVM

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle`  
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`  
**Type:** `public class ArmyCompositionGroupVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.MountAndBlade.CustomBattle/ArmyCompositionGroupVM.cs`

## Overview

`ArmyCompositionGroupVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 3 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ArmyCompositionGroupVM`.
- **Instance members** (7): `RefreshValues`, `SetCurrentSelectedCulture`, `ExecuteRandomize`, `OnPlayerTypeChange`, `ArmySize`, `MaxArmySize`, ….
- **Extension points** (1): `RefreshValues`.
- **Data and constants** (1): `CompositionValues`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `ArmySize` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `ExecuteRandomize` | method | Instance entry point. Takes 1 argument: `ArmyCompositionGroupVM oppositeSide`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `MaxArmySize` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `MinArmySize` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `OnPlayerTypeChange` | method | Instance entry point. Takes 1 argument: `CustomBattlePlayerType playerType`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `SetCurrentSelectedCulture` | method | Instance entry point. Takes 1 argument: `BasicCultureObject selectedCulture`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `ArmyCompositionGroupVM` | ctor | Instance entry point. Takes 1 argument: `TroopTypeSelectionPopUpVM troopTypeSelectionPopUp`. Returns ``. |
| `CompositionValues` | field | Instance entry point `int[]` field — direct storage with no validation or notification. |

- Constructed as `public ArmyCompositionGroupVM(TroopTypeSelectionPopUpVM troopTypeSelectionPopUp)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new ArmyCompositionGroupVM(troopTypeSelectionPopUp);
// viewModel.ArmySize = ...;   // int
// viewModel.MaxArmySize = ...;   // int
// viewModel.MinArmySize = ...;   // int

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.CustomBattle/ArmyCompositionGroupVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ArmyCompositionItemVM](../ArmyCompositionItemVM/) — `TaleWorlds.MountAndBlade.CustomBattle`.
- [CustomBattlePlayerType](../CustomBattlePlayerType/) — `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`.

Section: [api/custombattle/](../) — the other types in this bucket.
