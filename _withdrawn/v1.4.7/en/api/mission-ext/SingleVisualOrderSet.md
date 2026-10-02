---
title: "SingleVisualOrderSet"
description: "SingleVisualOrderSet — class in TaleWorlds.MountAndBlade.View.VisualOrders.OrderSets. 6 public members (0 static)."
---

<!-- v147-skeleton -->
# SingleVisualOrderSet

**Namespace:** `TaleWorlds.MountAndBlade.View.VisualOrders.OrderSets`  
**Module:** `TaleWorlds.MountAndBlade.View`  
**Type:** `public class SingleVisualOrderSet : VisualOrderSet`  
**Base:** `VisualOrderSet`  
**Source:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/VisualOrders/OrderSets/SingleVisualOrderSet.cs`

## Overview

`SingleVisualOrderSet` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends VisualOrderSet, so the members it does not redeclare are inherited from there. 3 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `SingleVisualOrderSet`.
- **Instance members** (4): `IsSoloOrder`, `GetName`, `StringId`, `IconId`.
- **Extension points** (4): `IsSoloOrder`, `GetName`, `StringId`, `IconId`.
- **Data and constants** (1): `Order`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetName` | method (override) | Overrides the base member. Takes 1 argument: `OrderController orderController`. Returns `TextObject`. Read path: prefer it over reaching for the backing store. |
| `IconId` | property (override) | Overrides the base member `string` property. Read it for current state; a declared setter writes that state in place. |
| `IsSoloOrder` | property (override) | Overrides the base member `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `StringId` | property (override) | Overrides the base member `string` property. Read it for current state; a declared setter writes that state in place. |
| `SingleVisualOrderSet` | ctor | Instance entry point. Takes 1 argument: `VisualOrder order`. Returns ``. |
| `Order` | field | Instance entry point `VisualOrder` field — direct storage with no validation or notification. |

- Constructed as `public SingleVisualOrderSet(VisualOrder order)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: VisualOrderSet.
var singleVisualOrderSet = new SingleVisualOrderSet(order);

// Lifecycle hooks this type declares:
//   public override bool IsSoloOrder
//   public override TextObject GetName(OrderController orderController)
//   public override string StringId
//   public override string IconId
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/VisualOrders/OrderSets/SingleVisualOrderSet.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [VisualOrder](../../viewmodel/VisualOrder/) — `TaleWorlds.MountAndBlade.ViewModelCollection.Order.Visual`.

Section: [api/mission-ext/](../) — the other types in this bucket.
