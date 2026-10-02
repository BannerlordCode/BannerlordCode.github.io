---
title: "GauntletCustomBattleMissionCheatView"
description: "GauntletCustomBattleMissionCheatView — class in TaleWorlds.MountAndBlade.CustomBattle.Views. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# GauntletCustomBattleMissionCheatView

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle.Views`  
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`  
**Type:** `internal class GauntletCustomBattleMissionCheatView : MissionCheatView`  
**Base:** `MissionCheatView`  
**Source:** `TaleWorlds.MountAndBlade.CustomBattle/Views/GauntletCustomBattleMissionCheatView.cs`

## Overview

`GauntletCustomBattleMissionCheatView` is an internal class in TaleWorlds.MountAndBlade.CustomBattle.Views. The engine constructs it and exposes it through public APIs; a mod can call the public surface above it but cannot `new` it or reference the type in a signature.

`GauntletCustomBattleMissionCheatView` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends MissionCheatView, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Instance members** (3): `InitializeScreen`, `FinalizeScreen`, `GetIsCheatsAvailable`.
- **Extension points** (3): `InitializeScreen`, `FinalizeScreen`, `GetIsCheatsAvailable`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `FinalizeScreen` | method (override) | Overrides the base member. Takes no arguments. |
| `GetIsCheatsAvailable` | method (override) | Overrides the base member. Takes no arguments. Returns `bool`. Read path: prefer it over reaching for the backing store. |
| `InitializeScreen` | method (override) | Overrides the base member. Takes no arguments. |

## Usage Example

```csharp
// GauntletCustomBattleMissionCheatView is internal: the engine creates it, a mod cannot.
// Use it through whatever the engine exposes, and read the members below.
//   InitializeScreen()
//     void
//   FinalizeScreen()
//     void
//   GetIsCheatsAvailable()
//     bool
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 3 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.CustomBattle/Views/GauntletCustomBattleMissionCheatView.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/custombattle/](../) — the other types in this bucket.
