---
title: "InputContext"
description: "InputContext：TaleWorlds.InputSystem 的 public 类，继承 IInputContext；公开成员 48 个（方法 42、属性 5、字段 0）。canonical 桶 system。源文件 TaleWorlds.InputSystem/InputContext.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# InputContext

**Namespace:** `TaleWorlds.InputSystem`
**Module:** `TaleWorlds.InputSystem`
**Type:** `public class InputContext : IInputContext`
**File:** `TaleWorlds.InputSystem/InputContext.cs`
**Bucket:** `system` (rule:TaleWorlds.InputSystem)

## 概述

InputContext 位于 TaleWorlds.InputSystem 模块，源文件 TaleWorlds.InputSystem/InputContext.cs。它是一个 public 类，实现/继承 IInputContext，继承链为 InputContext → IInputContext。public/protected 成员共 48 个：42 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：InputContext 落在 canonical 桶 `system`（命中规则 `rule:TaleWorlds.InputSystem`），命名空间 `TaleWorlds.InputSystem`，继承链 InputContext → IInputContext。成员构成以方法为主（方法 42/48，属性 5/48），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.InputSystem/InputContext.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsKeysAllowed` | `public bool IsKeysAllowed` | 属性 |
| `IsMouseButtonAllowed` | `public bool IsMouseButtonAllowed` | 属性 |
| `IsMouseWheelAllowed` | `public bool IsMouseWheelAllowed` | 属性 |
| `IsControllerAllowed` | `public bool IsControllerAllowed` | 属性 |
| `MouseOnMe` | `public bool MouseOnMe` | 属性 |
| `InputContext` | `public InputContext()` | 构造函数 |
| `GetPointerX` | `public int GetPointerX()` | 方法 |
| `GetPointerY` | `public int GetPointerY()` | 方法 |
| `GetPointerPosition` | `public Vector2 GetPointerPosition()` | 方法 |
| `GetPointerPositionVec2` | `public Vec2 GetPointerPositionVec2()` | 方法 |
| `RegisterHotKeyCategory` | `public void RegisterHotKeyCategory(GameKeyContext category)` | 方法 |
| `IsCategoryRegistered` | `public bool IsCategoryRegistered(GameKeyContext category)` | 方法 |
| `RegisterDownKeys` | `public void RegisterDownKeys()` | 方法 |
| `UnregisterReleasedKeys` | `public void UnregisterReleasedKeys()` | 方法 |
| `ResetLastDownKeys` | `public void ResetLastDownKeys()` | 方法 |
| `IsHotKeyDown` | `public bool IsHotKeyDown(string hotKey)` | 方法 |
| `IsGameKeyDown` | `public bool IsGameKeyDown(int gameKey)` | 方法 |
| `IsGameKeyDownImmediate` | `public bool IsGameKeyDownImmediate(int gameKey)` | 方法 |
| `IsHotKeyPressed` | `public bool IsHotKeyPressed(string hotKey)` | 方法 |
| `IsGameKeyPressed` | `public bool IsGameKeyPressed(int gameKey)` | 方法 |
| `IsHotKeyReleased` | `public bool IsHotKeyReleased(string hotKey)` | 方法 |
| `IsGameKeyReleased` | `public bool IsGameKeyReleased(int gameKey)` | 方法 |
| `GetGameKeyState` | `public float GetGameKeyState(int gameKey)` | 方法 |
| `IsHotKeyDoublePressed` | `public bool IsHotKeyDoublePressed(string hotKey)` | 方法 |
| `GetGameKeyAxis` | `public float GetGameKeyAxis(GameAxisKey gameKey)` | 方法 |
| `GetGameKeyAxis` | `public float GetGameKeyAxis(string gameKey)` | 方法 |
| `GetKeyState` | `public Vec2 GetKeyState(InputKey key)` | 方法 |
| `IsMouseButton` | `protected bool IsMouseButton(InputKey key)` | 方法 |
| `IsKeyDown` | `public bool IsKeyDown(InputKey key)` | 方法 |
| `IsKeyPressed` | `public bool IsKeyPressed(InputKey key)` | 方法 |
| `IsKeyReleased` | `public bool IsKeyReleased(InputKey key)` | 方法 |
| `GetMouseMoveX` | `public float GetMouseMoveX()` | 方法 |
| `GetMouseMoveY` | `public float GetMouseMoveY()` | 方法 |
| `GetNormalizedMouseMoveX` | `public float GetNormalizedMouseMoveX()` | 方法 |
| `GetNormalizedMouseMoveY` | `public float GetNormalizedMouseMoveY()` | 方法 |
| `GetControllerRightStickState` | `public Vec2 GetControllerRightStickState()` | 方法 |
| `GetControllerLeftStickState` | `public Vec2 GetControllerLeftStickState()` | 方法 |
| `GetIsMouseActive` | `public bool GetIsMouseActive()` | 方法 |
| `GetIsMouseDown` | `public bool GetIsMouseDown()` | 方法 |
| `GetMousePositionPixel` | `public Vec2 GetMousePositionPixel()` | 方法 |
| `GetDeltaMouseScroll` | `public float GetDeltaMouseScroll()` | 方法 |
| `GetIsControllerConnected` | `public bool GetIsControllerConnected()` | 方法 |
| `GetMousePositionRanged` | `public Vec2 GetMousePositionRanged()` | 方法 |
| `GetMouseSensitivity` | `public float GetMouseSensitivity()` | 方法 |
| `IsControlDown` | `public bool IsControlDown()` | 方法 |
| `IsShiftDown` | `public bool IsShiftDown()` | 方法 |
| `IsAltDown` | `public bool IsAltDown()` | 方法 |
| `InputKey[]GetClickKeys` | `public InputKey[]GetClickKeys()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 IInputContext](../IInputContext/)
- [同命名空间 EmptyInputContext](../EmptyInputContext/)
- [同命名空间 GameAxisKey](../GameAxisKey/)
- [同命名空间 GameKey](../GameKey/)
- [同命名空间 GameKeyContext](../GameKeyContext/)
