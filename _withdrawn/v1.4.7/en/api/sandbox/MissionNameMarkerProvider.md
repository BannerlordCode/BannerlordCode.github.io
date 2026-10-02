---
title: "MissionNameMarkerProvider"
description: "MissionNameMarkerProvider — class in SandBox.ViewModelCollection.Missions.NameMarker. 9 public members (0 static)."
---

<!-- v147-skeleton -->
# MissionNameMarkerProvider

**Namespace:** `SandBox.ViewModelCollection.Missions.NameMarker`  
**Module:** `SandBox.ViewModelCollection`  
**Type:** `public abstract class MissionNameMarkerProvider`  
**Source:** `SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerProvider.cs`

## Overview

`MissionNameMarkerProvider` owns a subsystem: it holds the live set of objects of one kind, keeps them in sync with the world, and hands out references to them. Subsystems are shared — a second instance means a second, divergent copy of the truth.

## Mental Model

Read a manager as the single owner of a collection, not as a utility bag. Everything that mutates the collection goes through its methods, and everything else reads the collections it exposes.

Because the instance is shared and long-lived, do not stash per-campaign scratch data on it. Keep it on the campaign object, the party or the hero you are working on.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MissionNameMarkerProvider`.
- **Instance members** (8): `CreateMarkers`, `Initialize`, `Destroy`, `Tick`, `OnInitialize`, `OnDestroy`, ….
- **Extension points** (4): `CreateMarkers`, `OnInitialize`, `OnDestroy`, `OnTick`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CreateMarkers` | method (abstract) | Abstract — a subclass must supply it. Takes 1 argument: `List<MissionNameMarkerTargetBaseVM> markers`. Factory-shaped: prefer it over constructing the type yourself, it sets up the invariants. |
| `Destroy` | method | Instance entry point. Takes 1 argument: `Mission mission`. |
| `Initialize` | method | Instance entry point. Takes 2 arguments: `Mission mission`, `Action onSetMarkersDirty`. |
| `OnDestroy` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `Mission mission`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnInitialize` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `Mission mission`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `OnTick` | method (virtual) | Virtual — override it to change behaviour for every caller. Takes 1 argument: `float dt`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `Tick` | method | Instance entry point. Takes 1 argument: `float dt`. Called from the owner’s update loop — do not assume a frame boundary. |
| `MissionNameMarkerProvider` | ctor | Instance entry point. Takes no arguments. Returns ``. |
| `SetMarkersDirty` | method | Protected — for subclasses only. Takes no arguments. Write path: where the engine offers a matching Action or owner method, prefer that instead. |

- Constructed as `public MissionNameMarkerProvider()`.

## Usage Example

```csharp
// Reach the one live instance through the engine; do not construct a second copy.
var missionNameMarkerProvider = new MissionNameMarkerProvider();
```

## Risks and Boundaries

- Never construct a manager yourself when the engine already owns one; the duplicate will drift from the live state.
- Do not mutate the collection while enumerating it — materialise a list first if a callback can add or remove entries.
- Most managers are only valid between campaign start and campaign end.
- 4 of its members are overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerProvider.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MissionNameMarkerTargetBaseVM](../MissionNameMarkerTargetBaseVM/) — `SandBox.ViewModelCollection.Missions.NameMarker`.

Section: [api/sandbox/](../) — the other types in this bucket.
