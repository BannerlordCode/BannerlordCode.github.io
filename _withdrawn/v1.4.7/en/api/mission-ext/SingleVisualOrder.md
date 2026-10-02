---
title: "SingleVisualOrder"
description: "SingleVisualOrder — class in TaleWorlds.MountAndBlade.View.VisualOrders.Orders. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# SingleVisualOrder

**Namespace:** `TaleWorlds.MountAndBlade.View.VisualOrders.Orders`  
**Module:** `TaleWorlds.MountAndBlade.View`  
**Type:** `public class SingleVisualOrder : VisualOrder`  
**Base:** `VisualOrder`  
**Source:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/VisualOrders/Orders/SingleVisualOrder.cs`

## Overview

`SingleVisualOrder` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends VisualOrder, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `SingleVisualOrder`.
- **Instance members** (4): `ExecuteOrder`, `GetName`, `IsTargeted`, `OnGetFormationHasOrder`.
- **Extension points** (4): `ExecuteOrder`, `GetName`, `IsTargeted`, `OnGetFormationHasOrder`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `ExecuteOrder` | method (override) | Overrides the base member. Takes 2 arguments: `OrderController orderController`, `VisualOrderExecutionParameters executionParameters`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `GetName` | method (override) | Overrides the base member. Takes 1 argument: `OrderController orderController`. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `IsTargeted` | method (override) | Overrides the base member. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OnGetFormationHasOrder` | method (override) | Overrides the base member. Takes 1 argument: `Formation formation`. Returns `bool?`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `SingleVisualOrder` | ctor | Instance entry point. Takes 5 arguments: `string stringId`, `TextObject name`, `OrderType orderType`, `bool useFormationTarget`, …. Returns ``. |

- Constructed as `public SingleVisualOrder(string stringId, TextObject name, OrderType orderType, bool useFormationTarget, bool useWorldPositionTarget)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: VisualOrder.
var singleVisualOrder = new SingleVisualOrder(stringId, name, orderType, useFormationTarget, useWorldPositionTarget);

// Lifecycle hooks this type declares:
//   public override void ExecuteOrder(OrderController orderController, VisualOrderExecutionParameters executionParameters)
//   public override TextObject GetName(OrderController orderController)
//   public override bool IsTargeted()
//   protected override bool? OnGetFormationHasOrder(Formation formation)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/VisualOrders/Orders/SingleVisualOrder.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [VisualOrder](../../viewmodel/VisualOrder/) — `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual`.
- [VisualOrderExecutionParameters](../../viewmodel/VisualOrderExecutionParameters/) — `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual`.

Section: [api/mission-ext/](../) — the other types in this bucket.
