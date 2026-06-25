---
title: "InputContext"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `InputContext`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# InputContext

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `public class InputContext : IInputContext`
**Base:** `IInputContext`
**File:** `Bannerlord.Source/bin/TaleWorlds.InputSystem/TaleWorlds.InputSystem/InputContext.cs`

## Overview

`InputContext` lives in `TaleWorlds.InputSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.InputSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsKeysAllowed` | `public bool IsKeysAllowed { get; set; }` |
| `IsMouseButtonAllowed` | `public bool IsMouseButtonAllowed { get; set; }` |
| `IsMouseWheelAllowed` | `public bool IsMouseWheelAllowed { get; set; }` |
| `MouseOnMe` | `public bool MouseOnMe { get; set; }` |

## Key Methods

### GetPointerX
`public int GetPointerX()`

**Purpose:** Gets the current value of `pointer x`.

### GetPointerY
`public int GetPointerY()`

**Purpose:** Gets the current value of `pointer y`.

### GetPointerPosition
`public Vector2 GetPointerPosition()`

**Purpose:** Gets the current value of `pointer position`.

### GetPointerPositionVec2
`public Vec2 GetPointerPositionVec2()`

**Purpose:** Gets the current value of `pointer position vec2`.

### RegisterHotKeyCategory
`public void RegisterHotKeyCategory(GameKeyContext category)`

**Purpose:** Handles logic related to `register hot key category`.

### IsCategoryRegistered
`public bool IsCategoryRegistered(GameKeyContext category)`

**Purpose:** Handles logic related to `is category registered`.

### RegisterDownKeys
`public void RegisterDownKeys()`

**Purpose:** Handles logic related to `register down keys`.

### UnregisterReleasedKeys
`public void UnregisterReleasedKeys()`

**Purpose:** Handles logic related to `unregister released keys`.

### ResetLastDownKeys
`public void ResetLastDownKeys()`

**Purpose:** Resets `last down keys` to its initial state.

### IsHotKeyDown
`public bool IsHotKeyDown(string hotKey)`

**Purpose:** Handles logic related to `is hot key down`.

### IsGameKeyDown
`public bool IsGameKeyDown(int gameKey)`

**Purpose:** Handles logic related to `is game key down`.

### IsGameKeyDownImmediate
`public bool IsGameKeyDownImmediate(int gameKey)`

**Purpose:** Handles logic related to `is game key down immediate`.

### IsHotKeyPressed
`public bool IsHotKeyPressed(string hotKey)`

**Purpose:** Handles logic related to `is hot key pressed`.

### IsGameKeyPressed
`public bool IsGameKeyPressed(int gameKey)`

**Purpose:** Handles logic related to `is game key pressed`.

### IsHotKeyReleased
`public bool IsHotKeyReleased(string hotKey)`

**Purpose:** Handles logic related to `is hot key released`.

### IsGameKeyReleased
`public bool IsGameKeyReleased(int gameKey)`

**Purpose:** Handles logic related to `is game key released`.

### GetGameKeyState
`public float GetGameKeyState(int gameKey)`

**Purpose:** Gets the current value of `game key state`.

### IsHotKeyDoublePressed
`public bool IsHotKeyDoublePressed(string hotKey)`

**Purpose:** Handles logic related to `is hot key double pressed`.

### GetGameKeyAxis
`public float GetGameKeyAxis(GameAxisKey gameKey)`

**Purpose:** Gets the current value of `game key axis`.

### GetGameKeyAxis
`public float GetGameKeyAxis(string gameKey)`

**Purpose:** Gets the current value of `game key axis`.

### GetKeyState
`public Vec2 GetKeyState(InputKey key)`

**Purpose:** Gets the current value of `key state`.

### IsKeyDown
`public bool IsKeyDown(InputKey key)`

**Purpose:** Handles logic related to `is key down`.

### IsKeyPressed
`public bool IsKeyPressed(InputKey key)`

**Purpose:** Handles logic related to `is key pressed`.

### IsKeyReleased
`public bool IsKeyReleased(InputKey key)`

**Purpose:** Handles logic related to `is key released`.

### GetMouseMoveX
`public float GetMouseMoveX()`

**Purpose:** Gets the current value of `mouse move x`.

### GetMouseMoveY
`public float GetMouseMoveY()`

**Purpose:** Gets the current value of `mouse move y`.

### GetNormalizedMouseMoveX
`public float GetNormalizedMouseMoveX()`

**Purpose:** Gets the current value of `normalized mouse move x`.

### GetNormalizedMouseMoveY
`public float GetNormalizedMouseMoveY()`

**Purpose:** Gets the current value of `normalized mouse move y`.

### GetControllerRightStickState
`public Vec2 GetControllerRightStickState()`

**Purpose:** Gets the current value of `controller right stick state`.

### GetControllerLeftStickState
`public Vec2 GetControllerLeftStickState()`

**Purpose:** Gets the current value of `controller left stick state`.

### GetIsMouseActive
`public bool GetIsMouseActive()`

**Purpose:** Gets the current value of `is mouse active`.

### GetIsMouseDown
`public bool GetIsMouseDown()`

**Purpose:** Gets the current value of `is mouse down`.

### GetMousePositionPixel
`public Vec2 GetMousePositionPixel()`

**Purpose:** Gets the current value of `mouse position pixel`.

### GetDeltaMouseScroll
`public float GetDeltaMouseScroll()`

**Purpose:** Gets the current value of `delta mouse scroll`.

### GetIsControllerConnected
`public bool GetIsControllerConnected()`

**Purpose:** Gets the current value of `is controller connected`.

### GetMousePositionRanged
`public Vec2 GetMousePositionRanged()`

**Purpose:** Gets the current value of `mouse position ranged`.

### GetMouseSensitivity
`public float GetMouseSensitivity()`

**Purpose:** Gets the current value of `mouse sensitivity`.

### IsControlDown
`public bool IsControlDown()`

**Purpose:** Handles logic related to `is control down`.

### IsShiftDown
`public bool IsShiftDown()`

**Purpose:** Handles logic related to `is shift down`.

### IsAltDown
`public bool IsAltDown()`

**Purpose:** Handles logic related to `is alt down`.

### GetClickKeys
`public InputKey GetClickKeys()`

**Purpose:** Gets the current value of `click keys`.

## Usage Example

```csharp
var value = new InputContext();
value.GetPointerX();
```

## See Also

- [Complete Class Catalog](../catalog)