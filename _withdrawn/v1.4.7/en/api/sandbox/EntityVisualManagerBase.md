---
title: "EntityVisualManagerBase"
description: "EntityVisualManagerBase — class in SandBox.View.Map.Managers. 2 public members (1 static)."
---

<!-- v147-skeleton -->
# EntityVisualManagerBase

**Namespace:** `SandBox.View.Map.Managers`  
**Module:** `SandBox.View`  
**Type:** `public abstract class EntityVisualManagerBase<TEntity> : EntityVisualManagerBase`  
**Base:** `EntityVisualManagerBase`  
**Source:** `SandBox.View/Map/Managers/EntityVisualManagerBase.2.cs`

## Overview

`EntityVisualManagerBase` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends EntityVisualManagerBase, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Static entry points** (1): `GetEntityVisualManagerBase`.
- **Instance members** (1): `GetVisualOfEntity`.
- **Extension points** (1): `GetVisualOfEntity`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetEntityVisualManagerBase` | method (static) | Static entry point. Takes no arguments. Returns `EntityVisualManagerBase<TEntity>`. Read path: prefer it over reaching for the backing store. |
| `GetVisualOfEntity` | method (abstract) | Abstract — a subclass must supply it. Takes 1 argument: `TEntity entity`. Returns `MapEntityVisual<TEntity>`. Read path: prefer it over reaching for the backing store. |

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: EntityVisualManagerBase.
EntityVisualManagerBase.GetEntityVisualManagerBase();

// It declares no lifecycle hooks of its own; it only adds state and helpers.
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.View/Map/Managers/EntityVisualManagerBase.2.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MapEntityVisual](../MapEntityVisual/) — `SandBox.View.Map.Visuals`.
- [SandBoxViewSubModule](../SandBoxViewSubModule/) — `SandBox.View`.

Section: [api/sandbox/](../) — the other types in this bucket.
