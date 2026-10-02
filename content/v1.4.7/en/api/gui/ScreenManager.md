---
title: "ScreenManager"
description: "The static UI scheduler: owns the screen stack, global layers, the per-frame tick and late-tick passes, input distribution, focus arbitration, scaling and platform keyboard plumbing. The only entry point for opening, closing or replacing a screen."
---
# ScreenManager

**Namespace:** `TaleWorlds.ScreenSystem`
**Module:** `TaleWorlds.ScreenSystem`
**Type:** `public static class ScreenManager`
**Base:** none (static class)
**Source:** `TaleWorlds.ScreenSystem/ScreenManager.cs` (declaration at line 14)

## Overview

`ScreenManager` is the whole UI system's global coordinator, and it has no instances — every member is static. Five responsibilities live here.

**The screen stack.** `PushScreen`, `PopScreen`, `ReplaceTopScreen`, `CleanAndPushScreen`, `CleanScreens` and `SetAndActivateRootScreen` move [ScreenBase](../ScreenBase) instances on and off the top of the stack. `TopScreen` names whatever is currently on top. Screens are stacked, so what you push covers what was there, and what you pop uncovers it.

**Global layers.** `AddGlobalLayer` and `RemoveGlobalLayer` register layers that survive screen transitions — the HUD, a persistent notification bar. Note the parameter type: a `GlobalLayer`, which is a thin wrapper holding a `ScreenLayer` in its `Layer` property. Passing a bare `GauntletLayer` to `AddGlobalLayer` does not compile.

**The frame loop.** `Tick(float dt)`, `LateTick(float dt)`, `Update(IReadOnlyList<int> lastKeysPressed)` and `EarlyUpdate(Vec2 usableArea)` are the passes that drive every screen and layer. `Tick` and `LateTick` are engine calls; `Update` distributes raw key presses; `EarlyUpdate` runs before distribution with the usable viewport size. `IsLateTickInProgress` tells you which phase you are in, and `DisableScreenManagerTicks` freezes the whole UI when set.

**Focus and input arbitration.** `FocusedLayer`, `FirstHitLayer`, `TrySetFocus`, `TryLoseFocus` and `IsLayerBlockedAtPosition` decide which layer receives keyboard and controller input and which one the mouse hit this frame. Device queries — `IsControllerActive`, `IsMouseCursorActive`, `IsMouseCursorHidden`, `GetMouseVisibility` — drive prompt art.

**Environment changes.** `Scale` is the UI scale factor and is not a constant; `OnScaleChange` reports a change and `UpdateLayout()` applies it. `OnGameWindowFocusChange` plus the `FocusGained` event report window focus. Platform text entry is handled by `OnPlatformScreenKeyboardRequested`, `OnOnscreenKeyboardDone`, `OnOnscreenKeyboardCanceled` and the `PlatformTextRequested` event. `OnControllerDisconnect` and the `OnControllerDisconnected` event tell the UI to fall back to keyboard and mouse.

## Mental Model

Treat `ScreenManager` as the operating system for the UI: the screen stack is the task stack, global layers are the desktop layer, focus is a single exclusive resource, and the tick passes are the heartbeat.

**Three stack operations, three different intentions.** `PushScreen` adds depth — use it for a sub-screen opened from inside another screen, and the player presses Back to return. `ReplaceTopScreen` swaps the top screen without adding depth — use it for mutually exclusive full-screen menus, where Back should leave the menu entirely rather than walk a history. `CleanAndPushScreen` empties the stack and pushes, for transitions into an unrelated mode. `SetAndActivateRootScreen` sets the root at startup. Choosing `PushScreen` for mutually exclusive menus is why players report "I have to press Back twice".

**Never push from a per-frame callback.** `PushScreen` from `OnFrameTick` adds one screen per frame and exhausts the stack within seconds. Any stack change must be driven by user input or by a state transition.

**Global layers are the right home for a HUD.** If a notification bar is needed across the menu, the map and inside a mission, adding it to each screen produces several copies, overlapping draw order and competing input. Wrap one layer in a `GlobalLayer` and register it once. The wrapper type is not optional — see the example below.

**Focus is exclusive, and only the topmost screen should touch it.** `TrySetFocus` gives one layer the keyboard. If two systems call it in the same frame the result is a button that responds to input intermittently. Read `FocusedLayer` instead of assuming you have focus.

**Layers declare what they consumed.** A [ScreenLayer](../ScreenLayer) reports handled input through `EarlyProcessEvents(InputType)`. A layer that handles a key but never declares it produces the same key being acted on by two layers — "the close button needs two presses", "the list scrolls two rows".

**Static events outlive the screens that subscribe to them.** `OnPushScreen`, `OnPopScreen`, `OnControllerDisconnected`, `FocusGained` and `PlatformTextRequested` are static. Subscribing from a screen and not unsubscribing in `OnFinalize` means the next screen calls back into a destroyed object.

**`Scale` is data, not a constant.** Layout arithmetic that hard-codes pixels breaks on high-resolution displays. Read `Scale`, and call `UpdateLayout()` after it changes.

## When to Use / When Not To Use

- **Use** `PushScreen` to open a screen, `PopScreen` to close the top one, `ReplaceTopScreen` to switch between mutually exclusive menus.
- **Use** `TopScreen` to ask which screen is showing.
- **Use** `AddGlobalLayer` / `RemoveGlobalLayer` for anything that must appear across screens.
- **Use** `FocusedLayer`, `FirstHitLayer` and `IsLayerBlockedAtPosition` to write hover and focus behaviour.
- **Use** `OnPushScreen` / `OnPopScreen` to react to navigation, unsubscribing in `OnFinalize`.
- **Use** `ScreenTypeExistsAtList` before pushing, to avoid stacking the same screen twice.
- **Do not** push from `OnFrameTick` or from a tick callback of any kind.
- **Do not** use `PushScreen` for menu-to-menu transitions.
- **Do not** fight over focus with another screen.
- **Do not** ship `DisableScreenManagerTicks` set to true — it stops the entire UI.

## Members

### The screen stack

| Member | What it is for |
| --- | --- |
| `static ScreenBase TopScreen { get; private set; }` | The screen currently on top of the stack, or null when the stack is empty. The only way to ask "which screen is this". |
| `static void PushScreen(ScreenBase screen)` | Pushes a screen on top. The screen beneath is paused. For nested sub-screens. Never call from a per-frame callback. |
| `static void PopScreen()` | Removes the top screen and resumes the one below. |
| `static void ReplaceTopScreen(ScreenBase screen)` | Replaces the top screen without changing stack depth. The correct tool for mutually exclusive menus. |
| `static void CleanAndPushScreen(ScreenBase screen)` | Empties the stack and pushes one screen — a transition into an unrelated mode. |
| `static void CleanScreens()` | Empties the whole stack. |
| `static void SetAndActivateRootScreen(ScreenBase screen)` | Sets and activates the root screen. The startup entry point. |
| `static bool ScreenTypeExistsAtList(ScreenBase screen)` | Whether a screen of that type is already in the stack. Use it before pushing to avoid duplicates. |

### Global layers

| Member | What it is for |
| --- | --- |
| `static void AddGlobalLayer(GlobalLayer layer, bool isFocusable)` | Registers a layer that survives screen changes. **Takes a `GlobalLayer`**, which wraps a `ScreenLayer`. |
| `static void RemoveGlobalLayer(GlobalLayer layer)` | Unregisters it. |
| `static void SetSuspendLayer(ScreenLayer layer, bool isSuspended)` | Suspends or resumes a layer's tick and input. |
| `static List<ScreenLayer> GetPersistentInputRestrictions()` | The input restrictions currently in force. |
| `static void OnConstrainStateChanged(bool isConstrained)` | Engine callback: the input constraint state changed. |

### Frame passes

| Member | What it is for |
| --- | --- |
| `static void Tick(float dt)` | Main pass; drives every active screen's frame tick. Engine-called. |
| `static void LateTick(float dt)` | Late pass. Engine-called. |
| `static void EarlyUpdate(Vec2 usableArea)` | Pre-input pass carrying the usable viewport size. |
| `static void Update(IReadOnlyList<int> lastKeysPressed)` | Distributes this frame's key presses to the active screens. |
| `static bool IsLateTickInProgress { get; private set; }` | Whether the late pass is running. Some operations are not valid in that phase. |
| `static bool DisableScreenManagerTicks` | Debug switch. When true the entire UI stops ticking. |
| `static void UpdateLayout()` | Global relayout after a resolution or scale change. |

### Focus, hit testing and devices

| Member | What it is for |
| --- | --- |
| `static ScreenLayer FocusedLayer { get; private set; }` | The layer currently holding keyboard or controller focus. |
| `static ScreenLayer FirstHitLayer { get; private set; }` | The first layer the mouse hit this frame. |
| `static void TrySetFocus(ScreenLayer layer)` | Requests focus. Exclusive — only the topmost screen should call it. |
| `static void TryLoseFocus(ScreenLayer layer)` | Releases focus. |
| `static bool IsLayerBlockedAtPosition(ScreenLayer layer, Vector2 position)` | Whether a higher layer covers that point — the test a custom layer needs before claiming a click. |
| `static bool IsControllerActive()` | Whether a controller is connected and usable. |
| `static bool IsMouseCursorActive()` | Whether the mouse cursor is active. |
| `static bool IsMouseCursorHidden()` | Whether the mouse cursor is hidden. |
| `static bool GetMouseVisibility()` | Current mouse visibility. |
| `static List<ScreenLayer> SortedLayers` | The layers in their resolved global order. |
| `static void Initialize(IScreenManagerEngineConnection engineInterface)` | Engine entry point that wires the manager to its host. |

### Window, platform and console entries

| Member | What it is for |
| --- | --- |
| `static float Scale { get; private set; } = 1f` | The UI scale factor. Read it for layout arithmetic; it is not 1 everywhere. |
| `static void OnScaleChange(float newScale)` | Engine callback for a scale change. |
| `static void OnGameWindowFocusChange(bool focusGained)` | Engine callback for window focus. |
| `static event Action FocusGained` | Raised when the window gains focus. Static — unsubscribe or leak. |
| `static event OnControllerDisconnectedEvent OnControllerDisconnected` | Raised when a controller disconnects; the UI should fall back to keyboard and mouse. |
| `static void OnControllerDisconnect()` | Engine-side disconnect handler. |
| `static bool OnPlatformScreenKeyboardRequested(string initialText, string descriptionText, int maxLength, int keyboardTypeEnum)` | Asks the platform for an on-screen keyboard; returns whether it was taken up. Only meaningful on consoles. |
| `static void OnOnscreenKeyboardDone(string inputText)` | On-screen keyboard finished with text. |
| `static void OnOnscreenKeyboardCanceled()` | On-screen keyboard was cancelled. |
| `static event OnPlatformTextRequestedDelegate PlatformTextRequested` | Platform text-entry request event. |
| `static void OnFinalize()` | UI subsystem teardown. |

### Screen navigation events

| Member | What it is for |
| --- | --- |
| `static event OnPushScreenEvent OnPushScreen` | Raised when a screen is pushed, carrying the new screen. |
| `static event OnPopScreenEvent OnPopScreen` | Raised when a screen is popped, carrying the removed screen. |
| `public delegate void OnPushScreenEvent(ScreenBase pushedScreen)` | Delegate type for `OnPushScreen`. |
| `public delegate void OnPopScreenEvent(ScreenBase poppedScreen)` | Delegate type for `OnPopScreen`. |
| `public delegate void OnControllerDisconnectedEvent()` | Delegate type for `OnControllerDisconnected`. |
| `public delegate bool OnPlatformTextRequestedDelegate(string initialText, string descriptionText, int maxLength, int keyboardTypeEnum)` | Delegate type for `PlatformTextRequested`. |

### Debug and console commands

| Member | What it is for |
| --- | --- |
| `static void SetScreenDebugInformationEnabled(bool isEnabled)` | Toggles the UI debug overlay. The tool for diagnosing layer order and hit-test problems. |
| `static string ClearSiegeMachineSelection(List<string> strings)` | Console command: clears the siege machine selection. |
| `static string CopyCustomBattle(List<string> strings)` | Console command: copies the custom battle layout. |
| `static string ApplyCustomBattleLayout(List<string> strings)` | Console command: applies the custom battle layout. |

## Examples

### Example 1: Open, replace and close screens

Mutually exclusive menus replace; nested sub-screens push.

```csharp
using TaleWorlds.ScreenSystem;

public class MyMenuRouter
{
    // Menu to menu: replace the top, do not deepen the stack
    public void OpenSettings()
    {
        ScreenManager.ReplaceTopScreen(new MySettingsScreen());
    }

    // A sub-screen opened from inside settings: push, so Back returns here
    public void OpenSettingsSubPage()
    {
        if (!ScreenManager.ScreenTypeExistsAtList(new MySettingsSubScreen()))
        {
            ScreenManager.PushScreen(new MySettingsSubScreen());
        }
    }

    public void Close()
    {
        ScreenManager.PopScreen();
    }

    public string CurrentScreenName()
    {
        ScreenBase top = ScreenManager.TopScreen;
        return top == null ? "none" : top.GetType().Name;
    }
}
```

### Example 2: A global HUD layer

`AddGlobalLayer` takes a `GlobalLayer`, not a `ScreenLayer`. The wrapper below is the reader's own type; `Layer` has a protected setter, so a subclass is the way to fill it.

```csharp
using TaleWorlds.Engine.GauntletUI;
using TaleWorlds.ScreenSystem;

public class MyGlobalLayer : GlobalLayer
{
    public MyGlobalLayer(ScreenLayer layer)
    {
        Layer = layer;
    }
}

public class MyHudInstaller
{
    private MyGlobalLayer _hud;

    public void Install()
    {
        if (_hud != null)
        {
            return;
        }

        GauntletLayer layer = new GauntletLayer("GlobalHudLayer", 1000, false);
        _hud = new MyGlobalLayer(layer);
        ScreenManager.AddGlobalLayer(_hud, true);
    }

    public void Uninstall()
    {
        if (_hud == null)
        {
            return;
        }

        ScreenManager.RemoveGlobalLayer(_hud);
        _hud = null;
    }
}
```

### Example 3: React to navigation, and let go when the screen dies

Static events survive the screen that subscribed to them, so `OnFinalize` is where the subscription ends.

```csharp
using TaleWorlds.ScreenSystem;

public class MyScreenTitleScreen : ScreenBase
{
    private string _currentTitle = "";

    public string CurrentTitle
    {
        get { return _currentTitle; }
    }

    protected override void OnInitialize()
    {
        base.OnInitialize();
        ScreenManager.OnPushScreen += HandlePush;
    }

    protected override void OnFinalize()
    {
        base.OnFinalize();
        ScreenManager.OnPushScreen -= HandlePush;
    }

    private void HandlePush(ScreenBase pushed)
    {
        _currentTitle = pushed.GetType().Name;
    }
}
```

### Example 4: Gate on focus and hit testing

The two queries that keep custom layers from stealing each other's input.

```csharp
using TaleWorlds.ScreenSystem;

public class MyFocusProbe
{
    public bool CanReactToKeyboard(ScreenLayer layer)
    {
        // Compare against the manager's answer rather than assuming
        return ScreenManager.FocusedLayer == layer && layer.IsFocusedOnInput();
    }

    public bool IsMouseOnTop(ScreenLayer layer)
    {
        return ScreenManager.FirstHitLayer == layer;
    }

    public string DescribeDevice()
    {
        if (ScreenManager.IsControllerActive())
        {
            return "controller";
        }

        return ScreenManager.IsMouseCursorHidden() ? "keyboard" : "mouse";
    }
}
```

## Risks and Boundaries

- **Pushing from a frame callback exhausts the stack.** One screen per frame; the stack is gone in seconds. Only user input or a state transition should change the stack.
- **Stack depth is player-visible.** Using `PushScreen` for mutually exclusive menus makes players press Back an extra time.
- **Static events leak across screens.** `OnPushScreen`, `OnPopScreen`, `OnControllerDisconnected`, `FocusGained` and `PlatformTextRequested` are static. Without an unsubscribe in `OnFinalize`, the next screen calls back into a destroyed object.
- **Focus is exclusive.** `TrySetFocus` called by two systems in one frame produces intermittently unresponsive input. Only the topmost screen should move focus.
- **`DisableScreenManagerTicks` is process-wide.** Setting it freezes every screen, not one. Never ship it enabled.
- **`Scale` is not a constant.** Hard-coded pixel layout breaks on high-resolution displays; read `Scale` and call `UpdateLayout()` after `OnScaleChange`.
- **`AddGlobalLayer` needs a `GlobalLayer`.** The parameter type is the wrapper, not the layer; a `GauntletLayer` will not compile there.
- **On-screen keyboards are platform-specific.** `OnPlatformScreenKeyboardRequested` and the `PlatformTextRequested` event are console concerns; a text field needs a desktop fallback.
- **`IsLayerBlockedAtPosition` is the click test.** Skipping it lets a layer behind a dialog still claim the mouse.
- **Main thread only.** All members run in the main-thread UI loop and touch native rendering and input code.

## Dependencies

- **Upstream / providers**
  - [ScreenBase](../ScreenBase) is the element this class stacks.
  - [ScreenLayer](../ScreenLayer) is what focus, ordering and hit testing operate on.
  - [Module](../../core/Module) decides the startup root through `SetInitialModuleScreenAsRootScreen`.
- **Peers / downstream**
  - [GauntletLayer](../../engine/GauntletLayer) is the layer most often registered as a global layer.
  - [ViewModel](../../core-extra/ViewModel) provides the data the screens bind.
  - [Game](../../core-extra/Game)'s `GameStateManager` coordinates with the screen stack during state changes.

## See Also

- ↑ Parent: [gui index](../)
- ↔ Related: [ScreenBase](../ScreenBase) · [ScreenLayer](../ScreenLayer) · [GauntletLayer](../../engine/GauntletLayer) · [ViewModel](../../core-extra/ViewModel) · [Game](../../core-extra/Game) · [Chinese twin](../../../../zh/api/gui/ScreenManager)