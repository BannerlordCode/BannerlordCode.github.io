---
title: "TroopSelectionItemVM"
description: "TroopSelectionItemVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# TroopSelectionItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class TroopSelectionItemVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TroopSelection/TroopSelectionItemVM.cs`

## Overview

`TroopSelectionItemVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `TroopSelectionItemVM`.
- **Instance members** (4): `Troop`, `ExecuteAdd`, `ExecuteRemove`, `ExecuteLink`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ExecuteAdd` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteLink` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteRemove` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `Troop` | property | Instance entry point `TroopRosterElement` property. Read it for current state; a declared setter writes that state in place. |
| `TroopSelectionItemVM` | ctor | Instance entry point. Takes 3 arguments: `TroopRosterElement troop`, `Action<TroopSelectionItemVM> onAdd`, `Action<TroopSelectionItemVM> onRemove`. Returns ``. |

- Constructed as `public TroopSelectionItemVM(TroopRosterElement troop, Action<TroopSelectionItemVM> onAdd, Action<TroopSelectionItemVM> onRemove)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new TroopSelectionItemVM(troop, onAdd, onRemove);
// viewModel.Troop = ...;   // TroopRosterElement

// Command the widget invokes on confirm:
viewModel.ExecuteAdd();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TroopSelection/TroopSelectionItemVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GameMenu](../../campaign/GameMenu/) — `TaleWorlds.CampaignSystem.GameMenus`.
- [CharacterImageIdentifierVM](../CharacterImageIdentifierVM/) — `TaleWorlds.Core.ViewModelCollection.ImageIdentifiers`.
- [CampaignUIHelper](../CampaignUIHelper/) — `TaleWorlds.CampaignSystem.ViewModelCollection`.
- [EncyclopediaManager](../../campaign/EncyclopediaManager/) — `TaleWorlds.CampaignSystem.Encyclopedia`.
- [StringItemWithHintVM](../StringItemWithHintVM/) — `TaleWorlds.Core.ViewModelCollection.Generic`.

Section: [api/viewmodel/](../) — the other types in this bucket.
