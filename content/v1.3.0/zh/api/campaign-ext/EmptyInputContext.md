---
title: "EmptyInputContext"
description: "EmptyInputContext 的自动生成类参考。"
---
# EmptyInputContext

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `public sealed class EmptyInputContext : IInputContext`
**Base:** `IInputContext`
**File:** `TaleWorlds.InputSystem/EmptyInputContext.cs`

## 概述

`EmptyInputContext` 位于 `TaleWorlds.InputSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.InputSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetPointerX
`public int GetPointerX()`

**用途 / Purpose:** 读取并返回当前对象中 「pointer x」 的结果。

```csharp
// 先通过子系统 API 拿到 EmptyInputContext 实例
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.GetPointerX();
```

### GetPointerY
`public int GetPointerY()`

**用途 / Purpose:** 读取并返回当前对象中 「pointer y」 的结果。

```csharp
// 先通过子系统 API 拿到 EmptyInputContext 实例
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.GetPointerY();
```

### GetPointerPosition
`public Vector2 GetPointerPosition()`

**用途 / Purpose:** 读取并返回当前对象中 「pointer position」 的结果。

```csharp
// 先通过子系统 API 拿到 EmptyInputContext 实例
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.GetPointerPosition();
```

### IsGameKeyDown
`public bool IsGameKeyDown(int gameKey)`

**用途 / Purpose:** 判断当前对象是否处于 「game key down」 状态或条件。

```csharp
// 先通过子系统 API 拿到 EmptyInputContext 实例
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.IsGameKeyDown(0);
```

### IsGameKeyDownImmediate
`public bool IsGameKeyDownImmediate(int gameKey)`

**用途 / Purpose:** 判断当前对象是否处于 「game key down immediate」 状态或条件。

```csharp
// 先通过子系统 API 拿到 EmptyInputContext 实例
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.IsGameKeyDownImmediate(0);
```

### IsGameKeyPressed
`public bool IsGameKeyPressed(int gameKey)`

**用途 / Purpose:** 判断当前对象是否处于 「game key pressed」 状态或条件。

```csharp
// 先通过子系统 API 拿到 EmptyInputContext 实例
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.IsGameKeyPressed(0);
```

### IsGameKeyReleased
`public bool IsGameKeyReleased(int gameKey)`

**用途 / Purpose:** 判断当前对象是否处于 「game key released」 状态或条件。

```csharp
// 先通过子系统 API 拿到 EmptyInputContext 实例
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.IsGameKeyReleased(0);
```

### GetGameKeyAxis
`public float GetGameKeyAxis(string gameAxisKey)`

**用途 / Purpose:** 读取并返回当前对象中 「game key axis」 的结果。

```csharp
// 先通过子系统 API 拿到 EmptyInputContext 实例
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.GetGameKeyAxis("example");
```

### IsHotKeyDown
`public bool IsHotKeyDown(string hotKey)`

**用途 / Purpose:** 判断当前对象是否处于 「hot key down」 状态或条件。

```csharp
// 先通过子系统 API 拿到 EmptyInputContext 实例
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.IsHotKeyDown("example");
```

### IsHotKeyReleased
`public bool IsHotKeyReleased(string hotKey)`

**用途 / Purpose:** 判断当前对象是否处于 「hot key released」 状态或条件。

```csharp
// 先通过子系统 API 拿到 EmptyInputContext 实例
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.IsHotKeyReleased("example");
```

### IsHotKeyPressed
`public bool IsHotKeyPressed(string hotKey)`

**用途 / Purpose:** 判断当前对象是否处于 「hot key pressed」 状态或条件。

```csharp
// 先通过子系统 API 拿到 EmptyInputContext 实例
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.IsHotKeyPressed("example");
```

### IsHotKeyDoublePressed
`public bool IsHotKeyDoublePressed(string hotKey)`

**用途 / Purpose:** 判断当前对象是否处于 「hot key double pressed」 状态或条件。

```csharp
// 先通过子系统 API 拿到 EmptyInputContext 实例
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.IsHotKeyDoublePressed("example");
```

### GetKeyState
`public Vec2 GetKeyState(InputKey key)`

**用途 / Purpose:** 读取并返回当前对象中 「key state」 的结果。

```csharp
// 先通过子系统 API 拿到 EmptyInputContext 实例
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.GetKeyState(key);
```

### IsKeyDown
`public bool IsKeyDown(InputKey key)`

**用途 / Purpose:** 判断当前对象是否处于 「key down」 状态或条件。

```csharp
// 先通过子系统 API 拿到 EmptyInputContext 实例
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.IsKeyDown(key);
```

### IsKeyPressed
`public bool IsKeyPressed(InputKey key)`

**用途 / Purpose:** 判断当前对象是否处于 「key pressed」 状态或条件。

```csharp
// 先通过子系统 API 拿到 EmptyInputContext 实例
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.IsKeyPressed(key);
```

### IsKeyReleased
`public bool IsKeyReleased(InputKey key)`

**用途 / Purpose:** 判断当前对象是否处于 「key released」 状态或条件。

```csharp
// 先通过子系统 API 拿到 EmptyInputContext 实例
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.IsKeyReleased(key);
```

### GetMouseMoveX
`public float GetMouseMoveX()`

**用途 / Purpose:** 读取并返回当前对象中 「mouse move x」 的结果。

```csharp
// 先通过子系统 API 拿到 EmptyInputContext 实例
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.GetMouseMoveX();
```

### GetMouseMoveY
`public float GetMouseMoveY()`

**用途 / Purpose:** 读取并返回当前对象中 「mouse move y」 的结果。

```csharp
// 先通过子系统 API 拿到 EmptyInputContext 实例
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.GetMouseMoveY();
```

### GetIsMouseActive
`public bool GetIsMouseActive()`

**用途 / Purpose:** 读取并返回当前对象中 「is mouse active」 的结果。

```csharp
// 先通过子系统 API 拿到 EmptyInputContext 实例
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.GetIsMouseActive();
```

### GetMousePositionPixel
`public Vec2 GetMousePositionPixel()`

**用途 / Purpose:** 读取并返回当前对象中 「mouse position pixel」 的结果。

```csharp
// 先通过子系统 API 拿到 EmptyInputContext 实例
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.GetMousePositionPixel();
```

### GetDeltaMouseScroll
`public float GetDeltaMouseScroll()`

**用途 / Purpose:** 读取并返回当前对象中 「delta mouse scroll」 的结果。

```csharp
// 先通过子系统 API 拿到 EmptyInputContext 实例
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.GetDeltaMouseScroll();
```

### GetIsControllerConnected
`public bool GetIsControllerConnected()`

**用途 / Purpose:** 读取并返回当前对象中 「is controller connected」 的结果。

```csharp
// 先通过子系统 API 拿到 EmptyInputContext 实例
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.GetIsControllerConnected();
```

### GetMousePositionRanged
`public Vec2 GetMousePositionRanged()`

**用途 / Purpose:** 读取并返回当前对象中 「mouse position ranged」 的结果。

```csharp
// 先通过子系统 API 拿到 EmptyInputContext 实例
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.GetMousePositionRanged();
```

### GetMouseSensitivity
`public float GetMouseSensitivity()`

**用途 / Purpose:** 读取并返回当前对象中 「mouse sensitivity」 的结果。

```csharp
// 先通过子系统 API 拿到 EmptyInputContext 实例
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.GetMouseSensitivity();
```

### IsControlDown
`public bool IsControlDown()`

**用途 / Purpose:** 判断当前对象是否处于 「control down」 状态或条件。

```csharp
// 先通过子系统 API 拿到 EmptyInputContext 实例
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.IsControlDown();
```

### IsShiftDown
`public bool IsShiftDown()`

**用途 / Purpose:** 判断当前对象是否处于 「shift down」 状态或条件。

```csharp
// 先通过子系统 API 拿到 EmptyInputContext 实例
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.IsShiftDown();
```

### IsAltDown
`public bool IsAltDown()`

**用途 / Purpose:** 判断当前对象是否处于 「alt down」 状态或条件。

```csharp
// 先通过子系统 API 拿到 EmptyInputContext 实例
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.IsAltDown();
```

### GetControllerRightStickState
`public Vec2 GetControllerRightStickState()`

**用途 / Purpose:** 读取并返回当前对象中 「controller right stick state」 的结果。

```csharp
// 先通过子系统 API 拿到 EmptyInputContext 实例
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.GetControllerRightStickState();
```

### GetControllerLeftStickState
`public Vec2 GetControllerLeftStickState()`

**用途 / Purpose:** 读取并返回当前对象中 「controller left stick state」 的结果。

```csharp
// 先通过子系统 API 拿到 EmptyInputContext 实例
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.GetControllerLeftStickState();
```

### GetClickKeys
`public InputKey GetClickKeys()`

**用途 / Purpose:** 读取并返回当前对象中 「click keys」 的结果。

```csharp
// 先通过子系统 API 拿到 EmptyInputContext 实例
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.GetClickKeys();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
EmptyInputContext emptyInputContext = ...;
emptyInputContext.GetPointerX();
```

## 参见

- [本区域目录](../)