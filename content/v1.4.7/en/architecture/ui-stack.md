---
title: "UI Stack — ScreenSystem, Gauntlet and ViewModel"
description: "How ScreenManager maintains the screen stack in v1.4.7, ScreenBase versus ScreenLayer, how GauntletLayer binds a ViewModel to XML, and correct property notification."
---
# UI Stack — ScreenSystem, Gauntlet and ViewModel

## Mental model

The UI in v1.4.7 is a **four-type vertical pipeline**, top to bottom:

```text
ScreenManager      the screen stack. Push / Pop / replace top, owns global layers and input focus
   └── ScreenBase  one screen. Lifecycle, plus a set of ScreenLayers
         └── ScreenLayer   one layer. Hit testing, focus, draw order
               └── GauntletLayer   that layer concretely. Loads XML movies, binds a data source, renders
                     └── ViewModel  pure data + commands. Raises notifications, UI refreshes
```

The key insight: **`ViewModel` does not know `ScreenBase` exists, and `ScreenBase` does not know
`GauntletLayer` exists.** `GauntletLayer` is what joins them. So when a UI is broken, work out
which segment failed: data never changed → the ViewModel never raised a notification; data changed
but the screen did not → the binding path is wrong; nothing appears at all → the stack or the
layer was never attached.

## ScreenManager owns the one and only stack

`TaleWorlds.ScreenSystem.ScreenManager` is a `static class`. Of its 57 public members, these are
the ones to remember:

| Member | Role |
| --- | --- |
| `TopScreen` | top of stack; first target for drawing and input |
| `FocusedLayer` / `FirstHitLayer` | layer with focus / first layer hit by the pointer |
| `SortedLayers` | all layers, ordered |
| `OnPushScreen` / `OnPopScreen` | events — subscribe if you care about screens entering or leaving |
| `AddGlobalLayer(GlobalLayer, bool isFocusable)` / `RemoveGlobalLayer(GlobalLayer)` | add a layer that persists across screens |
| `PushScreen` / `PopScreen` / `ReplaceTopScreen(ScreenBase)` | stack operations |
| `SetAndActivateRootScreen(ScreenBase)` | swap the root screen (use carefully, it is global) |
| `UsableArea` / `Scale` | usable region and scale, for adaptive layout |
| `OnGameWindowFocusChange(bool focusGained)` | event; pause looping animations when unfocused |

`PushScreen` and `PopScreen` **must be paired**. A forgotten `PopScreen` is the most common UI leak
in Bannerlord: the previous screen keeps receiving input and the UI appears frozen.

## ScreenBase: the lifecycle

`ScreenBase`'s `protected virtual` callbacks are its complete lifecycle:

| Callback | When | What belongs there |
| --- | --- | --- |
| `OnInitialize()` | after construction | build layers, add components. **Runs once** |
| `OnFinalize()` | permanently destroyed | release unmanaged resources, unsubscribe events |
| `OnActivate()` / `OnDeactivate()` | entered/left top of stack | start/stop looping animations, subscribe/unsubscribe |
| `OnPause()` / `OnResume()` | covered by / revealed by another screen | pause expensive per-frame work |
| `OnReady()` | resources loaded | first point where the UI tree is safe to touch |
| `OnFrameTick(float)` / `OnPostFrameTick(float)` / `OnIdleTick(float)` | per frame | animation, polling |
| `OnFocusChangeOnGameWindow(bool)` | window focus changed | usually just call `base` |

Useful public members: `Layers`, `AddLayer` / `RemoveLayer` / `HasLayer`,
`FindLayer<T>()` (by type), `FindLayer<T>(string name)` (by name), `AddComponent` /
`FindComponent<T>`, `Activate` / `Deactivate` / `ActivateAllLayers`.

Cleanup in `OnFinalize` must mirror construction in `OnInitialize`. That rule applies to the whole
UI tree, not just the screen.

## ScreenLayer and GauntletLayer

`ScreenLayer` handles **logic**: ordering (`RefreshGlobalOrder`), hit testing
(`HitTest(Vector2)`, `HitTest()`), focus (`FocusTest()`, `IsFocusedOnInput()`) and drawing
(`RenderTick`).

`GauntletLayer` (namespace `TaleWorlds.Engine.GauntletUI`) extends it with **rendering**:

| Member | Role |
| --- | --- |
| `LoadMovie(string movieName, ViewModel dataSource)` | load an XML movie by name and bind a data source; returns a `GauntletMovieIdentifier` |
| `GetMovieIdentifier(string movieName)` | look up an already-loaded movie without reloading |
| `ReleaseMovie(GauntletMovieIdentifier)` | release. **Pairs with `LoadMovie`** |
| `UIContext` | underlying render context |
| `TwoDimensionView` / `TwoDimensionPlatform` | 2D draw target |
| constructor `(string name, int localOrder, bool shouldClear)` | `localOrder` decides stacking order on one screen |
| `GamepadNavigationContext` | gamepad focus navigation |

`OnResourceRefreshBegin` / `OnResourceRefreshEnd` are hot-reload hooks; mods rarely need them.

## ViewModel: property notification

`TaleWorlds.Library.ViewModel` is an `abstract class` implementing `INotifyPropertyChanged`. The
core is `SetField`:

```csharp
public class MyScreenVM : ViewModel
{
    private int _gold;
    private bool _isEnabled;

    // Read properties directly off the field; do not wrap in GetGold()
    public int Gold => _gold;
    public bool IsEnabled => _isEnabled;

    public void SetGold(int value) => SetField(ref _gold, value, nameof(Gold));
    public void Enable(bool value) => SetField(ref _isEnabled, value, nameof(IsEnabled));

    // Called from the UI (XML Command="OnIncrementClicked")
    public void OnIncrementClicked()
    {
        SetGold(Gold + 1);
    }

    public override void OnFinalize()
    {
        base.OnFinalize();
    }
}
```

Five hard rules for a ViewModel:

1. **Property names must match the binding path in the XML character for character.** A wrong path
   raises nothing; the UI simply never updates.
2. **Use `SetField` / `OnPropertyChanged`, not a hand-rolled `PropertyChanged?.Invoke`.** The former
   fills `[CallerMemberName]` correctly.
3. **`OnPropertyChangedWithValue` has 8 overloads** (`class` / `bool` / `int` / `float` / `uint` /
   `Color` / `double` / `Vec2`). Pick the matching one — the overload itself is how the engine
   decides how to refresh.
4. **Commands are public methods with no or simple parameters**, named exactly as the XML `Command`
   attribute. `ViewModel.ExecuteCommand(string, object[])` dispatches them.
5. **`RefreshValues()` / `RefreshPropertyAndMethodInfos()` are debug-only.** Calling them per frame
   in production costs visible framerate.

## End-to-end example

```csharp
// 1) ViewModel: data and commands only
public class InventoryScreenVM : ViewModel
{
    private int _selectedSlot = -1;
    public int SelectedSlot => _selectedSlot;

    public void OnSlotClicked(int slot) => SetField(ref _selectedSlot, slot, nameof(SelectedSlot));
    public void OnSortClicked() { /* reorder the backing list, then */ RefreshValues(); }
}

// 2) ScreenLayer: loading and lifetime only
public class InventoryGauntletLayer : GauntletLayer
{
    public InventoryGauntletLayer(string name, int order)
        : base(name, order, shouldClear: true)
    {
        var vm = new InventoryScreenVM();
        _movieId = LoadMovie("InventoryScreen", vm);   // movie name resolves via XML resource path
    }
    private GauntletMovieIdentifier _movieId;

    protected override void OnFinalize()
    {
        ReleaseMovie(_movieId);   // pairs with LoadMovie
        base.OnFinalize();
    }
}

// 3) ScreenBase: lifecycle and layer collection only
public class InventoryScreen : ScreenBase
{
    public InventoryScreen()
    {
        Layers.Add(new InventoryGauntletLayer("main", 0));
    }

    protected override void OnFinalize()
    {
        base.OnFinalize();
    }
}

// 4) Attach it (from a campaign callback in your SubModule)
ScreenManager.PushScreen(new InventoryScreen());
// and when done
ScreenManager.PopScreen();
```

## Symptom → cause

| Symptom | Check first |
| --- | --- |
| Screen never appears | Was `PushScreen` actually reached? Is `ScreenManager.TopScreen` yours? |
| Screen appears but does not respond | The previous screen was never `PopScreen`ed and still eats input |
| Data changes, screen does not | Do the binding path and property name match? Was `SetField` given the third argument? |
| UI is wrong after loading a save | You reused a ViewModel across saves. ViewModels are not saved; make a new one per screen |
| Leftovers after switching screens | `OnFinalize` did not `ReleaseMovie` or did not unsubscribe |
| Wrong layout at high resolutions | Use `ScreenManager.UsableArea` and `Scale` instead of hardcoded pixels |

## See also

- ↔ [Architecture hub](../) · [Module System](../module-system) — which callback a screen belongs in
- ↘ [SDK Overview](../sdk-overview) — why `GauntletLayer` lives in `engine` while `ScreenManager` lives in `gui`
- ↑ [GUI](../../api/gui/) · [ViewModel](../../api/viewmodel/) · [Engine](../../api/engine/)