---
title: "MissionOrderDeploymentControllerVM"
description: "MissionOrderDeploymentControllerVM — class in TaleWorlds.MountAndBlade.ViewModelCollection.Order. 17 public members (0 static)."
---

<!-- v147-skeleton -->
# MissionOrderDeploymentControllerVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order`  
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`  
**Type:** `public class MissionOrderDeploymentControllerVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderDeploymentControllerVM.cs`

## Overview

`MissionOrderDeploymentControllerVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MissionOrderDeploymentControllerVM`.
- **Instance members** (14): `OrderController`, `SetMissionParameters`, `SetCallbacks`, `RefreshValues`, `OnRefreshSelectedDeploymentPoint`, `OnEntityHover`, ….
- **Extension points** (2): `RefreshValues`, `OnFinalize`.
- **Data and constants** (2): `_entityHiglightColor`, `_entitySelectedColor`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `ExecuteAutoDeploy` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteBeginMission` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteCancelSelectedDeploymentPoint` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteDeployPlayerSide` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `FinalizeDeployment` | method | Instance entry point. Takes no arguments. |
| `OnEntityHover` | method | Instance entry point. Takes 1 argument: `WeakGameEntity hoveredEntity`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnEntitySelect` | method | Instance entry point. Takes 1 argument: `WeakGameEntity selectedEntity`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnRefreshSelectedDeploymentPoint` | method | Instance entry point. Takes 1 argument: `DeploymentSiegeMachineVM item`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OrderController` | property | Instance entry point `OrderController` property. Read it for current state; a declared setter writes that state in place. |
| `RefreshSelectedDeploymentPoint` | method | Instance entry point. Takes 1 argument: `DeploymentPoint selectedDeploymentPoint`. Called from the owner’s update loop — do not assume a frame boundary. |
| `SetCallbacks` | method | Instance entry point. Takes 1 argument: `MissionOrderCallbacks callbacks`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetMissionParameters` | method | Instance entry point. Takes 2 arguments: `Camera deploymentCamera`, `List<DeploymentPoint> deploymentPoints`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `_entityHiglightColor` | const | Instance entry point. Takes no arguments. Returns `uint`. |
| `_entitySelectedColor` | const | Instance entry point. Takes no arguments. Returns `uint`. |
| `MissionOrderDeploymentControllerVM` | ctor | Instance entry point. Takes 1 argument: `MissionOrderVM missionOrder`. Returns ``. |

- Constructed as `public MissionOrderDeploymentControllerVM(MissionOrderVM missionOrder)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new MissionOrderDeploymentControllerVM(missionOrder);
// viewModel.OrderController = ...;   // OrderController

// Command the widget invokes on confirm:
viewModel.SetMissionParameters(deploymentCamera, deploymentPoints);
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.ViewModelCollection/Order/MissionOrderDeploymentControllerVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [DeploymentSiegeMachineVM](../DeploymentSiegeMachineVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.Order`.
- [MissionOrderCallbacks](../MissionOrderCallbacks/) — `TaleWorlds.MountAndBlade.ViewModelCollection.Order`.
- [MissionOrderVM](../MissionOrderVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.Order`.
- [SiegeDeploymentHandler](../../mission-ext/SiegeDeploymentHandler/) — `TaleWorlds.MountAndBlade.Missions.Handlers`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.

Section: [api/viewmodel/](../) — the other types in this bucket.
