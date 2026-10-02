---
title: "BarterVM"
description: "BarterVM — class in TaleWorlds.CampaignSystem.ViewModelCollection.Barter. 21 public members (0 static)."
---

<!-- v147-skeleton -->
# BarterVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Barter`  
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`  
**Type:** `public class BarterVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Barter/BarterVM.cs`

## Overview

`BarterVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `BarterVM`.
- **Instance members** (20): `RefreshValues`, `OnFinalize`, `OnInitialized`, `ExecuteTransferAllLeftFief`, `ExecuteAutoBalance`, `ExecuteTransferAllLeftItem`, ….
- **Extension points** (2): `RefreshValues`, `OnFinalize`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnFinalize` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `ExecuteAutoBalance` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteCancel` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteOffer` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteReset` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteTransferAllLeftFief` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteTransferAllLeftItem` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteTransferAllLeftOther` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteTransferAllLeftPrisoner` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteTransferAllRightFief` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteTransferAllRightItem` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteTransferAllRightOther` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteTransferAllRightPrisoner` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `InitializeStaticContent` | method | Instance entry point. Takes no arguments. |
| `OnInitialized` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTransferItem` | method | Instance entry point. Takes 2 arguments: `Barterable barter`, `bool isTransferrable`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `SetCancelInputKey` | method | Instance entry point. Takes 1 argument: `HotKey hotkey`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetDoneInputKey` | method | Instance entry point. Takes 1 argument: `HotKey hotkey`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetResetInputKey` | method | Instance entry point. Takes 1 argument: `HotKey hotkey`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `BarterVM` | ctor | Instance entry point. Takes 1 argument: `BarterData args`. Returns ``. |

- Constructed as `public BarterVM(BarterData args)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new BarterVM(args);

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Barter/BarterVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BarterData](../../campaign/BarterData/) — `TaleWorlds.CampaignSystem.BarterSystem`.
- [CampaignUIHelper](../CampaignUIHelper/) — `TaleWorlds.CampaignSystem.ViewModelCollection`.
- [MobileParty](../../campaign/MobileParty/) — `TaleWorlds.CampaignSystem.Party`.
- [BarterManager](../../campaign/BarterManager/) — `TaleWorlds.CampaignSystem.BarterSystem`.
- [HintViewModel](../HintViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.
- [BarterItemVM](../BarterItemVM/) — `TaleWorlds.CampaignSystem.ViewModelCollection.Barter`.
- [BarterGroup](../../campaign/BarterGroup/) — `TaleWorlds.CampaignSystem.BarterSystem`.
- [FiefBarterGroup](../../campaign/FiefBarterGroup/) — `TaleWorlds.CampaignSystem.BarterSystem`.
- [Barterable](../../campaign/Barterable/) — `TaleWorlds.CampaignSystem.BarterSystem.Barterables`.
- [HotKey](../../system/HotKey/) — `TaleWorlds.InputSystem`.

Section: [api/viewmodel/](../) — the other types in this bucket.
