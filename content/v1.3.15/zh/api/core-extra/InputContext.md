---
title: "InputContext"
description: "InputContext 的自动生成类参考。"
---
# InputContext

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `public class InputContext : IInputContext`
**Base:** `IInputContext`
**File:** `TaleWorlds.InputSystem/InputContext.cs`

## 概述

`InputContext` 位于 `TaleWorlds.InputSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.InputSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsKeysAllowed` | `public bool IsKeysAllowed { get; set; }` |
| `IsMouseButtonAllowed` | `public bool IsMouseButtonAllowed { get; set; }` |
| `IsMouseWheelAllowed` | `public bool IsMouseWheelAllowed { get; set; }` |
| `IsControllerAllowed` | `public bool IsControllerAllowed { get; set; }` |
| `MouseOnMe` | `public bool MouseOnMe { get; set; }` |

## 主要方法

### GetPointerX
`public int GetPointerX()`

**用途 / Purpose:** 读取并返回当前对象中 「pointer x」 的结果。

```csharp
// 先通过子系统 API 拿到 InputContext 实例
InputContext inputContext = ...;
var result = inputContext.GetPointerX();
```

### GetPointerY
`public int GetPointerY()`

**用途 / Purpose:** 读取并返回当前对象中 「pointer y」 的结果。

```csharp
// 先通过子系统 API 拿到 InputContext 实例
InputContext inputContext = ...;
var result = inputContext.GetPointerY();
```

### GetPointerPosition
`public Vector2 GetPointerPosition()`

**用途 / Purpose:** 读取并返回当前对象中 「pointer position」 的结果。

```csharp
// 先通过子系统 API 拿到 InputContext 实例
InputContext inputContext = ...;
var result = inputContext.GetPointerPosition();
```

### GetPointerPositionVec2
`public Vec2 GetPointerPositionVec2()`

**用途 / Purpose:** 读取并返回当前对象中 「pointer position vec2」 的结果。

```csharp
// 先通过子系统 API 拿到 InputContext 实例
InputContext inputContext = ...;
var result = inputContext.GetPointerPositionVec2();
```

### RegisterHotKeyCategory
`public void RegisterHotKeyCategory(GameKeyContext category)`

**用途 / Purpose:** 将「hot key category」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 InputContext 实例
InputContext inputContext = ...;
inputContext.RegisterHotKeyCategory(category);
```

### IsCategoryRegistered
`public bool IsCategoryRegistered(GameKeyContext category)`

**用途 / Purpose:** 判断当前对象是否处于 「category registered」 状态或条件。

```csharp
// 先通过子系统 API 拿到 InputContext 实例
InputContext inputContext = ...;
var result = inputContext.IsCategoryRegistered(category);
```

### RegisterDownKeys
`public void RegisterDownKeys()`

**用途 / Purpose:** 将「down keys」注册到当前系统，以便后续监听或分发。

```csharp
// 先通过子系统 API 拿到 InputContext 实例
InputContext inputContext = ...;
inputContext.RegisterDownKeys();
```

### UnregisterReleasedKeys
`public void UnregisterReleasedKeys()`

**用途 / Purpose:** 从当前系统中注销「released keys」。

```csharp
// 先通过子系统 API 拿到 InputContext 实例
InputContext inputContext = ...;
inputContext.UnregisterReleasedKeys();
```

### ResetLastDownKeys
`public void ResetLastDownKeys()`

**用途 / Purpose:** 将 「last down keys」 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 InputContext 实例
InputContext inputContext = ...;
inputContext.ResetLastDownKeys();
```

### IsHotKeyDown
`public bool IsHotKeyDown(string hotKey)`

**用途 / Purpose:** 判断当前对象是否处于 「hot key down」 状态或条件。

```csharp
// 先通过子系统 API 拿到 InputContext 实例
InputContext inputContext = ...;
var result = inputContext.IsHotKeyDown("example");
```

### IsGameKeyDown
`public bool IsGameKeyDown(int gameKey)`

**用途 / Purpose:** 判断当前对象是否处于 「game key down」 状态或条件。

```csharp
// 先通过子系统 API 拿到 InputContext 实例
InputContext inputContext = ...;
var result = inputContext.IsGameKeyDown(0);
```

### IsGameKeyDownImmediate
`public bool IsGameKeyDownImmediate(int gameKey)`

**用途 / Purpose:** 判断当前对象是否处于 「game key down immediate」 状态或条件。

```csharp
// 先通过子系统 API 拿到 InputContext 实例
InputContext inputContext = ...;
var result = inputContext.IsGameKeyDownImmediate(0);
```

### IsHotKeyPressed
`public bool IsHotKeyPressed(string hotKey)`

**用途 / Purpose:** 判断当前对象是否处于 「hot key pressed」 状态或条件。

```csharp
// 先通过子系统 API 拿到 InputContext 实例
InputContext inputContext = ...;
var result = inputContext.IsHotKeyPressed("example");
```

### IsGameKeyPressed
`public bool IsGameKeyPressed(int gameKey)`

**用途 / Purpose:** 判断当前对象是否处于 「game key pressed」 状态或条件。

```csharp
// 先通过子系统 API 拿到 InputContext 实例
InputContext inputContext = ...;
var result = inputContext.IsGameKeyPressed(0);
```

### IsHotKeyReleased
`public bool IsHotKeyReleased(string hotKey)`

**用途 / Purpose:** 判断当前对象是否处于 「hot key released」 状态或条件。

```csharp
// 先通过子系统 API 拿到 InputContext 实例
InputContext inputContext = ...;
var result = inputContext.IsHotKeyReleased("example");
```

### IsGameKeyReleased
`public bool IsGameKeyReleased(int gameKey)`

**用途 / Purpose:** 判断当前对象是否处于 「game key released」 状态或条件。

```csharp
// 先通过子系统 API 拿到 InputContext 实例
InputContext inputContext = ...;
var result = inputContext.IsGameKeyReleased(0);
```

### GetGameKeyState
`public float GetGameKeyState(int gameKey)`

**用途 / Purpose:** 读取并返回当前对象中 「game key state」 的结果。

```csharp
// 先通过子系统 API 拿到 InputContext 实例
InputContext inputContext = ...;
var result = inputContext.GetGameKeyState(0);
```

### IsHotKeyDoublePressed
`public bool IsHotKeyDoublePressed(string hotKey)`

**用途 / Purpose:** 判断当前对象是否处于 「hot key double pressed」 状态或条件。

```csharp
// 先通过子系统 API 拿到 InputContext 实例
InputContext inputContext = ...;
var result = inputContext.IsHotKeyDoublePressed("example");
```

### GetGameKeyAxis
`public float GetGameKeyAxis(GameAxisKey gameKey)`

**用途 / Purpose:** 读取并返回当前对象中 「game key axis」 的结果。

```csharp
// 先通过子系统 API 拿到 InputContext 实例
InputContext inputContext = ...;
var result = inputContext.GetGameKeyAxis(gameKey);
```

### GetGameKeyAxis
`public float GetGameKeyAxis(string gameKey)`

**用途 / Purpose:** 读取并返回当前对象中 「game key axis」 的结果。

```csharp
// 先通过子系统 API 拿到 InputContext 实例
InputContext inputContext = ...;
var result = inputContext.GetGameKeyAxis("example");
```

### GetKeyState
`public Vec2 GetKeyState(InputKey key)`

**用途 / Purpose:** 读取并返回当前对象中 「key state」 的结果。

```csharp
// 先通过子系统 API 拿到 InputContext 实例
InputContext inputContext = ...;
var result = inputContext.GetKeyState(key);
```

### IsKeyDown
`public bool IsKeyDown(InputKey key)`

**用途 / Purpose:** 判断当前对象是否处于 「key down」 状态或条件。

```csharp
// 先通过子系统 API 拿到 InputContext 实例
InputContext inputContext = ...;
var result = inputContext.IsKeyDown(key);
```

### IsKeyPressed
`public bool IsKeyPressed(InputKey key)`

**用途 / Purpose:** 判断当前对象是否处于 「key pressed」 状态或条件。

```csharp
// 先通过子系统 API 拿到 InputContext 实例
InputContext inputContext = ...;
var result = inputContext.IsKeyPressed(key);
```

### IsKeyReleased
`public bool IsKeyReleased(InputKey key)`

**用途 / Purpose:** 判断当前对象是否处于 「key released」 状态或条件。

```csharp
// 先通过子系统 API 拿到 InputContext 实例
InputContext inputContext = ...;
var result = inputContext.IsKeyReleased(key);
```

### GetMouseMoveX
`public float GetMouseMoveX()`

**用途 / Purpose:** 读取并返回当前对象中 「mouse move x」 的结果。

```csharp
// 先通过子系统 API 拿到 InputContext 实例
InputContext inputContext = ...;
var result = inputContext.GetMouseMoveX();
```

### GetMouseMoveY
`public float GetMouseMoveY()`

**用途 / Purpose:** 读取并返回当前对象中 「mouse move y」 的结果。

```csharp
// 先通过子系统 API 拿到 InputContext 实例
InputContext inputContext = ...;
var result = inputContext.GetMouseMoveY();
```

### GetNormalizedMouseMoveX
`public float GetNormalizedMouseMoveX()`

**用途 / Purpose:** 读取并返回当前对象中 「normalized mouse move x」 的结果。

```csharp
// 先通过子系统 API 拿到 InputContext 实例
InputContext inputContext = ...;
var result = inputContext.GetNormalizedMouseMoveX();
```

### GetNormalizedMouseMoveY
`public float GetNormalizedMouseMoveY()`

**用途 / Purpose:** 读取并返回当前对象中 「normalized mouse move y」 的结果。

```csharp
// 先通过子系统 API 拿到 InputContext 实例
InputContext inputContext = ...;
var result = inputContext.GetNormalizedMouseMoveY();
```

### GetControllerRightStickState
`public Vec2 GetControllerRightStickState()`

**用途 / Purpose:** 读取并返回当前对象中 「controller right stick state」 的结果。

```csharp
// 先通过子系统 API 拿到 InputContext 实例
InputContext inputContext = ...;
var result = inputContext.GetControllerRightStickState();
```

### GetControllerLeftStickState
`public Vec2 GetControllerLeftStickState()`

**用途 / Purpose:** 读取并返回当前对象中 「controller left stick state」 的结果。

```csharp
// 先通过子系统 API 拿到 InputContext 实例
InputContext inputContext = ...;
var result = inputContext.GetControllerLeftStickState();
```

### GetIsMouseActive
`public bool GetIsMouseActive()`

**用途 / Purpose:** 读取并返回当前对象中 「is mouse active」 的结果。

```csharp
// 先通过子系统 API 拿到 InputContext 实例
InputContext inputContext = ...;
var result = inputContext.GetIsMouseActive();
```

### GetIsMouseDown
`public bool GetIsMouseDown()`

**用途 / Purpose:** 读取并返回当前对象中 「is mouse down」 的结果。

```csharp
// 先通过子系统 API 拿到 InputContext 实例
InputContext inputContext = ...;
var result = inputContext.GetIsMouseDown();
```

### GetMousePositionPixel
`public Vec2 GetMousePositionPixel()`

**用途 / Purpose:** 读取并返回当前对象中 「mouse position pixel」 的结果。

```csharp
// 先通过子系统 API 拿到 InputContext 实例
InputContext inputContext = ...;
var result = inputContext.GetMousePositionPixel();
```

### GetDeltaMouseScroll
`public float GetDeltaMouseScroll()`

**用途 / Purpose:** 读取并返回当前对象中 「delta mouse scroll」 的结果。

```csharp
// 先通过子系统 API 拿到 InputContext 实例
InputContext inputContext = ...;
var result = inputContext.GetDeltaMouseScroll();
```

### GetIsControllerConnected
`public bool GetIsControllerConnected()`

**用途 / Purpose:** 读取并返回当前对象中 「is controller connected」 的结果。

```csharp
// 先通过子系统 API 拿到 InputContext 实例
InputContext inputContext = ...;
var result = inputContext.GetIsControllerConnected();
```

### GetMousePositionRanged
`public Vec2 GetMousePositionRanged()`

**用途 / Purpose:** 读取并返回当前对象中 「mouse position ranged」 的结果。

```csharp
// 先通过子系统 API 拿到 InputContext 实例
InputContext inputContext = ...;
var result = inputContext.GetMousePositionRanged();
```

### GetMouseSensitivity
`public float GetMouseSensitivity()`

**用途 / Purpose:** 读取并返回当前对象中 「mouse sensitivity」 的结果。

```csharp
// 先通过子系统 API 拿到 InputContext 实例
InputContext inputContext = ...;
var result = inputContext.GetMouseSensitivity();
```

### IsControlDown
`public bool IsControlDown()`

**用途 / Purpose:** 判断当前对象是否处于 「control down」 状态或条件。

```csharp
// 先通过子系统 API 拿到 InputContext 实例
InputContext inputContext = ...;
var result = inputContext.IsControlDown();
```

### IsShiftDown
`public bool IsShiftDown()`

**用途 / Purpose:** 判断当前对象是否处于 「shift down」 状态或条件。

```csharp
// 先通过子系统 API 拿到 InputContext 实例
InputContext inputContext = ...;
var result = inputContext.IsShiftDown();
```

### IsAltDown
`public bool IsAltDown()`

**用途 / Purpose:** 判断当前对象是否处于 「alt down」 状态或条件。

```csharp
// 先通过子系统 API 拿到 InputContext 实例
InputContext inputContext = ...;
var result = inputContext.IsAltDown();
```

### GetClickKeys
`public InputKey GetClickKeys()`

**用途 / Purpose:** 读取并返回当前对象中 「click keys」 的结果。

```csharp
// 先通过子系统 API 拿到 InputContext 实例
InputContext inputContext = ...;
var result = inputContext.GetClickKeys();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
InputContext inputContext = ...;
inputContext.GetPointerX();
```

## 参见

- [本区域目录](../)