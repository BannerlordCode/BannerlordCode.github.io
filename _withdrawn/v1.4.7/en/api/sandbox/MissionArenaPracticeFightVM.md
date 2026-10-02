---
title: "MissionArenaPracticeFightVM"
description: "MissionArenaPracticeFightVM — class in SandBox.ViewModelCollection.Missions. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# MissionArenaPracticeFightVM

**Namespace:** `SandBox.ViewModelCollection.Missions`  
**Module:** `SandBox.ViewModelCollection`  
**Type:** `public class MissionArenaPracticeFightVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `SandBox.ViewModelCollection/Missions/MissionArenaPracticeFightVM.cs`

## Overview

`MissionArenaPracticeFightVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MissionArenaPracticeFightVM`.
- **Instance members** (3): `Tick`, `UpdatePrizeText`, `IsPlayerPracticing`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `IsPlayerPracticing` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `Tick` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `UpdatePrizeText` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `MissionArenaPracticeFightVM` | ctor | Instance entry point. Takes 1 argument: `ArenaPracticeFightMissionController practiceMissionController`. Returns ``. |

- Constructed as `public MissionArenaPracticeFightVM(ArenaPracticeFightMissionController practiceMissionController)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new MissionArenaPracticeFightVM(practiceMissionController);
viewModel.IsPlayerPracticing = true;

// Command the widget invokes on confirm:
viewModel.Tick();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- The declaration in `SandBox.ViewModelCollection/Missions/MissionArenaPracticeFightVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ArenaPracticeFightMissionController](../ArenaPracticeFightMissionController/) — `SandBox.Missions.MissionLogics.Arena`.

Section: [api/sandbox/](../) — the other types in this bucket.
