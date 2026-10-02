---
title: "MissionNameMarkerFactory"
description: "MissionNameMarkerFactory — class in SandBox.ViewModelCollection.Missions.NameMarker. 6 public members (6 static)."
---

<!-- v147-skeleton -->
# MissionNameMarkerFactory

**Namespace:** `SandBox.ViewModelCollection.Missions.NameMarker`  
**Module:** `SandBox.ViewModelCollection`  
**Type:** `public static class MissionNameMarkerFactory`  
**Source:** `SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerFactory.cs`

## Overview

`MissionNameMarkerFactory` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Static entry points** (5): `PushContext`, `PopContext`, `CollectProviders`, `UpdateProviders`, `DefaultContext`.
- **Data and constants** (1): `OnProvidersChanged`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CollectProviders` | method (static) | Static entry point. Takes no arguments. Returns `List<MissionNameMarkerProvider>`. |
| `DefaultContext` | property (static) | Static entry point `MissionNameMarkerFactory.INameMarkerProviderContext` property. Read it for current state; a declared setter writes that state in place. |
| `PopContext` | method (static) | Static entry point. Takes 1 argument: `string contextId`. Removes from or clears the collection this type owns. |
| `PushContext` | method (static) | Static entry point. Takes 2 arguments: `string name`, `bool addDefaultProviders`. Returns `MissionNameMarkerFactory.INameMarkerProviderContext`. Adds to the collection or relation this type owns. |
| `UpdateProviders` | method (static) | Static entry point. Takes 3 arguments: `MissionNameMarkerProvider[] existingProviders`, `out List<MissionNameMarkerProvider> addedProviders`, `out List<MissionNameMarkerProvider> removedProviders`. Called from the owner’s update loop — do not assume a frame boundary. |
| `OnProvidersChanged` | field (static) | Static entry point `Action` field — direct storage with no validation or notification. |

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
// The engine or the owning screen constructs the view model; bind it from the layer.
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- The declaration in `SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerFactory.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MissionNameMarkerProvider](../MissionNameMarkerProvider/) — `SandBox.ViewModelCollection.Missions.NameMarker`.

Section: [api/sandbox/](../) — the other types in this bucket.
