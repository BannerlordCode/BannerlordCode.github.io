---
title: "GauntletLayer"
description: "The concrete ScreenLayer that runs Gauntlet UI: loads an XML prefab as a movie, binds it to a ViewModel, renders it, turns raw input into UI events, and reports whether gamepad navigation is available."
---
# GauntletLayer

**Namespace:** `TaleWorlds.Engine.GauntletUI`
**Module:** `TaleWorlds.Engine.GauntletUI`
**Type:** `public class GauntletLayer : ScreenLayer`
**Base:** `TaleWorlds.ScreenSystem.ScreenLayer`
**Source:** `TaleWorlds.Engine.GauntletUI/GauntletLayer.cs` (declaration at line 15)

## Overview

`GauntletLayer` is where most mod UI actually enters the engine. Bannerlord's UI is declarative: an XML prefab describes the widget tree, its layout and its binding paths, and a [ViewModel](../../core-extra/ViewModel) supplies the data. `GauntletLayer` is the bridge — it owns the loaded movie, hands the view model to the binding engine, translates raw key presses into UI events, and lets the widget tree answer hit tests.

It extends [ScreenLayer](../../gui/ScreenLayer) rather than replacing it, so it inherits the whole ordering, focus and input-consumption contract and only overrides the parts where Gauntlet has real answers. That means a derived class should treat `HitTest`, `FocusTest`, `IsFocusedOnInput`, `ProcessEvents`, `Update`, `Tick`, `LateUpdate`, `RenderTick` and `RefreshGlobalOrder` as already answered by the base and, if it overrides them, must still chain to `base`.

The class owns four distinct resources, and confusing any two of them is the usual source of UI bugs:

- the **movie** — the loaded prefab, represented by a `GauntletMovieIdentifier`, obtained from `LoadMovie` and handed back to `ReleaseMovie`;
- the **view model** — ordinary managed objects, no engine handle;
- the **UI context** — `UIContext`, the Gauntlet rendering context created during activation;
- the **native 2D handles** — `TwoDimensionView` and `TwoDimensionPlatform`, which are `readonly` fields pointing into native code.

It also answers `GetIsAvailableForGamepadNavigation()`, which is how a screen decides whether to show controller prompts or mouse prompts.

## Mental Model

**A movie is a reference-counted resource with a handle, and the handle is your responsibility.** `LoadMovie(movieName, dataSource)` returns a `GauntletMovieIdentifier`. If you drop it on the floor, the movie stays resident. `ReleaseMovie(identifier)` is the only way back, and the count is real: load the same prefab three times and you release three times. The discipline that works is one field, assigned at load, nulled at release, cleared in `OnFinalize`.

**Binding is by property name, at runtime, and failure is silent.** The prefab names a path; the binding engine resolves it against the view model with `GetPropertyValue`. A typo produces no compile error, no exception, and an empty widget. When a bound widget is blank, turn on `ViewModel.UIDebugMode` before you start reading your own code. The same silence applies to commands: the prefab's command name is resolved through `ExecuteCommand`, and an unmatched name simply does nothing.

**Data changes go through notification, not through rendering.** Change a field, call `OnPropertyChanged` (or `SetField`, which does it for you), and let the binding pull. Mutating view-model state from `RenderTick` breaks the separation the framework assumes, and on platforms where rendering is not on the logic thread it is a genuine race.

**Layout is recomputed on demand, not continuously.** Widgets do not reposition themselves. Call `UpdateLayout()` after the viewport changes, after widgets appear or disappear, and after anything that alters the measured size of the tree. Skipping it leaves widgets at stale coordinates — the classic "it is fine until I resize the window" report.

**Input follows the layer contract, not the widget tree's intentions.** Gauntlet routes keys into its widget tree, but the *layer* still has to declare what it consumed via `EarlyProcessEvents`. The focused widget decides what responds; the layer still decides what the layers below it get to see.

## When to Use / When Not To Use

- **Use** for any screen whose content is described by a Gauntlet prefab file.
- **Use** as a global HUD layer, wrapped in a `GlobalLayer` (see the `ScreenManager` page) when the layer must outlive any single screen.
- **Use** `GetIsAvailableForGamepadNavigation()` to choose between controller and mouse prompt art.
- **Use** `OnResourceRefreshBegin` / `OnResourceRefreshEnd` pairs if your layer caches anything tied to a movie.
- **Do not** mutate view-model state from `RenderTick`.
- **Do not** override `HitTest`, `FocusTest` or `Update` without calling `base` — the base implementations contain the actual movie routing.
- **Do not** forget `ReleaseMovie`; a leaked movie is not reclaimed on screen close.
- **Do not** treat `TwoDimensionView` or `TwoDimensionPlatform` as stable objects to cache state on across frames.

## Members

### Construction and contexts

| Member | What it is for |
| --- | --- |
| `public GauntletLayer(string name, int localOrder, bool shouldClear = false)` | Constructor. `name` identifies the layer for lookup and debugging, `localOrder` decides stacking within its screen, and `shouldClear` decides whether the layer clears the frame (a dialog) or composites over what is behind it (a HUD). Get it wrong and the HUD draws under the dialog or over it. |
| `UIContext UIContext { get; private set; }` | The Gauntlet rendering context, built during activation. Read-only to derived classes; treat it as the movie's rendering environment. |
| `IGamepadNavigationContext GamepadNavigationContext { get; private set; }` | Focus/navigation state for gamepad-driven UI. |
| `public readonly TwoDimensionView TwoDimensionView` | Native 2D drawing handle. `readonly` because the pointer is fixed for the layer's life. |
| `public readonly ITwoDimensionPlatform TwoDimensionPlatform` | Native platform interface wrapping the view above. |

### Movie lifecycle

| Member | What it is for |
| --- | --- |
| `GauntletMovieIdentifier LoadMovie(string movieName, ViewModel dataSource)` | The central call. Loads an XML prefab by name and binds it to `dataSource`. **Keep the returned identifier and release it.** |
| `void ReleaseMovie(GauntletMovieIdentifier identifier)` | Gives one reference back. Reference counted — match it one-for-one with `LoadMovie`. |
| `GauntletMovieIdentifier GetMovieIdentifier(string movieName)` | Looks up an already-loaded movie by name; returns null when it is not loaded. Useful to avoid loading the same prefab twice. |
| `void OnResourceRefreshBegin(out List<GauntletMovieIdentifier> previouslyLoadedMovies)` | Hands back the movies that a resource refresh is about to invalidate. |
| `void OnResourceRefreshEnd(List<GauntletMovieIdentifier> previouslyLoadedMovies)` | The other half of the refresh; the movies are reloadable again. |

### Per-frame phases

| Member | What it is for |
| --- | --- |
| `protected override void Tick(float dt)` | Logic frame. This is where your layer's own state advances. |
| `protected override void LateUpdate(float dt)` | End-of-frame update. |
| `protected override void RenderTick(float dt)` | Draw frame. Do not change logical state here. |
| `protected override void Update(IReadOnlyList<int> lastKeysPressed)` | Converts raw key presses into Gauntlet input events for the widget tree. |
| `protected override void RefreshGlobalOrder(ref int currentOrder)` | Participates in the global draw and input ordering. **Override only with `base`.** |

### Input, hit testing and focus

| Member | What it is for |
| --- | --- |
| `public override void ProcessEvents()` | Runs the widget tree's event handling after input distribution. |
| `public override bool HitTest(Vector2 position)` | Asks the widget tree whether a screen point lands on this movie. |
| `public override bool HitTest()` | Whole-layer hit test with no point. |
| `public override bool FocusTest()` | Whether this layer may take keyboard or controller focus. |
| `public override bool IsFocusedOnInput()` | Whether it currently holds input. **Gate keyboard handling on this, not on `IsActive`.** |
| `protected override void OnLoseFocus()` | Focus lost — the place to drop transient input state. |
| `public override void OnOnScreenKeyboardDone(string inputText)` | Console-style on-screen keyboard returned text. Only meaningful where the platform has one. |
| `public override void OnOnScreenKeyboardCanceled()` | On-screen keyboard was cancelled. |
| `public bool GetIsAvailableForGamepadNavigation()` | Whether gamepad navigation currently works. Drive your prompt icons from this. |

### Lifecycle and layout

| Member | What it is for |
| --- | --- |
| `protected override void OnActivate()` | The layer is being shown. Prepare display state; do not add layers here. |
| `protected override void OnDeactivate()` | The layer is being hidden. Can run more than once. |
| `protected override void OnFinalize()` | One-time teardown. **Release the movie here if it has not already been released.** |
| `public override void UpdateLayout()` | Recompute layout. Call after viewport or widget-visibility changes. |
| `public override void DrawDebugInfo()` | Draws the UI tree structure and binding state for `ScreenManager`'s debug overlay. |

## Examples

### Example 1: Load a prefab and release it exactly once

The movie handle is the whole lifetime story. Everything else is managed memory.

```csharp
using TaleWorlds.Engine.GauntletUI;
using TaleWorlds.Library;

public class MyPanelLayer : GauntletLayer
{
    private GauntletMovieIdentifier _movie;
    private MyPanelViewModel _viewModel;

    // shouldClear: false — this layer composites over the screen beneath it
    public MyPanelLayer() : base("MyPanelLayer", 100, false)
    {
    }

    public void ShowPanel()
    {
        if (_movie == null)
        {
            _viewModel = new MyPanelViewModel();
            _viewModel.RefreshValues();
            _movie = LoadMovie("MyPanelPrefab", _viewModel);
        }

        UpdateLayout();
    }

    protected override void OnFinalize()
    {
        base.OnFinalize();

        if (_movie != null)
        {
            ReleaseMovie(_movie);
            _movie = null;
        }

        _viewModel = null;
    }
}
```

### Example 2: Change data in Tick, let the binding update the widgets

The view model notifies; the movie re-reads. Nothing in the render phase touches state.

```csharp
using TaleWorlds.Engine.GauntletUI;
using TaleWorlds.Library;

public class MyReadoutLayer : GauntletLayer
{
    private GauntletMovieIdentifier _movie;
    private MyReadoutViewModel _viewModel;
    private float _accumulated;

    public MyReadoutLayer() : base("MyReadoutLayer", 100, true)
    {
    }

    public void Open(MyReadoutViewModel viewModel)
    {
        _viewModel = viewModel;
        _movie = LoadMovie("MyReadoutPrefab", viewModel);
    }

    protected override void Tick(float dt)
    {
        base.Tick(dt);

        _accumulated += dt;

        // Only touch view-model state in the logic phase
        if (_viewModel != null)
        {
            _viewModel.Elapsed = _accumulated;
        }
    }

    // Prove the binding works: read a property back the way the engine would
    public string ReadBackElapsed()
    {
        return _viewModel == null ? null : _viewModel.GetPropertyValue("Elapsed") as string;
    }

    protected override void OnFinalize()
    {
        base.OnFinalize();
        if (_movie != null)
        {
            ReleaseMovie(_movie);
            _movie = null;
        }
    }
}
```

### Example 3: Pick the right prompt art for the current input device

`GetIsAvailableForGamepadNavigation()` is a live query, not a build-time constant.

```csharp
using TaleWorlds.Engine.GauntletUI;

public class MyPromptLayer : GauntletLayer
{
    private GauntletMovieIdentifier _movie;
    private MyPromptViewModel _viewModel;

    public MyPromptLayer() : base("MyPromptLayer", 900, false)
    {
    }

    public bool ShowControllerPrompts()
    {
        return GetIsAvailableForGamepadNavigation();
    }

    public void SetPrompts(bool useControllerArt)
    {
        if (_viewModel == null)
        {
            _viewModel = new MyPromptViewModel();
            _viewModel.RefreshValues();
        }

        if (_movie != null)
        {
            ReleaseMovie(_movie);
            _movie = null;
        }

        _movie = LoadMovie(useControllerArt ? "MyPromptsController" : "MyPromptsMouse", _viewModel);
        UpdateLayout();
    }
}
```

## Risks and Boundaries

- **Leaked movies.** `LoadMovie` and `ReleaseMovie` are a pair, and the counting is real. A leak does not surface at once — it appears as memory climbing over a long session, and eventually the engine reclaims the whole UI.
- **Binding failures are silent.** A prefab path that does not match a view-model property yields a blank widget with no exception. Enable `ViewModel.UIDebugMode` first; it is almost always the binding, not your update code.
- **`RenderTick` is not the logic phase.** Mutating view-model state there desynchronises logic from rendering and races on platforms where rendering runs on its own thread.
- **`UpdateLayout` has to be called by you.** Widgets do not reposition on their own. The symptom of skipping it is overlapping or stale-positioned widgets after a resize or a visibility change.
- **`shouldClear` decides compositing.** A dialog wants `true`; a HUD wants `false`. Setting it wrong puts one above the other.
- **Overriding the Gauntlet answers without `base` breaks them.** `HitTest`, `FocusTest`, `IsFocusedOnInput`, `ProcessEvents`, `Update` and `RefreshGlobalOrder` all carry real logic in this class. `RefreshGlobalOrder` in particular is what keeps the layer in the right global order; skipping `base` scrambles stacking.
- **`TwoDimensionView` and `TwoDimensionPlatform` are native.** They are fixed for the layer's lifetime, main-thread only, and not a place to cache per-frame state.
- **Platform differences are real.** `OnOnScreenKeyboardDone` only fires where the host has an on-screen keyboard, and `GetIsAvailableForGamepadNavigation()` goes false when the controller is gone. Input prompts need both fallbacks.
- **Resource refresh splits the movie's life.** Do not hold movie identifiers across `OnResourceRefreshBegin` / `OnResourceRefreshEnd`.
- **A Gauntlet layer is not a global layer.** `ScreenManager.AddGlobalLayer` takes a `GlobalLayer`, which wraps a `ScreenLayer`; passing a bare `GauntletLayer` does not compile. See the `ScreenManager` page for the wrapper.

## Dependencies

- **Upstream / providers**
  - [ScreenLayer](../../gui/ScreenLayer) supplies the ordering, focus and input-consumption contract this class extends.
  - [ScreenBase](../../gui/ScreenBase) owns and drives the layer; [ScreenManager](../../gui/ScreenManager) assigns global order and accepts wrapped global layers.
- **Peers / downstream**
  - [ViewModel](../../core-extra/ViewModel) is the data source handed to `LoadMovie` and the other end of every binding path.
  - [Game](../../core-extra/Game) and [MBSubModuleBase](../../core/MBSubModuleBase) decide when the layer is constructed and torn down.

## See Also

- ↑ Parent: [engine index](../)
- ↔ Related: [ScreenLayer](../../gui/ScreenLayer) · [ScreenBase](../../gui/ScreenBase) · [ScreenManager](../../gui/ScreenManager) · [ViewModel](../../core-extra/ViewModel) · [Game](../../core-extra/Game) · [Chinese twin](../../../../zh/api/engine/GauntletLayer)