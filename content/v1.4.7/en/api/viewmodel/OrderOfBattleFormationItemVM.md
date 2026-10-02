---
title: "OrderOfBattleFormationItemVM"
description: "OrderOfBattleFormationItemVM — class in TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle. 27 public members (8 static)."
---

<!-- v147-skeleton -->
# OrderOfBattleFormationItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle`  
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`  
**Type:** `public class OrderOfBattleFormationItemVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleFormationItemVM.cs`

## Overview

`OrderOfBattleFormationItemVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `OrderOfBattleFormationItemVM`.
- **Instance members** (18): `Formation`, `RefreshValues`, `Tick`, `RefreshFormation`, `MakeMarkerWorldPositionDirty`, `OnSizeChanged`, ….
- **Extension points** (1): `RefreshValues`.
- **Data and constants** (8): `OnHeroesChanged`, `OnClassSelectionToggled`, `OnFilterUseToggled`, `OnSelection`, `OnDeselection`, `OnAcceptCaptain`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `AddHeroTroop` | method | Instance entry point. Takes 1 argument: `OrderOfBattleHeroItemVM heroItem`. Adds to the collection or relation this type owns. |
| `ExecuteAcceptCaptain` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteAcceptHeroTroops` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `Formation` | property | Instance entry point `Formation` property. Read it for current state; a declared setter writes that state in place. |
| `GetOrderOfBattleClass` | method | Instance entry point. Takes no arguments. Returns `DeploymentFormationClass`. Read path: prefer it over reaching for the backing store. |
| `HasClass` | method | Instance entry point. Takes 1 argument: `FormationClass formationClass`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `HasClasses` | method | Instance entry point. Takes 1 argument: `FormationClass[] formationClasses`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `HasFilter` | method | Instance entry point. Takes 1 argument: `FormationFilterType filter`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `HasOnlyOneClass` | method | Instance entry point. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `MakeMarkerWorldPositionDirty` | method | Instance entry point. Takes no arguments. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `OnAcceptCaptain` | field (static) | Static entry point `Action<OrderOfBattleFormationItemVM>` field — direct storage with no validation or notification. |
| `OnAcceptHeroTroops` | field (static) | Static entry point `Action<OrderOfBattleFormationItemVM>` field — direct storage with no validation or notification. |
| `OnClassSelectionToggled` | field (static) | Static entry point `Action<OrderOfBattleFormationItemVM>` field — direct storage with no validation or notification. |
| `OnDeselection` | field (static) | Static entry point `Action<OrderOfBattleFormationItemVM>` field — direct storage with no validation or notification. |
| `OnFilterUseToggled` | field (static) | Static entry point `Action<OrderOfBattleFormationItemVM>` field — direct storage with no validation or notification. |
| `OnFormationClassChanged` | field (static) | Static entry point `Action` field — direct storage with no validation or notification. |
| `OnHeroesChanged` | field (static) | Static entry point `Action` field — direct storage with no validation or notification. |
| `OnHeroSelectionUpdated` | method | Instance entry point. Takes 2 arguments: `int selectedHeroCount`, `bool hasOwnHeroTroopInSelection`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnSelection` | field (static) | Static entry point `Action<OrderOfBattleFormationItemVM>` field — direct storage with no validation or notification. |
| `OnSizeChanged` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `RefreshFormation` | method | Instance entry point. Takes 3 arguments: `Formation formation`, `DeploymentFormationClass overriddenClass`, `bool mustExist`. Called from the owner’s update loop — do not assume a frame boundary. |
| `RemoveHeroTroop` | method | Instance entry point. Takes 1 argument: `OrderOfBattleHeroItemVM heroItem`. Removes from or clears the collection this type owns. |
| `Tick` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |

- Constructed as `public OrderOfBattleFormationItemVM(Camera missionCamera)`.

3 further public members follow the same patterns.
## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new OrderOfBattleFormationItemVM(missionCamera);
// viewModel.Formation = ...;   // Formation

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.ViewModelCollection/OrderOfBattle/OrderOfBattleFormationItemVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [OrderOfBattleFormationFilterSelectorItemVM](../OrderOfBattleFormationFilterSelectorItemVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle`.
- [SelectorVM](../SelectorVM/) — `TaleWorlds.Core.ViewModelCollection.Selector`.
- [OrderOfBattleFormationClassSelectorItemVM](../OrderOfBattleFormationClassSelectorItemVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle`.
- [OrderOfBattleFormationClassVM](../OrderOfBattleFormationClassVM/) — `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle`.
- [BasicTooltipViewModel](../BasicTooltipViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.
- [HintViewModel](../HintViewModel/) — `TaleWorlds.Core.ViewModelCollection.Information`.

Section: [api/viewmodel/](../) — the other types in this bucket.
