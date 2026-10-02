---
title: "ArrangementVisualOrder"
description: "ArrangementVisualOrder — class in TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.FormOrders. 6 public members (0 static)."
---

<!-- v147-skeleton -->
# ArrangementVisualOrder

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual.Default.Orders.FormOrders`  
**Module:** `TaleWorlds.MountAndBlade.View`  
**Type:** `public class ArrangementVisualOrder : VisualOrder`  
**Base:** `VisualOrder`  
**Source:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/ViewModelCollection/Order/Visual/Default/Orders/FormOrders/ArrangementVisualOrder.cs`

## Overview

`ArrangementVisualOrder` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends VisualOrder, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `ArrangementVisualOrder`.
- **Instance members** (5): `ArrangementOrder`, `GetName`, `ExecuteOrder`, `IsTargeted`, `OnGetFormationHasOrder`.
- **Extension points** (4): `GetName`, `ExecuteOrder`, `IsTargeted`, `OnGetFormationHasOrder`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ExecuteOrder` | method (override) | Overrides the base member. Takes 2 arguments: `OrderController orderController`, `VisualOrderExecutionParameters executionParameters`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `GetName` | method (override) | Overrides the base member. Takes 1 argument: `OrderController orderController`. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `IsTargeted` | method (override) | Overrides the base member. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnGetFormationHasOrder` | method (override) | Overrides the base member. Takes 1 argument: `Formation formation`. Returns `bool?`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ArrangementOrder` | property | Instance entry point `ArrangementOrder.ArrangementOrderEnum` property. Read it for current state; a declared setter writes that state in place. |
| `ArrangementVisualOrder` | ctor | Instance entry point. Takes 2 arguments: `ArrangementOrder.ArrangementOrderEnum arrangementOrder`, `string iconId`. Returns ``. |

- Constructed as `public ArrangementVisualOrder(ArrangementOrder.ArrangementOrderEnum arrangementOrder, string iconId)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new ArrangementVisualOrder(arrangementOrder, iconId);
// viewModel.ArrangementOrder = ...;   // ArrangementOrder.ArrangementOrderEnum

// Command the widget invokes on confirm:
viewModel.GetName(orderController);
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/ViewModelCollection/Order/Visual/Default/Orders/FormOrders/ArrangementVisualOrder.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [VisualOrder](../VisualOrder/) — `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual`.
- [VisualOrderExecutionParameters](../VisualOrderExecutionParameters/) — `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual`.

Section: [api/viewmodel/](../) — the other types in this bucket.
