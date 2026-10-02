---
title: "CustomBattleScoreboardVM"
description: "CustomBattleScoreboardVM — class in TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard. 12 public members (0 static)."
---

<!-- v147-skeleton -->
# CustomBattleScoreboardVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`  
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`  
**Type:** `public class CustomBattleScoreboardVM : ScoreboardBaseVM, IBattleObserver`  
**Base:** `ScoreboardBaseVM, IBattleObserver`  
**Source:** `TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/CustomBattleScoreboardVM.cs`

## Overview

`CustomBattleScoreboardVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ScoreboardBaseVM, IBattleObserver, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CustomBattleScoreboardVM`.
- **Instance members** (11): `Initialize`, `RefreshValues`, `OnTick`, `ExecuteFastForwardAction`, `ExecuteQuitAction`, `OnBattleOver`, ….
- **Extension points** (5): `Initialize`, `RefreshValues`, `OnTick`, `ExecuteFastForwardAction`, `ExecuteQuitAction`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ExecuteFastForwardAction` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteQuitAction` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `Initialize` | method (override) | Overrides the base member. Takes 4 arguments: `IMissionScreen missionScreen`, `Mission mission`, `Action releaseSimulationSources`, `Action<bool> onToggle`. |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `OnTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `BattleResultsReady` | method | Instance entry point. Takes no arguments. |
| `HeroSkillIncreased` | method | Instance entry point. Takes 4 arguments: `BattleSideEnum side`, `IBattleCombatant battleCombatant`, `BasicCharacterObject heroCharacter`, `SkillObject upgradedSkill`. |
| `OnBattleOver` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnExitBattle` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `TroopNumberChanged` | method | Instance entry point. Takes 9 arguments: `BattleSideEnum side`, `IBattleCombatant battleCombatant`, `BasicCharacterObject character`, `int number`, …. |
| `TroopSideChanged` | method | Instance entry point. Takes 4 arguments: `BattleSideEnum prevSide`, `BattleSideEnum newSide`, `IBattleCombatant battleCombatant`, `BasicCharacterObject character`. |
| `CustomBattleScoreboardVM` | ctor | Instance entry point. Takes 1 argument: `BattleScoreContext scoreboardContext`. Returns ``. |

- Constructed as `public CustomBattleScoreboardVM(BattleScoreContext scoreboardContext)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new CustomBattleScoreboardVM(scoreboardContext);

// Command the widget invokes on confirm:
viewModel.Initialize(missionScreen, mission, releaseSimulationSources, onToggle);
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 5 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.ViewModelCollection/Scoreboard/CustomBattleScoreboardVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BattleScoreContext](../../mission-ext/BattleScoreContext/) — `TaleWorlds.MountAndBlade.Missions.BattleScore`.
- [IMissionScreen](../IMissionScreen/) — `TaleWorlds.MountAndBlade.ViewModelCollection`.
- [SPScoreboardSideVM](../SPScoreboardSideVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`.
- [BasicMissionHandler](../../mission-ext/BasicMissionHandler/) — `TaleWorlds.MountAndBlade.Source.Missions.Handlers`.

Section: [api/viewmodel/](../) — the other types in this bucket.
