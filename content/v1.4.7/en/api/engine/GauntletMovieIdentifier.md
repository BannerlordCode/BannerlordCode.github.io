---
title: "GauntletMovieIdentifier"
description: "GauntletMovieIdentifier — class in TaleWorlds.Engine.GauntletUI. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# GauntletMovieIdentifier

**Namespace:** `TaleWorlds.Engine.GauntletUI`  
**Module:** `TaleWorlds.Engine.GauntletUI`  
**Type:** `public class GauntletMovieIdentifier`  
**Source:** `TaleWorlds.Engine.GauntletUI/GauntletMovieIdentifier.cs`

## Overview

`GauntletMovieIdentifier` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Instance members** (3): `MovieName`, `Movie`, `DataSource`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `DataSource` | property | Instance entry point `ViewModel` property. Read it for current state; a declared setter writes that state in place. |
| `Movie` | property | Instance entry point `IGauntletMovie` property. Read it for current state; a declared setter writes that state in place. |
| `MovieName` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// No public constructor: the widget factory in the owning layer creates it.
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- The declaration in `TaleWorlds.Engine.GauntletUI/GauntletMovieIdentifier.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [IGauntletMovie](../../gui/IGauntletMovie/) — `TaleWorlds.GauntletUI.Data`.

Section: [api/engine/](../) — the other types in this bucket.
