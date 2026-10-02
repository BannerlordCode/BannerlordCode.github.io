---
title: "MapEventVisualItemVM"
description: "MapEventVisualItemVM — class in SandBox.ViewModelCollection.Map. 9 public members (0 static)."
---

<!-- v147-skeleton -->
# MapEventVisualItemVM

**Namespace:** `SandBox.ViewModelCollection.Map`  
**Module:** `SandBox.ViewModelCollection`  
**Type:** `public class MapEventVisualItemVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `SandBox.ViewModelCollection/Map/MapEventVisualItemVM.cs`

## Overview

`MapEventVisualItemVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 4 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MapEventVisualItemVM`.
- **Instance members** (8): `MapEvent`, `UpdateProperties`, `ParallelUpdatePosition`, `DetermineIsVisibleOnMap`, `UpdateBindingProperties`, `Position`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `DetermineIsVisibleOnMap` | method | Instance entry point. Takes no arguments. |
| `EventType` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `IsVisibleOnMap` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `MapEvent` | property | Instance entry point `MapEvent` property. Read it for current state; a declared setter writes that state in place. |
| `ParallelUpdatePosition` | method | Instance entry point. Takes no arguments. |
| `Position` | property | Instance entry point `Vec2` property. Read it for current state; a declared setter writes that state in place. |
| `UpdateBindingProperties` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `UpdateProperties` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `MapEventVisualItemVM` | ctor | Instance entry point. Takes 2 arguments: `Camera mapCamera`, `MapEvent mapEvent`. Returns ``. |

- Constructed as `public MapEventVisualItemVM(Camera mapCamera, MapEvent mapEvent)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new MapEventVisualItemVM(mapCamera, mapEvent);
// viewModel.MapEvent = ...;   // MapEvent
// viewModel.Position = ...;   // Vec2
// viewModel.EventType = ...;   // int

// Command the widget invokes on confirm:
viewModel.UpdateProperties();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- The declaration in `SandBox.ViewModelCollection/Map/MapEventVisualItemVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [SandBoxUIHelper](../SandBoxUIHelper/) — `SandBox.ViewModelCollection`.

Section: [api/sandbox/](../) — the other types in this bucket.
