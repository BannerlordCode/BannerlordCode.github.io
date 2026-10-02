---
title: "PartySortControllerVM"
description: "PartySortControllerVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.Party. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# PartySortControllerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Party`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class PartySortControllerVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartySortControllerVM.cs`

## Overview

`PartySortControllerVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `PartySortControllerVM`.
- **Instance members** (3): `SelectSortType`, `SortWith`, `ExecuteToggleOrder`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ExecuteToggleOrder` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `SelectSortType` | method | Instance entry point. Takes 1 argument: `PartyScreenLogic.TroopSortType sortType`. |
| `SortWith` | method | Instance entry point. Takes 2 arguments: `PartyScreenLogic.TroopSortType sortType`, `bool isAscending`. |
| `PartySortControllerVM` | ctor | Instance entry point. Takes 4 arguments: `PartyScreenLogic.PartyRosterSide rosterSide`, `Action<PartyScreenLogic.PartyRosterSide`, `PartyScreenLogic.TroopSortType`, `bool> onSort`. Returns ``. |

- Constructed as `public PartySortControllerVM(PartyScreenLogic.PartyRosterSide rosterSide, Action<PartyScreenLogic.PartyRosterSide, PartyScreenLogic.TroopSortType, bool> onSort)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new PartySortControllerVM(rosterSide, theTarget, theTarget, onSort);

// Command the widget invokes on confirm:
viewModel.SelectSortType(sortType);
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartySortControllerVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [PartyScreenLogic](../../campaign/PartyScreenLogic/) — `TaleWorlds.CampaignSystem.Party`.
- [SelectorVM](../SelectorVM/) — `TaleWorlds.Core.ViewModelCollection.Selector`.

Section: [api/viewmodel/](../) — the other types in this bucket.
