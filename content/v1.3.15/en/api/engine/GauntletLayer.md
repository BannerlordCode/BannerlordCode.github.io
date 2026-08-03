---
title: "GauntletLayer"
description: "The GauntletUI host layer: it instantiates a XAML movie (bound to a ViewModel) into an interactive UI and mounts it on the current ScreenBase/ScreenManager so it participates in hit-testing, focus, and drawing — the primary way modders show custom panels and HUDs."
---
# GauntletLayer

**Namespace:** TaleWorlds.Engine.GauntletUI
**Module:** TaleWorlds.Engine
**Type:** `public class GauntletLayer : ScreenLayer`
**Base:** `ScreenLayer`
**Source:** `TaleWorlds.Engine.GauntletUI/GauntletLayer.cs`

## Overview

`GauntletLayer` is a `ScreenLayer` subclass and the bridge that connects the entire **GauntletUI** system to the game. Internally it owns a `UIContext` that is responsible for:

- Using the `WidgetFactory` / `SpriteData` / `FontFactory` / `BrushFactory` provided by `UIResourceManager` to instantiate a **movie** (a XAML / widget template) into a real control tree (`Widget`).
- Binding that movie to a **ViewModel** (the XAML `DataContext`) so control properties update when the VM's properties change.
- Registering itself on a `ScreenBase`'s layer stack, where `ScreenManager` drives hit-testing, focus, input, and drawing every frame.

In one sentence: **without a `GauntletLayer`, there is no mod UI written with GauntletUI.** The clan panel, quest HUD, settings window, inventory replacement — they all sit on this type.

## Mental Model

Think of three stacked layers:

```
ScreenBase (the current screen, on top of the ScreenManager stack)
   └── GauntletLayer  ← the layer you new and AddLayer onto a ScreenBase
         └── UIContext (internal) drives each frame's Tick / Render
               └── GauntletMovie (instantiated by LoadMovie)
                     ├── RootWidget (control tree, from the XAML template)
                     └── DataSource (the ViewModel, i.e. the DataContext)
```

- A **movie** is a UI template (the name registered in a GUI prefab, e.g. `"Clan"`, `"Inventory"`), looked up by `UIResourceManager` by name. It only describes *what the interface looks like*.
- The **ViewModel** describes *what data the interface shows and what actions it can take*. `LoadMovie` binds the two together: the source for every `{Binding Path=...}` in the template is the `ViewModel` you pass in.
- The **GauntletLayer** puts the bound movie into a `UIContext` and, as a `ScreenLayer`, joins a `ScreenBase`. From then on the engine calls the layer's `Tick` / `RenderTick` / `ProcessEvents` each frame, so the control tree updates with the VM, responds to mouse and keyboard, and is drawn to the screen.

### Lifecycle

1. `new GauntletLayer(name, localOrder, shouldClear)` — constructing creates the internal `TwoDimensionView` and `UIContext`, but **there is still no UI**.
2. `LoadMovie(movieName, dataSource)` — instantiates the movie, builds the `DataSource → RootWidget` binding, adds the movie to the `_movieIdentifiers` list, and starts updating it with the layer.
3. `screenBase.AddLayer(layer)` — the layer enters the screen's layer stack and the engine starts driving it each frame (`OnActivate` → `Tick`/`RenderTick`/`ProcessEvents` → `LateUpdate`).
4. Runtime: VM property changes push through `INotifyPropertyChanged`; player interaction with controls comes back to your code via the `DataSource`'s commands/events.
5. `ReleaseMovie(id)` — releases the movie, unbinds the `DataSource`, and destroys the control tree.
6. `screenBase.RemoveLayer(layer)` — the layer leaves the screen stack; when the screen closes, `OnFinalize` cleans up the `UIContext`.

> Note: `GauntletLayer` has **no** `layer.DataSource` property. The DataContext is bound together with the movie at `LoadMovie` time and is stored on the returned `GauntletMovieIdentifier.DataSource` (see [GauntletMovieIdentifier](../GauntletMovieIdentifier/)). This also means "switching data" means either mutating the same VM's properties, or `ReleaseMovie` followed by a fresh `LoadMovie`.

## When to Use / When NOT to Use

**Use `GauntletLayer` when:**

- You want to add any custom visual interface to the game: info panels, inventory/caravan enhancements, combat HUDs, settings pages, pop-up dialogs.
- You want to describe layout in XAML and drive data with a `ViewModel` (the officially recommended, maintainable UI approach).

**Do NOT use `GauntletLayer` when:**

- You only want to draw a few lines of debug text or simple primitives on screen — inherit `ScreenLayer` directly and override `RenderTick`, or use `ScreenManager.EngineInterface`; you do not need the whole GauntletUI pipeline.
- You are **not prepared to provide a ViewModel / DataContext**: GauntletUI's data binding depends heavily on `ViewModel`. Without a VM you either use static XAML (no data) or skip the Gauntlet layer entirely.
- You use it "bare" outside a screen: a `GauntletLayer` must be mounted on a **`ScreenBase`** (directly or indirectly via `ScreenManager.TopScreen`). Without a host screen, `Tick`/`RenderTick` are never driven, the UI never appears, and the `UIContext` is never activated.

## Dependencies

```
Upstream (creator / resource provider / host)   This layer                Downstream (driven by it)
──────────────────────────────────────          ┌──────────────┐          ──────────────────────────────
ScreenManager (TopScreen) ── current screen ──► │              │ ─ drives ─► Widget tree / property binding (GauntletUI)
ScreenBase (AddLayer/RemoveLayer) ── host ────► │ GauntletLayer │          GauntletMovie (instantiated by LoadMovie)
UIResourceManager ── WidgetFactory/Sprite ────► │              │ ─ holds ─► GauntletMovieIdentifier
ViewModel (DataContext) ── via LoadMovie ─────► │              │          (Movie + DataSource)
```

- Upstream: [ScreenBase](../../campaign-ext/ScreenBase/) (layer host, `AddLayer`/`RemoveLayer`), [ScreenManager](../../gui/ScreenManager/) (screen stack, `TopScreen` is "the current screen"), [UIResourceManager](../UIResourceManager/) (registered movie templates and control factories), [ViewModel](../../core-extra/ViewModel/) (the DataContext source).
- Downstream: [GauntletMovieIdentifier](../GauntletMovieIdentifier/) (the `LoadMovie` return value, wrapping `Movie` and `DataSource`); the deeper `Widget` property binding belongs to the GauntletUI runtime and is driven directly by `UIContext`.

## Risks

> This is the part where writing a `GauntletLayer` goes wrong most easily — **always tear down UI in the strict order below.**

1. **Release the movie before removing the layer, or you hit an assert/crash.** The source `OnFinalize` contains `Debug.FailedAssert("Movie was not released before finalizing layer: ...")`: if the screen closes while a movie is still mounted on the layer, the game asserts. Fixed order: **`ReleaseMovie(id)` → `RemoveLayer(layer)` → null the reference.**
2. **ViewModel event leaks = ghost UI / memory leak (the most common pitfall).** The movie holds the `DataSource` (your VM). If your VM subscribes to game events (the daily `Campaign.Current` tick, `IMission.OnMissionTick`, the message system, etc.) but **does not unsubscribe at `ReleaseMovie` time**, the VM stays referenced by the movie/layer and can never be collected: the UI closes but events still fire, causing memory growth at best and `NullReferenceException` when touching destroyed controls at worst. **Give the VM an `OnFinalize`/`UnSubscribeEvents` and call it before releasing the movie.**
3. **Only touch the DataContext on the main (UI) thread.** `Tick`/`RenderTick`/`ProcessEvents` are driven by the engine's main thread. Mutating VM properties and `RaisePropertyChanged` from an async/background thread is not thread-safe and can crash the binding update on the render thread. Cross-thread data changes must `Dispatch` back to the main thread first.
4. **Focus swallows game input.** After setting `GauntletLayer.IsFocusLayer = true`, the layer grabs input focus and the game underneath stops receiving keyboard/mouse — fine for modal dialogs, but **never enable it for non-modal HUDs**. Conversely, if a panel needs text input, make sure the editable control gets focus.
5. **`IsFocusedOnInput()` lets the game "yield" to an input box.** It returns `true` when an `EditableTextWidget` has focus. Check it before handling keys in your behavior/control code, so the game does not also respond to the same key while the player is typing.
6. **Resource refresh invalidates cached movie identifiers.** On language switch / resource reload the engine calls `OnResourceRefreshBegin`/`OnResourceRefreshEnd`, during which all movies are released and rebuilt. If you cached a `GauntletMovieIdentifier` in a field, it becomes a dangling reference after refresh; either `LoadMovie` again for a fresh identifier, or re-query with `GetMovieIdentifier(name)`.
7. **Do not keep a stale DataContext reference to "refresh the UI".** After `ReleaseMovie`, `GauntletMovieIdentifier.DataSource` still exists but is no longer bound to any control tree; mutating it updates nothing. To update the UI, mutate the properties of the VM that is **still in use**.

## Key Members

### Movies: loading and releasing

#### `public GauntletLayer(string name, int localOrder, bool shouldClear = false)`

The constructor. `name` is the layer's name (also used as `UIContext.Name`, visible in debugging); `localOrder` decides stacking order among multiple layers on the same screen (higher = on top); `shouldClear` when `true` clears the screen each frame (for an exclusive full-screen interface, so lower layers don't show through). Construction immediately creates the internal `TwoDimensionView` and `UIContext` — **but there is still no movie and the UI will not show** until you also `LoadMovie`.

#### `public GauntletMovieIdentifier LoadMovie(string movieName, ViewModel dataSource)`

**This is the one member you will actively call 99% of the time.** It finds the movie template by name from `UIResourceManager`, instantiates it, and binds it to `dataSource` as the `DataContext`, adding it to the layer's movie list. Returns a `GauntletMovieIdentifier`; later `ReleaseMovie` / `GetMovieIdentifier` locate it via this or by name.

- Side effect: creates the control tree (`RootWidget`), builds the `DataSource → Widget` binding, and the movie starts updating each frame with the layer.
- When to call: after the layer is `AddLayer`-ed to a screen, or before — but **`dataSource` must stay valid until release.**

```csharp
MyViewModel vm = new MyViewModel();
GauntletMovieIdentifier movieId = _layer.LoadMovie("MyModPanel", vm);
// later retrieve by id or name:
//   _layer.GetMovieIdentifier("MyModPanel")
```

#### `public void ReleaseMovie(GauntletMovieIdentifier identifier)`

Releases the given movie: unbinds the `DataSource`, destroys the `RootWidget` control tree, and removes it from the layer list. Idempotent (releasing an already-released movie does nothing). **Must be called before `RemoveLayer`, otherwise the `OnFinalize` assert fires.**

#### `public GauntletMovieIdentifier GetMovieIdentifier(string movieName)`

Looks up a loaded movie identifier by name within the current layer; returns `null` if none. Handy during teardown when you did not keep the `LoadMovie` return value, to re-fetch the identifier for `ReleaseMovie`.

### Data binding: ViewModel is the DataContext

`GauntletLayer` itself has **no** `DataSource` property; the binding happens at the `LoadMovie` step, and the binding relationship is stored on `GauntletMovieIdentifier.DataSource` (type `ViewModel`). At runtime:

- The VM implements `INotifyPropertyChanged`; after a property change `RaisePropertyChanged`, the binding automatically pushes the new value to the corresponding `Widget` property.
- Each frame, during layout refresh, `UpdateLayout()` is called, which for each movie runs `DataSource.RefreshValues()` (re-pushes all values) and then `Movie.RefreshBindingWithChildren()`. You **usually do not need to call this manually** — just `RaisePropertyChanged` on property changes; only consider it when you need a forced full refresh.
- To "switch data", mutate the current VM's properties; to fully swap a UI/data set, `ReleaseMovie` and then `LoadMovie` again.

### Input and focus

#### `public override bool IsFocusedOnInput()`

Returns `true` when the focused control is an `EditableTextWidget` (a text input box). **Use:** decide whether to forward a key press to the game in your behavior/control logic — when the player is typing, it returns `true` and you should skip the game's hotkey handling.

#### Input context and focus (from base `ScreenLayer`)

- `GauntletLayer` feeds `base.Input` (`InputContext`) into the `UIContext` each frame via `ProcessEvents()`, landing mouse/keyboard on controls.
- `IsFocusLayer` (`ScreenLayer` property): set `true` to let the layer grab focus (modal panels); keep `false` for non-modal HUDs, or it swallows game input.
- When a control inside the layer gains focus, the source calls `ScreenManager.TrySetFocus(this)`; on losing focus while not `IsFocusLayer`, it calls `ScreenManager.TryLoseFocus(this)` — that is the mechanism switching focus between the layer and the game.
- `OnOnScreenKeyboardDone(string)` / `OnOnScreenKeyboardCanceled()`: mobile/console virtual-keyboard callbacks that feed text into the `UIContext`; normally no need to override.

### Layer lifecycle and host (engine-driven, usually not for you to call)

- `OnActivate()` / `OnDeactivate()`: called by the engine when the layer is `AddLayer`-ed / `RemoveLayer`-ed, activating/deactivating the `UIContext` and toggling `TwoDimensionView` rendering.
- `Tick(dt)` / `RenderTick(dt)` / `LateUpdate(dt)` / `Update(keys)`: drive `UIContext.Update`, movie `Update`, rendering, and input dispatch each frame. **Do not call manually.**
- `OnResourceRefreshBegin(out List<GauntletMovieIdentifier>)` / `OnResourceRefreshEnd(List<...>)`: called by the engine on resource reload, releasing all movies first then rebuilding from the saved identifiers. Mods generally don't call these directly; if you cached a movie identifier, re-fetch it with `GetMovieIdentifier` after reload.
- `OnFinalize()`: called when the layer is destroyed by its screen; `ClearContext()` runs and asserts that all movies were released.
- `DrawDebugInfo()`: for debugging — press `Shift+F` to grab a control-hierarchy snapshot; very useful when diagnosing layout during development.

## Example

### Example 1: Host a panel in a custom `ScreenBase` (full lifecycle)

The most common pattern: inherit `ScreenBase`, build the layer and load the movie in `OnInitialize`, and tear down in `OnDeactivate` in the order "release movie → remove layer → null".

```csharp
using TaleWorlds.Engine.GauntletUI;
using TaleWorlds.ScreenSystem;
using TaleWorlds.Library;

public class MyModPanelScreen : ScreenBase
{
    private GauntletLayer _layer;
    private MyModViewModel _vm;

    protected override void OnInitialize()
    {
        base.OnInitialize();

        _vm = new MyModViewModel();                 // your ViewModel (DataContext)
        _layer = new GauntletLayer("MyModPanel", 100, false);
        // LoadMovie does both: instantiate the movie + bind the DataSource
        _layer.LoadMovie("MyModPanel", _vm);
        this.AddLayer(_layer);                      // mount on this screen's layer stack
    }

    protected override void OnDeactivate()
    {
        base.OnDeactivate();

        // Teardown order: ReleaseMovie first, then RemoveLayer, then null
        GauntletMovieIdentifier id = _layer.GetMovieIdentifier("MyModPanel");
        if (id != null)
        {
            _layer.ReleaseMovie(id);                // unbind VM, destroy control tree
        }
        this.RemoveLayer(_layer);                   // leave the screen's layer stack
        _layer = null;
        _vm = null;                                 // VM no longer referenced by the movie, can be collected
    }
}
```

### Example 2: Stack a HUD in a mission and release it correctly on behavior teardown

Stack a HUD layer onto the "current screen" from a `MissionBehavior` (non-modal, keep `IsFocusLayer = false`). The teardown hook is `MissionBehavior.OnRemoveBehavior()` (NOT `OnMissionEnd`) — the movie must be released and the layer removed there.

```csharp
using TaleWorlds.Engine.GauntletUI;
using TaleWorlds.MountAndBlade;
using TaleWorlds.ScreenSystem;

public class MyHudBehavior : MissionBehavior
{
    private GauntletLayer _hudLayer;
    private MyHudViewModel _vm;

    public override void OnBehaviorInitialize()
    {
        base.OnBehaviorInitialize();

        _vm = new MyHudViewModel();
        _hudLayer = new GauntletLayer("MyHud", 1, false);
        _hudLayer.LoadMovie("MyHud", _vm);          // bind data, movie starts updating
        ScreenManager.TopScreen.AddLayer(_hudLayer); // mount on the topmost current screen
    }

    public override void OnRemoveBehavior()
    {
        // Critical: release movie → remove layer → null, to avoid the assert and ghost UI
        GauntletMovieIdentifier id = _hudLayer.GetMovieIdentifier("MyHud");
        if (id != null)
        {
            _hudLayer.ReleaseMovie(id);
        }
        ScreenManager.TopScreen.RemoveLayer(_hudLayer);
        _hudLayer = null;
        _vm = null;

        base.OnRemoveBehavior();
    }
}
```

> Tip: `ScreenManager.TopScreen` is "the screen currently being shown" (in 1.3.15 there is no `ScreenManager.CurrentScreen`, use `TopScreen`). If that screen is later closed, you must already have `RemoveLayer`-ed in the previous step, or `OnFinalize` will assert that the movie was not released.

## See Also

- ↑ Parent (bucket index): [engine directory](./)
- ↔ Sibling / upstream: [ScreenBase](../../campaign-ext/ScreenBase/) (layer host), [ScreenManager](../../gui/ScreenManager/) (`TopScreen` and the screen stack), [UIResourceManager](../UIResourceManager/) (movie templates and control factories), [GauntletMovieIdentifier](../GauntletMovieIdentifier/) (`LoadMovie` return value)
- Related types: [ViewModel](../../core-extra/ViewModel/) (DataContext source), [MBSubModuleBase](../../core/MBSubModuleBase/) (mod entry point, where behaviors and screens are usually wired up), [Game](../../core-extra/Game/) (campaign/mission lifecycle that owns the screens)
