---
title: "OrderSiegeDeploymentScreenWidget"
description: "OrderSiegeDeploymentScreenWidget — class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Order. 5 public members (0 static)."
---

<!-- v147-skeleton -->
# OrderSiegeDeploymentScreenWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Order`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`  
**Type:** `public class OrderSiegeDeploymentScreenWidget : Widget`  
**Base:** `Widget`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Order/OrderSiegeDeploymentScreenWidget.cs`

## Overview

`OrderSiegeDeploymentScreenWidget` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends Widget, so the members it does not redeclare are inherited from there. 3 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `OrderSiegeDeploymentScreenWidget`.
- **Instance members** (4): `SetSelectedDeploymentItem`, `IsSiegeDeploymentDisabled`, `DeploymentTargetsParent`, `DeploymentListPanel`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `DeploymentListPanel` | property | Instance entry point `ListPanel` property. Read it for current state; a declared setter writes that state in place. |
| `DeploymentTargetsParent` | property | Instance entry point `Widget` property. Read it for current state; a declared setter writes that state in place. |
| `IsSiegeDeploymentDisabled` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `SetSelectedDeploymentItem` | method | Instance entry point. Takes 1 argument: `OrderSiegeDeploymentItemButtonWidget deploymentItem`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `OrderSiegeDeploymentScreenWidget` | ctor | Instance entry point. Takes 1 argument: `UIContext context`. Returns ``. |

- Constructed as `public OrderSiegeDeploymentScreenWidget(UIContext context)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: Widget.
var orderSiegeDeploymentScreenWidget = new OrderSiegeDeploymentScreenWidget(context);

// It declares no lifecycle hooks of its own; it only adds state and helpers.
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Order/OrderSiegeDeploymentScreenWidget.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [UIContext](../../gui/UIContext/) — `TaleWorlds.GauntletUI`.
- [OrderSiegeDeploymentItemButtonWidget](../OrderSiegeDeploymentItemButtonWidget/) — `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Order`.

Section: [api/mission-ext/](../) — the other types in this bucket.
