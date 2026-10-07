---
title: "GauntletDefaultLoadingWindowManager"
description: "Auto-generated class reference for GauntletDefaultLoadingWindowManager."
---
# GauntletDefaultLoadingWindowManager

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GauntletDefaultLoadingWindowManager : GlobalLayer, ILoadingWindowManager`
**Base:** `GlobalLayer`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GauntletDefaultLoadingWindowManager.cs`

## Overview

`GauntletDefaultLoadingWindowManager` is the global layer that draws the loading screen, and it is the game's only implementation of `ILoadingWindowManager` in 1.3.0. It combines two roles in one object: it is a `GlobalLayer` whose movie is driven by a `LoadingWindowViewModel`, and it is the interface through which every other system turns loading on and off.

Construction is the installation. The single public constructor (`GauntletDefaultLoadingWindowManager.cs:16`) resolves the sprite category, builds the view model, creates a `GauntletLayer` at id `115003`, loads the `LoadingWindow` movie, assigns `base.Layer`, and finally calls `ScreenManager.AddGlobalLayer(this, false)` (`GauntletDefaultLoadingWindowManager.cs:30`). It is installed exactly once, by `LoadingWindow.SetLoadingWindowManager<GauntletDefaultLoadingWindowManager>()` in `GauntletUISubModule` at `GauntletUISubModule.cs:43`, which satisfies the `new()` constraint and wraps it in a `LoadingWindowHandler<T>` (`LoadingWindow.cs:37`). From then on the instance is reachable through the static `LoadingWindow.LoadingWindowManager` (`LoadingWindow.cs:21`) for the rest of the process.

## Mental Model

Three things in the constructor are worth reading twice.

The `ContainsKey` call at `GauntletDefaultLoadingWindowManager.cs:19` **discards its result**. It is `UIResourceManager.SpriteData.SpriteCategories.ContainsKey(spriteCategoryName);` as a bare statement, and the very next line fetches the category unconditionally via `GetSpriteCategory`. Nothing branches on the membership test, so it is dead code — a leftover from a version that did guard the lookup. If you go looking for a "missing sprite category" error path here, there is none.

`GetSpriteCategoryName()` is `protected virtual` and is called from the **constructor** (`GauntletDefaultLoadingWindowManager.cs:18`, `GauntletDefaultLoadingWindowManager.cs:34`). An override therefore runs before the derived constructor body. In practice the base returns `"ui_loading"` and the override needs nothing from the instance, so it works — but any subclass that reads its own fields in that override reads them before they are assigned.

`SetCurrentModeIsMultiplayer` is guarded by `if (this._isMultiplayer != isMultiplayer)` (`GauntletDefaultLoadingWindowManager.cs:73`), and `_isMultiplayer` starts `false`. That guard is load-bearing rather than an optimisation: the false branch unloads `_mpLoadingCategory` and `_mpBackgroundCategory` (`GauntletDefaultLoadingWindowManager.cs:83`, `GauntletDefaultLoadingWindowManager.cs:84`) with no null check, and both fields are null until the true branch has run. Without the guard, a `SetCurrentModeIsMultiplayer(false)` on a fresh instance — exactly what a startup call would do — throws `NullReferenceException`. The shipped caller gets this right by tracking the flag itself and only calling on a transition (`GauntletUISubModule.cs:227`, `GauntletUISubModule.cs:242`). If you drive it yourself, do the same.

The two `ILoadingWindowManager` members are **explicit** implementations (`GauntletDefaultLoadingWindowManager.cs:47`, `GauntletDefaultLoadingWindowManager.cs:56`), so from outside you reach them through the interface, not through the class. Enabling does three things beyond flipping the flag: makes the layer the focus layer, tries to take focus, and installs `InputUsageMask.All` restrictions so nothing else consumes input (`GauntletDefaultLoadingWindowManager.cs:50` through `GauntletDefaultLoadingWindowManager.cs:52`). Disabling reverses all three and additionally marks the gamepad-navigation manager dirty (`GauntletDefaultLoadingWindowManager.cs:62` through `GauntletDefaultLoadingWindowManager.cs:67`) — null-guarded, because that manager is initialised separately.

The image loading is progressive and index-based: `LoadImage(int index, out string imageName)` calls `PartialLoadAtIndex` and then reads `SpriteParts[index - 1]` (`GauntletDefaultLoadingWindowManager.cs:93`, `GauntletDefaultLoadingWindowManager.cs:94`), so the indices the view model asks for are **one-based** while the array is zero-based.

## How to use

**Getting it.** Read it through `LoadingWindow.LoadingWindowManager`, which returns null until `GauntletUISubModule` has installed it (`LoadingWindow.cs:26`) — so a null check is not optional if you might run early.

```csharp
using TaleWorlds.Engine;

// Toggle the loading window the way the engine does.
LoadingWindow.EnableGlobalLoadingWindow();
// ... do the expensive work ...
LoadingWindow.DisableGlobalLoadingWindow();

// Read the manager directly when you need a capability, e.g. the MP artwork switch.
ILoadingWindowManager manager = LoadingWindow.LoadingWindowManager;
if (manager != null)
{
    manager.SetCurrentModeIsMultiplayer(true);   // false afterwards is fine; the guard is what stops the NRE
}
```

To substitute your own loading screen, register it instead of the stock one from a submodule that initialises at the same stage:

```csharp
public class MyLoadingWindow : GauntletDefaultLoadingWindowManager
{
    protected override string GetSpriteCategoryName()
    {
        // Runs from the BASE constructor (GauntletDefaultLoadingWindowManager.cs:18),
        // so it must not touch instance fields.
        return "ui_loading";
    }
}

LoadingWindow.SetLoadingWindowManager<MyLoadingWindow>();
```

**The mistake that leaves the loading screen eating every input forever.** Calling `EnableLoadingWindow()` without a matching `DisableLoadingWindow()`. The enable path installs `InputUsageMask.All` restrictions (`GauntletDefaultLoadingWindowManager.cs:52`) and takes focus, and nothing releases them except the disable path, which also resets restrictions and re-dirties gamepad navigation (`GauntletDefaultLoadingWindowManager.cs:60`, `GauntletDefaultLoadingWindowManager.cs:61`). Throw inside the loading window and the game is left with a visible overlay and no input reaching the screen beneath it, and no error to explain it.

## Key Methods

### SetCurrentModeIsMultiplayer
`public void SetCurrentModeIsMultiplayer(bool isMultiplayer)`

**Purpose:** Assigns a new value to current mode is multiplayer and updates the object's internal state.

```csharp
// Obtain an instance of GauntletDefaultLoadingWindowManager from the subsystem API first
GauntletDefaultLoadingWindowManager gauntletDefaultLoadingWindowManager = ...;
gauntletDefaultLoadingWindowManager.SetCurrentModeIsMultiplayer(false);
```

## Usage Example

```csharp
The `GauntletDefaultLoadingWindowManager.Current` snippet previously on this page named a property that does not exist. There is no static accessor on this type; the instance is owned by `LoadingWindow`:

```csharp
ILoadingWindowManager manager = LoadingWindow.LoadingWindowManager;
```
```

## See Also

- [GamepadCursorViewModel — the other global-layer view model in this namespace](../GamepadCursorViewModel)
- [MissionGauntletCameraFadeView — a mission view that renders over the mission screen](../MissionGauntletCameraFadeView)
- [MissionGamepadEffectsView — the input-side counterpart in the mission view layer](../MissionGamepadEffectsView)
- [Area Index](../)