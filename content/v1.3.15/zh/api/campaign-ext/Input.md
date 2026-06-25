---
title: "Input"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Input`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Input

**命名空间:** TaleWorlds.InputSystem
**模块:** TaleWorlds.InputSystem
**类型:** `public static class Input`
**领域:** campaign-ext

## 概述

`Input` 位于 `TaleWorlds.InputSystem`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.InputSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `InputState` | `public static InputState InputState { get; }` |
| `DebugInput` | `public static IInputContext DebugInput { get; }` |
| `InputManager` | `public static IInputManager InputManager { get; }` |
| `Resolution` | `public static Vec2 Resolution { get; }` |
| `DesktopResolution` | `public static Vec2 DesktopResolution { get; }` |
| `IsOnScreenKeyboardActive` | `public static bool IsOnScreenKeyboardActive { get; set; }` |
| `IsMouseActive` | `public static bool IsMouseActive { get; }` |
| `IsControllerConnected` | `public static bool IsControllerConnected { get; }` |
| `IsGamepadActive` | `public static bool IsGamepadActive { get; }` |
| `IsAnyTouchActive` | `public static bool IsAnyTouchActive { get; }` |
| `ControllerType` | `public static Input.ControllerTypes ControllerType { get; }` |
| `MouseMoveX` | `public static float MouseMoveX { get; }` |
| `MouseMoveY` | `public static float MouseMoveY { get; }` |
| `GyroX` | `public static float GyroX { get; }` |
| `GyroY` | `public static float GyroY { get; }` |
| `GyroZ` | `public static float GyroZ { get; }` |
| `MouseSensitivity` | `public static float MouseSensitivity { get; }` |
| `DeltaMouseScroll` | `public static float DeltaMouseScroll { get; }` |
| `MousePositionRanged` | `public static Vec2 MousePositionRanged { get; }` |
| `MousePositionPixel` | `public static Vec2 MousePositionPixel { get; }` |

## 主要方法

### IsPlaystation
`public static bool IsPlaystation(this Input.ControllerTypes controllerType)`

**用途 / Purpose:** 处理 `is playstation` 相关逻辑。

### Initialize
`public static void Initialize(IInputManager inputManager, IInputContext debugInput)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### UpdateKeyData
`public static void UpdateKeyData(byte keyData)`

**用途 / Purpose:** 更新 `key data` 的状态或数据。

### GetMouseMoveX
`public static float GetMouseMoveX()`

**用途 / Purpose:** 获取 `mouse move x` 的当前值。

### GetMouseMoveY
`public static float GetMouseMoveY()`

**用途 / Purpose:** 获取 `mouse move y` 的当前值。

### GetNormalizedMouseMoveX
`public static float GetNormalizedMouseMoveX()`

**用途 / Purpose:** 获取 `normalized mouse move x` 的当前值。

### GetNormalizedMouseMoveY
`public static float GetNormalizedMouseMoveY()`

**用途 / Purpose:** 获取 `normalized mouse move y` 的当前值。

### GetGyroX
`public static float GetGyroX()`

**用途 / Purpose:** 获取 `gyro x` 的当前值。

### GetGyroY
`public static float GetGyroY()`

**用途 / Purpose:** 获取 `gyro y` 的当前值。

### GetGyroZ
`public static float GetGyroZ()`

**用途 / Purpose:** 获取 `gyro z` 的当前值。

### GetKeyState
`public static Vec2 GetKeyState(InputKey key)`

**用途 / Purpose:** 获取 `key state` 的当前值。

### IsKeyPressed
`public static bool IsKeyPressed(InputKey key)`

**用途 / Purpose:** 处理 `is key pressed` 相关逻辑。

### IsKeyDown
`public static bool IsKeyDown(InputKey key)`

**用途 / Purpose:** 处理 `is key down` 相关逻辑。

### IsKeyDownImmediate
`public static bool IsKeyDownImmediate(InputKey key)`

**用途 / Purpose:** 处理 `is key down immediate` 相关逻辑。

### IsKeyReleased
`public static bool IsKeyReleased(InputKey key)`

**用途 / Purpose:** 处理 `is key released` 相关逻辑。

### IsControlOrShiftNotDown
`public static bool IsControlOrShiftNotDown()`

**用途 / Purpose:** 处理 `is control or shift not down` 相关逻辑。

### GetPrimaryControllerType
`public static Input.ControllerTypes GetPrimaryControllerType()`

**用途 / Purpose:** 获取 `primary controller type` 的当前值。

### GetFirstKeyPressedInRange
`public static int GetFirstKeyPressedInRange(int startKeyNo)`

**用途 / Purpose:** 获取 `first key pressed in range` 的当前值。

### GetFirstKeyDownInRange
`public static int GetFirstKeyDownInRange(int startKeyNo)`

**用途 / Purpose:** 获取 `first key down in range` 的当前值。

### GetFirstKeyReleasedInRange
`public static int GetFirstKeyReleasedInRange(int startKeyNo)`

**用途 / Purpose:** 获取 `first key released in range` 的当前值。

## 使用示例

```csharp
// 先准备该类型需要的上下文，然后直接调用静态入口
Input.IsPlaystation(controllerType);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
