---
title: "MissionOrderTroopControllerVM"
description: "MissionOrderTroopControllerVM — class in TaleWorlds.MountAndBlade.ViewModelCollection.Order. 38 public members (0 static)."
---

<!-- v147-skeleton -->
# MissionOrderTroopControllerVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order`  
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`  
**Type:** `public class MissionOrderTroopControllerVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderTroopControllerVM.cs`

## Overview

`MissionOrderTroopControllerVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 3 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MissionOrderTroopControllerVM`.
- **Instance members** (32): `TroopList`, `Team`, `OrderController`, `RefreshValues`, `OnFinalize`, `ExecuteSelectAll`, ….
- **Extension points** (6): `RefreshValues`, `OnFinalize`, `SelectAllFormations`, `AddSelectedFormation`, `CreateTroopItemVM`, `OnAfterNewTroopItemAdded`.
- **Data and constants** (5): `MissionOrder`, `OnTransferFinished`, `FilterData`, `IsDeployment`, `FormationIndexComparer`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `AddSelectedFormation` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `OrderTroopItemVM item`. Adds to the collection or relation this type owns. |
| `SelectAllFormations` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `bool uiFeedback`. |
| `AddTroops` | method | Instance entry point. Takes 1 argument: `Agent agent`. Adds to the collection or relation this type owns. |
| `CreateTroopItemVM` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 4 arguments: `Formation formation`, `Action<OrderTroopItemVM> onSelectFormation`, `Func<Formation`, `int> getFormationMorale`. Returns `OrderTroopItemVM`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `ExecuteCancelTransfer` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteConfirmTransfer` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteReset` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteSelectAll` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteSelectTransferTroop` | method | Instance entry point. Takes 1 argument: `OrderTroopItemVM targetTroop`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `IntervalUpdate` | method | Instance entry point. Takes no arguments. |
| `OnAfterDeploymentFinished` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnAfterNewTroopItemAdded` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnDeploymentFinished` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnDeselectFormation` | method | Instance entry point. Takes 1 argument: `int index`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnFiltersSet` | method | Instance entry point. Takes 1 argument: `List<MissionOrderVM.FormationConfiguration> filterData`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnSelectFormation` | method | Instance entry point. Takes 1 argument: `OrderTroopItemVM item`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnSelectFormationWithIndex` | method | Instance entry point. Takes 1 argument: `int formationTroopIndex`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTroopOrderIssued` | method | Instance entry point. Takes 2 arguments: `List<OrderTroopItemVM> selectedFormations`, `OrderItemVM orderItem`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshTroopFormationTargetVisuals` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `RemoveTroops` | method | Instance entry point. Takes 1 argument: `Agent agent`. Removes from or clears the collection this type owns. |
| `SetCancelInputKey` | method | Instance entry point. Takes 1 argument: `HotKey hotKey`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetCurrentActiveOrders` | method | Instance entry point. Takes no arguments. Write path: where the engine offers a matching Action or owner method, prefer that instead. |

- Constructed as `public MissionOrderTroopControllerVM(MissionOrderVM missionOrder, bool isDeployment, Action onTransferFinised)`.

14 further public members follow the same patterns.
## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new MissionOrderTroopControllerVM(missionOrder, isDeployment, onTransferFinised);
// viewModel.TroopList = ...;   // MBList<OrderTroopItemVM>
// viewModel.Team = ...;   // Team
// viewModel.OrderController = ...;   // OrderController

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 6 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderTroopControllerVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MissionOrderVM](../MissionOrderVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.Order`.
- [Min](../../core-extra/Min/) — `TaleWorlds.LinQuick`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.
- [Controller](../../core-extra/Controller/) — `TaleWorlds.DotNet`.
- [InputKeyItemVM](../../sandbox/InputKeyItemVM/) — `SandBox.ViewModelCollection.Input`.
- [HotKey](../../system/HotKey/) — `TaleWorlds.InputSystem`.

Section: [api/viewmodel/](../) — the other types in this bucket.
