---
title: "ScreenManager"
description: "The static screen coordinator for TaleWorlds.ScreenSystem, maintaining the top screen, screen stack, global layers, input focus, and main-thread UI transitions."
---
# ScreenManager

**Namespace:** `TaleWorlds.ScreenSystem`  
**Module:** `TaleWorlds.ScreenSystem`  
**Type:** `public static class ScreenManager`  
**Base:** `object`  
**File:** `bin/TaleWorlds.ScreenSystem/TaleWorlds.ScreenSystem/ScreenManager.cs`

## One-line responsibility

`ScreenManager` organizes game-state-created `ScreenBase` instances into a main-thread screen stack and coordinates the top screen's Layers, global Layers, input hit testing, focus, layout, and ticks.

## Mental Model

This is a static coordinator: there is no `new ScreenManager()` instance and no writable screen list for mods. During startup the engine calls `Initialize(IScreenManagerEngineConnection)` to inject the window/input bridge. The last private stack item is `TopScreen`; screens beneath it can remain paused and inactive.

Every stack operation is a lifecycle transaction. `PushScreen` pauses and deactivates the old top, then initializes, activates, and resumes the new screen. `PopScreen` deactivates and finalizes the old top, then activates and resumes the predecessor. `CleanAndPushScreen` finalizes the entire old stack before establishing the new screen. All of these operations require the main thread because they change ViewModel, Gauntlet movie, focus, and engine-Layer state together.

## When to Use / When Not To

- Use `PushScreen` for returnable options, encyclopedia, save/load, or custom pages.
- Use `PopScreen` to close the current page; do not call `TopScreen.OnDeactivate` manually or edit the stack through reflection.
- Use `CleanAndPushScreen` for a new non-returnable root flow, not a temporary overlay.
- Use `AddGlobalLayer` for a cross-screen input overlay; do not attach one Layer to multiple screens.
- Read `TopScreen` and `SortedLayers` as observations, not replacement APIs.

## Stack Transition Timing

| API | Existing stack | New screen | Meaning |
|---|---|---|---|
| `SetAndActivateRootScreen(screen)` | Requires `TopScreen == null`; otherwise throws. | Adds, initializes, activates, resumes, and raises `OnPushScreen`. | Establishes the first root. |
| `PushScreen(screen)` | Pauses and deactivates the old top; does not finalize or remove it. | Adds, initializes, activates, resumes, and raises `OnPushScreen`. | Opens a returnable page. |
| `PopScreen()` | Pauses, deactivates, finalizes, raises `OnPopScreen`, and removes the current top. | Activates and resumes the new top when one remains. | Closes the current page. |
| `CleanAndPushScreen(screen)` | Pauses, deactivates, finalizes, and removes every old screen, then cleans memory. | Adds and fully initializes, activates, and resumes the new screen. | Starts a clean root flow. |
| `CleanScreens()` | Finalizes and removes every screen. | Adds nothing. | Exits or resets UI. |
| `ReplaceTopScreen(screen)` | Finalizes and removes the old top without retaining it. | Initializes, activates, and resumes the replacement. | Directly replaces the top. |

These APIs are synchronous, not an asynchronous queue. The source checks `TWParallel.IsMainThread()` in `PushScreen`, `PopScreen`, `CleanAndPushScreen`, and cleanup paths; the wrong thread triggers a failed assert.

## TopScreen, SortedLayers, and Global Layers

- `TopScreen` is the read-only view of the last private stack item; its Layer events invalidate the sorting cache.
- `SortedLayers` merges the top screen's Layers with global Layers and sorts them. Input hit testing, focus, and ticking depend on it.
- `FocusedLayer` is the current keyboard/mouse/controller focus Layer; `FirstHitLayer` is the first Layer hit in the current input frame. Both can become unusable after deactivation or finalization.
- `AddGlobalLayer(GlobalLayer layer, bool isFocusable)` inserts a global Layer and activates it immediately; `RemoveGlobalLayer` removes and deactivates it. The owner still releases global movies, ViewModels, and subscriptions.
- `Scale`, `UsableArea`, and `IsLateTickInProgress` expose layout/render state; mods should not repeatedly initialize the engine bridge to open a page.

## Tick Phases and Observation Events

`Tick(float dt)` runs global early ticks, input update, the top screen's `FrameTick`, the predecessor's idle tick, sorted Layer ticks, global Layer ticks, late update, and the top screen's post-frame tick. `LateTick(float dt)` runs render ticks for active, non-finalized Layers and marks the phase with `IsLateTickInProgress`. `OnPushScreen` and `OnPopScreen` are observation events, not replacements for `ScreenBase.OnInitialize` or `OnFinalize` resource hooks.

## Real Acquisition, Initialization, and Registration Paths

The engine calls `ScreenManager.Initialize(IScreenManagerEngineConnection)` during startup. A mod should not construct the connection or initialize it again. The source `Modules.Native/.../ViewSubModule.cs` subscribes to `OnPushScreen` during module load, removes it during unload, and pushes an options screen from a real `ViewCreator` factory:

```csharp
using TaleWorlds.Library;
using TaleWorlds.ScreenSystem;

protected override void OnSubModuleLoad()
{
    base.OnSubModuleLoad();
    ScreenManager.OnPushScreen += OnScreenManagerPushScreen;
}

private void OnScreenManagerPushScreen(ScreenBase pushedScreen)
{
    Debug.Print("Pushed screen: " + pushedScreen.GetType().Name);
}

protected override void OnSubModuleUnloaded()
{
    ScreenManager.OnPushScreen -= OnScreenManagerPushScreen;
    base.OnSubModuleUnloaded();
}

private void OpenOptionsFromMainMenu()
{
    ScreenManager.PushScreen(ViewCreator.CreateOptionsScreen(fromMainMenu: true));
}
```

No manager instance needs to be acquired. `MapScreen.OpenOptions` and `OpenSaveLoad` use the same `PushScreen` path.

## Dependency Graph

- **Upstream:** [IScreenManagerEngineConnection](../IScreenManagerEngineConnection) is the engine connection contract; [MBSubModuleBase](../../core/MBSubModuleBase) provides the module lifecycle for UI registration.
- **Stack members:** [ScreenBase](../ScreenBase) executes one-screen lifecycle; [ScreenLayer](../ScreenLayer) provides input, focus, and render ordering.
- **Downstream:** [GauntletLayer](../../engine/GauntletLayer) hosts movies and [ViewModel](../../core-extra/ViewModel) supplies binding state and commands through the current screen.
- **Boundary:** [UI lifecycle crash boundaries](../../../architecture/crash-boundary) documents main-thread, focus, and cleanup ordering.

## Risks and Cleanup Boundaries

- `PushScreen`, `PopScreen`, `CleanAndPushScreen`, and `CleanScreens` require the main thread; cross-thread changes can corrupt TopScreen, focus, and input sorting.
- `SetAndActivateRootScreen` throws when `TopScreen` already exists; it is not ordinary navigation.
- `PopScreen`, `CleanScreens`, `CleanAndPushScreen`, and `ReplaceTopScreen` finalize removed screens. Do not use their Layers, movies, or ViewModels afterward.
- Static `OnPushScreen` and `OnPopScreen` subscriptions must be removed during module unload, or duplicate callbacks and stale references remain.
- `TopScreen` can be null during startup, after a clean, or after manager finalization; cached `FocusedLayer` must also be revalidated at transition callbacks.
- `AddGlobalLayer` activates a Layer while `RemoveGlobalLayer` only deactivates and removes it; the owner remains responsible for resource cleanup.

## Navigation

- **Parent:** [GUI API index](../)
- **Siblings:** [ScreenBase](../ScreenBase), [ScreenLayer](../ScreenLayer), [IScreenManagerEngineConnection](../IScreenManagerEngineConnection)
- **Children / related types:** [GauntletLayer](../../engine/GauntletLayer), [ViewModel](../../core-extra/ViewModel), [GameStateScreenManager](../../mission-ext/GameStateScreenManager)
- **Upstream entry:** [MBSubModuleBase](../../core/MBSubModuleBase)
