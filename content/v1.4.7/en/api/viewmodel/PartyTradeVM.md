---
title: "PartyTradeVM"
description: "PartyTradeVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.Party. 10 public members (1 static)."
---

<!-- v147-skeleton -->
# PartyTradeVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Party`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class PartyTradeVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTradeVM.cs`

## Overview

`PartyTradeVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `PartyTradeVM`.
- **Instance members** (8): `RefreshValues`, `UpdateTroopData`, `FindTroopFromSide`, `ExecuteIncreasePlayerStock`, `ExecuteIncreaseOtherStock`, `ExecuteReset`, ….
- **Extension points** (1): `RefreshValues`.
- **Data and constants** (1): `RemoveZeroCounts`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `ExecuteApplyTransaction` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteIncreaseOtherStock` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteIncreasePlayerStock` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteRemoveZeroCounts` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteReset` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `FindTroopFromSide` | method | Instance entry point. Takes 3 arguments: `CharacterObject character`, `PartyScreenLogic.PartyRosterSide side`, `bool isPrisoner`. Returns `TroopRosterElement?`. Read path: prefer it over reaching for the backing store. |
| `RemoveZeroCounts` | field (static) | Static entry point `Action` field — direct storage with no validation or notification. |
| `UpdateTroopData` | method | Instance entry point. Takes 3 arguments: `TroopRosterElement troopRoster`, `PartyScreenLogic.PartyRosterSide side`, `bool forceUpdate`. Called from the owner’s update loop — do not assume a frame boundary. |
| `PartyTradeVM` | ctor | Instance entry point. Takes 7 arguments: `PartyScreenLogic partyScreenLogic`, `TroopRosterElement troopRoster`, `PartyScreenLogic.PartyRosterSide side`, `bool isTransfarable`, …. Returns ``. |

- Constructed as `public PartyTradeVM(PartyScreenLogic partyScreenLogic, TroopRosterElement troopRoster, PartyScreenLogic.PartyRosterSide side, bool isTransfarable, bool isPrisoner, Action<int, bool> onApplyTransaction)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new PartyTradeVM(partyScreenLogic, troopRoster, side, isTransfarable, isPrisoner, theTarget, onApplyTransaction);

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTradeVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [PartyScreenLogic](../../campaign/PartyScreenLogic/) — `TaleWorlds.CampaignSystem.Party`.
- [HintViewModel](../HintViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.
- [TroopRoster](../../campaign/TroopRoster/) — `TaleWorlds.CampaignSystem.Roster`.

Section: [api/viewmodel/](../) — the other types in this bucket.
