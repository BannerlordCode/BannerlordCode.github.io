---
title: "MissionDisguiseMarkersVM"
description: "MissionDisguiseMarkersVM — class in SandBox.ViewModelCollection.Missions.MainAgentDetection. 1 public member (0 static)."
---

<!-- v147-skeleton -->
# MissionDisguiseMarkersVM

**Namespace:** `SandBox.ViewModelCollection.Missions.MainAgentDetection`  
**Module:** `SandBox.ViewModelCollection`  
**Type:** `public class MissionDisguiseMarkersVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `SandBox.ViewModelCollection/Missions/MainAgentDetection/MissionDisguiseMarkersVM.cs`

## Overview

`MissionDisguiseMarkersVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MissionDisguiseMarkersVM`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `MissionDisguiseMarkersVM` | ctor | Instance entry point. Takes no arguments. Returns ``. |

- Constructed as `public MissionDisguiseMarkersVM()`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new MissionDisguiseMarkersVM();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- The declaration in `SandBox.ViewModelCollection/Missions/MainAgentDetection/MissionDisguiseMarkersVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [MissionDisguiseMarkerItemVM](../MissionDisguiseMarkerItemVM/) — `SandBox.ViewModelCollection.Missions.MainAgentDetection`.

Section: [api/sandbox/](../) — the other types in this bucket.
