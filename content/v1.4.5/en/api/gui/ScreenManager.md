---
title: "ScreenManager"
description: "The static screen coordinator in TaleWorlds.ScreenSystem: it owns the screen stack, top screen, global layers, input focus, and the UI main-thread switch."
---
# ScreenManager

**Namespace:** `TaleWorlds.ScreenSystem`  
**Module:** `TaleWorlds.ScreenSystem`  
**Type:** `public static class ScreenManager`  
**Base:** `object`  
**File:** `bin/TaleWorlds.ScreenSystem/TaleWorlds.ScreenSystem/ScreenManager.cs`

## Overview

`ScreenManager` organizes the `ScreenBase` instances produced by game states into a main-thread screen stack, and coordinates the top screen's layers, global layers, input hit-testing, focus, layout, and tick. It is the entry point that turns "I want to open the options menu" into a correctly sequenced push/pop of screens, without the mod touching the underlying stack array directly.

## Mental Model

This is a static coordinator. There is no `new ScreenManager()` instance, and no public screen list that a mod is meant to write to. During engine startup `Initialize(IScreenManagerEngineConnection)` is called to inject the window/input bridge; the last item on the stack is `TopScreen`, and the screens beneath it may be retained but are paused/inactive.

Every stack operation is a full lifecycle transaction. `PushScreen` pauses and deactivates the old top, then initializes, activates, and resumes the new screen; `PopScreen` deactivates and finalizes the old top, then resumes the previous screen; `CleanAndPushScreen` first finalizes the entire old stack, then builds the new screen. All of them require the main thread, because a single switch simultaneously mutates the ViewModel, Gauntlet movie, focus, and engine layer state.

## When to Use / When Not to Use

- Use `PushScreen` for options, the encyclopedia, save/load, or a custom page that you want to be able to return from.
- Use `PopScreen` to close the current page and go back; do not call `TopScreen.OnDeactivate` manually or reflection-edit the stack.
- Use `CleanAndPushScreen` for a new root flow that must not be reversible; do not use it for transient pop-ups.
- Use `AddGlobalLayer` only when you need a cross-screen input override; do not attach the same layer to multiple screens.
- `TopScreen` and `SortedLayers` are observation entry points, not write entry points that replace the stack.

## Stack Operation Timing

| API | Old-stack handling | New-screen handling | Intended semantics |
|---|---|---|---|
| `SetAndActivateRootScreen(screen)` | Requires `TopScreen == null`, otherwise throws. | Adds, initializes, activates, resumes, and fires `OnPushScreen`. | Establishes the first root screen. |
| `PushScreen(screen)` | Pauses the old top; deactivates it if active. Does not finalize or remove. | Adds, initializes, activates, resumes, and fires `OnPushScreen`. | A reversible, temporary page. |
| `PopScreen()` | Pauses, deactivates, finalizes the current top, fires `OnPopScreen` and removes it. | If a previous screen exists, activates and resumes it. | Closes the current page. |
| `CleanAndPushScreen(screen)` | From top to bottom, pauses, deactivates, finalizes and removes every screen, then clears memory. | Adds and fully initializes, activates, and resumes. | A new root flow that forbids going back. |
| `CleanScreens()` | Empties every screen and finalizes it. | Adds no new screen. | Quit or reset. |
| `ReplaceTopScreen(screen)` | Finalizes and removes the old top, keeping no return path. | Initializes, activates, and resumes the replacement screen. | Directly replaces the top. |

These APIs are synchronous switches, not an async queue. The source checks `TWParallel.IsMainThread()` inside `PushScreen`, `PopScreen`, `CleanAndPushScreen`, and the cleanup paths; calling from the wrong thread triggers a failed assert.

## TopScreen, SortedLayers and Global Layers

- `TopScreen` is a read-only view of the last item on the private stack; a change to its layers invalidates the sorting cache and recomputes it.
- `SortedLayers` merges the top screen's layers with the global layers and sorts them; input hit-testing, focus, and tick all depend on it.
- `FocusedLayer` is the current keyboard/mouse/gamepad focus layer; `FirstHitLayer` is the layer first hit this input frame. Either may become invalid when a layer is deactivated/finalized.
- `AddGlobalLayer(GlobalLayer layer, bool isFocusable)` inserts into the global collection and immediately activates the layer; `RemoveGlobalLayer` removes and deactivates it. The owner is still responsible for releasing the global layer's movie, ViewModel, and events.
- `Scale`, `UsableArea`, and `IsLateTickInProgress` are layout/render observation points; do not repeatedly call the engine bridge initialization just to open a page.

## Tick and Observation Events

`Tick(float dt)` handles the global early tick, input update, the top `FrameTick`, the previous screen's idle tick, the sorted-layer tick, the global-layer tick, the late update, and the top post-frame tick. `LateTick(float dt)` handles the render tick of active, non-finalized layers, and marks the phase with `IsLateTickInProgress`. `OnPushScreen` and `OnPopScreen` are observation events only; they are not a replacement for the resource hooks of `ScreenBase.OnInitialize` / `OnFinalize`.

## Real Acquisition, Initialization and Registration Path

The engine calls `ScreenManager.Initialize(IScreenManagerEngineConnection)` during startup; a mod must not construct the connection itself or re-initialize. In `Modules.Native/.../ViewSubModule.cs` the source subscribes to `OnPushScreen` on load and unsubscribes on unload, then pushes the options screen from the real `ViewCreator` factory:

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

There is no need, and no reason, to obtain a manager instance first; the map's `OpenOptions` and `OpenSaveLoad` use the same `PushScreen` path.

## Dependencies

- **Upstream:** [IScreenManagerEngineConnection](../IScreenManagerEngineConnection) is the engine-connection contract; [MBSubModuleBase](../../core/MBSubModuleBase) carries UI registration through its module lifecycle.
- **Stack members:** [ScreenBase](../ScreenBase) runs a single screen's lifecycle; [ScreenLayer](../ScreenLayer) provides input, focus, and render ordering.
- **Downstream:** [GauntletLayer](../../engine/GauntletLayer) hosts the movie; [ViewModel](../../core-extra/ViewModel) participates in binding and commands through the current screen.
- **Boundary:** [UI crash boundary](../../../architecture/crash-boundary) documents the main thread, focus, and cleanup ordering.

## Risks and Cleanup Boundaries

- `PushScreen`, `PopScreen`, `CleanAndPushScreen`, and `CleanScreens` require the main thread; cross-thread operations can corrupt `TopScreen`, focus, and input ordering.
- `SetAndActivateRootScreen` throws when a `TopScreen` already exists; it is not a normal navigation entry point.
- `PopScreen`, `CleanScreens`, `CleanAndPushScreen`, and `ReplaceTopScreen` all finalize the removed screen. Do not keep using its layer, movie, or ViewModel.
- Static `OnPushScreen` / `OnPopScreen` subscriptions must be removed on module unload, otherwise you get duplicate callbacks and stale references.
- `TopScreen` may be null after startup, stack clearing, and manager finalize; a cached `FocusedLayer` must also be reconfirmed inside the switch callback.
- `AddGlobalLayer` activates the layer, while `RemoveGlobalLayer` only deactivates and removes it; the owner must still release the global layer's resources.

## See Also

- **↑ Parent:** [GUI API index](../)
- **↔ Sibling:** [ScreenBase](../ScreenBase), [ScreenLayer](../ScreenLayer), [IScreenManagerEngineConnection](../IScreenManagerEngineConnection)
- **Children / related types:** [GauntletLayer](../../engine/GauntletLayer), [ViewModel](../../core-extra/ViewModel), [GameStateScreenManager](../../mission-ext/GameStateScreenManager)
- **Upstream entry:** [MBSubModuleBase](../../core/MBSubModuleBase)
