---
title: "MissionObjectiveMarkerVM"
description: "MissionObjectiveMarkerVM — class in TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# MissionObjectiveMarkerVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Missions.Objective`  
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`  
**Type:** `public class MissionObjectiveMarkerVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Objective/MissionObjectiveMarkerVM.cs`

## Overview

`MissionObjectiveMarkerVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MissionObjectiveMarkerVM`.
- **Instance members** (3): `RefreshValues`, `UpdateActiveState`, `UpdatePosition`.
- **Extension points** (1): `RefreshValues`.
- **Data and constants** (1): `Target`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `UpdateActiveState` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `UpdatePosition` | method | Instance entry point. Takes 1 argument: `Camera missionCamera`. Called from the owner’s update loop — do not assume a frame boundary. |
| `MissionObjectiveMarkerVM` | ctor | Instance entry point. Takes 1 argument: `MissionObjectiveTarget target`. Returns ``. |
| `Target` | field | Instance entry point `MissionObjectiveTarget` field — direct storage with no validation or notification. |

- Constructed as `public MissionObjectiveMarkerVM(MissionObjectiveTarget target)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new MissionObjectiveMarkerVM(target);

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.ViewModelCollection/Missions/Objective/MissionObjectiveMarkerVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MissionObjectiveTarget](../../mission-ext/MissionObjectiveTarget/) — `TaleWorlds.MountAndBlade.Missions.Objectives`.

Section: [api/viewmodel/](../) — the other types in this bucket.
