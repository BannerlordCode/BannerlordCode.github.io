---
title: "EmptyInputContext"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EmptyInputContext`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EmptyInputContext

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `public sealed class EmptyInputContext : IInputContext`
**Base:** `IInputContext`
**File:** `Bannerlord.Source/bin/TaleWorlds.InputSystem/TaleWorlds.InputSystem/EmptyInputContext.cs`

## Overview

`EmptyInputContext` lives in `TaleWorlds.InputSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.InputSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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

### IsGameKeyDown
`public bool IsGameKeyDown(int gameKey)`

**Purpose:** Handles logic related to `is game key down`.

### IsGameKeyDownImmediate
`public bool IsGameKeyDownImmediate(int gameKey)`

**Purpose:** Handles logic related to `is game key down immediate`.

### IsGameKeyPressed
`public bool IsGameKeyPressed(int gameKey)`

**Purpose:** Handles logic related to `is game key pressed`.

### IsGameKeyReleased
`public bool IsGameKeyReleased(int gameKey)`

**Purpose:** Handles logic related to `is game key released`.

### GetGameKeyAxis
`public float GetGameKeyAxis(string gameAxisKey)`

**Purpose:** Gets the current value of `game key axis`.

### IsHotKeyDown
`public bool IsHotKeyDown(string hotKey)`

**Purpose:** Handles logic related to `is hot key down`.

### IsHotKeyReleased
`public bool IsHotKeyReleased(string hotKey)`

**Purpose:** Handles logic related to `is hot key released`.

### IsHotKeyPressed
`public bool IsHotKeyPressed(string hotKey)`

**Purpose:** Handles logic related to `is hot key pressed`.

### IsHotKeyDoublePressed
`public bool IsHotKeyDoublePressed(string hotKey)`

**Purpose:** Handles logic related to `is hot key double pressed`.

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

### GetIsMouseActive
`public bool GetIsMouseActive()`

**Purpose:** Gets the current value of `is mouse active`.

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

### GetControllerRightStickState
`public Vec2 GetControllerRightStickState()`

**Purpose:** Gets the current value of `controller right stick state`.

### GetControllerLeftStickState
`public Vec2 GetControllerLeftStickState()`

**Purpose:** Gets the current value of `controller left stick state`.

### GetClickKeys
`public InputKey GetClickKeys()`

**Purpose:** Gets the current value of `click keys`.

## Usage Example

```csharp
var value = new EmptyInputContext();
value.GetPointerX();
```

## See Also

- [Complete Class Catalog](../catalog)