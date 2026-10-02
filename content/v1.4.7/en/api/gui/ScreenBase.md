---
title: "ScreenBase"
description: "The base class for every screen in the game: it owns one screen's lifecycle (initialize, activate, pause, frame tick, finalize), its ScreenLayer stack and its ScreenComponent list. All custom UI derives from it."
---
# ScreenBase

**Namespace:** `TaleWorlds.ScreenSystem`
**Module:** `TaleWorlds.ScreenSystem`
**Type:** `public abstract class ScreenBase`
**Base:** none
**Source:** `TaleWorlds.ScreenSystem/ScreenBase.cs` (declaration at line 9)

## Overview

`ScreenBase` is the abstract shape of "one screen": the main menu, the campaign map, character creation, an in-mission overlay, the results screen. It is a plain abstract class with no base type — the whole screen contract is defined here.

A screen instance owns exactly three things:

1. **Its own lifecycle flags** — `IsInitialized`, `IsActive`, `IsPaused`, `IsFinalized`. These are not yours to set; the [ScreenManager](../ScreenManager) drives them and the corresponding methods.
2. **A stack of [ScreenLayer](../ScreenLayer) objects** — added with `AddLayer`, removed with `RemoveLayer`, queried with `HasLayer` and the two `FindLayer` overloads. Input order, focus and draw order all come from this stack.
3. **A list of `ScreenComponent` objects** — `AddComponent` / `FindComponent<T>()`, for screen-level UI pieces that are not layers.

The lifecycle callbacks come in clearly separated tiers, and the separation is the single most important thing to get right when deriving from this class: `OnInitialize` runs once; `OnActivate` and `OnDeactivate` run every time the screen is pushed or popped and can run many times over a session; `OnPause` and `OnResume` run when another screen covers this one and uncovers it; `OnFrameTick`, `OnPostFrameTick` and `OnIdleTick` run per frame; `OnReady` runs after resources are loaded; `OnFinalize` runs once at destruction.

It also owns two events, `OnAddLayer` and `OnRemoveLayer`, typed by the nested delegates `OnLayerAddedEvent` and `OnLayerRemovedEvent`, and a small amount of window-level plumbing: `MouseVisible`, `OnFocusChangeOnGameWindow` and `UpdateLayout`.

## Mental Model

Read `ScreenBase` as a state machine with four states and one stack.

**Screens are stacked, not parallel.** [ScreenManager](../ScreenManager) holds the list. `PushScreen` puts you on top and pauses the screen below; `PopScreen` removes the top one and resumes what was under it. That is why `OnPause` / `OnResume` exist separately from `OnDeactivate` / `OnActivate`: covering a screen and popping it are different events with different meanings.

**The tiers have different multiplicities, and the mix-ups are the bug farm.**

- `OnInitialize` — exactly once per instance. Build structure here: `AddLayer`, `AddComponent`, set `MouseVisible`. Note `IsInitialized` is still false while `OnInitialize` is executing, so do not gate your own setup on it.
- `OnActivate` — every time the screen reaches the top of the stack. Refresh display state here: pull data into the view model, reset a cursor, re-select a widget. **Do not add layers here** — a second activation adds the layer again.
- `OnDeactivate` — every time the screen leaves the top, and it can run many times. It is not destruction. The screen may be activated again.
- `OnPause` / `OnResume` — covering and uncovering, again many times. This is where per-frame work should stop and restart.
- `OnFrameTick(float dt)` — every frame while the screen is in the stack and running. The only per-frame callback that is the screen's own logic. Everything drawn here is also a per-frame cost.
- `OnPostFrameTick(float dt)` — end of frame, after the screen's own tick. Use it to publish state to other screens rather than mutating it mid-frame.
- `OnIdleTick(float dt)` — idle ticks. This is *not* the game tick; it runs when the window is unfocused or the game is paused. Game logic here runs while the player is not looking.
- `OnReady` — after resources finish loading. Gauntlet bindings belong here, not in `OnInitialize`, because in `OnInitialize` the prefab is not loaded.
- `OnFinalize` — exactly once, when the screen is discarded. Unsubscribing from static events belongs here; `OnDeactivate` will not do it for you.

**Layers are found by type or by name, and the name form is how shared layers work.** `FindLayer<T>()` matches by type. `FindLayer<T>(string name)` matches by name *and* type, and it is the right tool when a layer such as a global HUD is mounted on more than one screen. Both can return null — always check.

**Category toggles are batch layer switches.** `SetLayerCategoriesState(ids, active)` turns a named set on or off. `SetLayerCategoriesStateAndToggleOthers(ids, active)` turns the listed categories on and everything else off. `SetLayerCategoriesStateAndDeactivateOthers(ids, active)` has the same "others go off" shape. These are how tabbed layouts inside one screen are built, and they are cheaper and less error-prone than toggling layers one at a time.

## When to Use / When Not To Use

- **Use** as the base class for any custom screen: derive and override the lifecycle tiers you need.
- **Use** `AddLayer` in `OnInitialize` and `FindLayer` afterwards to reach your own layers.
- **Use** `SetLayerCategoriesState*` for mutually exclusive panels inside one screen.
- **Use** `OnFocusChangeOnGameWindow` to suspend or resume anything input-driven.
- **Use** `UpdateLayout` after a resolution or `ScreenManager.Scale` change.
- **Do not** call `AddLayer` or `AddComponent` from `OnActivate`.
- **Do not** change layer structure from `OnFrameTick` — layout thrashes and input order gets scrambled.
- **Do not** treat `OnDeactivate` as destruction; only `OnFinalize` is once.
- **Do not** put game logic in `OnIdleTick`.

## Members

### Lifecycle flags

| Member | What it is for |
| --- | --- |
| `bool IsInitialized { get; private set; }` | Whether `OnInitialize` has run. Still false *during* `OnInitialize`. |
| `bool IsActive { get; private set; }` | Whether the screen is the top of the stack. |
| `bool IsPaused { get; private set; }` | Whether the screen is covered by another screen. |
| `bool IsFinalized { get; private set; }` | Whether `OnFinalize` has run. Nothing further is valid after this. |
| `void Activate()` / `void ActivateAllLayers()` | Activates the screen, or all of its layers. Driven by the manager on push. |
| `void Deactivate()` / `void DeactivateAllLayers()` | The mirror pair. |
| `protected ScreenBase()` | Constructor. Set `MouseVisible` defaults here. |

### Lifecycle callbacks

| Member | What it is for |
| --- | --- |
| `protected virtual void OnInitialize()` | One-time setup: layers, components, cursor defaults. The only correct place to build structure. |
| `protected virtual void OnActivate()` | Each time the screen becomes the top one. Refresh display state. |
| `protected virtual void OnDeactivate()` | Each time the screen stops being the top one. Runs repeatedly. |
| `protected virtual void OnPause()` | Another screen covered this one. Stop per-frame work. |
| `protected virtual void OnResume()` | The covering screen went away. Restart per-frame work. |
| `protected virtual void OnFrameTick(float dt)` | Per-frame logic while the screen runs. The one hot path on this class. |
| `protected virtual void OnPostFrameTick(float dt)` | End-of-frame. Publish to other screens here. |
| `protected virtual void OnIdleTick(float dt)` | Idle ticks, including unfocused window. Not for game logic. |
| `protected virtual void OnReady()` | Resources are loaded. Establish bindings here. |
| `protected virtual void OnFinalize()` | One-time teardown. Unhook static events and drop references here. |
| `public virtual void OnFocusChangeOnGameWindow(bool focusGained)` | Game window gained or lost focus. The hook for suspending input-driven work. |
| `public virtual bool MouseVisible { get; set; }` | Whether the mouse cursor is shown. |
| `public virtual void UpdateLayout()` | Recompute layout. Call after a resolution or scale change, not per frame. |

### Layers

| Member | What it is for |
| --- | --- |
| `void AddLayer(ScreenLayer layer)` | Adds a layer. `OnInitialize` only — calling it from `OnActivate` adds a duplicate. |
| `void RemoveLayer(ScreenLayer layer)` | Removes a layer. |
| `bool HasLayer(ScreenLayer layer)` | Whether this screen currently owns that layer. |
| `T FindLayer<T>() where T : ScreenLayer` | Finds a layer by type. May return null. |
| `T FindLayer<T>(string name) where T : ScreenLayer` | Finds a layer by name and type — the form to use for layers shared across screens. May return null. |
| `void SetLayerCategoriesState(string[] categoryIds, bool isActive)` | Switches the named categories on or off, leaving others alone. |
| `void SetLayerCategoriesStateAndToggleOthers(string[] categoryIds, bool isActive)` | Turns the named categories on and everything else off. Tab switching. |
| `void SetLayerCategoriesStateAndDeactivateOthers(string[] categoryIds, bool isActive)` | Same "others go off" outcome, separate call for the deactivate-only case. |

### Components

| Member | What it is for |
| --- | --- |
| `void AddComponent(ScreenComponent component)` | Adds a screen-level component that is not a layer. |
| `T FindComponent<T>() where T : ScreenComponent` | Finds a component by type. May return null. |

### Events and delegates

| Member | What it is for |
| --- | --- |
| `public event ScreenBase.OnLayerAddedEvent OnAddLayer` | Raised when a layer is added, carrying the new layer. Instance event — it dies with the screen, but any *external* subscriber must unsubscribe in `OnFinalize`. |
| `public event ScreenBase.OnLayerRemovedEvent OnRemoveLayer` | Raised when a layer is removed, carrying the removed layer. |
| `public delegate void OnLayerAddedEvent(ScreenLayer addedLayer)` | Delegate type for `OnAddLayer`. |
| `public delegate void OnLayerRemovedEvent(ScreenLayer removedLayer)` | Delegate type for `OnRemoveLayer`. |

## Examples

### Example 1: A screen that uses each tier for its proper job

Structure in `OnInitialize`, display state in `OnActivate`, logic in `OnFrameTick`, teardown in `OnFinalize`.

```csharp
using TaleWorlds.Engine.GauntletUI;
using TaleWorlds.ScreenSystem;

public class MyInspectScreen : ScreenBase
{
    private GauntletLayer _gauntletLayer;
    private GauntletMovieIdentifier _movie;
    private MyInspectViewModel _viewModel;
    private float _elapsed;

    public MyInspectScreen()
    {
        MouseVisible = true;
    }

    // One time only: build the layer stack here, never in OnActivate
    protected override void OnInitialize()
    {
        base.OnInitialize();

        _gauntletLayer = new GauntletLayer("MyInspectLayer", 100, true);
        AddLayer(_gauntletLayer);
    }

    // Every activation: refresh display state
    protected override void OnActivate()
    {
        base.OnActivate();

        _elapsed = 0f;

        if (_viewModel == null)
        {
            _viewModel = new MyInspectViewModel();
            _viewModel.RefreshValues();
        }

        if (_movie == null)
        {
            _movie = _gauntletLayer.LoadMovie("MyInspectPrefab", _viewModel);
        }
    }

    // Per frame, while running
    protected override void OnFrameTick(float dt)
    {
        base.OnFrameTick(dt);

        _elapsed += dt;

        if (_viewModel != null)
        {
            _viewModel.Elapsed = _elapsed;
        }
    }

    // Resources are loaded: this is where bindings belong
    protected override void OnReady()
    {
        base.OnReady();
        UpdateLayout();
    }

    // One time only: drop everything
    protected override void OnFinalize()
    {
        base.OnFinalize();

        if (_movie != null)
        {
            _gauntletLayer.ReleaseMovie(_movie);
            _movie = null;
        }

        _gauntletLayer = null;
        _viewModel = null;
    }
}
```

### Example 2: Tabbed panels inside one screen

Category toggles instead of per-layer bookkeeping.

```csharp
using TaleWorlds.ScreenSystem;

public class MyTabbedScreen : ScreenBase
{
    private static readonly string[] StatsTab = { "StatsTab" };
    private static readonly string[] GearTab = { "GearTab" };

    public void ShowStats()
    {
        // Listed categories on, everything else off
        SetLayerCategoriesStateAndToggleOthers(StatsTab, true);
    }

    public void ShowGear()
    {
        SetLayerCategoriesStateAndToggleOthers(GearTab, true);
    }
}
```

### Example 3: Subscribe on initialize, unsubscribe on finalize

The instance event lives as long as the screen, but a subscriber from outside must let go in `OnFinalize`.

```csharp
using TaleWorlds.ScreenSystem;

public class MyLayerHostScreen : ScreenBase
{
    protected override void OnInitialize()
    {
        base.OnInitialize();
        OnAddLayer += HandleLayerAdded;
    }

    protected override void OnFinalize()
    {
        base.OnFinalize();
        OnAddLayer -= HandleLayerAdded;
    }

    private void HandleLayerAdded(ScreenLayer addedLayer)
    {
        // addedLayer is never null here
    }
}
```

## Risks and Boundaries

- **`OnInitialize` runs once, `OnActivate` runs many times.** Adding layers from `OnActivate` duplicates them; the symptom is stacked input handling and doubled widgets.
- **`OnDeactivate` is not destruction.** It can run many times and the screen can come back. Cleanup that must happen once belongs in `OnFinalize`.
- **Nothing is valid after `IsFinalize`.** `ScreenManager.CleanScreens()` triggers `OnFinalize`; a reference held past that point is dead.
- **Event subscriptions leak if you skip `OnFinalize`.** An external object subscribed to `OnAddLayer` keeps the screen alive and keeps receiving events after it should be gone.
- **`OnIdleTick` still runs.** Game logic there burns resources while the player is away. It is not the game tick.
- **`OnReady` is later than `OnInitialize`.** Building a binding in `OnInitialize` targets a prefab that has not loaded yet.
- **`UpdateLayout` is not free.** Calling it every frame recomputes layout continuously for no benefit. Call it on viewport or content change.
- **Both `FindLayer` overloads can return null.** A layer added elsewhere, added later, or named differently is simply not found.
- **`OnFrameTick` is the hot path.** It runs every frame for as long as the screen is in the stack; heavy work there costs frames.
- **Main thread only.** Every callback runs in the main-thread UI loop and layers draw through native code. Background threads must not touch any of it.

## Dependencies

- **Upstream / providers**
  - [ScreenManager](../ScreenManager) owns the screen stack and drives activation, deactivation and the per-frame tick.
  - [ScreenLayer](../ScreenLayer) is the type this class stacks.
  - [GauntletLayer](../../engine/GauntletLayer) is the concrete layer most screens use.
- **Peers / downstream**
  - [ViewModel](../../core-extra/ViewModel) supplies the bound data for the layers on this screen.
  - [Game](../../core-extra/Game)'s `GameStateManager` cooperates with the screen stack during state transitions.

## See Also

- ↑ Parent: [gui index](../)
- ↔ Related: [ScreenManager](../ScreenManager) · [ScreenLayer](../ScreenLayer) · [GauntletLayer](../../engine/GauntletLayer) · [ViewModel](../../core-extra/ViewModel) · [Game](../../core-extra/Game) · [Chinese twin](../../../../zh/api/gui/ScreenBase)