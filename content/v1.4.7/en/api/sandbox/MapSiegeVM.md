---
title: "MapSiegeVM"
description: "MapSiegeVM — class in SandBox.ViewModelCollection.MapSiege. 4 public members (0 static)."
---

<!-- v147-skeleton -->
# MapSiegeVM

**Namespace:** `SandBox.ViewModelCollection.MapSiege`  
**Module:** `SandBox.ViewModelCollection`  
**Type:** `public class MapSiegeVM : ViewModel`  
**Base:** `ViewModel`  
**Source:** `SandBox.ViewModelCollection/MapSiege/MapSiegeVM.cs`

## Overview

`MapSiegeVM` is a view model: the presentation layer object that a Gauntlet widget binds to. It carries the displayed values, the available commands and the callbacks that turn a click into a game action, but no rendering of its own.

It extends ViewModel, so the members it does not redeclare are inherited from there. It adds its own members rather than shadowing a large part of the base surface.

## Mental Model

A view model is the seam between the widget tree and the game state. The widget reads properties and invokes methods; the view model decides what is allowed and calls the campaign or mission API underneath.

Build one when you add a screen, extend an existing one when you only need extra options, and bind it from the layer that owns the widget. Keep game rules out of it — a view model that mutates the campaign directly is hard to reuse and impossible to test.

Concretely, the surface breaks down like this:

- **Constructed with** (1): `MapSiegeVM`.
- **Instance members** (3): `RefreshValues`, `OnSelectionFromScene`, `Update`.
- **Extension points** (1): `RefreshValues`.

## Key Members

| Member | Kind | What it is for |
| --- | --- | --- |
| `RefreshValues` | method (override) | Overrides the base member. Takes no arguments. Called from the owner’s update loop — do not assume a frame boundary. |
| `OnSelectionFromScene` | method | Instance entry point. Takes 1 argument: `MatrixFrame frameOfEngine`. Callback: the owner invokes it inside its own call stack, so keep it cheap and never throw. |
| `Update` | method | Instance entry point. Takes 1 argument: `float mapCameraDistanceValue`. Called from the owner’s update loop — do not assume a frame boundary. |
| `MapSiegeVM` | ctor | Instance entry point. Takes 6 arguments: `Camera mapCamera`, `MatrixFrame[] batteringRamFrames`, `MatrixFrame[] rangedSiegeEngineFrames`, `MatrixFrame[] towerSiegeEngineFrames`, …. Returns ``. |

- Constructed as `public MapSiegeVM(Camera mapCamera, MatrixFrame[] batteringRamFrames, MatrixFrame[] rangedSiegeEngineFrames, MatrixFrame[] towerSiegeEngineFrames, MatrixFrame[] defenderSiegeEngineFrames, MatrixFrame[] breachableWallFrames)`.

## Usage Example

```csharp
// Built on the UI thread, bound by the Gauntlet layer that owns the screen.
var viewModel = new MapSiegeVM(mapCamera, batteringRamFrames, rangedSiegeEngineFrames, towerSiegeEngineFrames, defenderSiegeEngineFrames, breachableWallFrames);

// Command the widget invokes on confirm:
viewModel.RefreshValues();
```

## Risks and Boundaries

- View models live on the UI thread. Do not block them on campaign work, and do not let them call back into mission code from a property getter.
- Commands must be idempotent or guarded — widgets call them on selection and on confirm.
- A view model that outlives its layer keeps handlers alive and leaks screens.
- 1 of its member is overridable; overriding one changes behaviour for every caller in the process, not just for your mod.
- The declaration in `SandBox.ViewModelCollection/MapSiege/MapSiegeVM.cs` is the v1.4.7 shape. Mods that depend on a member signature must recompile when the game updates; treat the source file, not this page, as the contract.

## Dependencies

Types from this page that are documented in the same tree:

- [SiegeEvent](../../campaign/SiegeEvent/) — `TaleWorlds.CampaignSystem.Siege`.
- [PlayerSiege](../../campaign/PlayerSiege/) — `TaleWorlds.CampaignSystem.Siege`.
- [MapSiegePOIVM](../MapSiegePOIVM/) — `SandBox.ViewModelCollection.MapSiege`.
- [MapSiegeProductionVM](../MapSiegeProductionVM/) — `SandBox.ViewModelCollection.MapSiege`.
- [BesiegerCamp](../../campaign/BesiegerCamp/) — `TaleWorlds.CampaignSystem.Siege`.

Section: [api/sandbox/](../) — the other types in this bucket.
