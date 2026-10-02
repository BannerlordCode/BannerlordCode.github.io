---
title: "SpawnPointUnits"
description: "SpawnPointUnits — class in SandBox.View.Missions.SandBox. 10 public members (0 static)."
---

<!-- v147-skeleton -->
# SpawnPointUnits

**Namespace:** `SandBox.View.Missions.SandBox`  
**Module:** `SandBox.View`  
**Type:** `public class SpawnPointUnits`  
**Source:** `SandBox.View/Missions/SandBox/SpawnPointUnits.cs`

## Overview

`SpawnPointUnits` is a UI-layer type: it owns a widget subtree or the lifetime of something on screen. It creates and destroys visuals and forwards user input; the game state it displays is owned elsewhere.

## Mental Model

Split the responsibility in half. The view decides *what is on screen and how it reacts*; the view model or subsystem decides *what the values mean*. A view that also mutates the campaign becomes impossible to reason about because the screen lifetime and the campaign lifetime no longer match.

Views are created and torn down constantly — screen changes, layer pushes, mission end. Never hold a reference to one past its lifetime.

Concretely, the surface breaks down like this:

- **Constructed with** (2): `SpawnPointUnits`, `SpawnPointUnits`.
- **Instance members** (6): `SpName`, `Place`, `MinCount`, `MaxCount`, `Type`, `SceneType`.
- **Data and constants** (2): `CurrentCount`, `SpawnedAgentCount`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `MaxCount` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `MinCount` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `Place` | property | Instance entry point `SpawnPointUnits.SceneType` property. Read it for current state; a declared setter writes that state in place. |
| `SceneType` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `SpName` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `Type` | property | Instance entry point `string` property. Read it for current state; a declared setter writes that state in place. |
| `SpawnPointUnits` | ctor | Instance entry point. Takes 4 arguments: `string sp_name`, `SpawnPointUnits.SceneType place`, `int minCount`, `int maxCount`. Returns ``. |
| `SpawnPointUnits` | ctor | Instance entry point. Takes 5 arguments: `string sp_name`, `SpawnPointUnits.SceneType place`, `string type`, `int minCount`, …. Returns ``. |
| `CurrentCount` | field | Instance entry point `int` field — direct storage with no validation or notification. |
| `SpawnedAgentCount` | field | Instance entry point `int` field — direct storage with no validation or notification. |

- Constructed as `public SpawnPointUnits(string sp_name, SpawnPointUnits.SceneType place, int minCount, int maxCount)`.
- Constructed as `public SpawnPointUnits(string sp_name, SpawnPointUnits.SceneType place, string type, int minCount, int maxCount)`.

## Usage Example

```csharp
// A view/widget is created and destroyed by the layer that owns it.
// Reach it through the screen, not by caching it past that screen.
var spawnPointUnits = new SpawnPointUnits(sp_name, place, minCount, maxCount);

// It declares no lifecycle hooks of its own; it only adds state and helpers.
```

## Risks and Boundaries

- UI construction happens on the render thread while the campaign tick wants the same objects; do not call into the campaign from a layout callback.
- A view kept alive by an event handler leaks the whole screen.
- Every view must clean up in its own finalize path; the engine does not do it for you.
- The declaration in `SandBox.View/Missions/SandBox/SpawnPointUnits.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Every type this page touches is documented outside the API reference tree; follow the namespace above into the decompiled source.

Section: [api/sandbox/](../) — the other types in this bucket.
