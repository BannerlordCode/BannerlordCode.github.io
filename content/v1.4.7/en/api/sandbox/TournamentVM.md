---
title: "TournamentVM"
description: "TournamentVM — class in SandBox.ViewModelCollection.Tournament. 17 public members (0 static)."
---

<!-- v147-skeleton -->
# TournamentVM

**Namespace:** `SandBox.ViewModelCollection.Tournament`  
**Module:** `SandBox.ViewModelCollection`  
**Type:** `public class TournamentVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `SandBox.ViewModelCollection/Tournament/TournamentVM.cs`

## Overview

`TournamentVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `TournamentVM`.
- **Instance members** (16): `DisableUI`, `Tournament`, `RefreshValues`, `ExecuteBet`, `ExecuteJoinTournament`, `ExecuteSkipRound`, ….
- **Extension points** (2): `RefreshValues`, `OnFinalize`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `DisableUI` | property | Instance entry point `Action` property. Read it for current state; a declared setter writes that state in place. |
| `ExecuteBet` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteHidePrizeItemTooltip` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteJoinTournament` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteLeave` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteShowPrizeItemTooltip` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteSkipAllRounds` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteSkipRound` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteWatchRound` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnAgentRemoved` | method | Instance entry point. Takes 1 argument: `Agent agent`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `Refresh` | method | Instance entry point. Takes no arguments. |
| `SetCancelInputKey` | method | Instance entry point. Takes 1 argument: `HotKey hotKey`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetDoneInputKey` | method | Instance entry point. Takes 1 argument: `HotKey hotKey`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `Tournament` | property | Instance entry point `TournamentBehavior` property. Read it for current state; a declared setter writes that state in place. |
| `TournamentVM` | ctor | Instance entry point. Takes 2 arguments: `Action disableUI`, `TournamentBehavior tournamentBehavior`. Returns ``. |

- Constructed as `public TournamentVM(Action disableUI, TournamentBehavior tournamentBehavior)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new TournamentVM(disableUI, tournamentBehavior);
// viewModel.DisableUI = ...;   // Action
// viewModel.Tournament = ...;   // TournamentBehavior

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.ViewModelCollection/Tournament/TournamentVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [TournamentBehavior](../TournamentBehavior/) — `SandBox.Tournaments.MissionLogics`.
- [TournamentMatchVM](../TournamentMatchVM/) — `SandBox.ViewModelCollection.Tournament`.
- [TournamentRoundVM](../TournamentRoundVM/) — `SandBox.ViewModelCollection.Tournament`.
- [TournamentParticipantVM](../TournamentParticipantVM/) — `SandBox.ViewModelCollection.Tournament`.
- [TournamentRewardVM](../TournamentRewardVM/) — `SandBox.ViewModelCollection`.
- [ItemImageIdentifierVM](../../viewmodel/ItemImageIdentifierVM/) — `TaleWorlds.Core.ViewModelCollection.ImageIdentifiers`.
- [TournamentGame](../../campaign/TournamentGame/) — `TaleWorlds.CampaignSystem.TournamentGames`.
- [HintViewModel](../../viewmodel/HintViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.
- [TournamentMatch](../../campaign/TournamentMatch/) — `TaleWorlds.CampaignSystem.TournamentGames`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.

Section: [api/sandbox/](../) — the other types in this bucket.
