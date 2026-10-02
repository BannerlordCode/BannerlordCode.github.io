---
title: "OrderFlag"
description: "OrderFlag — class in TaleWorlds.MountAndBlade.View.MissionViews.Order. 17 public members (1 static)."
---

<!-- v147-skeleton -->
# OrderFlag

**Namespace:** `TaleWorlds.MountAndBlade.View.MissionViews.Order`  
**Module:** `TaleWorlds.MountAndBlade.View`  
**Type:** `public class OrderFlag`  
**Source:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Order/OrderFlag.cs`

## Overview

`OrderFlag` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `OrderFlag`.
- **Static entry points** (1): `IsOrderPositionValid`.
- **Instance members** (12): `FocusedOrderableObject`, `LatestUpdateFrameNo`, `Tick`, `SetArrowVisibility`, `GetFlagPosition`, `UpdateFrame`, ….
- **Extension points** (3): `GetFlagPosition`, `UpdateFrame`, `IsPositionOnValidGround`.
- **Data and constants** (3): `_orderablesWithInteractionArea`, `_mission`, `_missionScreen`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `IsOrderPositionValid` | method (static) | Static entry point. Takes 1 argument: `WorldPosition orderPosition`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsPositionOnValidGround` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `WorldPosition worldPosition`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `FocusedOrderableObject` | property | Instance entry point `IOrderable` property. Read it for current state; a declared setter writes that state in place. |
| `Frame` | property | Instance entry point `MatrixFrame` property. Read it for current state; a declared setter writes that state in place. |
| `GetFlagPosition` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 3 arguments: `out bool isOnValidGround`, `bool checkForTargetEntity`, `Vec3 targetCollisionPoint`. Returns `Vec3`. Read path: prefer it over reaching for the backing store. |
| `IsTroop` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsVisible` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `LatestUpdateFrameNo` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `Position` | property | Instance entry point `Vec3` property. Read it for current state; a declared setter writes that state in place. |
| `SetArrowVisibility` | method | Instance entry point. Takes 2 arguments: `bool isVisible`, `Vec2 arrowDirection`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `SetWidthVisibility` | method | Instance entry point. Takes 2 arguments: `bool isVisible`, `float width`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `Tick` | method | Instance entry point. Takes 1 argument: `float dt`. Called from the owner’s update loop — do not assume a frame boundary. |
| `UpdateFrame` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 3 arguments: `out bool isOnValidGround`, `bool checkForTargetEntity`, `Vec3 targetCollisionPoint`. Called from the owner’s update loop — do not assume a frame boundary. |
| `OrderFlag` | ctor | Instance entry point. Takes 3 arguments: `Mission mission`, `MissionScreen missionScreen`, `float flagScale`. Returns ``. |
| `_mission` | field | Protected — for subclasses only `Mission` field — direct storage with no validation or notification. |
| `_missionScreen` | field | Protected — for subclasses only `MissionScreen` field — direct storage with no validation or notification. |
| `_orderablesWithInteractionArea` | field | Protected — for subclasses only `IEnumerable<IOrderableWithInteractionArea>` field — direct storage with no validation or notification. |

- Constructed as `public OrderFlag(Mission mission, MissionScreen missionScreen, float flagScale = 10f)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
var orderFlag = new OrderFlag(mission, missionScreen, flagScale);
OrderFlag.IsOrderPositionValid(orderPosition);

// It declares no lifecycle hooks of its own; it only adds state and helpers.
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Order/OrderFlag.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [BoundingBox](../../engine/BoundingBox/) — `TaleWorlds.Engine`.
- [Utilities](../../engine/Utilities/) — `TaleWorlds.Engine`.

Section: [api/mission-ext/](../) — the other types in this bucket.
