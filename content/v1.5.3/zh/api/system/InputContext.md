---
title: "InputContext"
description: "InputContext 的自动生成类参考。"
---
# InputContext

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `public class InputContext : IInputContext `
**Base:** IInputContext
**Source:** TaleWorlds.InputSystem/InputContext.cs

## 概述

`InputContext` 的自动生成类参考页面。声明来自 `TaleWorlds.InputSystem/InputContext.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetPointerX
`public int GetPointerX() `

### GetPointerY
`public int GetPointerY() `

### GetPointerPosition
`public Vector2 GetPointerPosition() `

### GetPointerPositionVec2
`public Vec2 GetPointerPositionVec2() `

### RegisterHotKeyCategory
`public void RegisterHotKeyCategory(GameKeyContext category) `

### IsCategoryRegistered
`public bool IsCategoryRegistered(GameKeyContext category) `

### RegisterDownKeys
`public void RegisterDownKeys() `

### UnregisterReleasedKeys
`public void UnregisterReleasedKeys() `

### ResetLastDownKeys
`public void ResetLastDownKeys() `

### IsHotKeyDown
`public bool IsHotKeyDown(string hotKey) `

### IsGameKeyDown
`public bool IsGameKeyDown(int gameKey) `

### IsGameKeyDownImmediate
`public bool IsGameKeyDownImmediate(int gameKey) `

### IsHotKeyPressed
`public bool IsHotKeyPressed(string hotKey) `

### IsGameKeyPressed
`public bool IsGameKeyPressed(int gameKey) `

### IsHotKeyReleased
`public bool IsHotKeyReleased(string hotKey) `

### IsGameKeyReleased
`public bool IsGameKeyReleased(int gameKey) `

### GetGameKeyState
`public float GetGameKeyState(int gameKey) `

### IsHotKeyDoublePressed
`public bool IsHotKeyDoublePressed(string hotKey) `

### GetGameKeyAxis
`public float GetGameKeyAxis(GameAxisKey gameKey) `
`public float GetGameKeyAxis(string gameKey) `

### GetKeyState
`public Vec2 GetKeyState(InputKey key) `

### IsMouseButton
`protected bool IsMouseButton(InputKey key) `

### IsKeyDown
`public bool IsKeyDown(InputKey key) `

### IsKeyPressed
`public bool IsKeyPressed(InputKey key) `

### IsKeyReleased
`public bool IsKeyReleased(InputKey key) `

### GetMouseMoveX
`public float GetMouseMoveX() `

### GetMouseMoveY
`public float GetMouseMoveY() `

### GetNormalizedMouseMoveX
`public float GetNormalizedMouseMoveX() `

### GetNormalizedMouseMoveY
`public float GetNormalizedMouseMoveY() `

### GetControllerRightStickState
`public Vec2 GetControllerRightStickState() `

### GetControllerLeftStickState
`public Vec2 GetControllerLeftStickState() `

### GetIsMouseActive
`public bool GetIsMouseActive() `

### GetIsMouseDown
`public bool GetIsMouseDown() `

### GetMousePositionPixel
`public Vec2 GetMousePositionPixel() `

### GetDeltaMouseScroll
`public float GetDeltaMouseScroll() `

### GetIsControllerConnected
`public bool GetIsControllerConnected() `

### GetMousePositionRanged
`public Vec2 GetMousePositionRanged() `

### GetMouseSensitivity
`public float GetMouseSensitivity() `

### IsControlDown
`public bool IsControlDown() `

### IsShiftDown
`public bool IsShiftDown() `

### IsAltDown
`public bool IsAltDown() `

### GetClickKeys
`public InputKey[] GetClickKeys() `

## 参见

- [本区域目录](../)
- [API 参考](../../)
