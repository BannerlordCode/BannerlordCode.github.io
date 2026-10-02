---
title: "DeploymentSiegeMachineVM"
description: "DeploymentSiegeMachineVM — class in TaleWorlds.MountAndBlade.ViewModelCollection.Order. 16 public members (0 static)."
---

<!-- v147-skeleton -->
# DeploymentSiegeMachineVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order`  
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`  
**Type:** `public class DeploymentSiegeMachineVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.MountAndBlade.ViewModelCollection/Order/DeploymentSiegeMachineVM.cs`

## Overview

`DeploymentSiegeMachineVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 4 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `DeploymentSiegeMachineVM`.
- **Instance members** (12): `DeploymentPoint`, `RefreshValues`, `Update`, `CalculatePosition`, `RefreshPosition`, `ExecuteAction`, ….
- **Extension points** (1): `RefreshValues`.
- **Data and constants** (3): `MachineType`, `Machine`, `SiegeWeapon`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `CalculatePosition` | method | Instance entry point. Takes no arguments. |
| `DeploymentPoint` | property | Instance entry point `DeploymentPoint` property. Read it for current state; a declared setter writes that state in place. |
| `ExecuteAction` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteFocusBegin` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteFocusEnd` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `IsInFront` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsInside` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `Position` | property | Instance entry point `Vec2` property. Read it for current state; a declared setter writes that state in place. |
| `RefreshPosition` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `RefreshWithDeployedWeapon` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `Update` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `DeploymentSiegeMachineVM` | ctor | Instance entry point. Takes 6 arguments: `DeploymentPoint selectedDeploymentPoint`, `SiegeWeapon siegeMachine`, `Camera deploymentCamera`, `Action<DeploymentSiegeMachineVM> onSelectSiegeMachine`, …. Returns ``. |
| `Machine` | field | Instance entry point `SiegeEngineType` field — direct storage with no validation or notification. |
| `MachineType` | field | Instance entry point `Type` field — direct storage with no validation or notification. |
| `SiegeWeapon` | field | Instance entry point `SiegeWeapon` field — direct storage with no validation or notification. |

- Constructed as `public DeploymentSiegeMachineVM(DeploymentPoint selectedDeploymentPoint, SiegeWeapon siegeMachine, Camera deploymentCamera, Action<DeploymentSiegeMachineVM> onSelectSiegeMachine, Action<DeploymentPoint> onHoverSiegeMachine, bool isSelected)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new DeploymentSiegeMachineVM(selectedDeploymentPoint, siegeMachine, deploymentCamera, onSelectSiegeMachine, onHoverSiegeMachine, isSelected);
// viewModel.DeploymentPoint = ...;   // DeploymentPoint
viewModel.IsInside = true;
viewModel.IsInFront = true;

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.ViewModelCollection/Order/DeploymentSiegeMachineVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/viewmodel/](../) — the other types in this bucket.
