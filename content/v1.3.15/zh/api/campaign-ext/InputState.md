---
title: "InputState"
description: "InputState 的自动生成类参考。"
---
# InputState

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `public class InputState`
**Base:** 无
**File:** `TaleWorlds.InputSystem/InputState.cs`

## 概述

`InputState` 位于 `TaleWorlds.InputSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.InputSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `NativeResolution` | `public Vec2 NativeResolution { get; set; }` |
| `MousePositionRanged` | `public Vec2 MousePositionRanged { get; set; }` |
| `OldMousePositionRanged` | `public Vec2 OldMousePositionRanged { get; }` |
| `MousePositionChanged` | `public bool MousePositionChanged { get; }` |
| `MousePositionPixel` | `public Vec2 MousePositionPixel { get; set; }` |
| `OldMousePositionPixel` | `public Vec2 OldMousePositionPixel { get; }` |
| `MouseScrollValue` | `public float MouseScrollValue { get; }` |
| `MouseScrollChanged` | `public bool MouseScrollChanged { get; }` |

## 主要方法

### UpdateMousePosition
`public bool UpdateMousePosition(float mousePositionX, float mousePositionY)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 mouse position 的最新表示。

```csharp
// 先通过子系统 API 拿到 InputState 实例
InputState inputState = ...;
var result = inputState.UpdateMousePosition(0, 0);
```

### UpdateMouseScroll
`public bool UpdateMouseScroll(float mouseScrollValue)`

**用途 / Purpose:** **用途 / Purpose:** 重新计算并更新 mouse scroll 的最新表示。

```csharp
// 先通过子系统 API 拿到 InputState 实例
InputState inputState = ...;
var result = inputState.UpdateMouseScroll(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
InputState inputState = ...;
inputState.UpdateMousePosition(0, 0);
```

## 参见

- [本区域目录](../)