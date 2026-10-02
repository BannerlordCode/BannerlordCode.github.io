---
title: "GlobalLayer"
description: "GlobalLayer — class in TaleWorlds.ScreenSystem. 6 public members (0 static)."
---

<!-- v147-skeleton -->
# GlobalLayer

**Namespace:** `TaleWorlds.ScreenSystem`  
**Module:** `TaleWorlds.ScreenSystem`  
**Type:** `public class GlobalLayer : IComparable`  
**Base:** `IComparable`  
**Source:** `TaleWorlds.ScreenSystem/GlobalLayer.cs`

## Overview

`GlobalLayer` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends IComparable, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Instance members** (6): `Layer`, `OnEarlyTick`, `OnTick`, `OnLateTick`, `CompareTo`, `UpdateLayout`.
- **Extension points** (4): `OnEarlyTick`, `OnTick`, `OnLateTick`, `UpdateLayout`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `UpdateLayout` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `CompareTo` | method | Instance entry point. Takes 1 argument: `object obj`. Returns `int`. |
| `Layer` | property | Instance entry point `ScreenLayer` property. Read it for current state; a declared setter writes that state in place. |
| `OnEarlyTick` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnLateTick` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTick` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: IComparable.

// Lifecycle hooks this type declares:
//   protected virtual void OnEarlyTick(float dt)
//   protected virtual void OnTick(float dt)
//   protected virtual void OnLateTick(float dt)
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.ScreenSystem/GlobalLayer.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/gui/](../) — the other types in this bucket.
