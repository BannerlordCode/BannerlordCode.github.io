---
title: "GauntletLayer: Screen Layers, Movies, and Input Lifetime"
description: "The v1.4.5 Gauntlet UI ScreenLayer implementation, covering UIContext, LoadMovie, ReleaseMovie, input order, and teardown."
---
# GauntletLayer

## Metadata

- **Namespace:** `TaleWorlds.Engine.GauntletUI`
- **Module:** `TaleWorlds.Engine.GauntletUI`
- **Type:** `public class GauntletLayer`
- **Base:** `ScreenLayer`
- **Source:** `bin/TaleWorlds.Engine.GauntletUI/TaleWorlds.Engine.GauntletUI/GauntletLayer.cs`

## Responsibility in one sentence

`GauntletLayer` attaches one or more Gauntlet movies to the `ScreenLayer` input, focus, render, and teardown lifetime.

## Mental model

This is a UI/Engine screen layer, not a global UI manager and not a `ViewModel`. Construction creates a `TwoDimensionContext`, `UIContext`, and gamepad navigation context; `LoadMovie` creates and tracks a `GauntletMovieIdentifier`/`IGauntletMovie` for a `ViewModel` data source. The layer participates in input, layout, and render ticks, and `OnFinalize` checks for movies that were not released.

The normal lifetime is: create the layer → configure input restrictions/focus → `LoadMovie` → add it to a `ScreenBase` or `MissionScreen` → release and reload during resource refresh → `ReleaseMovie`, remove the layer, finalize the VM, and clear references on close. `UIContext` and movies depend on UI resource tables and the engine thread, so the layer or movie is not a cross-screen singleton.

## When to use it, and when not to

### Use it when

- A Screen or Mission needs a Gauntlet movie as a sortable `ScreenLayer` in the screen stack.
- The UI needs `UIContext`, `GamepadNavigationContext`, `InputRestrictions`, or layer hit-testing for input and focus.
- Resources may refresh and the layer must release movies and reload them from their original data sources.

### Do not use it when

- Do not replace `ScreenManager`, `ScreenBase`, or Campaign/Mission lifetime management with a layer.
- Do not finalize only the ViewModel while keeping a movie, or remove only the layer without calling `ReleaseMovie`.
- Do not load movies, access `UIContext`, or change bound data from a background thread or unsupported game stage.

## Dependency graph

```text
ViewModel → GauntletLayer → UIContext / IGauntletMovie
                  ↓                 ↓
            ScreenLayer input   Gauntlet resources
                  ↓
          ScreenBase / MissionScreen
```

- Upstream: [`ViewModel`](../../core-extra/ViewModel) supplies reflected properties, notifications, and commands; `GauntletMovieIdentifier` records a movie name, data source, and instance.
- Base layer: `ScreenLayer` provides input context, ordering, activation/deactivation, focus, ticks, hit testing, and finalization.
- Downstream: `UIContext`, `IGauntletMovie`, `TaleWorlds.GauntletUI.Data`, and TwoDimension resources turn the data source into widgets.
- Host: `ScreenBase` or a [`Mission`](../../mission/Mission) screen adds and removes the layer and determines when it is valid.

## Important members and timing

| Member | Use | Timing and side effects |
|---|---|---|
| `GauntletLayer(string name, int localOrder, bool shouldClear)` | Create an ordered screen layer. | Construction initializes `UIContext` and the input/navigation bridge; create it only after the game UI system is ready. |
| `UIContext` | Access the Gauntlet widget tree, events, scale, and usable area. | It is initialized and finalized by the layer; do not use it after the layer is destroyed. |
| `GamepadNavigationContext` | Connect focused widgets to controller navigation. | It depends on the current layer's hit tests and screen order and cannot be shared across layers. |
| `LoadMovie(string, ViewModel)` | Load a movie with a data source and return a `GauntletMovieIdentifier`. | The same layer must retain and release the identifier; the data source must expose bindable properties before loading. |
| `GetMovieIdentifier(string)` | Find a tracked movie identifier by name. | A missing identifier is not non-null by contract; resource refresh may already have released it. |
| `ReleaseMovie(GauntletMovieIdentifier)` | Release a movie and remove it from the layer's tracked collection. | Every successful load must be released, otherwise `OnFinalize` asserts and resources remain referenced. |
| `OnResourceRefreshBegin/End` | Save identifiers, release movies, then reload them from their data sources. | Do not use an old `IGauntletMovie` during refresh; retrieve the identifier again after reload. |
| `Tick`, `LateUpdate`, `RenderTick`, `Update` | Process input, layout, and rendering updates. | Scheduled by the screen/layer stack; do not simulate the complete lifetime from arbitrary business code. |
| `OnFinalize`, `HitTest`, `FocusTest` | Tear down resources and participate in layer hit/focus decisions. | All movies must be released before finalization; order and restrictions affect other layers. |

## Real Mission integration path

The v1.4.5 `MissionGauntletSiegeEngineMarker` call site shows the complete order:

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

This is the real Mission UI route: `MissionScreen` owns the layer and `_dataSource` is a concrete VM. The actual handler also unloads its sprite/resource category and must make the close hook idempotent.

## Resource refresh and input

At refresh begin, the layer copies its current `GauntletMovieIdentifier` entries, releases each movie, and reloads them from the identifiers at refresh end. A cached old movie interface must therefore not be handed to a new layer or used during the gap.

`ScreenLayer.InputRestrictions` controls which key, mouse, wheel, and controller inputs are allowed; `IsFocusLayer`, `FocusTest`, and `HitTest` determine which layer receives focus and input. Changing restrictions changes other layers on the same screen, so the host screen should configure them in order instead of taking focus every frame.

## Risks and boundaries

- **Movie leaks:** `OnFinalize` checks `_movieIdentifiers`; finalizing without `ReleaseMovie` triggers an assertion and leaves resource references.
- **Teardown order:** Remove or stop the host layer, release the movie, then call `OnFinalize` on the VM and clear the data source. Released objects must not receive event callbacks.
- **UIContext lifetime:** `UIContext` becomes null after `ClearContext`; retaining a Widget, `IGauntletMovie`, or context for the next screen creates a stale reference.
- **Input conflicts:** Layer order, focus, and `InputRestrictions` determine who consumes input. A wrong order can make a Mission control layer block a menu or let both UI and gameplay handle a key.
- **Resource and thread boundary:** Movies, fonts, sprites, and TwoDimension resources require the supported initialization stage and game thread; do not create, refresh, or destroy a layer on a background thread.
- **Mission lifetime:** After `MissionScreen` closes, a Mission behavior must not tick a removed layer. Clean it symmetrically in the corresponding destroy hook.

## Version note

This page follows v1.4.5 `TaleWorlds.Engine.GauntletUI.GauntletLayer` and its Mission/UI call sites. Movie names, input resources, and concrete Screen hosts can vary by version; a movie name from one module is not a universal public API.

## Navigation

- [↑ Engine API parent](../)
- [↔ ViewModel](../../core-extra/ViewModel)
- [↔ ScreenManager](../../gui/ScreenManager)
- [↔ ScreenBase](../../gui/ScreenBase)
- [Related: Mission](../../mission/Mission)
