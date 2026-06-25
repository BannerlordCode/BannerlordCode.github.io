---
title: "InputContext"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `InputContext`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# InputContext

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `public class InputContext : IInputContext`
**Base:** `IInputContext`
**File:** `Bannerlord.Source/bin/TaleWorlds.InputSystem/TaleWorlds.InputSystem/InputContext.cs`

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
| `MouseOnMe` | `public bool MouseOnMe { get; set; }` |

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

### GetPointerPositionVec2
`public Vec2 GetPointerPositionVec2()`

**用途 / Purpose:** 获取 `pointer position vec2` 的当前值。

### RegisterHotKeyCategory
`public void RegisterHotKeyCategory(GameKeyContext category)`

**用途 / Purpose:** 处理 `register hot key category` 相关逻辑。

### IsCategoryRegistered
`public bool IsCategoryRegistered(GameKeyContext category)`

**用途 / Purpose:** 处理 `is category registered` 相关逻辑。

### RegisterDownKeys
`public void RegisterDownKeys()`

**用途 / Purpose:** 处理 `register down keys` 相关逻辑。

### UnregisterReleasedKeys
`public void UnregisterReleasedKeys()`

**用途 / Purpose:** 处理 `unregister released keys` 相关逻辑。

### ResetLastDownKeys
`public void ResetLastDownKeys()`

**用途 / Purpose:** 将 `last down keys` 重置为初始状态。

### IsHotKeyDown
`public bool IsHotKeyDown(string hotKey)`

**用途 / Purpose:** 处理 `is hot key down` 相关逻辑。

### IsGameKeyDown
`public bool IsGameKeyDown(int gameKey)`

**用途 / Purpose:** 处理 `is game key down` 相关逻辑。

### IsGameKeyDownImmediate
`public bool IsGameKeyDownImmediate(int gameKey)`

**用途 / Purpose:** 处理 `is game key down immediate` 相关逻辑。

### IsHotKeyPressed
`public bool IsHotKeyPressed(string hotKey)`

**用途 / Purpose:** 处理 `is hot key pressed` 相关逻辑。

### IsGameKeyPressed
`public bool IsGameKeyPressed(int gameKey)`

**用途 / Purpose:** 处理 `is game key pressed` 相关逻辑。

### IsHotKeyReleased
`public bool IsHotKeyReleased(string hotKey)`

**用途 / Purpose:** 处理 `is hot key released` 相关逻辑。

### IsGameKeyReleased
`public bool IsGameKeyReleased(int gameKey)`

**用途 / Purpose:** 处理 `is game key released` 相关逻辑。

### GetGameKeyState
`public float GetGameKeyState(int gameKey)`

**用途 / Purpose:** 获取 `game key state` 的当前值。

### IsHotKeyDoublePressed
`public bool IsHotKeyDoublePressed(string hotKey)`

**用途 / Purpose:** 处理 `is hot key double pressed` 相关逻辑。

### GetGameKeyAxis
`public float GetGameKeyAxis(GameAxisKey gameKey)`

**用途 / Purpose:** 获取 `game key axis` 的当前值。

### GetGameKeyAxis
`public float GetGameKeyAxis(string gameKey)`

**用途 / Purpose:** 获取 `game key axis` 的当前值。

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

### GetNormalizedMouseMoveX
`public float GetNormalizedMouseMoveX()`

**用途 / Purpose:** 获取 `normalized mouse move x` 的当前值。

### GetNormalizedMouseMoveY
`public float GetNormalizedMouseMoveY()`

**用途 / Purpose:** 获取 `normalized mouse move y` 的当前值。

### GetControllerRightStickState
`public Vec2 GetControllerRightStickState()`

**用途 / Purpose:** 获取 `controller right stick state` 的当前值。

### GetControllerLeftStickState
`public Vec2 GetControllerLeftStickState()`

**用途 / Purpose:** 获取 `controller left stick state` 的当前值。

### GetIsMouseActive
`public bool GetIsMouseActive()`

**用途 / Purpose:** 获取 `is mouse active` 的当前值。

### GetIsMouseDown
`public bool GetIsMouseDown()`

**用途 / Purpose:** 获取 `is mouse down` 的当前值。

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

### GetClickKeys
`public InputKey GetClickKeys()`

**用途 / Purpose:** 获取 `click keys` 的当前值。

## 使用示例

```csharp
var value = new InputContext();
value.GetPointerX();
```

## 参见

- [完整类目录](../catalog)