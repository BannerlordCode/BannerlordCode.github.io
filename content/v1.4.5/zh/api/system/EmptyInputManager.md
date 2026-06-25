---
title: "EmptyInputManager"
description: "EmptyInputManager 的自动生成类参考。"
---
# EmptyInputManager

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `internal class EmptyInputManager : IInputManager`
**Base:** `IInputManager`
**File:** `bin/TaleWorlds.InputSystem/TaleWorlds.InputSystem/EmptyInputManager.cs`

## 概述

`EmptyInputManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `EmptyInputManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### ClearKeys
`public void ClearKeys()`

**用途 / Purpose:** 清空当前对象中的「keys」。

```csharp
// 先通过子系统 API 拿到 EmptyInputManager 实例
EmptyInputManager emptyInputManager = ...;
emptyInputManager.ClearKeys();
```

### GetClickKeys
`public InputKey GetClickKeys()`

**用途 / Purpose:** 读取并返回当前对象中 「click keys」 的结果。

```csharp
// 先通过子系统 API 拿到 EmptyInputManager 实例
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.GetClickKeys();
```

### GetClipboardText
`public string GetClipboardText()`

**用途 / Purpose:** 读取并返回当前对象中 「clipboard text」 的结果。

```csharp
// 先通过子系统 API 拿到 EmptyInputManager 实例
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.GetClipboardText();
```

### GetControllerType
`public Input.ControllerTypes GetControllerType()`

**用途 / Purpose:** 读取并返回当前对象中 「controller type」 的结果。

```csharp
// 先通过子系统 API 拿到 EmptyInputManager 实例
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.GetControllerType();
```

### GetDesktopResolution
`public Vec2 GetDesktopResolution()`

**用途 / Purpose:** 读取并返回当前对象中 「desktop resolution」 的结果。

```csharp
// 先通过子系统 API 拿到 EmptyInputManager 实例
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.GetDesktopResolution();
```

### GetGyroX
`public float GetGyroX()`

**用途 / Purpose:** 读取并返回当前对象中 「gyro x」 的结果。

```csharp
// 先通过子系统 API 拿到 EmptyInputManager 实例
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.GetGyroX();
```

### GetGyroY
`public float GetGyroY()`

**用途 / Purpose:** 读取并返回当前对象中 「gyro y」 的结果。

```csharp
// 先通过子系统 API 拿到 EmptyInputManager 实例
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.GetGyroY();
```

### GetGyroZ
`public float GetGyroZ()`

**用途 / Purpose:** 读取并返回当前对象中 「gyro z」 的结果。

```csharp
// 先通过子系统 API 拿到 EmptyInputManager 实例
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.GetGyroZ();
```

### GetKeyState
`public Vec2 GetKeyState(InputKey key)`

**用途 / Purpose:** 读取并返回当前对象中 「key state」 的结果。

```csharp
// 先通过子系统 API 拿到 EmptyInputManager 实例
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.GetKeyState(key);
```

### GetMouseDeltaZ
`public float GetMouseDeltaZ()`

**用途 / Purpose:** 读取并返回当前对象中 「mouse delta z」 的结果。

```csharp
// 先通过子系统 API 拿到 EmptyInputManager 实例
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.GetMouseDeltaZ();
```

### GetMouseMoveX
`public float GetMouseMoveX()`

**用途 / Purpose:** 读取并返回当前对象中 「mouse move x」 的结果。

```csharp
// 先通过子系统 API 拿到 EmptyInputManager 实例
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.GetMouseMoveX();
```

### GetMouseMoveY
`public float GetMouseMoveY()`

**用途 / Purpose:** 读取并返回当前对象中 「mouse move y」 的结果。

```csharp
// 先通过子系统 API 拿到 EmptyInputManager 实例
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.GetMouseMoveY();
```

### GetMousePositionX
`public float GetMousePositionX()`

**用途 / Purpose:** 读取并返回当前对象中 「mouse position x」 的结果。

```csharp
// 先通过子系统 API 拿到 EmptyInputManager 实例
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.GetMousePositionX();
```

### GetMousePositionY
`public float GetMousePositionY()`

**用途 / Purpose:** 读取并返回当前对象中 「mouse position y」 的结果。

```csharp
// 先通过子系统 API 拿到 EmptyInputManager 实例
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.GetMousePositionY();
```

### GetMouseScrollValue
`public float GetMouseScrollValue()`

**用途 / Purpose:** 读取并返回当前对象中 「mouse scroll value」 的结果。

```csharp
// 先通过子系统 API 拿到 EmptyInputManager 实例
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.GetMouseScrollValue();
```

### GetMouseSensitivity
`public float GetMouseSensitivity()`

**用途 / Purpose:** 读取并返回当前对象中 「mouse sensitivity」 的结果。

```csharp
// 先通过子系统 API 拿到 EmptyInputManager 实例
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.GetMouseSensitivity();
```

### GetNormalizedMouseMoveX
`public float GetNormalizedMouseMoveX()`

**用途 / Purpose:** 读取并返回当前对象中 「normalized mouse move x」 的结果。

```csharp
// 先通过子系统 API 拿到 EmptyInputManager 实例
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.GetNormalizedMouseMoveX();
```

### GetNormalizedMouseMoveY
`public float GetNormalizedMouseMoveY()`

**用途 / Purpose:** 读取并返回当前对象中 「normalized mouse move y」 的结果。

```csharp
// 先通过子系统 API 拿到 EmptyInputManager 实例
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.GetNormalizedMouseMoveY();
```

### GetResolution
`public Vec2 GetResolution()`

**用途 / Purpose:** 读取并返回当前对象中 「resolution」 的结果。

```csharp
// 先通过子系统 API 拿到 EmptyInputManager 实例
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.GetResolution();
```

### GetVirtualKeyCode
`public int GetVirtualKeyCode(InputKey key)`

**用途 / Purpose:** 读取并返回当前对象中 「virtual key code」 的结果。

```csharp
// 先通过子系统 API 拿到 EmptyInputManager 实例
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.GetVirtualKeyCode(key);
```

### IsAnyTouchActive
`public bool IsAnyTouchActive()`

**用途 / Purpose:** 判断当前对象是否处于 「any touch active」 状态或条件。

```csharp
// 先通过子系统 API 拿到 EmptyInputManager 实例
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.IsAnyTouchActive();
```

### IsControllerConnected
`public bool IsControllerConnected()`

**用途 / Purpose:** 判断当前对象是否处于 「controller connected」 状态或条件。

```csharp
// 先通过子系统 API 拿到 EmptyInputManager 实例
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.IsControllerConnected();
```

### IsKeyDown
`public bool IsKeyDown(InputKey key)`

**用途 / Purpose:** 判断当前对象是否处于 「key down」 状态或条件。

```csharp
// 先通过子系统 API 拿到 EmptyInputManager 实例
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.IsKeyDown(key);
```

### IsKeyDownImmediate
`public bool IsKeyDownImmediate(InputKey key)`

**用途 / Purpose:** 判断当前对象是否处于 「key down immediate」 状态或条件。

```csharp
// 先通过子系统 API 拿到 EmptyInputManager 实例
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.IsKeyDownImmediate(key);
```

### IsKeyPressed
`public bool IsKeyPressed(InputKey key)`

**用途 / Purpose:** 判断当前对象是否处于 「key pressed」 状态或条件。

```csharp
// 先通过子系统 API 拿到 EmptyInputManager 实例
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.IsKeyPressed(key);
```

### IsKeyReleased
`public bool IsKeyReleased(InputKey key)`

**用途 / Purpose:** 判断当前对象是否处于 「key released」 状态或条件。

```csharp
// 先通过子系统 API 拿到 EmptyInputManager 实例
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.IsKeyReleased(key);
```

### IsMouseActive
`public bool IsMouseActive()`

**用途 / Purpose:** 判断当前对象是否处于 「mouse active」 状态或条件。

```csharp
// 先通过子系统 API 拿到 EmptyInputManager 实例
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.IsMouseActive();
```

### PressKey
`public void PressKey(InputKey key)`

**用途 / Purpose:** 处理与 「press key」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 EmptyInputManager 实例
EmptyInputManager emptyInputManager = ...;
emptyInputManager.PressKey(key);
```

### SetClipboardText
`public void SetClipboardText(string text)`

**用途 / Purpose:** 为 「clipboard text」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 EmptyInputManager 实例
EmptyInputManager emptyInputManager = ...;
emptyInputManager.SetClipboardText("example");
```

### SetCursorFriction
`public void SetCursorFriction(float frictionValue)`

**用途 / Purpose:** 为 「cursor friction」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 EmptyInputManager 实例
EmptyInputManager emptyInputManager = ...;
emptyInputManager.SetCursorFriction(0);
```

### SetCursorPosition
`public void SetCursorPosition(int x, int y)`

**用途 / Purpose:** 为 「cursor position」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 EmptyInputManager 实例
EmptyInputManager emptyInputManager = ...;
emptyInputManager.SetCursorPosition(0, 0);
```

### SetLightbarColor
`public void SetLightbarColor(float red, float green, float blue)`

**用途 / Purpose:** 为 「lightbar color」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 EmptyInputManager 实例
EmptyInputManager emptyInputManager = ...;
emptyInputManager.SetLightbarColor(0, 0, 0);
```

### SetRumbleEffect
`public void SetRumbleEffect(float lowFrequencyLevels, float lowFrequencyDurations, int numLowFrequencyElements, float highFrequencyLevels, float highFrequencyDurations, int numHighFrequencyElements)`

**用途 / Purpose:** 为 「rumble effect」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 EmptyInputManager 实例
EmptyInputManager emptyInputManager = ...;
emptyInputManager.SetRumbleEffect(0, 0, 0, 0, 0, 0);
```

### SetTriggerFeedback
`public void SetTriggerFeedback(byte leftTriggerPosition, byte leftTriggerStrength, byte rightTriggerPosition, byte rightTriggerStrength)`

**用途 / Purpose:** 为 「trigger feedback」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 EmptyInputManager 实例
EmptyInputManager emptyInputManager = ...;
emptyInputManager.SetTriggerFeedback(0, 0, 0, 0);
```

### SetTriggerVibration
`public void SetTriggerVibration(float leftTriggerAmplitudes, float leftTriggerFrequencies, float leftTriggerDurations, int numLeftTriggerElements, float rightTriggerAmplitudes, float rightTriggerFrequencies, float rightTriggerDurations, int numRightTriggerElements)`

**用途 / Purpose:** 为 「trigger vibration」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 EmptyInputManager 实例
EmptyInputManager emptyInputManager = ...;
emptyInputManager.SetTriggerVibration(0, 0, 0, 0, 0, 0, 0, 0);
```

### SetTriggerWeaponEffect
`public void SetTriggerWeaponEffect(byte leftStartPosition, byte leftEnd_position, byte leftStrength, byte rightStartPosition, byte rightEndPosition, byte rightStrength)`

**用途 / Purpose:** 为 「trigger weapon effect」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 EmptyInputManager 实例
EmptyInputManager emptyInputManager = ...;
emptyInputManager.SetTriggerWeaponEffect(0, 0, 0, 0, 0, 0);
```

### UpdateKeyData
`public void UpdateKeyData(byte keyData)`

**用途 / Purpose:** 重新计算并更新 「key data」 的最新表示。

```csharp
// 先通过子系统 API 拿到 EmptyInputManager 实例
EmptyInputManager emptyInputManager = ...;
emptyInputManager.UpdateKeyData(0);
```

## 使用示例

```csharp
var manager = EmptyInputManager.Current;
```

## 参见

- [本区域目录](../)