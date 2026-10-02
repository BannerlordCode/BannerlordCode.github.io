---
title: "MapSiegePOIVM"
description: "MapSiegePOIVM — class in SandBox.ViewModelCollection.MapSiege. 29 public members (0 static)."
---

<!-- v147-skeleton -->
# MapSiegePOIVM

**Namespace:** `SandBox.ViewModelCollection.MapSiege`  
**Module:** `SandBox.ViewModelCollection`  
**Type:** `public class MapSiegePOIVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `SandBox.ViewModelCollection/MapSiege/MapSiegePOIVM.cs`

## Overview

`MapSiegePOIVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. 21 of its own members are properties, which is where most reads and writes land.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MapSiegePOIVM`.
- **Instance members** (28): `Type`, `MachineIndex`, `LatestW`, `Machine`, `MapSceneLocationFrame`, `ExecuteSelection`, ….

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `CurrentHitpoints` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `ExecuteHideTooltip` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteSelection` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `ExecuteShowTooltip` | method | Instance entry point. Takes no arguments. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `HasItem` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsConstructing` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsFireVersion` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsInside` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsInVisibleRange` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsPlayerSidePOI` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `IsSelected` | property | Instance entry point `bool` property. Predicate: use it as a gate, and expect `false` rather than an exception when the answer is no. |
| `LatestW` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `Machine` | property | Instance entry point `SiegeEvent.SiegeEngineConstructionProgress` property. Read it for current state; a declared setter writes that state in place. |
| `MachineIndex` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `MachineType` | property | Instance entry point `int` property. Read it for current state; a declared setter writes that state in place. |
| `MachineTypes` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `MapSceneLocationFrame` | property | Instance entry point `MatrixFrame` property. Read it for current state; a declared setter writes that state in place. |
| `MaxHitpoints` | property | Instance entry point `float` property. Read it for current state; a declared setter writes that state in place. |
| `POIType` | property | Instance entry point `enum` property. Read it for current state; a declared setter writes that state in place. |
| `Position` | property | Instance entry point `Vec2` property. Read it for current state; a declared setter writes that state in place. |
| `QueueIndex` | property | Instance entry point `int` property. Adds to the collection or relation this type owns. |
| `RefreshBinding` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `RefreshDistanceValue` | method | Instance entry point. Takes 1 argument: `float newDistance`. Called from the owner’s update loop — do not assume a frame boundary. |
| `RefreshPosition` | method | Instance entry point. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |

- Constructed as `public MapSiegePOIVM(MapSiegePOIVM.POIType type, MatrixFrame mapSceneLocation, Camera mapCamera, int machineIndex, Action<MapSiegePOIVM> onSelection)`.

5 further public members follow the same patterns.
## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new MapSiegePOIVM(type, mapSceneLocation, mapCamera, machineIndex, onSelection);
// viewModel.Type = ...;   // MapSiegePOIVM.POIType
// viewModel.MachineIndex = ...;   // int
// viewModel.LatestW = ...;   // float

// Command the widget invokes on confirm:
viewModel.ExecuteSelection();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- The declaration in `SandBox.ViewModelCollection/MapSiege/MapSiegePOIVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [SiegeEvent](../../campaign/SiegeEvent/) — `TaleWorlds.CampaignSystem.Siege`.
- [PlayerSiege](../../campaign/PlayerSiege/) — `TaleWorlds.CampaignSystem.Siege`.
- [BesiegerCamp](../../campaign/BesiegerCamp/) — `TaleWorlds.CampaignSystem.Siege`.
- [InformationManager](../../core-extra/InformationManager/) — `TaleWorlds.Library`.
- [SandBoxUIHelper](../SandBoxUIHelper/) — `SandBox.ViewModelCollection`.

Section: [api/sandbox/](../) — the other types in this bucket.
