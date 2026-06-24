<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EmptyInputContext`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 获取 `pointer x` 的当前值。

### GetPointerY
`public int GetPointerY()`

**用途 / Purpose:** 获取 `pointer y` 的当前值。

### GetPointerPosition
`public Vector2 GetPointerPosition()`

**用途 / Purpose:** 获取 `pointer position` 的当前值。

### IsGameKeyDown
`public bool IsGameKeyDown(int gameKey)`

**用途 / Purpose:** 处理 `is game key down` 相关逻辑。

### IsGameKeyDownImmediate
`public bool IsGameKeyDownImmediate(int gameKey)`

**用途 / Purpose:** 处理 `is game key down immediate` 相关逻辑。

### IsGameKeyPressed
`public bool IsGameKeyPressed(int gameKey)`

**用途 / Purpose:** 处理 `is game key pressed` 相关逻辑。

### IsGameKeyReleased
`public bool IsGameKeyReleased(int gameKey)`

**用途 / Purpose:** 处理 `is game key released` 相关逻辑。

### GetGameKeyAxis
`public float GetGameKeyAxis(string gameAxisKey)`

**用途 / Purpose:** 获取 `game key axis` 的当前值。

### IsHotKeyDown
`public bool IsHotKeyDown(string hotKey)`

**用途 / Purpose:** 处理 `is hot key down` 相关逻辑。

### IsHotKeyReleased
`public bool IsHotKeyReleased(string hotKey)`

**用途 / Purpose:** 处理 `is hot key released` 相关逻辑。

### IsHotKeyPressed
`public bool IsHotKeyPressed(string hotKey)`

**用途 / Purpose:** 处理 `is hot key pressed` 相关逻辑。

### IsHotKeyDoublePressed
`public bool IsHotKeyDoublePressed(string hotKey)`

**用途 / Purpose:** 处理 `is hot key double pressed` 相关逻辑。

### GetKeyState
`public Vec2 GetKeyState(InputKey key)`

**用途 / Purpose:** 获取 `key state` 的当前值。

### IsKeyDown
`public bool IsKeyDown(InputKey key)`

**用途 / Purpose:** 处理 `is key down` 相关逻辑。

### IsKeyPressed
`public bool IsKeyPressed(InputKey key)`

**用途 / Purpose:** 处理 `is key pressed` 相关逻辑。

### IsKeyReleased
`public bool IsKeyReleased(InputKey key)`

**用途 / Purpose:** 处理 `is key released` 相关逻辑。

### GetMouseMoveX
`public float GetMouseMoveX()`

**用途 / Purpose:** 获取 `mouse move x` 的当前值。

### GetMouseMoveY
`public float GetMouseMoveY()`

**用途 / Purpose:** 获取 `mouse move y` 的当前值。

### GetIsMouseActive
`public bool GetIsMouseActive()`

**用途 / Purpose:** 获取 `is mouse active` 的当前值。

### GetMousePositionPixel
`public Vec2 GetMousePositionPixel()`

**用途 / Purpose:** 获取 `mouse position pixel` 的当前值。

### GetDeltaMouseScroll
`public float GetDeltaMouseScroll()`

**用途 / Purpose:** 获取 `delta mouse scroll` 的当前值。

### GetIsControllerConnected
`public bool GetIsControllerConnected()`

**用途 / Purpose:** 获取 `is controller connected` 的当前值。

### GetMousePositionRanged
`public Vec2 GetMousePositionRanged()`

**用途 / Purpose:** 获取 `mouse position ranged` 的当前值。

### GetMouseSensitivity
`public float GetMouseSensitivity()`

**用途 / Purpose:** 获取 `mouse sensitivity` 的当前值。

### IsControlDown
`public bool IsControlDown()`

**用途 / Purpose:** 处理 `is control down` 相关逻辑。

### IsShiftDown
`public bool IsShiftDown()`

**用途 / Purpose:** 处理 `is shift down` 相关逻辑。

### IsAltDown
`public bool IsAltDown()`

**用途 / Purpose:** 处理 `is alt down` 相关逻辑。

### GetControllerRightStickState
`public Vec2 GetControllerRightStickState()`

**用途 / Purpose:** 获取 `controller right stick state` 的当前值。

### GetControllerLeftStickState
`public Vec2 GetControllerLeftStickState()`

**用途 / Purpose:** 获取 `controller left stick state` 的当前值。

### GetClickKeys
`public InputKey GetClickKeys()`

**用途 / Purpose:** 获取 `click keys` 的当前值。

## 使用示例

```csharp
var value = new EmptyInputContext();
value.GetPointerX();
```

## 参见

- [完整类目录](../catalog)