---
title: "InputState"
description: "InputState：TaleWorlds.InputSystem 的 public 类；公开成员 11 个（方法 2、属性 8、字段 0）。源文件 TaleWorlds.InputSystem/InputState.cs。"
---
# InputState

**Namespace:** `TaleWorlds.InputSystem`
**Module:** `TaleWorlds.InputSystem`
**Type:** `public class InputState`
**File:** `TaleWorlds.InputSystem/InputState.cs`

## 概述

InputState 位于 TaleWorlds.InputSystem 模块，源文件 TaleWorlds.InputSystem/InputState.cs。它是一个 public 类，继承链为 InputState。public/protected 成员共 11 个：2 方法、8 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：InputState 是 TaleWorlds.InputSystem 的顶层类型，命名空间与模块目录一致，继承链 InputState。成员构成以属性为主（属性 8/11，方法 2/11），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.InputSystem/InputState.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NativeResolution` | `public Vec2 NativeResolution` | 属性 |
| `MousePositionRanged` | `public Vec2 MousePositionRanged` | 属性 |
| `OldMousePositionRanged` | `public Vec2 OldMousePositionRanged` | 属性 |
| `MousePositionChanged` | `public bool MousePositionChanged` | 属性 |
| `MousePositionPixel` | `public Vec2 MousePositionPixel` | 属性 |
| `OldMousePositionPixel` | `public Vec2 OldMousePositionPixel` | 属性 |
| `MouseScrollValue` | `public float MouseScrollValue` | 属性 |
| `MouseScrollChanged` | `public bool MouseScrollChanged` | 属性 |
| `InputState` | `public InputState()` | 构造函数 |
| `UpdateMousePosition` | `public bool UpdateMousePosition(float mousePositionX, float mousePositionY)` | 方法 |
| `UpdateMouseScroll` | `public bool UpdateMouseScroll(float mouseScrollValue)` | 方法 |

## 参见

- [↑ inputsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 EmptyInputContext](../EmptyInputContext)
- [同命名空间 GameAxisKey](../GameAxisKey)
- [同命名空间 GameKey](../GameKey)
- [同命名空间 GameKeyContext](../GameKeyContext)
