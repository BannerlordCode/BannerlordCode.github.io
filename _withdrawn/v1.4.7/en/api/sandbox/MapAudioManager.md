---
title: "MapAudioManager"
description: "MapAudioManager — class in SandBox.View.Map.Managers. 3 public members (0 static)."
---

<!-- v147-skeleton -->
# MapAudioManager

**Namespace:** `SandBox.View.Map.Managers`  
**Module:** `SandBox.View`  
**Type:** `internal class MapAudioManager : CampaignEntityVisualComponent`  
**Base:** `CampaignEntityVisualComponent`  
**Source:** `SandBox.View/Map/Managers/MapAudioManager.cs`

## Overview

`MapAudioManager` is an internal class in SandBox.View.Map.Managers. The engine constructs it and exposes it through public APIs; a mod can call the public surface above it but cannot `new` it or reference the type in a signature.

`MapAudioManager` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

It extends CampaignEntityVisualComponent, so the members it does not redeclare are inherited from there. 1 of its own members are properties, which is where most reads and writes land.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MapAudioManager`.
- **Instance members** (2): `Priority`, `OnVisualTick`.
- **Extension points** (2): `Priority`, `OnVisualTick`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `OnVisualTick` | method (override) | Overrides the base member. Takes 3 arguments: `MapScreen screen`, `float realDt`, `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `Priority` | property (override) | Overrides the base member `int` property. Read it for current state; a declared setter writes that state in place. |
| `MapAudioManager` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public MapAudioManager()`.

## Usage Example

```csharp
// MapAudioManager is internal: the engine creates it, a mod cannot.
// Use it through whatever the engine exposes, and read the members below.
//   Priority
//     int
//   OnVisualTick(`MapScreen screen`, `float realDt`, `float dt`)
//     void
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- 2 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.View/Map/Managers/MapAudioManager.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MapScreen](../MapScreen/) — `SandBox.View.Map`.

Section: [api/sandbox/](../) — the other types in this bucket.
