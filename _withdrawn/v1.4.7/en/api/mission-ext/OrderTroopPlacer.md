---
title: "OrderTroopPlacer"
description: "OrderTroopPlacer — class in TaleWorlds.MountAndBlade.View.MissionViews.Order. 24 public members (0 static)."
---

<!-- v147-skeleton -->
# OrderTroopPlacer

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews.Order`  
**Module:** `TaleWorlds.MountAndBlade.View`  
**Type:** `public class OrderTroopPlacer : MissionView`  
**Base:** `MissionView`  
**Source:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Order/OrderTroopPlacer.cs`

## Overview

`OrderTroopPlacer` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends MissionView, so the members it does not redeclare are inherited from there. 4 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `OrderTroopPlacer`.
- **Instance members** (19): `SuspendTroopPlacer`, `OrderFlag`, `OrderController`, `CreateOrderFlag`, `CanUpdate`, `HasSelectedFormations`, ….
- **Extension points** (9): `CreateOrderFlag`, `CanUpdate`, `HasSelectedFormations`, `GetCursorState`, `GetGroundedVec3`, `TryGetScreenMiddleToWorldPosition`, ….
- **Data and constants** (4): `IsDrawingForced`, `IsDrawingFacing`, `IsDrawingForming`, `OnUnitDeployed`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `AfterStart` | method (override) | Overrides the base member. Takes no arguments. |
| `OnMissionScreenTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnMissionTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `CanUpdate` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `CreateOrderFlag` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Returns `OrderFlag`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `CursorState` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `GetCursorState` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Returns `OrderTroopPlacer.CursorState`. Read path: prefer it over reaching for the backing store. |
| `GetGroundedVec3` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `WorldPosition worldPosition`. Returns `Vec3`. Read path: prefer it over reaching for the backing store. |
| `GetGroundOrNormalCursor` | method | Instance entry point. Takes no arguments. Returns `OrderTroopPlacer.CursorState`. Read path: prefer it over reaching for the backing store. |
| `HasSelectedFormations` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `OrderFlag` | property | Instance entry point `OrderFlag` property. Read it for current state; a declared setter writes that state in place. |
| `RestrictOrdersToDeploymentBoundaries` | method | Instance entry point. Takes 1 argument: `bool enabled`. |
| `SuspendTroopPlacer` | property | Instance entry point `bool` property. Read it for current state; a declared setter writes that state in place. |
| `TryGetScreenMiddleToWorldPosition` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 3 arguments: `out WorldPosition worldPosition`, `out float collisionDistance`, `out WeakGameEntity collidedEntity`. Returns `bool`. Read path: prefer it over reaching for the backing store. |
| `UpdateFormationDrawing` | method | Instance entry point. Takes 1 argument: `bool giveOrder`. Called from the owner’s update loop — do not assume a frame boundary. |
| `GetScreenPoint` | method | Protected — for subclasses only. Takes no arguments. Returns `Vec2`. Read path: prefer it over reaching for the backing store. |
| `OrderController` | property | Protected — for subclasses only `OrderController` property. Read it for current state; a declared setter writes that state in place. |
| `OrderTroopPlacer` | ctor | Instance entry point. Takes 1 argument: `OrderController orderController`. Returns ``. |
| `TryGetScreenMiddleToWorldPosition` | method | Protected — for subclasses only. Takes 2 arguments: `out WorldPosition worldPosition`, `out float collisionDistance`. Returns `bool`. Read path: prefer it over reaching for the backing store. |
| `TryGetScreenMiddleToWorldPosition` | method | Protected — for subclasses only. Takes 1 argument: `out WorldPosition worldPosition`. Returns `bool`. Read path: prefer it over reaching for the backing store. |
| `IsDrawingFacing` | field | Instance entry point `bool` field — direct storage with no validation or notification. |
| `IsDrawingForced` | field | Instance entry point `bool` field — direct storage with no validation or notification. |
| `IsDrawingForming` | field | Instance entry point `bool` field — direct storage with no validation or notification. |
| `OnUnitDeployed` | field | Instance entry point `Action` field — direct storage with no validation or notification. |

- Constructed as `public OrderTroopPlacer(OrderController orderController)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: MissionView.
var orderTroopPlacer = new OrderTroopPlacer(orderController);

// Lifecycle hooks this type declares:
//   public override void AfterStart()
//   public override void OnMissionTick(float dt)
//   public override void OnMissionScreenTick(float dt)
//   public Action OnUnitDeployed
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 9 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Order/OrderTroopPlacer.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [OrderFlag](../OrderFlag/) — `TaleWorlds.MountAndBlade.View.MissionViews.Order`.
- [GameNetwork](../GameNetwork/) — `TaleWorlds.MountAndBlade`.
- [UISoundsHelper](../UISoundsHelper/) — `TaleWorlds.MountAndBlade.View`.

Section: [api/mission-ext/](../) — the other types in this bucket.
