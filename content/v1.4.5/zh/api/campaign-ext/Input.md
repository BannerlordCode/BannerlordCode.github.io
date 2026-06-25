---
title: "Input"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Input`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Input

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `public static class Input`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.InputSystem/TaleWorlds.InputSystem/Input.cs`

## 概述

`Input` 位于 `TaleWorlds.InputSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.InputSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `InputState` | `public static InputState InputState { get; }` |
| `DebugInput` | `public static IInputContext DebugInput { get; }` |
| `InputManager` | `public static IInputManager InputManager { get; }` |
| `IsOnScreenKeyboardActive` | `public static bool IsOnScreenKeyboardActive { get; set; }` |
| `IsGamepadActive` | `public static bool IsGamepadActive { get; }` |
| `IsAnyTouchActive` | `public static bool IsAnyTouchActive { get; }` |
| `ControllerType` | `public static ControllerTypes ControllerType { get; }` |
| `IsMousePositionUpdated` | `public static bool IsMousePositionUpdated { get; }` |
| `IsMouseScrollChanged` | `public static bool IsMouseScrollChanged { get; }` |

## 主要方法

### IsPlaystation
`public static bool IsPlaystation(this ControllerTypes controllerType)`

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
`public static ControllerTypes GetPrimaryControllerType()`

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

### PressKey
`public static void PressKey(InputKey key)`

**用途 / Purpose:** 处理 `press key` 相关逻辑。

### ClearKeys
`public static void ClearKeys()`

**用途 / Purpose:** 处理 `clear keys` 相关逻辑。

### GetVirtualKeyCode
`public static int GetVirtualKeyCode(InputKey key)`

**用途 / Purpose:** 获取 `virtual key code` 的当前值。

### IsDown
`public static bool IsDown(this InputKey key)`

**用途 / Purpose:** 处理 `is down` 相关逻辑。

### IsPressed
`public static bool IsPressed(this InputKey key)`

**用途 / Purpose:** 处理 `is pressed` 相关逻辑。

### IsReleased
`public static bool IsReleased(this InputKey key)`

**用途 / Purpose:** 处理 `is released` 相关逻辑。

### SetClipboardText
`public static void SetClipboardText(string text)`

**用途 / Purpose:** 设置 `clipboard text` 的值或状态。

### GetClipboardText
`public static string GetClipboardText()`

**用途 / Purpose:** 获取 `clipboard text` 的当前值。

### Update
`public static void Update()`

**用途 / Purpose:** 更新 `update` 的状态或数据。

### IsControllerKey
`public static bool IsControllerKey(InputKey key)`

**用途 / Purpose:** 处理 `is controller key` 相关逻辑。

### SetMousePosition
`public static void SetMousePosition(int x, int y)`

**用途 / Purpose:** 设置 `mouse position` 的值或状态。

### SetCursorFriction
`public static void SetCursorFriction(float frictionValue)`

**用途 / Purpose:** 设置 `cursor friction` 的值或状态。

### GetClickKeys
`public static InputKey GetClickKeys()`

**用途 / Purpose:** 获取 `click keys` 的当前值。

### SetRumbleEffect
`public static void SetRumbleEffect(float lowFrequencyLevels, float lowFrequencyDurations, int numLowFrequencyElements, float highFrequencyLevels, float highFrequencyDurations, int numHighFrequencyElements)`

**用途 / Purpose:** 设置 `rumble effect` 的值或状态。

### SetTriggerFeedback
`public static void SetTriggerFeedback(byte leftTriggerPosition, byte leftTriggerStrength, byte rightTriggerPosition, byte rightTriggerStrength)`

**用途 / Purpose:** 设置 `trigger feedback` 的值或状态。

### SetTriggerWeaponEffect
`public static void SetTriggerWeaponEffect(byte leftStartPosition, byte leftEnd_position, byte leftStrength, byte rightStartPosition, byte rightEndPosition, byte rightStrength)`

**用途 / Purpose:** 设置 `trigger weapon effect` 的值或状态。

### SetTriggerVibration
`public static void SetTriggerVibration(float leftTriggerAmplitudes, float leftTriggerFrequencies, float leftTriggerDurations, int numLeftTriggerElements, float rightTriggerAmplitudes, float rightTriggerFrequencies, float rightTriggerDurations, int numRightTriggerElements)`

**用途 / Purpose:** 设置 `trigger vibration` 的值或状态。

### SetLightbarColor
`public static void SetLightbarColor(float red, float green, float blue)`

**用途 / Purpose:** 设置 `lightbar color` 的值或状态。

## 使用示例

```csharp
Input.IsPlaystation(controllerType);
```

## 参见

- [完整类目录](../catalog)