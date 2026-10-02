---
title: "MapSiegeProductionMachineVM"
description: "MapSiegeProductionMachineVM — class in SandBox.ViewModelCollection.MapSiege. 7 public members (0 static)."
---

<!-- v147-skeleton -->
# MapSiegeProductionMachineVM

**Namespace:** `SandBox.ViewModelCollection.MapSiege`  
**Module:** `SandBox.ViewModelCollection`  
**Type:** `public class MapSiegeProductionMachineVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `SandBox.ViewModelCollection/MapSiege/MapSiegeProductionMachineVM.cs`

## Overview

`MapSiegeProductionMachineVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (2): `MapSiegeProductionMachineVM`, `MapSiegeProductionMachineVM`.
- **Instance members** (5): `Engine`, `RefreshValues`, `OnSelection`, `ExecuteShowTooltip`, `ExecuteHideTooltip`.
- **Extension points** (1): `RefreshValues`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `Engine` | property | Instance entry point `SiegeEngineType` property. Read it for current state; a declared setter writes that state in place. |
| `ExecuteHideTooltip` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteShowTooltip` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnSelection` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `MapSiegeProductionMachineVM` | ctor | Instance entry point. Takes 3 arguments: `SiegeEngineType engineType`, `int number`, `Action<MapSiegeProductionMachineVM> onSelection`. Returns ``. |
| `MapSiegeProductionMachineVM` | ctor | Instance entry point. Takes 2 arguments: `Action<MapSiegeProductionMachineVM> onSelection`, `bool isCancel`. Returns ``. |

- Constructed as `public MapSiegeProductionMachineVM(SiegeEngineType engineType, int number, Action<MapSiegeProductionMachineVM> onSelection)`.
- Constructed as `public MapSiegeProductionMachineVM(Action<MapSiegeProductionMachineVM> onSelection, bool isCancel)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new MapSiegeProductionMachineVM(engineType, number, onSelection);
// viewModel.Engine = ...;   // SiegeEngineType

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.ViewModelCollection/MapSiege/MapSiegeProductionMachineVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.
- [SandBoxUIHelper](../SandBoxUIHelper/) — `SandBox.ViewModelCollection`.

Section: [api/sandbox/](../) — the other types in this bucket.
