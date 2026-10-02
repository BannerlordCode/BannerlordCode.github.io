---
title: "MissionFormationMarkerTargetVM"
description: "MissionFormationMarkerTargetVM — class in TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker. 6 public members (1 static)."
---

<!-- v147-skeleton -->
# MissionFormationMarkerTargetVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.FormationMarker`  
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`  
**Type:** `public class MissionFormationMarkerTargetVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/FormationMarker/MissionFormationMarkerTargetVM.cs`

## Overview

`MissionFormationMarkerTargetVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MissionFormationMarkerTargetVM`.
- **Static entry points** (1): `GetFormationType`.
- **Instance members** (4): `Formation`, `Refresh`, `SetTargetedState`, `TeamTypes`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetFormationType` | method (static) | Static entry point. Takes 1 argument: `FormationClass formationType`. Returns `string`. Read path: prefer it over reaching for the backing store. |
| `Formation` | property | Instance entry point `Formation` property. Read it for current state; a declared setter writes that state in place. |
| `Refresh` | method | Instance entry point. Takes no arguments. |
| `SetTargetedState` | method | Instance entry point. Takes 2 arguments: `bool isFocused`, `bool isTargetingAFormation`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `TeamTypes` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `MissionFormationMarkerTargetVM` | ctor | Instance entry point. Takes 1 argument: `Formation formation`. Returns ``. |

- Constructed as `public MissionFormationMarkerTargetVM(Formation formation)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new MissionFormationMarkerTargetVM(formation);
// viewModel.Formation = ...;   // Formation
// viewModel.TeamTypes = ...;   // enum

// Command the widget invokes on confirm:
viewModel.Refresh();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- The declaration in `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/FormationMarker/MissionFormationMarkerTargetVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/viewmodel/](../) — the other types in this bucket.
