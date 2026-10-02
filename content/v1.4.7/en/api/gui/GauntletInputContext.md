---
title: "GauntletInputContext"
description: "GauntletInputContext — class in TaleWorlds.GauntletUI.GauntletInput. 11 public members (0 static)."
---

<!-- v147-skeleton -->
# GauntletInputContext

**Namespace:** `TaleWorlds.GauntletUI.GauntletInput`  
**Module:** `TaleWorlds.GauntletUI`  
**Type:** `public class GauntletInputContext : IReadonlyInputContext`  
**Base:** `IReadonlyInputContext`  
**Source:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GauntletInput/GauntletInputContext.cs`

## Overview

`GauntletInputContext` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends IReadonlyInputContext, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `GauntletInputContext`.
- **Instance members** (10): `GetIsMouseActive`, `GetMousePosition`, `GetMouseMovement`, `GetClickKeys`, `GetAlternateClickKeys`, `GetMouseScrollDelta`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetAlternateClickKeys` | method | Instance entry point. Takes no arguments. Returns `InputKey[]`. Read path: prefer it over reaching for the backing store. |
| `GetClickKeys` | method | Instance entry point. Takes no arguments. Returns `InputKey[]`. Read path: prefer it over reaching for the backing store. |
| `GetControllerLeftStickState` | method | Instance entry point. Takes no arguments. Returns `Vector2`. Read path: prefer it over reaching for the backing store. |
| `GetControllerRightStickState` | method | Instance entry point. Takes no arguments. Returns `Vector2`. Read path: prefer it over reaching for the backing store. |
| `GetIsMouseActive` | method | Instance entry point. Takes no arguments. Returns `bool`. Read path: prefer it over reaching for the backing store. |
| `GetMouseMovement` | method | Instance entry point. Takes no arguments. Returns `Vector2`. Read path: prefer it over reaching for the backing store. |
| `GetMousePosition` | method | Instance entry point. Takes no arguments. Returns `Vector2`. Read path: prefer it over reaching for the backing store. |
| `GetMouseScrollDelta` | method | Instance entry point. Takes no arguments. Returns `float`. Read path: prefer it over reaching for the backing store. |
| `ResetMousePositionOverride` | method | Instance entry point. Takes no arguments. Removes from or clears the collection this type owns. |
| `SetMousePositionOverride` | method | Instance entry point. Takes 1 argument: `Vector2 mousePosition`. Write path: where the engine offers a matching Action or owner method, prefer that instead. |
| `GauntletInputContext` | ctor | Instance entry point. Takes 1 argument: `IInputContext inputContext`. Returns ``. |

- Constructed as `public GauntletInputContext(IInputContext inputContext)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: IReadonlyInputContext.
var gauntletInputContext = new GauntletInputContext(inputContext);

// It declares no lifecycle hooks of its own; it only adds state and helpers.
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- The declaration in `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/GauntletInput/GauntletInputContext.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [IReadonlyInputContext](../IReadonlyInputContext/) — `TaleWorlds.GauntletUI.GauntletInput`.

Section: [api/gui/](../) — the other types in this bucket.
