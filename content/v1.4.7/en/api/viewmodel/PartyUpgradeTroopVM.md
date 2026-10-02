---
title: "PartyUpgradeTroopVM"
description: "PartyUpgradeTroopVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp. 11 public members (0 static)."
---

<!-- v147-skeleton -->
# PartyUpgradeTroopVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class PartyUpgradeTroopVM : PartyTroopManagerVM`  
**Base:** `PartyTroopManagerVM`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyUpgradeTroopVM.cs`

## Overview

`PartyUpgradeTroopVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends PartyTroopManagerVM, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `PartyUpgradeTroopVM`.
- **Instance members** (10): `RefreshValues`, `OnRanOutTroop`, `OnTroopUpgraded`, `OpenPopUp`, `ExecuteDone`, `ExecuteCancel`, ….
- **Extension points** (8): `RefreshValues`, `OpenPopUp`, `ExecuteDone`, `ExecuteCancel`, `ConfirmCancel`, `ExecuteItemPrimaryAction`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ExecuteCancel` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteDone` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteItemPrimaryAction` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteItemSecondaryAction` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteItemTertiaryAction` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OpenPopUp` | method (override) | Overrides the base member. Takes no arguments. |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `ConfirmCancel` | method (override) | Overrides the base member. Takes no arguments. |
| `OnRanOutTroop` | method | Instance entry point. Takes 1 argument: `PartyCharacterVM troop`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTroopUpgraded` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `PartyUpgradeTroopVM` | ctor | Instance entry point. Takes 1 argument: `PartyVM partyVM`. Returns ``. |

- Constructed as `public PartyUpgradeTroopVM(PartyVM partyVM)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new PartyUpgradeTroopVM(partyVM);

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 8 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyUpgradeTroopVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [PartyTroopManagerVM](../PartyTroopManagerVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp`.
- [PartyVM](../PartyVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Party`.
- [BasicTooltipViewModel](../BasicTooltipViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.
- [PartyCharacterVM](../PartyCharacterVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Party`.
- [PartyTroopManagerItemVM](../PartyTroopManagerItemVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp`.
- [PartyScreenLogic](../../campaign/PartyScreenLogic/) — `TaleWorlds.CampaignSystem.Party`.
- [CampaignUIHelper](../CampaignUIHelper/) — `TaleWorlds.CampaignSystem.ViewModelCollection`.

Section: [api/viewmodel/](../) — the other types in this bucket.
