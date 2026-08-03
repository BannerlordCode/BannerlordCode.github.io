---
title: "ScreenManager"
description: "The static screen stack, TopScreen, global Layers, and main-thread transition contract in TaleWorlds.ScreenSystem."
---

# ScreenManager

**Namespace:** `TaleWorlds.ScreenSystem`  
**Module:** `TaleWorlds.ScreenSystem`  
**Type:** `public static class ScreenManager`  
**Base:** none  
**Source:** `bin/TaleWorlds.ScreenSystem/TaleWorlds.ScreenSystem/ScreenManager.cs`

## Responsibility

`ScreenManager` is the static owner of the UI: it maintains the screen stack, selects `TopScreen`, merges the top screen's Layers with global Layers for input and rendering order, and turns push, pop, pause, resume, and finalization into one main-thread state machine.

## Mental Model

Do not look for a `new ScreenManager()` instance. The class is static, and the engine injects its `IScreenManagerEngineConnection` during startup through `EngineScreenManager.Initialize`. The manager owns a private screen list; its last item is `TopScreen`. The top screen owns the current UI, while screens below it can remain on the stack in a paused/inactive state.

Every stack operation is a lifecycle transaction, not just a list mutation. `PushScreen` pauses and deactivates the old top, then initializes, activates, and resumes the new screen. `PopScreen` deactivates and finalizes the old top, then activates and resumes the predecessor. `CleanAndPushScreen` pauses, deactivates, and finalizes every existing screen before creating the new root. All three paths require the main thread, so a worker callback must marshal back to the game thread before changing UI.

## When to Use / When Not To

- Use `PushScreen` for a returnable options, encyclopedia, save/load, or custom page. It preserves the current page beneath the temporary screen.
- Use `PopScreen` to close the current page and return. Do not call `TopScreen.OnDeactivate` manually or edit the stack through reflection.
- Use `CleanAndPushScreen` when a new root flow must not be returnable. It destroys the existing stack and is not an overlay operation.
- Use the current screen's `AddLayer`, or `AddGlobalLayer` for a cross-screen overlay, when only an input or Gauntlet Layer is needed. Do not attach the same Layer to multiple screens.
- Read `TopScreen` to observe the current page and `SortedLayers` to inspect input/render order. These are observations, not replacement APIs.

## Stack Transition Timing

| API | Existing stack | New screen | Meaning |
| --- | --- | --- | --- |
| `SetAndActivateRootScreen(screen)` | Requires `TopScreen == null`; otherwise throws. | Adds, initializes, activates, resumes, and raises `OnPushScreen`. | Establishes the first root screen. |
| `PushScreen(screen)` | Pauses the old top and deactivates it if active; does not finalize or remove it. | Adds, initializes, activates, resumes, and raises `OnPushScreen`. | Opens a returnable temporary page. |
| `PopScreen()` | Pauses, deactivates, finalizes, raises `OnPopScreen`, and removes the current top. | Activates and resumes the new top when one remains. | Closes the current page. |
| `CleanAndPushScreen(screen)` | Pauses, deactivates, finalizes, and removes all screens from top to bottom, then performs memory cleanup. | Adds and fully initializes, activates, and resumes the new screen. | Starts a clean, non-returnable root flow. |
| `ReplaceTopScreen(screen)` | Finalizes and removes the old top without retaining it. | Initializes, activates, and resumes the replacement. | Replaces the current top. |

These calls are synchronous lifecycle transitions. The source checks `TWParallel.IsMainThread()` in `PushScreen`, `PopScreen`, `CleanAndPushScreen`, and the cleanup path; the wrong thread triggers a failed assert. Treat the `TopScreen` change as complete on that same main-thread call before `OnPushScreen` or `OnPopScreen` observers run.

## TopScreen, SortedLayers, and Global Layers

- `TopScreen` is the read-only view of the last stack item. It changes with the stack and is observed through the top screen's `OnAddLayer` and `OnRemoveLayer` events so sorting can be refreshed.
- `SortedLayers` merges `TopScreen.Layers` with `_globalLayers` and sorts them. Input hit testing, focus, and ticking depend on it, so adding and removing Layers in the middle of a frame can change input order.
- `FocusedLayer` is the current keyboard/mouse/gamepad focus Layer; `FirstHitLayer` is the input hit result. Both are transient and can point at no usable Layer after deactivation or finalization.
- `AddGlobalLayer(GlobalLayer layer, bool isFocusable)` inserts by `InputRestrictions.Order` and activates the Layer immediately. `RemoveGlobalLayer` removes and deactivates it. Use global Layers only for cross-screen behavior and remove them when the feature or module ends.
- `Scale`, `UsableArea`, and `IsLateTickInProgress` describe layout/render state. `EngineInterface` and `Initialize(IScreenManagerEngineConnection)` are engine bridge points, not APIs a mod should repeatedly initialize to open a page.

## Tick Phases and Observation Events

`Tick(float dt)` runs global early ticks, updates input and the current screen, then runs the top screen's `FrameTick`, the predecessor's idle tick, sorted Layer ticks, global Layer ticks, late update, and the top screen's post-frame tick. `LateTick(float dt)` runs render ticks for active, non-finalized Layers and marks the phase with `IsLateTickInProgress`. Do not assume a background thread can safely change the stack from an `OnPushScreen` or Layer callback.

`OnPushScreen` and `OnPopScreen` are lifecycle observation events. Subscribers should record or coordinate external resources and unsubscribe when the module unloads; these events do not replace `ScreenBase.OnInitialize` or `OnFinalize` as resource hooks.

## Real Acquisition, Initialization, and Registration Paths

The engine connection is injected by `TaleWorlds.Engine.EngineScreenManager` during engine initialization:

```csharp
internal static void Initialize()
{
    ScreenManager.Initialize(new ScreenManagerEngineConnection());
}
```

Normal UI code uses the static entry points directly. The source `ViewSubModule` registers `OnPushScreen` during module load and removes it during module unload, which is the real registration pattern for observing transitions:

```csharp
protected override void OnSubModuleLoad()
{
    base.OnSubModuleLoad();
    ScreenManager.OnPushScreen += OnScreenManagerPushScreen;
}

protected override void OnSubModuleUnloaded()
{
    ScreenManager.OnPushScreen -= OnScreenManagerPushScreen;
    base.OnSubModuleUnloaded();
}
```

For opening a page, the source `MapScreen.OpenOptions` uses `ScreenManager.PushScreen(ViewCreator.CreateOptionsScreen(false))`. No manager instance needs to be acquired first.

## Risks and Cleanup Boundaries

- `CleanAndPushScreen`, `PopScreen`, and `OnFinalize` finalize screens and their Layers. Revalidate cached `TopScreen`, `GauntletLayer`, and `ViewModel` references after `OnPopScreen` or module cleanup.
- `PushScreen` leaves the old screen paused and inactive on the stack. If it unsubscribes in `OnDeactivate` but does not resubscribe in `OnActivate`, it may be dead after returning; if it never cleans up, subscriptions can duplicate.
- `TopScreen` can be null during startup, after a clean, or after manager finalization. Check it before reading Layers; entries in `SortedLayers` can also be inactive or finalized.
- The main-thread assertion on stack APIs is a correctness boundary, not a suggestion. Cross-thread push/pop can desynchronize TopScreen, focus, and input sorting, then crash when the next frame touches a disposed resource.
- A global Layer is not owned by one screen. Forgetting `RemoveGlobalLayer` can carry input restrictions, focus, and strong references across game states until manager finalization.
- Manager finalization detaches internal collection events and nulls the screen and global-Layer collections. Do not call stack or global-Layer APIs after module shutdown.

## Dependency Graph

- **Upstream:** [EngineScreenManager](../engine/EngineScreenManager) injects the engine connection; [ScreenBase](./ScreenBase) is the screen contract consumed by the stack.
- **Downstream:** [GauntletLayer](../engine/GauntletLayer) and [ViewModel](../core-extra/ViewModel) participate in input, binding, and rendering through the current screen.
- **Boundary:** [UI lifecycle crash boundaries](../../architecture/crash-boundary) documents main-thread, focus, and cleanup ordering.

## See Also and Navigation

- [GUI API index](../_index)
- [ScreenBase: derived-screen lifecycle and Layer ownership](./ScreenBase)
- [GauntletLayer: UI movies and input Layers](../engine/GauntletLayer)
- [ViewModel: Gauntlet-bound data](../core-extra/ViewModel)
- [UI lifecycle crash boundaries](../../architecture/crash-boundary)
