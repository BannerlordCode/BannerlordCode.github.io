---
title: "GamepadCursorViewModel"
description: "Auto-generated class reference for GamepadCursorViewModel."
---
# GamepadCursorViewModel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class GamepadCursorViewModel : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/GamepadCursorViewModel.cs`

## Overview

`GamepadCursorViewModel` is the four-property data source behind the gamepad cursor overlay. It derives from `ViewModel` and declares exactly four `[DataSourceProperty]` members: `IsConsoleMouseVisible` (`GamepadCursorViewModel.cs:13`), `IsGamepadCursorVisible` (`GamepadCursorViewModel.cs:33`), `CursorPositionX` (`GamepadCursorViewModel.cs:53`) and `CursorPositionY` (`GamepadCursorViewModel.cs:73`). Every setter compares against the backing field first and only then calls `OnPropertyChangedWithValue(value, "<Name>")` — so an assignment that does not change the value produces no notification at all.

The single owner is `GauntletGamepadCursor`, a `GlobalLayer` that news the view model in its constructor (`GauntletGamepadCursor.cs:16`) and binds it to the `GamepadCursor` movie (`GauntletGamepadCursor.cs:18`). The layer's `OnLateTick` is the only writer: when `ScreenManager.IsMouseCursorHidden()` it sets the gamepad cursor visible, the console mouse invisible, and copies the position from `GetCursorPosition()` (`GauntletGamepadCursor.cs:37` through `GauntletGamepadCursor.cs:43`); otherwise it sets both booleans false (`GauntletGamepadCursor.cs:46`, `GauntletGamepadCursor.cs:47`). Nothing writes the positions in the hidden case, so they keep their last value.

The instance lives for the layer, which is created once by the static `GauntletGamepadCursor.Initialize()` and cached in a private static `_current` (`GauntletGamepadCursor.cs:26` through `GauntletGamepadCursor.cs:29`).

## Mental Model

The initial values are not neutral, and they encode an assumption about resolution. `_cursorPositionX` and `_cursorPositionY` are `960f` and `540f` (`GamepadCursorViewModel.cs:90`, `GamepadCursorViewModel.cs:93`) — half of 1920×1080. Both booleans start `false` (`GamepadCursorViewModel.cs:96`, `GamepadCursorViewModel.cs:99`). So before the first tick with a hidden mouse cursor, the movie sees the cursor at screen centre; if your layer never gets an `OnLateTick`, the overlay renders there permanently.

`IsConsoleMouseVisible` is set to `false` on **both** branches (`GauntletGamepadCursor.cs:40`, `GauntletGamepadCursor.cs:47`). Nothing in this tree ever sets it `true`, and `GauntletGamepadCursor` is the only writer of this view model — so the property is permanently false and the corresponding movie element never shows. It exists for the movie binding, not for the shipped behaviour. Anything that needs a visible console mouse indicator has to write it, and cannot, because `_dataSource` is private to the cursor layer (`GauntletGamepadCursor.cs:61`).

The positions are in **centred** coordinates, not raw pixels. `GetCursorPosition` computes `Vec2.One - ScreenManager.UsableArea`, multiplies each component by half of `Screen.RealScreenResolution`, and subtracts those from `Input.MousePositionPixel` (`GauntletGamepadCursor.cs:54` through `GauntletGamepadCursor.cs:57`). That recentres the pixel position on the usable area's midpoint, so the movie draws the cursor at `RealScreenResolution/2` when the physical cursor is centred. It also means the values are resolution-dependent and change when the user resizes the window.

Because these are Gauntlet `[DataSourceProperty]` members, the property names are part of the movie's binding contract. Renaming one compiles fine and silently breaks the binding in the prefab.

## How to use

**Getting it.** You do not construct it for the shipped cursor — `GauntletGamepadCursor.Initialize()` owns that instance and keeps it private. Construct your own only if you are writing a different cursor layer, and drive it the same way the stock layer does:

```csharp
using TaleWorlds.Engine;
using TaleWorlds.InputSystem;
using TaleWorlds.MountAndBlade.GauntletUI;
using TaleWorlds.ScreenSystem;

public class MyCursorLayer : GlobalLayer
{
    private GamepadCursorViewModel _vm;

    public MyCursorLayer()
    {
        _vm = new GamepadCursorViewModel();
        Layer = new GauntletLayer(115099, "GauntletLayer", false);
        ((GauntletLayer)Layer).LoadMovie("GamepadCursor", _vm);
        ScreenManager.AddGlobalLayer(this, false);
    }

    protected override void OnLateTick(float dt)
    {
        base.OnLateTick(dt);

        // Write only when the value actually changes; the setters suppress no-op
        // notifications themselves (GamepadCursorViewModel.cs:21), so an unchanged
        // write costs nothing but a comparison.
        _vm.IsGamepadCursorVisible = ScreenManager.IsMouseCursorHidden();

        if (_vm.IsGamepadCursorVisible)
        {
            // Match the stock centring maths or the cursor drifts off the usable area.
            Vec2 offset = Vec2.One - ScreenManager.UsableArea;
            Vec2 centred = Input.MousePositionPixel
                - new Vec2(offset.x * Screen.RealScreenResolution.x / 2f,
                           offset.y * Screen.RealScreenResolution.y / 2f);
            _vm.CursorPositionX = centred.X;
            _vm.CursorPositionY = centred.Y;
        }
    }
}
```

**The mistake that makes the cursor stick to screen centre.** Writing the positions with raw `Input.MousePositionPixel`. The movie expects values recentred on the usable area's midpoint — `GetCursorPosition` subtracts `offset * RealScreenResolution / 2` (`GauntletGamepadCursor.cs:57`) — so raw pixels put the overlay at roughly twice the intended offset, which looks like a cursor that drifts further away the further you move the real mouse. Nothing throws; the arithmetic is simply in the wrong space.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsConsoleMouseVisible` | `public bool IsConsoleMouseVisible { get; set; }` |
| `IsGamepadCursorVisible` | `public bool IsGamepadCursorVisible { get; set; }` |
| `CursorPositionX` | `public float CursorPositionX { get; set; }` |
| `CursorPositionY` | `public float CursorPositionY { get; set; }` |

## Usage Example

```csharp
The `GamepadCursorViewModel vm = ...;` placeholder previously on this page was not a runnable line. The real entry points are `new GamepadCursorViewModel()` followed by `LoadMovie`, or reading the stock instance off your own cursor layer.

```csharp
var vm = new GamepadCursorViewModel();
((GauntletLayer)Layer).LoadMovie("GamepadCursor", vm);
```
```

## See Also

- [GauntletDefaultLoadingWindowManager — the other global layer installed at startup](../GauntletDefaultLoadingWindowManager)
- [MissionGamepadEffectsView — the other gamepad-aware layer, in the mission view stack](../MissionGamepadEffectsView)
- [Area Index](../)