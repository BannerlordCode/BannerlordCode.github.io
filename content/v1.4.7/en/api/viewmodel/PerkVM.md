---
title: "PerkVM"
description: "PerkVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper. 8 public members (0 static)."
---

<!-- v147-skeleton -->
# PerkVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class PerkVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/PerkVM.cs`

## Overview

`PerkVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 3 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `PerkVM`.
- **Instance members** (6): `CurrentState`, `RefreshState`, `ExecuteShowPerkConcept`, `ExecuteStartSelection`, `PerkStates`, `PerkAlternativeType`.
- **Data and constants** (1): `Perk`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CurrentState` | property | Instance entry point `PerkVM.PerkStates` property. Read it for current state; a declared setter writes that state in place. |
| `ExecuteShowPerkConcept` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteStartSelection` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `PerkAlternativeType` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `PerkStates` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `RefreshState` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `PerkVM` | ctor | Instance entry point. Takes 9 arguments: `PerkObject perk`, `bool isAvailable`, `PerkVM.PerkAlternativeType alternativeType`, `Action<PerkVM> onStartSelection`, …. Returns ``. |
| `Perk` | field | Instance entry point `PerkObject` field — direct storage with no validation or notification. |

- Constructed as `public PerkVM(PerkObject perk, bool isAvailable, PerkVM.PerkAlternativeType alternativeType, Action<PerkVM> onStartSelection, Action<PerkVM> onSelectionOver, Func<PerkObject, bool> getIsPerkSelected, Func<PerkObject, bool> getIsPreviousPerkSelected)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new PerkVM(perk, isAvailable, alternativeType, onStartSelection, onSelectionOver, theTarget, getIsPerkSelected, theTarget, getIsPreviousPerkSelected);
// viewModel.CurrentState = ...;   // PerkVM.PerkStates
// viewModel.PerkStates = ...;   // enum
// viewModel.PerkAlternativeType = ...;   // enum

// Command the widget invokes on confirm:
viewModel.RefreshState();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterDeveloper/PerkVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BasicTooltipViewModel](../BasicTooltipViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.
- [CampaignUIHelper](../CampaignUIHelper/) — `TaleWorlds.CampaignSystem.ViewModelCollection`.
- [EncyclopediaManager](../../campaign/EncyclopediaManager/) — `TaleWorlds.CampaignSystem.Encyclopedia`.

Section: [api/viewmodel/](../) — the other types in this bucket.
