---
title: "IInputContext"
description: "IInputContext：TaleWorlds.InputSystem 的 public 接口；公开成员 30 个（方法 30、属性 0、字段 0）。源文件 TaleWorlds.InputSystem/IInputContext.cs。"
---
# IInputContext

**Namespace:** `TaleWorlds.InputSystem`
**Module:** `TaleWorlds.InputSystem`
**Type:** `public interface IInputContext`
**File:** `TaleWorlds.InputSystem/IInputContext.cs`

## 概述

IInputContext 位于 TaleWorlds.InputSystem 模块，源文件 TaleWorlds.InputSystem/IInputContext.cs。它是一个 public 接口，继承链为 IInputContext。public/protected 成员共 30 个：30 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IInputContext 是 TaleWorlds.InputSystem 的顶层类型，命名空间与模块目录一致，继承链 IInputContext。成员构成以方法为主（方法 30/30，属性 0/30），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.InputSystem/IInputContext.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetPointerX` | `int GetPointerX();` | 方法 |
| `GetPointerY` | `int GetPointerY();` | 方法 |
| `GetPointerPosition` | `Vector2 GetPointerPosition();` | 方法 |
| `IsGameKeyDown` | `bool IsGameKeyDown(int gameKey);` | 方法 |
| `IsGameKeyDownImmediate` | `bool IsGameKeyDownImmediate(int gameKey);` | 方法 |
| `IsGameKeyReleased` | `bool IsGameKeyReleased(int gameKey);` | 方法 |
| `IsGameKeyPressed` | `bool IsGameKeyPressed(int gameKey);` | 方法 |
| `GetGameKeyAxis` | `float GetGameKeyAxis(string gameKey);` | 方法 |
| `IsHotKeyDown` | `bool IsHotKeyDown(string gameKey);` | 方法 |
| `IsHotKeyReleased` | `bool IsHotKeyReleased(string gameKey);` | 方法 |
| `IsHotKeyPressed` | `bool IsHotKeyPressed(string gameKey);` | 方法 |
| `IsHotKeyDoublePressed` | `bool IsHotKeyDoublePressed(string gameKey);` | 方法 |
| `IsKeyDown` | `bool IsKeyDown(InputKey key);` | 方法 |
| `IsKeyPressed` | `bool IsKeyPressed(InputKey key);` | 方法 |
| `IsKeyReleased` | `bool IsKeyReleased(InputKey key);` | 方法 |
| `GetKeyState` | `Vec2 GetKeyState(InputKey key);` | 方法 |
| `GetMouseMoveX` | `float GetMouseMoveX();` | 方法 |
| `GetMouseMoveY` | `float GetMouseMoveY();` | 方法 |
| `GetControllerRightStickState` | `Vec2 GetControllerRightStickState();` | 方法 |
| `GetControllerLeftStickState` | `Vec2 GetControllerLeftStickState();` | 方法 |
| `GetDeltaMouseScroll` | `float GetDeltaMouseScroll();` | 方法 |
| `GetIsControllerConnected` | `bool GetIsControllerConnected();` | 方法 |
| `GetIsMouseActive` | `bool GetIsMouseActive();` | 方法 |
| `GetMousePositionRanged` | `Vec2 GetMousePositionRanged();` | 方法 |
| `GetMousePositionPixel` | `Vec2 GetMousePositionPixel();` | 方法 |
| `GetMouseSensitivity` | `float GetMouseSensitivity();` | 方法 |
| `IsControlDown` | `bool IsControlDown();` | 方法 |
| `IsShiftDown` | `bool IsShiftDown();` | 方法 |
| `IsAltDown` | `bool IsAltDown();` | 方法 |
| `InputKey[]GetClickKeys` | `InputKey[]GetClickKeys();` | 方法 |

## 参见

- [↑ inputsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 EmptyInputContext](../EmptyInputContext)
- [同命名空间 GameAxisKey](../GameAxisKey)
- [同命名空间 GameKey](../GameKey)
- [同命名空间 GameKeyContext](../GameKeyContext)
