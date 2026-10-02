---
title: "ArenaPreloadView"
description: "ArenaPreloadView — class in SandBox.View.Missions.Tournaments. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# ArenaPreloadView

**Namespace:** `SandBox.View.Missions.Tournaments`  
**Module:** `SandBox.View`  
**Type:** `internal class ArenaPreloadView : MissionView`  
**Base:** `MissionView`  
**Source:** `SandBox.View/Missions/Tournaments/ArenaPreloadView.cs`

## Overview

`ArenaPreloadView` is an internal class in SandBox.View.Missions.Tournaments. The engine constructs it and exposes it through public APIs; a mod can call the public surface above it but cannot `new` it or reference the type in a signature.

`ArenaPreloadView` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends MissionView, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Instance members** (3): `OnPreMissionTick`, `OnSceneRenderingStarted`, `OnMissionStateDeactivated`.
- **Extension points** (3): `OnPreMissionTick`, `OnSceneRenderingStarted`, `OnMissionStateDeactivated`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnMissionStateDeactivated` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnPreMissionTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnSceneRenderingStarted` | method (override) | Overrides the base member. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |

## Usage Example

```csharp
// ArenaPreloadView is internal: the engine creates it, a mod cannot.
// Use it through whatever the engine exposes, and read the members below.
//   OnPreMissionTick(`float dt`)
//     void
//   OnSceneRenderingStarted()
//     void
//   OnMissionStateDeactivated()
//     void
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.View/Missions/Tournaments/ArenaPreloadView.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [ArenaPracticeFightMissionController](../ArenaPracticeFightMissionController/) — `SandBox.Missions.MissionLogics.Arena`.
- [TournamentBehavior](../TournamentBehavior/) — `SandBox.Tournaments.MissionLogics`.

Section: [api/sandbox/](../) — the other types in this bucket.
