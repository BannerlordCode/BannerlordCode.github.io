---
title: "ScreenBase"
description: "The screen lifecycle, Layer ownership, and UI update boundary behind TaleWorlds.ScreenSystem."
---

# ScreenBase

**Namespace:** `TaleWorlds.ScreenSystem`  
**Module:** `TaleWorlds.ScreenSystem`  
**Type:** `public abstract class ScreenBase`  
**Base:** none  
**Source:** `bin/TaleWorlds.ScreenSystem/TaleWorlds.ScreenSystem/ScreenBase.cs`

## Responsibility

`ScreenBase` is the lifecycle and Layer container for one screen. `ScreenManager` decides when the screen enters the stack, pauses, activates, or is finalized; the derived screen creates its UI, scene resources, and `ViewModel` in protected callbacks; `ScreenBase` places its Layers into the input, update, and render loop in the correct order.

## Mental Model

This is not a bag of methods that a mod should construct and drive manually. It is an owner inside the UI stack. Construction only creates the component and Layer collections, leaving the screen inactive, paused, and uninitialized. The manager's `SetAndActivateRootScreen`, `PushScreen`, and `CleanAndPushScreen` paths invoke the internal lifecycle handles, which then call your `OnInitialize`, `OnActivate`, `OnDeactivate`, `OnFinalize`, and other protected overrides.

Initialization happens once, while activation and deactivation can repeat. A screen covered by a pushed screen is normally paused and inactive, not destroyed; `PopScreen` can activate and resume it. Finalization is terminal. Activation activates Layers first and schedules `OnReady` for the next screen frame. Deactivation deactivates Layers first. `ScreenManager.Tick` gives frame callbacks to the current top screen and can give the predecessor an idle tick, so campaign work and background simulation do not belong in a screen tick.

## When to Use / When Not To

- Inherit `ScreenBase` for a full-screen page, map view, or UI state that owns one or more input Layers. Create long-lived resources in `OnInitialize`, restore visibility and focus in `OnActivate`, pause in `OnDeactivate`, and release in `OnFinalize`.
- A Gauntlet page normally uses a `GauntletLayer` to host a `ViewModel`. The screen owns their lifetime; binding and commands belong in the `ViewModel`, not in a screen that has become a data model.
- For a temporary overlay or a global input layer, consider `ScreenManager.AddGlobalLayer` instead of creating a full screen.
- Do not call the internal `HandleInitialize`, `HandleActivate`, or `HandleFinalize` methods. Do not mutate the screen stack from a worker thread. Use `ScreenManager.PushScreen`, `PopScreen`, or `CleanAndPushScreen` so the manager can keep the stack and `TopScreen` coherent.
- Do not reattach a Layer after `RemoveLayer` or finalization. `RemoveLayer` immediately deactivates and finalizes the Layer; it is not a hide or detach operation. Use Layer state or `SetLayerCategoriesState` for temporary visibility changes.

## Lifecycle and Update Order

| Stage | `ScreenBase` behavior | What a derived screen should do |
| --- | --- | --- |
| Construction | Creates `_components` and `_layers`; `IsActive=false`, `IsPaused=true`. | Store constructor inputs only; do not require the engine or UI to be ready. |
| Initialization | `HandleInitialize` sets `IsInitialized=true` before calling `OnInitialize`. | Create `GauntletLayer`, scene Layers, ViewModels, and one-time subscriptions. |
| Activation | Sets `IsActive=true`, activates Layers in reverse order, then calls `OnActivate`; the next `FrameTick` calls `OnReady` once. | Load the movie, set ViewModel active state, and set focus. Do not do this in the constructor. |
| Pause/resume | Pushing a screen pauses and deactivates the old screen's Layers; popping resumes and activates the predecessor. | Handle a temporary cover without treating it as destruction. |
| Deactivation | Sets `IsActive=false`, deactivates Layers in reverse order, then calls `OnDeactivate`. | Stop sounds, movies, and high-frequency view work while retaining reusable state. |
| Frame update | An active screen runs `OnFrameTick`, Layer ticks, and `OnPostFrameTick`; the predecessor may receive `OnIdleTick`. | Keep this to frame-sized UI work and check that scene/VM dependencies are alive. |
| Finalization | Calls `OnFinalize`, finalizes remaining Layers in reverse order, clears Layer events, and sets `IsFinalized=true`. | Unsubscribe, unload movies, remove/release resources; never use the screen or its Layers afterward. |

## State, Components, and Layers

### State and events

- `IsInitialized`, `IsActive`, `IsPaused`, and `IsFinalized` are read-only lifecycle observations. Use them for guards and diagnostics; they are not switches for bypassing the manager.
- `Layers` is an ordered `MBReadOnlyList<ScreenLayer>`. The manager merges `TopScreen.Layers` with global Layers into `SortedLayers` for input and render ordering.
- `MouseVisible` is virtual so a derived screen can express its mouse policy.
- `OnAddLayer` and `OnRemoveLayer` notify the manager and other observers when the collection changes. Finalization clears these events, so they are not a permanent cross-screen event bus.

### Adding, finding, and removing

- `AddComponent(ScreenComponent component)` and `FindComponent<T>()` manage screen components.
- `AddLayer(ScreenLayer layer)` asserts for null, finalized, or duplicate Layers. If the screen is active, the new Layer is activated immediately; the collection is sorted and `OnAddLayer` is raised.
- `HasLayer(ScreenLayer layer)`, `FindLayer<T>()`, and `FindLayer<T>(string name)` find owned Layers. A miss returns null, so callers must guard it.
- `RemoveLayer(ScreenLayer layer)` deactivates it when the screen is active, finalizes it, removes it, raises `OnRemoveLayer`, and refreshes global order. It has no keep-alive detach semantics.
- `SetLayerCategoriesState(string[] categoryIds, bool isActive)` toggles named Layers; `SetLayerCategoriesStateAndToggleOthers` toggles non-matching Layers to the opposite state; `SetLayerCategoriesStateAndDeactivateOthers` deactivates non-matching Layers. All three depend on stable Layer names and do not replace screen lifecycle transitions.

## Gauntlet and ViewModel Integration

A typical UI screen owns a `GauntletLayer` that hosts a `ViewModel`. The source `CustomBattleScreen` creates `CustomBattleVM` and `GauntletLayer` in `OnInitialize`, loads the movie, and calls `AddLayer`; in `OnActivate` it reloads the movie, activates the ViewModel, and gives the Layer focus through `ScreenManager.TrySetFocus`; in `OnDeactivate` it unloads the movie and deactivates the ViewModel; in `OnFinalize` it unloads the movie, calls `RemoveLayer`, and clears its references. The screen therefore owns the UI resource lifetime instead of asking a global manager to infer it.

## Real Call Path

The source `MapScreen.OpenOptions` calls `ScreenManager.PushScreen(ViewCreator.CreateOptionsScreen(false))`. The manager pauses and deactivates the map screen, initializes/activates/resumes the options screen, and later finalizes it on `PopScreen` before restoring the map screen. A mod should use the same manager entry point rather than invoking a derived screen's lifecycle callbacks:

```csharp
public void OpenOptionsFromMap()
{
    if (ScreenManager.TopScreen is MapScreen)
    {
        ScreenManager.PushScreen(ViewCreator.CreateOptionsScreen(false));
    }
}
```

## Risks and Cleanup Boundaries

- After `OnFinalize`, `IsFinalized` is permanently true. Reusing a `GauntletLayer`, scene, `ViewModel`, or old event subscription can bring disposed objects back into a later UI frame.
- `RemoveLayer` finalizes the Layer. When a derived screen removes its own Layer in `OnFinalize`, it must also release references to that Layer and its ViewModel; it must not add the Layer again after the callback.
- Adding a Layer to an active screen activates it immediately. Initialize engine-backed resources on the main thread and in the correct UI phase. The manager enforces main-thread ownership for stack operations; Layer changes should follow the same ownership rule.
- Pair `ViewModel.OnFinalize`, Gauntlet movie unload, event removal, and input registration cleanup with screen finalization. Setting a field to null does not unregister an engine callback.
- Deactivation is not finalization. Do not destroy resources needed when the screen is resumed, and do not keep reading closed scene or input state from an inactive screen.

## Dependency Graph

- **Upstream:** [ScreenManager](../ScreenManager) owns the stack and invokes this page's lifecycle handles; [ScreenLayer](../ScreenLayer) provides the input/render units owned by the screen.
- **Downstream:** [GauntletLayer](../../engine/GauntletLayer) hosts the movie and [ViewModel](../../core-extra/ViewModel) supplies bound state and commands; both must be cleaned before finalization.
- **Boundary:** [UI lifecycle crash boundaries](../../../architecture/crash-boundary) covers main-thread, focus, and finalization failures.

## See Also and Navigation

- [GUI API index](../_index)
- [ScreenManager: screen stack, TopScreen, and global Layers](../ScreenManager)
- [GauntletLayer: mounting movies and input on a screen](../../engine/GauntletLayer)
- [ViewModel: bound data and commands](../../core-extra/ViewModel)
- [UI lifecycle crash boundaries](../../../architecture/crash-boundary)
