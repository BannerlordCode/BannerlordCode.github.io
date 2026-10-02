---
title: "SPScoreboardPartyVM"
description: "SPScoreboardPartyVM — class in TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard. 9 public members (0 static)."
---

<!-- v147-skeleton -->
# SPScoreboardPartyVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`  
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`  
**Type:** `public class SPScoreboardPartyVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardPartyVM.cs`

## Overview

`SPScoreboardPartyVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 3 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `SPScoreboardPartyVM`.
- **Instance members** (8): `BattleCombatant`, `CurrentPower`, `InitialPower`, `RefreshValues`, `UpdateScores`, `UpdateHeroSkills`, ….
- **Extension points** (1): `RefreshValues`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `BattleCombatant` | property | Instance entry point `IBattleCombatant` property. Read it for current state; a declared setter writes that state in place. |
| `CurrentPower` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `GetUnit` | method | Instance entry point. Takes 1 argument: `BasicCharacterObject character`. Returns `SPScoreboardUnitVM`. Read path: prefer it over reaching for the backing store. |
| `GetUnitAddIfNotExists` | method | Instance entry point. Takes 1 argument: `BasicCharacterObject character`. Returns `SPScoreboardUnitVM`. Read path: prefer it over reaching for the backing store. |
| `InitialPower` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `UpdateHeroSkills` | method | Instance entry point. Takes 2 arguments: `BasicCharacterObject heroCharacter`, `SkillObject upgradedSkill`. Called from the owner’s update loop — do not assume a frame boundary. |
| `UpdateScores` | method | Instance entry point. Takes 7 arguments: `BasicCharacterObject character`, `int numberRemaining`, `int numberDead`, `int numberWounded`, …. Called from the owner’s update loop — do not assume a frame boundary. |
| `SPScoreboardPartyVM` | ctor | Instance entry point. Takes 1 argument: `IBattleCombatant battleCombatant`. Returns ``. |

- Constructed as `public SPScoreboardPartyVM(IBattleCombatant battleCombatant)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new SPScoreboardPartyVM(battleCombatant);
// viewModel.BattleCombatant = ...;   // IBattleCombatant
// viewModel.CurrentPower = ...;   // float
// viewModel.InitialPower = ...;   // float

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/SPScoreboardPartyVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [SPScoreboardSortControllerVM](../SPScoreboardSortControllerVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`.

Section: [api/viewmodel/](../) — the other types in this bucket.
