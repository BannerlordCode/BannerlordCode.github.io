---
title: "Input"
description: "Input：TaleWorlds.InputSystem 的 public 类；公开成员 63 个（方法 38、属性 23、字段 1）。canonical 桶 system。源文件 TaleWorlds.InputSystem/Input.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Input

**Namespace:** `TaleWorlds.InputSystem`
**Module:** `TaleWorlds.InputSystem`
**Type:** `public static class Input`
**File:** `TaleWorlds.InputSystem/Input.cs`
**Bucket:** `system` (rule:TaleWorlds.InputSystem)

## 概述

Input 位于 TaleWorlds.InputSystem 模块，源文件 TaleWorlds.InputSystem/Input.cs。它是一个 public 类，继承链为 Input。public/protected 成员共 63 个：38 方法、23 属性、1 字段、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：Input 落在 canonical 桶 `system`（命中规则 `rule:TaleWorlds.InputSystem`），命名空间 `TaleWorlds.InputSystem`，继承链 Input。成员构成以方法为主（方法 38/63，属性 23/63），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.InputSystem/Input.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsPlaystation` | `public static bool IsPlaystation(this Input.ControllerTypes controllerType)` | 方法 |
| `InputState` | `public static InputState InputState` | 属性 |
| `DebugInput` | `public static IInputContext DebugInput` | 属性 |
| `InputManager` | `public static IInputManager InputManager` | 属性 |
| `Resolution` | `public static Vec2 Resolution` | 属性 |
| `DesktopResolution` | `public static Vec2 DesktopResolution` | 属性 |
| `Initialize` | `public static void Initialize(IInputManager inputManager, IInputContext debugInput)` | 方法 |
| `UpdateKeyData` | `public static void UpdateKeyData(byte[]keyData)` | 方法 |
| `GetMouseMoveX` | `public static float GetMouseMoveX()` | 方法 |
| `GetMouseMoveY` | `public static float GetMouseMoveY()` | 方法 |
| `GetNormalizedMouseMoveX` | `public static float GetNormalizedMouseMoveX()` | 方法 |
| `GetNormalizedMouseMoveY` | `public static float GetNormalizedMouseMoveY()` | 方法 |
| `GetGyroX` | `public static float GetGyroX()` | 方法 |
| `GetGyroY` | `public static float GetGyroY()` | 方法 |
| `GetGyroZ` | `public static float GetGyroZ()` | 方法 |
| `GetKeyState` | `public static Vec2 GetKeyState(InputKey key)` | 方法 |
| `IsKeyPressed` | `public static bool IsKeyPressed(InputKey key)` | 方法 |
| `IsKeyDown` | `public static bool IsKeyDown(InputKey key)` | 方法 |
| `IsKeyDownImmediate` | `public static bool IsKeyDownImmediate(InputKey key)` | 方法 |
| `IsKeyReleased` | `public static bool IsKeyReleased(InputKey key)` | 方法 |
| `IsControlOrShiftNotDown` | `public static bool IsControlOrShiftNotDown()` | 方法 |
| `IsOnScreenKeyboardActive` | `public static bool IsOnScreenKeyboardActive` | 属性 |
| `IsMouseActive` | `public static bool IsMouseActive` | 属性 |
| `IsControllerConnected` | `public static bool IsControllerConnected` | 属性 |
| `IsGamepadActive` | `public static bool IsGamepadActive` | 属性 |
| `IsAnyTouchActive` | `public static bool IsAnyTouchActive` | 属性 |
| `ControllerType` | `public static Input.ControllerTypes ControllerType` | 属性 |
| `GetPrimaryControllerType` | `public static Input.ControllerTypes GetPrimaryControllerType()` | 方法 |
| `GetFirstKeyPressedInRange` | `public static int GetFirstKeyPressedInRange(int startKeyNo)` | 方法 |
| `GetFirstKeyDownInRange` | `public static int GetFirstKeyDownInRange(int startKeyNo)` | 方法 |
| `GetFirstKeyReleasedInRange` | `public static int GetFirstKeyReleasedInRange(int startKeyNo)` | 方法 |
| `PressKey` | `public static void PressKey(InputKey key)` | 方法 |
| `ClearKeys` | `public static void ClearKeys()` | 方法 |
| `GetVirtualKeyCode` | `public static int GetVirtualKeyCode(InputKey key)` | 方法 |
| `IsDown` | `public static bool IsDown(this InputKey key)` | 方法 |
| `IsPressed` | `public static bool IsPressed(this InputKey key)` | 方法 |
| `IsReleased` | `public static bool IsReleased(this InputKey key)` | 方法 |
| `SetClipboardText` | `public static void SetClipboardText(string text)` | 方法 |
| `GetClipboardText` | `public static string GetClipboardText()` | 方法 |
| `MouseMoveX` | `public static float MouseMoveX` | 属性 |
| `MouseMoveY` | `public static float MouseMoveY` | 属性 |
| `GyroX` | `public static float GyroX` | 属性 |
| `GyroY` | `public static float GyroY` | 属性 |
| `GyroZ` | `public static float GyroZ` | 属性 |
| `MouseSensitivity` | `public static float MouseSensitivity` | 属性 |
| `DeltaMouseScroll` | `public static float DeltaMouseScroll` | 属性 |
| `MousePositionRanged` | `public static Vec2 MousePositionRanged` | 属性 |
| `MousePositionPixel` | `public static Vec2 MousePositionPixel` | 属性 |
| `Update` | `public static void Update()` | 方法 |
| `IsMousePositionUpdated` | `public static bool IsMousePositionUpdated` | 属性 |
| `IsMouseScrollChanged` | `public static bool IsMouseScrollChanged` | 属性 |
| `IsControllerKey` | `public static bool IsControllerKey(InputKey key)` | 方法 |
| `SetMousePosition` | `public static void SetMousePosition(int x, int y)` | 方法 |
| `SetCursorFriction` | `public static void SetCursorFriction(float frictionValue)` | 方法 |
| `InputKey[]GetClickKeys` | `public static InputKey[]GetClickKeys()` | 方法 |
| `SetRumbleEffect` | `public static void SetRumbleEffect(float[]lowFrequencyLevels, float[]lowFrequencyDurations, int numLowFrequencyElements, float[]highFrequencyLevels, float[]highFrequencyDurations, int numHighFrequencyElements)` | 方法 |
| `SetTriggerFeedback` | `public static void SetTriggerFeedback(byte leftTriggerPosition, byte leftTriggerStrength, byte rightTriggerPosition, byte rightTriggerStrength)` | 方法 |
| `SetTriggerWeaponEffect` | `public static void SetTriggerWeaponEffect(byte leftStartPosition, byte leftEnd_position, byte leftStrength, byte rightStartPosition, byte rightEndPosition, byte rightStrength)` | 方法 |
| `SetTriggerVibration` | `public static void SetTriggerVibration(float[]leftTriggerAmplitudes, float[]leftTriggerFrequencies, float[]leftTriggerDurations, int numLeftTriggerElements, float[]rightTriggerAmplitudes, float[]rightTriggerFrequencies, float[]rightTriggerDurations, int numRightTriggerElements)` | 方法 |
| `SetLightbarColor` | `public static void SetLightbarColor(float red, float green, float blue)` | 方法 |
| `NumberOfKeys` | `public const int NumberOfKeys` | 字段 |
| `ControllerTypes` | `public enum ControllerTypes` | 属性 |
| `ControllerTypes` | `public enum ControllerTypes` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 EmptyInputContext](../EmptyInputContext/)
- [同命名空间 GameAxisKey](../GameAxisKey/)
- [同命名空间 GameKey](../GameKey/)
- [同命名空间 GameKeyContext](../GameKeyContext/)
