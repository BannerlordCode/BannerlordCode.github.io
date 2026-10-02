---
title: "RecruitVolunteerVM"
description: "RecruitVolunteerVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment. 10 public members (0 static)."
---

<!-- v147-skeleton -->
# RecruitVolunteerVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class RecruitVolunteerVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitVolunteerVM.cs`

## Overview

`RecruitVolunteerVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 3 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `RecruitVolunteerVM`.
- **Instance members** (8): `OwnerHero`, `VolunteerTroops`, `GoldCost`, `RefreshValues`, `ExecuteRecruit`, `ExecuteRemoveFromCart`, ….
- **Extension points** (1): `RefreshValues`.
- **Data and constants** (1): `RecruitableNumber`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `ExecuteRecruit` | method | Instance entry point. Takes 1 argument: `RecruitVolunteerTroopVM troop`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteRemoveFromCart` | method | Instance entry point. Takes 1 argument: `RecruitVolunteerTroopVM troop`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `GoldCost` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `OnRecruitMoveToCart` | method | Instance entry point. Takes 1 argument: `RecruitVolunteerTroopVM troop`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnRecruitRemovedFromCart` | method | Instance entry point. Takes 1 argument: `RecruitVolunteerTroopVM troop`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OwnerHero` | property | Instance entry point `Hero` property. Read it for current state; a declared setter writes that state in place. |
| `VolunteerTroops` | property | Instance entry point `List<CharacterObject>` property. Read it for current state; a declared setter writes that state in place. |
| `RecruitVolunteerVM` | ctor | Instance entry point. Takes 6 arguments: `Hero owner`, `List<CharacterObject> troops`, `Action<RecruitVolunteerVM`, `RecruitVolunteerTroopVM> onRecruit`, …. Returns ``. |
| `RecruitableNumber` | field | Instance entry point `int` field — direct storage with no validation or notification. |

- Constructed as `public RecruitVolunteerVM(Hero owner, List<CharacterObject> troops, Action<RecruitVolunteerVM, RecruitVolunteerTroopVM> onRecruit, Action<RecruitVolunteerVM, RecruitVolunteerTroopVM> onRemoveFromCart)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new RecruitVolunteerVM(owner, troops, theTarget, onRecruit, theTarget, onRemoveFromCart);
// viewModel.OwnerHero = ...;   // Hero
// viewModel.VolunteerTroops = ...;   // List<CharacterObject>
// viewModel.GoldCost = ...;   // int

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitVolunteerVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GameMenu](../../campaign/GameMenu/) — `TaleWorlds.CampaignSystem.GameMenus`.
- [RecruitVolunteerTroopVM](../RecruitVolunteerTroopVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment`.
- [RecruitVolunteerOwnerVM](../RecruitVolunteerOwnerVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment`.
- [HintViewModel](../HintViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.

Section: [api/viewmodel/](../) — the other types in this bucket.
