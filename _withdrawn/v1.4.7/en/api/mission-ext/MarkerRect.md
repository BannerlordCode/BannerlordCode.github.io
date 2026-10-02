---
title: "MarkerRect"
description: "MarkerRect — class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker. 12 public members (0 static)."
---

<!-- v147-skeleton -->
# MarkerRect

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission.NameMarker`  
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`  
**Type:** `public class MarkerRect`  
**Source:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/MarkerRect.cs`

## Overview

`MarkerRect` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MarkerRect`.
- **Instance members** (11): `Left`, `Right`, `Top`, `Bottom`, `CenterX`, `CenterY`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `Bottom` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `CenterX` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `CenterY` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `Height` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `IsOverlapping` | method | Instance entry point. Takes 1 argument: `MarkerRect other`. Returns `bool`. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `Left` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `Reset` | method | Instance entry point. Takes no arguments. |
| `Right` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `Top` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `UpdatePoints` | method | Instance entry point. Takes 4 arguments: `float left`, `float right`, `float top`, `float bottom`. Called from the owner’s update loop — do not assume a frame boundary. |
| `Width` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `MarkerRect` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public MarkerRect()`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
var markerRect = new MarkerRect();

// It declares no lifecycle hooks of its own; it only adds state and helpers.
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- The declaration in `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/NameMarker/MarkerRect.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/mission-ext/](../) — the other types in this bucket.
