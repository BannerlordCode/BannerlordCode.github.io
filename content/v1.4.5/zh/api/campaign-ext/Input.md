---
title: "Input"
description: "Input 的自动生成类参考。"
---
# Input

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `public static class Input`
**Base:** 无
**File:** `bin/TaleWorlds.InputSystem/TaleWorlds.InputSystem/Input.cs`

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

**用途 / Purpose:** 判断当前对象是否处于 「playstation」 状态或条件。

```csharp
// 静态调用，不需要实例
Input.IsPlaystation(controllerType);
```

### Initialize
`public static void Initialize(IInputManager inputManager, IInputContext debugInput)`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
Input.Initialize(inputManager, debugInput);
```

### UpdateKeyData
`public static void UpdateKeyData(byte keyData)`

**用途 / Purpose:** 重新计算并更新 「key data」 的最新表示。

```csharp
// 静态调用，不需要实例
Input.UpdateKeyData(0);
```

### GetMouseMoveX
`public static float GetMouseMoveX()`

**用途 / Purpose:** 读取并返回当前对象中 「mouse move x」 的结果。

```csharp
// 静态调用，不需要实例
Input.GetMouseMoveX();
```

### GetMouseMoveY
`public static float GetMouseMoveY()`

**用途 / Purpose:** 读取并返回当前对象中 「mouse move y」 的结果。

```csharp
// 静态调用，不需要实例
Input.GetMouseMoveY();
```

### GetNormalizedMouseMoveX
`public static float GetNormalizedMouseMoveX()`

**用途 / Purpose:** 读取并返回当前对象中 「normalized mouse move x」 的结果。

```csharp
// 静态调用，不需要实例
Input.GetNormalizedMouseMoveX();
```

### GetNormalizedMouseMoveY
`public static float GetNormalizedMouseMoveY()`

**用途 / Purpose:** 读取并返回当前对象中 「normalized mouse move y」 的结果。

```csharp
// 静态调用，不需要实例
Input.GetNormalizedMouseMoveY();
```

### GetGyroX
`public static float GetGyroX()`

**用途 / Purpose:** 读取并返回当前对象中 「gyro x」 的结果。

```csharp
// 静态调用，不需要实例
Input.GetGyroX();
```

### GetGyroY
`public static float GetGyroY()`

**用途 / Purpose:** 读取并返回当前对象中 「gyro y」 的结果。

```csharp
// 静态调用，不需要实例
Input.GetGyroY();
```

### GetGyroZ
`public static float GetGyroZ()`

**用途 / Purpose:** 读取并返回当前对象中 「gyro z」 的结果。

```csharp
// 静态调用，不需要实例
Input.GetGyroZ();
```

### GetKeyState
`public static Vec2 GetKeyState(InputKey key)`

**用途 / Purpose:** 读取并返回当前对象中 「key state」 的结果。

```csharp
// 静态调用，不需要实例
Input.GetKeyState(key);
```

### IsKeyPressed
`public static bool IsKeyPressed(InputKey key)`

**用途 / Purpose:** 判断当前对象是否处于 「key pressed」 状态或条件。

```csharp
// 静态调用，不需要实例
Input.IsKeyPressed(key);
```

### IsKeyDown
`public static bool IsKeyDown(InputKey key)`

**用途 / Purpose:** 判断当前对象是否处于 「key down」 状态或条件。

```csharp
// 静态调用，不需要实例
Input.IsKeyDown(key);
```

### IsKeyDownImmediate
`public static bool IsKeyDownImmediate(InputKey key)`

**用途 / Purpose:** 判断当前对象是否处于 「key down immediate」 状态或条件。

```csharp
// 静态调用，不需要实例
Input.IsKeyDownImmediate(key);
```

### IsKeyReleased
`public static bool IsKeyReleased(InputKey key)`

**用途 / Purpose:** 判断当前对象是否处于 「key released」 状态或条件。

```csharp
// 静态调用，不需要实例
Input.IsKeyReleased(key);
```

### IsControlOrShiftNotDown
`public static bool IsControlOrShiftNotDown()`

**用途 / Purpose:** 判断当前对象是否处于 「control or shift not down」 状态或条件。

```csharp
// 静态调用，不需要实例
Input.IsControlOrShiftNotDown();
```

### GetPrimaryControllerType
`public static ControllerTypes GetPrimaryControllerType()`

**用途 / Purpose:** 读取并返回当前对象中 「primary controller type」 的结果。

```csharp
// 静态调用，不需要实例
Input.GetPrimaryControllerType();
```

### GetFirstKeyPressedInRange
`public static int GetFirstKeyPressedInRange(int startKeyNo)`

**用途 / Purpose:** 读取并返回当前对象中 「first key pressed in range」 的结果。

```csharp
// 静态调用，不需要实例
Input.GetFirstKeyPressedInRange(0);
```

### GetFirstKeyDownInRange
`public static int GetFirstKeyDownInRange(int startKeyNo)`

**用途 / Purpose:** 读取并返回当前对象中 「first key down in range」 的结果。

```csharp
// 静态调用，不需要实例
Input.GetFirstKeyDownInRange(0);
```

### GetFirstKeyReleasedInRange
`public static int GetFirstKeyReleasedInRange(int startKeyNo)`

**用途 / Purpose:** 读取并返回当前对象中 「first key released in range」 的结果。

```csharp
// 静态调用，不需要实例
Input.GetFirstKeyReleasedInRange(0);
```

### PressKey
`public static void PressKey(InputKey key)`

**用途 / Purpose:** 处理与 「press key」 相关的逻辑。

```csharp
// 静态调用，不需要实例
Input.PressKey(key);
```

### ClearKeys
`public static void ClearKeys()`

**用途 / Purpose:** 清空当前对象中的「keys」。

```csharp
// 静态调用，不需要实例
Input.ClearKeys();
```

### GetVirtualKeyCode
`public static int GetVirtualKeyCode(InputKey key)`

**用途 / Purpose:** 读取并返回当前对象中 「virtual key code」 的结果。

```csharp
// 静态调用，不需要实例
Input.GetVirtualKeyCode(key);
```

### IsDown
`public static bool IsDown(this InputKey key)`

**用途 / Purpose:** 判断当前对象是否处于 「down」 状态或条件。

```csharp
// 静态调用，不需要实例
Input.IsDown(key);
```

### IsPressed
`public static bool IsPressed(this InputKey key)`

**用途 / Purpose:** 判断当前对象是否处于 「pressed」 状态或条件。

```csharp
// 静态调用，不需要实例
Input.IsPressed(key);
```

### IsReleased
`public static bool IsReleased(this InputKey key)`

**用途 / Purpose:** 判断当前对象是否处于 「released」 状态或条件。

```csharp
// 静态调用，不需要实例
Input.IsReleased(key);
```

### SetClipboardText
`public static void SetClipboardText(string text)`

**用途 / Purpose:** 为 「clipboard text」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Input.SetClipboardText("example");
```

### GetClipboardText
`public static string GetClipboardText()`

**用途 / Purpose:** 读取并返回当前对象中 「clipboard text」 的结果。

```csharp
// 静态调用，不需要实例
Input.GetClipboardText();
```

### Update
`public static void Update()`

**用途 / Purpose:** 重新计算并更新当前对象的最新表示。

```csharp
// 静态调用，不需要实例
Input.Update();
```

### IsControllerKey
`public static bool IsControllerKey(InputKey key)`

**用途 / Purpose:** 判断当前对象是否处于 「controller key」 状态或条件。

```csharp
// 静态调用，不需要实例
Input.IsControllerKey(key);
```

### SetMousePosition
`public static void SetMousePosition(int x, int y)`

**用途 / Purpose:** 为 「mouse position」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Input.SetMousePosition(0, 0);
```

### SetCursorFriction
`public static void SetCursorFriction(float frictionValue)`

**用途 / Purpose:** 为 「cursor friction」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Input.SetCursorFriction(0);
```

### GetClickKeys
`public static InputKey GetClickKeys()`

**用途 / Purpose:** 读取并返回当前对象中 「click keys」 的结果。

```csharp
// 静态调用，不需要实例
Input.GetClickKeys();
```

### SetRumbleEffect
`public static void SetRumbleEffect(float lowFrequencyLevels, float lowFrequencyDurations, int numLowFrequencyElements, float highFrequencyLevels, float highFrequencyDurations, int numHighFrequencyElements)`

**用途 / Purpose:** 为 「rumble effect」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Input.SetRumbleEffect(0, 0, 0, 0, 0, 0);
```

### SetTriggerFeedback
`public static void SetTriggerFeedback(byte leftTriggerPosition, byte leftTriggerStrength, byte rightTriggerPosition, byte rightTriggerStrength)`

**用途 / Purpose:** 为 「trigger feedback」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Input.SetTriggerFeedback(0, 0, 0, 0);
```

### SetTriggerWeaponEffect
`public static void SetTriggerWeaponEffect(byte leftStartPosition, byte leftEnd_position, byte leftStrength, byte rightStartPosition, byte rightEndPosition, byte rightStrength)`

**用途 / Purpose:** 为 「trigger weapon effect」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Input.SetTriggerWeaponEffect(0, 0, 0, 0, 0, 0);
```

### SetTriggerVibration
`public static void SetTriggerVibration(float leftTriggerAmplitudes, float leftTriggerFrequencies, float leftTriggerDurations, int numLeftTriggerElements, float rightTriggerAmplitudes, float rightTriggerFrequencies, float rightTriggerDurations, int numRightTriggerElements)`

**用途 / Purpose:** 为 「trigger vibration」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Input.SetTriggerVibration(0, 0, 0, 0, 0, 0, 0, 0);
```

### SetLightbarColor
`public static void SetLightbarColor(float red, float green, float blue)`

**用途 / Purpose:** 为 「lightbar color」 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
Input.SetLightbarColor(0, 0, 0);
```

## 使用示例

```csharp
Input.IsPlaystation(controllerType);
```

## 参见

- [本区域目录](../)