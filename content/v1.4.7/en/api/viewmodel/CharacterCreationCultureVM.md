---
title: "CharacterCreationCultureVM"
description: "CharacterCreationCultureVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# CharacterCreationCultureVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class CharacterCreationCultureVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationCultureVM.cs`

## Overview

`CharacterCreationCultureVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `CharacterCreationCultureVM`.
- **Instance members** (2): `Culture`, `ExecuteSelectCulture`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Culture` | property | Instance entry point `CultureObject` property. Read it for current state; a declared setter writes that state in place. |
| `ExecuteSelectCulture` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `CharacterCreationCultureVM` | ctor | Instance entry point. Takes 2 arguments: `CultureObject culture`, `Action<CharacterCreationCultureVM> onSelection`. Returns ``. |

- Constructed as `public CharacterCreationCultureVM(CultureObject culture, Action<CharacterCreationCultureVM> onSelection)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new CharacterCreationCultureVM(culture, onSelection);
// viewModel.Culture = ...;   // CultureObject

// Command the widget invokes on confirm:
viewModel.ExecuteSelectCulture();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationCultureVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [CharacterCreationContent](../../campaign/CharacterCreationContent/) — `TaleWorlds.CampaignSystem.CharacterCreationContent`.
- [GameStateManager](../../core-extra/GameStateManager/) — `TaleWorlds.Core`.
- [CharacterCreationManager](../../campaign/CharacterCreationManager/) — `TaleWorlds.CampaignSystem.CharacterCreationContent`.
- [CharacterCreationCultureFeatVM](../CharacterCreationCultureFeatVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation`.
- [FeatObject](../../campaign/FeatObject/) — `TaleWorlds.CampaignSystem.CharacterDevelopment`.

Section: [api/viewmodel/](../) — the other types in this bucket.
