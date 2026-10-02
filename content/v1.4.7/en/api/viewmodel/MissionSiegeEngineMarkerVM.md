---
title: "MissionSiegeEngineMarkerVM"
description: "MissionSiegeEngineMarkerVM — class in TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# MissionSiegeEngineMarkerVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker`  
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`  
**Type:** `public class MissionSiegeEngineMarkerVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/FormationMarker/MissionSiegeEngineMarkerVM.cs`

## Overview

`MissionSiegeEngineMarkerVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MissionSiegeEngineMarkerVM`.
- **Instance members** (4): `IsInitialized`, `InitializeWith`, `Tick`, `OnFinalize`.
- **Extension points** (1): `OnFinalize`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `InitializeWith` | method | Instance entry point. Takes 1 argument: `List<SiegeWeapon> siegeEngines`. |
| `IsInitialized` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `Tick` | method | Instance entry point. Takes 1 argument: `float dt`. Called from the owner’s update loop — do not assume a frame boundary. |
| `MissionSiegeEngineMarkerVM` | ctor | Instance entry point. Takes 2 arguments: `Mission mission`, `Camera missionCamera`. Returns ``. |

- Constructed as `public MissionSiegeEngineMarkerVM(Mission mission, Camera missionCamera)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new MissionSiegeEngineMarkerVM(mission, missionCamera);
viewModel.IsInitialized = true;

// Command the widget invokes on confirm:
viewModel.InitializeWith(siegeEngines);
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/FormationMarker/MissionSiegeEngineMarkerVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MissionSiegeEngineMarkerTargetVM](../MissionSiegeEngineMarkerTargetVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker`.

Section: [api/viewmodel/](../) — the other types in this bucket.
