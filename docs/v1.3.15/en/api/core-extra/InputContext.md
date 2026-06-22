<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InputContext`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InputContext

**Namespace:** TaleWorlds.InputSystem  
**Module:** TaleWorlds.InputSystem  
**Type:** class (implements `IInputContext`)  
**File:** `bannerlord-1.3.15/TaleWorlds.InputSystem/InputContext.cs`

`InputContext` is how mods read keyboard/mouse/gamepad input — querying whether keys are down/just-pressed/just-released, mouse movement deltas and scroll, controller sticks, etc. Each mission (`Mission`) has its own `InputContext`.

## Overview

Mods obtain the current input context in a `MissionBehavior` via `Mission.Current.InputContext`, then query custom hotkeys (`GameKeyContext`) or raw `InputKey`s. Register a custom key category with `RegisterHotKeyCategory`, then query with `IsGameKeyDown/Pressed/Released(gameKey)` (an int ID) or `IsHotKeyDown/Pressed/Released(hotKeyName)`.

## Main properties

| Name | Type | Description |
|------|------|-------------|
| IsKeysAllowed | bool | Whether keyboard input is allowed (get/set) |
| IsMouseButtonAllowed | bool | Whether mouse buttons are allowed (get/set) |
| IsMouseWheelAllowed | bool | Whether the mouse wheel is allowed (get/set) |
| IsControllerAllowed | bool | Whether the controller is allowed (get-only) |
| MouseOnMe | bool | Whether the mouse is over the current UI (get/set) |

## Main methods

### Hotkeys / game keys

```csharp
public void RegisterHotKeyCategory(GameKeyContext category)
public bool IsCategoryRegistered(GameKeyContext category)

public bool IsGameKeyDown(int gameKey)
public bool IsGameKeyDownImmediate(int gameKey)
public bool IsGameKeyPressed(int gameKey)
public bool IsGameKeyReleased(int gameKey)
public float GetGameKeyState(int gameKey)
public float GetGameKeyAxis(GameAxisKey gameKey)
public float GetGameKeyAxis(string gameKey)

public bool IsHotKeyDown(string hotKey)
public bool IsHotKeyPressed(string hotKey)
public bool IsHotKeyReleased(string hotKey)
public bool IsHotKeyDoublePressed(string hotKey)
```

### Raw keys / mouse / controller

```csharp
public bool IsKeyDown(InputKey key)
public bool IsKeyPressed(InputKey key)
public bool IsKeyReleased(InputKey key)
public Vec2 GetKeyState(InputKey key)

public int GetPointerX();
public int GetPointerY();
public Vec2 GetPointerPositionVec2();

public float GetMouseMoveX();
public float GetMouseMoveY();
public float GetNormalizedMouseMoveX();
public float GetNormalizedMouseMoveY();
public float GetDeltaMouseScroll();
public Vec2 GetMousePositionPixel();
public Vec2 GetMousePositionRanged();
public bool GetIsMouseActive();
public bool GetIsMouseDown();
public float GetMouseSensitivity();

public Vec2 GetControllerRightStickState();
public Vec2 GetControllerLeftStickState();
public bool GetIsControllerConnected();

public bool IsControlDown();
public bool IsShiftDown();
public bool IsAltDown();
public InputKey[] GetClickKeys();
```

`IsGameKeyDown` means currently held; `IsGameKeyPressed` means pressed this frame (edge-triggered). The `Immediate` variant skips edge buffering.

## Usage example

```csharp
// Read custom keys in a MissionBehavior
public class MyMissionBehavior : MissionBehavior
{
    public override MissionBehaviorType BehaviorType => MissionBehaviorType.Other;

    public override void OnMissionBehaviourUpdate(float dt)
    {
        InputContext input = Mission.Current.InputContext;

        // Custom hotkey (register the category somewhere first)
        if (input.IsGameKeyPressed(MyKeys.ToggleMenu))  // MyKeys.ToggleMenu is an int ID
        {
            // toggle menu
        }

        // Raw keys
        if (input.IsKeyDown(InputKey.LeftMouseButton))
        {
            // left mouse button held
        }

        // Modifiers
        if (input.IsControlDown() && input.IsKeyPressed(InputKey.K))
        {
            // Ctrl+K
        }
    }
}
```

## See also

- [Mission](../mission/Mission.md)
- [GameEntity](../engine/GameEntity.md)
- [MBCommon](./MBCommon.md)
