---
title: "EmptyInputContext"
description: "EmptyInputContext：TaleWorlds.InputSystem 的 public 类，继承 IInputContext；公开成员 30 个（方法 30、属性 0、字段 0）。canonical 桶 system。源文件 TaleWorlds.InputSystem/EmptyInputContext.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EmptyInputContext

**Namespace:** `TaleWorlds.InputSystem`
**Module:** `TaleWorlds.InputSystem`
**Type:** `public sealed class EmptyInputContext : IInputContext`
**File:** `TaleWorlds.InputSystem/EmptyInputContext.cs`
**Bucket:** `system` (rule:TaleWorlds.InputSystem)

## 概述

EmptyInputContext 位于 TaleWorlds.InputSystem 模块，源文件 TaleWorlds.InputSystem/EmptyInputContext.cs。它是一个 public 类（sealed），实现/继承 IInputContext，继承链为 EmptyInputContext → IInputContext。public/protected 成员共 30 个：30 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EmptyInputContext 落在 canonical 桶 `system`（命中规则 `rule:TaleWorlds.InputSystem`），命名空间 `TaleWorlds.InputSystem`，继承链 EmptyInputContext → IInputContext。成员构成以方法为主（方法 30/30，属性 0/30），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.InputSystem/EmptyInputContext.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetPointerX` | `public int GetPointerX()` | 方法 |
| `GetPointerY` | `public int GetPointerY()` | 方法 |
| `GetPointerPosition` | `public Vector2 GetPointerPosition()` | 方法 |
| `IsGameKeyDown` | `public bool IsGameKeyDown(int gameKey)` | 方法 |
| `IsGameKeyDownImmediate` | `public bool IsGameKeyDownImmediate(int gameKey)` | 方法 |
| `IsGameKeyPressed` | `public bool IsGameKeyPressed(int gameKey)` | 方法 |
| `IsGameKeyReleased` | `public bool IsGameKeyReleased(int gameKey)` | 方法 |
| `GetGameKeyAxis` | `public float GetGameKeyAxis(string gameAxisKey)` | 方法 |
| `IsHotKeyDown` | `public bool IsHotKeyDown(string hotKey)` | 方法 |
| `IsHotKeyReleased` | `public bool IsHotKeyReleased(string hotKey)` | 方法 |
| `IsHotKeyPressed` | `public bool IsHotKeyPressed(string hotKey)` | 方法 |
| `IsHotKeyDoublePressed` | `public bool IsHotKeyDoublePressed(string hotKey)` | 方法 |
| `GetKeyState` | `public Vec2 GetKeyState(InputKey key)` | 方法 |
| `IsKeyDown` | `public bool IsKeyDown(InputKey key)` | 方法 |
| `IsKeyPressed` | `public bool IsKeyPressed(InputKey key)` | 方法 |
| `IsKeyReleased` | `public bool IsKeyReleased(InputKey key)` | 方法 |
| `GetMouseMoveX` | `public float GetMouseMoveX()` | 方法 |
| `GetMouseMoveY` | `public float GetMouseMoveY()` | 方法 |
| `GetIsMouseActive` | `public bool GetIsMouseActive()` | 方法 |
| `GetMousePositionPixel` | `public Vec2 GetMousePositionPixel()` | 方法 |
| `GetDeltaMouseScroll` | `public float GetDeltaMouseScroll()` | 方法 |
| `GetIsControllerConnected` | `public bool GetIsControllerConnected()` | 方法 |
| `GetMousePositionRanged` | `public Vec2 GetMousePositionRanged()` | 方法 |
| `GetMouseSensitivity` | `public float GetMouseSensitivity()` | 方法 |
| `IsControlDown` | `public bool IsControlDown()` | 方法 |
| `IsShiftDown` | `public bool IsShiftDown()` | 方法 |
| `IsAltDown` | `public bool IsAltDown()` | 方法 |
| `GetControllerRightStickState` | `public Vec2 GetControllerRightStickState()` | 方法 |
| `GetControllerLeftStickState` | `public Vec2 GetControllerLeftStickState()` | 方法 |
| `InputKey[]GetClickKeys` | `public InputKey[]GetClickKeys()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 IInputContext](../IInputContext/)
- [同命名空间 GameAxisKey](../GameAxisKey/)
- [同命名空间 GameKey](../GameKey/)
- [同命名空间 GameKeyContext](../GameKeyContext/)
- [同命名空间 HotKey](../HotKey/)
