---
title: "OrderOfBattleFormationClassSelectorItemVM"
description: "OrderOfBattleFormationClassSelectorItemVM — class in TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# OrderOfBattleFormationClassSelectorItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle`  
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`  
**Type:** `public class OrderOfBattleFormationClassSelectorItemVM : SelectorItemVM`  
**Base:** `SelectorItemVM`  
**Source:** `TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleFormationClassSelectorItemVM.cs`

## Overview

`OrderOfBattleFormationClassSelectorItemVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends SelectorItemVM, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `OrderOfBattleFormationClassSelectorItemVM`.
- **Instance members** (1): `RefreshValues`.
- **Extension points** (1): `RefreshValues`.
- **Data and constants** (1): `FormationClass`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `OrderOfBattleFormationClassSelectorItemVM` | ctor | Instance entry point. Takes 1 argument: `DeploymentFormationClass formationClass`. Returns ``. |
| `FormationClass` | field | Instance entry point `DeploymentFormationClass` field — direct storage with no validation or notification. |

- Constructed as `public OrderOfBattleFormationClassSelectorItemVM(DeploymentFormationClass formationClass)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new OrderOfBattleFormationClassSelectorItemVM(formationClass);

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleFormationClassSelectorItemVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [SelectorItemVM](../SelectorItemVM/) — `TaleWorlds.Core.ViewModelCollection.Selector`.
- [HintViewModel](../HintViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.

Section: [api/viewmodel/](../) — the other types in this bucket.
