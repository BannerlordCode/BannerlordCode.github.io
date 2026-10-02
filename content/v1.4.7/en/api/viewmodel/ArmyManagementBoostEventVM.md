---
title: "ArmyManagementBoostEventVM"
description: "ArmyManagementBoostEventVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# ArmyManagementBoostEventVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.ArmyManagement`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class ArmyManagementBoostEventVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementBoostEventVM.cs`

## Overview

`ArmyManagementBoostEventVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 2 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ArmyManagementBoostEventVM`.
- **Instance members** (3): `CurrencyToPayForCohesion`, `RefreshValues`, `BoostCurrency`.
- **Extension points** (1): `RefreshValues`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `BoostCurrency` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `CurrencyToPayForCohesion` | property | Instance entry point `ArmyManagementBoostEventVM.BoostCurrency` property. Read it for current state; a declared setter writes that state in place. |
| `ArmyManagementBoostEventVM` | ctor | Instance entry point. Takes 4 arguments: `ArmyManagementBoostEventVM.BoostCurrency currencyToPayForCohesion`, `int amountToPay`, `int amountOfCohesionToGain`, `Action<ArmyManagementBoostEventVM> onExecuteEvent`. Returns ``. |

- Constructed as `public ArmyManagementBoostEventVM(ArmyManagementBoostEventVM.BoostCurrency currencyToPayForCohesion, int amountToPay, int amountOfCohesionToGain, Action<ArmyManagementBoostEventVM> onExecuteEvent)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new ArmyManagementBoostEventVM(currencyToPayForCohesion, amountToPay, amountOfCohesionToGain, onExecuteEvent);
// viewModel.CurrencyToPayForCohesion = ...;   // ArmyManagementBoostEventVM.BoostCurrency
// viewModel.BoostCurrency = ...;   // enum

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/ArmyManagement/ArmyManagementBoostEventVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/viewmodel/](../) — the other types in this bucket.
