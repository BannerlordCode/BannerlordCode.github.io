---
title: "InputContext"
description: "Auto-generated class reference for InputContext."
---
# InputContext

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `public class InputContext : IInputContext `
**Base:** IInputContext
**Source:** TaleWorlds.InputSystem/InputContext.cs

## Overview

Auto-generated stub for `InputContext`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### GetPointerX
`public int GetPointerX()`

### GetPointerY
`public int GetPointerY()`

### GetPointerPosition
`public Vector2 GetPointerPosition()`

### GetPointerPositionVec2
`public Vec2 GetPointerPositionVec2()`

### RegisterHotKeyCategory
`public void RegisterHotKeyCategory(GameKeyContext category)`

### IsCategoryRegistered
`public bool IsCategoryRegistered(GameKeyContext category)`

### RegisterDownKeys
`public void RegisterDownKeys()`

### UnregisterReleasedKeys
`public void UnregisterReleasedKeys()`

### ResetLastDownKeys
`public void ResetLastDownKeys()`

### IsHotKeyDown
`public bool IsHotKeyDown(string hotKey)`

### IsGameKeyDown
`public bool IsGameKeyDown(int gameKey)`

### IsGameKeyDownImmediate
`public bool IsGameKeyDownImmediate(int gameKey)`

### IsHotKeyPressed
`public bool IsHotKeyPressed(string hotKey)`

### IsGameKeyPressed
`public bool IsGameKeyPressed(int gameKey)`

### IsHotKeyReleased
`public bool IsHotKeyReleased(string hotKey)`

### IsGameKeyReleased
`public bool IsGameKeyReleased(int gameKey)`

### GetGameKeyState
`public float GetGameKeyState(int gameKey)`

### IsHotKeyDoublePressed
`public bool IsHotKeyDoublePressed(string hotKey)`

### GetGameKeyAxis
`public float GetGameKeyAxis(GameAxisKey gameKey)`

### GetKeyState
`public Vec2 GetKeyState(InputKey key)`

### IsMouseButton
`protected bool IsMouseButton(InputKey key)`

### IsKeyDown
`public bool IsKeyDown(InputKey key)`

### IsKeyPressed
`public bool IsKeyPressed(InputKey key)`

### IsKeyReleased
`public bool IsKeyReleased(InputKey key)`

### GetMouseMoveX
`public float GetMouseMoveX()`

### GetMouseMoveY
`public float GetMouseMoveY()`

### GetNormalizedMouseMoveX
`public float GetNormalizedMouseMoveX()`

### GetNormalizedMouseMoveY
`public float GetNormalizedMouseMoveY()`

### GetControllerRightStickState
`public Vec2 GetControllerRightStickState()`

### GetControllerLeftStickState
`public Vec2 GetControllerLeftStickState()`

### GetIsMouseActive
`public bool GetIsMouseActive()`

### GetIsMouseDown
`public bool GetIsMouseDown()`

### GetMousePositionPixel
`public Vec2 GetMousePositionPixel()`

### GetDeltaMouseScroll
`public float GetDeltaMouseScroll()`

### GetIsControllerConnected
`public bool GetIsControllerConnected()`

### GetMousePositionRanged
`public Vec2 GetMousePositionRanged()`

### GetMouseSensitivity
`public float GetMouseSensitivity()`

### IsControlDown
`public bool IsControlDown()`

### IsShiftDown
`public bool IsShiftDown()`

### IsAltDown
`public bool IsAltDown()`

### GetClickKeys
`public InputKey[] GetClickKeys()`

## See Also

- [Section index](../)
