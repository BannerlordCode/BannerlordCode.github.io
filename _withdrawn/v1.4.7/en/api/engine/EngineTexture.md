---
title: "EngineTexture"
description: "EngineTexture — class in TaleWorlds.Engine.GauntletUI. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# EngineTexture

**Namespace:** `TaleWorlds.Engine.GauntletUI`  
**Module:** `TaleWorlds.Engine.GauntletUI`  
**Type:** `public class EngineTexture : ITexture`  
**Base:** `ITexture`  
**Source:** `TaleWorlds.Engine.GauntletUI/EngineTexture.cs`

## Overview

`EngineTexture` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

It extends ITexture, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `EngineTexture`.
- **Instance members** (2): `Texture`, `GetHashCode`.
- **Extension points** (1): `GetHashCode`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `GetHashCode` | method (override) | Overrides the base member. Takes no arguments. Returns `int`. Read path: prefer it over reaching for the backing store. |
| `Texture` | property | Instance entry point `Texture` property. Read it for current state; a declared setter writes that state in place. |
| `EngineTexture` | ctor | Instance entry point. Takes 1 argument: `Texture engineTexture`. Returns ``. |

- Constructed as `public EngineTexture(Texture engineTexture)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
// Base widget: ITexture.
var engineTexture = new EngineTexture(engineTexture);

// Lifecycle hooks this type declares:
//   public override int GetHashCode()
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `TaleWorlds.Engine.GauntletUI/EngineTexture.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/engine/](../) — the other types in this bucket.
