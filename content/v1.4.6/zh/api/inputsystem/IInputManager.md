---
title: "IInputManager"
description: "IInputManager：TaleWorlds.InputSystem 的 public 接口；公开成员 37 个（方法 37、属性 0、字段 0）。源文件 TaleWorlds.InputSystem/IInputManager.cs。"
---
# IInputManager

**Namespace:** `TaleWorlds.InputSystem`
**Module:** `TaleWorlds.InputSystem`
**Type:** `public interface IInputManager`
**File:** `TaleWorlds.InputSystem/IInputManager.cs`

## 概述

IInputManager 位于 TaleWorlds.InputSystem 模块，源文件 TaleWorlds.InputSystem/IInputManager.cs。它是一个 public 接口，继承链为 IInputManager。public/protected 成员共 37 个：37 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IInputManager 是 TaleWorlds.InputSystem 的顶层类型，命名空间与模块目录一致，继承链 IInputManager。成员构成以方法为主（方法 37/37，属性 0/37），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.InputSystem/IInputManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetMousePositionX` | `float GetMousePositionX();` | 方法 |
| `GetMousePositionY` | `float GetMousePositionY();` | 方法 |
| `GetMouseScrollValue` | `float GetMouseScrollValue();` | 方法 |
| `GetControllerType` | `Input.ControllerTypes GetControllerType();` | 方法 |
| `IsMouseActive` | `bool IsMouseActive();` | 方法 |
| `IsControllerConnected` | `bool IsControllerConnected();` | 方法 |
| `IsAnyTouchActive` | `bool IsAnyTouchActive();` | 方法 |
| `PressKey` | `void PressKey(InputKey key);` | 方法 |
| `ClearKeys` | `void ClearKeys();` | 方法 |
| `GetVirtualKeyCode` | `int GetVirtualKeyCode(InputKey key);` | 方法 |
| `SetClipboardText` | `void SetClipboardText(string text);` | 方法 |
| `GetClipboardText` | `string GetClipboardText();` | 方法 |
| `GetMouseMoveX` | `float GetMouseMoveX();` | 方法 |
| `GetMouseMoveY` | `float GetMouseMoveY();` | 方法 |
| `GetNormalizedMouseMoveX` | `float GetNormalizedMouseMoveX();` | 方法 |
| `GetNormalizedMouseMoveY` | `float GetNormalizedMouseMoveY();` | 方法 |
| `GetGyroX` | `float GetGyroX();` | 方法 |
| `GetGyroY` | `float GetGyroY();` | 方法 |
| `GetGyroZ` | `float GetGyroZ();` | 方法 |
| `GetMouseSensitivity` | `float GetMouseSensitivity();` | 方法 |
| `GetMouseDeltaZ` | `float GetMouseDeltaZ();` | 方法 |
| `UpdateKeyData` | `void UpdateKeyData(byte[]keyData);` | 方法 |
| `GetKeyState` | `Vec2 GetKeyState(InputKey key);` | 方法 |
| `IsKeyPressed` | `bool IsKeyPressed(InputKey key);` | 方法 |
| `IsKeyDown` | `bool IsKeyDown(InputKey key);` | 方法 |
| `IsKeyDownImmediate` | `bool IsKeyDownImmediate(InputKey key);` | 方法 |
| `IsKeyReleased` | `bool IsKeyReleased(InputKey key);` | 方法 |
| `GetResolution` | `Vec2 GetResolution();` | 方法 |
| `GetDesktopResolution` | `Vec2 GetDesktopResolution();` | 方法 |
| `SetCursorPosition` | `void SetCursorPosition(int x, int y);` | 方法 |
| `SetCursorFriction` | `void SetCursorFriction(float frictionValue);` | 方法 |
| `InputKey[]GetClickKeys` | `InputKey[]GetClickKeys();` | 方法 |
| `SetRumbleEffect` | `void SetRumbleEffect(float[]lowFrequencyLevels, float[]lowFrequencyDurations, int numLowFrequencyElements, float[]highFrequencyLevels, float[]highFrequencyDurations, int numHighFrequencyElements);` | 方法 |
| `SetTriggerFeedback` | `void SetTriggerFeedback(byte leftTriggerPosition, byte leftTriggerStrength, byte rightTriggerPosition, byte rightTriggerStrength);` | 方法 |
| `SetTriggerWeaponEffect` | `void SetTriggerWeaponEffect(byte leftStartPosition, byte leftEnd_position, byte leftStrength, byte rightStartPosition, byte rightEndPosition, byte rightStrength);` | 方法 |
| `SetTriggerVibration` | `void SetTriggerVibration(float[]leftTriggerAmplitudes, float[]leftTriggerFrequencies, float[]leftTriggerDurations, int numLeftTriggerElements, float[]rightTriggerAmplitudes, float[]rightTriggerFrequencies, float[]rightTriggerDurations, int numRightTriggerElements);` | 方法 |
| `SetLightbarColor` | `void SetLightbarColor(float red, float green, float blue);` | 方法 |

## 参见

- [↑ inputsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 EmptyInputContext](../EmptyInputContext)
- [同命名空间 GameAxisKey](../GameAxisKey)
- [同命名空间 GameKey](../GameKey)
- [同命名空间 GameKeyContext](../GameKeyContext)
