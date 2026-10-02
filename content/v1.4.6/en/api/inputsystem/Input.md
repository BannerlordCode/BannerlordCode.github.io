---
title: "Input"
description: "Input: a public class in TaleWorlds.InputSystem; 63 exposed members (38 methods, 23 properties, 1 fields). Source: TaleWorlds.InputSystem/Input.cs."
---
# Input

**Namespace:** `TaleWorlds.InputSystem`
**Module:** `TaleWorlds.InputSystem`
**Type:** `public static class Input`
**File:** `TaleWorlds.InputSystem/Input.cs`

## Overview

Input lives in the TaleWorlds.InputSystem module, source file TaleWorlds.InputSystem/Input.cs. It is a public class; the inheritance chain is Input. It exposes 63 public/protected members: 38 methods, 23 properties, 1 fields, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Input is a top-level type in TaleWorlds.InputSystem, namespace matching the module directory; inheritance chain Input. The surface is method-led (methods 38/63, properties 23/63), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.InputSystem/Input.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsPlaystation` | `public static bool IsPlaystation(this Input.ControllerTypes controllerType)` | method |
| `InputState` | `public static InputState InputState` | property |
| `DebugInput` | `public static IInputContext DebugInput` | property |
| `InputManager` | `public static IInputManager InputManager` | property |
| `Resolution` | `public static Vec2 Resolution` | property |
| `DesktopResolution` | `public static Vec2 DesktopResolution` | property |
| `Initialize` | `public static void Initialize(IInputManager inputManager, IInputContext debugInput)` | method |
| `UpdateKeyData` | `public static void UpdateKeyData(byte[]keyData)` | method |
| `GetMouseMoveX` | `public static float GetMouseMoveX()` | method |
| `GetMouseMoveY` | `public static float GetMouseMoveY()` | method |
| `GetNormalizedMouseMoveX` | `public static float GetNormalizedMouseMoveX()` | method |
| `GetNormalizedMouseMoveY` | `public static float GetNormalizedMouseMoveY()` | method |
| `GetGyroX` | `public static float GetGyroX()` | method |
| `GetGyroY` | `public static float GetGyroY()` | method |
| `GetGyroZ` | `public static float GetGyroZ()` | method |
| `GetKeyState` | `public static Vec2 GetKeyState(InputKey key)` | method |
| `IsKeyPressed` | `public static bool IsKeyPressed(InputKey key)` | method |
| `IsKeyDown` | `public static bool IsKeyDown(InputKey key)` | method |
| `IsKeyDownImmediate` | `public static bool IsKeyDownImmediate(InputKey key)` | method |
| `IsKeyReleased` | `public static bool IsKeyReleased(InputKey key)` | method |
| `IsControlOrShiftNotDown` | `public static bool IsControlOrShiftNotDown()` | method |
| `IsOnScreenKeyboardActive` | `public static bool IsOnScreenKeyboardActive` | property |
| `IsMouseActive` | `public static bool IsMouseActive` | property |
| `IsControllerConnected` | `public static bool IsControllerConnected` | property |
| `IsGamepadActive` | `public static bool IsGamepadActive` | property |
| `IsAnyTouchActive` | `public static bool IsAnyTouchActive` | property |
| `ControllerType` | `public static Input.ControllerTypes ControllerType` | property |
| `GetPrimaryControllerType` | `public static Input.ControllerTypes GetPrimaryControllerType()` | method |
| `GetFirstKeyPressedInRange` | `public static int GetFirstKeyPressedInRange(int startKeyNo)` | method |
| `GetFirstKeyDownInRange` | `public static int GetFirstKeyDownInRange(int startKeyNo)` | method |
| `GetFirstKeyReleasedInRange` | `public static int GetFirstKeyReleasedInRange(int startKeyNo)` | method |
| `PressKey` | `public static void PressKey(InputKey key)` | method |
| `ClearKeys` | `public static void ClearKeys()` | method |
| `GetVirtualKeyCode` | `public static int GetVirtualKeyCode(InputKey key)` | method |
| `IsDown` | `public static bool IsDown(this InputKey key)` | method |
| `IsPressed` | `public static bool IsPressed(this InputKey key)` | method |
| `IsReleased` | `public static bool IsReleased(this InputKey key)` | method |
| `SetClipboardText` | `public static void SetClipboardText(string text)` | method |
| `GetClipboardText` | `public static string GetClipboardText()` | method |
| `MouseMoveX` | `public static float MouseMoveX` | property |
| `MouseMoveY` | `public static float MouseMoveY` | property |
| `GyroX` | `public static float GyroX` | property |
| `GyroY` | `public static float GyroY` | property |
| `GyroZ` | `public static float GyroZ` | property |
| `MouseSensitivity` | `public static float MouseSensitivity` | property |
| `DeltaMouseScroll` | `public static float DeltaMouseScroll` | property |
| `MousePositionRanged` | `public static Vec2 MousePositionRanged` | property |
| `MousePositionPixel` | `public static Vec2 MousePositionPixel` | property |
| `Update` | `public static void Update()` | method |
| `IsMousePositionUpdated` | `public static bool IsMousePositionUpdated` | property |
| `IsMouseScrollChanged` | `public static bool IsMouseScrollChanged` | property |
| `IsControllerKey` | `public static bool IsControllerKey(InputKey key)` | method |
| `SetMousePosition` | `public static void SetMousePosition(int x, int y)` | method |
| `SetCursorFriction` | `public static void SetCursorFriction(float frictionValue)` | method |
| `InputKey[]GetClickKeys` | `public static InputKey[]GetClickKeys()` | method |
| `SetRumbleEffect` | `public static void SetRumbleEffect(float[]lowFrequencyLevels, float[]lowFrequencyDurations, int numLowFrequencyElements, float[]highFrequencyLevels, float[]highFrequencyDurations, int numHighFrequencyElements)` | method |
| `SetTriggerFeedback` | `public static void SetTriggerFeedback(byte leftTriggerPosition, byte leftTriggerStrength, byte rightTriggerPosition, byte rightTriggerStrength)` | method |
| `SetTriggerWeaponEffect` | `public static void SetTriggerWeaponEffect(byte leftStartPosition, byte leftEnd_position, byte leftStrength, byte rightStartPosition, byte rightEndPosition, byte rightStrength)` | method |
| `SetTriggerVibration` | `public static void SetTriggerVibration(float[]leftTriggerAmplitudes, float[]leftTriggerFrequencies, float[]leftTriggerDurations, int numLeftTriggerElements, float[]rightTriggerAmplitudes, float[]rightTriggerFrequencies, float[]rightTriggerDurations, int numRightTriggerElements)` | method |
| `SetLightbarColor` | `public static void SetLightbarColor(float red, float green, float blue)` | method |
| `NumberOfKeys` | `public const int NumberOfKeys` | field |
| `ControllerTypes` | `public enum ControllerTypes` | property |
| `ControllerTypes` | `public enum ControllerTypes` | nested type |

## See Also

- [↑ inputsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace EmptyInputContext](../EmptyInputContext)
- [same namespace GameAxisKey](../GameAxisKey)
- [same namespace GameKey](../GameKey)
- [same namespace GameKeyContext](../GameKeyContext)
