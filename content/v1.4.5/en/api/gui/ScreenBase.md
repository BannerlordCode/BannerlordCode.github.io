---
title: "ScreenBase"
description: "The abstract screen base driven by the ScreenManager stack, owning screen lifecycle, ScreenLayer ordering, and UI update boundaries in TaleWorlds.ScreenSystem."
---
# ScreenBase

**Namespace:** `TaleWorlds.ScreenSystem`  
**Module:** `TaleWorlds.ScreenSystem`  
**Type:** `public abstract class ScreenBase`  
**Base:** `object`  
**File:** `bin/TaleWorlds.ScreenSystem/TaleWorlds.ScreenSystem/ScreenBase.cs`

## One-line responsibility

`ScreenBase` turns a top-level UI scene pushed by `ScreenManager` into lifecycle hooks and an ordered `ScreenLayer` collection; derived screens create ViewModels, Gauntlet movies, scene layers, and input behavior inside those hooks.

## Mental Model

This is not a bag of methods that a mod should construct and drive manually. It is an owner inside the UI stack. Construction creates only component and Layer collections, leaving the screen uninitialized, inactive, and paused. `SetAndActivateRootScreen`, `PushScreen`, and `CleanAndPushScreen` invoke internal handles, which call `OnInitialize`, `OnActivate`, `OnDeactivate`, `OnFinalize`, and the other protected hooks.

Initialization happens once, while activation and deactivation can repeat. A screen covered by a pushed screen is normally paused and inactive but remains on the stack; `PopScreen` can activate and resume it. Activation enables Layers first and schedules `OnReady` for the next screen frame. Finalization is terminal: old screens and Layers must not be brought back into a later frame.

## When to Use / When Not To

- Inherit `ScreenBase` for a full-screen page, map view, or UI state that owns input Layers. Create resources in `OnInitialize`, restore visibility/focus in `OnActivate`, pause in `OnDeactivate`, and release in `OnFinalize`.
- A Gauntlet page uses a `GauntletLayer` to host a [ViewModel](../../core-extra/ViewModel); the screen owns their lifetime, while binding and commands belong in the ViewModel.
- For a cross-screen overlay or input layer, consider `AddGlobalLayer` on [ScreenManager](../ScreenManager) instead of creating a full screen.
- Do not call internal `HandleInitialize`, `HandleActivate`, or `HandleFinalize`, and do not mutate the stack from a worker thread. Use `PushScreen`, `PopScreen`, or `CleanAndPushScreen`.
- Do not reattach a Layer after `RemoveLayer` or finalization. `RemoveLayer` immediately deactivates and finalizes it; use Layer state or category APIs for temporary visibility.

## Lifecycle and Update Order

| Stage | `ScreenBase` behavior | Derived-screen timing |
|---|---|---|
| Construction | Creates `_components` and `_layers`; `IsActive=false`, `IsPaused=true`. | Store constructor inputs only; do not require engine/UI readiness. |
| Initialization | `HandleInitialize` enters `OnInitialize` once. | Create Gauntlet/scene Layers, ViewModels, and one-time subscriptions. |
| Activation | Sets active, activates Layers, then calls `OnActivate`; next `FrameTick` calls `OnReady` once. | Load movies, activate the ViewModel, and set focus. |
| Pause/resume | Pushing pauses and deactivates the old screen; popping activates and resumes its predecessor. | Handle a temporary cover, not destruction. |
| Deactivation | Deactivates Layers before calling `OnDeactivate`. | Stop high-frequency UI work while retaining resumable resources. |
| Frame update | Active screens run `OnFrameTick` and `OnPostFrameTick`; the predecessor may receive an idle tick. | Keep this to UI frame work and validate dependencies. |
| Finalization | Calls `OnFinalize`, finalizes remaining Layers, clears Layer events, and sets `IsFinalized=true`. | Unsubscribe and release movies/resources; never use the screen afterward. |

## State, Components, and Layers

- `IsInitialized`, `IsActive`, `IsPaused`, and `IsFinalized` are read-only lifecycle observations, not switches for bypassing the manager.
- `Layers` is an ordered `MBReadOnlyList<ScreenLayer>`; the manager merges the top screen's Layers with global Layers into `SortedLayers`.
- `OnAddLayer` and `OnRemoveLayer` observe collection changes. Finalization clears them, so they are not a permanent cross-screen event bus.
- `AddComponent` and `FindComponent<T>` manage screen components. `AddLayer` asserts for null, finalized, or duplicate Layers; an active screen activates a new Layer immediately and raises `OnAddLayer`.
- `HasLayer`, `FindLayer<T>`, and `FindLayer<T>(string name)` return null on a miss. `RemoveLayer` deactivates, finalizes, removes, raises `OnRemoveLayer`, and refreshes global order.
- `SetLayerCategoriesState(string[] categoryIds, bool isActive)` toggles named Layers; `SetLayerCategoriesStateAndToggleOthers` inverses the state of non-matching Layers; `SetLayerCategoriesStateAndDeactivateOthers` only deactivates non-matching Layers.

## Real example: CustomBattleScreen and Gauntlet lifetime

The following structure is from `Modules.CustomBattle/.../CustomBattleScreen.cs`:

```csharp
private void LoadMovie()
{
    if (!_isMovieLoaded)
    {
        _gauntletMovie = _gauntletLayer.LoadMovie("CustomBattleScreen", _dataSource);
        _isMovieLoaded = true;
    }
}

protected override void OnInitialize()
{
    _dataSource = new CustomBattleVM(_customBattleState);
    _gauntletLayer = new GauntletLayer("CustomBattle", 1, true);
    LoadMovie();
    AddLayer(_gauntletLayer);
}

protected override void OnFinalize()
{
    UnloadMovie();
    RemoveLayer(_gauntletLayer);
    _dataSource = null;
    _gauntletLayer = null;
    base.OnFinalize();
}
```

The real screen also reloads the movie, activates its ViewModel, and calls `ScreenManager.TrySetFocus` in `OnActivate`; `OnDeactivate` unloads the movie and deactivates the ViewModel. The screen therefore owns the UI resource lifetime rather than asking a global manager to infer it.

## Real Call Path

`Modules.SandBox/.../MapScreen.cs` implements `OpenOptions` with `ScreenManager.PushScreen(ViewCreator.CreateOptionsScreen(false))`. The manager pauses the map screen, initializes and activates the options screen, and later finalizes it on `PopScreen` before restoring the map screen:

```csharp
public void OpenOptionsFromMap()
{
    if (ScreenManager.TopScreen is MapScreen)
    {
        ScreenManager.PushScreen(ViewCreator.CreateOptionsScreen(false));
    }
}
```

## Dependency Graph

- **Upstream:** [ScreenManager](../ScreenManager) owns the stack and invokes lifecycle handles; [MBSubModuleBase](../../core/MBSubModuleBase) or a game-state listener commonly starts UI-module integration.
- **Inside the screen:** [ScreenLayer](../ScreenLayer) provides input, focus, and render units; [ScreenComponent](../ScreenComponent) provides screen-level helpers.
- **Downstream:** [GauntletLayer](../../engine/GauntletLayer) hosts the movie and [ViewModel](../../core-extra/ViewModel) supplies bound state and commands; both must be cleaned before finalization.
- **Boundary:** [UI lifecycle crash boundaries](../../../architecture/crash-boundary) covers main-thread, focus, and finalization failures.

## Risks and Cleanup Boundaries

- `AddLayer(null)`, adding a finalized Layer, or adding the same Layer twice triggers an assertion.
- `RemoveLayer` finalizes the Layer immediately. Do not call its movie, Input, or events afterward, and do not leave a ViewModel holding released controls.
- Screen finalization clears Layer events; derived screens must still unsubscribe from Campaign, engine, and custom events in `OnFinalize`.
- `OnFrameTick` runs only while active; asynchronous callbacks must verify the screen is alive and stop posting work after finalization.
- Screen-stack and Layer changes belong to the main-thread UI owner. Release a Gauntlet movie before its Layer is finalized or `GauntletLayer` asserts.

## Navigation

- **Parent:** [GUI API index](../)
- **Siblings:** [ScreenManager](../ScreenManager), [ScreenLayer](../ScreenLayer), [ScreenComponent](../ScreenComponent)
- **Children / related types:** [GauntletLayer](../../engine/GauntletLayer), [ViewModel](../../core-extra/ViewModel), [GameStateScreenManager](../../mission-ext/GameStateScreenManager)
- **Upstream entry:** [MBSubModuleBase](../../core/MBSubModuleBase)
