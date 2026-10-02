---
title: "SPScoreboardVM"
description: "SPScoreboardVM — class in SandBox.ViewModelCollection. 18 public members (3 static)."
---

<!-- v147-skeleton -->
# SPScoreboardVM

**Namespace:** `SandBox.ViewModelCollection`  
**Module:** `SandBox.ViewModelCollection`  
**Type:** `public class SPScoreboardVM : ScoreboardBaseVM, IBattleObserver`  
**Base:** `ScoreboardBaseVM, IBattleObserver`  
**Source:** `SandBox.ViewModelCollection/SPScoreboardVM.cs`

## Overview

`SPScoreboardVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ScoreboardBaseVM, IBattleObserver, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `SPScoreboardVM`.
- **Static entry points** (3): `CreateSimulation`, `CreateMission`, `CreateCustom`.
- **Instance members** (14): `UpdateQuitText`, `Initialize`, `OnTick`, `ExecutePlayAction`, `ExecuteFastForwardAction`, `ExecutePauseSimulationAction`, ….
- **Extension points** (8): `UpdateQuitText`, `Initialize`, `OnTick`, `ExecutePlayAction`, `ExecuteFastForwardAction`, `ExecutePauseSimulationAction`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CreateCustom` | method (static) | Static entry point. Takes 2 arguments: `BattleScoreContext battleScoreContext`, `BattleSimulation simulation`. Returns `SPScoreboardVM`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreateMission` | method (static) | Static entry point. Takes 1 argument: `Mission mission`. Returns `SPScoreboardVM`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CreateSimulation` | method (static) | Static entry point. Takes 1 argument: `BattleSimulation simulation`. Returns `SPScoreboardVM`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `ExecuteEndSimulationAction` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteFastForwardAction` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecutePauseSimulationAction` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecutePlayAction` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteQuitAction` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `Initialize` | method (override) | Overrides the base member. Takes 4 arguments: `IMissionScreen missionScreen`, `Mission mission`, `Action releaseSimulationSources`, `Action<bool> onToggle`. |
| `OnTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `UpdateQuitText` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `BattleResultsReady` | method | Instance entry point. Takes no arguments. |
| `HeroSkillIncreased` | method | Instance entry point. Takes 4 arguments: `BattleSideEnum side`, `IBattleCombatant battleCombatant`, `BasicCharacterObject heroCharacter`, `SkillObject upgradedSkill`. |
| `OnBattleOver` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnExitBattle` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `TroopNumberChanged` | method | Instance entry point. Takes 9 arguments: `BattleSideEnum side`, `IBattleCombatant battleCombatant`, `BasicCharacterObject character`, `int number`, …. |
| `TroopSideChanged` | method | Instance entry point. Takes 4 arguments: `BattleSideEnum prevSide`, `BattleSideEnum newSide`, `IBattleCombatant battleCombatant`, `BasicCharacterObject character`. |
| `SPScoreboardVM` | ctor | Instance entry point. Takes 2 arguments: `BattleScoreContext scoreboardContext`, `BattleSimulation simulation`. Returns ``. |

- Constructed as `public SPScoreboardVM(BattleScoreContext scoreboardContext, BattleSimulation simulation)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new SPScoreboardVM(scoreboardContext, simulation);

// Command the widget invokes on confirm:
viewModel.UpdateQuitText();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 8 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.ViewModelCollection/SPScoreboardVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [SandboxSimulationBattleScoreContext](../SandboxSimulationBattleScoreContext/) — `SandBox.Missions.BattleScore`.
- [SandboxMissionBattleScoreContext](../SandboxMissionBattleScoreContext/) — `SandBox.Missions.BattleScore`.
- [BattleScoreContext](../../mission-ext/BattleScoreContext/) — `TaleWorlds.MountAndBlade.Missions.BattleScore`.
- [BattleResultVM](../../viewmodel/BattleResultVM/) — `TaleWorlds.Core.ViewModelCollection`.
- [IMissionScreen](../../viewmodel/IMissionScreen/) — `TaleWorlds.MountAndBlade.ViewModelCollection`.
- [SPScoreboardSideVM](../../viewmodel/SPScoreboardSideVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`.
- [PlayerEncounter](../../campaign/PlayerEncounter/) — `TaleWorlds.CampaignSystem.Encounters`.
- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [ExplainedNumber](../../campaign/ExplainedNumber/) — `TaleWorlds.CampaignSystem`.
- [Figurehead](../../campaign/Figurehead/) — `TaleWorlds.CampaignSystem.Naval`.

Section: [api/sandbox/](../) — the other types in this bucket.
