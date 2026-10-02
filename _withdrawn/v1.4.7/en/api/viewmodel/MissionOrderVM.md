---
title: "MissionOrderVM"
description: "MissionOrderVM — class in TaleWorlds.MountAndBlade.ViewModelCollection.Order. 42 public members (0 static)."
---

<!-- v147-skeleton -->
# MissionOrderVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order`  
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`  
**Type:** `public class MissionOrderVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderVM.cs`

## Overview

`MissionOrderVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 11 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MissionOrderVM`.
- **Instance members** (40): `CursorState`, `Team`, `OrderController`, `IsTroopPlacingActive`, `PlayerHasAnyTroopUnderThem`, `SelectedOrderSet`, ….
- **Extension points** (4): `CreateTroopController`, `RefreshValues`, `OnFinalize`, `OnOrderLayoutTypeChanged`.
- **Data and constants** (1): `InputRestrictions`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `OnOrderLayoutTypeChanged` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `AfterInitialize` | method | Instance entry point. Takes no arguments. |
| `ClassConfiguration` | property | Instance entry point `struct` property. Read it for current state; a declared setter writes that state in place. |
| `CreateTroopController` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `OrderController orderController`. Returns `MissionOrderTroopControllerVM`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CursorState` | property | Instance entry point `MissionOrderVM.CursorStates` property. Read it for current state; a declared setter writes that state in place. |
| `CursorStates` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `DisplayedOrderMessageForLastOrder` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `ExecuteSelectHighlightedFormation` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteToggleHighlightedFormation` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `FormationConfiguration` | property | Instance entry point `struct` property. Read it for current state; a declared setter writes that state in place. |
| `GetOrderSetAtIndex` | method | Instance entry point. Takes 1 argument: `int orderSetIndex`. Returns `OrderSetVM`. Read path: prefer it over reaching for the backing store. |
| `IsTroopPlacingActive` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnAfterDeploymentFinished` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnDeploymentFinished` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnEscape` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnFiltersSet` | method | Instance entry point. Takes 1 argument: `List<MissionOrderVM.FormationConfiguration> filterData`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnOrderExecuted` | method | Instance entry point. Takes 1 argument: `OrderItemVM orderItem`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTroopFormationSelected` | method | Instance entry point. Takes 1 argument: `int formationTroopIndex`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTroopHighlightSelection` | method | Instance entry point. Takes 1 argument: `bool isDirectionLeft`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OpenToggleOrder` | method | Instance entry point. Takes 2 arguments: `bool fromHold`, `bool displayMessage`. |
| `OrderController` | property | Instance entry point `OrderController` property. Read it for current state; a declared setter writes that state in place. |
| `OrderTargets` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |

- Constructed as `public MissionOrderVM(OrderController orderController, bool isDeployment, bool isMultiplayer)`.

18 further public members follow the same patterns.
## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new MissionOrderVM(orderController, isDeployment, isMultiplayer);
// viewModel.CursorState = ...;   // MissionOrderVM.CursorStates
// viewModel.Team = ...;   // Team
// viewModel.OrderController = ...;   // OrderController

// Command the widget invokes on confirm:
viewModel.CreateTroopController(orderController);
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [InputKeyItemVM](../../sandbox/InputKeyItemVM/) — `SandBox.ViewModelCollection.Input`.
- [MissionOrderDeploymentControllerVM](../MissionOrderDeploymentControllerVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.Order`.
- [MissionOrderTroopControllerVM](../MissionOrderTroopControllerVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.Order`.
- [MissionOrderCallbacks](../MissionOrderCallbacks/) — `TaleWorlds.MountAndBlade.ViewModelCollection.Order`.
- [InputRestrictions](../../gui/InputRestrictions/) — `TaleWorlds.ScreenSystem`.
- [TransferTroopsVisualOrder](../TransferTroopsVisualOrder/) — `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual`.
- [ReturnVisualOrder](../ReturnVisualOrder/) — `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.
- [VisualOrderExecutionParameters](../VisualOrderExecutionParameters/) — `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual`.
- [GameKey](../../system/GameKey/) — `TaleWorlds.InputSystem`.

Section: [api/viewmodel/](../) — the other types in this bucket.
