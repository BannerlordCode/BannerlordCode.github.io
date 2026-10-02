---
title: "GauntletCameraFadeView"
description: "GauntletCameraFadeView — class in TaleWorlds.MountAndBlade.GauntletUI. 7 public members (1 static)."
---

<!-- v147-skeleton -->
# GauntletCameraFadeView

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`  
**Type:** `public class GauntletCameraFadeView : GlobalLayer, IScreenFadeHandler`  
**Base:** `GlobalLayer, IScreenFadeHandler`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletCameraFadeView.cs`

## Overview

`GauntletCameraFadeView` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends GlobalLayer, IScreenFadeHandler, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GauntletCameraFadeView`.
- **Static entry points** (1): `Initialize`.
- **Instance members** (5): `OnTick`, `BeginFadeOutAndIn`, `BeginFadeOut`, `BeginFadeIn`, `GetScreenFadeState`.
- **Extension points** (1): `OnTick`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Initialize` | method (static) | Static entry point. Takes no arguments. |
| `OnTick` | method (override) | Overrides the base member. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `BeginFadeIn` | method | Instance entry point. Takes 1 argument: `float fadeInDuration`. |
| `BeginFadeOut` | method | Instance entry point. Takes 1 argument: `float fadeOutDuration`. |
| `BeginFadeOutAndIn` | method | Instance entry point. Takes 3 arguments: `float fadeOutDuration`, `float blackOutDuration`, `float fadeInDuration`. |
| `GetScreenFadeState` | method | Instance entry point. Takes no arguments. Returns `ScreenFadeController.ScreenFadeState`. Read path: prefer it over reaching for the backing store. |
| `GauntletCameraFadeView` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public GauntletCameraFadeView()`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: GlobalLayer, IScreenFadeHandler.
var gauntletCameraFadeView = new GauntletCameraFadeView();
GauntletCameraFadeView.Initialize();

// Lifecycle hooks this type declares:
//   protected override void OnTick(float dt)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI/GauntletCameraFadeView.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [GlobalLayer](../../gui/GlobalLayer/) — `TaleWorlds.ScreenSystem`.
- [BindingListFloatItem](../../viewmodel/BindingListFloatItem/) — `TaleWorlds.Core.ViewModelCollection.Generic`.
- [Min](../../core-extra/Min/) — `TaleWorlds.LinQuick`.

Section: [api/mission-ext/](../) — the other types in this bucket.
