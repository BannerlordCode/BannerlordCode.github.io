---
title: "GauntletLayer"
description: "The ScreenLayer implementation behind the v1.4.5 Gauntlet UI: UIContext, LoadMovie, ReleaseMovie, input ordering, and release boundaries."
---
# GauntletLayer

**Namespace:** `TaleWorlds.Engine.GauntletUI`  
**Module:** `TaleWorlds.Engine.GauntletUI`  
**Type:** `public class GauntletLayer`  
**Base:** `ScreenLayer`  
**File:** `bin/TaleWorlds.Engine.GauntletUI/TaleWorlds.Engine.GauntletUI/GauntletLayer.cs`

## Overview

`GauntletLayer` attaches one or more Gauntlet Movies to the input, focus, ordering, rendering, and destruction lifecycle of a `ScreenLayer`, and is responsible for the release ordering of the `UIContext` and Movie resources. It is one layer in the screen stack, not a global UI manager and not an object that can be kept alive across Missions.

## Mental Model

It is a UI/Engine-layer screen layer, not a global UI manager and not a `ViewModel`. At construction it creates a `TwoDimensionContext`, a `UIContext`, and a gamepad navigation context. `LoadMovie` creates a `GauntletMovieIdentifier` / `IGauntletMovie` with a `ViewModel` data source and tracks it. The layer participates in input, layout, and rendering every frame, and `OnFinalize` checks whether any Movie is still unreleased.

A typical lifetime is: create the layer → configure `InputRestrictions` / focus → `LoadMovie` → add to `ScreenBase` or `MissionScreen` → on resource refresh, release and reload → on close, `ReleaseMovie`, remove the layer, finalize the VM. `UIContext` and the Movie depend on the UI resource table and the engine thread; a layer or movie must not be treated as a cross-screen reusable singleton.

## When to Use / When Not to Use

### When to Use

- A Screen or Mission needs to add a Gauntlet Movie to the screen stack as an orderable `ScreenLayer`.
- You need to participate in input and focus management through `UIContext`, `GamepadNavigationContext`, `InputRestrictions`, or the layer's hit-test.
- You need to preserve the Movie identifier, release the old resources, and reload from the same data source on a hot resource refresh.

### When Not to Use

- Do not use it to replace `ScreenManager`, `ScreenBase`, or the Campaign/Mission lifecycle management.
- Do not release only the ViewModel while leaving the Movie, and do not remove the layer without calling `ReleaseMovie`.
- Do not load a Movie, access `UIContext`, or change bound data from a background thread; UI resources, input, and rendering must run in a stage the game supports.

## Dependencies

```text
ViewModel → GauntletLayer → UIContext / IGauntletMovie
                  ↓                 ↓
            ScreenLayer input   Gauntlet resources
                  ↓
          ScreenBase / MissionScreen
```

- Upstream: [`ViewModel`](../../core-extra/ViewModel) provides reflection-bound properties, notifications, and commands; `GauntletMovieIdentifier` records the movie name, data source, and instance.
- Base class: `ScreenLayer` provides the input context, ordering, activate/deactivate, focus, tick, hit-test, and finalize.
- Downstream: `UIContext`, `IGauntletMovie`, `TaleWorlds.GauntletUI.Data`, and the TwoDimension resources turn the data source into the interface.
- Host: `ScreenBase` or [`Mission`](../../mission/Mission) screen objects add/remove the layer; they decide when the layer is valid.

## Key Members and Timing

| Member | Purpose | Timing and side effects |
|---|---|---|
| `GauntletLayer(string name, int localOrder, bool shouldClear)` | Creates a screen layer with an ordering position. | Initializes `UIContext` and the input/navigation bridge at construction; must be created when the game UI system is ready. |
| `UIContext` | Accesses the Gauntlet widget tree, event manager, scaling, and usable area. | Initialized and finalized by the layer; should not be used after the layer is destroyed. |
| `GamepadNavigationContext` | Connects the focused widget with gamepad navigation. | Related to the current layer's hit-test and screen order; cannot be shared across layers. |
| `LoadMovie(string, ViewModel)` | Loads a movie with a data source and returns a `GauntletMovieIdentifier`. | The identifier must be kept and released by the same layer; the data-source properties must be bindable before the movie loads. |
| `GetMovieIdentifier(string)` | Finds an already-tracked movie identifier by name. | Do not assume non-null when not found; the identifier may already be released during a resource refresh. |
| `ReleaseMovie(GauntletMovieIdentifier)` | Releases the movie and removes it from the layer's tracking list. | Every successfully loaded movie must be released, otherwise `OnFinalize` asserts and keeps the resource. |
| `OnResourceRefreshBegin/End` | Saves the old identifier, releases the old movie, and reloads by data source. | Do not use the old `IGauntletMovie` during a refresh; re-fetch the identifier after reloading. |
| `Tick`, `LateUpdate`, `RenderTick`, `Update` | Handle input, layout, and render updates. | Scheduled by `ScreenLayer` / the screen stack; do not manually simulate the full lifecycle from an arbitrary business thread. |
| `OnFinalize`, `HitTest`, `FocusTest` | Finish resource cleanup and participate in layer hit/focus tests. | All movies must be released before finalize; input order and `InputRestrictions` affect upper/lower UI. |

## Real Mission Integration Path

The v1.4.5 call site in `MissionGauntletSiegeEngineMarker` shows the full sequence:

```csharp
_gauntletLayer = new GauntletLayer("MissionSiegeEngineMarker", ViewOrderPriority, false);
_movie = _gauntletLayer.LoadMovie("SiegeEngineMarker", (ViewModel)(object)_dataSource);
((ScreenBase)base.MissionScreen).AddLayer(_gauntletLayer);

((ScreenBase)base.MissionScreen).RemoveLayer(_gauntletLayer);
_gauntletLayer.ReleaseMovie(_movie);
((ViewModel)_dataSource).OnFinalize();
_movie = null;
_gauntletLayer = null;
_dataSource = null;
```

This is the real Mission UI path: `MissionScreen` hosts the layer, and `_dataSource` is the concrete VM. A real implementation must also handle sprite/resource categories in the close hook, and guarantee the close code runs exactly once.

## Resource Refresh and Input

When a resource refresh begins, the layer copies the current `GauntletMovieIdentifier` list and calls `ReleaseMovie` on each; when the refresh ends it reloads by identifier. Therefore, during a refresh you must not cache the old Movie interface or hand it to a new layer.

`ScreenLayer.InputRestrictions` decides the allowed range of keyboard, mouse, wheel, and controller; `IsFocusLayer`, `FocusTest`, and `HitTest` together decide which layer input lands on. Changing input restrictions alters the behavior of other layers on the same screen, so it should be configured by the host screen in order, not by grabbing focus every frame.

## Risks and Boundaries

- **Movie leak:** `OnFinalize` checks `_movieIdentifiers`; finalizing without calling `ReleaseMovie` triggers an assert and leaves a resource reference.
- **Release order:** stop/remove the host layer first, then release the movie, then call the VM's `OnFinalize` and clear the data source. After the VM or movie is released, do not keep writing to it from event callbacks.
- **UIContext lifecycle:** `UIContext` is null after `ClearContext`; keeping a `Widget`, `IGauntletMovie`, or context for the next screen produces a stale reference.
- **Input conflict:** the layer's ordering, focus, and `InputRestrictions` together decide input consumption. The wrong order can let a mission action layer block the menu, or let UI and the game both respond to a key.
- **Resource/thread boundary:** Movies, fonts, sprites, and TwoDimension resources require the correct game initialization stage and thread; do not create, refresh, or destroy a layer from a background thread.
- **Mission lifecycle:** after `MissionScreen` closes, a Mission behavior must not keep ticking a removed layer; clean up symmetrically in the matching `OnDestroyView` / destroy hook.

## Version Notes

This page is based on the v1.4.5 `TaleWorlds.Engine.GauntletUI.GauntletLayer` and the Mission/UI call sites. Gauntlet movie names, input resources, and the concrete Screen host may change across versions; do not treat one module's movie name as a public API across all versions.

## See Also

- [↑ Engine API parent](../)
- [↔ ViewModel](../../core-extra/ViewModel)
- [↔ ScreenManager](../../gui/ScreenManager)
- [↔ ScreenBase](../../gui/ScreenBase)
- [Related: Mission](../../mission/Mission)
